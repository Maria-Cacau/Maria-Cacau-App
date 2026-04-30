"""Backend de armazenamento seguro via arquivo protegido no diretório do usuário."""

from pathlib import Path

from maria_cacau.core.storage.handler import StorageHandler

_BASE_DIR = Path.home() / '.mariacacau'


class SecurityStorage(StorageHandler[str]):
    def __init__(self) -> None:
        self._dir = _BASE_DIR
        self._dir.mkdir(parents=True, exist_ok=True)

    def save(self, data: str, key: str) -> None:
        path = self._path(key)
        path.write_text(data, encoding='utf-8')
        try:
            path.chmod(0o600)
        except NotImplementedError:
            pass

    def retrieve(self, key: str) -> str | None:
        p = self._path(key)
        if not p.exists():
            return None
        return p.read_text(encoding='utf-8')

    def delete(self, key: str) -> bool:
        p = self._path(key)
        if p.exists():
            p.unlink()
            return True
        return False

    def clean_all(self) -> None:
        for f in self._dir.glob('*.credential'):
            f.unlink()

    def _path(self, key: str) -> Path:
        safe = key.replace('/', '_').replace('\\', '_')
        return self._dir / f'{safe}.credential'
