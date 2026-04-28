"""Backend de armazenamento seguro via keychain do SO."""

import keyring
import keyring.errors

from maria_cacau.core.storage.handler import StorageHandler


class SecurityStorage(StorageHandler[str]):
    def __init__(self, service: str) -> None:
        self._service = service

    def save(self, data: str, key: str) -> None:
        keyring.set_password(self._service, key, data)

    def retrieve(self, key: str) -> str | None:
        return keyring.get_password(self._service, key)

    def delete(self, key: str) -> bool:
        try:
            keyring.delete_password(self._service, key)
            return True
        except keyring.errors.PasswordDeleteError:
            return False

    def clean_all(self) -> None:
        pass
