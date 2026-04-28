"""Orquestra a autenticação e o acesso às abas da planilha."""

from typing import Final

from maria_cacau.core.sheets.handlers.cadastro import CadastroAnalyseHandler
from maria_cacau.core.sheets.service import service

class SheetsManager:
    def __init__(self) -> None:
        self._cadastro: CadastroAnalyseHandler = None

    def connect(self, sheet_id: str) -> None:
        """Autentica e aponta para a planilha. Não lê dados ainda."""
        if not service.is_authenticated():
            if not service.load_credentials_from_keychain():
                raise PermissionError("sem_credenciais")
        service.set_sheet(sheet_id)
        self._cadastro = None

    def load_cadastro(self) -> None:
        """Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ativar)."""
        if self._cadastro is None:
            raw_rows = service.get_cadastro_filtered(n_dates=20)
            self._cadastro = CadastroAnalyseHandler(raw_rows)

    @property
    def cadastro(self) -> CadastroAnalyseHandler:
        return self._cadastro


manager: Final = SheetsManager()
