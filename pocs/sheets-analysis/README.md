# POC — Análise da Planilha Google Sheets

> **Objetivo:** mapear completamente o *as is* da aba `Cadastro` e das abas de suporte da planilha
> operacional da Maria Cacau, para servir de base para o design da tela de cadastro de pedidos.
>
> **Data:** Mai/2026  
> **Autor:** Claude Sonnet 4.6 (análise automatizada via API do Google Sheets)

---

## Índice

1. [Contexto](#contexto)
2. [Setup — como rodar os scripts](#setup)
3. [Dependência extra](#dependência-extra)
4. [Scripts — o que cada um faz](#scripts)
5. [Resultados em JSON](#resultados-em-json)
6. [Análise completa (documento final)](#análise-completa)
7. [Achados principais](#achados-principais)

---

## Contexto

A operação da Maria Cacau usa uma planilha Google Sheets como sistema de gestão de pedidos.
O objetivo desta POC foi entender **como a planilha está estruturada** antes de criar uma tela
de cadastro de pedido no app PyQt6 — para que o app possa gravar os dados no mesmo formato
que a planilha espera.

**Planilha analisada:**
- Sheet ID: `1sWiWmckq0lAkV2zD_jofPx56WgE7sroSgqO7fAnPUnc`
- Localização: `~/.mariacacau/sheets.json` (já configurado na máquina de desenvolvimento)

---

## Setup

### Pré-requisitos

1. **Credenciais** já precisam estar salvas em `~/.mariacacau/google-credentials.credential`
   (arquivo gerado pelo app na primeira execução — ver `docs/credentials-setup.md`).

2. **Sheet ID** precisa estar em `~/.mariacacau/sheets.json` no formato:
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
# A partir da raiz do repositório, usando o venv do projeto:
./venv/bin/python3 pocs/sheets-analysis/scripts/<nome_do_script>.py
```

---

## Dependência Extra

> **Atenção:** `google-api-python-client` **não está** no `pyproject.toml` do projeto.
> Foi instalada manualmente durante esta POC via `pip install google-api-python-client`.

| Lib | Versão usada | Por que | Já no projeto? |
|---|---|---|---|
| `google-api-python-client` | última disponível | Acesso à Sheets API v4 para buscar fórmulas e data validations (gspread sozinho não expõe isso) | ❌ não está no `pyproject.toml` |

Se quiser adicionar ao projeto formalmente:
```toml
# pyproject.toml → [project] → dependencies
"google-api-python-client",
```

As libs `gspread`, `google-auth` e `google-oauth2-service-account` **já estão** no projeto.

---

## Scripts

Todos os scripts estão em `pocs/sheets-analysis/scripts/`. Foram rodados em sequência —
cada um refinou ou expandiu a análise anterior.

---

### `analisar_cadastro.py`

**O que faz:** primeira análise da aba `Cadastro`. Lê as últimas 50 linhas com pedido
preenchido (`col A != ""`) e para cada coluna calcula:
- tipo inferido (data, numérico, enum, texto, vazia)
- taxa de preenchimento (fill rate)
- top 5 valores mais frequentes

**Saída:** print no terminal + `results/cadastro_analysis.json`

**Aprendizado desta execução:** a filtragem inicial usava `any(c.strip() for c in r)` —
isso trazia linhas de fórmula vazias (que têm `FALSE` em checkboxes). A correção foi
filtrar por `r[0].strip() != ""` (coluna PEDIDO preenchida), igual ao critério do
`CadastroAnalyseHandler` existente.

---

### `analisar_planilha_completa.py`

**O que faz:** análise de **todas as 40 abas** da planilha. Para cada aba reporta:
- número de linhas e colunas
- colunas com dados vs. colunas vazias
- tipo inferido e top valores por coluna

Também tenta buscar fórmulas e validações via Sheets API v4 — nesta versão a query
falhou por campo inválido (`formula` não existe, o correto é `userEnteredValue.formulaValue`).

**Saída:** print no terminal + `results/planilha_completa_analysis.json`

**Por que é útil:** revelou que a aba `Produtos` é o hub de todos os dropdowns, e que existem
abas históricas (2018/2019) que não fazem parte do fluxo atual.

---

### `analisar_formulas.py`

**O que faz:** usa a Sheets API v4 corretamente (campo `userEnteredValue.formulaValue`)
para buscar fórmulas e data validations das colunas-chave do Cadastro (produtos, valores
calculados, booleanos).

**Resultado relevante:**
- Única data validation encontrada no header/primeiras linhas: `PLP/NF IMPRESSA` → `BOOLEAN`
- Confirmou que a aba `Produtos!A` tem 1.281 itens (1 header + 1.280 produtos)

**Limitação:** buscou apenas rows 1–5. Fórmulas estão nas linhas de dados (row 2+),
não no header — por isso não apareceram aqui.

---

### `analisar_formulas2.py`

**O que faz:** versão corrigida — busca fórmulas nas linhas de dados (rows 2–4) e
data validations nas colunas de produto (Prod1–7) e nas colunas de enum (rows 2–10).

**Resultados relevantes:**
```
Valor1 (col 18): fórmula =Q2*O2  → $Unit1 × Q1
Valor2 (col 22): fórmula =U2*S2  → $Unit2 × Q2
Prod1-7: ONE_OF_RANGE: =Produtos!$A$2:$A$1285
COMO CONHECEU: ONE_OF_RANGE: =Produtos!$H$2:$H$34
PARENTESCO: ONE_OF_RANGE: =Produtos!$K$2:$K$26
```

---

### `analisar_produtos_aba.py`

**O que faz:** lê todas as 17 colunas da aba `Produtos` com amostras dos valores,
e verifica validações nas colunas restantes do Cadastro (Prod2–7, SEXO, MODALIDADE,
EVENTO, formas de pagamento).

**Resultado relevante:** mapeamento completo de qual coluna do `Produtos` alimenta
qual campo do Cadastro (ver seção "Achados principais" abaixo).

---

## Resultados em JSON

### `results/cadastro_analysis.json`

Estrutura:
```json
{
  "total_rows_historico": 12058,
  "n_cols": 166,
  "n_amostras": 50,
  "colunas": [
    {
      "idx": 1,
      "header_raw": "PEDIDO",
      "header_norm": "pedido",
      "tipo": "numérico",
      "fill": "100%",
      "top_values": ["26266,0", "26262,0", ...]
    },
    ...
  ]
}
```

### `results/planilha_completa_analysis.json`

Mesma estrutura, mas indexada por nome de aba:
```json
{
  "Cadastro": { "title": "Cadastro", "rows": 12532, "cols": 166, "columns": [...] },
  "Produtos":  { "title": "Produtos",  "rows": 1284,  "cols": 17,  "columns": [...] },
  ...
}
```

---

## Análise Completa

O documento de análise final — humano-legível, com toda a estrutura, fórmulas,
validações e recomendações de design — está em:

**[`docs/cadastro_asis.md`](../../docs/cadastro_asis.md)**

Esse é o documento que deve ser usado como referência para o design e desenvolvimento
da tela de cadastro.

---

## Achados Principais

### 1. A aba `Produtos` é o hub central de dropdowns

Toda seleção do Cadastro vem de lá:

| Coluna Produtos | Campo no Cadastro | Qtd opções |
|---|---|---|
| `A` — PRODUTOS | Prod1, Prod2, Prod3, Prod4, Prod5, Prod6, Prod7 | 1.280 |
| `F` — PAGAMENTO | Forma 1º–6º Pgto | 26 |
| `G` — MODAL | Modalidade | 28 |
| `H` — COMO NOS CONHECEU | Como Conheceu | 27 |
| `J` — EVENTO | Evento | 42 |
| `K` — GRAU DE PARENTESCO | Parentesco | 18 |
| `O` — GÊNERO | Sexo | 6 |

### 2. Campos calculados por fórmula (não precisam de input)

| Campo | Fórmula |
|---|---|
| Valor1 | `= Q1 × $Unit1` |
| Valor2 | `= Q2 × $Unit2` |
| Valor3–7 | idem (padrão) |
| TOTAL | soma de Valor1–7 + Valor Outro − Desconto + Frete |
| Confere soma | deve ser 0 (verificação) |
| Quanto falta pagar? | TOTAL − pagamentos confirmados |
| D+1 | calculado a partir da data de entrega |
| PLP/NF IMPRESSA | checkbox BOOLEAN |
| DESPACHADO | checkbox BOOLEAN |

### 3. Fluxo atual é manual e baseado em copy/paste

A aba `MACRO CADASTRO` contém uma linha-template com valores padrão
(`FALSE`, `<nome>`, `0`, `-`). O operador copia essa linha e cola no `Cadastro`
para iniciar um novo pedido.

### 4. Inconsistências que a nova tela deve resolver

| Problema | Campo |
|---|---|
| Sem máscara | TEL, CPF, CEP |
| Rua + número juntos | col `Rua` |
| Cidade em formato livre | col `Cidade` (ex: `São Paulo - SP`, `Sao Paulo - SP`) |
| Dropdown de 1.280 itens sem busca | Prod1–7 |
| Label errado na 3ª parcela | col 57 diz "Data 6ªPgto" mas é a 3ª |
| Header de Prod4 é `"-"` | bug histórico na planilha |

### 5. Escala da planilha

- ~12.058 pedidos históricos (6 anos de operação)
- ~1.280 produtos ativos no catálogo
- 166 colunas totais (60 sem header — buffer vazio)
- 40 abas no total (maioria histórica, ~6 ativas)
