"""Repositório de entregas — busca e prepara dados da planilha para o DeliveriesService."""

from pandas import DataFrame

from .....data_source import data_source


class DeliveriesRepository:
    """Acessa o data source e entrega um DataFrame para o DeliveriesService.

    Não faz cast numérico — colunas de entrega são todas tratadas como string.
    """

    def get_by_date(self, date: str) -> DataFrame:
        """Retorna todos os pedidos de uma data como DataFrame bruto."""
        rows = data_source.fetch_orders_by_date(date)
        if not rows:
            return DataFrame()
        return DataFrame(rows)
