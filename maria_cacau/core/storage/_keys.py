"""Chaves de storage lidas por mais de um consumidor — o front grava e o backend lê a mesma chave."""

from enum import StrEnum


class StorageKey(StrEnum):
    META_ACCESS_TOKEN = "meta-access-token"  # SecurityStorage — segredo
    META_SETTINGS     = "meta-settings"      # CacheStorage — {"dataset_id", "test_event_code"}
