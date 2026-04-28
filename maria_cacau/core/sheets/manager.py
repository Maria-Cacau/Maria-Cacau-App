"""Orquestra a autenticação e o acesso às abas da planilha."""

from typing import Final

from maria_cacau.core.sheets.handlers.cadastro import CadastroAnalyseHandler
from maria_cacau.core.sheets.service import service

class SheetsManager:
    def __init__(self) -> None:
        self._cadastro: CadastroAnalyseHandler = None

    def connect(self, sheet_id: str) -> bool:
        if not service.is_authenticated():
            if not service.load_credentials_from_keychain():
                raise PermissionError("sem_credenciais")
        service.set_sheet(sheet_id)
        raw_rows = service.get_raw_data("Cadastro")
        self._cadastro = CadastroAnalyseHandler(raw_rows)
        return True

    @property
    def cadastro(self) -> CadastroAnalyseHandler:
        return self._cadastro


manager: Final = SheetsManager()
