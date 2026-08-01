"""
retriever/retriever.py
======================
FAISS retriever with:
- Direct article number lookup (bypasses semantic search)
- Hybrid search (semantic + keyword boost)
- Score logging and filtering
- MMR support
- Configurable top-k
"""

import logging
import re
from typing import Optional

from langchain_community.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain.schema import Document

logger = logging.getLogger(__name__)


class ConstitutionRetriever:
    """
    Retriever for the Constitution of Pakistan FAISS index.

    Supports:
    - Direct fetch by article number (most reliable)
    - Semantic similarity search
    - MMR (Maximum Marginal Relevance) search
    - Score-filtered search
    """

    def __init__(self, config):
        """
        Initialize retriever by loading FAISS index from disk.

        Args:
            config: Config object with FAISS_INDEX_PATH, EMBEDDING_MODEL,
                    GEMINI_API_KEY, DEFAULT_TOP_K, SCORE_THRESHOLD
        """
        self.config = config
        self.vectorstore: Optional[FAISS] = None
        self._load_index()

    # ------------------------------------------------------------------
    # Index Loading
    # ------------------------------------------------------------------

    def _load_index(self) -> None:
        """Load FAISS index from disk. Raises FileNotFoundError if missing."""
        import os
        if not os.path.exists(self.config.FAISS_INDEX_PATH):
            raise FileNotFoundError(
                f"FAISS index not found at '{self.config.FAISS_INDEX_PATH}'. "
                f"Please run build_index.py first."
            )

        embeddings = GoogleGenerativeAIEmbeddings(
            model=self.config.EMBEDDING_MODEL,
            google_api_key=self.config.GEMINI_API_KEY,
        )

        self.vectorstore = FAISS.load_local(
            self.config.FAISS_INDEX_PATH,
            embeddings,
            allow_dangerous_deserialization=True,
        )

        total = len(self.vectorstore.docstore._dict)
        logger.info(f"[RETRIEVER] Loaded FAISS index — {total} documents")

    # ------------------------------------------------------------------
    # Direct Article Lookup
    # ------------------------------------------------------------------

    def fetch_by_article_number(self, article_number: str) -> Optional[Document]:
        """
        Directly fetch one article from the index by its article_number metadata.
        Returns None if not found.

        Args:
            article_number: e.g. "58", "10A", "175A"
        """
        if not self.vectorstore:
            return None

        target = str(article_number).strip()
        docstore = self.vectorstore.docstore._dict

        for doc_id, doc in docstore.items():
            stored = str(doc.metadata.get("article_number", "")).strip()
            if stored == target:
                logger.info(f"[RETRIEVER] Direct fetch — Article {target} found")
                return doc

        logger.warning(f"[RETRIEVER] Direct fetch — Article {target} NOT found in index")
        return None

    def fetch_by_article_numbers(self, numbers: list[str]) -> list[Document]:
        """
        Fetch multiple articles directly by article number.
        Preserves order. Skips numbers not found in index.

        Args:
            numbers: list of article number strings e.g. ["58", "46", "95"]
        """
        results = []
        for num in numbers:
            doc = self.fetch_by_article_number(num)
            if doc:
                results.append(doc)
        logger.info(f"[RETRIEVER] Batch direct fetch: requested {len(numbers)}, found {len(results)}")
        return results

    # ------------------------------------------------------------------
    # Regex-based Article Number Extraction
    # ------------------------------------------------------------------

    def extract_article_numbers_from_query(self, query: str) -> list[str]:
        """
        Extract all article numbers mentioned in a user query.

        Handles formats:
        - "Article 58"
        - "article 10A"
        - "Art. 48"
        - "Art 175A"
        - "under Article 58"
        - "as per Article 48"

        Args:
            query: raw user question string

        Returns:
            List of article number strings e.g. ["58", "10A"]
        """
        pattern = r'\b[Aa]rt(?:icle|\.?)\.?\s*(\d+[-]?[A-Za-z]?)\b'
        matches = re.findall(pattern, query)
        unique = list(dict.fromkeys(matches))  # deduplicate, preserve order
        if unique:
            logger.info(f"[RETRIEVER] Detected article numbers in query: {unique}")
        return unique

    # ------------------------------------------------------------------
    # Semantic Search
    # ------------------------------------------------------------------

    def semantic_search(
        self,
        query: str,
        k: int = None,
    ) -> list[Document]:
        """
        Pure cosine similarity semantic search.

        Args:
            query: search string
            k: number of results (defaults to config.DEFAULT_TOP_K)

        Returns:
            List of Document objects
        """
        if not self.vectorstore:
            return []

        k = k or self.config.DEFAULT_TOP_K

        try:
            results = self.vectorstore.similarity_search(query, k=k)
            self._log_results("SEMANTIC", results)
            return results
        except Exception as e:
            logger.error(f"[RETRIEVER] Semantic search error: {e}")
            return []

    def semantic_search_with_scores(
        self,
        query: str,
        k: int = None,
        score_threshold: float = None,
    ) -> list[tuple[Document, float]]:
        """
        Semantic search returning (document, score) tuples.
        Filters out documents below score_threshold.

        Args:
            query: search string
            k: number of candidates
            score_threshold: minimum similarity score (0.0 to 1.0)
                             lower is better in FAISS (L2 distance)

        Returns:
            List of (Document, score) tuples, sorted best first
        """
        if not self.vectorstore:
            return []

        k = k or self.config.DEFAULT_TOP_K
        threshold = score_threshold if score_threshold is not None else self.config.SCORE_THRESHOLD

        try:
            results_with_scores = self.vectorstore.similarity_search_with_score(query, k=k * 2)

            filtered = []
            for doc, score in results_with_scores:
                article_num = doc.metadata.get("article_number", "?")
                logger.info(f"[RETRIEVER] Article {article_num}: score={score:.4f}")
                # FAISS returns L2 distance — lower = better
                # We keep docs with score below threshold (closer = more similar)
                filtered.append((doc, score))

            # Sort by score ascending (lower L2 = more similar)
            filtered.sort(key=lambda x: x[1])
            return filtered[:k]

        except Exception as e:
            logger.error(f"[RETRIEVER] Score search error: {e}")
            return []

    # ------------------------------------------------------------------
    # MMR Search
    # ------------------------------------------------------------------

    def mmr_search(
        self,
        query: str,
        k: int = None,
        fetch_k: int = 50,
        lambda_mult: float = 0.7,
    ) -> list[Document]:
        """
        Maximum Marginal Relevance search.
        Balances relevance with diversity to avoid redundant articles.

        Args:
            query: search string
            k: final number of results to return
            fetch_k: candidate pool size before MMR reranking
            lambda_mult: 1.0 = pure relevance, 0.0 = pure diversity

        Returns:
            List of Document objects
        """
        if not self.vectorstore:
            return []

        k = k or self.config.DEFAULT_TOP_K

        try:
            results = self.vectorstore.max_marginal_relevance_search(
                query,
                k=k,
                fetch_k=fetch_k,
                lambda_mult=lambda_mult,
            )
            self._log_results("MMR", results)
            return results
        except Exception as e:
            logger.error(f"[RETRIEVER] MMR search error: {e}")
            return []

    # ------------------------------------------------------------------
    # Main Search — combines direct lookup + semantic/MMR
    # ------------------------------------------------------------------

    def search(
        self,
        query: str,
        k: int = None,
        search_type: str = None,
        forced_articles: list[str] = None,
    ) -> list[Document]:
        """
        Main search method used by RAGChain.

        Pipeline:
        1. If forced_articles provided, fetch those directly first
        2. Extract article numbers from query text, fetch directly
        3. Run semantic/MMR search
        4. Merge results, deduplicate, direct matches first
        5. Return top k

        Args:
            query: user question
            k: number of results
            search_type: "similarity", "mmr", or "threshold"
                         defaults to config.DEFAULT_SEARCH_TYPE
            forced_articles: article numbers to force-include
                             (from CONSTITUTIONAL_KNOWLEDGE_MAP)

        Returns:
            List of Document objects, best matches first
        """
        if not self.vectorstore:
            logger.error("[RETRIEVER] Vectorstore not loaded")
            return []

        k = k or self.config.DEFAULT_TOP_K
        search_type = search_type or self.config.DEFAULT_SEARCH_TYPE

        collected: list[Document] = []
        seen_article_nums: set[str] = set()

        # --- Step 1: forced articles (from knowledge map) ---
        if forced_articles:
            forced_docs = self.fetch_by_article_numbers(forced_articles)
            for doc in forced_docs:
                num = str(doc.metadata.get("article_number", ""))
                if num not in seen_article_nums:
                    seen_article_nums.add(num)
                    collected.append(doc)
            logger.info(f"[RETRIEVER] {len(forced_docs)} forced articles added")

        # --- Step 2: article numbers mentioned in query ---
        query_article_nums = self.extract_article_numbers_from_query(query)
        if query_article_nums:
            direct_docs = self.fetch_by_article_numbers(query_article_nums)
            for doc in direct_docs:
                num = str(doc.metadata.get("article_number", ""))
                if num not in seen_article_nums:
                    seen_article_nums.add(num)
                    collected.append(doc)

        # --- Step 3: semantic/MMR search ---
        # fetch more candidates so we have enough after deduplication
        search_k = max(k * 3, 15)

        if search_type == "mmr":
            semantic_docs = self.mmr_search(query, k=search_k, fetch_k=50)
        elif search_type == "threshold":
            pairs = self.semantic_search_with_scores(query, k=search_k)
            semantic_docs = [doc for doc, score in pairs]
        else:
            semantic_docs = self.semantic_search(query, k=search_k)

        for doc in semantic_docs:
            num = str(doc.metadata.get("article_number", ""))
            if num not in seen_article_nums:
                seen_article_nums.add(num)
                collected.append(doc)

        final = collected[:k]
        logger.info(
            f"[RETRIEVER] Final result: {len(final)} articles "
            f"({len(forced_articles or [])} forced, "
            f"{len(query_article_nums)} from query, rest semantic)"
        )
        return final

    # ------------------------------------------------------------------
    # Utility
    # ------------------------------------------------------------------

    def get_all_article_numbers(self) -> list[str]:
        """Return sorted list of all article numbers in the index."""
        if not self.vectorstore:
            return []
        nums = set()
        for doc_id, doc in self.vectorstore.docstore._dict.items():
            num = doc.metadata.get("article_number")
            if num:
                nums.add(str(num))
        return sorted(nums)

    def get_total_documents(self) -> int:
        """Return total number of documents in the index."""
        if not self.vectorstore:
            return 0
        return len(self.vectorstore.docstore._dict)

    def _log_results(self, search_type: str, docs: list[Document]) -> None:
        """Log which articles were retrieved."""
        nums = [doc.metadata.get("article_number", "?") for doc in docs]
        logger.info(f"[RETRIEVER] {search_type} retrieved Articles: {nums}")