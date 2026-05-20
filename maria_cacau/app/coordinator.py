from concurrent.futures import ThreadPoolExecutor

from PyQt6.QtCore import Qt, QTimer
from PyQt6.QtGui import QIcon
from PyQt6.QtWidgets import QApplication

from maria_cacau import __icon_mac__, __icon_win__
from maria_cacau.backend._server import BackendServer
from maria_cacau.core.bus import bus
from maria_cacau.core.network import LocalClient, configure
from maria_cacau.core.observability import AppEvent, observability
from maria_cacau.features import AppInitUseCase

from .window import MainWindow


class AppCoordinator:
    def __init__(self, app: QApplication) -> None:
        self._configure_app(app)
        self._window   = MainWindow()
        self._executor = ThreadPoolExecutor(max_workers=1)
        app.aboutToQuit.connect(self._on_quit)

    def launch(self) -> None:
        configure(LocalClient(backend=BackendServer()))
        
        self._window.show()
        QTimer.singleShot(0, self._on_launch)

    def _configure_app(self, app: QApplication) -> None:
        app.styleHints().setColorScheme(Qt.ColorScheme.Light)
        icon_path = __icon_win__ if app.platformName() == 'windows' else __icon_mac__
        app.setWindowIcon(QIcon(icon_path))

    def _on_launch(self) -> None:
        self._executor.submit(self._initialize)

    def _initialize(self) -> None:
        observability.log(AppEvent.APP_START)
        try:
            AppInitUseCase().initialize()
        except Exception:
            pass
        bus.app_init_finished.emit()

    def _on_quit(self) -> None:
        observability.log(AppEvent.APP_CLOSE)
