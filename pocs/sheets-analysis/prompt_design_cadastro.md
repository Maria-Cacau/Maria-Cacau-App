# Prompt — Design da Tela de Cadastro de Pedido

> Arquivo para ser passado diretamente para a IA de design.

---

## Contexto

Estamos desenvolvendo um **app desktop** (PyQt6 / Python) para a operação interna de uma
empresa de presentes personalizados chamada **Maria Cacau**. O app já existe e tem uma
interface visual definida — este prompt é para criar uma **nova aba/tela** dentro do app
existente, chamada **"Novo Pedido"** ou **"Cadastro de Pedido"**.

Use como base o **protótipo que você já criou anteriormente** para este projeto. Mantenha
a identidade visual, paleta de cores, tipografia e estilo de componentes já estabelecidos.
A nova tela deve ser consistente com o que já existe.

---

## Objetivo da Tela

Substituir o processo atual (que é feito manualmente em uma planilha Google Sheets)
por um formulário no app. O operador preenche os dados do pedido e, ao clicar em
**"Cadastrar Pedido"**, os dados são enviados diretamente para a planilha.

O foco principal é **velocidade e redução de erros no cadastro** — o operador não
deve precisar abrir a planilha para registrar um pedido.

---

## Estrutura Geral

A tela é **uma única página com scroll vertical**, dividida em **seções visuais
claramente separadas** (sem múltiplas páginas ou wizards). As seções são:

```
1. Identificação do Pedido
2. Comprador
3. Presenteado & Evento
4. Personalização
5. Produtos
6. Financeiro
7. Pagamento
8. Entrega
9. Controle Interno  ← seção colapsável, ao final
```

Cada seção deve ter um **título/header visual** que a delimita claramente.
As seções devem fluir de cima para baixo em uma única coluna (ou duas colunas
onde fizer sentido agrupar campos curtos).

---

## Seção 1 — Identificação do Pedido

Campos:

| Campo | Tipo | Comportamento |
|---|---|---|
| **Nº Pedido** | Input numérico | Pré-preenchido automaticamente com o último número de pedido + 1. Editável. |
| **Como Conheceu** | Dropdown | Opções fixas: Instagram, Google, Cliente, Fami, Loja, Email, e outras. |

Layout sugerido: linha única, dois campos lado a lado.

---

## Seção 2 — Comprador

Campos:

| Campo | Tipo | Comportamento |
|---|---|---|
| **Nome do Comprador** | Input texto | Obrigatório |
| **Parentesco** | Dropdown | Opções: Mãe, Pai, Avó, Avô, Filha, Filho, Tia, Amigo(a), Esposa, etc. |
| **Telefone** | Input com máscara | Máscara: `(00) 00000-0000` |
| **CPF** | Input com máscara | Máscara: `000.000.000-00` |
| **Email** | Input texto | Teclado tipo email |

Layout sugerido: Nome em linha inteira. Abaixo: Parentesco e Telefone lado a lado.
Abaixo: CPF e Email lado a lado.

---

## Seção 3 — Presenteado & Evento

Campos:

| Campo | Tipo | Comportamento |
|---|---|---|
| **Nome do Presenteado** | Input texto | Nome do bebê / aniversariante |
| **Sexo** | Dropdown/Segmented | Feminino, Masculino, Gêmeas, Gêmeos, Não sabe |
| **Tipo de Evento** | Dropdown | Aniversário, Maternidade, Batizado, Chá de Bebê, Chá Revelação, Corporativo, Ocasiões, etc. |
| **Data do Evento** | Date picker | Formato DD/MM/AAAA |

Layout sugerido: Nome em linha inteira. Abaixo: Sexo e Tipo de Evento lado a lado.
Abaixo: Data do Evento (campo médio, não ocupa a linha toda).

---

## Seção 4 — Personalização

Esta seção reúne as informações para a equipe de arte/design personalizar a embalagem.

Campos:

| Campo | Tipo | Comportamento |
|---|---|---|
| **Nome da Etiqueta** | Input texto | Nome que vai impresso na etiqueta |
| **Tema da Etiqueta** | Input texto | Tema visual (ex: safari, princesa, urso) |
| **Nome na Caixa** | Input texto | Nome que aparece na caixa |
| **Arte / Tecido da Caixa** | Input texto | Descrição da arte ou tecido da embalagem |
| **Valor Rótulo Clássico** | Input numérico | Default: 0 |

Layout sugerido: Nome da Etiqueta e Tema da Etiqueta lado a lado. Abaixo: Nome na Caixa
e Arte/Tecido lado a lado. Valor Rótulo Clássico em campo menor.

---

## Seção 5 — Produtos

Esta é a seção mais importante visualmente. Começa com **1 slot de produto** e
o operador adiciona mais clicando em um botão **"+ Adicionar produto"** (até 7 slots).

### Slot de produto (repetível)

Cada slot tem:

| Campo | Tipo | Comportamento |
|---|---|---|
| **Produto** | Autocomplete/busca | Campo de texto que filtra a lista de ~1.280 produtos conforme o operador digita o nome ou código (ex: `BIC001`). Exibe dropdown de sugestões. |
| **Quantidade** | Input numérico | Inteiro positivo |
| **Valor Unitário (R$)** | Input numérico | Decimal |
| **Valor Total** | Campo somente-leitura | Calculado: Quantidade × Valor Unitário. Atualizado em tempo real. |
| **Remover** | Botão ícone (×) | Remove o slot. Visível a partir do 2º slot. |

O primeiro slot não pode ser removido.

### Campo adicional (após os slots)

| Campo | Tipo | Comportamento |
|---|---|---|
| **Outros (descrição livre)** | Input texto | Para produtos fora da lista, digitados manualmente |

### Resumo financeiro dos produtos (dentro desta seção)

Exibir em destaque, atualizado em tempo real conforme o operador preenche:

```
Subtotal dos produtos:     R$ 0,00
```

---

## Seção 6 — Financeiro

Campos:

| Campo | Tipo | Comportamento |
|---|---|---|
| **Desconto (R$)** | Input numérico | Pode ser 0. Pode ser negativo (acréscimo). Default: 0 |
| **Frete (R$)** | Input numérico | Default: 0 |
| **TOTAL** | Campo somente-leitura, em destaque | Calculado: Subtotal − Desconto + Frete. Atualizado em tempo real. |

O campo **TOTAL** deve ter destaque visual — maior, com fundo ou borda que o diferencie
dos outros campos. É a informação mais importante desta seção.

Layout sugerido: Desconto e Frete lado a lado. TOTAL em linha inteira abaixo, em destaque.

---

## Seção 7 — Pagamento

Começa com **1 slot de pagamento**. O operador adiciona mais clicando em
**"+ Adicionar parcela"**. Não há limite máximo (mas na prática são 1 ou 2).

### Slot de pagamento (repetível)

| Campo | Tipo | Comportamento |
|---|---|---|
| **Forma de Pagamento** | Dropdown | Opções: Inter, Boleto, Créd 1x, Créd 3x, Créd 6x, Créd 10x, Brasil, ELO7, etc. |
| **Data do Pagamento** | Date picker | DD/MM/AAAA |
| **Valor (R$)** | Input numérico | |
| **Confirmado?** | Checkbox/Toggle | 0 = Não, 1 = Sim |
| **Remover** | Botão ícone (×) | Visível a partir do 2º slot |

### Resumo de pagamento (dentro desta seção)

Exibir em destaque, atualizado em tempo real:

```
Total do pedido:      R$ 0,00
Total pago:           R$ 0,00
Falta pagar:          R$ 0,00   ← destaque se > 0
Vai pagar na retirada: [ ] Sim
```

O campo **"Falta pagar"** deve ter destaque visual quando o valor for maior que zero
(ex: cor diferente ou badge).

---

## Seção 8 — Entrega

### Campos principais

| Campo | Tipo | Comportamento |
|---|---|---|
| **Data de Entrega** | Date picker | DD/MM/AAAA. Exibe indicador "D+1" quando a data é o dia seguinte à data do evento. |
| **Modalidade** | Dropdown | MOTOBOY, LOGGI, LATAM CARGO, SEDEX PLP, AZUL EXPRESSO, JADLOG COM, SEDEX 10, SEDEX 12, PAC, ENTREGA, RETIRADA, GUARITA, FEIRA, FABRICA, CANCELADO, etc. |

### Destinatário

| Campo | Tipo | Comportamento |
|---|---|---|
| **Mesmo que o comprador** | Checkbox | Quando marcado: copia automaticamente nome, tel e CPF do comprador para os campos abaixo. Os campos ficam editáveis mesmo após o auto-preenchimento. |
| **Nome do Destinatário** | Input texto | |
| **Telefone** | Input com máscara | `(00) 00000-0000` |
| **CPF** | Input com máscara | `000.000.000-00` |
| **Email** | Input texto | |

### Endereço

> **Regra de visibilidade:** se a Modalidade selecionada for RETIRADA, GUARITA, FEIRA
> ou FABRICA, o bloco de endereço fica **oculto ou desabilitado** (não é necessário
> endereço para retirada local).

| Campo | Tipo | Comportamento |
|---|---|---|
| **CEP** | Input com máscara | `00000-000`. Ao sair do campo (onBlur) ou após digitar 8 dígitos, consulta automaticamente a API ViaCEP e preenche os campos abaixo. |
| **Logradouro** | Input texto | Preenchido pelo CEP. Editável. |
| **Número** | Input texto | Não vem do CEP — o operador digita. |
| **Complemento** | Input texto | Opcional |
| **Bairro** | Input texto | Preenchido pelo CEP. Editável. |
| **Cidade** | Input texto | Preenchido pelo CEP. Editável. |
| **Estado (UF)** | Input texto (2 chars) ou Dropdown | Preenchido pelo CEP. Editável. |

### Observações de entrega

| Campo | Tipo | Comportamento |
|---|---|---|
| **Obs. Fábrica** | Textarea | Instruções para a equipe de montagem |
| **Info Motoboy** | Input texto | Instruções específicas para o motoboy |

---

## Seção 9 — Controle Interno *(colapsável)*

Esta seção fica **fechada por padrão** e pode ser expandida com um clique.
Label sugerido: `▶ Controle Interno` → ao clicar: `▼ Controle Interno`.

Campos:

| Campo | Tipo | Comportamento |
|---|---|---|
| **CDH** | Input numérico | Custo interno (default vazio) |
| **Negociação** | Dropdown | Email, Whats B, Whats E, Whats M, - |
| **Data Designer Chamar** | Date picker | DD/MM/AAAA |
| **OBS Interna** | Textarea | Observação interna da operação |
| **Quem Embalou** | Dropdown | Bianca, Bruno, Claudia, Edmar, Jaque, - |
| **Registro** | Input texto | |
| **Tempo (min)** | Input numérico | Tempo de produção em minutos |
| **Caixas Papelão (qtd)** | Input numérico | |

---

## Barra de Ação (Sticky / Fixa)

No rodapé da tela, fixo durante o scroll, deve haver uma **barra de ação** com:

- À esquerda: resumo rápido → `Pedido #XXXXX | Total: R$ 0,00 | Falta: R$ 0,00`
- À direita: dois botões
  - `Limpar` (secundário) — limpa o formulário e volta ao estado inicial
  - `Cadastrar Pedido` (primário, destaque) — valida os campos obrigatórios e envia

---

## Validação e Estados

- Campos obrigatórios não preenchidos ao clicar em "Cadastrar": highlight em vermelho
  com mensagem curta abaixo do campo.
- Enquanto o envio está em progresso (gravando na planilha): botão "Cadastrar Pedido"
  fica em estado de loading (spinner), campos desabilitados.
- Após sucesso: mensagem de confirmação e formulário limpo (ou opção de ver o pedido criado).
- Após erro: mensagem de erro com possibilidade de tentar novamente.

---

## Campos Obrigatórios (mínimo para cadastrar)

- Nº Pedido
- Nome do Comprador
- Telefone
- Pelo menos 1 produto (Produto + Quantidade)
- Data de Entrega
- Modalidade
- Nome do Destinatário

---

## Notas Técnicas para o Design

- **App desktop** — não é web, não é mobile. Resolução típica: 1280×800 a 1920×1080.
- O framework é PyQt6, mas o design pode ser feito em qualquer ferramenta e depois
  será adaptado para o estilo do app existente.
- **Todos os campos calculados** (Valor Total por slot, Subtotal, TOTAL, Falta Pagar)
  são somente-leitura e devem ter visual distinto dos campos de input (ex: fundo levemente
  diferente, sem borda de input, ou com ícone de "calculado").
- O campo de **busca de produto** é o mais crítico da usabilidade — deve ser um
  autocomplete, não um dropdown simples. Pensar em como mostrar o código + nome do
  produto nas sugestões (ex: `BIC001 — Bichinho Virtual personalizado + Cordão`).
- A seção de **Controle Interno** é secundária — pode ter estilo mais discreto
  (menor contraste, texto menor) para comunicar que não é parte do fluxo principal.
