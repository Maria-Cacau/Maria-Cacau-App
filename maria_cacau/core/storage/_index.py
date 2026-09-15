"""Índice de chave → destino do `SecurityStorage`.

É dica, não verdade: se sumir (máquina nova, arquivo corrompido, um `clean_all` de outro
storage), o `retrieve` ainda encontra o dado procurando nos dois destinos — não trava a
aplicação. Carregado na inicialização e mantido em memória; a escrita usa lock porque o app
consulta o storage a partir de `ThreadPoolExecutor` nos ViewModels (mesmo precedente do
`threading.Lock()` em `GoogleSheetsDataSource`).

Sem extensão `.json` de propósito: o `CacheStorage.clean_all()` faz `glob('*.json')` na mesma
pasta (`~/.mariacacau`), e um `storage-index.json` seria apagado junto com o cache.
"""

import json
import threading
from pathlib import Path

from ._location import StorageLocation

_INDEX_PATH = Path.home() / '.mariacacau' / 'storage-index'


class StorageIndex:
    def __init__(self, path: Path = _INDEX_PATH) -> None:
        self._path = path
        self._lock = threading.Lock()
        self._data: dict[str, str] = self._load()

    def get(self, key: str) -> StorageLocation | None:
        with self._lock:
            value = self._data.get(key)
        return StorageLocation(value) if value else None

    def set(self, key: str, location: StorageLocation) -> None:
        with self._lock:
            self._data[key] = location.value
            self._save()

    def delete(self, key: str) -> None:
        with self._lock:
            self._data.pop(key, None)
            self._save()

    def clear(self) -> None:
        with self._lock:
            self._data.clear()
            self._save()

    def items(self) -> list[tuple[str, StorageLocation]]:
        with self._lock:
            return [(key, StorageLocation(value)) for key, value in self._data.items()]

    def _load(self) -> dict[str, str]:
        if not self._path.exists():
            return {}
        try:
            return json.loads(self._path.read_text(encoding='utf-8'))
        except Exception:
            return {}

    def _save(self) -> None:
        self._path.parent.mkdir(parents=True, exist_ok=True)
        self._path.write_text(
            json.dumps(self._data, ensure_ascii=False, indent=2),
            encoding='utf-8',
        )
