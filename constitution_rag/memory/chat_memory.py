"""
Conversation Memory module using LangChain ConversationBufferWindowMemory for sliding window context tracking.
"""

from typing import List, Dict, Any
from langchain.memory import ConversationBufferWindowMemory
from config import Config
from utils.helpers import setup_logger

logger = setup_logger("chat_memory")


class ConstitutionChatMemory:
    """Manages conversation history using a sliding window of recent user/assistant message exchanges."""

    def __init__(self, k: int = Config.MEMORY_WINDOW):
        self.k = k
        self.memory = ConversationBufferWindowMemory(
            k=self.k,
            memory_key="chat_history",
            return_messages=True
        )

    def add_exchange(self, question: str, answer: str) -> None:
        """
        Record a question-answer interaction into memory.

        Args:
            question: User question string.
            answer: Assistant answer string.
        """
        logger.info("Saving exchange to chat memory...")
        self.memory.save_context(
            {"input": question},
            {"output": answer}
        )

    def get_history(self) -> str:
        """
        Get chat history formatted as a single readable context string.

        Returns:
            str: Formatted chat history text block.
        """
        messages = self.get_messages()
        if not messages:
            return "No previous conversation history."

        history_lines = []
        for msg in messages:
            role = "Human" if msg.type == "human" else "Assistant"
            history_lines.append(f"{role}: {msg.content}")

        return "\n".join(history_lines)

    def get_messages(self) -> List[Any]:
        """
        Get the list of raw LangChain message objects.

        Returns:
            List[Any]: List of HumanMessage and AIMessage objects.
        """
        memory_vars = self.memory.load_memory_variables({})
        return memory_vars.get("chat_history", [])

    def clear(self) -> None:
        """Clear all conversation history from memory."""
        logger.info("Clearing chat memory buffer.")
        self.memory.clear()
