"""
Build Index Script — Generates Gemini summaries, constructs dual-document FAISS vector store,
and verifies retrieval with 5 sanity test queries.
"""

import os
import sys
import time
import json

# Ensure path resolution
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "constitution_rag")))

from constitution_rag.vector_store.builder import IndexBuilder
from constitution_rag.retriever.retriever import ConstitutionRetriever
from constitution_rag.data_fallback import GET_FULL_CONSTITUTION_DATASET

def load_articles():
    """Loads articles from JSON, fallback dataset, or PDF parser."""
    data_path = "constitution_rag/data/parsed_articles.json"
    if os.path.exists(data_path):
        try:
            with open(data_path, "r") as f:
                articles = json.load(f)
                if articles:
                    print(f"[BuildIndex] Loaded {len(articles)} articles from '{data_path}'.")
                    return articles
        except Exception as e:
            print(f"[BuildIndex Warning] Could not read parsed_articles.json: {e}")

    print("[BuildIndex] Using comprehensive fallback constitutional dataset...")
    return GET_FULL_CONSTITUTION_DATASET()

def run_test_queries(retriever: ConstitutionRetriever):
    """Runs 5 sanity test queries and prints retrieved articles and scores."""
    test_queries = [
        "Who can dissolve the National Assembly?",
        "How many Senate seats are there?",
        "What are powers of President?",
        "How is PM removed from office?",
        "What are fundamental rights?"
    ]

    print("\n" + "=" * 70)
    print(" [SANITY CHECK] Running 5 Test Queries After Index Build")
    print("=" * 70)

    for i, q in enumerate(test_queries, 1):
        print(f"\n--- TEST QUERY {i}: \"{q}\" ---")
        scored_results = retriever.search_with_scores(q, k=5, score_threshold=0.2)
        
        if not scored_results:
            print("[RESULT] No articles retrieved above threshold.")
            # Fallback direct lookup print
            direct = retriever.direct_article_lookup(q)
            if direct:
                print(f"[RESULT Direct Match] Found Articles: {[d.metadata.get('article_number') for d in direct]}")
        else:
            for doc, score in scored_results:
                art_num = doc.metadata.get("article_number", "N/A")
                art_title = doc.metadata.get("article_title", "Untitled")
                is_sum = "Summary Doc" if doc.metadata.get("is_summary") else "Full Doc"
                print(f"  -> Article {art_num} ({art_title}) | [{is_sum}] | Score: {score}")

def main():
    print("=" * 70)
    print(" CONSTITUTION RAG — INDEX BUILDER")
    print("=" * 70)

    articles = load_articles()
    
    output_dir = "vector_store/faiss_index"
    builder = IndexBuilder(output_dir=output_dir)
    vector_store = builder.build_index(articles)

    if vector_store:
        retriever = ConstitutionRetriever(index_path=output_dir)
        run_test_queries(retriever)
        print("\n" + "=" * 70)
        print(" [SUCCESS] FAISS Index Building and Sanity Test Complete!")
        print("=" * 70)

if __name__ == "__main__":
    main()
