from typing import Final

from PyQt6.QtCore import QObject, pyqtSignal


class SheetsSignals(QObject):
    sheet_connected = pyqtSignal(object)
    sheet_selected  = pyqtSignal(object)
    error           = pyqtSignal(object)


signals: Final = SheetsSignals()
