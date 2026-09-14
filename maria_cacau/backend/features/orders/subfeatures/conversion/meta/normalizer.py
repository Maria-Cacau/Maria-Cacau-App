"""Normalização e hash dos campos de identificação da Meta CAPI.

Migrado de `Maria-Cacau-BotConversa/scripts/meta_enviar_chat.py` — já validado contra a API real
em 02/09/2026. Regras por campo, medidas na planilha real, em
`Maria-Cacau-Study/demandas/meta-conversions-api/implementation/planejamentos/fase1-fluxo.md`.

A normalização de CEP, cidade/UF e telefone é genérica (nada de específico da Meta) e mora em
`backend/utils/` — aqui fica só o hash e a montagem do `user_data`.
"""

import hashlib

from ......data_source import SheetCols
from ......utils import (normalize_phone, normalize_zip, split_city_state,
                       state_from_zip, strip_accents)


def _hash(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def build_user_data(order: dict[str, str]) -> dict[str, str]:
    """Monta o bloco `user_data` com hash, a partir do dict devolvido pelo data source.

    Campo ausente ou vazio não entra — nunca envia o hash de uma string vazia.
    """
    email = order.get(SheetCols.CUSTOMER_EMAIL, "").strip().lower()

    phone = normalize_phone(order.get(SheetCols.CUSTOMER_PHONE, ""))
    if phone == "55":
        phone = ""

    full_name = order.get(SheetCols.CUSTOMER_NAME, "").strip()
    first_name, _, last_name = full_name.partition(" ")

    zip_code = normalize_zip(order.get(SheetCols.ADDRESS_ZIP, ""))

    city, state = split_city_state(order.get(SheetCols.ADDRESS_CITY, ""))
    if not state:
        state = state_from_zip(zip_code) or ""

    fields = {
        "em": email,
        "ph": phone,
        "fn": strip_accents(first_name.lower()),
        "ln": strip_accents(last_name.lower()),
        "zp": zip_code,
        "ct": city,
        "st": state,
        "country": "br",
    }
    return {key: _hash(value) for key, value in fields.items() if value}
