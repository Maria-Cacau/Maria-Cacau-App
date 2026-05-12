# Prompt — Estados e Casos de Uso da Tela "Novo Pedido"

> Continuação do design já criado.
> Este prompt pede os **frames de estado preenchido, estados de erro e variações** da
> tela "Novo Pedido" para cobrir os casos reais da operação.

---

## Contexto

O protótipo da tela "Novo Pedido" já foi criado e está aprovado. Agora precisamos dos
**frames de estado** para cobrir todos os casos de uso reais — tanto os "caminhos felizes"
(pedidos preenchidos corretamente) quanto os estados de erro e validação.

Mantenha **exatamente** o mesmo design system, paleta de cores, tipografia e componentes
do protótipo original. Não altere o layout base — apenas mostre-o preenchido ou com os
estados de feedback visual.

---

## O que entregar

Criar **15 frames** (artboards), organizados em grupos. Cada frame é uma tela completa
da "Novo Pedido" mostrando um estado específico. As seções que não são afetadas pelo caso
de uso podem aparecer colapsadas ou em estado vazio padrão — foque nas seções relevantes
para cada caso.

---

## GRUPO A — Caminhos Felizes (pedidos reais preenchidos)

### Frame A1 — Pedido mínimo (1 produto, 1 parcela)

**Caso de uso:** pedido mais simples possível — o que o operador preenche no mínimo.

Dados para preencher:
```
Nº Pedido: 25859
Como Conheceu: Cliente

Comprador:
  Nome: Bruna Otani Wada
  Parentesco: Mãe
  Telefone: (11) 99988-7137
  CPF: 228.085.478-38
  Email: bruna.otaniwada@gmail.com

Presenteado & Evento:
  Nome: Laura
  Sexo: Feminino (selecionado no segmented)
  Tipo de Evento: Maternidade (Nascimento)
  Data do Evento: 28/01/2026

Personalização:
  Nome da Etiqueta: Laura
  Tema da Etiqueta: floral
  Nome na Caixa: Laura
  Arte / Tecido da Caixa: floral rosa

Produtos (1 item):
  Prod1: "Cartão 7x10 com Mini Tabletinho chocolate ao leite" | Qtd: 40 | Unit: R$ 6,90 | Total: R$ 276,00
  Outros: (vazio)
  Subtotal: R$ 276,00

Financeiro:
  Desconto: 0
  Frete: R$ 19,96
  Total do Pedido: R$ 295,96

Pagamento (1 parcela):
  Forma: Créd 2x | Data: 13/12/2025 | Valor: R$ 295,96 | Confirmado: ✓
  Total pago: R$ 295,96
  Falta pagar: R$ 0,00  ← mostrar em verde

Entrega:
  Data: 22/12/2025
  Modalidade: SEDEX PLP
  Mesmo que o comprador: ✓ (marcado → campos do destinatário preenchidos automaticamente)
  Nome Destinatário: Bruna Otani Wada (preenchido, levemente diferenciado do input manual)
  CEP: 06351-380
  Logradouro: Alameda Safira (preenchido pelo CEP)
  Número: 74
  Complemento: condomínio Golf Village
  Bairro: Golf Park (preenchido pelo CEP)
  Cidade: Carapicuíba (preenchido pelo CEP)
  UF: SP (preenchido pelo CEP)
  Obs. Fábrica: MINI TABLETINHO NO CARD + SAQUINHO + FITILHO
```

---

### Frame A2 — Pedido máximo (7 produtos, com desconto)

**Caso de uso:** pedido com todos os slots de produto preenchidos e desconto aplicado.
Mostrar como a seção de Produtos fica com 7 linhas.

Dados para preencher:
```
Nº Pedido: 25622
Como Conheceu: Instagram

Comprador:
  Nome: Claudete Luiza de Oliveira
  Parentesco: Mãe
  Telefone: (19) 98838-3973
  CPF: 225.426.898-81
  Email: claudete17oliveira@gmail.com

Presenteado & Evento:
  Nome: Isabela
  Sexo: Feminino
  Tipo de Evento: Aniversário
  Data do Evento: 26/01/2026

Personalização: (deixar vazio — focar nos produtos)

Produtos (7 itens — mostrar todas as 7 linhas):
  Prod1: "LIVRO PARA COLORIR"              | Qtd: 13 | Unit: R$ 28,88 | Total: R$ 375,44
  Prod2: "GIZ DE CERA CAIXINHA PERS."     | Qtd: 10 | Unit: R$ 0,00  | Total: R$ 0,00
  Prod3: "MASSINHA"                         | Qtd: 13 | Unit: R$ 0,00  | Total: R$ 0,00
  Prod4: "(2) MOLDE SORTIDO MASSINHA"      | Qtd: 13 | Unit: R$ 0,00  | Total: R$ 0,00
  Prod5: "(2) Bolinha pula-pula"           | Qtd: 13 | Unit: R$ 0,00  | Total: R$ 0,00
  Prod6: "JOGO MEMÓRIA 12 PARES + ORGANZA"| Qtd: 13 | Unit: R$ 0,00  | Total: R$ 0,00
  Prod7: "ORGANZA 15x23 (KIT)"            | Qtd: 13 | Unit: R$ 0,00  | Total: R$ 0,00
  Outros: (vazio)
  Subtotal: R$ 431,36

Financeiro:
  Desconto: R$ 27,96   ← campo de desconto preenchido com valor > 0
  Frete: R$ 21,80
  Total do Pedido: R$ 425,20   ← destaque visual

Pagamento (2 parcelas):
  Parcela 1: Créd 6x | 09/10/2025 | R$ 338,56 | ✓
  Parcela 2: Vindi   | 12/01/2026 | R$ 86,64  | ✓
  Falta pagar: R$ 0,00

Entrega:
  Modalidade: JADLOG COM
  CEP: 13058-208
  Logradouro: R. Prof. Romeu Ceravolo
  Número: 425
  Complemento: Casa
  Bairro: Conj. Res. Parque São Bento
  Cidade: Campinas
  UF: SP
```

---

### Frame A3 — 7 produtos + campo Outros preenchido

**Caso de uso:** pedido com 7 produtos onde o campo "Outros" também tem conteúdo.
Mostrar como o campo Outros aparece preenchido com texto de observação.

Dados para preencher:
```
Nº Pedido: 25727

Comprador:
  Nome: Clelia Aparecida de Paiva
  Parentesco: Mãe
  Telefone: (12) 98128-0831

Presenteado & Evento:
  Nome: Mirela
  Sexo: Feminino
  Evento: Aniversário | Data: 14/03/2026

Produtos (7 itens):
  Prod1: "LIVRO PARA COLORIR"               | Qtd: 20 | Unit: R$ 20,89 | Total: R$ 417,80
  Prod2: "GIZ DE CERA CAIXINHA PERS."      | Qtd: 20 | Unit: R$ 0,00  | Total: R$ 0,00
  Prod3: "MASSINHA"                          | Qtd: 20 | Unit: R$ 0,00  | Total: R$ 0,00
  Prod4: "(2) Bolinha pula-pula"            | Qtd: 20 | Unit: R$ 0,00  | Total: R$ 0,00
  Prod5: "(2) MOLDE SORTIDO MASSINHA"       | Qtd: 20 | Unit: R$ 0,00  | Total: R$ 0,00
  Prod6: "Saquinho Organza"                 | Qtd: 20 | Unit: R$ 0,00  | Total: R$ 0,00
  Prod7: "SAQUINHO PERSONALIZADO 10X15 ZIP" | Qtd: 20 | Unit: R$ 3,90  | Total: R$ 78,00
  Outros: "mudou a arte depois de aprovado"  ← campo Outros preenchido com texto
  Subtotal: R$ 495,80

Financeiro:
  Desconto: 0 | Frete: R$ 23,47 | Total: R$ 519,27

Pagamento (3 parcelas):
  Parcela 1: Inter | 30/09/2025 | R$ 100,00 | ✓
  Parcela 2: Inter | 07/11/2025 | R$ 331,27 | ✓
  Parcela 3: Inter | 28/01/2026 | R$ 78,00  | ✓
  Falta pagar: R$ 0,00

Entrega:
  Modalidade: JADLOG COM
  CEP: 12225-011
  Logradouro: Av. Presidente Tancredo Neves
  Número: 1331 | Complemento: Apto 71
  Bairro: Jd Americano | Cidade: São José dos Campos | UF: SP
```

---

### Frame A4 — Modalidade FABRICA (bloco de endereço oculto)

**Caso de uso:** quando a modalidade é FABRICA/RETIRADA/GUARITA, o bloco de endereço
deve ficar **oculto**. Mostrar como a seção de Entrega fica sem o bloco ENDEREÇO.

Dados para preencher:
```
Nº Pedido: 25868
Como Conheceu: Cliente

Comprador: Tacia

Produtos (1 item):
  Prod1: "(NAT211) Brownie 6x6 na caixinha + Cinta Personalizada" | Qtd: 15 | Unit: R$ 13,99 | Total: R$ 209,85

Financeiro:
  Desconto: R$ -9,85  ← desconto negativo = acréscimo (mostrar como está)
  Frete: 0
  Total: R$ 200,00

Pagamento:
  Inter | 17/12/2025 | R$ 200,00 | ✓
  Falta pagar: R$ 0,00

Entrega:
  Data: 20/12/2025
  Modalidade: FABRICA   ← selecionada
  Nome Destinatário: Tacia
  ↓ Bloco ENDEREÇO completamente oculto (não mostrar CEP, logradouro, etc.)
  ↓ Bloco OBSERVAÇÕES permanece visível
```

---

### Frame A5 — Destinatário diferente do comprador

**Caso de uso:** presente enviado para outra pessoa. Checkbox "Mesmo que o comprador"
desmarcado. Os dados do destinatário são diferentes do comprador.

Dados:
```
Nº Pedido: 25856

Comprador: Luana
Evento: Natal

Produto: "(NAT101) Chocotone 800g Brigadeiro Gourmet" | 1x | R$ 89,90 | R$ 89,90

Entrega:
  Modalidade: MOTOBOY
  Mesmo que o comprador: □ (desmarcado)
  
  Destinatário:
    Nome: Flávio Rizzi         ← nome diferente do comprador
    Telefone: (vazio)
    CPF: (vazio)
    Email: (vazio)
  
  ENDEREÇO:
    CEP: 04743-030
    Logradouro: Rua Isabel Schimidt
    Número: 118 | Complemento: Sala 04
    Bairro: Santo Amaro | Cidade: São Paulo | UF: SP
  
  Obs. Fábrica: cartão De Luana / Para: Dr Flávio Rizzi
```

---

### Frame A6 — Obs Fábrica preenchida com instrução específica

**Caso de uso:** pedido com instrução detalhada para a equipe de produção.
O campo Obs. Fábrica deve mostrar o texto expandido (textarea grande).

```
Nº Pedido: 25853

Comprador: Deise da Lívia - 22/12/25 | Parentesco: Mãe

Presenteado & Evento:
  Nome: Lívia | Sexo: Feminino | Evento: Maternidade (Nascimento) | Data: 15/01/2026

Produtos (3 itens):
  Prod1: "Sacolinha Fumê alça courinho + personalização + tag + correntinha" | 30x | R$ 13,90 | R$ 417,00
  Prod2: "(CAN001) Canudo Waffle banhado no meio amargo"                     | 30x | R$ 6,49  | R$ 194,70
  Prod3: "TECIDO PERSONALIZADO NO CANUDO + LAÇO E TAG"                       | 30x | R$ 5,00  | R$ 150,00
  Subtotal: R$ 761,70

Financeiro:
  Frete: R$ 53,69 | Total: R$ 815,39

Pagamento: Vindi | 16/12/2025 | R$ 815,39 | ✓

Entrega:
  Modalidade: SEDEX PLP | Data: 23/12/2025
  CEP: 86975-000
  Logradouro: Rua Gaspar Jerônimo da Silva | Número: 393
  Bairro: Jd Itália | Cidade: Mandaguari | UF: PR
  
  Obs. Fábrica: "Charutos enrolados no tecido personalizado + lacinho e tag"
  ← textarea expandida, texto visível por inteiro
```

---

### Frame A7 — Controle Interno expandido

**Caso de uso:** mostrar a seção 9 (Controle Interno) no estado aberto/expandido.
Usar a tela do Frame A1 como base e expandir a seção 9 com os campos visíveis e
alguns preenchidos.

Campos a mostrar dentro da seção expandida:
```
CDH: 527
Negociação: (dropdown — mostrar opções: Email, Whats B, Whats E, Whats M, -)
Data Designer Chamar: (vazio)
OBS Interna: (vazio)
Quem Embalou: (dropdown — mostrar opções: Bianca, Bruno, Claudia, Edmar, Jaque, -)
Registro: (vazio)
Tempo (min): (vazio)
Caixas Papelão: (vazio)
```

O header da seção deve mudar de `▶ Uso interno da operação` para `▼ Uso interno da operação`
quando expandido.

---

## GRUPO B — Estados de Feedback e Erro

### Frame B1 — Campos obrigatórios faltando (validação ao clicar em Cadastrar)

**Caso de uso:** operador clicou em "Cadastrar Pedido" sem preencher campos obrigatórios.

Mostrar o formulário parcialmente preenchido, com os campos obrigatórios não preenchidos
em estado de erro:

```
Estado da tela:
  - Nº Pedido: 25860 (preenchido)
  - Como Conheceu: Instagram (preenchido)
  - Nome do Comprador: ← ERRO — borda vermelha + mensagem "Campo obrigatório"
  - Parentesco: — Selecione — (não preenchido, mas não obrigatório → sem erro)
  - Telefone: ← ERRO — borda vermelha + mensagem "Campo obrigatório"
  - Seção Produtos: campo Produto do slot 1 ← ERRO — "Selecione ao menos 1 produto"
  - Seção Entrega:
      Data de Entrega: ← ERRO — borda vermelha + mensagem "Campo obrigatório"
      Modalidade: ← ERRO — borda vermelha + mensagem "Campo obrigatório"
      Nome Destinatário: ← ERRO — borda vermelha + mensagem "Campo obrigatório"

  - Sticky footer: mostrar estado de erro no botão ou banner no topo do conteúdo
    com mensagem: "Preencha os campos obrigatórios antes de cadastrar"
```

Visual do campo em erro: borda vermelha, mensagem de erro pequena abaixo do campo
na cor vermelha (tom consistente com o design system).

---

### Frame B2 — CPF inválido

**Caso de uso:** CPF digitado com formato ou dígitos inválidos.

```
Campo CPF (seção Comprador):
  Valor digitado: 123.456.789-00
  Estado: borda vermelha
  Mensagem abaixo: "CPF inválido"
  
  (todos os outros campos normais, foco apenas no CPF)
```

Mostrar apenas a seção 2 (Comprador) com foco nesse estado. As demais seções
podem estar em estado normal/vazio.

---

### Frame B3 — CEP não encontrado

**Caso de uso:** operador digitou um CEP que não existe na API ViaCEP.

```
Seção Entrega — bloco ENDEREÇO:
  CEP: 00000-000
  Estado do campo CEP: borda laranja/amarelo de aviso (ou vermelho, conforme design)
  Mensagem abaixo: "CEP não encontrado. Preencha o endereço manualmente."
  
  Campos de endereço: todos vazios e habilitados para preenchimento manual
  (Logradouro, Número, Complemento, Bairro, Cidade, UF — todos editáveis)
```

---

### Frame B4 — CEP sendo consultado (loading)

**Caso de uso:** operador acabou de digitar o CEP e o campo está consultando a API.

```
Campo CEP: 04743-030 (preenchido)
Estado: indicador de loading dentro do campo ou logo abaixo
  (spinner pequeno, ou texto "Buscando endereço...")
Campos de endereço: desabilitados temporariamente (visual cinza/opaco)
```

---

### Frame B5 — Cadastrando (loading geral)

**Caso de uso:** operador clicou em "→ Cadastrar Pedido" e o app está enviando para
a planilha.

```
Sticky footer:
  Botão "→ Cadastrar Pedido" → em estado loading:
    texto muda para "Cadastrando..." com spinner
    botão desabilitado (visual opaco ou com cor diferente)
    botão "Limpar" também desabilitado

Formulário:
  Todos os campos desabilitados (visual de read-only)
  Leve overlay ou opacidade reduzida sobre o conteúdo
```

---

### Frame B6 — Cadastro realizado com sucesso

**Caso de uso:** pedido foi gravado com sucesso na planilha.

```
Opção A — Banner no topo do conteúdo:
  Mensagem verde de sucesso: "✓ Pedido #25859 cadastrado com sucesso!"
  Formulário resetado/vazio (pronto para novo pedido)
  Nº Pedido já atualizado para o próximo (#25860)
  Botão "→ Cadastrar Pedido" volta ao estado normal

Opção B — Mostrar as duas variações lado a lado para o cliente escolher.
```

---

### Frame B7 — Autocomplete de produto aberto

**Caso de uso:** operador está digitando no campo de produto e o dropdown de sugestões
aparece abaixo do campo.

```
Seção Produtos:
  Campo "Buscar produto ou código...":
    Valor digitado: "BIC"
    Dropdown aberto com sugestões filtradas:
      ┌─────────────────────────────────────────────────────────┐
      │ BIC001  Bichinho Virtual personalizado + Cordão         │  ← item highlighted
      │ BIC002  Bichinho Virtual com Caixinha Acetato + Cordão  │
      └─────────────────────────────────────────────────────────┘
    
    Formato de cada item: CÓDIGO em destaque (negrito ou cor diferente) + nome

  Os outros campos do slot (QTD, R$ UNIT., TOTAL) aguardam a seleção.
```

---

## Observações Gerais para Todos os Frames

1. **Sticky footer** deve aparecer em todos os frames, mostrando o estado correto
   de PEDIDO, TOTAL e FALTA PAGAR conforme os dados do caso.

2. **Sidebar** permanece igual em todos os frames — "Novo Pedido" selecionado.

3. **Seções não relevantes** para um frame específico podem aparecer em estado vazio/padrão
   ou colapsadas, para manter o foco no que está sendo demonstrado.

4. **Resolução dos frames:** 1280×800px (desktop padrão), igual ao protótipo original.

5. **Não criar novas telas** — todos os frames são variações da mesma tela "Novo Pedido".
   A estrutura, componentes e layout base não mudam.
