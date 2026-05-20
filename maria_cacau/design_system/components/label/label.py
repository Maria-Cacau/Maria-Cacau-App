from PyQt6.QtCore import Qt
from PyQt6.QtGui import QFont
from PyQt6.QtWidgets import QLabel


class DSLabel(QLabel):

    def __init__(self, text: str, size: int = 10, parent=None) -> None:
        super().__init__(text, parent)
        self.setFont(QFont('Arial', size))
        self.setAlignment(Qt.AlignmentFlag.AlignLeft | Qt.AlignmentFlag.AlignVCenter)
