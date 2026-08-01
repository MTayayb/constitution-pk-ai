"""
Diagnostic script to test PDF readability using PyPDF2 and assess text vs scanned status.
"""

import os
import sys

def test_pdf():
    print("=" * 70)
    print(" [PDF READABILITY TEST] PyPDF2 Analysis")
    print("=" * 70)

    pdf_path = os.path.join("data", "constitution.pdf")

    if not os.path.exists(pdf_path):
        print(f"[ERROR] File '{pdf_path}' does not exist.")
        print("Please place the 'constitution.pdf' file inside the 'data/' directory.")
        return

    try:
        import PyPDF2
    except ImportError:
        print("Installing PyPDF2...")
        os.system("pip install PyPDF2")
        import PyPDF2

    try:
        reader = PyPDF2.PdfReader(pdf_path)
        num_pages = len(reader.pages)
        print(f"PDF Opened Successfully. Total Pages: {num_pages}\n")

        pages_to_test = min(10, num_pages)
        total_chars = 0

        for i in range(pages_to_test):
            page = reader.pages[i]
            text = page.extract_text() or ""
            char_count = len(text.strip())
            total_chars += char_count

            print(f"--- Page {i+1} ---")
            print(f"Characters extracted: {char_count}")
            preview = text.strip()[:300].replace("\n", " ")
            print(f"Preview: {preview if preview else '[EMPTY PAGE OR IMAGE]'}\n")

        avg_chars = total_chars / pages_to_test
        print("=" * 70)
        print(f"Average Characters Per Page (First {pages_to_test} pages): {avg_chars:.1f}")

        if avg_chars < 100:
            print("VERDICT: SCANNED PDF — needs OCR, PyPDF2 cannot read it")
        else:
            print("VERDICT: TEXT-BASED PDF — PyPDF2 can read it directly")
        print("=" * 70)

    except Exception as e:
        print(f"[ERROR] Failed to process PDF: {e}")

if __name__ == "__main__":
    test_pdf()
