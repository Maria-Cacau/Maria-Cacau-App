from typing import Final

from PyQt6.QtCore import QObject, pyqtSignal


class SheetsSignals(QObject):
    error = pyqtSignal(object)


signals: Final = SheetsSignals()
