from PyQt6.QtCore import QObject, pyqtSignal


class _EventBus(QObject):
    cache_cleared = pyqtSignal()


bus = _EventBus()
