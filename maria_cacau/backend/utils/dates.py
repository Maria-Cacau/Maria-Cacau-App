from datetime import datetime
from enum import Enum
from zoneinfo import ZoneInfo

TIMEZONE = ZoneInfo("America/Sao_Paulo")


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
