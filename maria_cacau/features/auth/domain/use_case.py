"""Caso de uso: gerencia credenciais da service account."""

from ..data import AuthRepository


class AuthUseCase:
    def __init__(self) -> None:
        self.repository = AuthRepository()

    def configure(self, path: str) -> None:
        """Lê o arquivo JSON, salva em storage seguro e autentica o backend."""
        self.repository.configure(path)

    def clear(self) -> bool:
        """Remove credenciais do storage e desautentica o backend."""
        return self.repository.clear()
