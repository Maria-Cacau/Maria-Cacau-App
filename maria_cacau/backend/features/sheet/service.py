"""Service de planilha — gerencia a planilha ativa no DataSource."""

from ...data_source import data_source


class SheetService:
    def select(self, sheet_id: str) -> None:
        data_source.set_sheet(sheet_id)

    def remove(self) -> None:
        data_source.clear_sheet()
