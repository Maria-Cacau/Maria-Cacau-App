# Análise de Divergências — Headers da Planilha vs sheet_mapper.py

> Mapeamento feito a partir dos headers reais retornados pelo gspread (aba Cadastro),
> comparados com os valores definidos nos enums de `backend/data_source/sheet_mapper.py`.
> Headers normalizados com `re.sub(r'\s+', ' ', h).strip().lower()` via `_utils.to_dicts`.

---

## Status geral

| Enum | Status |
|------|--------|
| `SheetCols` | ✅ Todos batem após correções aplicadas nesta sessão |
| `ProductCols` | ⚠️ Slot 4 de `NAME` com problema na planilha |
| `PaymentCols` | ⚠️ 3 divergências de header na planilha |

---

## SheetCols — Correções já aplicadas

Foram corrigidos na sessão de 18/05/2026:

| Campo | Valor antigo | Valor correto |
|-------|-------------|---------------|
| `AMOUNT_PENDENT` | `"quanto\nfalta\npagar?"` | `"quanto falta pagar?"` |
| `LABEL_THEME` | `"etiqueta / tema"` | `"etiqueta /tema"` |
| `BOX_ART` | `"arte / tecido da caixa"` | `"arte/tecido da caixa"` |

Todos os demais campos de `SheetCols` batem com os headers reais.

---

## ProductCols — Problema na planilha

| Slot | Header real | Enum `NAME.slot(n)` | Status |
|------|-------------|---------------------|--------|
| 1 | `prod1` | `prod1` | ✅ |
| 2 | `prod2` | `prod2` | ✅ |
| 3 | `prod3` | `prod3` | ✅ |
| **4** | **`-`** | `prod4` | ❌ Header é traço |
| 5 | `prod5` | `prod5` | ✅ |
| 6 | `prod6` | `prod6` | ✅ |
| 7 | `prod7` | `prod7` | ✅ |

`QTY`, `PRICE` e `TOTAL` batem para todos os 7 slots ✅.

**Impacto:** produtos no slot 4 nunca são lidos. A célula de nome da linha 4 de produto é
tratada como coluna de nome `-`, que não casa com nenhum slot do enum. O `OrderMapper._products`
ignora silenciosamente (skip no `if not name or name == "-"`), mas pelo motivo errado —
o nome não chega a ser lido.

**Causa:** bug no header da planilha. A célula `prod4` está com `-` em vez do nome padrão.

**Correção sugerida:** renomear o header da coluna na planilha de `-` para `prod4`.

---

## PaymentCols — Problemas na planilha

### DATE

| Slot | Header real | Enum `DATE.slot(n)` | Status |
|------|-------------|---------------------|--------|
| 1 | `data 1ªpgto` | `data 1ªpgto` | ✅ |
| 2 | `data 2ªpgto` | `data 2ªpgto` | ✅ |
| **3** | **`data 6ªpgto`** | `data 3ªpgto` | ❌ Número errado no header |
| 4 | `data 4ªpgto` | `data 4ªpgto` | ✅ |
| 5 | `data 5ªpgto` | `data 5ªpgto` | ✅ |
| **6** | **ausente** | `data 6ªpgto` | ❌ Coluna não existe |

**Impacto:** data da 3ª parcela nunca é lida. Slot 6 nunca tem data.

**Causa:** bug no header da planilha — slot 3 tem `data 6ªpgto` (número trocado) e slot 6 não tem coluna de data.

**Correção sugerida:** corrigir `data 6ªpgto` → `data 3ªpgto` e adicionar `data 6ªpgto` para o slot 6.

### AMOUNT

| Slot | Header real | Enum `AMOUNT.slot(n)` | Status |
|------|-------------|----------------------|--------|
| **1** | **`valor pg 1`** (com espaço) | `valor pg1` | ❌ Espaço extra |
| 2 | `valor pg2` | `valor pg2` | ✅ |
| 3 | `valor pg3` | `valor pg3` | ✅ |
| 4 | `valor pg4` | `valor pg4` | ✅ |
| 5 | `valor pg5` | `valor pg5` | ✅ |
| 6 | `valor pg6` | `valor pg6` | ✅ |

**Impacto:** valor da 1ª parcela nunca é lido (retorna 0).

**Causa:** inconsistência no header da planilha — só o slot 1 tem espaço antes do número.

**Correção sugerida:** renomear `valor pg 1` → `valor pg1` na planilha.
Alternativa em código: override do `slot()` para `AMOUNT` tratando `n=1` como caso especial.

### TYPE e CONFIRMED

Batem para todos os 6 slots ✅.

---

## Colunas na planilha sem mapeamento no enum

Colunas presentes na aba Cadastro que não têm correspondência em nenhum enum atual.
Listadas para referência — podem ser necessárias em features futuras.

| Header normalizado | Contexto provável |
|-------------------|-------------------|
| `plp/nf impressa` | Controle de impressão de NF |
| `valor rótulo clássico` | Custo interno do produto |
| `valor outro` | Valor de item extra |
| `confere soma (zero)` | Coluna de validação de soma |
| `despachado` | Status de despacho |
| `d+1` | Prazo D+1 |
| `cdh` | Desconhecido — possivelmente controle interno |
| `negociação` | Notas de negociação |
| `data designer chamar` | Agenda interna |
| `tempo` | Tempo de produção |
| `ajuste` | Campo de ajuste manual |
| `quem embalou` | Controle de produção |
| `cxs papelão` | Quantidade de caixas de papelão |
| `dt nasc. mãe` | Data de nascimento da mãe |
| `obs interna` | Observação interna (diferente de `obs fábrica`) |
| `frete` | Frete cobrado (diferente de `$frete`) |
| `frete real` | Custo real do frete |
| `diferença` | Diferença frete cobrado vs real |
| `registro` | Número de registro |
| `tempo (minutos)` | Tempo em minutos |
| `tempo antec.` | Tempo de antecedência |

---

## Proposta: SheetNormalizer

Para isolar a lógica de mapeamento de nomes inconsistentes sem poluir os enums ou o DataSource,
criar uma classe `SheetNormalizer` (ou função) em `data_source/` que:

- Recebe o `list[dict]` bruto do `_viewmodel`
- Renomeia as keys inconsistentes para os valores canônicos do enum
- Fica entre o `_SheetsViewModel.fetch()` e o retorno do `GoogleSheetsDataSource`

```python
# Exemplo de interface
class SheetNormalizer:
    _RENAMES = {
        "valor pg 1": PaymentCols.AMOUNT.slot(1),   # "valor pg1"
        "data 6ªpgto": PaymentCols.DATE.slot(3),    # "data 3ªpgto" (correção de bug da planilha)
        "-": ProductCols.NAME.slot(4),               # "prod4"
    }

    @classmethod
    def normalize(cls, rows: list[dict]) -> list[dict]:
        return [{cls._RENAMES.get(k, k): v for k, v in row.items()} for row in rows]
```

**Quando implementar:** quando as features de pagamentos e produtos precisarem de dados
corretos dessas colunas específicas. Por enquanto as divergências são toleradas
(retornam 0 / string vazia, sem crash).
