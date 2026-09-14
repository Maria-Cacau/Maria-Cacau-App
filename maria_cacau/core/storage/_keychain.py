"""Backend de armazenamento seguro via cofre do sistema operacional (Keychain / Credential
Manager).

Import estático do backend por plataforma: o `keyring` descobre backends por entry points
(`importlib.metadata`), que é descoberta dinâmica. O Nuitka `--onefile` não enxerga isso — o
sintoma clássico é funcionar no `venv` em desenvolvimento e, no `.exe`, `keyring.get_keyring()`
cair no backend nulo e levantar `NoKeyringError` só em produção, no Windows, depois do build.
"""

import sys

import keyring
import keyring.errors

from ._handler import StorageHandler

_SERVICE = "maria-cacau"


def _set_platform_backend() -> None:
    if sys.platform == "win32":
        from keyring.backends.Windows import WinVaultKeyring
        keyring.set_keyring(WinVaultKeyring())
    elif sys.platform == "darwin":
        from keyring.backends.macOS import Keyring
        keyring.set_keyring(Keyring())
    else:
        from keyring.backends.SecretService import Keyring
        keyring.set_keyring(Keyring())


class KeychainStorage(StorageHandler[str]):
    """Backend puro: só conhece o keyring. Não decide destino, não sabe de arquivo."""

    def __init__(self) -> None:
        _set_platform_backend()

    def save(self, data: str, key: str) -> None:
        keyring.set_password(_SERVICE, key, data)

    def retrieve(self, key: str) -> str | None:
        return keyring.get_password(_SERVICE, key)

    def delete(self, key: str) -> bool:
        try:
            keyring.delete_password(_SERVICE, key)
            return True
        except keyring.errors.PasswordDeleteError:
            return False

    def clean_all(self) -> None:
        """No-op: o `keyring` não tem uma operação de "apagar tudo" — só apaga chave por chave.
        A `SecurityStorage` cobre isso iterando as chaves que o índice conhece."""
