# Shared Domain — MCDomain (Ideia Futura)

> Documento de referência para uma decisão arquitetural futura.
> Não implementar agora — contexto e gatilho de quando fazer estão descritos abaixo.

---

## O Problema

Tanto o `backend/` quanto as `features/` precisam conhecer os models que trafegam entre eles.

O backend serializa `Order`, `Payment`, `Customer` etc. para JSON. A app recebe esse JSON e precisa desserializar para objetos Python. Se os models forem definidos em dois lugares, qualquer mudança de campo exige atualização em ambos — duplicação real de conhecimento.

---

## A Distinção Importante

Há dois tipos de modelo no sistema:

| Tipo | Dono | Exemplo |
|---|---|---|
| **Entity / wire model** | Compartilhado (contrato entre os dois lados) | `Order`, `Customer`, `Payment` |
| **View-model** | Exclusivo da feature (orientado à UI) | `OrdersModel` com `chartData`, `report` |

O MCDomain resolveria apenas os *entity models* — os view-models continuam na feature.

---

## Solução Atual (in-process)

Enquanto o backend roda in-process (mesmo processo Python que a UI), a app importa direto:

```python
from maria_cacau.backend.features.orders.shared.models import Order
```

Sem duplicação, sem pacote novo, sem violar isolamento (a regra é o *backend* não importar de ninguém — não o contrário).

---

## Quando Criar o MCDomain

**Gatilho:** quando o backend virar FastAPI remoto (Railway).

Nesse momento, o `backend/` e a app PyQt6 serão projetos separados. A app vai consumir JSON HTTP de um servidor real. Para não duplicar os models, faz sentido um pacote Python independente:

```
maria-cacau-domain/        ← novo repo ou subpacote
├── models/
│   ├── order.py           # Order, Customer, Receiver...
│   ├── delivery.py        # Delivery, DeliveryType...
│   └── payment.py         # Payment, Installment...
└── __init__.py
```

Ambos os projetos adicionariam `maria-cacau-domain` como dependência.

---

## Por Que Só Na Migração

- **Agora:** backend e app são o mesmo projeto Python. Importar direto é mais simples e sem overhead.
- **No futuro remoto:** a fronteira física (rede) justifica formalizar o contrato como pacote separado.
- **Linguagem diferente:** se uma nova app vier em outra linguagem, o mesmo repo pode gerar um módulo para aquela linguagem (via OpenAPI codegen, Protobuf, etc.) — a fonte de verdade do contrato continua centralizada.

---

## Referências

- `maria_cacau/backend/features/orders/shared/models.py` — models atuais do backend
- `pocs/backend/ongoing-study.md` — arquitetura geral do módulo backend
- `pocs/backend/routes-design.md` — decisão Flask in-process
