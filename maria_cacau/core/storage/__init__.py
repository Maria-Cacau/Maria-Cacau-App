"""Superfície pública do storage. `FileStorage` e `KeychainStorage` são backends internos da
`SecurityStorage` — quem consome este pacote não deve instanciá-los direto."""

from ._cache import CacheStorage
from ._handler import StorageHandler
from ._location import StorageLocation
from ._security import SecurityStorage

__all__ = [
    'StorageHandler',
    'SecurityStorage',
    'CacheStorage',
    'StorageLocation',
]
