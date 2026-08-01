"""
vector_store/builder.py
=======================
Builds the FAISS vector index from parsed Constitution articles.

Features:
- Dual-document indexing (full text + semantic summary)
- Batch embedding with exponential backoff retry
- Progress saving so rebuild can resume if interrupted
- Rate limit (429) handling
- Detailed progress logging
"""

import json
import logging
import os
import time
from typing import Optional

import google.generativeai as genai
from langchain_community.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain.schema import Document

logger = logging.getLogger(__name__)


# Article summaries — manually curated for the most critical articles
# These improve semantic search dramatically by giving FAISS a clean signal
ARTICLE_SUMMARIES = {
    "1":    "The name, territories and definition of the Islamic Republic of Pakistan",
    "2":    "Islam is the State Religion of Pakistan",
    "2A":   "The Objectives Resolution forms part of the Constitution",
    "6":    "High treason — abrogating or subverting the Constitution is punishable",
    "8":    "Laws inconsistent with fundamental rights are void",
    "9":    "Right to life and liberty — no person shall be deprived without law",
    "10":   "Safeguards as to arrest and detention of persons",
    "10A":  "Right to fair trial and due process",
    "11":   "Slavery, forced labour and human trafficking are prohibited",
    "14":   "Inviolability of dignity of man, privacy of home",
    "15":   "Freedom of movement — right to move freely throughout Pakistan",
    "16":   "Freedom of assembly — right to assemble peacefully",
    "17":   "Freedom of association — right to form associations",
    "19":   "Freedom of speech and expression and press freedom",
    "19A":  "Right to access information in matters of public importance",
    "20":   "Freedom to profess religion and manage religious institutions",
    "25":   "Equality of citizens — no discrimination on basis of sex",
    "25A":  "Right to education for children aged 5 to 16 years",
    "41":   "The President — election, qualifications and term of office",
    "42":   "Oath of the President of Pakistan",
    "46":   "Prime Minister to keep President informed of affairs of Federation",
    "47":   "Removal or impeachment of the President by Parliament",
    "48":   "President shall act on advice — powers and functions of the President",
    "51":   "Total seats and composition of the National Assembly — 336 seats total",
    "53":   "Speaker and Deputy Speaker of the National Assembly",
    "54":   "Sessions of the National Assembly — summoning and prorogation",
    "56":   "Joint sitting of both Houses of Parliament",
    "58":   "Dissolution of the National Assembly by the President",
    "59":   "Composition and seats of the Senate of Pakistan",
    "60":   "Chairman and Deputy Chairman of the Senate",
    "62":   "Qualifications for membership of Parliament",
    "63":   "Disqualifications for membership of Parliament",
    "65":   "Oath of members of Parliament",
    "70":   "Federal Legislative List — matters on which Parliament can legislate",
    "73":   "Procedure for money bills in the National Assembly",
    "77":   "Tax shall not be levied except by or under Act of Parliament",
    "78":   "Federal Consolidated Fund and Public Account",
    "80":   "Annual Budget Statement — federal budget presented to National Assembly",
    "91":   "The Cabinet — appointment and powers of the Prime Minister",
    "95":   "Vote of no-confidence against the Prime Minister",
    "96":   "Resignation and removal of the Prime Minister",
    "101":  "Appointment of Governor of a Province by the President",
    "105":  "Governor to act on advice of Chief Minister in provincial matters",
    "106":  "Composition and seats of Provincial Assemblies",
    "112":  "Dissolution of a Provincial Assembly by the Governor",
    "130":  "Appointment of Chief Minister and provincial cabinet",
    "140A": "Local government — establishment by each Province",
    "160":  "National Finance Commission — distribution of revenues",
    "175":  "Establishment of courts — Supreme Court, High Courts, Federal Shariat Court",
    "175A": "Appointment of judges to Supreme Court and High Courts by Judicial Commission",
    "176":  "Constitution of the Supreme Court of Pakistan",
    "177":  "Appointment of Chief Justice and judges of Supreme Court",
    "184":  "Original jurisdiction of Supreme Court — suo motu powers",
    "185":  "Appellate jurisdiction of the Supreme Court",
    "192":  "Constitution of High Courts in provinces",
    "193":  "Appointment of Chief Justice and judges of High Courts",
    "199":  "Jurisdiction of High Court — writ jurisdiction, habeas corpus",
    "203A": "Establishment of Federal Shariat Court",
    "203B": "Jurisdiction and powers of Federal Shariat Court",
    "209":  "Supreme Judicial Council — removal of judges",
    "213":  "Chief Election Commissioner — appointment and qualifications",
    "218":  "Election Commission of Pakistan — constitution and composition",
    "219":  "Duties of the Election Commission of Pakistan",
    "224":  "Time of elections and formation of caretaker government",
    "227":  "Provisions relating to the Holy Quran and Sunnah",
    "228":  "Constitution of the Council of Islamic Ideology",
    "232":  "Proclamation of Emergency on account of war or internal disturbance",
    "233":  "Period of Emergency — suspension of fundamental rights",
    "234":  "Emergency due to failure of constitutional government in a Province",
    "235":  "Financial emergency — President can issue proclamation",
    "238":  "Amendment of the Constitution — procedure",
    "239":  "Constitutional Amendment Bill — passage by Parliament",
    "243":  "Supreme command of armed forces vested in the President",
    "251":  "National language is Urdu — official language of Pakistan",
}


class VectorStoreBuilder:
    """
    Builds FAISS vector index from Constitution article chunks.
    Supports resumable builds and dual-document indexing.
    """

    def __init__(self, config):
        """
        Args:
            config: Config object
        """
        self.config = config
        genai.configure(api_key=config.GEMINI_API_KEY)

        self.embeddings = GoogleGenerativeAIEmbeddings(
            model=config.EMBEDDING_MODEL,
            google_api_key=config.GEMINI_API_KEY,
        )

        self.progress_file = os.path.join(
            config.FAISS_INDEX_PATH, "build_progress.json"
        )

    # ------------------------------------------------------------------
    # Main Build Method
    # ------------------------------------------------------------------

    def build(self, chunks: list[dict]) -> FAISS:
        """
        Build FAISS index from article chunks.
        Creates two documents per article: full text + summary.

        Args:
            chunks: list of article dicts with keys:
                    article_number, article_title, chapter, part,
                    page_number, chunk_id, text

        Returns:
            FAISS vectorstore
        """
        logger.info(f"[BUILDER] Starting build — {len(chunks)} articles")

        # Load progress if resuming
        completed_ids = self._load_progress()
        remaining = [c for c in chunks if c.get("chunk_id") not in completed_ids]
        logger.info(
            f"[BUILDER] {len(completed_ids)} already embedded, "
            f"{len(remaining)} remaining"
        )

        # Create all documents (full text + summaries)
        all_documents = self._create_documents(remaining)

        if not all_documents:
            logger.info("[BUILDER] Nothing to embed — loading existing index")
            return self._load_existing()

        # Embed in batches
        vectorstore = self._embed_in_batches(all_documents, completed_ids)

        # Save to disk
        os.makedirs(self.config.FAISS_INDEX_PATH, exist_ok=True)
        vectorstore.save_local(self.config.FAISS_INDEX_PATH)
        logger.info(f"[BUILDER] Index saved to {self.config.FAISS_INDEX_PATH}")

        # Clear progress file on success
        self._clear_progress()

        return vectorstore

    # ------------------------------------------------------------------
    # Document Creation
    # ------------------------------------------------------------------

    def _create_documents(self, chunks: list[dict]) -> list[Document]:
        """
        For each article chunk, create two LangChain Documents:
        1. Full text document
        2. Summary document (shorter, cleaner semantic signal)

        Args:
            chunks: list of article dicts

        Returns:
            List of Document objects (2x len of chunks)
        """
        documents: list[Document] = []

        for chunk in chunks:
            article_num = str(chunk.get("article_number", ""))
            article_title = chunk.get("article_title", "")
            text = chunk.get("text", "").strip()
            page_num = chunk.get("page_number", 0)
            chapter = chunk.get("chapter", "")
            part = chunk.get("part", "")
            chunk_id = chunk.get("chunk_id", f"article_{article_num}")

            if len(text) < self.config.MIN_ARTICLE_LENGTH:
                logger.debug(f"[BUILDER] Skipping Article {article_num} — too short")
                continue

            metadata = {
                "article_number": article_num,
                "article_title": article_title,
                "page_number": page_num,
                "chapter": chapter,
                "part": part,
                "chunk_id": chunk_id,
                "doc_type": "full_text",
            }

            # Document 1: Full article text
            documents.append(Document(
                page_content=text,
                metadata={**metadata, "doc_type": "full_text"},
            ))

            # Document 2: Semantic summary
            summary = self._build_summary_text(article_num, article_title, text)
            documents.append(Document(
                page_content=summary,
                metadata={**metadata, "doc_type": "summary"},
            ))

        logger.info(f"[BUILDER] Created {len(documents)} documents from {len(chunks)} articles")
        return documents

    def _build_summary_text(
        self,
        article_num: str,
        article_title: str,
        full_text: str,
    ) -> str:
        """
        Build a summary document for an article.
        Uses curated summary if available, otherwise generates from title + first 200 chars.

        Args:
            article_num: e.g. "58"
            article_title: e.g. "Dissolution of National Assembly"
            full_text: full article text

        Returns:
            Summary string
        """
        curated = ARTICLE_SUMMARIES.get(article_num, "")

        if curated:
            summary = (
                f"Article {article_num}: {article_title}\n"
                f"Summary: {curated}\n"
                f"Key topics: {article_title.lower()}"
            )
        else:
            # Use article title + first 200 chars as summary
            excerpt = full_text[:200].replace("\n", " ").strip()
            summary = (
                f"Article {article_num}: {article_title}\n"
                f"This article covers: {article_title}\n"
                f"Beginning: {excerpt}"
            )

        return summary

    # ------------------------------------------------------------------
    # Batch Embedding with Retry
    # ------------------------------------------------------------------

    def _embed_in_batches(
        self,
        documents: list[Document],
        already_done: set,
    ) -> FAISS:
        """
        Embed documents in batches with retry on 429/timeout.

        Args:
            documents: list of Documents to embed
            already_done: set of chunk_ids already in index

        Returns:
            FAISS vectorstore
        """
        batch_size = self.config.BATCH_SIZE
        total = len(documents)
        vectorstore: Optional[FAISS] = None

        # Load existing index if resuming
        if already_done:
            vectorstore = self._load_existing()

        for i in range(0, total, batch_size):
            batch = documents[i:i + batch_size]
            batch_num = (i // batch_size) + 1
            total_batches = (total + batch_size - 1) // batch_size

            print(f"Embedding batch {batch_num}/{total_batches} "
                  f"({i + 1}–{min(i + batch_size, total)}/{total} documents)...")

            # Retry logic
            success = False
            for attempt in range(1, self.config.MAX_RETRIES + 1):
                try:
                    if vectorstore is None:
                        vectorstore = FAISS.from_documents(batch, self.embeddings)
                    else:
                        vectorstore.add_documents(batch)

                    success = True
                    # Save progress after each successful batch
                    done_ids = {
                        doc.metadata.get("chunk_id", "")
                        for doc in documents[:i + batch_size]
                    }
                    self._save_progress(already_done | done_ids)
                    break

                except Exception as e:
                    error_str = str(e)
                    is_rate_limit = "429" in error_str or "RESOURCE_EXHAUSTED" in error_str
                    is_timeout = "timeout" in error_str.lower() or "connection" in error_str.lower()

                    if (is_rate_limit or is_timeout) and attempt < self.config.MAX_RETRIES:
                        wait = self.config.RETRY_DELAY * (2 ** (attempt - 1))
                        logger.warning(
                            f"[BUILDER] Batch {batch_num} attempt {attempt} failed "
                            f"({'rate limit' if is_rate_limit else 'timeout'}). "
                            f"Retrying in {wait}s..."
                        )
                        print(f"  Rate limit hit. Waiting {wait}s... (attempt {attempt}/{self.config.MAX_RETRIES})")
                        time.sleep(wait)
                    else:
                        logger.error(f"[BUILDER] Batch {batch_num} failed permanently: {e}")
                        raise

            if not success:
                raise RuntimeError(f"Failed to embed batch {batch_num} after {self.config.MAX_RETRIES} attempts")

        print(f"✅ Embedding complete — {total} documents indexed")
        return vectorstore

    # ------------------------------------------------------------------
    # Progress Persistence
    # ------------------------------------------------------------------

    def _save_progress(self, completed_ids: set) -> None:
        """Save set of completed chunk IDs to disk."""
        os.makedirs(os.path.dirname(self.progress_file), exist_ok=True)
        with open(self.progress_file, "w") as f:
            json.dump(list(completed_ids), f)

    def _load_progress(self) -> set:
        """Load completed chunk IDs from disk. Returns empty set if none."""
        if os.path.exists(self.progress_file):
            with open(self.progress_file) as f:
                return set(json.load(f))
        return set()

    def _clear_progress(self) -> None:
        """Delete progress file after successful build."""
        if os.path.exists(self.progress_file):
            os.remove(self.progress_file)

    def _load_existing(self) -> Optional[FAISS]:
        """Load existing FAISS index from disk if it exists."""
        if os.path.exists(self.config.FAISS_INDEX_PATH):
            vs = FAISS.load_local(
                self.config.FAISS_INDEX_PATH,
                self.embeddings,
                allow_dangerous_deserialization=True,
            )
            logger.info("[BUILDER] Loaded existing index for resuming")
            return vs
        return None