from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import QVBoxLayout, QWidget

from maria_cacau.assets import strings
from maria_cacau.design_system.aux_widgets import AuxWidgets


class NotaFiscalView(QWidget, AuxWidgets):
    def __init__(self) -> None:
        super().__init__()
        self._setup_ui()

    @property
    def view_title(self) -> str:
        return "Nota Fiscal"

    def _setup_ui(self) -> None:
        self._setup_components()
        self._setup_layout()

    def _setup_components(self) -> None:
        self.lblMain = self.lbl(strings.LBL_EM_BREVE, 11)
        self.lblMain.setAlignment(Qt.AlignmentFlag.AlignCenter)

    def _setup_layout(self) -> None:
        self.root = self.group_box(self.view_title)
        layout = QVBoxLayout(self.root)
        layout.addWidget(self.lblMain)
