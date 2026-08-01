"""
Configuration module for Constitution of Pakistan AI Assistant RAG pipeline.
"""

import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    """Central configuration parameters for the RAG application."""

    # Gemini API Configuration
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    GEMINI_MODEL: str = os.getenv("GEMINI_MODEL", "gemini-3.6-flash")           # ← changed
    EMBEDDING_MODEL: str = os.getenv("EMBEDDING_MODEL", "models/gemini-embedding-001")  # ← changed

    # File and Vector Store Paths
    PDF_PATH: str = os.getenv("PDF_PATH", "data/constitution.pdf")
    FAISS_INDEX_PATH: str = os.getenv("FAISS_INDEX_PATH", "vector_store/faiss_index")
    METADATA_PATH: str = os.getenv("METADATA_PATH", "vector_store/metadata.json")
    PARSED_ARTICLES_PATH: str = os.getenv("PARSED_ARTICLES_PATH", "data/articles.json")  # ← added

    # Retrieval Configuration
    DEFAULT_TOP_K: int = 5
    DEFAULT_SEARCH_TYPE: str = "mmr"
    SCORE_THRESHOLD: float = 0.7
    MMR_FETCH_K: int = 50       # ← added
    MMR_LAMBDA_MULT: float = 0.7  # ← added

    # Memory Configuration
    MEMORY_WINDOW: int = 10

    # Embedding & Batching Parameters
    BATCH_SIZE: int = 20
    MAX_RETRIES: int = 5
    RETRY_DELAY: int = 2

    # Chunking Constraints
    MIN_ARTICLE_LENGTH: int = 50

    @classmethod
    def validate(cls) -> None:
        """Validate critical configuration settings."""
        if not cls.GEMINI_API_KEY:
            raise ValueError(
                "GEMINI_API_KEY is not set. "
                "Please add it to your .env file: GEMINI_API_KEY=your_key_here"
            )
        if not os.path.exists(cls.PDF_PATH):
            raise FileNotFoundError(
                f"Constitution PDF not found at '{cls.PDF_PATH}'. "
                f"Please place the PDF file there."
            )

    @classmethod
    def print_summary(cls) -> None:
        """Print configuration summary."""
        key_preview = cls.GEMINI_API_KEY[:8] + "..." if cls.GEMINI_API_KEY else "NOT SET"
        print(f"Model: {cls.GEMINI_MODEL} | Embedding: {cls.EMBEDDING_MODEL} | Key: {key_preview}")