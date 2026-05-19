"""Repository da feature Auth: gerencia storage seguro e chamadas ao backend."""

import json

from maria_cacau.core.storage.security import SecurityStorage

from .apis import ConnectAuthAPI, DisconnectAuthAPI

_CREDENTIALS_KEY = "google-credentials"
_security        = SecurityStorage()


class AuthRepository:
    def configure(self, path: str) -> None:
        """Lê o JSON do caminho, envia ao backend e persiste apenas se der sucesso."""
        with open(path, encoding="utf-8") as f:
            raw = f.read()
        ConnectAuthAPI().with_credentials(json.loads(raw)).call()
        _security.save(raw, _CREDENTIALS_KEY)

    def read_credentials(self) -> dict | None:
        """Lê credenciais do storage sem fazer chamada HTTP."""
        raw = _security.retrieve(_CREDENTIALS_KEY)
        return json.loads(raw) if raw else None

    def clear(self) -> bool:
        """Remove credenciais do storage e desautentica o backend."""
        removed = _security.delete(_CREDENTIALS_KEY)
        if removed:
            DisconnectAuthAPI().call()
        return removed
