from PyQt6.QtCore import QDate
from PyQt6.QtWidgets import QDateEdit, QSizePolicy


class DSDateInput(QDateEdit):

    def __init__(self, date: QDate | None = None, parent=None) -> None:
        super().__init__(date or QDate.currentDate(), parent)
        self.setDisplayFormat("dd/MM/yy")
        self.setCalendarPopup(True)
        self.setSizePolicy(QSizePolicy.Policy.Minimum, QSizePolicy.Policy.Fixed)
