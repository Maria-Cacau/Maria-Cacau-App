# Tasks — Feature: Cadastro de Pedido

> Tracking de tarefas da feature. Atualizar conforme o andamento.
> Última atualização: Mai/2026

---

## Fase 1 — Análise da Planilha ✅

- [x] Analisar aba `Cadastro` — colunas, tipos, fill rate, top valores
- [x] Analisar todas as 40 abas da planilha
- [x] Mapear fórmulas nas colunas calculadas (Valor1–7, TOTAL, Falta Pagar)
- [x] Mapear data validations (dropdowns) e suas fontes
- [x] Identificar a aba `Produtos` como hub de todos os dropdowns
- [x] Documentar fluxo AS IS (copy/paste de MACRO CADASTRO)
- [x] Documentar inconsistências a resolver (máscaras, campos juntos, etc.)
- [x] Criar `cadastro_asis.md` com análise completa
- [x] Centralizar tudo em `pocs/sheets-analysis/`
- [x] Registrar dependência extra (`google-api-python-client`)

---

## Fase 2 — Design ⏳

- [x] Definir decisões de produto (número pedido, CEP, autocomplete, dinâmico, etc.)
- [x] Criar prompt v1 para a IA de design (`prompt_design_cadastro.md`)
- [x] Protótipo v1 recebido e aprovado (9 seções, sticky footer, componentes ok)
- [x] Buscar exemplos reais da planilha para os casos de uso (`exemplos_casos_uso.json`)
- [x] Criar prompt v2 para a IA de design (`prompt_design_estados.md`) — 15 frames
- [ ] Receber frames de estados (Grupo A — caminhos felizes)
- [ ] Receber frames de estados (Grupo B — erros e feedback)
- [ ] Revisar e aprovar todos os frames
- [ ] Confirmar com a IA de design se algum componente precisa ajuste antes de implementar

---

## Fase 3 — Implementação 🔜

> Ainda não iniciada. Será feita em partes, sessão por sessão.

### 3.1 — Estrutura e navegação
- [ ] Criar a nova aba/tela "Novo Pedido" no app
- [ ] Adicionar item "Novo Pedido" na sidebar (já aparece no protótipo)
- [ ] Criar o layout base com scroll e sticky footer

### 3.2 — Seções de dados básicos
- [ ] Seção 1: Identificação (Nº Pedido pré-preenchido, Como Conheceu)
- [ ] Seção 2: Comprador (nome, parentesco, tel c/ máscara, CPF c/ máscara, email)
- [ ] Seção 3: Presenteado & Evento (segmented Sexo, dropdowns Evento, date picker)
- [ ] Seção 4: Personalização (nome etiqueta, tema, caixa, arte)

### 3.3 — Seção de Produtos (mais complexa)
- [ ] Slot de produto dinâmico (+ Adicionar produto, até 7)
- [ ] Autocomplete de produto: busca nos 1.280 itens por nome ou código
- [ ] Cálculo em tempo real: Valor = Qtd × $Unit por slot
- [ ] Campo "Outros" livre
- [ ] Subtotal calculado em tempo real

### 3.4 — Seção Financeiro
- [ ] Campos Desconto e Frete
- [ ] TOTAL calculado em tempo real (subtotal − desconto + frete)

### 3.5 — Seção Pagamento
- [ ] Slot de parcela dinâmico (+ Adicionar parcela)
- [ ] Dropdown de forma de pagamento (Produtos!F)
- [ ] Date picker e valor por parcela
- [ ] Checkbox de confirmação
- [ ] Resumo: Total pago e Falta pagar em tempo real

### 3.6 — Seção Entrega
- [ ] Date picker de data de entrega
- [ ] Dropdown de modalidade (Produtos!G)
- [ ] Lógica de visibilidade do endereço (ocultar se RETIRADA/GUARITA/FABRICA/FEIRA)
- [ ] Checkbox "Mesmo que o comprador" (copia dados automaticamente)
- [ ] Campo CEP com consulta automática à API ViaCEP
- [ ] Campos de endereço separados e editáveis
- [ ] Campos Obs. Fábrica e Info Motoboy

### 3.7 — Seção Controle Interno
- [ ] Seção colapsável (padrão: fechada)
- [ ] Campos internos: CDH, Negociação, Data Designer, OBS Interna, Quem Embalou, etc.

### 3.8 — Sticky footer e ações
- [ ] Resumo fixo (Pedido / Total / Falta Pagar) atualizado em tempo real
- [ ] Botão Limpar (reset do formulário)
- [ ] Botão Cadastrar Pedido com estados: normal / loading / sucesso / erro

### 3.9 — Validação
- [ ] Campos obrigatórios: Nº Pedido, Nome Comprador, Telefone, ≥1 produto, Data Entrega, Modalidade, Nome Destinatário
- [ ] Validação de CPF (algoritmo de dígitos verificadores)
- [ ] Feedback visual de erro por campo (borda vermelha + mensagem)
- [ ] Bloquear envio se validação falhar

### 3.10 — Integração com a planilha
- [ ] Mapear campos do formulário → colunas da planilha (seguir `cadastro_asis.md`)
- [ ] Formatar dados conforme padrão da planilha (datas DD/MM/YY, valores R$, etc.)
- [ ] Gravar nova linha na aba `Cadastro` via `GoogleSheetsService`
- [ ] Buscar último número de pedido para pré-preenchimento
- [ ] Carregar lista de produtos (Produtos!A) para o autocomplete
- [ ] Carregar demais listas (Produtos!F, G, H, J, K, O) para os dropdowns

### 3.11 — Testes e ajustes
- [ ] Testar caso mínimo (1 produto, 1 parcela, retirada)
- [ ] Testar caso máximo (7 produtos, 3 parcelas, endereço completo)
- [ ] Testar CEP inválido e CEP não encontrado
- [ ] Testar CPF inválido
- [ ] Verificar se os dados gravados na planilha estão no formato correto
- [ ] Ajustar conforme feedback da operação

---

## Notas e Decisões em Aberto

| Tema | Situação |
|---|---|
| Parcelas 4–6 | Decidido: não expor — nunca usadas nos últimos pedidos |
| `google-api-python-client` | Instalada só no venv; decidir se adiciona ao `pyproject.toml` |
| Campo "Tiny" (col 13) | Não expor na tela — é integração com ERP Tiny, preencher como 0 |
| Valor Rótulo Clássico (col 14) | Preencher como 0 por padrão; expor na seção Personalização se necessário |
| Confere soma / D+1 | Fórmulas da planilha — a tela não precisa calcular, a planilha já faz |
| Ordem de escrita na planilha | Confirmar se nova linha vai sempre ao final ou precisa ordenar por data |
