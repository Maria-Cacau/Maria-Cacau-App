"""Repositório de pagamentos — busca e prepara dados da planilha para o PaymentsService."""

import pandas as pd
from pandas import DataFrame

from .....data_source import data_source, SheetCols, ProductCols, PaymentCols, PAYMENT_SLOTS, PRODUCT_SLOTS
from .....utils import normalize_decimal


class PaymentsRepository:
    """Acessa o data source e entrega um DataFrame tipado para o PaymentsService.

    Único lugar que conhece SheetCols, ProductCols e PaymentCols no contexto de pagamentos.
    """

    def get_by_date(self, date: str) -> DataFrame:
        """Retorna todos os pedidos de uma data com colunas numéricas convertidas para float."""
        rows = data_source.fetch_orders_by_date(date)
        if not rows:
            return DataFrame()
        return self._to_dataframe(rows)

    @staticmethod
    def _to_dataframe(rows: list[dict]) -> DataFrame:
        """Converte list[dict] em DataFrame com cast numérico de todas as colunas de valor."""
        df = DataFrame(rows)

        financial_cols = [
            SheetCols.TOTAL,
            SheetCols.DISCOUNT,
            SheetCols.SHIPPING,
            SheetCols.AMOUNT_PENDENT,
            SheetCols.PAY_ON_PICKUP,
        ]
        for col in financial_cols:
            PaymentsRepository._cast_numeric(df, col)

        ## No total são 7 slots de produto e 6 de pagamento
        for i in range(1, PRODUCT_SLOTS + 1):
            PaymentsRepository._cast_numeric(df, ProductCols.PRICE.slot(i))
            PaymentsRepository._cast_numeric(df, ProductCols.TOTAL.slot(i))
            PaymentsRepository._cast_numeric(df, ProductCols.QTY.slot(i))

        for i in range(1, PAYMENT_SLOTS + 1):
            PaymentsRepository._cast_numeric(df, PaymentCols.AMOUNT.slot(i))

        return df

    @staticmethod
    def _cast_numeric(df: DataFrame, col: str) -> None:
        """Faz cast numérico de uma coluna se ela existir no DataFrame."""
        if col in df.columns:
            df[col] = pd.to_numeric(
                df[col].astype(str).apply(normalize_decimal),
                errors="coerce",
            ).fillna(0)
