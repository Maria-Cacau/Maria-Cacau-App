# Prototipação — Overview

Pasta com os protótipos HTML do sistema Maria Cacau e as ferramentas de exportação para o Figma.

**Objetivo:** converter os protótipos HTML em elementos 100% editáveis no Figma (não imagens), com
hierarquia preservada — seções selecionáveis como grupo, textos/cores/bordas editáveis individualmente.

---

## Estrutura

```
pocs/prototipacao/
│
├── OVERVIEW.md                        ← este arquivo
│
├── prototipos/                        ← HTMLs dos protótipos
│   ├── mc-frames.html                 ← PRINCIPAL: 14 estados do formulário "Novo Pedido"
│   ├── index.html                     ← 3 abas: Produtos, Entregas, Verificar CPF
│   ├── mc-redesign-v2.html            ← Redesign completo v2
│   ├── mc-board.html                  ← Exploração visual / moodboard
│   ├── mc-consultas-redesign.html     ← Tela de consultas
│   ├── moodboard.html                 ← Moodboard de referências
│   └── figma-ready/                   ← ✅ HTMLs estáticos prontos para plugin "HTML to Figma"
│       ├── produtos.html              ← Painel Produtos, sem scroll, conteúdo pré-renderizado
│       ├── entregas.html              ← Painel Entregas, sem scroll
│       ├── verificar-cpf.html         ← Painel Verificar CPF com resultado exibido
│       └── all-3.html                 ← 3 painéis lado a lado (1280px × 3)
│
├── scripts/
│   ├── gen-figma-ready.py             ← ✅ NOVO: index.html → HTMLs estáticos por painel
│   ├── html-to-figma.py               ← HTML → Figma via Scripter (v2 hierárquico)
│   └── screenshot-frames.py           ← Legado: HTML → screenshots base64 → Figma
│
├── figma/
│   ├── figma-vetorial-14estados.js    ← Output html-to-figma.py (626 KB, 14 frames)
│   ├── figma-14estados-generated.js   ← Legado: screenshots base64 (~4 MB, não editável)
│   ├── figma-plugin.js                ← Design system manual (tokens + componentes + 3 telas)
│   └── frames/                        ← JPEGs dos 14 frames (A1–A7, B1–B7)
│
└── assets/
    ├── monvycw2-tela-completa.jpg
    └── moqb7wlg-image.png
```

---

## Protótipos HTML

### `mc-frames.html` — 14 estados do Novo Pedido

Viewer interativo com 14 frames navegáveis via teclado (← →) ou nav lateral.
Conteúdo 100% JavaScript — dados definidos no array `CASES` dentro do `<script>`.

**Grupo A — Caminhos felizes:**

| ID | Estado |
|----|--------|
| A1 | Pedido mínimo — 1 produto, 1 parcela |
| A2 | 7 produtos + desconto |
| A3 | 7 produtos + campo Outros preenchido |
| A4 | Modalidade FABRICA — endereço oculto |
| A5 | Destinatário diferente do comprador |
| A6 | Obs. Fábrica com instrução detalhada |
| A7 | Seção 9 — Controle Interno expandida |

**Grupo B — Estados de feedback e erro:**

| ID | Estado |
|----|--------|
| B1 | Validação — campos obrigatórios faltando |
| B2 | CPF inválido |
| B3 | CEP não encontrado |
| B4 | CEP sendo consultado (loading) |
| B5 | Cadastrando — loading geral |
| B6 | Cadastro realizado com sucesso |
| B7 | Autocomplete aberto — busca 'BIC' |

### Outros protótipos

Mesma estrutura visual (sidebar + título + conteúdo), sem sistema de frames.
Usam `class="win"` como raiz. O script detecta automaticamente.

---

## Script Principal: `html-to-figma.py` (v2)

### O que faz

Usa **Playwright** (Chromium headless) para renderizar o HTML, resolve estilos CSS computados
(inclusive `oklch()`, `var()`, herança, opacidade em cascata) e extrai a geometria real de cada
elemento visível. Gera um script `.js` para o **Figma Scripter** com elementos editáveis.

### v1 vs v2 — histórico importante

| | v1 (flat) | v2 (hierárquico) |
|--|--|--|
| Estrutura extraída | Lista plana de rects + textos | Árvore DOM: `{ node, children[], texts[] }` |
| Coordenadas | Absolutas relativas à raiz | **Relativas ao pai** (para frames aninhados) |
| Resultado no Figma | 300+ elementos soltos, sem agrupamento | Frames aninhados espelham o DOM |
| Seleção no Figma | Impossível selecionar seções | Cada seção = 1 Frame selecionável |

A v1 gerava tudo flat — textos e retângulos sem hierarquia.
A v2 reescreve o EXTRACT_SCRIPT para retornar uma árvore e emite `figma.createFrame()` aninhados.

### Lógica de geração (v2)

```
Nó DOM com background/border
  → figma.createFrame() com fill (agrupável, selecionável)

Nó DOM sem visual mas com filhos
  → ACHATADO: filhos sobem ao pai com offset acumulado
  → Reduz chamadas de API, limpa layers panel

Nó DOM folha sem visual e sem filhos
  → Ignorado

Textos diretos (nós de texto do DOM)
  → figma.createText() dentro do frame pai
```

O achatamento de contêineres invisíveis reduzeu o output de 2 MB → **626 KB**.

### Status atual

> **⚠️ Ainda não funcionou como esperado no Figma Scripter.**
> O script é gerado corretamente pelo Python (626 KB, 14 frames), mas o resultado
> no Figma ainda precisa de depuração. Próximo passo: entender o erro exato
> (timeout? coordenadas erradas? sintaxe JS incompatível com o Scripter?).

### Limitações conhecidas (todos os casos)

- `::before`/`::after` CSS não capturados (ex: indicador ativo da sidebar)
- Elementos `<svg>` ignorados (ícones ausentes)
- Fonte no Figma: Inter (HTML usa Segoe UI/system-ui)
- Animações CSS não se traduzem (spinners de loading)
- `box-shadow` não capturado

### Como rodar

```bash
# Requisito (uma vez só):
pip install playwright && playwright install chromium

# Todos os 14 frames (output: figma/figma-vetorial-14estados.js)
python3 scripts/html-to-figma.py

# Frame específico (índice 0 = A1) — bom para testes isolados
python3 scripts/html-to-figma.py mc-frames.html 0

# Múltiplos frames
python3 scripts/html-to-figma.py mc-frames.html 0,3,6

# HTML avulso
python3 scripts/html-to-figma.py mc-redesign-v2.html
```

### Como usar o output no Figma

1. Figma → **Plugins → Scripter**
2. Scripter → **File → Open** → seleciona o `.js`
3. **Run**
4. Página `🧩 HTML Vetorial` criada com os frames lado a lado

---

---

## Script: `gen-figma-ready.py` — index.html → HTMLs estáticos por painel

### O que faz

Usa Playwright para renderizar o `index.html`, ativar cada painel (rodando o JS de conteúdo
dinâmico), remover overflow/scroll constraints, e capturar o HTML "congelado" de cada tela.

A diferença da abordagem anterior (`html-to-figma.py`): entrega **HTML estático** em vez de JS
para o Scripter. Esses HTMLs são consumidos diretamente pelos plugins "HTML to Figma" do Figma.

### Painéis gerados

| Arquivo | Conteúdo |
|---|---|
| `produtos.html` | Painel Produtos com gráfico de barras e tabela pré-renderizados |
| `entregas.html` | Painel Entregas com lista de pedidos pré-renderizada |
| `verificar-cpf.html` | Painel Verificar CPF com CPF válido (417.460.450-83) e resultado exibido |
| `all-3.html` | Os 3 painéis lado a lado em um único arquivo |

### Como rodar

```bash
# Gera/atualiza os 4 arquivos em prototipos/figma-ready/
python3 scripts/gen-figma-ready.py
```

### Como usar no Figma

1. Figma → Plugins → buscar **"HTML to Figma"** (by Builder.io ou similar)
2. No plugin: botão de upload/link → seleciona o arquivo `.html` de `figma-ready/`
3. O plugin converte para elementos editáveis no Figma

### O que fica estático (sem JS)

Cada arquivo gerado tem o **DOM congelado** com o conteúdo já renderizado:
- Barras do gráfico com alturas corretas
- Tabela de produtos completa (12 SKUs)
- Lista de entregas (6 pedidos)
- Resultado de CPF válido/inválido

Os inline styles do Playwright garantem `overflow:visible` e `height:auto` mesmo que o CSS
original tente sobrescrever. Não há dependências externas — cada arquivo é autossuficiente.

---

## Script Legado: `screenshot-frames.py`

Captura JPEGs dos frames via Playwright e embute em base64 (~4 MB).
Output **não é editável** — equivale a arrastar uma imagem para o frame.

**Usar apenas quando:** fidelidade visual importa mais que editabilidade.

---

## Design System Manual: `figma-plugin.js`

Script Figma Scripter criado à mão. Constrói:
- **Página 1** — Design Tokens (22 cores, tipografia, tokens de layout)
- **Página 2** — Componentes (botões, inputs×9, selects, segmented, checkboxes,
  banners, badges, tabela, sidebar, autocomplete, sticky footer, section headers)
- **Página 3** — 3 telas completas (Novo Pedido, Resumo de Produtos, Verificar CPF)

Não é gerado automaticamente — precisa ser atualizado à mão.

---

## Fluxo de trabalho

```
Novo protótipo HTML
        ↓
Abrir no browser local para validar visualmente
        ↓
python3 scripts/html-to-figma.py <arquivo.html>
        ↓
figma/figma-vetorial-<nome>.js   (626 KB para 14 frames)
        ↓
Figma: Plugins → Scripter → File → Open → Run
        ↓
Página '🧩 HTML Vetorial' com Frames aninhados editáveis
```

---

## Adicionar novos protótipos

1. Salvar o `.html` em `prototipos/`
2. Rodar `python3 scripts/html-to-figma.py <novo.html>`
3. Usar o `.js` gerado no Figma Scripter

Se o HTML usar frames (`showFrame(i)` + `#vswin`), adicionar metadados em
`FRAMES_META` dentro do `html-to-figma.py` para habilitar navegação por índice.

---

## Contexto de sessão (para retomar sem perder estado)

### Abordagem atual: plugin "HTML to Figma"

Mudança de estratégia: em vez de gerar JS para o Scripter (abordagem anterior, com problemas),
o usuário vai usar plugins nativos do Figma que consomem HTML diretamente.

Os HTMLs estáticos em `prototipos/figma-ready/` estão prontos para isso.

### Histórico da abordagem anterior (Scripter)

O `html-to-figma.py` v2 foi reescrito para gerar JS com Frames aninhados (hierárquico):
- EXTRACT_SCRIPT retorna árvore DOM com coordenadas relativas ao pai
- `generate_figma_js` emite `figma.createFrame()` aninhados
- Flatten de containers invisíveis: filhos sobem com offset acumulado
- Output: `figma/figma-vetorial-14estados.js` (627 KB)
- Output de teste: `figma/figma-vetorial-mc-frames-f0.js` (46 KB — só o frame A1)

O Scripter não funcionou como esperado (motivo exato não confirmado — possível timeout
ou problema de renderização). Por isso a mudança para o fluxo de plugins HTML to Figma.

### O que gerar para novos protótipos

- Para `mc-frames.html` (14 estados do Novo Pedido): ainda sem HTMLs estáticos.
  O `gen-figma-ready.py` foi feito para o `index.html`. Seria necessário adaptar para
  exportar frames individuais do `mc-frames.html` como HTMLs estáticos.
- Para `index.html` (3 abas): ✅ feito, em `figma-ready/`.
