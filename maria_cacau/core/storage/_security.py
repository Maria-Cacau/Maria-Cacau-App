"""`SecurityStorage`: fachada que decide entre Keychain e arquivo, e mantém o índice.

Os backends — `KeychainStorage` e `FileStorage` — são puros: não sabem um do outro nem decidem
destino. A escolha vive em `location.resolve()`, função pura e testável sozinha. Este módulo é
quem orquestra: resolve, delega ao backend certo, e indexa onde cada chave foi salva.
"""

from ..observability import observability
from ._events import StorageEvent
from ._file import FileStorage
from ._handler import StorageHandler
from ._index import StorageIndex
from ._keychain import KeychainStorage
from ._location import StorageLocation, resolve


class SecurityStorage(StorageHandler[str]):
    def __init__(self) -> None:
        self._file  = FileStorage()
        self._index = StorageIndex()
        try:
            self._keychain: KeychainStorage | None = KeychainStorage()
        except Exception as exc:
            self._keychain = None
            observability.log(StorageEvent.KEYCHAIN_UNAVAILABLE, error=str(exc))

    def save(self, data: str, key: str, location: StorageLocation | None = None) -> None:
        """`location` é preferência do chamador, não garantia — o resolver pode rebaixá-la."""
        target = self._resolve(data, location, key)

        previous = self._index.get(key)
        if previous is not None and previous != target:
            # Sem apagar o destino anterior, o dado passaria a existir nos dois lugares — o
            # `retrieve` poderia ler a versão obsoleta.
            self._backend(previous).delete(key)
            observability.log(
                StorageEvent.LOCATION_CHANGED, key=key,
                previous=previous.value, target=target.value,
            )

        self._backend(target).save(data, key)
        self._index.set(key, target)

    def retrieve(self, key: str) -> str | None:
        location = self._index.get(key)
        if location is not None:
            value = self._backend(location).retrieve(key)
            if value is not None:
                return value
            observability.log(StorageEvent.INDEX_STALE, key=key, expected=location.value)

        for probe_location, backend in self._probe_order():
            if probe_location == location:
                continue  # já tentado acima
            value = backend.retrieve(key)
            if value is not None:
                # Autocura do índice — não migra o dado, só registra onde ele já está.
                self._index.set(key, probe_location)
                return value

        observability.log(StorageEvent.KEY_NOT_FOUND, key=key)
        return None

    def delete(self, key: str) -> bool:
        location = self._index.get(key)
        if location is not None:
            deleted = self._backend(location).delete(key)
            self._index.delete(key)
            return deleted

        return any(backend.delete(key) for _, backend in self._probe_order())

    def clean_all(self) -> None:
        for key, location in self._index.items():
            if location == StorageLocation.KEYCHAIN and self._keychain is not None:
                self._keychain.delete(key)
        self._file.clean_all()
        self._index.clear()

    def _resolve(self, data: str, preferred: StorageLocation | None, key: str) -> StorageLocation:
        if self._keychain is None:
            return StorageLocation.FILE

        target = resolve(data, preferred)
        if preferred == StorageLocation.KEYCHAIN and target == StorageLocation.FILE:
            observability.log(StorageEvent.PREFERENCE_DOWNGRADED, key=key, size=len(data))
        return target

    def _backend(self, location: StorageLocation) -> StorageHandler[str]:
        if location == StorageLocation.KEYCHAIN and self._keychain is not None:
            return self._keychain
        return self._file

    def _probe_order(self) -> list[tuple[StorageLocation, StorageHandler[str]]]:
        """Keychain → pasta. Sem keychain disponível, só a pasta."""
        order: list[tuple[StorageLocation, StorageHandler[str]]] = []
        if self._keychain is not None:
            order.append((StorageLocation.KEYCHAIN, self._keychain))
        order.append((StorageLocation.FILE, self._file))
        return order
