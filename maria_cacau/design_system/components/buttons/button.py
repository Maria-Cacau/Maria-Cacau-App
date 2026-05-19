from PyQt6.QtGui import QFont
from PyQt6.QtWidgets import QPushButton

from maria_cacau.design_system.handlers import DSLoadingHandler
from .states import DSButtonState


class DSButton(QPushButton, DSLoadingHandler):

    def __init__(self, text: str, parent=None) -> None:
        super().__init__(text, parent)
        self.setFont(QFont('Arial', 10))

        self._label = text
        self._state = DSButtonState.DEFAULT
        self._setup_loading()

    # ── API pública ──────────────────────────────────────────────────────────

    def set_state(self, state: DSButtonState) -> None:
        self._state = state

        if state == DSButtonState.DEFAULT:
            self._stop_loading()
            self.setText(self._label)
            self.setEnabled(True)

        elif state == DSButtonState.DISABLED:
            self._stop_loading()
            self.setText(self._label)
            self.setEnabled(False)

        elif state == DSButtonState.LOADING:
            self._start_loading()

    # ── DSLoadingHandler ─────────────────────────────────────────────────────

    def _on_loading_tick(self, frame: str) -> None:
        self.setText(frame)

    # ── QPushButton ──────────────────────────────────────────────────────────

    def mousePressEvent(self, event) -> None:
        if self._state == DSButtonState.LOADING:
            return
        super().mousePressEvent(event)
