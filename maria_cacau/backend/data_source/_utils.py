from datetime import datetime, timedelta


def normalize_date(val: str) -> str | None:
    """Normaliza uma data para DD/MM/YYYY aceitando os formatos DD/MM/YY e DD/MM/YYYY. Retorna None se inválida."""
    for fmt in ("%d/%m/%y", "%d/%m/%Y"):
        try:
            return datetime.strptime(val.strip(), fmt).strftime("%d/%m/%Y")
        except ValueError:
            continue
    return None


def to_dicts(header: list[str], rows: list[list]) -> list[dict]:
    """Converte linhas da planilha em lista de dicts usando o cabeçalho como chaves (lowercase)."""
    keys = [h.lower() for h in header]
    return [dict(zip(keys, row)) for row in rows]


def to_ranges(row_numbers: list[int]) -> list[list[str]]:
    """Agrupa números de linha consecutivos em ranges A1 notation e divide em batches de 100."""
    ranges, start, end = [], row_numbers[0], row_numbers[0]
    for r in row_numbers[1:]:
        if r == end + 1:
            end = r
        else:
            ranges.append(f"{start}:{end}")
            start = end = r
    ranges.append(f"{start}:{end}")
    return [ranges[i:i + 100] for i in range(0, len(ranges), 100)]


def date_range(start: str, end: str) -> set[str]:
    """Retorna o conjunto de todas as datas (DD/MM/YYYY) entre start e end, inclusive."""
    d_start = datetime.strptime(start, "%d/%m/%Y")
    d_end   = datetime.strptime(end,   "%d/%m/%Y")
    dates, current = set(), d_start
    while current <= d_end:
        dates.add(current.strftime("%d/%m/%Y"))
        current += timedelta(days=1)
    return dates
