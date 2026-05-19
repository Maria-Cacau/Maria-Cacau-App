from maria_cacau.assets import strings
from maria_cacau.core.bus import bus
from maria_cacau.core.session import session

from ..domain.state import StatusBarState
from .view import StatusBarView


class StatusBarController:

    def __init__(self) -> None:
        self.view = StatusBarView()
        self._state: StatusBarState = StatusBarState.NO_CREDENTIALS
        self._text: str             = strings.SB_SEM_CREDENCIAIS
        self._busy_count: int       = 0
        
        self._setup_signals()

    def _setup_signals(self) -> None:
        bus.app_init_finished.connect(self._on_init_finished)
        bus.credentials_configured.connect(self._on_credentials_configured)
        bus.credentials_cleared.connect(self._on_credentials_cleared)
        bus.sheet_connected.connect(self._on_sheet_updated)
        bus.sheet_selected.connect(self._on_sheet_updated)
        bus.request_started.connect(self._on_request_started)
        bus.request_finished.connect(self._on_request_finished)

    # ── Handlers ──────────────────────────────────────────────────────────────

    def _on_init_finished(self) -> None:
        if not session.has_credentials_cached:
            self._set_base(StatusBarState.NO_CREDENTIALS, strings.SB_SEM_CREDENCIAIS)
        elif not session.active_sheet_id:
            self._set_base(StatusBarState.NO_SHEET, strings.SB_SEM_PLANILHA)
        else:
            name = session.active_sheet_name or session.active_sheet_id
            self._set_base(StatusBarState.CONNECTED, strings.SB_PLANILHA.format(nome=name, id=session.active_sheet_id))

    def _on_credentials_configured(self) -> None:
        self._set_base(StatusBarState.NO_SHEET, strings.SB_SEM_PLANILHA)

    def _on_credentials_cleared(self) -> None:
        self._busy_count = 0
        self._set_base(StatusBarState.NO_CREDENTIALS, strings.SB_SEM_CREDENCIAIS)

    def _on_sheet_updated(self, sheet) -> None:
        text = strings.SB_PLANILHA.format(nome=sheet.name, id=sheet.sheet_id)
        self._set_base(StatusBarState.CONNECTED, text)

    def _on_request_started(self) -> None:
        self._busy_count += 1
        if self._busy_count == 1:
            self.view.set_state(StatusBarState.BUSY, self._text)

    def _on_request_finished(self) -> None:
        self._busy_count = max(0, self._busy_count - 1)
        if self._busy_count == 0:
            self.view.set_state(self._state, self._text)

    # ── Interno ───────────────────────────────────────────────────────────────

    def _set_base(self, state: StatusBarState, text: str) -> None:
        self._state = state
        self._text  = text
        if self._busy_count == 0:
            self.view.set_state(state, text)
