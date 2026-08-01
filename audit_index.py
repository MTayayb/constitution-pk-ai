"""
Audit Index Script to verify presence of critical constitutional articles in FAISS vector store.
"""

import os
import sys
import json

# Ensure constitution_rag is in path
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "constitution_rag")))

def audit_index():
    print("=" * 70)
    print(" [INDEX AUDIT] Checking Critical Constitutional Articles in Index")
    print("=" * 70)

    index_dir = "vector_store/faiss_index"
    critical_articles = ["48", "51", "58", "59", "62", "63", "91", "95", "106", "140A", "175A", "184", "232"]

    if not os.path.exists(index_dir):
        print(f"[STATUS] Index directory '{index_dir}' not found.")
        print("Please run build_index.py first.")
        return

    try:
        from retriever.retriever import ConstitutionRetriever
        retriever = ConstitutionRetriever(index_path=index_dir)
        
        docstore = retriever.vector_store.docstore
        index_to_docstore_id = retriever.vector_store.index_to_docstore_id

        found_map = {}
        for doc_id in index_to_docstore_id.values():
            doc = docstore.search(doc_id)
            if doc:
                art_num = str(doc.metadata.get("article_number", "")).upper().strip()
                if art_num not in found_map:
                    found_map[art_num] = doc

        print("\n--- CRITICAL ARTICLES AUDIT ---")
        missing_count = 0
        for art in critical_articles:
            art_key = art.upper().strip()
            if art_key in found_map:
                doc = found_map[art_key]
                preview = doc.page_content.replace("\n", " ")[:100]
                print(f"[FOUND] Article {art}: \"{preview}...\"")
            else:
                print(f"[MISSING] Article {art}: NOT FOUND IN INDEX!")
                missing_count += 1

        print("\n" + "=" * 70)
        print(f"Total Unique Articles Indexed: {len(found_map)}")
        print(f"All Indexed Article Numbers: {', '.join(sorted(list(found_map.keys())))}")
        print("=" * 70)
        
        if missing_count == 0:
            print("[AUDIT PASSED] All critical articles are present in index.")
        else:
            print(f"[AUDIT WARNING] {missing_count} critical articles missing from index.")

    except Exception as e:
        print(f"[ERROR] Failed during audit: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    audit_index()
