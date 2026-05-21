from PyQt6.QtCore import QUrl
from PyQt6.QtGui import QAction, QDesktopServices
from PyQt6.QtWidgets import QMenu, QMenuBar

from maria_cacau.assets import strings
from maria_cacau.features import AuthController, SheetsController
from maria_cacau.features.cpf_validation import CpfValidationController


class MenuHandler:
    def __init__(self) -> None:
        self._auth   = AuthController()
        self._sheets = SheetsController()
        self._cpf    = CpfValidationController()

    def setup_menus(self, menubar: QMenuBar) -> None:
        menubar.addMenu(self._sheets.view)
        menubar.addMenu(self._auth.view)
        self._create_features_menu(menubar)
        self._create_help_menu(menubar)

    def _create_features_menu(self, menubar: QMenuBar) -> None:
        menu = QMenu(strings.MNU_FUNCIONALIDADES, menubar)
        menubar.addAction(menu.menuAction())

        act = QAction(self._cpf.view.menu_title, menu)
        act.setMenuRole(QAction.MenuRole.NoRole)
        act.triggered.connect(self._cpf.view.show)
        menu.addAction(act)

    def _create_help_menu(self, menubar: QMenuBar) -> None:
        help_menu = QMenu(strings.MNU_AJUDA, menubar)
        menubar.addAction(help_menu.menuAction())

        self._create_url_action(help_menu, strings.ACT_DOCUMENTACAO, strings.URL_DOCUMENTACAO)
        self._create_url_action(help_menu, strings.ACT_LANÇAMENTO, strings.URL_LANÇAMENTO)
        self._create_url_action(help_menu, strings.ACT_REPORTAR_PROBLEMA, strings.URL_REPORTAR_PROBLEMA)
    
    def _create_url_action(self, menu: QMenu, title: str, url: str) -> None:
        action = QAction(title, menu)
        action.triggered.connect(lambda: QDesktopServices.openUrl(QUrl(url)))
        menu.addAction(action)
