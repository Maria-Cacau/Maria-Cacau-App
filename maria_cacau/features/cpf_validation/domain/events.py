"""Eventos de observabilidade da feature CPF Validation."""

from enum import Enum


class FeatureEvents(Enum):
    VALIDATE_ACTION = 'Validate CPF triggered'
    RESULT          = 'RESULT  feature=cpf_validation'  # extra: valid=
