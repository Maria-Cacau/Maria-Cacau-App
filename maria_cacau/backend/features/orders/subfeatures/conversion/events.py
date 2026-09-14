"""Eventos de observabilidade do envio de conversão."""

from enum import Enum


class ConversionEvent(Enum):
    META_CONVERSION_SENT = 'META_CONVERSION_SENT'  # extra: order=, events_received=, fbtrace_id=, test_mode=
