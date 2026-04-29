"""Entry point da aplicação. Execute com: python -m maria_cacau"""

import sys

from PyQt6.QtCore import Qt
from PyQt6.QtGui import QIcon
from PyQt6.QtWidgets import QApplication

from maria_cacau import __app_name__, __icon_mac__, __icon_win__
from maria_cacau.features.home.home_view import GuiMain


def main():
    if sys.platform == 'win32':
        import ctypes
        ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID('com.mariacacau.app')

    app = QApplication(sys.argv)
    app.styleHints().setColorScheme(Qt.ColorScheme.Light)

    icon_path = __icon_win__ if sys.platform == 'win32' else __icon_mac__
    app.setWindowIcon(QIcon(icon_path))

    win = GuiMain()
    win.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
