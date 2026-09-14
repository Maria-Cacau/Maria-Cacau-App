"""Service e Mapper de pedidos — lista por período e pedido único."""

import dataclasses

from ...data_source.errors._errors import OrderNotFoundError
from ...utils import to_datetime
from .repository import OrdersRepository
from .shared import Order, OrderMapper


class OrdersMapper:
    """Serializa o resultado do OrdersService para dict JSON-ready."""

    @staticmethod
    def to_response(orders: list[Order]) -> dict:
        return {
            "total":  len(orders),
            "orders": [dataclasses.asdict(o) for o in orders],
        }

    @staticmethod
    def to_item_response(order: Order) -> dict:
        return dataclasses.asdict(order)


class OrdersService:
    """Busca e monta pedidos — o mesmo Order tanto na lista quanto no pedido único."""

    def __init__(self) -> None:
        self._repo = OrdersRepository()

    def get_by_period(self, start: str, end: str) -> list[Order]:
        """Retorna todos os pedidos do período informado."""
        df = self._repo.get_by_period(start, end)
        if df.empty:
            return []
        orders = [OrderMapper.to_model(row) for _, row in df.iterrows()]
        orders.sort(key=lambda o: to_datetime(o.delivery.date))
        return orders

    def get_by_number(self, number: str) -> Order:
        df = self._repo.get_by_number(number)
        if df.empty:
            raise OrderNotFoundError(number)
        return OrderMapper.to_model(df.iloc[0])
