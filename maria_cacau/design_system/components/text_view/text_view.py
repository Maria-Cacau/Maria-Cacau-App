from PyQt6.QtGui import QFont
from PyQt6.QtWidgets import QTextBrowser


class DSTextView(QTextBrowser):

    def __init__(self, parent=None) -> None:
        super().__init__(parent)
        self.setFont(QFont('Consolas', 10))

    def copy_to_clipboard(self) -> None:
        self.selectAll()
        self.copy()
