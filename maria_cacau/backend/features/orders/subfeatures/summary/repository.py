"""Repositório de pedidos — busca por período para o OrdersService."""

from pandas import DataFrame

class OrdersRepository:
    """Acessa o data source e entrega um DataFrame para o OrdersService."""

    def get_by_period(self, start: str, end: str) -> DataFrame:
        """Retorna todos os pedidos de um período como DataFrame."""
        return DataFrame()
