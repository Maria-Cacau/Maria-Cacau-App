"""Canal de comunicação entre o ViewModel (background thread) e o Controller (main thread)."""

from typing import Final

from PyQt6.QtCore import QObject, pyqtSignal


class SummarySignals(QObject):
    report_generated = pyqtSignal(object)
    error = pyqtSignal(object)


signals: Final = SummarySignals()
