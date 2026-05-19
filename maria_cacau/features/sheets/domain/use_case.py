from maria_cacau.core import session

from ..data import SheetsRepository
from .models import SheetModel


class SheetsUseCase:
    def __init__(self) -> None:
        self.repository = SheetsRepository()

    def connect(self, link: str, name: str) -> SheetModel:
        sheet = self.repository.connect(link, name)
        if session.is_authenticated:
            session.active_sheet_id = sheet.sheet_id
        return sheet

    def select(self, sheet_id: str) -> SheetModel:
        sheet = self.repository.select(sheet_id)
        session.active_sheet_id = sheet.sheet_id
        return sheet

    def load_all(self) -> list[SheetModel]:
        return self.repository.load_all()

    def find_by_link(self, link: str) -> SheetModel | None:
        return self.repository.find_by_link(link)

    def update_name(self, sheet_id: str, new_name: str) -> SheetModel:
        return self.repository.update_name(sheet_id, new_name)
