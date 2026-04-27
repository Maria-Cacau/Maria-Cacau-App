"""Metadados centralizados do pacote maria-cacau."""

from importlib.metadata import metadata as _meta

_m = _meta("maria-cacau")

__version__     = _m["Version"]
__description__ = _m["Summary"]
__author__      = _m["Author-email"]

__app_name__    = "MC - Análise"
__copyright__   = "COPYRIGHT © 2020 KINGS"
__icon_win__    = "maria_cacau/assets/images/logo-icone.ico"
__icon_mac__    = "maria_cacau/assets/images/logo-icone.icns"
