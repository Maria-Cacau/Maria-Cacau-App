"""Canal de comunicação entre o ViewModel e o Controller."""

from typing import Final

from PyQt6.QtCore import QObject, pyqtSignal


class CpfValidationSignals(QObject):
    result = pyqtSignal(object)


signals: Final = CpfValidationSignals()
