"""
Helper utilities for logging, document formatting, and text processing.
"""

import logging
import re
from typing import List, Dict, Any


def setup_logger(name: str = "constitution_rag") -> logging.Logger:
    """Configure and return a standard logger for the RAG system."""
    logger = logging.getLogger(name)
    if not logger.handlers:
        logger.setLevel(logging.INFO)
        handler = logging.StreamHandler()
        formatter = logging.Formatter("[%(asctime)s] [%(levelname)s] [%(name)s]: %(message)s")
        handler.setFormatter(formatter)
        logger.addHandler(handler)
    return logger


def sanitize_text(text: str) -> str:
    """Clean extra whitespaces and illegal unicode characters from extracted text."""
    if not text:
        return ""
    # Normalize multiple whitespace characters
    text = re.sub(r"\s+", " ", text)
    # Remove null bytes or non-printable characters
    text = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]", "", text)
    return text.strip()


def format_docs(docs: List[Any]) -> str:
    """Format list of retrieved LangChain document objects into a cohesive prompt context string."""
    formatted_chunks = []
    for idx, doc in enumerate(docs, 1):
        metadata = getattr(doc, "metadata", {})
        article_num = metadata.get("article_number", "Unknown")
        article_title = metadata.get("article_title", "")
        page_num = metadata.get("page_number", "N/A")
        chapter = metadata.get("chapter", "")
        part = metadata.get("part", "")
        content = getattr(doc, "page_content", str(doc))

        header = f"--- DOCUMENT CHUNK {idx} ---"
        citation_info = f"Article: {article_num}"
        if article_title:
            citation_info += f" ({article_title})"
        if chapter:
            citation_info += f" | {chapter}"
        if part:
            citation_info += f" | {part}"
        citation_info += f" | Page: {page_num}"

        chunk_str = f"{header}\n{citation_info}\nText:\n{content}\n"
        formatted_chunks.append(chunk_str)

    return "\n".join(formatted_chunks)
