"""
OCR Reader module using pdf2image and pytesseract for scanned PDFs.
"""

import os
import sys

class OCRReader:
    def __init__(self, pdf_path: str, output_text_path: str = "data/constitution_text.txt"):
        self.pdf_path = pdf_path
        self.output_text_path = output_text_path

    def extract_pages(self):
        """
        Extracts text from scanned PDF page-by-page using pdf2image and pytesseract OCR.
        Saves result to constitution_text.txt for caching.
        """
        if os.path.exists(self.output_text_path):
            print(f"[OCR Cache] Found existing extracted text file at {self.output_text_path}")
            return self._load_cached_text()

        print(f"[OCR Reader] Starting OCR processing for {self.pdf_path}...")
        
        try:
            from pdf2image import convert_from_path
            import pytesseract
        except ImportError as e:
            print(f"[OCR Error] Missing dependencies: {e}")
            print("Please run: pip install pdf2image pytesseract pillow")
            print("Also ensure tesseract-ocr system binary is installed.")
            return []

        try:
            images = convert_from_path(self.pdf_path)
            total_pages = len(images)
            pages_data = []
            full_text_cache = []

            for i, image in enumerate(images):
                page_num = i + 1
                print(f"OCR processing page {page_num}/{total_pages}...")
                
                text = pytesseract.image_to_string(image)
                pages_data.append({
                    "page_number": page_num,
                    "text": text
                })

                full_text_cache.append(f"=== PAGE {page_num} ===\n{text}\n")

            # Save extracted OCR text to file as backup
            os.makedirs(os.path.dirname(self.output_text_path), exist_ok=True)
            with open(self.output_text_path, "w", encoding="utf-8") as f:
                f.write("\n".join(full_text_cache))
            
            print(f"[OCR Reader] OCR completed successfully! Cached text saved to {self.output_text_path}")
            return pages_data

        except Exception as e:
            print(f"[OCR Error] Failed to OCR PDF: {e}")
            return []

    def _load_cached_text(self):
        """Loads previously OCR'd text from cache file."""
        pages_data = []
        try:
            with open(self.output_text_path, "r", encoding="utf-8") as f:
                content = f.read()

            raw_pages = content.split("=== PAGE ")
            for p in raw_pages:
                if not p.strip():
                    continue
                lines = p.split("\n")
                header = lines[0].split(" ===")[0].strip()
                if header.isdigit():
                    page_num = int(header)
                    text = "\n".join(lines[1:])
                    pages_data.append({"page_number": page_num, "text": text})
            return pages_data
        except Exception as e:
            print(f"[OCR Error] Failed to load cached text: {e}")
            return []
