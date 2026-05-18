"""Repositório de pedidos — busca por período para o OrdersService."""

from pandas import DataFrame

from ...data_source import data_source


class OrdersRepository:
    """Acessa o data source e entrega um DataFrame para o OrdersService."""

    def get_by_period(self, start: str, end: str) -> DataFrame:
        """Retorna todos os pedidos de um período como DataFrame."""
        rows = data_source.fetch_orders_by_period(start, end)
        if not rows:
            return DataFrame()
        return DataFrame(rows)
