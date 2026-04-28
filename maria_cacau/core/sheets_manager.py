"""Orquestra a autenticação e o acesso às abas da planilha."""

from typing import Final

from maria_cacau.core.cadastro_analyse_handler import CadastroAnalyseHandler
from maria_cacau.core.google_sheets_service import service

_JSON_PATH = "/Users/kings/Downloads/projeto-contagem-494619-a4373e9b94ae.json"
_SHEET_ID  = "1T9i35d8EvEwb_Byq_UwHw_qnoHnvRoAYvnds7h6RbJw"


class SheetsManager:
    def __init__(self) -> None:
        self._cadastro: CadastroAnalyseHandler = None

    def connect(self) -> bool:
        if not service.is_authenticated():
            if not service.load_credentials_from_keychain():
                service.load_credentials_from_file(_JSON_PATH)
        service.set_sheet(_SHEET_ID)
        raw_rows = service.get_raw_data("Cadastro")
        self._cadastro = CadastroAnalyseHandler(raw_rows)
        return True

    @property
    def cadastro(self) -> CadastroAnalyseHandler:
        return self._cadastro


manager: Final = SheetsManager()
