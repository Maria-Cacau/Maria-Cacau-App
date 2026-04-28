"""Barra de status da aplicação: planilha conectada, credenciais e estado de carregamento."""

from PyQt6.QtCore import QTimer
from PyQt6.QtWidgets import QLabel, QStatusBar

from maria_cacau.assets import strings


class GuiStatusBar(QStatusBar):
    _READY   = '#388e3c'
    _LOADING = '#C27D18'

    def __init__(self) -> None:
        super().__init__()
        self.setSizeGripEnabled(False)

        self._lbl_info = QLabel(strings.SB_SEM_PLANILHA)
        self.addWidget(self._lbl_info)

        self.addPermanentWidget(QLabel(strings.SB_COPYRIGHT))

        self._sheet_text: str = strings.SB_SEM_PLANILHA
        self._cred_text:  str = ''

        self._set_color(self._READY)

    ## Atualiza o nome e id da planilha conectada
    def set_sheet(self, name: str, sheet_id: str) -> None:
        self._sheet_text = strings.SB_PLANILHA.format(nome=name, id=sheet_id)
        self._update_info()

    ## Atualiza o status das credenciais
    def set_credentials(self, ok: bool) -> None:
        self._cred_text = f'  |  {strings.SB_CREDENCIAIS}' if ok else ''
        self._update_info()

    ## Muda para o estado de carregamento (laranja)
    def set_loading(self, msg: str = '') -> None:
        self._lbl_info.setText(msg or strings.SB_CARREGANDO)
        self._set_color(self._LOADING)

    ## Mostra mensagem de sucesso (verde) e reverte para o estado normal após 3s
    def set_success(self, msg: str = '') -> None:
        self._lbl_info.setText(msg or strings.SB_SUCESSO)
        self._set_color(self._READY)
        QTimer.singleShot(3000, self._update_info)

    ## Volta para o estado padrão (verde)
    def set_ready(self) -> None:
        self._update_info()
        self._set_color(self._READY)

    def _update_info(self) -> None:
        self._lbl_info.setText(self._sheet_text + self._cred_text)

    def _set_color(self, color: str) -> None:
        self.setStyleSheet(f"""
            QStatusBar {{ background: {color}; }}
            QStatusBar::item {{ border: none; }}
            QLabel {{ color: white; padding: 0 6px; font: 9pt Arial; }}
        """)
