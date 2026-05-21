from dataclasses import dataclass
from enum import Enum

from PyQt6.QtGui import QFont, QIcon
from PyQt6.QtWidgets import QMessageBox, QSizePolicy, QSpacerItem

from maria_cacau import asset
from maria_cacau.design_system.constants import DIALOG_MIN_WIDTH


class DSDialogIcon(Enum):
    CRITICAL = QMessageBox.Icon.Critical
    WARNING  = QMessageBox.Icon.Warning
    INFO     = QMessageBox.Icon.Information


@dataclass
class DSDialogModel:
    title:   str
    message: str
    icon:    DSDialogIcon = DSDialogIcon.CRITICAL
    detail:  str | None = None


class DSDialog(QMessageBox):

    def __init__(self) -> None:
        super().__init__()
        self._setup_ui()

    def _setup_ui(self) -> None:
        self.setWindowIcon(QIcon(asset('images/logo-icone.png')))
        self.setStyleSheet("QLabel{max-width: 400px;};")
        self.setIcon(QMessageBox.Icon.Critical)
        self.setStandardButtons(QMessageBox.StandardButton.Save)
        self.setDefaultButton(QMessageBox.StandardButton.Save)

        self.btOk = self.button(QMessageBox.StandardButton.Save)
        self.btOk.setFont(QFont('Arial', 10))
        self.btOk.setText("OK")

    def show(self, model: DSDialogModel) -> int:
        self.setWindowTitle(model.title)
        self.setText(model.message)
        self.setInformativeText(model.detail or "")
        self.setIcon(model.icon.value)
        self._apply_min_width()
        return self.exec()

    def _apply_min_width(self) -> None:
        grid = self.layout()
        spacer = QSpacerItem(DIALOG_MIN_WIDTH, 0, QSizePolicy.Policy.Minimum, QSizePolicy.Policy.Expanding)
        grid.addItem(spacer, grid.rowCount(), 0, 1, grid.columnCount())
