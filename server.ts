import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { CONSTITUTION_ARTICLES, ConstitutionArticle } from "./src/data/constitution.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// ---------------------------------------------------------------------------
// Gemini Client
// ---------------------------------------------------------------------------

const apiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: { headers: { "User-Agent": "aistudio-build" } },
});

// ---------------------------------------------------------------------------
// CONSTITUTIONAL KNOWLEDGE MAP
// keyword (lowercase) -> article numbers to force-include in results
// This is the primary fix for semantic search failures.
// "who can dissolve" -> forces Article 58 even if scoring misses it.
// ---------------------------------------------------------------------------

const KNOWLEDGE_MAP: Record<string, string[]> = {
  // Dissolution
  "dissolve": ["58", "46"],
  "dissolution": ["58", "46"],

  // Prime Minister
  "prime minister appoint": ["91"],
  "appoint prime minister": ["91"],
  "prime minister remov": ["95"],
  "remove prime minister": ["95"],
  "vote of no confidence": ["95"],
  "no confidence": ["95"],
  "prime minister resign": ["96"],

  // President
  "president power": ["48"],
  "president powers": ["48", "41"],
  "presidential powers": ["48", "41"],
  "powers of president": ["48", "41"],
  "what can president do": ["48", "41"],
  "president authority": ["48", "41"],
  "his powers": ["48", "41"],
  "her powers": ["48", "41"],
  "president dissolve": ["58"],
  "president elect": ["41"],
  "impeach president": ["47"],
  "remove president": ["47"],
  "president appoint": ["41", "48"],

  // Parliament
  "senate seats": ["59"],
  "senate composition": ["59"],
  "national assembly seats": ["51"],
  "national assembly composition": ["51"],
  "parliament session": ["54"],
  "joint sitting": ["56"],
  "speaker": ["53"],
  "chairman senate": ["60"],
  "money bill": ["73"],

  // Fundamental Rights
  "fundamental rights": ["8","9","10","10A","11","12","13","14",
                         "15","16","17","18","19","19A","20","21",
                         "22","23","24","25","25A","26","27","28"],
  "right to life": ["9"],
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

  // Judiciary
  "supreme court jurisdiction": ["184", "185"],
  "high court": ["192", "193", "199"],
  "federal shariat court": ["203A", "203B"],
  "judicial commission": ["175A"],
  "chief justice": ["177", "175A"],
  "judge appoint": ["175A"],
  "judge remov": ["209"],
  "writ": ["199"],
  "habeas corpus": ["199"],
  "suo motu": ["184"],

  // Emergency
  "emergency": ["232", "233", "234", "235", "236"],
  "proclamation of emergency": ["232"],
  "martial law": ["232", "6"],
  "governor rule": ["234"],
  "financial emergency": ["235"],

  // High Treason
  "high treason": ["6"],
  "treason": ["6"],
  "abrogate constitution": ["6"],
  "subvert constitution": ["6"],

  // Elections
  "election commission": ["213", "218", "219", "220"],
  "caretaker": ["224"],
  "caretaker government": ["224"],
  "candidate qualif": ["62"],
  "candidate disqualif": ["63"],
  "disqualification": ["63"],

  // Provinces
  "local government": ["140A"],
  "governor": ["101", "105"],
  "chief minister": ["130"],
  "provincial assembly": ["106", "112", "113"],

  // Finance
  "nfc award": ["160"],
  "national finance commission": ["160"],
  "federal budget": ["80", "81", "82"],

  // Armed Forces
  "army": ["243"],
  "armed forces": ["243", "244", "245"],
  "commander in chief": ["243"],

  // Amendment
  "amend constitution": ["238", "239"],
  "constitutional amendment": ["238", "239"],
  "amendment": ["238", "239"],

  // Language
  "national language": ["251"],
  "official language": ["251"],

  // Islamic Provisions
  "council of islamic ideology": ["228", "229", "230"],
  "objectives resolution": ["2A"],
  "quran": ["227", "228"],
  "sunnah": ["227"],

  // Citizenship
  "dual nationality": ["63"],
};

// ---------------------------------------------------------------------------
// Keyword Lookup — returns article numbers forced by knowledge map
// ---------------------------------------------------------------------------

function keywordLookup(query: string): string[] {
  const q = query.toLowerCase();
  const matched: string[] = [];
  const seen = new Set<string>();

  for (const [keyword, articles] of Object.entries(KNOWLEDGE_MAP)) {
    if (q.includes(keyword)) {
      for (const a of articles) {
        if (!seen.has(a)) {
          seen.add(a);
          matched.push(a);
        }
      }
    }
  }

  if (matched.length > 0) {
    console.log(`[KEYWORD MAP] matched articles: ${matched.join(", ")}`);
  }
  return matched;
}

// ---------------------------------------------------------------------------
// Article Number Extraction — detects "Article 58", "Art. 48" in query
// ---------------------------------------------------------------------------

function extractArticleNumbers(query: string): string[] {
  const pattern = /\b(?:article|art\.?)\s*(\d{1,3}[a-z\-]*)\b/gi;
  const matches: string[] = [];
  const seen = new Set<string>();
  let match;

  while ((match = pattern.exec(query)) !== null) {
    const num = match[1].toUpperCase();
    if (!seen.has(num)) {
      seen.add(num);
      matches.push(num);
    }
  }

  if (matches.length > 0) {
    console.log(`[QUERY PARSE] detected article numbers: ${matches.join(", ")}`);
  }
  return matches;
}

// ---------------------------------------------------------------------------
// Scoring — semantic relevance score for one article
// ---------------------------------------------------------------------------

function scoreArticle(query: string, article: ConstitutionArticle): number {
  const q = query.toLowerCase();
  const artNum = article.article_number.toLowerCase();
  const fullText = (
    article.article_number + " " +
    article.article_title + " " +
    article.text + " " +
    (article.summary || "")
  ).toLowerCase();

  // Exact article number in query: instant top score
  const numMatch = q.match(/\b(?:article|art\.?)\s*([0-9]{1,3}[a-z\-]*)\b/i);
  if (numMatch && numMatch[1].toLowerCase() === artNum) {
    return 1000.0;
  }

  // Article 51 special boost for seat/member queries
  if (artNum === "51" &&
    (q.includes("national assembly") || q.includes("seats") ||
     q.includes("members") || q.includes("336"))) {
    return 500.0;
  }

  // Article 59 special boost for senate queries
  if (artNum === "59" &&
    (q.includes("senate") || q.includes("senator") || q.includes("upper house"))) {
    return 500.0;
  }

  // Article 58 special boost for dissolution queries
  if (artNum === "58" &&
    (q.includes("dissolve") || q.includes("dissolution") || q.includes("disband"))) {
    return 500.0;
  }

  // Article 6 special boost for treason queries
  if (artNum === "6" &&
    (q.includes("treason") || q.includes("abrogate") || q.includes("subvert"))) {
    return 500.0;
  }

  // Token matching
  const tokens = q.split(/\W+/).filter(t => t.length > 2);
  let score = 0;

  for (const token of tokens) {
    if (fullText.includes(token)) score += 1.5;
    if (artNum === token) score += 10.0;
    if (article.article_title.toLowerCase().includes(token)) score += 3.5;
    if ((article.summary || "").toLowerCase().includes(token)) score += 2.0;
  }

  return score;
}

// ---------------------------------------------------------------------------
// Retriever — main function that combines all strategies
// ---------------------------------------------------------------------------

function retrieveArticles(
  query: string,
  topK: number = 5,
  mode: string = "mmr",
  forcedNumbers: string[] = [],
): ConstitutionArticle[] {
  const seen = new Set<string>();
  const result: ConstitutionArticle[] = [];

  // Helper: add article by number if not already added
  const addByNumber = (num: string): boolean => {
    const upperNum = num.toUpperCase();
    if (seen.has(upperNum)) return false;

    const found = CONSTITUTION_ARTICLES.find(
      a => a.article_number.toUpperCase() === upperNum ||
           a.article_number.toLowerCase() === num.toLowerCase()
    );
    if (found) {
      seen.add(upperNum);
      result.push(found);
      console.log(`[RETRIEVER] Direct fetch: Article ${num}`);
      return true;
    }
    console.warn(`[RETRIEVER] Article ${num} NOT found in CONSTITUTION_ARTICLES`);
    return false;
  };

  // Step 1: Force-add articles from knowledge map
  for (const num of forcedNumbers) {
    addByNumber(num);
  }

  // Step 2: Force-add articles explicitly mentioned in query
  const queryArticleNums = extractArticleNumbers(query);
  for (const num of queryArticleNums) {
    addByNumber(num);
  }

  // Step 3: Semantic scoring for remaining slots
  const remaining = topK - result.length;
  if (remaining > 0) {
    const scored = CONSTITUTION_ARTICLES
      .filter(a => !seen.has(a.article_number.toUpperCase()))
      .map(a => ({ article: a, score: scoreArticle(query, a) }))
      .sort((a, b) => b.score - a.score);

    console.log(
      `[RETRIEVER] Top semantic scores: ` +
      scored.slice(0, 5).map(s =>
        `Art ${s.article.article_number}=${s.score.toFixed(1)}`
      ).join(", ")
    );

    if (mode === "mmr") {
      // MMR: take top scored but skip redundant ones
      let added = 0;
      for (const { article, score } of scored) {
        if (added >= remaining) break;
        if (score > 0) {
          seen.add(article.article_number.toUpperCase());
          result.push(article);
          added++;
        }
      }
    } else {
      // Similarity: strict top-k
      for (const { article, score } of scored.slice(0, remaining)) {
        if (score > 0) {
          result.push(article);
        }
      }
    }
  }

  // Fallback: if result is empty, return first topK articles
  if (result.length === 0) {
    console.warn("[RETRIEVER] No articles matched — returning fallback");
    return CONSTITUTION_ARTICLES.slice(0, topK);
  }

  console.log(
    `[RETRIEVER] Final: ${result.length} articles — ` +
    result.map(a => `Art ${a.article_number}`).join(", ")
  );

  return result;
}

// ---------------------------------------------------------------------------
// Retry Wrapper — handles 429, timeout, connection reset
// ---------------------------------------------------------------------------

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 4,
  baseDelayMs: number = 5000,
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      const msg = String(error?.message || "");
      const status = error?.status ?? error?.code;
      const isRateLimit = status === 429 || msg.includes("RESOURCE_EXHAUSTED") || msg.includes("429");
      const isNetwork = msg.toLowerCase().includes("timeout") ||
                        msg.toLowerCase().includes("connection") ||
                        msg.toLowerCase().includes("econnreset");

      if ((isRateLimit || isNetwork) && attempt < maxRetries) {
        const waitMs = baseDelayMs * Math.pow(2, attempt - 1); // 5s,10s,20s,40s
        console.warn(
          `[RETRY] Attempt ${attempt}/${maxRetries} failed ` +
          `(${isRateLimit ? "rate limit" : "network"}). ` +
          `Waiting ${waitMs / 1000}s...`
        );
        await sleep(waitMs);
      } else {
        throw error;
      }
    }
  }
  throw new Error("Max retries exceeded");
}

// ---------------------------------------------------------------------------
// System Prompt
// ---------------------------------------------------------------------------

const SYSTEM_PROMPT = `You are a legal expert assistant specializing in the Constitution of Pakistan (updated November 2025).
You answer questions STRICTLY based on the provided constitutional articles.

Rules you must ALWAYS follow:
1. Only use information from the provided context articles — never your general knowledge.
2. Always cite the Article number (e.g., "According to Article 58...").
3. Always mention the page number (e.g., "Page 34").
4. If the answer is not in the provided articles, say EXACTLY:
   "This information is not found in the provided articles of the Constitution of Pakistan."
5. Never fabricate, invent, or assume any constitutional text.
6. Never answer from general knowledge — only from the given articles.
7. After your English answer, always provide a Roman Urdu explanation under the heading "Roman Urdu Mein:".
8. Use bullet points for lists of powers, rights, or conditions.`;

// ---------------------------------------------------------------------------
// API Routes
// ---------------------------------------------------------------------------

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    articles_indexed: CONSTITUTION_ARTICLES.length,
    timestamp: new Date().toISOString(),
  });
});

// Search endpoint (no Gemini — just retrieval)
app.post("/api/constitution/search", (req, res) => {
  const { query, top_k = 5, mode = "mmr" } = req.body;
  if (!query) return res.status(400).json({ error: "Query is required" });

  const forced = keywordLookup(query);
  const articles = retrieveArticles(query, top_k, mode, forced);

  res.json({ query, count: articles.length, articles });
});

// Main streaming chat endpoint
app.post("/api/constitution/chat-stream", async (req, res) => {
  const { question, history = [], top_k = 5, mode = "mmr" } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  // SSE headers
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  const sendEvent = (data: object) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  try {
    // ---- Step 1: Rewrite follow-up question ----
    let standaloneQuestion = question;

    if (history.length > 0 && apiKey) {
      try {
        const historyText = history
          .map((h: any) => `${h.role === "user" ? "Human" : "Assistant"}: ${h.content}`)
          .join("\n");

        const rewritePrompt = `You are a Pakistani constitutional law expert.

Given the conversation history and a follow-up question, rewrite the follow-up as a COMPLETE standalone question.

Rules:
- Replace ALL pronouns (he, she, his, her, it, they, them) with the actual subject from history
- Include "of Pakistan" or "under the Constitution of Pakistan" where relevant
- Include the specific constitutional role or article if mentioned in history
- Output ONE line only — the rewritten question, nothing else

Examples:
History: "Who is the President of Pakistan?"
Follow-up: "What are his powers?"
Rewritten: "What are the constitutional powers of the President of Pakistan?"

History: "How is the Prime Minister appointed?"
Follow-up: "Can he be removed?"
Rewritten: "Can the Prime Minister of Pakistan be removed from office?"

History: "What is Article 6?"
Follow-up: "What is the punishment?"
Rewritten: "What is the punishment for high treason under Article 6 of the Constitution of Pakistan?"

History: "What are fundamental rights?"
Follow-up: "Which one protects freedom of speech?"
Rewritten: "Which fundamental right in the Constitution of Pakistan protects freedom of speech?"

NOW REWRITE:
Conversation History:
${historyText}

Follow-up Question: ${question}

Rewritten standalone question:`;

        const rewriteResp = await withRetry(() =>
          ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: rewritePrompt,
          })
        );

        const rewritten = rewriteResp.text?.trim();
        if (rewritten && rewritten.length > 5 && rewritten !== question) {
          standaloneQuestion = rewritten;
          console.log(`[REWRITE] "${question}" → "${standaloneQuestion}"`);
        }
      } catch (err) {
        console.warn("[REWRITE] Failed, using original:", err);
      }
    }

    // ---- Step 2: Keyword map lookup ----
    const forcedArticles = keywordLookup(standaloneQuestion);

    // ---- Step 3: Retrieve articles ----
    const docs = retrieveArticles(standaloneQuestion, top_k, mode, forcedArticles);

    // ---- Step 4: Send metadata to frontend ----
    const sourcesMeta = docs.map(d => ({
      article_number: d.article_number,
      article_title: d.article_title,
      chapter: d.chapter || "",
      part: d.part || "",
      page_number: d.page_number,
      summary: d.summary || "",
    }));

    sendEvent({ type: "meta", standaloneQuestion, sources: sourcesMeta });

    // ---- Step 5: Build context ----
    const contextStr = docs.map(doc =>
      `--- ARTICLE ${doc.article_number}: ${doc.article_title} ---\n` +
      `Part: ${doc.part || "N/A"} | Chapter: ${doc.chapter || "N/A"} | Page: ${doc.page_number}\n` +
      `${doc.text}`
    ).join("\n\n");

    const fullPrompt =
      `Use ONLY the following constitutional articles to answer the question.\n` +
      `Do NOT use any knowledge outside these articles.\n\n` +
      `==============================\n` +
      `CONSTITUTIONAL ARTICLES:\n` +
      `==============================\n` +
      `${contextStr}\n\n` +
      `==============================\n` +
      `QUESTION: ${standaloneQuestion}\n` +
      `==============================\n\n` +
      `INSTRUCTIONS & FORMATTING:\n` +
      `- Provide a clear, well-structured English answer citing exact Article numbers and Page numbers (e.g. Article 58(1) (Page 30)).\n` +
      `- Ensure proper spaces between words and after punctuation.\n` +
      `- Use proper Markdown bullet points (* or -) or numbered lists with clear line breaks.\n` +
      `- Always put a space after bold headers and colons (e.g. "**By the President on advice:** According to...").\n` +
      `- Do NOT output stray characters or delimiter artifacts like ***### or markdown code blocks.\n` +
      `- End with a section starting with "Roman Urdu Mein:" containing a simple, accurate Roman Urdu explanation.\n\n` +
      `If the answer is not in the articles above, say exactly:\n` +
      `"This information is not found in the provided articles of the Constitution of Pakistan."`;

    // ---- Step 6: Offline fallback (no API key) ----
    if (!apiKey) {
      const first = docs[0];
      const fallback =
        `According to **Article ${first.article_number}** (Page ${first.page_number}):\n\n` +
        `${first.summary || first.text.slice(0, 500)}\n\n` +
        `**Roman Urdu Mein:**\n` +
        `Yeh Article Pakistan ke Aain ka hissa hai jismein ${first.article_title} ke baare mein bataya gaya hai.`;

      for (const char of fallback) {
        sendEvent({ type: "token", text: char });
        await sleep(8);
      }
      sendEvent({ type: "done" });
      return res.end();
    }

    // ---- Step 7: Stream Gemini response with retry ----
    const responseStream = await withRetry(() =>
      ai.models.generateContentStream({
        model: "gemini-3.6-flash",
        contents: fullPrompt,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.1, // low temp = consistent, citation-faithful answers
        },
      })
    );

    for await (const chunk of responseStream) {
      const text = chunk.text;
      if (text) {
        sendEvent({ type: "token", text });
      }
    }

    sendEvent({ type: "done" });
    res.end();

  } catch (error: any) {
    console.error("Chat Stream Error:", error);

    const msg = String(error?.message || "");
    const isRateLimit = error?.status === 429 || msg.includes("429") || msg.includes("RESOURCE_EXHAUSTED");

    if (isRateLimit) {
      sendEvent({
        type: "error",
        message: "The AI is currently busy due to rate limits. Please wait 1 minute and try again.",
        code: 429,
      });
    } else {
      sendEvent({
        type: "error",
        message: "An error occurred while generating the response. Please try again.",
        code: 500,
      });
    }

    res.end();
  }
});

// ---------------------------------------------------------------------------
// Vite Dev / Production Static Serving
// ---------------------------------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`⚖️ Constitution AI Assistant Server listening on http://0.0.0.0:${PORT}`);
  });
}

if (!process.env.VERCEL) {
  startServer();
}

export default app;