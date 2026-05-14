"""POC — date picker moderno com QDateEdit + QSS."""

import sys

from PyQt6.QtCore import QDate
from PyQt6.QtGui import QFont
from PyQt6.QtWidgets import (QApplication, QDateEdit, QHBoxLayout, QLabel,
                             QPushButton, QVBoxLayout, QWidget)

_QSS_FIELD = """
    QDateEdit {
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 4px 10px;
        font-size: 13px;
        background-color: #ffffff;
        color: #1a1a1a;
        min-width: 120px;
    }
    QDateEdit:focus {
        border-color: #8B5E3C;
    }
    QDateEdit::drop-down {
        border: none;
        width: 22px;
    }
    QDateEdit::down-arrow {
        image: none;
        width: 0;
    }
"""

_QSS_BTN_PRIMARY = """
    QPushButton {
        background-color: #2b2b2b;
        color: white;
        border: none;
        border-radius: 6px;
        padding: 6px 16px;
        font-size: 13px;
    }
    QPushButton:hover  { background-color: #444; }
    QPushButton:pressed { background-color: #111; }
"""

_QSS_BTN_SECONDARY = """
    QPushButton {
        background-color: white;
        color: #2b2b2b;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 6px 16px;
        font-size: 13px;
    }
    QPushButton:hover  { background-color: #f5f5f5; }
    QPushButton:pressed { background-color: #e8e8e8; }
"""


def _date_field(label: str, date: QDate) -> tuple[QVBoxLayout, QDateEdit]:
    col = QVBoxLayout()
    col.setSpacing(4)

    lbl = QLabel(label)
    lbl.setFont(QFont("Arial", 10))
    lbl.setStyleSheet("color: #555555; background: transparent;")

    field = QDateEdit(date)
    field.setDisplayFormat("dd/MM/yyyy")
    field.setCalendarPopup(True)
    field.setStyleSheet(_QSS_FIELD)

    col.addWidget(lbl)
    col.addWidget(field)
    return col, field


class DateRangePicker(QWidget):
    def __init__(self) -> None:
        super().__init__()
        self.setWindowTitle("POC — Date Picker")
        self.setMinimumSize(520, 120)
        self.setStyleSheet("""
            QWidget { background-color: #fafafa; color: #1a1a1a; }
        """)

        today = QDate.currentDate()
        week_start = today.addDays(-(today.dayOfWeek() - 1))
        week_end   = today.addDays(7 - today.dayOfWeek())

        row = QHBoxLayout(self)
        row.setContentsMargins(20, 20, 20, 20)
        row.setSpacing(12)

        start_col, self.dts_start = _date_field("Data inicial", week_start)
        end_col,   self.dts_end   = _date_field("Data final",   week_end)

        row.addLayout(start_col)
        row.addLayout(end_col)
        row.addSpacing(8)

        btn_row = QVBoxLayout()
        btn_row.addSpacing(18)
        btn_row.setSpacing(0)

        btn_consult = QPushButton("🔍 Consultar")
        btn_consult.setStyleSheet(_QSS_BTN_PRIMARY)
        btn_consult.clicked.connect(self._on_consultar)

        btn_clear = QPushButton("Limpar")
        btn_clear.setStyleSheet(_QSS_BTN_SECONDARY)
        btn_clear.clicked.connect(self._on_limpar)

        btn_pair = QHBoxLayout()
        btn_pair.setSpacing(6)
        btn_pair.addWidget(btn_consult)
        btn_pair.addWidget(btn_clear)

        btn_row.addLayout(btn_pair)
        row.addLayout(btn_row)
        row.addStretch()

    def _on_consultar(self) -> None:
        start = self.dts_start.date().toString("dd/MM/yyyy")
        end   = self.dts_end.date().toString("dd/MM/yyyy")
        print(f"Consultar: {start} → {end}")

    def _on_limpar(self) -> None:
        today = QDate.currentDate()
        self.dts_start.setDate(today.addDays(-(today.dayOfWeek() - 1)))
        self.dts_end.setDate(today.addDays(7 - today.dayOfWeek()))


if __name__ == "__main__":
    app = QApplication(sys.argv)
    w = DateRangePicker()
    w.show()
    sys.exit(app.exec())
