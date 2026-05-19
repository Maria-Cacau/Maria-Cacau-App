from PyQt6.QtCore import QObject, pyqtSignal


class _EventBus(QObject):
    app_initialized = pyqtSignal()


bus = _EventBus()
