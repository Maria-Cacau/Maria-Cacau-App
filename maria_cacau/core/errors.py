from typing import NamedTuple


class AppError(NamedTuple):
    """Estrutura de uma mensagem de erro/info para exibição no PopUp."""
    titulo: str
    subtitulo: str
    detalhe: str


# ── Leitura de arquivo ────────────────────────────────────────────────────────

A001 = AppError(
    titulo="Erro na leitura do arquivo",
    subtitulo='Arquivo não é ".xlsx"',
    detalhe='O arquivo escolhido não é compatível com o programa. '
            'Procure um arquivo Excel do tipo ".xlsx"\n\nCódigo do erro: A001',
)
"""Arquivo selecionado não possui extensão .xlsx."""

A002 = AppError(
    titulo="Erro na leitura do arquivo",
    subtitulo="Colunas não encontradas",
    detalhe="O arquivo escolhido não é compatível com o programa. "
            "Procure o arquivo padrão.\n\nCódigo do erro: A002",
)
"""Colunas esperadas não encontradas na planilha."""

A003 = AppError(
    titulo="Erro na leitura do arquivo",
    subtitulo="Coluna incompatível",
    detalhe='Houve um problema ao ler a coluna "DATA ENTREGA". '
            "Verifique os dados da coluna e tente novamente.\n\nCódigo do erro: A003",
)
"""Coluna DATA ENTREGA com formato inválido ou ausente."""

A004 = AppError(
    titulo="Erro na leitura do arquivo",
    subtitulo="Arquivo vazio",
    detalhe="O arquivo está vazio, não tem nenhuma linha para ser lida."
            "\n\nCódigo do erro: A004",
)
"""Planilha não contém nenhuma linha de dados."""

# ── Gerais ────────────────────────────────────────────────────────────────────

E001 = AppError(
    titulo="Erro inesperado",
    subtitulo="Erro na leitura do arquivo",
    detalhe="Um erro inesperado aconteceu. Contate alguém do suporte técnico."
            "\n\nCódigo do erro: E001",
)
"""Erro genérico não tratado."""


# ── Sucesso ───────────────────────────────────────────────────────────────────

def planilha_ok(linhas: int) -> AppError:
    """Confirmação de leitura bem-sucedida da planilha."""
    return AppError(
        titulo="Concluído",
        subtitulo="Planilha lida com sucesso",
        detalhe=f"Foi encontrada(s) {linhas} linhas.",
    )
