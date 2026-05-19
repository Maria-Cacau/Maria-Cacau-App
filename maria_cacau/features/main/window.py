from PyQt6.QtCore import QRect
from PyQt6.QtWidgets import QApplication, QMainWindow, QMenuBar

from maria_cacau.assets import strings
from maria_cacau.core.observability import AppEvent, observability
from maria_cacau.features.home import HomeController
from maria_cacau.features.home.sub_features.status_bar.status_bar_view import \
    GuiStatusBar

from .handler import MenuHandler


class MainWindow(QMainWindow):
    def __init__(self) -> None:
        super().__init__()

        self._menu = MenuHandler()  
        self._home = HomeController()

        self._setup_window()

        observability.log(AppEvent.APP_START)

    def closeEvent(self, event) -> None:
        observability.log(AppEvent.APP_CLOSE)
        super().closeEvent(event)

    ### Internal setups
    def _setup_window(self) -> None:
        screen = QApplication.primaryScreen().availableGeometry()
        self.setWindowTitle(strings.APP_TITLE)
        self.setMinimumSize(screen.width() - 300, screen.height() - 200)
        self.showMaximized()

        self.setCentralWidget(self._home.view)
        self.setStatusBar(GuiStatusBar())
        self._setup_menus(screen)

    def _setup_menus(self, screen: QRect) -> None:
        menubar = QMenuBar(self)
        menubar.setGeometry(0, 0, screen.width(), 22)
        self.setMenuBar(menubar)
        self._menu.setup_menus(menubar)
