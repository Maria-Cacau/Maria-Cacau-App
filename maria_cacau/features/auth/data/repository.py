"""Repository da feature Auth: gerencia storage seguro e chamadas ao backend."""

import json
from pathlib import Path

from maria_cacau.core.storage import CacheStorage, SecurityStorage, StorageKey

from ..domain.errors import InvalidMetaCredentialsError, NoCachedCredentialsError
from .apis import ConnectAuthAPI, DisconnectAuthAPI

_CREDENTIALS_KEY = "google-credentials"

# Bloco próprio do app dentro do JSON da service account — sai antes de salvar, para a credencial
# do Google guardada continuar idêntica ao arquivo original.
_APP_BLOCK = "maria_cacau"

_security = SecurityStorage()
_cache    = CacheStorage(Path.home() / ".mariacacau")


class AuthRepository:
    def configure(self, path: str) -> None:
        """Lê o JSON do caminho, envia ao backend e persiste apenas se der sucesso."""
        with open(path, encoding="utf-8") as f:
            credentials = json.load(f)

        meta = self._parse_meta(credentials.pop(_APP_BLOCK, None))

        ConnectAuthAPI().with_credentials(credentials).call()
        _security.save(json.dumps(credentials), _CREDENTIALS_KEY)

        if meta:
            _security.save(meta["access_token"], StorageKey.META_ACCESS_TOKEN)
            _cache.save(
                {"dataset_id": meta["dataset_id"], "test_event_code": meta.get("test_event_code") or None},
                StorageKey.META_SETTINGS,
            )

    def pre_login(self, sheet_id: str | None) -> None:
        """Reenvia credenciais ao backend com o sheet_id atual."""
        credentials = self.read_credentials()
        if not credentials:
            raise NoCachedCredentialsError()
        ConnectAuthAPI().with_credentials(credentials, sheet_id=sheet_id).call()

    def read_credentials(self) -> dict | None:
        """Lê credenciais do storage sem fazer chamada HTTP."""
        raw = _security.retrieve(_CREDENTIALS_KEY)
        return json.loads(raw) if raw else None

    def clear(self) -> bool:
        """Remove credenciais do storage e desautentica o backend."""
        removed = _security.delete(_CREDENTIALS_KEY)
        _security.delete(StorageKey.META_ACCESS_TOKEN)
        _cache.delete(StorageKey.META_SETTINGS)
        if removed:
            DisconnectAuthAPI().call()
        return removed

    @staticmethod
    def _parse_meta(block: dict | None) -> dict | None:
        """Valida antes de qualquer gravação — bloco inválido não salva nada, nem pela metade."""
        if block is None or "meta" not in block:
            return None
        meta = block["meta"]
        if not isinstance(meta, dict) or not str(meta.get("access_token") or "").strip() or not str(meta.get("dataset_id") or "").strip():
            raise InvalidMetaCredentialsError()
        return meta
