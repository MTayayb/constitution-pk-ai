"""
Debug Check Script to inspect FAISS vector index contents and verify Article 51 presence.
"""

import os
import sys
import json

# Ensure constitution_rag is in path
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "constitution_rag")))

def debug_check():
    print("=" * 70)
    print(" [DEBUG CHECK] FAISS VECTOR INDEX AUDIT")
    print("=" * 70)

    index_dir = "vector_store/faiss_index"
    meta_path = "vector_store/metadata.json"

    # 1. Check if metadata file exists
    if os.path.exists(meta_path):
        try:
            with open(meta_path, "r") as f:
                meta = json.load(f)
                print(f"Metadata Summary: {json.dumps(meta, indent=2)}")
        except Exception as e:
            print(f"Could not read metadata.json: {e}")

    # 2. Check index files
    if not os.path.exists(index_dir):
        print(f"[STATUS] NOT FOUND — Index directory '{index_dir}' does not exist.")
        print("Please run 'python build_index.py' to generate the vector index.")
        return

    try:
        from retriever.retriever import ConstitutionRetriever
        from config import Config

        print("\nLoading vector index via ConstitutionRetriever...")
        retriever = ConstitutionRetriever(index_path=index_dir, top_k=300)
        
        # Extract all documents stored in FAISS
        docstore = retriever.vector_store.docstore
        index_to_docstore_id = retriever.vector_store.index_to_docstore_id

        total_docs = len(index_to_docstore_id)
        print(f"Total Chunks / Articles in Index: {total_docs}")

        found_articles = []
        art_51_doc = None

        for doc_id in index_to_docstore_id.values():
            doc = docstore.search(doc_id)
            if doc:
                art_num = str(doc.metadata.get("article_number", "Unknown")).strip()
                found_articles.append(art_num)

                if art_num.upper() in ["51", "ARTICLE 51", "ARTICLE-51"]:
                    art_51_doc = doc

        # Deduplicate & Sort
        unique_articles = sorted(list(set(found_articles)))
        print(f"\nArticles Found ({len(unique_articles)} unique):")
        print(", ".join(unique_articles))

        print("-" * 70)
        if art_51_doc:
            print("[VERDICT] Article 51: FOUND IN INDEX!")
            print(f"Metadata: {art_51_doc.metadata}")
            print("First 300 characters of Article 51 text:")
            print(art_51_doc.page_content[:300])
            print("...")
        else:
            print("[VERDICT] Article 51: NOT FOUND IN INDEX!")
            print("Reason: Parser failed to extract Article 51 boundary or chunk was missing.")

    except Exception as e:
        print(f"[ERROR] Failed during index audit: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    debug_check()
