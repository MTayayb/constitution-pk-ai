"""
constitution_rag/app.py
=======================
FastAPI server — bridge between Node.js server.ts and Python RAG chain.

Runs on port 8000.
server.ts calls this at http://localhost:8000/query

Start with:
    cd constitution_rag
    python app.py
"""

import logging
import os
import sys
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler("rag_server.log"),
    ],
)
logger = logging.getLogger(__name__)

# Add parent directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from config import Config
from chains.rag_chain import ConstitutionRAGChain

# ------------------------------------------------------------------
# Initialize FastAPI
# ------------------------------------------------------------------

app = FastAPI(
    title="Constitution of Pakistan RAG API",
    description="RAG backend for the Pakistan Constitution AI Assistant",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------------------------------------------------------
# Initialize RAG Chain (once at startup)
# ------------------------------------------------------------------

config = Config()
rag_chain: ConstitutionRAGChain = None


@app.on_event("startup")
async def startup():
    global rag_chain
    try:
        Config.validate()
        Config.print_summary()
        rag_chain = ConstitutionRAGChain(config)
        logger.info("✅ RAG chain initialized successfully")
    except FileNotFoundError as e:
        logger.error(f"❌ {e}")
        logger.error("Run build_index.py first to create the FAISS index")
    except Exception as e:
        logger.error(f"❌ Failed to initialize RAG chain: {e}", exc_info=True)


# ------------------------------------------------------------------
# Request / Response Models
# ------------------------------------------------------------------

class QueryRequest(BaseModel):
    question: str
    search_type: str = "mmr"
    top_k: int = 5


class SourceArticle(BaseModel):
    article_number: str
    article_title: str
    page_number: str
    chunk_id: str


# ------------------------------------------------------------------
# Routes
# ------------------------------------------------------------------

@app.get("/health")
async def health():
    """Health check endpoint."""
    return {
        "status": "ok",
        "rag_ready": rag_chain is not None,
        "model": config.GEMINI_MODEL,
    }


@app.post("/query")
async def query(request: QueryRequest):
    """
    Main query endpoint — streams response tokens.
    Called by server.ts for every user message.
    """
    if not rag_chain:
        raise HTTPException(
            status_code=503,
            detail="RAG chain not initialized. Check server logs.",
        )

    if not request.question.strip():
        raise HTTPException(status_code=400, detail="Question cannot be empty")

    logger.info(f"[API] Query: {request.question!r}")

    # Override config for this request
    config.DEFAULT_SEARCH_TYPE = request.search_type
    config.DEFAULT_TOP_K = request.top_k

    def generate():
        try:
            for token in rag_chain.ask(request.question):
                yield token
        except Exception as e:
            logger.error(f"[API] Streaming error: {e}", exc_info=True)
            yield f"\n\nError: {str(e)}"

    return StreamingResponse(
        generate(),
        media_type="text/plain",
    )


@app.post("/sources")
async def get_sources(request: QueryRequest):
    """
    Returns which articles would be retrieved for a question.
    Used by the UI to show Sources Used section.
    """
    if not rag_chain:
        raise HTTPException(status_code=503, detail="RAG chain not initialized")

    articles = rag_chain.get_retrieved_articles(request.question)
    return {"sources": articles}


@app.post("/reset")
async def reset_memory():
    """Clear conversation memory."""
    if rag_chain:
        rag_chain.reset_memory()
    return {"status": "memory cleared"}


@app.get("/index-stats")
async def index_stats():
    """Return stats about the FAISS index."""
    if not rag_chain:
        raise HTTPException(status_code=503, detail="RAG chain not initialized")

    total = rag_chain.retriever.get_total_documents()
    articles = rag_chain.retriever.get_all_article_numbers()

    return {
        "total_documents": total,
        "total_articles": len(articles),
        "article_numbers": articles,
    }


# ------------------------------------------------------------------
# Run
# ------------------------------------------------------------------

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=8000,
        reload=False,
        log_level="info",
    )