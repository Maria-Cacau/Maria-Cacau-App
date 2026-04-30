"""Barra de status da aplicação: planilha conectada, credenciais e estado de carregamento."""

from PyQt6.QtCore import QTimer
from PyQt6.QtWidgets import QLabel, QStatusBar

from maria_cacau.assets import strings


class GuiStatusBar(QStatusBar):
    _READY   = '#388e3c'
    _LOADING = '#C27D18'
    _WARN    = '#A07800'

    def __init__(self) -> None:
        super().__init__()
        self.setSizeGripEnabled(False)

        self._lbl_info = QLabel(strings.SB_SEM_CREDENCIAIS)
        self.addWidget(self._lbl_info)
        self.addPermanentWidget(QLabel(strings.SB_COPYRIGHT))

        self._has_cred:  bool = False
        self._has_sheet: bool = False
        self._sheet_fmt: str  = ''
        self._loading_msg: str = ''
        self._elapsed: int = 0
        self._ticking: bool = False

        self._set_color(self._WARN)

    ## Atualiza o status das credenciais
    def set_credentials(self, ok: bool) -> None:
        self._has_cred = ok
        self._update_info()
        self._update_color()

    ## Atualiza o nome e id da planilha conectada
    def set_sheet(self, name: str, sheet_id: str) -> None:
        self._has_sheet = True
        self._sheet_fmt = strings.SB_PLANILHA.format(nome=name, id=sheet_id)
        self._update_info()
        self._update_color()

    ## Muda para o estado de carregamento (laranja) e inicia o cronômetro
    def set_loading(self, msg: str = '') -> None:
        self._loading_msg = msg or strings.SB_CARREGANDO
        self._elapsed = 0
        self._ticking = True
        self._lbl_info.setText(f'0s  {self._loading_msg}')
        self._set_color(self._LOADING)
        QTimer.singleShot(1000, self._tick)

    ## Mostra mensagem de sucesso e reverte para o estado normal após 3s
    def set_success(self, msg: str = '') -> None:
        self._ticking = False
        self._lbl_info.setText(msg or strings.SB_SUCESSO)
        self._set_color(self._READY)
        QTimer.singleShot(3000, self._restore)

    ## Volta para o estado normal
    def set_ready(self) -> None:
        self._ticking = False
        self._restore()

    def _tick(self) -> None:
        if not self._ticking:
            return
        self._elapsed += 1
        self._lbl_info.setText(f'{self._elapsed}s  {self._loading_msg}')
        self._lbl_info.repaint()
        QTimer.singleShot(1000, self._tick)

    def _restore(self) -> None:
        self._update_info()
        self._update_color()

    def _update_info(self) -> None:
        if not self._has_cred:
            self._lbl_info.setText(strings.SB_SEM_CREDENCIAIS)
        elif self._has_sheet:
            self._lbl_info.setText(self._sheet_fmt)
        else:
            self._lbl_info.setText(strings.SB_SEM_PLANILHA)

    def _update_color(self) -> None:
        ready = self._has_cred and self._has_sheet
        self._set_color(self._READY if ready else self._WARN)

    def _set_color(self, color: str) -> None:
        self.setStyleSheet(f"""
            QStatusBar {{ background: {color}; }}
            QStatusBar::item {{ border: none; }}
            QLabel {{ color: white; padding: 0 6px; font: 9pt Arial; }}
        """)
