"""Utilitários de telefone brasileiro."""


def normalize_phone(raw: str) -> str:
    """Só dígitos, com código do país.

    Nunca acrescenta o nono dígito: DDD acima de 28 não tem, e "corrigir" inventa um número que
    não existe. A regra é preservar o número como está registrado, só removendo formatação.
    """
    digits = "".join(c for c in raw if c.isdigit())
    return digits if digits.startswith("55") else "55" + digits
