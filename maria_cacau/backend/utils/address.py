"""Utilitários de endereço brasileiro: CEP e o par cidade/UF."""

from .text import strip_accents

# Faixas de CEP por UF (Correios, dados públicos), pelos 5 primeiros dígitos, intervalo fechado.
# Os quatro estados menores (AP, RR, AC, RO) são recortes dentro da faixa de um estado maior.
#
# ⚠️ O bloco DF/GO/RO (70000–76999) é a parte menos verificada desta tabela — montada de memória
# sobre dado público dos Correios, sem conferir contra uma fonte oficial linha a linha. O resto
# foi validado contra as 27 capitais (uma por UF). Vale um spot-check antes de depender disso em
# produção, especialmente pedidos de Goiás/Rondônia/DF.
_CEP_RANGES: list[tuple[int, int, str]] = [
    (0,     19999, "sp"), (20000, 28999, "rj"), (29000, 29999, "es"), (30000, 39999, "mg"),
    (40000, 48999, "ba"), (49000, 49999, "se"), (50000, 56999, "pe"), (57000, 57999, "al"),
    (58000, 58999, "pb"), (59000, 59999, "rn"), (60000, 63999, "ce"), (64000, 64999, "pi"),
    (65000, 65999, "ma"), (66000, 68899, "pa"), (68900, 68999, "ap"), (69000, 69299, "am"),
    (69300, 69399, "rr"), (69400, 69899, "am"), (69900, 69999, "ac"), (70000, 72799, "df"),
    (72800, 76799, "go"), (76800, 76999, "ro"), (77000, 77999, "to"), (78000, 78999, "mt"),
    (79000, 79999, "ms"), (80000, 87999, "pr"), (88000, 89999, "sc"), (90000, 99999, "rs"),
]

# Nome do estado por extenso (sem acento) -> sigla. Cobre o caso "Manhuaçu - Minas Gerais".
_UF_NAMES: dict[str, str] = {
    "acre": "ac", "alagoas": "al", "amapa": "ap", "amazonas": "am", "bahia": "ba",
    "ceara": "ce", "distrito federal": "df", "espirito santo": "es", "goias": "go",
    "maranhao": "ma", "mato grosso": "mt", "mato grosso do sul": "ms", "minas gerais": "mg",
    "para": "pa", "paraiba": "pb", "parana": "pr", "pernambuco": "pe", "piaui": "pi",
    "rio de janeiro": "rj", "rio grande do norte": "rn", "rio grande do sul": "rs",
    "rondonia": "ro", "roraima": "rr", "santa catarina": "sc", "sao paulo": "sp",
    "sergipe": "se", "tocantins": "to",
}


def normalize_zip(raw: str) -> str:
    return "".join(c for c in raw if c.isdigit())


def split_city_state(raw: str) -> tuple[str, str | None]:
    """Separa `"Rio de Janeiro - RJ"` em `("riodejaneiro", "rj")`.

    Usar a cidade crua faria um eventual hash sair de `riodejaneiro-rj`, que não casa com nada —
    por isso a cidade vem só com a parte antes do hífen. A UF vem como sigla de duas letras ou
    por extenso.
    """
    city_part, _, state_part = raw.partition("-")
    city = strip_accents(city_part.strip().lower()).replace(" ", "")

    state_raw = strip_accents(state_part.strip().lower())
    if len(state_raw) == 2 and state_raw.isalpha():
        state = state_raw
    else:
        state = _UF_NAMES.get(state_raw)
    return city, state


def state_from_zip(zip_digits: str) -> str | None:
    """Fallback de UF por faixa de CEP, para quando a cidade não tem UF extraível."""
    if len(zip_digits) < 5 or not zip_digits.isdigit():
        return None
    prefix = int(zip_digits[:5])
    for start, end, uf in _CEP_RANGES:
        if start <= prefix <= end:
            return uf
    return None
