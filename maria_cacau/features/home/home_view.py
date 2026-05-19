"""Janela principal da aplicação e orquestração das sub-features."""

from PyQt6.QtCore import QUrl
from PyQt6.QtGui import QAction, QDesktopServices, QPainter, QPixmap
from PyQt6.QtWidgets import (QApplication, QHBoxLayout, QMainWindow, QMenu,
                             QMenuBar, QVBoxLayout, QWidget)

from maria_cacau.assets import strings
from maria_cacau.core.observability import AppEvent, observability
from maria_cacau.features.auth import AuthController
from maria_cacau.features.home.sub_features import *
from maria_cacau.features.home.sub_features.status_bar.status_bar_view import \
    GuiStatusBar
from maria_cacau.features.sheets import SheetsController


class _BackgroundWidget(QWidget):
    def __init__(self, image_path: str):
        super().__init__()
        self._pixmap = QPixmap(image_path)

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.drawPixmap(self.rect(), self._pixmap)


class GuiMain(QMainWindow):
    def __init__(self) -> None:
        super().__init__()

        self.setWindowTitle(strings.APP_TITLE)

        tamTela = QApplication.primaryScreen().availableGeometry()
        self.setMinimumSize(tamTela.width()-300, tamTela.height()-200)
        self.showMaximized()

        self.menubar = QMenuBar(self)
        self.menubar.setGeometry(0, 0, tamTela.width(), 22)
        self.setMenuBar(self.menubar)

        root = _BackgroundWidget('maria_cacau/assets/images/background.png')
        self.setCentralWidget(root)

        self.summaryFeature   = SummaryController()
        self.deliveriesFeature = DeliveryController()
        self.notaFiscal       = NotaFiscalController()
        self.cpfFeature       = CpfValidationController()
        self.shippingRate     = ShippingRateController()

        self.statusBar = GuiStatusBar()
        self.setStatusBar(self.statusBar)

        self.authFeature   = AuthController()
        self.sheetsFeature = SheetsController()

        self.setup_ui(root)
        self.authFeature.auto_connect()
        self.sheetsFeature.auto_connect()
        observability.log(AppEvent.APP_START)

        del tamTela, self.shippingRate

    def closeEvent(self, event) -> None:
        observability.log(AppEvent.APP_CLOSE)
        super().closeEvent(event)

    def setup_ui(self, root: QWidget) -> None:
        self.menubar.addMenu(self.sheetsFeature.view)
        self.menubar.addMenu(self.authFeature.view)

        self.mnAjuda = QMenu(strings.MNU_AJUDA, self.menubar)
        self.menubar.addAction(self.mnAjuda.menuAction())

        self.actSobre = QAction(strings.ACT_DOCUMENTACAO, self)
        self.actSobre.triggered.connect(
            lambda: QDesktopServices.openUrl(QUrl(strings.URL_DOCUMENTACAO))
        )
        self.mnAjuda.addAction(self.actSobre)

        mainLayout = QHBoxLayout(root)
        mainLayout.addWidget(self.summaryFeature.view.root, stretch=3)

        rightLayout = QVBoxLayout()
        rightLayout.addWidget(self.deliveriesFeature.view.root, stretch=8)

        bottomLayout = QHBoxLayout()
        bottomLayout.addWidget(self.notaFiscal.view.root, stretch=4)

        farRightLayout = QVBoxLayout()
        farRightLayout.addWidget(self.cpfFeature.view.root)
        farRightLayout.addWidget(self.shippingRate.view.root)
        bottomLayout.addLayout(farRightLayout, stretch=3)

        rightLayout.addLayout(bottomLayout, stretch=4)
        mainLayout.addLayout(rightLayout, stretch=7)
