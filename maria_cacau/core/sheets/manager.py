"""Orquestra a autenticação e o acesso às abas da planilha."""

from datetime import datetime
from typing import Final

from pandas import DataFrame

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
            raw_rows = service.get_cadastro_filtered()
            self._cadastro = CadastroAnalyseHandler(raw_rows, show_popup=False)

    def get_entregas_for_date(self, date_str: str) -> DataFrame:
        """Lê entregas de uma data específica direto da planilha (sem cache global).

        date_str deve estar no formato DD/MM/YY ou DD/MM/YYYY.
        Retorna DataFrame vazio se não houver dados para a data.
        """
        for fmt in ('%d/%m/%y', '%d/%m/%Y'):
            try:
                dt = datetime.strptime(date_str, fmt)
                break
            except ValueError:
                continue
        else:
            return DataFrame()

        date_variants = {dt.strftime('%d/%m/%y'), dt.strftime('%d/%m/%Y')}
        raw_rows = service.get_cadastro_for_dates(date_variants)
        if len(raw_rows) <= 1:
            return DataFrame()

        handler = CadastroAnalyseHandler(raw_rows, show_popup=False)
        # Usa a chave exata presente nos dados (pode ser YY ou YYYY)
        key = next((k for k in handler.dtsPed if k in date_variants), date_str)
        return handler.get_data(handler.get_col("entrega"), key)

    def clear_cache(self) -> None:
        """Descarta os dados em memória, forçando nova leitura na próxima consulta."""
        self._cadastro = None

    @property
    def cadastro(self) -> CadastroAnalyseHandler:
        return self._cadastro


manager: Final = SheetsManager()
