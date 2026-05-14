# POC — Análise da Planilha + Feature: Cadastro de Pedido

> **Objetivo geral:** mapear o *as is* da planilha Google Sheets e usar esse conhecimento
> para projetar e implementar a tela de **Cadastro de Pedido** no app PyQt6.
>
> **Data de início:** Mai/2026  
> **Status:** design em andamento (aguardando frames de estados da IA de design)

---

## Índice

1. [Contexto e objetivo](#contexto-e-objetivo)
2. [Arquivos desta POC](#arquivos-desta-poc)
3. [Setup — como rodar os scripts](#setup)
4. [Dependência extra instalada](#dependência-extra-instalada)
5. [Scripts — o que cada um faz](#scripts)
6. [Resultados em JSON](#resultados-em-json)
7. [Achados principais da análise](#achados-principais-da-análise)
8. [Decisões de produto aprovadas](#decisões-de-produto-aprovadas)
9. [Design — estado atual](#design--estado-atual)

---

## Contexto e Objetivo

A operação da Maria Cacau usa uma planilha Google Sheets como sistema de gestão de pedidos.
O cadastro hoje é 100% manual: o operador copia uma linha-template da aba `MACRO CADASTRO`
e cola na aba `Cadastro`, preenchendo campo por campo sem validação, sem máscara, sem cálculo
visível.

Esta POC teve duas fases:

**Fase 1 — Análise (concluída)**
Mapear completamente a estrutura da planilha: colunas, fórmulas, validações, abas de suporte
e fluxo atual. Isso virou a base para o design e a implementação.

**Fase 2 — Design + Implementação (em andamento)**
Criar uma tela de formulário no app que substitua o processo manual. Ao clicar em
"Cadastrar Pedido", os dados são gravados diretamente na planilha no formato correto.

**Planilha analisada:**
- Sheet ID: `1sWiWmckq0lAkV2zD_jofPx56WgE7sroSgqO7fAnPUnc`
- Localização do config: `~/.mariacacau/sheets.json`

---

## Arquivos desta POC

```
pocs/sheets-analysis/
├── README.md                          ← este arquivo
├── TASKS.md                           ← tracking de tarefas (feito / pendente)
│
├── cadastro_asis.md                   ← análise completa da planilha (referência principal)
├── prompt_design_cadastro.md          ← prompt passado para a IA de design (v1 — estrutura)
├── prompt_design_estados.md           ← prompt passado para a IA de design (v2 — estados/casos)
│
├── scripts/
│   ├── analisar_cadastro.py           ← análise inicial da aba Cadastro
│   ├── analisar_planilha_completa.py  ← todas as 40 abas
│   ├── analisar_formulas.py           ← 1ª tentativa de buscar fórmulas (API v4)
│   ├── analisar_formulas2.py          ← versão corrigida com linhas de dados
│   ├── analisar_produtos_aba.py       ← aba Produtos + validações restantes
│   └── buscar_exemplos_casos.py       ← exemplos reais para os casos de uso do design
│
└── results/
    ├── cadastro_analysis.json          ← dados brutos da aba Cadastro (50 últimos pedidos)
    ├── planilha_completa_analysis.json ← dados de todas as 40 abas
    └── exemplos_casos_uso.json         ← 9 exemplos reais para os frames do design
```

---

## Setup

### Pré-requisitos

1. **Credenciais** já salvas em `~/.mariacacau/google-credentials.credential`
   (gerado pelo app na primeira execução — ver `docs/credentials-setup.md`).

2. **Sheet ID** em `~/.mariacacau/sheets.json`:
   ```json
   [{"nome": "Planilha2026", "sheet_id": "1sWiWmckq0lAkV2zD_jofPx56WgE7sroSgqO7fAnPUnc"}]
   ```

3. **Dependências do projeto** instaladas:
   ```bash
   pip install -e .
   ```

4. **Dependência extra** (ver seção abaixo):
   ```bash
   pip install google-api-python-client
   ```

### Rodando os scripts

```bash
# A partir da raiz do repositório:
./venv/bin/python3 pocs/sheets-analysis/scripts/<nome_do_script>.py
```

---

## Dependência Extra Instalada

> `google-api-python-client` **não está** no `pyproject.toml` — foi instalada manualmente
> durante esta POC via `pip install google-api-python-client`.

| Lib | Por que foi necessária | Já no projeto? |
|---|---|---|
| `google-api-python-client` | Acesso à Sheets API v4 para buscar fórmulas e data validations. O `gspread` sozinho não expõe isso. | ❌ só no venv |

Para adicionar formalmente ao projeto:
```toml
# pyproject.toml → [project] → dependencies
"google-api-python-client",
```

As libs `gspread` e `google-auth` **já estão** no projeto via `pyproject.toml`.

---

## Scripts

Rodados em sequência — cada um refinando ou expandindo a análise anterior.

---

### `analisar_cadastro.py`

Primeira análise da aba `Cadastro`. Lê as últimas 50 linhas com pedido preenchido
(`col A != ""`) e por coluna calcula tipo inferido, fill rate e top 5 valores.

**Fix aplicado:** filtragem inicial usava `any(c.strip() for c in r)` — trazia linhas
de fórmula vazias que têm `FALSE` nos checkboxes. Corrigido para `r[0].strip() != ""`
(coluna PEDIDO preenchida), igual ao critério do `CadastroAnalyseHandler` existente.

Saída: `results/cadastro_analysis.json`

---

### `analisar_planilha_completa.py`

Análise de **todas as 40 abas**. Revelou que a aba `Produtos` é o hub de todos os
dropdowns e que existem ~34 abas históricas (2018/2019) sem uso ativo.

Tentou buscar fórmulas via Sheets API v4, mas o campo `formula` não existe — o correto
é `userEnteredValue.formulaValue`. Corrigido nos scripts seguintes.

Saída: `results/planilha_completa_analysis.json`

---

### `analisar_formulas.py`

Primeira tentativa correta de buscar fórmulas (campo `userEnteredValue.formulaValue`).
Buscou rows 1–5, onde fórmulas não existem (estão nas linhas de dados). Resultado:
confirmou que `PLP/NF IMPRESSA` tem validação `BOOLEAN` e que `Produtos!A` tem 1.280 itens.

---

### `analisar_formulas2.py`

Versão corrigida — busca fórmulas nas rows 2–4 (linhas reais de pedido) e validações
nas colunas de produto e enum.

**Resultados-chave:**
```
Valor1:       fórmula =Q2*O2  → $Unit1 × Q1
Valor2:       fórmula =U2*S2  → $Unit2 × Q2
Prod1–7:      ONE_OF_RANGE: =Produtos!$A$2:$A$1285
Como Conheceu: ONE_OF_RANGE: =Produtos!$H$2:$H$34
Parentesco:   ONE_OF_RANGE: =Produtos!$K$2:$K$26
```

---

### `analisar_produtos_aba.py`

Lê todas as 17 colunas da aba `Produtos` e verifica validações nas colunas restantes
do Cadastro (Prod2–7, SEXO, MODALIDADE, EVENTO, formas de pagamento).

Resultado: mapeamento completo — cada coluna de `Produtos` alimenta um dropdown
diferente no `Cadastro` (ver Achados Principais).

---

### `buscar_exemplos_casos.py`

Busca nos últimos 500 pedidos exemplos reais para os casos de uso do design:
1 produto, 7 produtos, campo Outros preenchido, 2 e 3 parcelas, modalidade FABRICA,
desconto, destinatário diferente, obs fábrica.

Saída: `results/exemplos_casos_uso.json` (9 casos reais encontrados)

---

## Resultados em JSON

### `cadastro_analysis.json`
```json
{
  "total_rows_historico": 12058,
  "n_cols": 166,
  "n_amostras": 50,
  "colunas": [{ "idx": 1, "header_raw": "PEDIDO", "tipo": "numérico", "fill": "100%", ... }]
}
```

### `planilha_completa_analysis.json`
```json
{
  "Cadastro": { "rows": 12532, "cols": 166, "columns": [...] },
  "Produtos":  { "rows": 1284,  "cols": 17,  "columns": [...] },
  ...
}
```

### `exemplos_casos_uso.json`
```json
{
  "caso_1prod":          { "label": "Pedido mínimo — 1 produto", "pedido": "25859", ... },
  "caso_7prod":          { "label": "Pedido máximo — 7 produtos", "pedido": "25622", ... },
  "caso_7prod_outro":    { "label": "7 produtos + campo Outro",   "pedido": "25727", ... },
  "caso_2parcelas":      { "label": "2 parcelas de pagamento",    "pedido": "25863", ... },
  "caso_3parcelas":      { "label": "3 parcelas de pagamento",    "pedido": "25418", ... },
  "caso_retirada":       { "label": "Modalidade FABRICA",         "pedido": "25868", ... },
  "caso_desconto":       { "label": "Com desconto",               "pedido": "25622", ... },
  "caso_dest_diferente": { "label": "Destinatário ≠ comprador",  "pedido": "25856", ... },
  "caso_obs_fabrica":    { "label": "Obs. fábrica preenchida",    "pedido": "25853", ... }
}
```

---

## Achados Principais da Análise

### A aba `Produtos` é o hub de todos os dropdowns

| Coluna | Header | Qtd | Alimenta no Cadastro |
|---|---|---|---|
| A | PRODUTOS | 1.280 | Prod1–7 (autocomplete) |
| F | PAGAMENTO | 26 | Forma de pagamento 1–6 |
| G | MODAL | 28 | Modalidade de entrega |
| H | COMO NOS CONHECEU | 27 | Como Conheceu |
| J | EVENTO | 42 | Tipo de Evento |
| K | GRAU DE PARENTESCO | 18 | Parentesco |
| O | GÊNERO | 6 | Sexo do presenteado |

### Campos calculados por fórmula

| Campo | Fórmula |
|---|---|
| Valor[n] | `Qtd[n] × $Unit[n]` |
| TOTAL | soma Valor1–7 + Valor Outro − Desconto + Frete |
| Falta pagar | TOTAL − soma dos pagamentos confirmados |
| D+1, PLP/NF IMPRESSA, DESPACHADO | fórmulas / checkboxes automáticos |

### Fluxo atual (que a tela vai substituir)

```
1. Operador vai à aba MACRO CADASTRO
2. Copia a linha-template (valores padrão: FALSE, <nome>, 0, -)
3. Cola na aba Cadastro
4. Preenche campo por campo manualmente
5. Sem validação, sem máscara, sem cálculo visível durante o preenchimento
```

### Inconsistências resolvidas pela nova tela

| Problema atual | Solução na tela |
|---|---|
| TEL, CPF, CEP sem máscara | Inputs com máscara automática |
| Rua + número na mesma célula | Campos separados (Logradouro + Número) |
| Cidade em formato livre | Auto-preenchida pelo CEP (ViaCEP) |
| 1.280 produtos num dropdown | Autocomplete com busca por nome ou código |
| Copy/paste de template | Formulário com botão "Cadastrar" |
| Nº pedido manual | Pré-preenchido com último + 1 |

---

## Decisões de Produto Aprovadas

Decisões tomadas em sessão (Mai/2026) e aprovadas para implementação:

| Decisão | Detalhe |
|---|---|
| Número do pedido pré-preenchido | Último pedido + 1, editável |
| CEP auto-completa endereço | Via API ViaCEP; campos permanecem editáveis |
| Campos calculados visíveis | Total por produto, subtotal, total, falta pagar — em tempo real |
| Autocomplete de produto | Campo de busca filtrando os 1.280 itens por nome ou código |
| Slots dinâmicos de produto | Começa com 1; botão "+ Adicionar produto" até 7 |
| Slots dinâmicos de parcela | Começa com 1; botão "+ Adicionar parcela" sem limite fixo |
| Endereço oculto por modalidade | Se RETIRADA/GUARITA/FABRICA/FEIRA → bloco de endereço oculto |
| Destinatário = Comprador | Checkbox copia nome, tel, CPF do comprador automaticamente |
| Máscaras nos campos livres | TEL → `(00) 00000-0000`, CPF → `000.000.000-00`, CEP → `00000-000` |
| Validação antes de enviar | Campos obrigatórios destacados em vermelho |
| Controle Interno colapsável | Seção 9 fechada por padrão; expandível para campos internos |
| Campos 4–6 de parcela omitidos | Nunca usados — não expor no formulário |

---

## Design — Estado Atual

### Protótipo v1 (concluído)

A IA de design criou o protótipo completo da tela "Novo Pedido" com:
- 9 seções numeradas em página única com scroll
- Sticky footer com PEDIDO / TOTAL / FALTA PAGAR + botões Limpar e Cadastrar
- Segmented control para Sexo
- Campo de busca de produto (autocomplete) com colunas QTD / R$ UNIT. / TOTAL
- Botões dinâmicos "+ Adicionar produto" e "+ Adicionar parcela"
- Checkbox "Mesmo que o comprador" na seção de destinatário
- CEP com campos de endereço separados (Logradouro, Número, Bairro, Cidade, UF)
- Seção 9 "Controle Interno" colapsada com label "Uso interno da operação ▶"

### Próximo passo de design (aguardando)

Prompt enviado (`prompt_design_estados.md`) pedindo **15 frames** de estados:

**Grupo A — Caminhos felizes (7 frames)**
- A1: Pedido mínimo, 1 produto, destinatário = comprador (pedido real #25859)
- A2: 7 produtos com desconto (pedido real #25622)
- A3: 7 produtos + campo Outros + 3 parcelas (pedido real #25727)
- A4: Modalidade FABRICA — bloco endereço oculto (pedido real #25868)
- A5: Destinatário diferente do comprador (pedido real #25856)
- A6: Obs. Fábrica com instrução detalhada (pedido real #25853)
- A7: Controle Interno expandido (seção 9 aberta)

**Grupo B — Erros e feedback (8 frames)**
- B1: Campos obrigatórios faltando (múltiplos em vermelho)
- B2: CPF inválido
- B3: CEP não encontrado
- B4: CEP sendo consultado (loading parcial)
- B5: Enviando para planilha (loading geral, formulário bloqueado)
- B6: Sucesso (pedido gravado)
- B7: Autocomplete de produto aberto com sugestões filtradas
