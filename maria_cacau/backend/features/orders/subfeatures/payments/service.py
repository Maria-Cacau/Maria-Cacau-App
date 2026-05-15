"""Service e Mapper de pagamentos pendentes."""

import dataclasses

from .....data_source import SheetCols
from ...shared import Order, OrderMapper
from .repository import PaymentsRepository


class PaymentsMapper:
    """Serializa o resultado do PaymentsService para dict JSON-ready."""

    @staticmethod
    def to_response(orders: list[Order]) -> dict:
        return {
            "total":  len(orders),
            "orders": [dataclasses.asdict(o) for o in orders],
        }


class PaymentsService:
    """Filtra pedidos com pagamento pendente e monta os objetos de domínio."""

    def __init__(self) -> None:
        self._repo = PaymentsRepository()

    def get_pendent(self, date: str) -> list[Order]:
        """Retorna pedidos com amount_pendent > 0 para a data informada."""
        df = self._repo.get_by_date(date)
        if df.empty:
            return []
        pendent = df[df[SheetCols.AMOUNT_PENDENT] > 0]
        return [OrderMapper.to_model(row) for _, row in pendent.iterrows()]
