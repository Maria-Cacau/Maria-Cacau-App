"""Códigos de erro da aplicação com estrutura AppError."""

from typing import NamedTuple

from .models import ErrorModel


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


# ── Credenciais ──────────────────────────────────────────────────────────────

C001 = AppError(
    titulo="Configuração cancelada",
    subtitulo="Nenhum arquivo selecionado",
    detalhe="Nenhum arquivo foi selecionado. Tente novamente.\n\nCódigo do erro: C001",
)
"""Usuário cancelou o seletor de arquivo."""

C002 = AppError(
    titulo="Erro ao configurar certificado",
    subtitulo="Arquivo inválido",
    detalhe="O arquivo selecionado não é um certificado válido. "
            "Selecione o arquivo .json da Service Account.\n\nCódigo do erro: C002",
)
"""Arquivo selecionado não é um JSON válido de Service Account."""


# ── Sucesso ───────────────────────────────────────────────────────────────────

C005 = AppError(
    titulo="Link inválido",
    subtitulo="Não foi possível identificar a planilha",
    detalhe="O link inserido não é uma URL válida do Google Sheets. "
            "Cole o link completo da planilha ou apenas o ID.\n\nCódigo do erro: C005",
)
"""URL ou ID de planilha inválido."""

C004 = AppError(
    titulo="Certificado não configurado",
    subtitulo="Nenhuma credencial encontrada",
    detalhe='Acesse o menu "Segurança → Configurar certificado" e selecione o arquivo .json '
            "da Service Account para continuar.\n\nCódigo do erro: C004",
)
"""Tentativa de conectar sem credenciais salvas no keychain."""

C003 = AppError(
    titulo="Nenhum certificado encontrado",
    subtitulo="Nada para remover",
    detalhe="Não há nenhum certificado salvo no sistema.\n\nCódigo do erro: C003",
)
"""Nenhuma credencial encontrada no keychain ao tentar limpar."""


def certificado_ok() -> AppError:
    """Confirmação de certificado configurado com sucesso."""
    return AppError(
        titulo="Concluído",
        subtitulo="Certificado configurado com sucesso",
        detalhe="As credenciais foram salvas e já estão prontas para uso.",
    )


def certificado_limpo() -> AppError:
    """Confirmação de credenciais removidas com sucesso."""
    return AppError(
        titulo="Concluído",
        subtitulo="Certificado removido com sucesso",
        detalhe="As credenciais foram removidas do sistema.",
    )


def planilha_conectada(nome: str) -> AppError:
    """Confirmação de planilha selecionada com sucesso."""
    return AppError(
        titulo="Concluído",
        subtitulo="Planilha selecionada",
        detalhe=f'"{nome}" foi selecionada com sucesso.',
    )


def unexpected_error(cause: Exception) -> ErrorModel:
    """Erro genérico para exceções não tratadas."""
    return ErrorModel(
        code="E001",
        user_message="Um erro inesperado aconteceu. Contate o suporte técnico.",
        dev_message=f"{type(cause).__name__}: {cause}",
    )


def planilha_ok(linhas: int) -> AppError:
    """Confirmação de leitura bem-sucedida da planilha."""
    return AppError(
        titulo="Concluído",
        subtitulo="Planilha lida com sucesso",
        detalhe=f"Foi encontrada(s) {linhas} linhas.",
    )
