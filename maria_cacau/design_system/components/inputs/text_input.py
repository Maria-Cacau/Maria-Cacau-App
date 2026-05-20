from PyQt6.QtGui import QFont
from PyQt6.QtWidgets import QLineEdit


class DSTextInput(QLineEdit):

    def __init__(self, parent=None) -> None:
        super().__init__(parent)
        self.setFont(QFont('Arial', 10))
        self.setStyleSheet("background-color: white;")
