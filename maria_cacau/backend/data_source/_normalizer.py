"""Normaliza headers inconsistentes da planilha para os valores canônicos dos enums."""

from .sheet_mapper import PaymentCols, ProductCols


class SheetNormalizer:
    """Traduz headers reais da planilha para os nomes canônicos definidos nos enums.

    Aplicado sobre o list[dict] retornado pelo _SheetsViewModel antes de ser entregue
    ao repositório — isola o conhecimento sobre bugs da planilha num único lugar.
    """

    # header_real -> valor_canônico_do_enum
    _RENAMES: dict[str, str] = {
        "valor pg 1":  PaymentCols.AMOUNT.slot(1),  # espaço extra no slot 1
        "data 6ªpgto": PaymentCols.DATE.slot(3),    # número trocado (deveria ser data 3ªpgto)
    }

    @classmethod
    def normalize(cls, rows: list[dict]) -> list[dict]:
        if not rows:
            return rows
        rows = cls._rename_keys(rows)
        rows = cls._fix_prod4(rows)
        return rows

    @classmethod
    def _rename_keys(cls, rows: list[dict]) -> list[dict]:
        return [{cls._RENAMES.get(k, k): v for k, v in row.items()} for row in rows]

    @classmethod
    def _fix_prod4(cls, rows: list[dict]) -> list[dict]:
        """Renomeia a coluna que segue prod3 para prod4, independente do header atual.

        Abordagem posicional: localiza prod3 no header e renomeia a coluna seguinte.
        Seguro mesmo que existam outras colunas com header '-' na planilha.
        """
        keys = list(rows[0].keys())
        try:
            target_pos = keys.index(ProductCols.NAME.slot(3)) + 1
        except ValueError:
            return rows

        prod4_key = ProductCols.NAME.slot(4)
        if keys[target_pos] == prod4_key:
            return rows

        return [cls._rename_at(row, target_pos, prod4_key) for row in rows]

    @staticmethod
    def _rename_at(row: dict, pos: int, new_key: str) -> dict:
        items = list(row.items())
        items[pos] = (new_key, items[pos][1])
        return dict(items)
