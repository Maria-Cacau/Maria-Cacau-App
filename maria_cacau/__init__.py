"""Metadados centralizados do pacote maria-cacau."""

import tomllib
from importlib.metadata import metadata as _meta
from pathlib import Path

_m = _meta("maria-cacau")

__version__     = _m["Version"]
__description__ = _m["Summary"]
__author__      = _m["Author-email"]

__app_name__  = "MC Consultas"

_assets = Path(__file__).parent / 'assets'

def asset(relative_path: str) -> str:
    """Resolve um path relativo à pasta assets, funciona em dev e no .exe compilado."""
    return str(_assets / relative_path)

__icon_win__ = asset('images/logo-icone.ico')
__icon_mac__ = asset('images/logo-icone.icns')

_custom: dict = {}
try:
    with open(Path(__file__).parent.parent / 'pyproject.toml', 'rb') as _f:
        _custom = tomllib.load(_f).get('tool', {}).get('maria-cacau', {})
except FileNotFoundError:
    pass

__year__    = _custom.get('year',    '2020')
__company__ = _custom.get('company', 'KINGS')

__copyright__ = f"COPYRIGHT © {__year__} {__company__}"
