"""Entry point da aplicação. Execute com: python -m maria_cacau"""

import sys

from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import QApplication

from maria_cacau.features.home.home_view import GuiMain


def main():
    app = QApplication(sys.argv)
    app.styleHints().setColorScheme(Qt.ColorScheme.Light)

    win = GuiMain()

    win.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
