"""Service e Mapper da feature de conversões."""

import dataclasses

from .models import PendingOrder
from .prevalidation import prevalidate
from .repository import ConversionsRepository


class ConversionsMapper:
    """Serializa `PendingOrder` para dict JSON-ready."""

    @staticmethod
    def to_response(order: PendingOrder) -> dict:
        data = dataclasses.asdict(order)
        data["status"] = order.status.value
        data["reason"] = order.reason.value if order.reason else None
        return data


class ConversionsService:
    def __init__(self) -> None:
        self._repo = ConversionsRepository()

    def get_pending(self, number: str) -> PendingOrder:
        """Busca o pedido e devolve o diagnóstico da pré-validação."""
        order = self._repo.find_order(number)
        return prevalidate(order, number)
