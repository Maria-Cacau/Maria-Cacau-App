"""Repositório de pagamentos — busca e prepara dados da planilha para o PaymentsService."""

import pandas as pd
from pandas import DataFrame

from ..data_source import data_source, SheetCols, PaymentCols, PAYMENT_SLOTS
from ..utils import normalize_decimal


class PaymentsRepository:
    """Acessa o data source e entrega um DataFrame tipado para o PaymentsService.

    Único lugar que conhece SheetCols e PaymentCols no contexto de pagamentos.
    """

    def get_by_date(self, date: str) -> DataFrame:
        """Retorna todos os pedidos de uma data com colunas monetárias convertidas para float."""
        rows = data_source.fetch_orders_by_date(date)
        if not rows:
            return DataFrame()
        return self._to_dataframe(rows)

    @staticmethod
    def _to_dataframe(rows: list[dict]) -> DataFrame:
        """Converte list[dict] em DataFrame, fazendo cast numérico das colunas de valor."""
        df = DataFrame(rows)

        df[SheetCols.AMOUNT_PENDENT] = pd.to_numeric(
            df[SheetCols.AMOUNT_PENDENT].astype(str).apply(normalize_decimal),
            errors="coerce",
        ).fillna(0)

        ## No total são 6 colunas de pagamentos, por isso esse range
        for i in range(1, PAYMENT_SLOTS + 1):
            col = PaymentCols.AMOUNT.slot(i)
            if col in df.columns:
                df[col] = pd.to_numeric(
                    df[col].astype(str).apply(normalize_decimal),
                    errors="coerce",
                ).fillna(0)

        return df
