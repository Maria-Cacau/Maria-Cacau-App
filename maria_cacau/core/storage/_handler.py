"""Contrato base para todos os backends de armazenamento."""

from abc import ABC, abstractmethod
from typing import Generic, TypeVar

T = TypeVar('T')


class StorageHandler(ABC, Generic[T]):
    @abstractmethod
    def save(self, data: T, key: str) -> None: ...

    @abstractmethod
    def retrieve(self, key: str) -> T | None: ...

    @abstractmethod
    def delete(self, key: str) -> bool: ...

    @abstractmethod
    def clean_all(self) -> None: ...
