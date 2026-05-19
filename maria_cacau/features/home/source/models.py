from dataclasses import dataclass

from PyQt6.QtWidgets import QWidget


@dataclass
class HomeFeaturesModel:
    summary: QWidget
    deliveries: QWidget
