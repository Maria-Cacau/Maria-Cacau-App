from PyQt6.QtGui import QPainter, QPixmap
from PyQt6.QtWidgets import QHBoxLayout, QWidget

from .models import HomeFeaturesModel


class HomeView(QWidget):
    def __init__(self, image_path: str) -> None:
        super().__init__()
        self._pixmap = QPixmap(image_path)

    def paintEvent(self, event) -> None:
        painter = QPainter(self)
        painter.drawPixmap(self.rect(), self._pixmap)

    def setup_layout(self, features: HomeFeaturesModel) -> None:
        main_layout = QHBoxLayout(self)
        main_layout.addWidget(features.summary, stretch=1)
        main_layout.addWidget(features.deliveries, stretch=1)
