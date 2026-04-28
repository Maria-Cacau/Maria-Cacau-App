"""Backend de cache em arquivo JSON no diretório do usuário."""

import json
from pathlib import Path
from typing import Any

from maria_cacau.core.storage.handler import StorageHandler


class CacheStorage(StorageHandler[Any]):
    def __init__(self, root: Path) -> None:
        self._root = root
        self._root.mkdir(parents=True, exist_ok=True)

    def save(self, data: Any, key: str) -> None:
        self._path(key).write_text(
            json.dumps(data, ensure_ascii=False, indent=2),
            encoding='utf-8',
        )

    def retrieve(self, key: str) -> Any | None:
        p = self._path(key)
        if not p.exists():
            return None
        try:
            return json.loads(p.read_text(encoding='utf-8'))
        except Exception:
            return None

    def delete(self, key: str) -> bool:
        p = self._path(key)
        if p.exists():
            p.unlink()
            return True
        return False

    def clean_all(self) -> None:
        for f in self._root.glob('*.json'):
            f.unlink()

    def _path(self, key: str) -> Path:
        return self._root / f'{key}.json'
