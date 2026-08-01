"""Vector store initialization and indexing package."""
from .builder import IndexBuilder

FAISSVectorBuilder = IndexBuilder

__all__ = ["IndexBuilder", "FAISSVectorBuilder"]
