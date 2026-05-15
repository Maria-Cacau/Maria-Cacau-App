"""Service e Mapper de resumo de pedidos por período."""

from .repository import OrdersRepository


class OrdersMapper:
    """Serializa o resultado do OrdersService para dict JSON-ready."""

    @staticmethod
    def to_response(data: dict) -> dict:
        return data


class OrdersService:
    """Aplica regra de negócio sobre os pedidos de um período e retorna o resumo."""

    def __init__(self) -> None:
        self._repo = OrdersRepository()

    def get_by_period(self, start: str, end: str) -> dict:
        """Retorna o resumo de pedidos para o período informado."""
        ...
