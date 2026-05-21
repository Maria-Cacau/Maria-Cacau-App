"""Canal de comunicação entre o ViewModel (background thread) e o Controller (main thread)."""

from typing import Final

from PyQt6.QtCore import QObject, pyqtSignal


class AuthSignals(QObject):
    error = pyqtSignal(object)


signals: Final = AuthSignals()
