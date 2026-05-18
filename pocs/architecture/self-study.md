# Self Study — Arquitetura do Projeto

> Documento de intenção e contexto do estudo em andamento.
> Objetivo: garantir continuidade entre sessões e entre IAs diferentes.

---

## Intenção da conversa

Estudar e definir a arquitetura ideal para o projeto Maria Cacau (PyQt6 + Python), com foco em escalabilidade e boas práticas Pythônicas. O ponto de partida foi o background em Swift/iOS — mapeando conceitos familiares para o ecossistema Python.

---

## Status atual

**Fase:** refatoração arquitetural em andamento — branch `feat/arch-MVC`.

| Etapa | Status |
|---|---|
| Definir arquitetura geral | Concluído — ver `overview.md` |
| Estudar padrões Python (ABC, Protocol, dataclass, enum) | Concluído — ver `CBL.md` |
| Estudar modularização e Design System | Concluído — ver `overview.md` |
| Criar `core/network/` (LocalClient + API) | Concluído |
| Criar `backend/` com DataSource e serviços | Concluído — ver `pocs/backend/ongoing-study.md` |
| Migrar `orders_pendent` — camada `data/` | Concluído |
| Migrar `orders_pendent` — camada `domain/` | Concluído |
| Migrar `orders_pendent` — camada `presentation/` | Em andamento |
| Criar `ErrorModel` em `core/errors.py` | Em andamento (sessão atual) |
| Remover dependência de `core` dentro do Design System | Concluído (PR #39) |
| Construir o Design System | Pendente |
| Atualizar app para novas telas (protótipo aprovado) | Pendente |
| Adicionar feature de novo pedido | Pendente |

---

## Estado atual da migração MVC

A refatoração segue o fluxo de fora pra dentro: primeiro a infraestrutura, depois as features.

**O que foi feito:**
1. **DataSource** (`backend/data_source/`) — comunicação com o Google Sheets isolada numa camada própria. Retorna `list[dict]` neutro, sem acoplamento ao domínio
2. **Backend** (`backend/`) — Flask in-process com dois serviços operacionais: `GET /orders/deliveries` e `GET /orders/payments-pendent`
3. **Feature `orders_pendent` — camada `data/`** — `apis.py`, `repository.py`, `mapper.py` conectando à API do backend via `LocalClient`
4. **Feature `orders_pendent` — camada `domain/`** — `models.py`, `use_case.py` (chamadas paralelas), `signals.py`, `events.py`

**Em andamento (sessão atual):**
- Criação do `ErrorModel` em `core/errors.py` — veja seção abaixo
- Finalização da camada `presentation/` da `orders_pendent`

**Bloqueio resolvido (PR #39):**
O Design System tinha uma dependência de `core` — o que impedia `core` de importar do Design System para o `ErrorModel`. Essa dependência foi removida. A direção `core → design_system` agora é válida.

---

## ErrorModel (`core/errors.py`)

### Motivação
Os erros do backend (`BackendError`) e do data source (`DataSourceError`) seguem o mesmo contrato:
```
code: str          # ex: "DS01", "BE04"
user_message: str  # mensagem amigável para o usuário
dev_message: str   # detalhe técnico para debug
```
A camada de `presentation/` precisa converter esse erro em um popup do Design System — sem conhecer de onde veio o erro.

### Solução: duck typing
`ErrorModel` em `core/errors.py` aceita qualquer objeto que tenha `code`, `user_message`, `dev_message` (não precisa herdar nada). Expõe um método para criar o `PopupModel` do Design System a partir desses dados.

### Regras de dependência

| Módulo | Pode importar de |
|---|---|
| `design_system/` | `assets/` apenas — zero dependência de `core` ou `features` |
| `core/` | `design_system/` (permitido após PR #39) |
| `features/` | `core/`, `design_system/`, `assets/` |
| `backend/` | `core/storage` apenas (isolamento total) |

---

## Roadmap de evolução

### 1. Ajuste arquitetural (agora)
Refatorar o projeto atual para seguir a arquitetura definida:
- Extrair Controller do `GuiMain` (hoje é um God Object)
- Separar View e Controller por feature
- Aplicar signals com nome de domínio

### 2. Design System
Criar `design_system/` com estrutura limpa:
- `components/` — widgets reutilizáveis com enums de estilo
- `tokens/` — cores, tipografia, espaçamento
- Regra: zero imports de `features/`, `core/` ou `assets/`
- Futuro: migrar para repo separado quando estabilizar

### 3. Novas telas
Atualizar o app para o protótipo aprovado (desenvolvido com IA de design).
As telas existentes serão substituídas pelas novas — não é adição, é substituição.

### 4. Feature: Novo Pedido
Tela de cadastro de pedido gravando direto na planilha Google Sheets.
Design e casos de uso já definidos em `pocs/sheets-analysis/`.

---

## Decisões fechadas

Registradas em `overview.md`. Não reabrir sem motivo claro.

| Decisão | Resumo |
|---|---|
| Arquitetura | Clean Arch + MVC + Signals |
| Contratos de camada | ABC para base com comportamento, Protocol para contratos puros |
| DTOs | `@dataclass` |
| Funções utilitárias | Funções soltas no módulo, não classes com `@staticmethod` |
| Temas no DS | Não agora — só quando houver segundo tema |
| DS no repo | Interno por enquanto, migra para repo separado após estabilizar |

---

## Próximos passos para retomar

1. Implementar `ErrorModel` em `core/errors.py` (duck typing + método para `PopupModel`)
2. Finalizar presentation layer da `orders_pendent` (ver itens pendentes em `pocs/backend/ongoing-study.md`)
3. Implementar `subfeatures/summary/service.py` no backend
4. Criar rotas de infra do backend (`auth`, `source`, `status`)
5. Estruturar a pasta `design_system/` com a nova organização (fase posterior)

---

## Referências

- `overview.md` — decisões e padrões definidos
- `pre-study.md` — estudo comparativo iOS/Swift → PyQt/Python
- `pocs/sheets-analysis/` — análise da planilha e design da feature Novo Pedido
- `CBL.md` em `.ai/benchmark/` — log completo de perguntas e respostas das sessões
