"""Service e Mapper de entregas — agrupa pedidos do dia por tipo de entrega."""

import dataclasses

from .....data_source import SheetCols
from .models import DeliveryTypeCount, DeliveriesSummary
from .repository import DeliveriesRepository


class DeliveriesMapper:
    """Serializa DeliveriesSummary para dict JSON-ready."""

    @staticmethod
    def to_response(summary: DeliveriesSummary) -> dict:
        return dataclasses.asdict(summary)


class DeliveriesService:
    """Aplica regra de negócio sobre os pedidos do dia e retorna o resumo de entregas."""

    def __init__(self) -> None:
        self._repo = DeliveriesRepository()

    def get_by_date(self, date: str) -> DeliveriesSummary:
        """Retorna contagem de pedidos agrupada por tipo de entrega para a data informada."""
        df = self._repo.get_by_date(date)
        if df.empty:
            return DeliveriesSummary(unique=0, total=0, deliveries=[])

        counts = df[SheetCols.DELIVERY_TYPE].value_counts()
        deliveries = [
            DeliveryTypeCount(type=str(t), count=int(c))
            for t, c in counts.items()
        ]

        return DeliveriesSummary(
            unique=len(deliveries),
            total=int(counts.sum()),
            deliveries=deliveries,
        )
