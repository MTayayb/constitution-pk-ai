"""
Diagnostic script to test Article Parser regex extraction and inspect pages 30 to 45 for Article 51.
"""

import os
import sys

# Ensure constitution_rag is in path
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "constitution_rag")))

def test_parser():
    print("=" * 70)
    print(" [PARSER & REGEX DIAGNOSTIC] Article Parser & Boundary Analysis")
    print("=" * 70)

    pdf_path = os.path.join("data", "constitution.pdf")

    # 1. Inspect raw pages 30 to 45 if PDF exists
    if os.path.exists(pdf_path):
        try:
            import PyPDF2
            reader = PyPDF2.PdfReader(pdf_path)
            total_pages = len(reader.pages)
            print(f"Loaded PDF: {pdf_path} ({total_pages} total pages)\n")

            start_page = min(29, total_pages - 1)
            end_page = min(45, total_pages)

            print(f"--- Printing raw text from Pages {start_page+1} to {end_page} ---")
            for p in range(start_page, end_page):
                text = reader.pages[p].extract_text() or ""
                if "51" in text or "National Assembly" in text:
                    print(f"\n[PAGE {p+1} HIGHLIGHT - Article 51 or National Assembly reference found]")
                    lines = text.split("\n")
                    for line in lines:
                        if "51" in line or "National Assembly" in line or "336" in line or "general seats" in line.lower():
                            print(f"  >>> {line}")
        except Exception as e:
            print(f"Error reading PDF pages: {e}")

    # 2. Test Parser Module
    try:
        from parser.article_parser import ArticleParser
        from parser.pdf_reader import PDFReader

        parser = ArticleParser()
        print(f"\nRegex Pattern Used in ArticleParser:")
        print(f"  Pattern: {parser.article_pattern}")

        if os.path.exists(pdf_path):
            reader = PDFReader(pdf_path)
            pages_data = reader.extract_pages()
            articles = parser.parse_articles(pages_data)

            print(f"\nTotal Articles Extracted by Parser: {len(articles)}")
            art_numbers = [a.get("article_number") for a in articles]
            print(f"Detected Article Numbers: {', '.join(art_numbers[:50])} ...")

            art_51 = next((a for a in articles if a.get("article_number") == "51"), None)
            if art_51:
                print("\n" + "=" * 50)
                print("[SUCCESS] ARTICLE 51 EXTRACTED BY PARSER!")
                print(f"Title: {art_51.get('article_title')}")
                print(f"Page: {art_51.get('page_number')}")
                print(f"Full Text:\n{art_51.get('text')}")
                print("=" * 50)
            else:
                print("\n[FAIL] Article 51 WAS NOT DETECTED by ArticleParser.")
                print("Regex needs tuning to match the exact format in the PDF text.")

    except Exception as e:
        print(f"[ERROR] Failed during parser diagnostic: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    test_parser()
