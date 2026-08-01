# ⚖️ Constitution of Pakistan AI Assistant

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-3.6_Flash-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

An intelligent, retrieval-augmented constitutional law assistant providing precise, cited answers and side-by-side Roman Urdu explanations for the Constitution of the Islamic Republic of Pakistan.

---

## 🌐 Live Demo & Preview

**Live URL:** [https://constitution-of-pakistan-ai-assistant.ai.studio](https://constitution-of-pakistan-ai-assistant.ai.studio)

![Constitution AI Assistant Screenshot Placeholder](./docs/demo.png)

---

## 📖 Overview

The **Constitution of Pakistan AI Assistant** is a specialized conversational web app engineered to navigate, explain, and cite the constitutional law of Pakistan. 

Built using a custom **Retrieval-Augmented Generation (RAG)** pipeline, the assistant dynamically retrieves verbatim constitutional articles prior to generating answers. This guarantees zero hallucination, strict alignment with original legal texts, and precise article/page citations for every response.

---

## ✨ Features

- **311 Constitutional Provisions:** Complete database covering Articles 1–280, schedules, and sub-articles updated post-25th Amendment.
- **Verbatim Citations:** Automatically displays exact Article numbers and page numbers in cited headers.
- **Zero Hallucination Guarantee:** Answers strictly grounded in retrieved legal sources.
- **Dual-Language Responses:** Parallel English answer and friendly Roman Urdu (*Roman Urdu Mein*) explanation.
- **Smart Follow-Up Resolution:** Context-aware query rewriting replaces ambiguous pronouns (e.g., "what are his powers?") into fully qualified queries.
- **Interactive Article Browser:** Search and filter through all 311 articles with instant summaries and full legal text.
- **Starter Prompts:** Curated legal queries for quick access to key constitutional topics.
- **Export & Utility Controls:** One-click answer copying and full chat history export (`.txt`).
- **Resilient Rate-Limit Handling:** Intelligent exponential backoff and retry controls for stable API streaming.
- **Responsive Interface:** Tailored legal interface optimized for desktop, tablet, and mobile views.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 18, TypeScript, Tailwind CSS, Lucide Icons, ReactMarkdown |
| **Backend** | Node.js, Express, Server-Sent Events (SSE) |
| **AI / Model** | Google Gemini API (`gemini-3.6-flash`) |
| **Architecture** | Retrieval-Augmented Generation (RAG), Keyword & Score Mapping |
| **Deployment** | Google AI Studio, Vercel-ready Express integration |

---

## 🔬 How It Works (RAG Architecture)

The legal query processing pipeline ensures exact constitutional retrieval and contextual follow-up resolution:

```text
               User Question
                     │
                     ▼
  Query Rewriting (follow-ups → standalone)
                     │
                     ▼
  KNOWLEDGE_MAP (50+ keywords → forced articles)
                     │
                     ▼
   Article Scoring (all 311 articles scored)
                     │
                     ▼
        Top 5 Articles Retrieved
                     │
                     ▼
 Gemini generates answer ONLY from retrieved articles
                     │
                     ▼
 English answer + Roman Urdu explanation streamed
```

---

## 📁 Project Structure

```text
constitution-pk-ai/
├── server.ts               # Express backend + RAG pipeline
├── api/
│   └── index.ts            # Vercel serverless entry point
├── src/
│   ├── App.tsx             # Main React application & UI
│   ├── index.css           # Tailwind CSS styles
│   └── data/
│       └── constitution.ts # Database of 311 constitutional articles
├── package.json            # Node.js dependencies & scripts
├── vercel.json             # Vercel deployment routing
└── .env.example            # Environment variables template
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher
- **Gemini API Key**: Obtain a free key from [Google AI Studio](https://aistudio.google.com)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/constitution-pk-ai.git
   cd constitution-pk-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```

4. **Add your Gemini API Key in `.env`:**
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

5. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 🔑 Environment Variables

| Variable | Description | Required |
| :--- | :--- | :---: |
| `GEMINI_API_KEY` | API key from Google AI Studio | **Yes** |

---

## 🌐 Deployment

### Google AI Studio
This application is native to **Google AI Studio** runtime environment.

### Deploying to Vercel
1. Push your repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Add `GEMINI_API_KEY` in the Environment Variables section of your Vercel project settings.
4. Deploy! (`vercel.json` and `/api/index.ts` are pre-configured).

---

## ⚠️ Limitations

- **API Rate Limits:** Free tier Gemini API permits 20 requests/minute.
- **Amendments Baseline:** Article texts reflect amendments up to November 2025 (including the 25th Constitutional Amendment).
- **Urdu Script:** Explanations provided in Roman Urdu script (Nastaliq Urdu script support planned).

---

## 🔮 Future Improvements

- [ ] FAISS / Vector embeddings integration for dense semantic search.
- [ ] Native Nastaliq Urdu script toggle.
- [ ] Export legal summary & citations as formatted PDF.
- [ ] Mobile app build using React Native / PWA capabilities.
- [ ] Multi-document support (e.g., Pakistan Penal Code, CrPC).
- [ ] Voice input & text-to-speech audio playback.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Please feel free to check the [issues page](https://github.com/YOUR_GITHUB_USERNAME/constitution-pk-ai/issues) or open an issue before submitting a pull request.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Tayyab**  
*Computer Engineering Student, UET Lahore*  
*President, ACM UET Lahore Student Chapter*

- **GitHub:** [@YOUR_GITHUB_USERNAME](https://github.com/YOUR_GITHUB_USERNAME)
- **LinkedIn:** [Tayyab's LinkedIn](https://linkedin.com/in/YOUR_LINKEDIN)
