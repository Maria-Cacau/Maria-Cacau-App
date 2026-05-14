"""Conexão com serviço da planilha/base de dados"""

from pandas import DataFrame

from maria_cacau.core.sheets.manager import manager


class OrdersRepository():
    def __init__(self) -> None:
        self.cache: dict = {}

    def get_orders_data(self, date: str) -> DataFrame:
        if date in self.cache:
            return self.cache[date]

        data: DataFrame = manager.get_entregas_for_date(date)
        self.cache[date] = data
        
        return DataFrame