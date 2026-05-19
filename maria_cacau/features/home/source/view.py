from PyQt6.QtGui import QPainter, QPixmap
from PyQt6.QtWidgets import QHBoxLayout, QVBoxLayout, QWidget

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
        main_layout.addWidget(features.summary, stretch=3)

        right_layout = QVBoxLayout()
        right_layout.addWidget(features.deliveries, stretch=8)

        bottom_layout = QHBoxLayout()
        bottom_layout.addWidget(features.nota_fiscal, stretch=4)

        far_right_layout = QVBoxLayout()
        far_right_layout.addWidget(features.cpf)
        far_right_layout.addWidget(features.shipping_rate)
        bottom_layout.addLayout(far_right_layout, stretch=3)

        right_layout.addLayout(bottom_layout, stretch=4)
        main_layout.addLayout(right_layout, stretch=7)
