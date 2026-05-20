from PyQt6.QtCore import QTimer


class DSLoadingHandler:
    """Mixin que adiciona comportamento de loading animado a qualquer componente QObject."""

    _SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']

    def _setup_loading(self) -> None:
        """Deve ser chamado no __init__ do componente, após o super().__init__()."""
        self._loading_frame = 0
        self._loading_timer = QTimer(self)
        self._loading_timer.setInterval(80)
        self._loading_timer.timeout.connect(self._loading_tick)

    def _start_loading(self) -> None:
        self._loading_frame = 0
        self._loading_timer.start()

    def _stop_loading(self) -> None:
        self._loading_timer.stop()

    def _loading_tick(self) -> None:
        frame = self._SPINNER_FRAMES[self._loading_frame % len(self._SPINNER_FRAMES)]
        self._loading_frame += 1
        self._on_loading_tick(frame)

    def _on_loading_tick(self, frame: str) -> None:
        """Implementar no componente: o que fazer com cada frame do spinner."""
        raise NotImplementedError
