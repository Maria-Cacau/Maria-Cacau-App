# Self Study — Arquitetura do Projeto

> Referência de decisões arquiteturais e padrões estabelecidos.
> Para o estado atual e próximos passos, ver `pocs/architecture/session-context.md`.

---

## Intenção

Estudar e definir a arquitetura ideal para o projeto Maria Cacau (PyQt6 + Python), com foco em escalabilidade e boas práticas Pythônicas. O ponto de partida foi o background em Swift/iOS — mapeando conceitos familiares para o ecossistema Python.

---

## Decisões fechadas

Não reabrir sem motivo claro.

| Decisão | Resumo |
|---|---|
| Arquitetura | Clean Arch + MVC + Signals |
| Contratos de camada | ABC para base com comportamento, Protocol para contratos puros |
| DTOs | `@dataclass` |
| Funções utilitárias | Funções soltas no módulo, não classes com `@staticmethod` |
| Temas no Design System | Não agora — só quando houver segundo tema |
| Design System no repo | Interno por enquanto; migra para repo separado após estabilizar |

---

## Roadmap macro

| Fase | Status |
|---|---|
| Refatoração arquitetural (MVC + backend) | ✅ Concluído |
| Infraestrutura do app (sessão, bus, init) | ✅ Concluído |
| Cache em memória nos repositories | ✅ Concluído |
| Refinamentos pós-refatoração (status bar, session, obs.) | 🔄 Em andamento |
| Design System | Pendente |
| Novas telas (protótipo aprovado) | Pendente |
| Feature: Novo Pedido | Pendente |

---

## ErrorModel (`core/error/`)

Os erros do backend (`BackendError`) e do data source (`DataSourceError`) seguem o mesmo contrato: `code`, `user_message`, `dev_message`. A camada de `presentation/` converte para popup sem saber a origem do erro.

`ErrorModel` usa duck typing — aceita qualquer objeto com esses três campos, sem herança. Expõe `to_popup() → PopupModel`.

### Regras de dependência

| Módulo | Pode importar de |
|---|---|
| `design_system/` | `assets/` apenas — zero dependência de `core` ou `features` |
| `core/` | `design_system/` (permitido após PR #39) |
| `features/` | `core/`, `design_system/`, `assets/` |
| `backend/` | `core/storage` apenas (isolamento total) |

---

## Referências

- `overview.md` — padrões e decisões detalhadas de feature
- `pre-study.md` — estudo comparativo iOS/Swift → PyQt/Python
- `pocs/backend/ongoing-study.md` — referência técnica do módulo backend
- `pocs/sheets-analysis/` — análise da planilha e design da feature Novo Pedido
- `.ai/benchmark/CBL.md` — log completo de perguntas e respostas das sessões
