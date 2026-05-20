"""Observabilidade centralizada do app."""

import logging
from enum import Enum
from pathlib import Path

_LOG_DIR  = Path.home() / '.mariacacau'
_LOG_FILE = _LOG_DIR / 'logs.log'
_FMT      = '%(asctime)s  %(levelname)-8s  %(message)s'
_DATE_FMT = '%Y-%m-%d %H:%M:%S'


class AppEvent(Enum):
    APP_START = 'APP_START'
    APP_CLOSE = 'APP_CLOSE'


class _Observability:
    def __init__(self) -> None:
        _LOG_DIR.mkdir(parents=True, exist_ok=True)
        self._log = logging.getLogger('maria_cacau')
        self._log.setLevel(logging.DEBUG)
        if not self._log.handlers:
            handler = logging.FileHandler(_LOG_FILE, encoding='utf-8')
            handler.setFormatter(logging.Formatter(_FMT, _DATE_FMT))
            self._log.addHandler(handler)

    def log(self, event: Enum, **extra) -> None:
        msg = event.value
        if extra:
            parts = '  '.join(
                f'{k}="{v}"' if isinstance(v, str) else f'{k}={v}'
                for k, v in extra.items()
            )
            msg += f'  {parts}'
        self._log.info(msg)


observability = _Observability()
