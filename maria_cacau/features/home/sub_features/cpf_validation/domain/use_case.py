"""Regra de negócios: validação matemática de CPF."""

from .models import CpfValidationResult


def _is_valid_cpf(cpf: str) -> bool:
    digits = []
    for c in cpf:
        if '0' <= c <= '9':
            digits.append(ord(c) - 48)

    if len(digits) != 11:
        return False

    if digits.count(digits[0]) == 11:
        return False

    s = sum(digits[i] * (10 - i) for i in range(9))
    r = s % 11
    if (0 if r < 2 else 11 - r) != digits[9]:
        return False

    s = sum(digits[i] * (11 - i) for i in range(10))
    r = s % 11
    return (0 if r < 2 else 11 - r) == digits[10]


class CpfValidationUseCase:
    def validate(self, cpf: str) -> CpfValidationResult:
        return CpfValidationResult(cpf=cpf, is_valid=_is_valid_cpf(cpf))
