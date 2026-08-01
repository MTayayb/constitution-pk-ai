import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  Send, 
  Trash2, 
  Download,
  RotateCw, 
  ChevronDown, 
  ChevronUp,
  Search,
  PanelLeftClose,
  PanelLeft
} from 'lucide-react';
import { CONSTITUTION_ARTICLES } from './data/constitution';

interface SourceMeta {
  article_number: string;
  article_title: string;
  chapter: string;
  part: string;
  page_number: number;
  summary?: string;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: SourceMeta[];
  timestamp: string;
  isStreaming?: boolean;
  isRateLimited?: boolean;
}

const PART_TITLES: Record<string, string> = {
  "Part I": "Part I — Introductory",
  "Part II": "Part II — Fundamental Rights & Principles of Policy",
  "Part III": "Part III — The Federation of Pakistan",
  "Part IV": "Part IV — Provinces",
  "Part V": "Part V — Relations Between Federation & Provinces",
  "Part VI": "Part VI — Finance, Property, Contracts & Suits",
  "Part VII": "Part VII — The Judicature",
  "Part VIII": "Part VIII — Elections",
  "Part IX": "Part IX — Islamic Provisions",
  "Part X": "Part X — Emergency Provisions",
  "Part XI": "Part XI — Amendment of Constitution",
  "Part XII": "Part XII — Miscellaneous",
};

// Copy button component for assistant answers
function getMainCitation(text: string, sources: SourceMeta[]) {
  // Look for "Article XX" pattern in the response text
  const match = text.match(/Article\s+(\d+[A-Za-z\-]*)/i);
  if (match) {
    const citedNum = match[1];
    const found = sources.find(s => 
      s.article_number.toLowerCase() === citedNum.toLowerCase()
    );
    if (found) return found;
  }
  // Fallback to first source
  return sources[0];
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy answer"
      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#2E7D32] transition-colors bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-md font-medium cursor-pointer"
    >
      <span>{copied ? '✅' : '📋'}</span>
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

// Rate limit card component with countdown
function RateLimitCard({ initialDelay = 60 }: { initialDelay?: number }) {
  const [secondsLeft, setSecondsLeft] = useState(initialDelay);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  return (
    <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-5 text-amber-900 space-y-3 my-2 shadow-xs max-w-md">
      <div className="flex items-center gap-2 font-bold text-base text-amber-900">
        <span className="text-xl">⏱️</span> Daily limit reached
      </div>
      <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
        The free Gemini API allows 20 requests/day.<br />
        Your limit resets tomorrow morning.
      </p>
      <div className="pt-2 border-t border-amber-200 flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-900 font-mono">
        <span>Try again in:</span>
        <span className="bg-amber-200 px-2.5 py-1 rounded text-amber-950 font-bold">
          {secondsLeft > 0 ? `${secondsLeft}s` : 'Ready to retry'}
        </span>
      </div>
    </div>
  );
}

function cleanMarkdownText(text: string): string {
  if (!text) return '';
  return text
    // Remove stray symbol lines like "***###", "###***", "***"
    .replace(/^[\*\#\-\_]{3,}\s*$/gm, '')
    // Fix bold titles lacking a space after colon, e.g. "**Title:**Text" -> "**Title:** Text"
    .replace(/\*\*([^\*\n]+):\*\*([^\s\n])/g, '**$1:** $2')
    // Fix bold titles lacking a space after closing stars without colon, e.g. "**Title**Text" -> "**Title** Text"
    .replace(/\*\*([^\*\n]+)\*\*([A-Za-z0-9])/g, '**$1** $2')
    // Fix malformed bold markers with spaces inside: "** text" -> "**text"
    .replace(/\*\*\s+/g, '**')
    .replace(/\s+\*\*/g, '**')
    // Ensure line break before new bold section titles if attached directly to preceding paragraph
    .replace(/([^\n])\n?\*\*([A-Z][^\*\n]+:\*\*)/g, '$1\n\n**$2')
    .trim();
}

function AssistantMessageContent({ content }: { content: string }) {
  if (!content) return null;

  const parts = content.split(/Roman Urdu Mein:/i);
  const englishPart = parts[0];
  const rawRomanUrdu = parts.length > 1 ? parts.slice(1).join('Roman Urdu Mein:') : null;

  const formattedEnglish = cleanMarkdownText(englishPart);
  const formattedRomanUrdu = rawRomanUrdu ? cleanMarkdownText(rawRomanUrdu) : null;

  return (
    <div className="text-slate-800 leading-relaxed text-sm space-y-2">
      <ReactMarkdown
        components={{
          strong: ({ children }) => (
            <span className="font-bold text-gray-900">{children}</span>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 my-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 my-2">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-800 ml-2">{children}</li>
          ),
          h3: ({ children }) => (
            <h3 className="font-bold text-gray-900 mt-3 mb-1">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="font-bold text-gray-900 mt-2 mb-1">{children}</h4>
          ),
          hr: () => <hr className="my-3 border-gray-200" />,
          p: ({ children }) => (
            <p className="mb-2 leading-relaxed">{children}</p>
          ),
        }}
      >
        {formattedEnglish}
      </ReactMarkdown>

      {formattedRomanUrdu && (
        <div className="mt-3 p-3 bg-green-50 border-l-4 border-green-600 rounded shadow-2xs">
          <p className="text-xs font-bold text-green-800 mb-1">🇵🇰 Roman Urdu Mein:</p>
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="text-xs text-gray-700 leading-relaxed mb-1">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-1 text-xs my-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-1 text-xs my-1">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-700 ml-2">{children}</li>
              ),
              strong: ({ children }) => (
                <span className="font-bold text-gray-900">{children}</span>
              ),
              h3: ({ children }) => (
                <h3 className="font-bold text-gray-900 mt-2 mb-1 text-xs">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="font-bold text-gray-900 mt-2 mb-1 text-xs">{children}</h4>
              ),
            }}
          >
            {formattedRomanUrdu}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchMode, setSearchMode] = useState<'mmr' | 'similarity' | 'similarity_score_threshold'>('mmr');
  const [topK, setTopK] = useState<number>(5);
  const [expandedSources, setExpandedSources] = useState<{ [msgId: string]: boolean }>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [articleSearch, setArticleSearch] = useState('');
  const [openParts, setOpenParts] = useState<{ [partKey: string]: boolean }>({});

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Collect all currently cited article numbers across messages for sidebar highlighting
  const citedArticleNumbers = new Set<string>();
  messages.forEach(m => {
    if (m.sources) {
      m.sources.forEach(s => citedArticleNumbers.add(s.article_number.toUpperCase()));
    }
  });

  const handleSendMessage = async (customQuery?: string) => {
    const queryToSend = customQuery || inputQuery;
    if (!queryToSend.trim() || isLoading) return;

    const userMsgId = Date.now().toString();
    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newUserMessage: Message = {
      id: userMsgId,
      role: 'user',
      content: queryToSend.trim(),
      timestamp: timeString
    };

    const assistantMsgId = (Date.now() + 1).toString();
    const newAssistantMessage: Message = {
      id: assistantMsgId,
      role: 'assistant',
      content: '',
      sources: [],
      timestamp: timeString,
      isStreaming: true
    };

    setMessages(prev => [...prev, newUserMessage, newAssistantMessage]);
    if (!customQuery) setInputQuery('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch('/api/constitution/chat-stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: queryToSend.trim(),
          history: historyPayload,
          top_k: topK,
          mode: searchMode
        })
      });

      if (response.status === 429) {
        setMessages(prev => prev.map(m => {
          if (m.id === assistantMsgId) {
            return {
              ...m,
              isStreaming: false,
              isRateLimited: true,
              content: ''
            };
          }
          return m;
        }));
        setIsLoading(false);
        return;
      }

      if (!response.body) {
        throw new Error("No response body returned");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.replace("data: ", ""));
              if (data.type === "meta") {
                setMessages(prev => prev.map(m => {
                  if (m.id === assistantMsgId) {
                    return { ...m, sources: data.sources };
                  }
                  return m;
                }));
              } else if (data.type === "token") {
                setMessages(prev => prev.map(m => {
                  if (m.id === assistantMsgId) {
                    return { ...m, content: m.content + data.text };
                  }
                  return m;
                }));
              } else if (data.type === "done") {
                setMessages(prev => prev.map(m => {
                  if (m.id === assistantMsgId) {
                    return { ...m, isStreaming: false };
                  }
                  return m;
                }));
              } else if (data.type === "error") {
                if (data.code === 429 || String(data.message).includes("429") || String(data.message).includes("rate limit")) {
                  setMessages(prev => prev.map(m => {
                    if (m.id === assistantMsgId) {
                      return { ...m, isStreaming: false, isRateLimited: true, content: '' };
                    }
                    return m;
                  }));
                } else {
                  setMessages(prev => prev.map(m => {
                    if (m.id === assistantMsgId) {
                      return { ...m, isStreaming: false, content: data.message || "An error occurred." };
                    }
                    return m;
                  }));
                }
              }
            } catch (err) {
              console.error("Error parsing SSE chunk:", err);
            }
          }
        }
      }
    } catch (error: any) {
      console.error("Failed to fetch answer:", error);
      const is429 = String(error?.message).includes("429");
      setMessages(prev => prev.map(m => {
        if (m.id === assistantMsgId) {
          if (is429) {
            return { ...m, isStreaming: false, isRateLimited: true, content: '' };
          }
          return {
            ...m,
            content: "Sorry, an error occurred while connecting to the Constitution AI server. Please try again.",
            isStreaming: false
          };
        }
        return m;
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSources = (msgId: string) => {
    setExpandedSources(prev => ({
      ...prev,
      [msgId]: !prev[msgId]
    }));
  };

  const handleClearChat = () => {
    if (messages.length === 0) return;
    if (window.confirm("Are you sure you want to clear the conversation?")) {
      setMessages([]);
      setExpandedSources({});
    }
  };

  const handleExportChat = () => {
    if (messages.length === 0) return;
    const dateStr = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    let text = `Constitution AI Assistant — Chat Export\nDate: ${dateStr}\n─────────────────────────────\n`;
    
    messages.forEach((msg) => {
      if (msg.role === 'user') {
        text += `You: ${msg.content}\n`;
      } else {
        text += `Assistant: ${msg.content}\n`;
        if (msg.sources && msg.sources.length > 0) {
          const sourceList = msg.sources.map(s => `Article ${s.article_number}`).join(', ');
          text += `Sources: ${sourceList}\n`;
        }
        text += `─────────────────────────────\n`;
      }
    });

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `constitution-ai-chat-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Group articles by Part
  const groupedArticles = CONSTITUTION_ARTICLES.reduce((acc, art) => {
    const partKey = art.part || "Other";
    if (!acc[partKey]) {
      acc[partKey] = [];
    }
    acc[partKey].push(art);
    return acc;
  }, {} as Record<string, typeof CONSTITUTION_ARTICLES>);

  const togglePart = (partKey: string) => {
    setOpenParts(prev => ({ ...prev, [partKey]: !prev[partKey] }));
  };

  // Suggestion Cards for Feature 1
  const suggestionCards = [
    {
      question: "Who can dissolve the National Assembly?",
      icon: "⚖️"
    },
    {
      question: "What are the fundamental rights of citizens?",
      icon: "🏛️"
    },
    {
      question: "How is the Prime Minister appointed?",
      icon: "👤"
    },
    {
      question: "What is the procedure to amend the Constitution?",
      icon: "📜"
    },
    {
      question: "What does Article 6 say about high treason?",
      icon: "⚠️"
    },
    {
      question: "How many seats are in the National Assembly?",
      icon: "🗳️"
    }
  ];

  return (
    <div className="flex h-screen bg-[#F8FAF8] text-slate-800 font-sans overflow-hidden">
      {/* SIDEBAR: FEATURE 3 — ARTICLE BROWSER */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-[280px]' : 'w-0 -ml-[280px]'
        } transition-all duration-300 ease-in-out bg-[#F1F4F1] border-r border-slate-200 flex flex-col z-20 shrink-0 h-full overflow-hidden`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-200 bg-[#F1F4F1] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📖</span>
            <h2 className="font-bold text-sm tracking-tight text-slate-900">Article Browser</h2>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-1 text-slate-500 hover:text-slate-800 rounded hover:bg-slate-200 transition-colors"
            title="Close sidebar"
          >
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>

        {/* Search Box */}
        <div className="p-3 border-b border-slate-200 bg-white">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input 
              type="text"
              value={articleSearch}
              onChange={(e) => setArticleSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs outline-none focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32]"
            />
          </div>
        </div>

        {/* Grouped Article List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {Object.entries(groupedArticles).map(([partKey, articles]) => {
            const filtered = articles.filter(art => 
              art.article_number.toLowerCase().includes(articleSearch.toLowerCase()) ||
              art.article_title.toLowerCase().includes(articleSearch.toLowerCase())
            );

            if (articleSearch.trim() && filtered.length === 0) return null;

            const isExpanded = articleSearch.trim() ? true : (openParts[partKey] || false);
            const partLabel = PART_TITLES[partKey] || partKey;

            return (
              <div key={partKey} className="border border-slate-200/80 rounded-lg bg-white overflow-hidden text-xs">
                {/* Part Collapsible Header */}
                <button
                  onClick={() => togglePart(partKey)}
                  className="w-full px-3 py-2 bg-slate-100 hover:bg-slate-200/70 font-bold text-slate-700 flex items-center justify-between text-left transition-colors cursor-pointer"
                >
                  <span className="truncate pr-1 text-[11px]">{partLabel}</span>
                  <span className="text-slate-400 text-[10px] shrink-0 flex items-center gap-1 font-mono">
                    ({filtered.length})
                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </span>
                </button>

                {/* Articles inside Part */}
                {isExpanded && (
                  <div className="divide-y divide-slate-100">
                    {filtered.map(art => {
                      const isCited = citedArticleNumbers.has(art.article_number.toUpperCase());
                      return (
                        <button
                          key={art.article_number}
                          onClick={() => handleSendMessage(`What does Article ${art.article_number} say?`)}
                          className={`w-full text-left px-3 py-2 transition-all flex items-start gap-1.5 group cursor-pointer ${
                            isCited 
                              ? 'bg-green-100 text-green-900 border-l-4 border-l-[#2E7D32] font-semibold' 
                              : 'hover:bg-slate-50 text-slate-700 hover:text-[#2E7D32]'
                          }`}
                        >
                          <span className={`font-mono text-[11px] font-bold shrink-0 ${isCited ? 'text-[#1B5E20]' : 'text-[#2E7D32]'}`}>
                            Art. {art.article_number}
                          </span>
                          <span className="text-[11px] leading-tight truncate">
                            — {art.article_title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-white relative">
        {/* FEATURE 6 — BETTER HEADER */}
        <header className="border-b border-slate-200 px-4 sm:px-6 py-3 bg-white flex items-center justify-between sticky top-0 z-10 shrink-0 shadow-2xs">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-600 transition-colors flex items-center justify-center cursor-pointer"
              title="Toggle Article Browser Sidebar"
            >
              <PanelLeft className="w-5 h-5 text-[#2E7D32]" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⚖️</span>
                <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-tight">
                  Constitution of Pakistan
                </h1>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                AI Assistant • {CONSTITUTION_ARTICLES.length} Articles • Updated Nov 2025
              </p>
            </div>
          </div>

          {/* FEATURE 5 & HEADER CONTROLS */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleClearChat}
              disabled={messages.length === 0}
              className="px-2.5 py-1.5 bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 text-xs font-semibold rounded-lg border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:hover:bg-slate-100 disabled:hover:text-slate-700 disabled:cursor-not-allowed"
              title="Clear Chat"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Clear Chat</span>
            </button>

            <button
              onClick={handleExportChat}
              disabled={messages.length === 0}
              className="px-2.5 py-1.5 bg-slate-100 hover:bg-[#E8F1E8] text-slate-700 hover:text-[#2E7D32] text-xs font-semibold rounded-lg border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-40 disabled:hover:bg-slate-100 disabled:hover:text-slate-700 disabled:cursor-not-allowed"
              title="Export Chat"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export Chat</span>
            </button>
          </div>
        </header>

        {/* CHAT MESSAGES AREA */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 max-w-4xl w-full mx-auto">
          {/* FEATURE 1 — STARTUP SCREEN WITH SUGGESTED QUESTIONS */}
          {messages.length === 0 ? (
            <div className="py-8 px-2 text-center space-y-8 max-w-2xl mx-auto">
              <div className="space-y-3">
                <div className="inline-flex p-4 bg-[#E8F1E8] text-[#2E7D32] rounded-3xl border border-[#C8E6C9] shadow-xs">
                  <span className="text-5xl">⚖️</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Constitution of Pakistan AI Assistant
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-medium">
                  Ask any question about the Constitution of Pakistan
                </p>
              </div>

              {/* Grid of 6 clickable suggestion cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
                {suggestionCards.map((card, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(card.question)}
                    className="p-4 bg-white border border-slate-200 border-l-4 border-l-[#2E7D32] rounded-xl text-xs sm:text-sm text-slate-800 font-semibold text-left transition-all hover:shadow-md hover:border-l-[#1B5E20] flex items-center gap-3 group cursor-pointer"
                  >
                    <span className="text-xl shrink-0">{card.icon}</span>
                    <span className="group-hover:text-[#1B5E20] leading-snug">{card.question}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="space-y-1">
                {msg.role === 'user' ? (
                  /* User Message */
                  <div className="flex flex-col items-end">
                    <div className="max-w-[85%] sm:max-w-[75%] bg-[#E8F1E8] text-slate-800 p-4 rounded-2xl rounded-tr-none shadow-xs border border-[#D0E2D0]">
                      <p className="text-sm leading-relaxed font-medium whitespace-pre-wrap">{msg.content}</p>
                    </div>
                    {/* FEATURE 7 — Right aligned timestamp for user */}
                    <span className="text-[10px] text-slate-400 mt-1 font-mono pr-1 text-right block">
                      {msg.timestamp}
                    </span>
                  </div>
                ) : (
                  /* Assistant Message */
                  <div className="flex flex-col items-start">
                    <div className="max-w-[95%] sm:max-w-[88%] bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl rounded-tl-none shadow-sm space-y-4 relative w-full">
                      {/* Top Badges for Cited Sources */}
                      {msg.sources && msg.sources.length > 0 && (() => {
                        const mainCitation = getMainCitation(msg.content, msg.sources);
                        return (
                          <div className="flex items-center gap-2">
                            <div className="bg-[#2E7D32] text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                              Cited: Article {mainCitation.article_number}
                            </div>
                            <div className="text-slate-400 text-[10px] font-medium uppercase font-mono">
                              Page {mainCitation.page_number}
                            </div>
                          </div>
                        );
                      })()}

                      {/* FEATURE 9 — RATE LIMIT FRIENDLY MESSAGE */}
                      {msg.isRateLimited ? (
                        <RateLimitCard />
                      ) : msg.content ? (
                        /* Render Markdown Assistant Response */
                        <AssistantMessageContent content={msg.content} />
                      ) : (
                        /* FEATURE 4 — LOADING SKELETON */
                        <div className="animate-pulse space-y-2 py-2">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        </div>
                      )}

                      {/* Sources Accordion */}
                      {msg.sources && msg.sources.length > 0 && !msg.isRateLimited && (
                        <div className="mt-3 pt-3 border-t border-slate-100">
                          <button
                            onClick={() => toggleSources(msg.id)}
                            className="flex items-center justify-between w-full text-xs font-semibold text-slate-500 mb-2 hover:text-[#2E7D32] transition-colors cursor-pointer"
                          >
                            <span>📚 Sources Used ({msg.sources.length} Articles)</span>
                            {expandedSources[msg.id] ? (
                              <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                            )}
                          </button>

                          <div className="flex flex-wrap gap-1.5">
                            {msg.sources.map((source, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-0.5 rounded bg-green-50 border border-green-200 text-xs text-green-800 font-medium"
                              >
                                Art. {source.article_number} — {source.article_title}
                              </span>
                            ))}
                          </div>

                          {expandedSources[msg.id] && (
                            <div className="mt-3 space-y-2 pt-2 border-t border-slate-100">
                              {msg.sources.map((src, idx) => (
                                <div key={idx} className="p-3 bg-slate-50 rounded-lg border-l-4 border-l-[#2E7D32] border border-slate-200 text-xs space-y-1">
                                  <div className="flex justify-between items-center">
                                    <span className="font-bold text-[#2E7D32]">
                                      Article {src.article_number} (Page {src.page_number})
                                    </span>
                                    <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono">
                                      {src.part}
                                    </span>
                                  </div>
                                  <p className="font-semibold text-slate-800">{src.article_title}</p>
                                  {src.summary && <p className="text-slate-600 text-[11px] leading-relaxed">{src.summary}</p>}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* FEATURE 2 & 7 — Bottom bar with Copy Button + Timestamp */}
                      <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                        {/* FEATURE 2 — COPY BUTTON ON ANSWERS */}
                        <div>
                          {msg.content && !msg.isRateLimited && (
                            <CopyButton text={msg.content} />
                          )}
                        </div>

                        {/* FEATURE 7 — Left aligned timestamp for assistant */}
                        <span className="text-[10px] text-slate-400 font-mono">
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
          <div ref={chatEndRef} />
        </div>

        {/* INPUT AREA WITH FEATURE 8 — SEARCH MODE SELECTOR */}
        <div className="p-4 sm:p-6 bg-gradient-to-t from-white via-white to-transparent shrink-0">
          <div className="max-w-4xl mx-auto space-y-2">
            {/* FEATURE 8 — SEARCH MODE & TOP-K SELECTORS + INPUT BAR */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2 shadow-xs focus-within:ring-2 focus-within:ring-[#2E7D32]/20 focus-within:border-[#2E7D32]">
              {/* Selectors Dropdown Row */}
              <div className="flex items-center gap-1.5 border-b sm:border-b-0 sm:border-r border-slate-200 pb-2 sm:pb-0 pr-0 sm:pr-2 shrink-0">
                {/* Search Mode Selector */}
                <select
                  value={searchMode}
                  onChange={(e) => setSearchMode(e.target.value as any)}
                  className="bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 py-1.5 px-2 outline-none cursor-pointer hover:border-[#2E7D32]"
                >
                  <option value="mmr">MMR ▼</option>
                  <option value="similarity">Similarity ▼</option>
                  <option value="similarity_score_threshold">Cutoff ▼</option>
                </select>

                {/* Top K Selector */}
                <select
                  value={topK}
                  onChange={(e) => setTopK(parseInt(e.target.value))}
                  className="bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 py-1.5 px-2 outline-none cursor-pointer hover:border-[#2E7D32]"
                >
                  <option value={3}>Top K: 3 ▼</option>
                  <option value={5}>Top K: 5 ▼</option>
                  <option value={7}>Top K: 7 ▼</option>
                  <option value={10}>Top K: 10 ▼</option>
                </select>
              </div>

              {/* Text Input */}
              <input 
                type="text" 
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask a constitutional question..." 
                className="flex-1 bg-transparent px-3 py-1.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                disabled={isLoading}
              />

              {/* Send Button */}
              <button 
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputQuery.trim()}
                className="px-5 py-2 bg-[#2E7D32] text-white rounded-lg text-xs sm:text-sm font-bold shadow-xs hover:bg-[#1B5E20] disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer disabled:cursor-not-allowed"
              >
                {isLoading ? <RotateCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>Send</span>
              </button>
            </div>

            <div className="flex justify-center flex-wrap gap-4 text-[10px] text-slate-400 font-medium tracking-wider">
              <span>Updated for Nov 2025</span>
              <span>•</span>
              <span>Cites Page Numbers</span>
              <span>•</span>
              <span>Hallucination Shield Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
