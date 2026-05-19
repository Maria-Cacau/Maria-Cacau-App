from PyQt6.QtCore import QObject


class _EventBus(QObject):
    pass


bus = _EventBus()
