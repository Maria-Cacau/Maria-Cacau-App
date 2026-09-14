"""Destino possível de um segredo no `SecurityStorage`, e a regra pura que escolhe entre eles.

`resolve()` não toca em keychain nem em disco — por isso é testável sozinha, sem precisar
simular I/O ou mockar o sistema operacional.
"""

from enum import Enum


class StorageLocation(Enum):
    KEYCHAIN = "keychain"
    FILE     = "file"


# Aplicado em TODAS as plataformas, embora a restrição real seja só do Windows (Credential
# Manager: ~2.560 B, contados em UTF-16). Usar limites diferentes por sistema faria o mesmo dado
# ir para destinos diferentes conforme o SO — e o bug apareceria só no Windows, depois do build.
# NÃO "otimizar" este valor para o macOS, que aceita bem mais.
MAX_KEYCHAIN_CHARS = 1024


def resolve(data: str, preferred: StorageLocation | None = None) -> StorageLocation:
    """Decide o destino de `data`. `preferred` é a vontade do chamador; o tamanho pode vetá-la."""
    if len(data) > MAX_KEYCHAIN_CHARS:
        return StorageLocation.FILE
    return preferred or StorageLocation.KEYCHAIN
