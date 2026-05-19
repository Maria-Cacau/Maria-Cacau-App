from PyQt6.QtCore import QUrl
from PyQt6.QtGui import QAction, QDesktopServices
from PyQt6.QtWidgets import QMenu, QMenuBar

from maria_cacau.assets import strings
from maria_cacau.features.auth import AuthController
from maria_cacau.features.sheets import SheetsController


class MenuHandler:
    def __init__(self) -> None:
        self._auth   = AuthController()
        self._sheets = SheetsController()

    def setup_menus(self, menubar: QMenuBar) -> None:
        menubar.addMenu(self._sheets.view)
        menubar.addMenu(self._auth.view)
        self._create_help_menu(menubar)
    
    def _create_help_menu(self, menubar: QMenuBar) -> None:
        help_menu = QMenu(strings.MNU_AJUDA, menubar)
        menubar.addAction(help_menu.menuAction())

        doc_action = QAction(strings.ACT_DOCUMENTACAO, help_menu)
        doc_action.triggered.connect(
            lambda: QDesktopServices.openUrl(QUrl(strings.URL_DOCUMENTACAO))
        )
        help_menu.addAction(doc_action)
