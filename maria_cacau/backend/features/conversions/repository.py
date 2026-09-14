"""Repositório da feature de conversões — único lugar que conhece `SheetCols` aqui."""

from ...data_source import data_source


class ConversionsRepository:
    def find_order(self, number: str) -> dict[str, str] | None:
        return data_source.fetch_order_by_number(number)
