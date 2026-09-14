"""Eventos de observabilidade da feature Meta Conversion."""

from enum import Enum


class FeatureEvents(Enum):
    SEARCH_ACTION = 'Meta conversion search triggered'
    SEND_ACTION   = 'Meta conversion send triggered'
    SENT          = 'RESULT  feature=meta_conversion'  # extra: order=
    ERROR         = 'ERROR  feature=meta_conversion'   # extra: code=
