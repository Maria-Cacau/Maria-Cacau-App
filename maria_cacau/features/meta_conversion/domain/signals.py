"""Canal de comunicação entre o ViewModel (background thread) e o Controller (main thread)."""

from typing import Final

from PyQt6.QtCore import QObject, pyqtSignal


class MetaConversionSignals(QObject):
    order_loaded = pyqtSignal(object)   # ConversionOrderModel
    order_failed = pyqtSignal(object)   # ErrorModel
    sent         = pyqtSignal()
    send_failed  = pyqtSignal(object)   # ErrorModel


signals: Final = MetaConversionSignals()
