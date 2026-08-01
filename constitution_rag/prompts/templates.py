"""
prompts/templates.py
====================
All Gemini prompt templates in one place.
No logic here — only strings.
"""


# ---------------------------------------------------------------------------
# SYSTEM PROMPT
# ---------------------------------------------------------------------------

SYSTEM_PROMPT = """You are a legal expert assistant specializing in the Constitution of Pakistan.
You answer questions STRICTLY and ONLY based on the constitutional articles provided to you.

RULES YOU MUST ALWAYS FOLLOW:
1. Only use information from the provided context articles — never your general knowledge.
2. Always cite the Article number (e.g., "According to Article 58...").
3. Always mention the page number (e.g., "Page 34").
4. If the answer is not in the provided articles, say EXACTLY:
   "This information is not found in the provided articles of the Constitution of Pakistan."
5. Never fabricate, invent, or assume any constitutional text.
6. Never answer from general knowledge — only from the given articles.
7. After your English answer, always provide a Roman Urdu explanation
   under the heading "Roman Urdu Mein:".
8. Keep your English answer clear, structured, and easy to understand.
9. Use bullet points for lists of powers, rights, or conditions.
10. Be precise with legal language while remaining accessible."""


# ---------------------------------------------------------------------------
# RAG PROMPT
# ---------------------------------------------------------------------------

RAG_PROMPT = """Use ONLY the following constitutional articles to answer the question.
Do NOT use any knowledge outside these articles.

======================================================
CONSTITUTIONAL ARTICLES (your only source):
======================================================
{context}

======================================================
CONVERSATION HISTORY:
======================================================
{chat_history}

======================================================
QUESTION:
======================================================
{question}

======================================================
INSTRUCTIONS:
======================================================
1. Answer clearly in English, citing Article numbers and page numbers.
2. Use bullet points if listing multiple points.
3. If the answer is not in the articles above, say:
   "This information is not found in the provided articles of the Constitution of Pakistan."
4. After the English answer, write "Roman Urdu Mein:" and explain in simple Roman Urdu.

YOUR ANSWER:"""


# ---------------------------------------------------------------------------
# QUERY REWRITE PROMPT
# ---------------------------------------------------------------------------

REWRITE_PROMPT = """You are a constitutional law expert assistant.

Given the conversation history below and a follow-up question,
rewrite the follow-up question as a COMPLETE standalone question
that contains ALL necessary context from the history.

The rewritten question must:
- Be fully self-contained (no pronouns like "he", "she", "it", "they" without referent)
- Include the specific constitutional subject being discussed
- Include relevant Pakistani constitutional terminology
- Be suitable for searching a constitutional document

EXAMPLES:
History: "Who appoints the Prime Minister?"
Follow-up: "Can he be removed?"
Rewritten: "Can the Prime Minister of Pakistan be removed from office?"

History: "What are the powers of the President?"
Follow-up: "What about dissolution?"
Rewritten: "What is the President of Pakistan's power to dissolve the National Assembly?"

History: "Tell me about Article 6"
Follow-up: "What is the punishment?"
Rewritten: "What is the punishment for high treason under Article 6 of the Constitution of Pakistan?"

======================================================
CONVERSATION HISTORY:
{chat_history}

FOLLOW-UP QUESTION:
{question}

REWRITTEN STANDALONE QUESTION (one line only):"""


# ---------------------------------------------------------------------------
# QUERY EXPANSION PROMPT
# ---------------------------------------------------------------------------

QUERY_EXPANSION_PROMPT = """You are a Pakistani constitutional law expert.
Expand the following question into a search query that will find
the exact constitutional article.

EXAMPLES:
Q: "Who can dissolve the National Assembly?"
Expanded: "dissolution National Assembly President Article 58 dissolve assembly power"

Q: "How is the Prime Minister removed?"
Expanded: "vote of no confidence Prime Minister removal Article 95 passed assembly"

Q: "What is high treason?"
Expanded: "high treason Article 6 abrogates subverts Constitution punishment"

Q: "How many Senate seats?"
Expanded: "Senate seats composition Article 59 total members provinces"

Q: "Who appoints Supreme Court judges?"
Expanded: "appointment judges Supreme Court Article 175A judicial commission Pakistan"

NOW EXPAND THIS:
Q: {question}
Expanded (one line — include likely article numbers and constitutional terms):"""


# ---------------------------------------------------------------------------
# CONSTITUTIONAL KNOWLEDGE MAP
# keyword (lowercase) -> list of article numbers to force-fetch
# Used when semantic search fails to find the right article
# ---------------------------------------------------------------------------

CONSTITUTIONAL_KNOWLEDGE_MAP = {
    # Dissolution
    "dissolve": ["58", "46"],
    "dissolution": ["58", "46"],

    # Prime Minister
    "prime minister appoint": ["91"],
    "appoint prime minister": ["91"],
    "prime minister remov": ["95"],
    "remove prime minister": ["95"],
    "prime minister resign": ["96"],
    "vote of no confidence": ["95"],
    "no confidence": ["95"],
    "pm appoint": ["91"],
    "pm remov": ["95"],

    # President
    "president appoint": ["41", "48"],
    "president power": ["48"],
    "president dissolve": ["58"],
    "president elect": ["41"],
    "impeach president": ["47"],
    "remove president": ["47"],
    "president oath": ["42"],

    # Parliament
    "senate seats": ["59"],
    "senate composition": ["59"],
    "national assembly seats": ["51"],
    "national assembly composition": ["51"],
    "parliament session": ["54"],
    "joint sitting": ["56"],
    "speaker": ["53"],
    "deputy speaker": ["53"],
    "chairman senate": ["60"],
    "money bill": ["73"],

    # Fundamental Rights
    "fundamental rights": ["8","9","10","10A","11","12","13","14",
                           "15","16","17","18","19","19A","20","21",
                           "22","23","24","25","25A","26","27","28"],
    "right to life": ["9"],
    "right to liberty": ["9"],
    "freedom of speech": ["19"],
    "freedom of expression": ["19"],
    "right to information": ["19A"],
    "right to education": ["25A"],
    "right to fair trial": ["10A"],
    "due process": ["10A"],
    "slavery": ["11"],
    "forced labour": ["11"],
    "torture": ["14"],
    "dignity": ["14"],
    "privacy": ["14"],
    "freedom of religion": ["20"],
    "property rights": ["23", "24"],
    "equality": ["25"],
    "discrimination": ["25", "26", "27"],
    "press freedom": ["19"],

    # Judiciary
    "supreme court": ["176", "177", "184", "185", "186", "187"],
    "high court": ["192", "193", "199"],
    "federal shariat court": ["203A", "203B", "203C"],
    "judicial commission": ["175A"],
    "chief justice": ["177", "175A"],
    "judge appoint": ["175A"],
    "judge remov": ["209"],
    "judicial review": ["184", "199"],
    "writ": ["199"],
    "habeas corpus": ["199"],
    "suo motu": ["184"],
    "original jurisdiction": ["184"],

    # Emergency
    "emergency": ["232", "233", "234", "235", "236"],
    "proclamation of emergency": ["232"],
    "martial law": ["232", "6"],
    "governor rule": ["234"],
    "financial emergency": ["235"],

    # High Treason
    "high treason": ["6"],
    "treason": ["6"],
    "abrogate constitution": ["6"],
    "subvert constitution": ["6"],

    # Elections
    "election commission": ["213", "218", "219", "220"],
    "caretaker": ["224"],
    "caretaker government": ["224"],
    "candidate qualif": ["62"],
    "candidate disqualif": ["63"],
    "disqualification": ["63"],

    # Federation & Provinces
    "province": ["1", "140", "140A"],
    "local government": ["140A"],
    "governor": ["101", "105"],
    "chief minister": ["130"],
    "provincial assembly": ["106", "112", "113"],

    # Finance
    "federal budget": ["80", "81", "82"],
    "nfc award": ["160"],
    "national finance commission": ["160"],

    # Armed Forces
    "army": ["243"],
    "armed forces": ["243", "244", "245"],
    "commander in chief": ["243"],

    # Amendment
    "amend constitution": ["238", "239"],
    "constitutional amendment": ["238", "239"],
    "amendment": ["238", "239"],

    # Citizenship
    "citizenship": ["62", "63"],
    "dual nationality": ["63"],

    # Language
    "national language": ["251"],
    "urdu": ["251"],
    "official language": ["251"],

    # Islamic Provisions
    "islamic": ["2", "2A", "31", "203A"],
    "quran": ["227", "228"],
    "sunnah": ["227"],
    "objectives resolution": ["2A"],
    "council of islamic ideology": ["228", "229", "230"],

    # Oath
    "oath of office": ["42", "48", "65", "91"],
    "oath": ["42", "48", "65"],
}