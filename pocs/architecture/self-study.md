# Self Study — Arquitetura do Projeto

> Documento de intenção e contexto do estudo em andamento.
> Objetivo: garantir continuidade entre sessões e entre IAs diferentes.

---

## Intenção da conversa

Estudar e definir a arquitetura ideal para o projeto Maria Cacau (PyQt6 + Python), com foco em escalabilidade e boas práticas Pythônicas. O ponto de partida foi o background em Swift/iOS — mapeando conceitos familiares para o ecossistema Python.

---

## Status atual

**Fase:** estudo e definição concluídos — pronto para iniciar aplicação.

| Etapa | Status |
|---|---|
| Definir arquitetura geral | Concluído — ver `overview.md` |
| Estudar padrões Python (ABC, Protocol, dataclass, enum) | Concluído — ver `CBL.md` |
| Estudar modularização e Design System | Concluído — ver `overview.md` |
| Ajustar arquitetura atual do projeto | Em andamento (branch separada) |
| Construir o Design System | Pendente |
| Atualizar app para novas telas (protótipo aprovado) | Pendente |
| Adicionar feature de novo pedido | Pendente |

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

1. Continuar o refactor arquitetural na branch em andamento
2. Definir quais features refatorar primeiro (começar pelas mais simples)
3. Estruturar a pasta `design_system/` com a nova organização

---

## Referências

- `overview.md` — decisões e padrões definidos
- `pre-study.md` — estudo comparativo iOS/Swift → PyQt/Python
- `pocs/sheets-analysis/` — análise da planilha e design da feature Novo Pedido
- `CBL.md` em `.ai/benchmark/` — log completo de perguntas e respostas das sessões
