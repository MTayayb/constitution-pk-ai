"""
PDF Reader module with PyPDF2 and automatic OCR fallback.
"""

import os
import sys
from .ocr_reader import OCRReader

class PDFReader:
    def __init__(self, pdf_path: str):
        self.pdf_path = pdf_path

    def extract_pages(self):
        """
        Attempts to read PDF using PyPDF2.
        If extracted text is less than 100 characters per page on average,
        automatically falls back to OCRReader.
        """
        if not os.path.exists(self.pdf_path):
            print(f"[PDFReader Error] File not found: {self.pdf_path}")
            return []

        try:
            import PyPDF2
        except ImportError:
            print("[PDFReader] PyPDF2 module not found. Attempting OCR fallback...")
            ocr = OCRReader(self.pdf_path)
            return ocr.extract_pages()

        print(f"[PDFReader] Extracting text from {self.pdf_path} using PyPDF2...")
        pages_data = []
        total_chars = 0

        try:
            reader = PyPDF2.PdfReader(self.pdf_path)
            num_pages = len(reader.pages)

            for i in range(num_pages):
                page_num = i + 1
                text = reader.pages[i].extract_text() or ""
                char_count = len(text.strip())
                total_chars += char_count

                pages_data.append({
                    "page_number": page_num,
                    "text": text
                })

            avg_chars = total_chars / max(num_pages, 1)
            print(f"[PDFReader] PyPDF2 extracted {num_pages} pages (Avg {avg_chars:.1f} chars/page).")

            if avg_chars < 100:
                print("[PDFReader Warning] Average character count < 100. Likely a SCANNED PDF!")
                print("[PDFReader] Automatically falling back to OCRReader...")
                ocr = OCRReader(self.pdf_path)
                return ocr.extract_pages()

            print("[PDFReader] Method used: PyPDF2 (Text-based PDF confirmed).")
            return pages_data

        except Exception as e:
            print(f"[PDFReader Error] PyPDF2 failed: {e}. Falling back to OCR...")
            ocr = OCRReader(self.pdf_path)
            return ocr.extract_pages()
