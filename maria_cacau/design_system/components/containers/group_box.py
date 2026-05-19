from PyQt6.QtGui import QFont
from PyQt6.QtWidgets import QGroupBox


class DSGroupBox(QGroupBox):

    def __init__(self, title: str, parent=None) -> None:
        super().__init__(title, parent)
        self.setFont(QFont('Arial', 12))
        self.setStyleSheet("""
            QGroupBox {
                border: 1px solid brown;
                margin-top: 1ex;
                padding-top: 14px;
            }
            QGroupBox::title {
                subcontrol-origin: margin;
                subcontrol-position: top left;
                left: 8px;
                padding: 0 4px;
            }
        """)
