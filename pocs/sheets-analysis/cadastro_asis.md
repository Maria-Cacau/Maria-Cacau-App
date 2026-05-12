# Cadastro — Análise AS IS da Planilha

> Análise completa da aba **Cadastro** e das abas de suporte da planilha Google Sheets.
> Base: 12.058 pedidos históricos | Amostra de referência: últimas 50 linhas com pedido preenchido.
> Data da análise: Mai/2026.

---

## Visão Geral

| Item | Valor |
|---|---|
| Aba principal | `Cadastro` |
| Pedidos históricos | ~12.058 |
| Colunas totais no header | 166 |
| Colunas com dados ativos | 87 |
| Total de abas na planilha | 40 |
| Abas ativas relevantes | 6 |

---

## Arquitetura da Planilha

A planilha não é só a aba `Cadastro` — ela tem um conjunto de abas de suporte:

```
Cadastro          → aba principal, 1 linha por pedido
Produtos          → master list de todas as opções (dropdowns)
MACRO CADASTRO    → linha-template com valores padrão (copiada para novo pedido)
Pedido            → visão/folha de um único pedido (para impressão)
Endereço          → referência de estados brasileiros
Página74, Página75 → listas auxiliares (produtos antigos, números)
```

As demais abas (~34) são históricas: dados de 2018/2019, campanhas antigas, análises pontuais. Não fazem parte do fluxo ativo.

---

## Aba `Produtos` — Master List de Dropdowns

A aba `Produtos` é a **fonte de verdade para todos os campos de seleção** do Cadastro. Cada coluna alimenta um campo diferente via `data validation → ONE_OF_RANGE`.

| Col | Header | Qtd opções | Alimenta no Cadastro |
|---|---|---|---|
| A | `PRODUTOS` | 1.280 | Prod1, Prod2, Prod3, Prod4, Prod5, Prod6, Prod7 |
| B | `SUGESTÃO BÁRBARA` | 26 | (uso interno — sugestões) |
| F | `PAGAMENTO` | 26 | Forma 1º–6º Pgto |
| G | `MODAL` | 28 | Modalidade |
| H | `COMO NOS CONHECEU` | 27 | COMO CONHECEU |
| J | `EVENTO` | 42 | Evento |
| K | `GRAU DE PARENTESCO` | 18 | PARENTESCO |
| O | `GÊNERO` | 6 | SEXO |
| P | `NEGOCIAÇÃO` | 5 | NEGOCIAÇÃO (controle interno) |
| Q | `QUEM EMBALOU` | 6 | QUEM EMBALOU (controle interno) |

**Opções completas dos campos mais relevantes para o cadastro:**

**PAGAMENTO (Forma de pgto):**
`-`, `Boleto`, `Brasil`, `Créd 10x`, `Créd 1x`, `ELO7`, `Inter`, `Créd 3x`, `Créd 6x`, ...

**MODAL (Modalidade de entrega):**
`SEDEX 10`, `SEDEX 12`, `ENTREGA`, `SEDEX PLP`, `-`, `CANCELADO`, `MOTOBOY`, `LOGGI`, `LATAM CARGO`, `AZUL EXPRESSO`, `JADLOG COM`, `PAC`, ...

**COMO NOS CONHECEU:**
`Loja`, `-`, `Busca Cliente`, `Cliente`, `Comprou FGB - Anhembi`, `Comprou FGB - BH`, `Email`, `Fami`, `Google`, `Instagram`, ...

**EVENTO:**
`-`, `2ª Pedido`, `Amostras`, `Aniversário`, `Batizado`, `Chá de Bebê`, `Chá Revelação`, `Corporativo`, `Maternidade (Nascimento)`, `Ocasiões`, `Padrinho`, ...

**GRAU DE PARENTESCO:**
`-`, `Amigo(a)`, `Avó`, `Avô`, `Esposa`, `Filho`, `Filha`, `Mãe`, `Pai`, `Tia`, `Irmã`, ...

**GÊNERO:**
`-`, `Feminino`, `Gêmeas`, `Gêmeos`, `Masculino`, `Não sabe`

---

## Aba `MACRO CADASTRO` — Template de Nova Linha

Esta aba contém **uma linha pré-preenchida com os valores padrão** de cada coluna. Quando a equipe vai cadastrar um novo pedido, copia essa linha para a aba `Cadastro` e preenche os dados por cima.

Valores padrão observados:
- Checkboxes: `FALSE`
- Nomes/textos de personalização: `<nome>`, `<tema etiqueta>`, `<tema caixa>`
- Valores monetários: `0`, `R$ 0,00`
- Campos não-obrigatórios: `-`

Isso confirma que o processo atual é **manual e baseado em copy/paste**.

---

## Aba `Cadastro` — Estrutura Detalhada

### Campos e Fórmulas por Grupo

#### [1] Identificação

| Col | Header | Tipo | Fill | Validação / Fórmula |
|---|---|---|---|---|
| 1 | `PEDIDO` | numérico | 100% | entrada manual (sequencial) |
| 2 | `COMO CONHECEU` | enum | 76% | `ONE_OF_RANGE: Produtos!H` |
| 3 | `PLP/NF IMPRESSA` | bool | 100% | `BOOLEAN` (checkbox) |
| 13 | `Tiny` | numérico | 100% | entrada manual (código ERP, 0 = não integrado) |

---

#### [2] Dados do Comprador

| Col | Header | Tipo | Fill | Validação / Fórmula |
|---|---|---|---|---|
| 4 | `NOME COMPRADOR` | texto | 94% | entrada livre |
| 5 | `PARENTESCO` | enum | 86% | `ONE_OF_RANGE: Produtos!K` (18 opções) |
| 85 | `TEL` | texto | 90% | entrada livre (sem máscara) |
| 86 | `CPF` | texto | 86% | entrada livre (sem máscara) |
| 87 | `EMAIL` | texto | 82% | entrada livre |

---

#### [3] Presenteado / Evento

| Col | Header | Tipo | Fill | Validação / Fórmula |
|---|---|---|---|---|
| 6 | `NOME BEBE/PRESENTEADO` | texto | 86% | entrada livre |
| 7 | `SEXO` | enum | 86% | `ONE_OF_RANGE: Produtos!O` (Feminino, Masculino, Gêmeas, Gêmeos, Não sabe) |
| 12 | `Data Evento` | data | 78% | entrada livre, formato `DD/MM/YY` |
| 91 | `Evento` | enum | 94% | `ONE_OF_RANGE: Produtos!J` (42 opções) |

---

#### [4] Personalização (Arte / Design)

| Col | Header | Tipo | Fill | Validação / Fórmula |
|---|---|---|---|---|
| 8 | `NOME DA ETIQUETA` | texto | 100% | entrada livre |
| 9 | `Etiqueta / tema` | texto | 100% | entrada livre |
| 10 | `Nome na Caixa` | texto | 100% | entrada livre |
| 11 | `Arte / tecido da caixa` | texto | 100% | entrada livre |
| 14 | `Valor Rótulo Clássico` | numérico | 100% | entrada manual (normalmente 0) |

---

#### [5] Produtos (Itens do Pedido)

Até **7 slots** numerados. Cada slot: quantidade (entrada manual), produto (dropdown), valor unitário (entrada manual), valor total (fórmula automática).

| Slot | Col Qtd | Col Produto | Col Unit | Col Valor | Fill Qtd | Fórmula Valor |
|---|---|---|---|---|---|---|
| 1 | Q1 (15) | Prod1 (16) | $Unit1 (17) | Valor1 (18) | 90% | `=Q1 * $Unit1` |
| 2 | Q2 (19) | Prod2 (20) | $Unit2 (21) | Valor2 (22) | 44% | `=Q2 * $Unit2` |
| 3 | Q3 (23) | Prod3 (24) | $Unit3 (25) | Valor3 (26) | 20% | `=Q3 * $Unit3` |
| 4 | Q4 (27) | Prod4* (28) | $Unit4 (29) | Valor4 (30) | 36% | `=Q4 * $Unit4` |
| 5 | Q5 (31) | Prod5 (32) | $Unit5 (33) | Valor5 (34) | 12% | `=Q5 * $Unit5` |
| 6 | Q6 (35) | Prod6 (36) | $Unit6 (37) | Valor6 (38) | 26% | `=Q6 * $Unit6` |
| 7 | Q7 (39) | Prod7 (40) | $Unit7 (41) | Valor7 (42) | 24% | `=Q7 * $Unit7` |

> **\*Prod4:** o header está literalmente como `"-"` na aba Cadastro (bug histórico). Nas abas mais antigas o header é `"Prod4"`.
>
> **Validação Prod1-7:** todas as colunas de produto usam `ONE_OF_RANGE: =Produtos!$A$2:$A$1285` — o mesmo dropdown de 1.280 produtos.

**Campo livre adicional:**

| Col | Header | Tipo | Fill | Observação |
|---|---|---|---|---|
| 43 | `Outro Espec.` | texto | 12% | produto fora dos 7 slots, digitado livremente |
| 44 | `Valor Outro` | numérico | 98% | fórmula (retorna 0 quando vazio) |

---

#### [6] Financeiro

| Col | Header | Tipo | Fill | Fórmula |
|---|---|---|---|---|
| 45 | `Desconto` | numérico | 100% | entrada manual (pode ser negativo) |
| 46 | `$FRETE` | numérico | 92% | entrada manual |
| 47 | `TOTAL` | numérico | 100% | fórmula: soma de Valor1-7 + Valor Outro − Desconto + Frete |
| 48 | `Confere soma (zero)` | numérico | 100% | fórmula: verificação → deve ser 0 |
| 74 | `Quanto falta pagar?` | numérico | 100% | fórmula: Total − soma dos pagamentos confirmados |
| 73 | `VAI PAGAR RETIRA` | numérico | 98% | entrada manual: 0 = não, 1 = sim |

---

#### [7] Parcelamento (até 6 pagamentos)

| Parcela | Col Data | Col Valor | Col Forma | Col Confirmado | Fill | Validação Forma |
|---|---|---|---|---|---|---|
| 1ª | 49 | 50 | 51 | 52 | 88% | `ONE_OF_RANGE: Produtos!F` |
| 2ª | 53 | 54 | 55 | 56 | 26% | idem |
| 3ª | 57* | 58 | 59 | 60 | 4% | idem |
| 4ª | 61 | 62 | 63 | 64 | 2% | idem |
| 5ª | 65 | 66 | 67 | 68 | 0% | idem |
| 6ª | 69 | 70 | 71 | 72 | 0% | idem |

> **\*Bug na planilha:** coluna 57 tem o header rotulado como `"Data 6ªPgto"` mas é a 3ª parcela.
>
> Na prática: 88% dos pedidos têm 1 pagamento, ~26% têm 2, raramente mais.

---

#### [8] Entrega / Logística

| Col | Header | Tipo | Fill | Validação / Fórmula |
|---|---|---|---|---|
| 76 | `DATA` | data | 94% | entrada livre, formato `DD/MM/YY` |
| 77 | `D+1` | bool | 100% | fórmula (calculado a partir da data de entrega) |
| 78 | `Modalidade` | enum | 94% | `ONE_OF_RANGE: Produtos!G` (28 opções) |
| 79 | `Destinatário` | texto | 94% | entrada livre |
| 80 | `Rua` | texto | 92% | entrada livre (rua + número na mesma célula) |
| 81 | `Compl.` | texto | 78% | entrada livre |
| 82 | `Bairro` | texto | 92% | entrada livre |
| 83 | `Cidade` | texto | 92% | entrada livre (formato inconsistente: `São Paulo - SP`) |
| 84 | `CEP` | texto | 92% | entrada livre (sem máscara) |
| 88 | `obs fábrica` | texto | 20% | entrada livre |
| 89 | `Info Motoboy` | texto | 16% | entrada livre |

**Modalidades completas (Produtos!G):**
`SEDEX 10`, `SEDEX 12`, `ENTREGA`, `SEDEX PLP`, `-`, `CANCELADO`, `MOTOBOY`, `LOGGI`, `LATAM CARGO`, `AZUL EXPRESSO`, `JADLOG COM`, `PAC`, `AZUL EXPRESS`, `RETIRADA`, `GUARITA`, `FEIRA`, `FABRICA`, ...

---

#### [9] Controle Interno (pós-cadastro)

Preenchidos pelo time após o pedido entrar em produção. **Não fazem parte do fluxo de cadastro.**

| Col | Header | Fill recente |
|---|---|---|
| 3 | `PLP/NF IMPRESSA` | 100% (fórmula/checkbox) |
| 75 | `DESPACHADO` | 100% (fórmula/checkbox) |
| 92 | `CDH` | 94% (custo interno ~1000) |
| 93–106 | NEGOCIAÇÃO, AJUSTE, QUEM EMBALOU, TEMPO, etc. | 0% nos últimos 50 |

---

## Fluxo AS IS de Cadastro de um Novo Pedido

```
1. Operador vai até a aba MACRO CADASTRO
2. Copia a linha-template
3. Cola na aba Cadastro (na primeira linha vazia)
4. Preenche campo por campo:
   - Número do pedido (manual)
   - Dados do comprador (digitados)
   - Presenteado / evento (digitados + dropdown para Parentesco, Sexo, Evento)
   - Personalização (digitados)
   - Produtos: seleciona via dropdown de 1.280 itens + digita quantidade e valor unit
     → Valor total calculado automaticamente por fórmula
   - Desconto e frete (manuais)
   - TOTAL calculado automaticamente
   - Pagamento: digita data, valor, forma (dropdown de Produtos!F)
   - Data de entrega + modalidade (dropdown de Produtos!G) + endereço
5. Pronto — o pedido aparece nos filtros do app
```

**Pontos de fricção do fluxo atual:**
- Copy/paste da linha-template é manual e propenso a erros
- Sem máscara em TEL, CPF, CEP
- Dropdown de produto tem 1.280 itens sem busca — é necessário rolar ou saber o código
- Rua + número na mesma célula (sem separação)
- Cidade digitada livremente (formato inconsistente)
- Sem validação de total vs. pagamentos durante o cadastro

---

## Resumo para o Design da Tela de Cadastro

O formulário precisa cobrir **6 seções** com campos input e a lógica de cálculo embutida:

```
SEÇÃO 1 — PEDIDO
  Número do pedido (auto-incremento ou manual) | Como conheceu (dropdown)

SEÇÃO 2 — COMPRADOR / PRESENTEADO
  Comprador: nome, parentesco (dropdown), tel, CPF, email
  Presenteado: nome, sexo (dropdown)
  Evento: tipo (dropdown), data

SEÇÃO 3 — PERSONALIZAÇÃO
  Nome etiqueta | Tema etiqueta | Nome na caixa | Arte/tecido da caixa

SEÇÃO 4 — PRODUTOS
  Até 7 slots: [busca/dropdown de produto] + [quantidade] + [valor unit]
  Valor total por slot = calculado automaticamente
  Campo "Outro" livre
  Desconto | Frete | TOTAL (calculado)

SEÇÃO 5 — PAGAMENTO
  Parcela 1: forma (dropdown) + data + valor
  Parcela 2+ (expansível)
  Falta pagar: calculado automaticamente

SEÇÃO 6 — ENTREGA
  Data de entrega | Modalidade (dropdown)
  Destinatário | Logradouro | Número | Complemento | Bairro | Cidade | CEP
  Obs fábrica | Info motoboy
```

**Melhorias que a tela de cadastro deve trazer sobre o fluxo atual:**
- Campo de busca nos dropdowns de produto (1.280 itens não cabem em lista simples)
- Máscaras automáticas para TEL, CPF e CEP
- Endereço com campos separados (logradouro + número)
- Auto-complete ou validação de Cidade/CEP
- Cálculo de total em tempo real (sem precisar de fórmula de planilha)
- Número de pedido auto-incrementado
- Gravação direta na planilha (sem copy/paste de template)
