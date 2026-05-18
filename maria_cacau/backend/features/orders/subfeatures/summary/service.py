"""Service e Mapper de resumo de pedidos por período."""

import dataclasses

from ...shared import Order, OrderMapper
from .repository import OrdersSummaryRepository


class OrdersMapper:
    """Serializa o resultado do OrdersService para dict JSON-ready."""

    @staticmethod
    def to_response(orders: list[Order]) -> dict:
        return {
            "total":  len(orders),
            "orders": [dataclasses.asdict(o) for o in orders],
        }


class OrdersService:
    """Busca e monta os pedidos de um período."""

    def __init__(self) -> None:
        self._repo = OrdersSummaryRepository()

    def get_by_period(self, start: str, end: str) -> list[Order]:
        """Retorna todos os pedidos do período informado."""
        df = self._repo.get_by_period(start, end)
        if df.empty:
            return []
        return [OrderMapper.to_model(row) for _, row in df.iterrows()]
