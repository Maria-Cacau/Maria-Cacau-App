# CBL — Curiosity-Based Log

> Registro de perguntas e respostas da sessão. Objetivo: manter histórico de raciocínio e decisões.

---

## Sessão — Mai/2026

---

**P: Teria alguma forma de fazer um date picker moderno pelo PyQt6?**

O protótipo recebido usava date picker estilo HTML. A resposta é sim — PyQt6 tem `QDateEdit` com `setCalendarPopup(True)`, que é exatamente isso. O projeto já usa o widget em dois lugares. A diferença visual para o protótipo é só estilização via QSS. POC criada em `scripts/poc_date_picker.py`.

---

**P: Se não fosse fazer com PyQt6 e Python, qual outra abordagem seria para a UI?**

As alternativas reais: **Electron** (JS/TS + HTML/CSS, pesado ~150MB, visual perfeito), **Tauri** (mesma ideia, leve ~5MB, usa WebView do sistema), **Flutter Desktop** (Dart, bonito, mas linguagem diferente). Problema comum das três: a lógica de negócio está em Python, então a integração vira uma arquitetura cliente-servidor mesmo que local. PyQt6 ainda faz sentido por manter tudo num processo Python só.

---

**P: Daria para baixar o nível da UI e fazer em C ou C++? O PyQt6 dá suporte a C?**

PyQt6 já é C++ por baixo — é um wrapper Python do Qt6. Escrever em C++ com Qt6 daria o mesmo resultado visual, só muda a linguagem. Qt exige C++ (usa herança, templates, sistema de signals/slots), não tem como usar em C puro de forma oficial. Opções ainda mais baixo nível: Dear ImGui, Win32/Cocoa/GTK direto, SDL — nenhuma entregaria visual melhor que Qt para um app de negócio.

---

**P: Na verdade a proposta era por conta de performance, não UI. Faria sentido?**

Para esse tipo de app (leitura de planilha, processamento de pedidos, UI desktop), Python não é o gargalo — a latência da API do Google Sheets é. Se um dia aparecer cálculo pesado, Python tem saídas sem reescrever tudo: `ctypes`/`cffi` (chama C direto), Cython, numpy/pandas (já são C por baixo).

---

**P: O que é anti-aliasing?**

Técnica de suavizar bordas de texto e formas para não ficarem serrilhadas/pixeladas. Web/Electron ganha nesse aspecto por usar motor de renderização próprio do browser. PyQt6/nativo usa o motor do SO — no macOS fica bom, mas levemente diferente de uma interface web. É uma diferença sutil que a maioria dos usuários não percebe.

---

**P: Estou pensando em montar uma base de dados e migrar o fluxo da planilha. Qual seria a forma mais simples, barata e segura de criar essa base compartilhada no escritório? Não precisaria estar online, mas poderíamos subir online. Qual a forma mais barata?**

Três opções: (1) **Local (LAN)** — PC dedicado ou Raspberry Pi, custo zero, risco de ponto único de falha; (2) **VPS barato** (Hetzner ~R$25/mês) — MySQL no servidor, mais controle, precisa configurar; (3) **Banco gerenciado** (Railway, TiDB Cloud, Supabase) — zero gerenciamento, free tier generoso. Para o perfil do projeto: VPS Hetzner + MySQL como melhor custo-benefício se quiser controle, ou serviço gerenciado se quiser zero configuração.

---

**P: A parte de servidor e rede eu não sei nada. Qual o melhor cenário? Budget até R$100/mês considerando tudo, inclusive uma API. A aplicação vai ser principalmente no escritório, mas pode sair (donos).**

Recomendação: **Supabase** (PostgreSQL gerenciado, free tier, zero configuração, API REST automática incluída, backup automático). Único trade-off: é PostgreSQL, não MySQL — mas para o caso de uso as queries são praticamente iguais.

---

**P: Existe alguma opção com MySQL?**

Sim: **Railway** (MySQL real, ~$0/mês no free $5 crédito, para o volume do projeto provavelmente fica gratuito) e **TiDB Cloud** (MySQL-compatible, 5GB grátis, sem cartão). PlanetScale foi descartado (free tier encerrado, $39/mês mínimo).

---

**P: Seria uma base de dados relativamente complexa, com muitas tabelas. Isso interfere?**

Não. Os serviços cobram por volume de dados (MB/GB), conexões simultâneas e queries — não por número de tabelas. Com 25k pedidos + produtos + tabelas auxiliares, o banco provavelmente fica entre 50–200MB, bem dentro do free tier.

---

**P: Sobre a quantidade de queries por mês, vai bastante. Quantas requisições por minuto o Railway permite?**

Railway não tem cota de queries — cobra por recursos (CPU + RAM). O limite prático é o que a instância aguenta pelo hardware. Para o cenário do projeto (5–10 pessoas no escritório, dezenas de queries por minuto no pico), um MySQL básico aguenta centenas por segundo com folga. Limite exato: consultar docs.railway.app.

---

**P: Com o Railway, se eu criasse um backend para comunicação com o banco, também poderia subir lá? Faria sentido deixar o backend do lado da aplicação?**

Sim, Railway hospeda aplicações além de banco. Faz sentido ter o backend lá porque as credenciais do MySQL ficam só no servidor — o app (que pode sair do escritório) só conhece a URL da API. Arquitetura: `App Python → FastAPI (Railway) → MySQL (Railway)`. Deixar o backend "do lado da aplicação" só faria sentido se o banco fosse local.

---

**P: Esse projeto vai demandar muito. Quais seriam os primeiros passos para tirar do papel rápido?**

Abordagem incremental: (1) tela de cadastro de pedido gravando na planilha Google Sheets já existente — sem banco, sem API, entrega valor imediato; (2) geração da folha de pedido; (3) tela de visualização; (4) migração para banco quando o volume justificar. A planilha como "banco de dados" interino é pragmático — a integração já existe no projeto.

---

**P: Como funciona a parte de licenças? Queria usar Creative Commons e criar uma chamada KINGS.**

CC foi feita para conteúdo (arte, texto, docs), não software — mas funciona para esse caso. Não é possível renomear uma licença CC: mudar o nome desvincula do respaldo jurídico delas. A solução é usar a CC como base e colocar o nome da marca no cabeçalho do arquivo (`Maria Cacau © 2026 KINGS / Licensed under CC BY-NC 4.0`).

---

**P: Qual licença CC mais próxima usar, considerando que o app foi feito para uma empresa específica (uso comercial por terceiros é inviável na prática)?**

`CC BY-NC 4.0` é a mais adequada: exige crédito e bloqueia uso comercial. Como o app é específico para uma empresa, a cláusula NC protege no papel sem impactar uso real. O repo estava com GPL-3.0 — foi substituído por CC BY-NC 4.0 com cabeçalho KINGS.

---

**P: Tem símbolo da licença para colocar na badge?**

Sim. Shields.io suporta `logo=creativecommons`, que adiciona o ícone da CC na badge. Não há cor oficial/padrão definida pela CC para badges — verde (`brightgreen`) é a convenção mais comum no GitHub.

---

## Sessão — Mai/2026 (Feature: Cadastro de Pedido)

---

**P: Quero criar uma tela de cadastro de pedido usando a planilha como base de dados. Pode analisar a aba Cadastro da planilha?**

Análise feita via scripts Python usando `gspread` + Sheets API v4. A aba `Cadastro` tem ~12.058 pedidos históricos, 166 colunas (87 com dados, 60 sem header/buffer). Os dados foram agrupados em 9 grupos funcionais: Identificação, Comprador, Presenteado/Evento, Personalização, Produtos, Financeiro, Pagamento, Entrega e Controle Interno. O fluxo atual é baseado em copy/paste de uma linha-template da aba `MACRO CADASTRO`. Toda análise em `pocs/sheets-analysis/cadastro_asis.md`.

---

**P: Analisa as outras abas da planilha, principalmente Produtos. Consegue ver fórmulas e relações entre abas?**

Sim. Script analisou todas as 40 abas. A aba `Produtos` (1.280 itens, 17 colunas) é o hub central de todos os dropdowns da planilha: cada coluna alimenta um campo diferente do Cadastro via `data validation → ONE_OF_RANGE`. Mapeamento: col A → Prod1–7 (produtos), col F → Forma de pagamento, col G → Modalidade, col H → Como Conheceu, col J → Evento, col K → Parentesco, col O → Sexo. Fórmulas confirmadas: `Valor[n] = Qtd[n] × $Unit[n]`, TOTAL = soma − desconto + frete, Falta Pagar = TOTAL − pagamentos confirmados. Checkboxes `PLP/NF IMPRESSA`, `DESPACHADO` e `D+1` são fórmulas/booleanos automáticos.

---

**P: Qual a sua opinião sobre o que poderíamos fazer para facilitar o cadastro além do básico?**

Além das sugestões do usuário (número auto-preenchido, CEP via ViaCEP, campos calculados visíveis), foram propostas e aprovadas: autocomplete de produto com busca por nome/código (1.280 itens não cabem em dropdown), slots dinâmicos de produto e parcela (começa com 1, botão para adicionar), endereço oculto quando modalidade é RETIRADA/GUARITA/FABRICA/FEIRA, checkbox "Mesmo que o comprador" para auto-preencher destinatário, máscaras em TEL/CPF/CEP, validação visual antes de enviar, alerta se data de entrega for posterior à data do evento.

---

**P: Cria o prompt mais completo possível para passar para a IA de design criar a tela.**

Prompt criado em `pocs/sheets-analysis/prompt_design_cadastro.md`. Descreve: contexto do app desktop PyQt6, estrutura da tela em 9 seções em página única com scroll, todos os campos com tipos/comportamentos/validações, regras de visibilidade (endereço some por modalidade), comportamento do autocomplete de produto, sticky footer com resumo, e estados de loading/erro/sucesso. Prompt passado para a IA de design → protótipo v1 aprovado.

---

**P: O protótipo ficou excelente. Agora precisa dos casos de uso (mínimo, máximo, erros). Pode buscar exemplos reais da planilha?**

Script `buscar_exemplos_casos.py` buscou nos últimos 500 pedidos 9 casos reais: 1 produto (#25859), 7 produtos (#25622), 7 produtos + Outros (#25727), 2 parcelas (#25863), 3 parcelas (#25418), modalidade FABRICA sem endereço (#25868), com desconto (#25622), destinatário diferente do comprador (#25856), obs fábrica detalhada (#25853). Resultado em `results/exemplos_casos_uso.json`.

---

**P: Cria o segundo prompt para a IA de design pedindo os frames de estados preenchidos e de erro.**

Prompt criado em `pocs/sheets-analysis/prompt_design_estados.md`. 15 frames divididos em Grupo A (7 caminhos felizes com dados reais da planilha) e Grupo B (8 estados de erro/feedback: campos obrigatórios faltando, CPF inválido, CEP não encontrado, CEP loading, cadastrando, sucesso, autocomplete aberto). Cada frame A usa dados reais dos pedidos encontrados.
