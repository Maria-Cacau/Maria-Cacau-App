"""Entry point da aplicação. Execute com: python -m maria_cacau"""

import json
import sys

from PyQt6.QtCore import Qt
from PyQt6.QtGui import QIcon
from PyQt6.QtWidgets import QApplication

from maria_cacau import __app_name__, __icon_mac__, __icon_win__
from maria_cacau.backend._server import BackendServer
from maria_cacau.backend.data_source import data_source  # # TODO: REMOVER
from maria_cacau.core.network import LocalClient, configure
from maria_cacau.core.sheets._helper import (  # # TODO: REMOVER
    read_credentials, read_sheets)
from maria_cacau.features.home.home_view import GuiMain


def main():
    configure(LocalClient(backend=BackendServer()))

    ## TODO: REMOVER
    if raw := read_credentials():
        data_source.set_credentials(json.loads(raw))
    if sheets := read_sheets():
        data_source.set_sheet(sheets[-1]['sheet_id'])
    ## TODO: REMOVER

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
