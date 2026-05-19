from ..data import SheetsRepository
from .models import Sheet


class SheetsUseCase:
    def __init__(self) -> None:
        self.repository = SheetsRepository()

    def connect(self, link: str, name: str) -> Sheet:
        return self.repository.connect(link, name)

    def select(self, sheet_id: str) -> Sheet:
        return self.repository.select(sheet_id)

    def load_all(self) -> list[Sheet]:
        return self.repository.load_all()

    def find_by_link(self, link: str) -> Sheet | None:
        return self.repository.find_by_link(link)

    def auto_select_last(self) -> Sheet | None:
        return self.repository.auto_select_last()
