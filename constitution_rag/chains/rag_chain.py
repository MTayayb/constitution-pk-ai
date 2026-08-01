"""
chains/rag_chain.py
===================
Core RAG chain for Constitution of Pakistan AI Assistant.

Pipeline per query:
1. Check CONSTITUTIONAL_KNOWLEDGE_MAP for keyword matches
2. Extract article numbers from query text
3. Rewrite follow-up questions into standalone questions
4. Run hybrid retrieval (forced + direct + semantic)
5. Build prompt with system + context + history + question
6. Stream Gemini response token by token
7. Save exchange to memory
"""

import logging
import re
from typing import Generator, Optional

import google.generativeai as genai
from langchain.schema import Document

from prompts.templates import (
    SYSTEM_PROMPT,
    RAG_PROMPT,
    REWRITE_PROMPT,
    QUERY_EXPANSION_PROMPT,
    CONSTITUTIONAL_KNOWLEDGE_MAP,
)
from retriever.retriever import ConstitutionRetriever
from memory.chat_memory import ChatMemory

logger = logging.getLogger(__name__)


class ConstitutionRAGChain:
    """
    Main RAG chain that orchestrates retrieval, prompt building,
    and streaming generation for constitutional queries.
    """

    def __init__(self, config):
        """
        Initialize chain with retriever, memory, and Gemini client.

        Args:
            config: Config object (config.py)
        """
        self.config = config

        # Configure Gemini
        genai.configure(api_key=config.GEMINI_API_KEY)
        self.model = genai.GenerativeModel(
            model_name=config.GEMINI_MODEL,
            system_instruction=SYSTEM_PROMPT,
        )

        # Load retriever
        self.retriever = ConstitutionRetriever(config)

        # Initialize memory
        self.memory = ChatMemory(window_size=config.MEMORY_WINDOW)

        logger.info(f"[CHAIN] Initialized with model={config.GEMINI_MODEL}")

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    def ask(self, question: str) -> Generator[str, None, None]:
        """
        Main entry point. Takes a user question and yields response tokens.

        Args:
            question: raw user question string

        Yields:
            str: response tokens as they stream from Gemini
        """
        logger.info(f"[CHAIN] Question: {question!r}")

        try:
            # Step 1: Rewrite if follow-up
            standalone_question = self._rewrite_if_followup(question)

            # Step 2: Get forced articles from knowledge map
            forced_articles = self._keyword_lookup(standalone_question)

            # Step 3: Retrieve relevant articles
            docs = self.retriever.search(
                query=standalone_question,
                k=self.config.DEFAULT_TOP_K,
                search_type=self.config.DEFAULT_SEARCH_TYPE,
                forced_articles=forced_articles,
            )

            if not docs:
                logger.warning("[CHAIN] No documents retrieved — returning not-found")
                yield self._not_found_response()
                return

            # Step 4: Build context string
            context = self._format_context(docs)

            # Step 5: Get chat history
            history = self.memory.get_history()

            # Step 6: Build full prompt
            prompt = RAG_PROMPT.format(
                context=context,
                chat_history=history,
                question=standalone_question,
            )

            logger.info(f"[CHAIN] Sending prompt with {len(docs)} articles to Gemini")

            # Step 7: Stream response
            full_response = ""
            response = self.model.generate_content(prompt, stream=True)

            for chunk in response:
                if chunk.text:
                    full_response += chunk.text
                    yield chunk.text

            # Step 8: Save to memory
            self.memory.add_exchange(question, full_response)
            logger.info(f"[CHAIN] Response complete ({len(full_response)} chars)")

        except Exception as e:
            logger.error(f"[CHAIN] Error during ask(): {e}", exc_info=True)
            yield f"\n\nAn error occurred: {str(e)}"

    def get_retrieved_articles(self, question: str) -> list[dict]:
        """
        Returns metadata of articles that would be retrieved for a question.
        Used by the UI to display "Sources Used" section.

        Args:
            question: user question

        Returns:
            List of metadata dicts with article_number, article_title, page_number
        """
        forced = self._keyword_lookup(question)
        standalone = self._rewrite_if_followup(question)
        docs = self.retriever.search(
            query=standalone,
            k=self.config.DEFAULT_TOP_K,
            search_type=self.config.DEFAULT_SEARCH_TYPE,
            forced_articles=forced,
        )
        return [
            {
                "article_number": doc.metadata.get("article_number", "?"),
                "article_title": doc.metadata.get("article_title", ""),
                "page_number": doc.metadata.get("page_number", "?"),
                "chunk_id": doc.metadata.get("chunk_id", ""),
            }
            for doc in docs
        ]

    def reset_memory(self) -> None:
        """Clear conversation history."""
        self.memory.clear()
        logger.info("[CHAIN] Memory cleared")

    # ------------------------------------------------------------------
    # Keyword Knowledge Map
    # ------------------------------------------------------------------

    def _keyword_lookup(self, query: str) -> list[str]:
        """
        Check query against CONSTITUTIONAL_KNOWLEDGE_MAP.
        Returns list of article numbers to force-fetch.

        This is the primary fix for semantic search failures.
        "who can dissolve the assembly" → forces Article 58 into results.

        Args:
            query: question string (lowercase comparison)
        """
        query_lower = query.lower()
        matched: list[str] = []
        matched_keywords: list[str] = []

        for keyword, articles in CONSTITUTIONAL_KNOWLEDGE_MAP.items():
            if keyword in query_lower:
                matched.extend(articles)
                matched_keywords.append(keyword)

        # Deduplicate preserving order
        seen: set[str] = set()
        unique: list[str] = []
        for a in matched:
            if a not in seen:
                seen.add(a)
                unique.append(a)

        if unique:
            logger.info(
                f"[CHAIN] Keyword match: {matched_keywords} → "
                f"forcing Articles {unique}"
            )

        return unique

    # ------------------------------------------------------------------
    # Query Rewriting
    # ------------------------------------------------------------------

    def _rewrite_if_followup(self, question: str) -> str:
        """
        If there is chat history, rewrite the question as a standalone question.
        If no history, return question unchanged.

        Args:
            question: raw user question

        Returns:
            Standalone question string
        """
        history = self.memory.get_history()
        if not history.strip():
            # No history — question is already standalone
            return question

        try:
            prompt = REWRITE_PROMPT.format(
                chat_history=history,
                question=question,
            )

            # Use a non-streaming call for rewriting (fast, single response)
            rewrite_model = genai.GenerativeModel(model_name=self.config.GEMINI_MODEL)
            response = rewrite_model.generate_content(prompt)
            rewritten = response.text.strip()

            if rewritten and rewritten != question:
                logger.info(f"[CHAIN] Rewritten: {question!r} → {rewritten!r}")
                return rewritten

        except Exception as e:
            logger.warning(f"[CHAIN] Rewrite failed, using original: {e}")

        return question

    # ------------------------------------------------------------------
    # Context Formatting
    # ------------------------------------------------------------------

    def _format_context(self, docs: list[Document]) -> str:
        """
        Format retrieved documents into a readable context string
        for inclusion in the prompt.

        Args:
            docs: list of LangChain Document objects

        Returns:
            Formatted string with article headers and text
        """
        parts: list[str] = []

        for doc in docs:
            meta = doc.metadata
            article_num = meta.get("article_number", "?")
            article_title = meta.get("article_title", "")
            page_num = meta.get("page_number", "?")
            part = meta.get("part", "")
            chapter = meta.get("chapter", "")

            header_parts = [f"Article {article_num}"]
            if article_title:
                header_parts.append(f"— {article_title}")
            header_parts.append(f"(Page {page_num})")
            if part:
                header_parts.append(f"| {part}")
            if chapter:
                header_parts.append(f"| {chapter}")

            header = " ".join(header_parts)
            separator = "-" * len(header)

            parts.append(
                f"{header}\n{separator}\n{doc.page_content.strip()}\n"
            )

        return "\n\n".join(parts)

    # ------------------------------------------------------------------
    # Not Found Response
    # ------------------------------------------------------------------

    def _not_found_response(self) -> str:
        """Return the standard not-found message."""
        return (
            "This information is not found in the provided articles "
            "of the Constitution of Pakistan.\n\n"
            "**Roman Urdu Mein:**\n"
            "Yeh maloomat diye gaye Aeen-e-Pakistan ke Articles mein maujood nahi hai."
        )