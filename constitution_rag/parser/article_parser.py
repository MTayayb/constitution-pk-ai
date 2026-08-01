"""
Article Parser module for segmenting full constitutional text into structured article chunks.
"""

import re
from typing import List, Dict, Any

class ArticleParser:
    def __init__(self):
        # Comprehensive Regex to capture all constitutional article heading variants
        self.article_pattern = re.compile(
            r'^(?:ARTICLE|Article|art\.|Art\.)\s*([0-9]+[A-Za-z\-]*)\b[\.\:]?\s*(.*)$|'
            r'^([0-9]+[A-Za-z\-]*)\.\s+([A-Z].*)$',
            re.MULTILINE | re.IGNORECASE
        )
        self.part_pattern = re.compile(r'^(PART\s+[I|V|X|L|C|D|M]+.*)', re.IGNORECASE)
        self.chapter_pattern = re.compile(r'^(CHAPTER\s+[0-9]+.*|CHAPTER\s+[I|V|X]+.*)', re.IGNORECASE)

    def parse_articles(self, pages_data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """
        Parses pages data into structured list of article dictionaries with metadata.
        """
        print("[ArticleParser] Parsing pages into constitutional articles...")
        articles = []
        current_part = "Part I"
        current_chapter = "General"
        
        full_text = ""
        page_offsets = []

        # Combine text while tracking page boundaries
        for p in pages_data:
            start_idx = len(full_text)
            text = p.get("text", "")
            full_text += text + "\n"
            end_idx = len(full_text)
            page_offsets.append((p.get("page_number", 1), start_idx, end_idx))

        lines = full_text.split("\n")
        
        current_article = None
        current_lines = []

        for line_num, line in enumerate(lines):
            stripped = line.strip()
            if not stripped:
                continue

            # Track Part headings
            part_match = self.part_pattern.match(stripped)
            if part_match:
                current_part = part_match.group(1).strip()
                continue

            # Track Chapter headings
            chapter_match = self.chapter_pattern.match(stripped)
            if chapter_match:
                current_chapter = chapter_match.group(1).strip()
                continue

            # Check for Article Heading
            match = self.article_pattern.match(stripped)
            
            # Alternative fallback check: "51. National Assembly" or standalone "Article 51"
            is_article_heading = False
            art_num = ""
            art_title = ""

            if match:
                is_article_heading = True
                if match.group(1):
                    art_num = match.group(1).strip()
                    art_title = match.group(2).strip() if match.group(2) else ""
                else:
                    art_num = match.group(3).strip()
                    art_title = match.group(4).strip() if match.group(4) else ""
            elif re.match(r'^(?:Article\s+)?([0-9]{1,3}[A-Z]?)\b', stripped, re.IGNORECASE) and ("National Assembly" in stripped or "Seats" in stripped or len(stripped) < 80):
                # Loose match fallback for headlines like "51 National Assembly"
                art_match = re.match(r'^(?:Article\s+)?([0-9]{1,3}[A-Z]?)\b[\.\:\s]*(.*)', stripped, re.IGNORECASE)
                if art_match:
                    is_article_heading = True
                    art_num = art_match.group(1).strip()
                    art_title = art_match.group(2).strip()

            if is_article_heading and art_num:
                # Save preceding article if valid
                if current_article:
                    content_str = "\n".join(current_lines).strip()
                    if len(content_str) >= 50:
                        current_article["text"] = content_str
                        articles.append(current_article)

                # Determine page number for this line
                current_char_offset = sum(len(l) + 1 for l in lines[:line_num])
                matched_page = 1
                for p_num, p_start, p_end in page_offsets:
                    if p_start <= current_char_offset <= p_end:
                        matched_page = p_num
                        break

                current_article = {
                    "article_number": art_num,
                    "article_title": art_title or f"Article {art_num}",
                    "chapter": current_chapter,
                    "part": current_part,
                    "page_number": matched_page,
                    "chunk_id": f"article_{art_num.lower()}",
                    "text": ""
                }
                current_lines = [stripped]
            else:
                if current_article:
                    current_lines.append(stripped)

        # Save the final article
        if current_article:
            content_str = "\n".join(current_lines).strip()
            if len(content_str) >= 50:
                current_article["text"] = content_str
                articles.append(current_article)

        print(f"[ArticleParser] Successfully extracted {len(articles)} valid articles (>= 50 chars).")
        return articles
