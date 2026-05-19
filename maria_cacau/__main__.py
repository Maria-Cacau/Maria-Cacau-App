"""Entry point da aplicação. Execute com: python -m maria_cacau"""

import sys

from PyQt6.QtWidgets import QApplication

from maria_cacau.app import AppCoordinator


def main():
    if sys.platform == 'win32':
        import ctypes
        ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID('com.mariacacau.app')

    app = QApplication(sys.argv)

    coordinator = AppCoordinator(app)
    coordinator.launch()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
