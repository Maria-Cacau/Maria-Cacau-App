from PyQt6.QtGui import QFont
from PyQt6.QtWidgets import QComboBox


class DSComboBox(QComboBox):

    def __init__(self, parent=None) -> None:
        super().__init__(parent)
        self.setFont(QFont('Arial', 10))
