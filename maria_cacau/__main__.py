"""Entry point da aplicação. Execute com: python -m maria_cacau"""

import sys

from PyQt6.QtCore import Qt
from PyQt6.QtWidgets import QApplication

from maria_cacau.features.home.home_view import Gui_main


def main():
    app = QApplication(sys.argv)
    app.styleHints().setColorScheme(Qt.ColorScheme.Light)

    win = Gui_main()

    win.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
