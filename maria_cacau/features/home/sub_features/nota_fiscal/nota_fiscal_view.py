"""Área de Nota Fiscal — em desenvolvimento."""

from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import QVBoxLayout

from maria_cacau.assets import strings
from maria_cacau.design_system.aux_widgets import AuxWidgets


class GuiDados(AuxWidgets):
    def __init__(self) -> None:
        super().__init__()

        self.root = self.group_box("Nota Fiscal")

        layout = QVBoxLayout(self.root)
        lbl = self.lbl(strings.LBL_EM_BREVE, 11)
        lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(lbl)
