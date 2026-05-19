"""Caso de uso: gerencia credenciais da service account."""

from maria_cacau.core import session

from ..data import AuthRepository


class AuthUseCase:
    def __init__(self) -> None:
        self.repository = AuthRepository()

    def configure(self, path: str) -> None:
        """Lê o arquivo JSON, salva em storage seguro e autentica o backend."""
        self.repository.configure(path)
        session.is_authenticated = True

    def clear(self) -> bool:
        """Remove credenciais do storage e desautentica o backend."""
        removed = self.repository.clear()
        if removed:
            session.is_authenticated = False
        return removed
