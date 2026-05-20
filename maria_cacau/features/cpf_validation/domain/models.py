"""Models utilizados no módulo"""

from dataclasses import dataclass


@dataclass
class CpfValidationResult:
    cpf: str
    is_valid: bool
