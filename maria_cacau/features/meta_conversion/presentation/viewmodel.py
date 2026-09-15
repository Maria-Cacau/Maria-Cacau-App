"""ViewModel da feature Meta Conversion: executa o UseCase em background e emite resultados via signals."""

from concurrent.futures import ThreadPoolExecutor

from maria_cacau.core.error import ErrorModel, unexpected_error

from ..domain.signals import signals
from ..domain.use_case import MetaConversionUseCase


class MetaConversionViewModel:
    def __init__(self) -> None:
        self.use_case = MetaConversionUseCase()
        self.executor = ThreadPoolExecutor(max_workers=1)

    def search(self, number: str) -> None:
        self.executor.submit(lambda: self._search(number))

    def send(self, number: str) -> None:
        self.executor.submit(lambda: self._send(number))

    def _search(self, number: str) -> None:
        try:
            signals.order_loaded.emit(self.use_case.get_order(number))
        except ErrorModel as e:
            signals.order_failed.emit(e)
        except Exception as e:
            signals.order_failed.emit(unexpected_error(e))

    def _send(self, number: str) -> None:
        try:
            self.use_case.send(number)
            signals.sent.emit()
        except ErrorModel as e:
            signals.send_failed.emit(e)
        except Exception as e:
            signals.send_failed.emit(unexpected_error(e))
