######    Gui Reis   -   guisreis25@gmail.com    ######    COPYRIGHT © 2020 KINGS

# -*- coding: utf-8 -*-

from maria_cacau.features.home.home_view import Gui_main

import sys
from PyQt6.QtWidgets import QApplication
from PyQt6.QtCore import Qt


def main():
    app = QApplication(sys.argv)
    app.styleHints().setColorScheme(Qt.ColorScheme.Light)

    win = Gui_main()

    win.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
