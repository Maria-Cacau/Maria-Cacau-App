"""Eventos observáveis da feature Auth."""

from enum import Enum


class FeatureEvents(Enum):
    CERT_SET   = "Certificado configurado"
    CERT_CLEAR = "Certificado removido"
    CERT_ERROR = "Erro ao configurar certificado"
