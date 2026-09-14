import re
from datetime import datetime, timedelta
from enum import Enum


class DateFormat(str, Enum):
    BR_SHORT = "%d/%m/%y"
    BR_FULL  = "%d/%m/%Y"


def to_datetime(value: str) -> datetime:
    for fmt in (DateFormat.BR_FULL, DateFormat.BR_SHORT):
        try:
            return datetime.strptime(value, fmt)
        except ValueError:
            continue
    raise ValueError(f"time data '{value}' does not match any known date format")


def normalize_date(val: str) -> str | None:
    """Normaliza uma data para DD/MM/YYYY aceitando os formatos DD/MM/YY e DD/MM/YYYY. Retorna None se inválida."""
    for fmt in (DateFormat.BR_SHORT, DateFormat.BR_FULL):
        try:
            return datetime.strptime(val.strip(), fmt).strftime(DateFormat.BR_FULL)
        except ValueError:
            continue
    return None


def normalize_order_number(value: str) -> str:
    """Normaliza o número do pedido para o formato com vírgula usado na planilha (`26512,1`)."""
    normalized = value.strip().replace('.', ',').replace('-', ',')
    if ',' not in normalized:
        normalized += ',0'
    return normalized


def to_dicts(header: list[str], rows: list[list]) -> list[dict]:
    """Converte linhas da planilha em lista de dicts usando o cabeçalho como chaves (lowercase, whitespace normalizado)."""
    keys = [re.sub(r'\s+', ' ', h).strip().lower() for h in header]
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
    d_start = to_datetime(start)
    d_end   = to_datetime(end)
    dates, current = set(), d_start
    while current <= d_end:
        dates.add(current.strftime(DateFormat.BR_FULL))
        current += timedelta(days=1)
    return dates
