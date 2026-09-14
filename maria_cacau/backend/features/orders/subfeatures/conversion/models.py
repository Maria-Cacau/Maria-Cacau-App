from enum import StrEnum


class SheetStatus(StrEnum):
    """Vocabulário aceito na coluna `Meta Status`.

    O dropdown da planilha só protege quem digita — escrita via API passa direto (verificado em
    13/09/2026), então o vocabulário precisa ser garantido aqui antes de gravar.
    """

    ENVIADO  = "Enviado"
    NEGADO   = "Negado"
    TESTE    = "Teste"
    IGNORADO = "Ignorado"
