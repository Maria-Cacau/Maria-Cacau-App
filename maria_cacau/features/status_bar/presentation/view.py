from PyQt6.QtCore import QTimer
from PyQt6.QtWidgets import QLabel, QStatusBar

from maria_cacau.assets import strings

from ..domain.state import StatusBarState


class StatusBarView(QStatusBar):

    def __init__(self) -> None:
        super().__init__()
        self.setSizeGripEnabled(False)

        self._lbl_info = QLabel()
        self.addWidget(self._lbl_info)
        self.addPermanentWidget(QLabel(strings.SB_COPYRIGHT))

        self._base_text: str = ''
        self._base_state: StatusBarState = StatusBarState.NO_CREDENTIALS

        self.set_state(StatusBarState.NO_CREDENTIALS, strings.SB_SEM_CREDENCIAIS)

    def set_state(self, state: StatusBarState, text: str = '') -> None:
        self._base_state = state
        self._base_text  = text
        self._lbl_info.setText(text)
        self._apply_color(state.color)

    def notify_done(self, msg: str) -> None:
        self._lbl_info.setText(f'{msg}     {self._base_text}')
        QTimer.singleShot(3000, self._restore)

    def _restore(self) -> None:
        self._lbl_info.setText(self._base_text)
        self._apply_color(self._base_state.color)

    def _apply_color(self, color: str) -> None:
        self.setStyleSheet(f"""
            QStatusBar {{ background: {color}; }}
            QStatusBar::item {{ border: none; }}
            QLabel {{ color: white; padding: 0 6px; font: 9pt Arial; }}
        """)
