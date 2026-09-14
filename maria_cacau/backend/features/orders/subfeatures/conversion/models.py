from enum import StrEnum


class SheetStatus(StrEnum):
    """Vocabulário aceito na coluna `Meta Status`.

    A lista suspensa da planilha só protege quem digita — escrita via API passa direto, então o
    vocabulário precisa ser garantido aqui antes de gravar.
    """

    ENVIADO  = "Enviado"
    NEGADO   = "Negado"
    TESTE    = "Teste"
    IGNORADO = "Ignorado"
