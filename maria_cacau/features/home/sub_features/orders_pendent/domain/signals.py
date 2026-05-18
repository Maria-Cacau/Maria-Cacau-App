"""Sinais compartilhados dentro do módulo"""

from typing import Final

from PyQt6.QtCore import QObject, pyqtSignal


class OrdersSignals(QObject):
    report_generated = pyqtSignal(object)
    error = pyqtSignal(object)

signals: Final = OrdersSignals()
