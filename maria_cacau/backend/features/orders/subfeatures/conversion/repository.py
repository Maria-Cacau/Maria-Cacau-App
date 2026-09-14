"""Repositório de conversão — único lugar que conhece SheetCols no contexto de envio para a Meta."""

from .....data_source import SheetCols, data_source
from .....data_source.errors._errors import OrderNotFoundError
from .models import SheetStatus


class ConversionRepository:
    def get_by_number(self, number: str) -> dict[str, str]:
        order = data_source.fetch_order_by_number(number)
        if order is None:
            raise OrderNotFoundError(number)
        return order

    def mark(self, number: str, status: SheetStatus, sent_at: str = "") -> None:
        data_source.update_order(number, {
            SheetCols.META_STATUS: status.value,
            SheetCols.META_SENT:   sent_at,
        })
