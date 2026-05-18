"""Sinais compartilhados dentro do módulo"""

from typing import Final

from PyQt6.QtCore import QObject, pyqtSignal

from .models import OrdersModel


class OrdersSignals(QObject):
    report_generated = pyqtSignal(OrdersModel)
    error = pyqtSignal(str)

signals: Final = OrdersSignals()
