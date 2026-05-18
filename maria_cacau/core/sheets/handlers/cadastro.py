"""Processa os dados da aba Cadastro da planilha Google Sheets."""

import re
from datetime import datetime

import pandas as pd
from pandas import DataFrame

class CadastroAnalyseHandler:
    def __init__(self, raw_rows: list, show_popup: bool = True) -> None:
        self.arqUsados: dict = {}
        self.dtsPed: dict = {}

        self._colsFiltro: dict = {
            "sage":       ['pedido', 'modalidade', 'destinatário', 'cpf', 'email', 'cep', 'rua', 'compl.', 'bairro', 'cidade', '$frete', 'total', 'tel', 'evento'],
            "envio":      ['pedido', 'modalidade', 'nome comprador', 'tel', 'email', 'cep', 'rua', 'compl.', 'bairro', 'cidade', 'cpf', 'evento'],
            "pula modal": ['motoboy', 'guarita', 'feira', 'fabrica', 'entrega'],
            "entrega":    ['pedido', 'destinatário', 'modalidade', 'tel', 'quanto\nfalta\npagar?', 'data'],
            "produtos":   ['pedido', 'data', 'modalidade', 'tel', 'q1', 'prod1', 'q2', 'prod2', 'q3', 'prod3', 'q4', '-', 'q5', 'prod5', 'q6', 'prod6', 'q7', 'prod7', 'outro\nespec.'],
        }

        all_cols = list(set(
            self._colsFiltro["sage"] +
            self._colsFiltro["envio"] +
            self._colsFiltro["entrega"] +
            self._colsFiltro["produtos"]
        ))

        headers = self._normalize_headers(raw_rows[0])
        df = DataFrame(raw_rows[1:], columns=headers)

        if df.columns.duplicated().any():
            df = df.loc[:, ~df.columns.duplicated()]

        available_cols = [c for c in all_cols if c in df.columns]
        self.arq = df[df['pedido'] != ''][available_cols].reset_index(drop=True)

        _NUMERIC_COLS = ['quanto\nfalta\npagar?', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7']
        for col in _NUMERIC_COLS:
            if col in self.arq.columns:
                self.arq[col] = pd.to_numeric(
                    self.arq[col].astype(str).str.replace(',', '.', regex=False),
                    errors='coerce',
                ).fillna(0)

        qDts = self.arq['data'].value_counts()
        self.dtsPed = {str(d)[:10]: int(c) for d, c in qDts.items()}


    ## Método especial: Pega as colunas já filtradas
    def get_col(self, k_: str) -> list:
        return self._colsFiltro[k_]

    ## Método especial: Pega as datas
    def get_dates(self) -> dict:
        return self.dtsPed

    ## Método especial: Devolve a planilha filtrada por data
    def get_data(self, l_: list, d_: str) -> DataFrame:
        if d_ in self.arqUsados:
            return self.arqUsados[d_][l_]
        self.arqUsados[d_] = self.arq[self.arq['data'].str[:10] == d_].reset_index(drop=True)
        return self.arqUsados[d_][l_]

    @staticmethod
    def _normalize_headers(headers: list) -> list:
        result = []
        first_empty_done = False
        for h in headers:
            h = re.sub(r"\n\s+", "\n", h).lower()
            if h == "" and not first_empty_done:
                h = "pedido"
                first_empty_done = True
            result.append(h)
        return result
