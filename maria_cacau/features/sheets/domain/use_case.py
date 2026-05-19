from ..data import SheetsRepository
from .models import SheetModel


class SheetsUseCase:
    def __init__(self) -> None:
        self.repository = SheetsRepository()

    def connect(self, link: str, name: str) -> SheetModel:
        return self.repository.connect(link, name)

    def select(self, sheet_id: str) -> SheetModel:
        return self.repository.select(sheet_id)

    def load_all(self) -> list[SheetModel]:
        return self.repository.load_all()

    def find_by_link(self, link: str) -> SheetModel | None:
        return self.repository.find_by_link(link)

    def update_name(self, sheet_id: str, new_name: str) -> SheetModel:
        return self.repository.update_name(sheet_id, new_name)

    def auto_select_last(self) -> SheetModel | None:
        return self.repository.auto_select_last()
