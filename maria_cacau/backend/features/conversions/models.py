"""Modelos de domínio da feature de conversões para a Meta."""

from dataclasses import dataclass, field
from enum import Enum

from ...shared import Customer, Financial


class SheetStatus(str, Enum):
    """Vocabulário aceito na coluna `Meta Status` da planilha.

    Vive aqui, não no data source: é regra de domínio de quem escreve (a feature `conversions`),
    não da fonte de dados. A planilha tem lista suspensa em modo rejeitar, mas isso só vale para
    quem digita — escrita via API não é bloqueada (verificado em 13/09/2026), então o vocabulário
    precisa ser garantido no código antes de gravar.
    """

    ENVIADO  = "Enviado"
    NEGADO   = "Negado"
    TESTE    = "Teste"
    IGNORADO = "Ignorado"


class ConversionStatus(Enum):
    """Resultado da pré-validação de um pedido."""

    BLOCKED = "blocked"  # não pode ir de jeito nenhum
    WARNING = "warning"  # pode ir, com qualidade menor
    READY   = "ready"    # tudo certo


class BlockReason(Enum):
    NOT_FOUND       = "not_found"
    ALREADY_SENT    = "already_sent"
    IGNORED         = "ignored"
    NO_CONTACT      = "no_contact"
    NO_PAYMENT_DATE = "no_payment_date"
    OUTSIDE_WINDOW  = "outside_window"
    ZERO_TOTAL      = "zero_total"


class WarnReason(Enum):
    PREVIOUSLY_DENIED = "previously_denied"
    PARTIAL_FIELDS    = "partial_fields"


@dataclass
class FieldStatus:
    """Presença de um campo usado no `user_data` da Meta, para a tela mostrar ✓/✗.

    Sem texto de exibição aqui de propósito — é a tela quem decide o rótulo, via
    `assets/strings.py`, como qualquer outra string de UI do app. `key` é só o identificador.
    """

    key:     str
    present: bool
    value:   str | None = None  # valor real (não hash), só quando presente


@dataclass
class PendingOrder:
    """Resultado de `GET /conversions/pending/<pedido>`."""

    status: ConversionStatus
    number: str

    reason:  BlockReason | WarnReason | None = None
    message: str | None = None

    customer:      Customer  | None = None  # só o name é preenchido — o resto do Customer não se aplica aqui
    financial:     Financial | None = None  # só o total é preenchido
    payment_date:  str       | None = None
    sent_at:       str       | None = None  # preenchido quando reason == ALREADY_SENT

    fields: list[FieldStatus] = field(default_factory=list)
