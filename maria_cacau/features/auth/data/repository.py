"""Repository da feature Auth: gerencia storage seguro e chamadas ao backend."""

import json

from maria_cacau.core.storage.security import SecurityStorage

from .apis import ConnectAuthAPI, DisconnectAuthAPI

_CREDENTIALS_KEY = "google-credentials"
_security        = SecurityStorage()


class AuthRepository:
    def configure(self, path: str) -> None:
        """Lê o JSON do caminho, persiste em storage seguro e envia ao backend."""
        with open(path, encoding="utf-8") as f:
            raw = f.read()
        _security.save(raw, _CREDENTIALS_KEY)
        ConnectAuthAPI().with_credentials(json.loads(raw)).call()

    def connect_from_storage(self) -> bool:
        """Lê credenciais salvas e autentica o backend. Retorna False se não houver."""
        raw = _security.retrieve(_CREDENTIALS_KEY)
        if not raw:
            return False
        ConnectAuthAPI().with_credentials(json.loads(raw)).call()
        return True

    def clear(self) -> bool:
        """Remove credenciais do storage e desautentica o backend."""
        removed = _security.delete(_CREDENTIALS_KEY)
        if removed:
            DisconnectAuthAPI().call()
        return removed
