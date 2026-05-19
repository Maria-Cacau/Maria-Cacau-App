"""ViewModel da feature Auth: executa o UseCase em background e emite resultados via signals."""

from concurrent.futures import ThreadPoolExecutor

from maria_cacau.core.error import unexpected_error

from ..domain.signals import signals
from ..domain.use_case import AuthUseCase


class AuthViewModel:
    def __init__(self) -> None:
        self.use_case = AuthUseCase()
        self.executor = ThreadPoolExecutor(max_workers=1)


    def configure(self, path: str) -> None:
        self.executor.submit(lambda: self._configure(path))

    def _configure(self, path: str) -> None:
        try:
            self.use_case.configure(path)
            signals.credentials_configured.emit()
        except Exception as e:
            signals.error.emit(unexpected_error(e))


    def clear(self) -> None:
        self.executor.submit(self._clear)

    def _clear(self) -> None:
        try:
            if self.use_case.clear():
                signals.credentials_cleared.emit()
        except Exception as e:
            signals.error.emit(unexpected_error(e))


    def auto_connect(self) -> None:
        self.executor.submit(self._auto_connect)

    def _auto_connect(self) -> None:
        try:
            if self.use_case.connect_from_storage():
                signals.credentials_configured.emit()
        except Exception as e:
            signals.error.emit(unexpected_error(e))
