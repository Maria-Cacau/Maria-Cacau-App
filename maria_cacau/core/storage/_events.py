"""Eventos observáveis do `SecurityStorage`.

O log nunca pode conter o valor do segredo — chave, destino e tamanho bastam para diagnosticar,
e `logs.log` fica em texto puro em `~/.mariacacau`.
"""

from enum import Enum


class StorageEvent(Enum):
    KEYCHAIN_UNAVAILABLE  = "Keychain indisponível — degradando para arquivo"
    PREFERENCE_DOWNGRADED = "Preferência de keychain rebaixada para arquivo por tamanho"
    LOCATION_CHANGED      = "Destino do segredo mudou — registro antigo removido"
    INDEX_STALE           = "Índice apontava para um destino sem o dado — buscando nos dois"
    KEY_NOT_FOUND         = "Chave não encontrada em destino nenhum"
