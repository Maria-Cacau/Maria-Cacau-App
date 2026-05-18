"""Utilitários de formatação numérica."""


def normalize_decimal(value: str) -> str:
    """Converte número no formato brasileiro para o formato inglês.

    Remove o separador de milhar (.) e troca a vírgula decimal por ponto.
    Exemplos: "1.234,56" → "1234.56" | "99,90" → "99.90"
    """
    return value.replace(".", "").replace(",", ".")
