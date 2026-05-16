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

---

## Sessão — Mai/2026 (Fix: dados vazios e pendências)

---

**P: Por que aparecem entradas vazias (ex: "22 ->") no resumo de produtos?**

A coluna `outro\nespec.` retorna `''` (string vazia) da planilha. A checagem existente não capturava `''` porque `naValues = ['0.0', 'nan', '0', '-']` não inclui string vazia. O vazio entrava no dicionário como chave e acumulava — gerando `22 ->` na UI. Fix: adicionado `.strip()` na checagem do `outro\nespec.` e `continue` no loop `q1–q7` para ignorar produtos com nome vazio.

---

**P: Por que as pendências de pagamento não aparecem na área de entregas?**

Dois bugs combinados: (1) a coluna usa vírgula como decimal (`0,00`, `-136,40`) e `pd.to_numeric` não lê vírgula — tudo virava NaN → 0; (2) a condição estava com sinal trocado (`< 0` em vez de `> 0`). "Falta pagar" = TOTAL − pagamentos, logo positivo = ainda deve. Fix: `.str.replace(',', '.')` antes de `to_numeric` + condição corrigida para `> 0`.

---

**P: Por que a planilha está devolvendo valores vazios na coluna "quanto falta pagar?"?**

A planilha usa vírgula como separador decimal (formato BR). `pd.to_numeric` espera ponto — converte tudo para NaN, depois `fillna(0)` zera. Verificado via script diagnóstico direto na planilha real: antes do fix todos os 12.060 pedidos tinham valor 0; depois do fix, 340 com valor > 0.

---

**P: Dos 340 pedidos com pendência, quais são as datas?**

Lista completa extraída da planilha real ordenada por data — de 01/04/22 até 07/05/26. Datas de 2026 com pendências relevantes: 28/01/26 (R$71,00), 06/04/26 (R$5,00), entre outros. A maioria são centavos de arredondamento. O de 07/05/26 (R$0,33) é dessa semana e foi identificado pelo próprio usuário como provável erro de digitação.

---

## Sessão — Mai/2026 (GitHub: issues, templates, proteção de branch)

---

**P: Como vinculo uma issue em uma PR? É só mencionar com #?**

Sim. `#123` só menciona (aparece como link). Para fechar automaticamente no merge, usar palavras-chave: `Fix #123`, `Closes #123` ou `Resolve #123` em qualquer parte da descrição do PR.

---

**P: Usando "Fix #", ao fazer o merge ele fecha a issue automaticamente?**

Sim, mas só quando o PR é mergeado no branch padrão do repositório (`main`). Se mergear em outro branch (ex: `develop`), a issue não fecha.

---

**P: As issues não foram fechadas automaticamente — como seria o processo correto?**

O branch padrão do repo é `main`, mas o PR foi mergeado em `develop`. O `Fix #` só dispara no merge para o branch padrão. Solução: colocar o `Fix #` na descrição do PR de `develop → main`, ou mudar o branch padrão para `develop` nas configurações do GitHub.

---

**P: A barra de status não mostra a versão patch — por quê?**

Em `strings.py`, `_ver_short` era definido como `'.'.join(__version__.split('.')[:2])`, cortando o terceiro segmento intencionalmente. Fix: substituído por `_ver_short = __version__` para exibir a versão completa.

---

**P: Bug fix é um patch certo? (4.0.0 → 4.0.1)**

Sim. Semver: `MAJOR.MINOR.PATCH` — bug fix vai no terceiro número.

---

**P: Para gerar uma nova versão, é só mudar a versão no .toml?**

Sim. O `__init__.py` lê a versão via `importlib.metadata`, que é populado do `pyproject.toml` no momento do `pip install -e .`. Não há `__version__` hardcoded em nenhum outro arquivo.

---

**P: Mostrou 4.0.0 — por quê?**

O `pyproject.toml` foi atualizado para `4.0.1`, mas o pacote instalado ainda era `4.0.0`. `importlib.metadata` lê do pacote instalado, não do arquivo. Precisa rodar `pip install -e .` (ou o build) para atualizar.

---

**P: Só rodar o build então?**

Sim. Se o build já executa `pip install -e .` internamente, basta buildar que a versão atualiza junto.

---

**P: Tem como criar um template para issue?**

Sim. Criar um arquivo em `.github/ISSUE_TEMPLATE/` — pode ser `.md` (simples) ou `.yml` (mais controle: campos obrigatórios, dropdowns, checkboxes nativos). O GitHub usa automaticamente ao abrir uma issue.

---

**P: Como fazer o template aparecer como formulário/página (como no Simple Icons)?**

É exatamente o resultado do `.yml`. O formato `.md` renderiza markdown puro; o `.yml` renderiza como formulário visual com campos separados. Simple Icons usa `.yml`.

---

**P: Existe alguma extensão no GitHub para pré-visualizar o template?**

Não. O GitHub não tem preview nativo de templates `.yml` antes do push. O caminho mais rápido é fazer push na `main` e acessar `/issues/new?template=bug_report.yml`.

---

**P: Existe o link direto para o template de bug report?**

Sim: `github.com/<user>/<repo>/issues/new?template=bug_report.yml`

---

**P: Me ajuda a criar uma página da wiki simples para "Reporte de Problemas"?**

Conteúdo criado com três seções: (1) link para abrir issue via template; (2) orientação para notificar com o card da issue já aberta, não descrever no chat; (3) SLA analisado caso a caso. Wiki não é editável via Git direto — precisa colar manualmente em `/wiki` no GitHub.

---

**P: Consegue criar o config.yml para manter apenas uma opção no chooser de issues?**

Sim. `blank_issues_enabled: false` no `config.yml` restringe issues em branco a maintainers. O `contact_links` foi removido pois duplicava a opção do template `.yml`.

---

**P: Não tem como deixar apenas "Reportar um problema" como opção (sem o Blank issue)?**

Não completamente — `blank_issues_enabled: false` não esconde o Blank issue para maintainers, só restringe. Limitação do GitHub. O template foi renomeado para "Reportar um problema" para que seja a única opção visível para usuários comuns.

---

**P: Como travar a main para que ninguém possa commitar nela além de mim?**

Via Branch Protection Rules + arquivo `CODEOWNERS`. O `CODEOWNERS` com `* @Gui25Reis` exige aprovação do owner em qualquer PR. Nas configurações do branch, "Require review from Code Owners" deve estar marcado e o "Enforcement status" em Active.

---

**P: O que é "Enforcement status" (Active/Disabled) no branch protection?**

Controla se a regra está valendo ou não. Active = regra aplicada, ninguém passa sem cumprir. Disabled = regra existe mas é ignorada, não bloqueia nada.

---

## Sessão — Mai/2026 (Design: Exportar frames HTML → Figma)

---

**P: Como exportar os 14 frames do HTML (mc-frames.html) para o Figma sem quebrar a fonte?**

O problema com plugins "HTML to Figma" é que tentam converter CSS para propriedades Figma — fontes como Segoe UI Variable não existem no Figma e ficam desfiguradas. A abordagem correta é capturar screenshots dos frames via browser headless (Playwright) e criar frames no Figma com as imagens. Criado `screenshot-frames.py` que: (1) abre `mc-frames.html` via Playwright/Chromium headless, (2) para cada frame remove o scroll e expande o conteúdo inteiro (sem corte), (3) captura JPEG 1280px × altura real (~2300–2860px) de cada estado, (4) salva 14 JPEGs em `frames-exportados/`, (5) gera `figma-14estados-generated.js` — script Scripter com as imagens embutidas em base64. Para usar no Figma: Plugins → Scripter → Open File → seleciona o `.js` gerado → Run. Uma página `📋 14 Estados — Novo Pedido` é criada com os 14 frames dispostos em 2 grupos de 7.

---

**P: Ao tirar o print, não vai vir o conteúdo inteiro por causa do scroll?**

Sim — foi detectado antes de concluir. O formulário tem scroll no `.fr-main` que cortaria o conteúdo. A solução foi usar JavaScript injetado pelo Playwright para remover o overflow/scroll de todos os elementos da hierarquia (`#vswin`, `.win`, `.ab`, `.fr-main`) antes do screenshot. Dessa forma o Chromium renderiza o conteúdo completo e o `element.screenshot()` captura a altura real inteira (sem corte).

---

## Sessão — Mai/2026 (Design: HTML → Figma vetorial)

---

**P: Em vez de imagens, como exportar os frames HTML como componentes vetoriais editáveis no Figma (labels, textos, cores, frames)?**

A abordagem é substituir o screenshot por extração de elementos DOM com estilos computados. Usando Playwright, para cada frame: (1) chamar `window.getComputedStyle(el)` em cada elemento visível para resolver CSS computado — inclusive `oklch()` e `var()` que o browser resolve automaticamente; (2) capturar `getBoundingClientRect()` para posição e tamanho absolutos relativos ao `#vswin`; (3) extrair `backgroundColor`, `borderColor`, `borderRadius`, `fontSize`, `fontWeight`, `color`; (4) para `<input>` e `<select>`, extrair `value`/`placeholder`/`option` selecionada; (5) gerar um JS Figma Scripter que cria `figma.createRectangle()` + `figma.createText()` em vez de imagens. Resultado: elementos editáveis no Figma com cores, bordas, raios e textos corretos. Criado `html-to-figma.py`.

---

**P: Faz sentido criar um script novo em vez de modificar o `screenshot-frames.py`?**

Sim — histórico limpo, responsabilidades separadas. O `screenshot-frames.py` continua válido para quando se quer visualização pixel-perfect (ex: fontes do sistema). O `html-to-figma.py` é a alternativa para quem quer elementos editáveis. Cada script tem seu caso de uso.

---

**P: O HTML tem scroll — como garantir que o conteúdo completo seja capturado para extração vetorial também?**

O mesmo JS de expansão do `screenshot-frames.py` foi reaproveitado: antes de extrair os elementos, injeta JS que define `height: auto` e `overflow: visible` em `#vswin`, `.win`, `.ab`, `.main` e `#vport`. Correção feita: o script original usava `.fr-main` (inexistente no HTML) — no `html-to-figma.py` foi corrigido para `.main`, que é o container scrollável real do formulário.

---

## Sessão — Mai/2026 (Arquitetura: Padrões Python e Design System)

---

**P: Como seria uma arquitetura escalável para o projeto PyQt6, e como funciona a modularização no contexto Python?**

A arquitetura validada é Clean Arch + MVC com signals como delegates: View → Controller → UseCase → Repository → Data. O Controller é mandatório — não opcional — porque sem ele o View vira um God Object (como o `GuiMain` atual). A View expõe signals com nome de domínio (`cadastro_solicitado`, `formulario_limpo`) em vez de expor widgets internos. O Controller conecta os signals e orquestra. No Python, modularização usa `__init__.py` como API pública do módulo — o que não está exportado lá é detalhe interno. Funções utilitárias ficam soltas no módulo (não dentro de classes com `@staticmethod`), porque Python tem funções como cidadãs de primeira classe.

---

**P: O que é Protocol em Python? Qual a principal diferença entre ABC e Protocol?**

Ambos definem contratos entre camadas, mas com filosofias diferentes. `ABC` (Abstract Base Class) exige herança explícita — quem implementa precisa declarar `class MinhaClasse(MeuABC)`. `Protocol` usa structural typing (duck typing formalizado): qualquer classe que tiver os métodos certos satisfaz o contrato automaticamente, sem herdar nada. ABC verifica em runtime na instanciação; Protocol é verificado pelo type checker (mypy/pyright) em desenvolvimento. ABC tem acoplamento alto (a classe precisa conhecer o ABC); Protocol tem acoplamento zero. Para contratos entre camadas (Repository, UseCase), Protocol é mais Pythônico. Para base com comportamento compartilhado (BaseView), ABC faz mais sentido.

---

**P: A nível de performance, impacta usar ABC ao invés do Protocol?**

Não há diferença prática. ABC tem uma verificação na instanciação (lookup num `frozenset` de métodos abstratos) — depois disso, chamadas de método são iguais a qualquer classe Python. Protocol é puramente anotação de tipo; em runtime não executa nada. Em app desktop PyQt, o gargalo será sempre I/O de rede (Google Sheets) ou renderização Qt — ABC vs Protocol não aparece no profiler.

---

**P: É má prática usar ABC e Protocol juntos no mesmo projeto?**

Não — é um padrão comum. A divisão natural: ABC para classes base com implementação compartilhada (ex: `BaseView` que define `show_loading`, `hide_loading`); Protocol para contratos puros de camada sem implementação (ex: `CadastroRepository` aceito pelo UseCase). Cada ferramenta no lugar certo.

---

**P: O que faz o decorator `@abstractmethod` além de marcar o contrato?**

Faz duas coisas: (1) marca o método como contrato obrigatório para subclasses; (2) bloqueia instanciação direta da classe se algum `@abstractmethod` não for implementado — Python lança `TypeError` na tentativa de instanciar. Não impede que o método abstrato tenha corpo: a subclasse pode chamar `super()` para aproveitar uma implementação padrão e ainda ser forçada a sobrescrever.

---

**P: O que é `@dataclass` em Python? Quando usar?**

É um decorator que gera automaticamente `__init__`, `__repr__` e `__eq__` a partir dos atributos declarados — equivalente a uma `struct` do Swift. Usado para objetos que só carregam dados entre camadas (DTOs), sem lógica de negócio. `@dataclass(frozen=True)` torna o objeto imutável, equivalente ao `let` no Swift. Métodos utilitários simples que derivam dos próprios dados (formatação, validação de campos) são permitidos; se o método chamar repository ou service, provavelmente não é mais um dataclass.

---

**P: Dá para criar um `@classmethod` que recebe uma entity e retorna o dataclass já populado?**

Sim — é o padrão Pythônico para construtores alternativos, equivalente a um `init` secundário no Swift. Usa `@classmethod` (não `@staticmethod`) porque recebe `cls` como primeiro parâmetro, permitindo chamar `cls(...)` em vez de hardcodar o nome da classe — o que mantém o comportamento correto quando a classe é herdada. O nome convencional é `from_entity` (ou `from_` + origem). Na stdlib: `datetime.fromisoformat`, `Path.from_uri`.

---

**P: `@classmethod` seria o `static` do Swift?**

Quase. Python tem dois: `@staticmethod` é o equivalente direto ao `static` do Swift — não recebe nada implícito. `@classmethod` recebe a classe (`cls`) como primeiro parâmetro, equivalente a um `static` que usa `Self`. A diferença prática: `@classmethod` funciona corretamente com herança (retorna a subclasse, não a base); `@staticmethod` com nome hardcoded quebraria esse comportamento.

---

**P: Em Python não é comum criar classes com métodos estáticos? Seria melhor criar funções globais?**

Correto. Em Python o padrão é um módulo com funções soltas — o módulo já é o namespace. Criar uma classe só para agrupar `@staticmethod` é considerado ruído sem ganho. A régua: tem estado (atributos) → classe; tem comportamento compartilhado entre instâncias → classe com métodos; é só lógica utilitária sem estado → função no módulo. Em Swift classes são obrigatórias porque funções soltas não existem; em Python funções são cidadãs de primeira classe.

---

**P: O nome técnico dos `@...` é "flag"?**

O nome técnico é **decorator** (decorador). Em Swift a Apple usa "property wrappers" para `@State`, `@Binding`, `@Published` aplicados a propriedades, e "attributes" para `@MainActor`, `@discardableResult` — mas o conceito por baixo é o mesmo: uma anotação que modifica ou adiciona comportamento sem alterar o código interno. Em Python decorators podem ser criados pelo desenvolvedor — são funções que recebem outra função/classe e retornam uma versão modificada.

---

**P: Faz sentido criar Protocols para Views em Python/PyQt, como o `Actionable` do Swift?**

Sim, especialmente no Design System. Um `Actionable` Protocol abstrai o signal por trás do componente — o controller chama `set_action(callback)` sem saber se é `clicked`, `triggered` ou `activated`. Para Views de feature, signals com nome de domínio já resolvem isso de forma mais idiomática para o PyQt. Protocols para Views fazem sentido para comportamentos transversais: `Loadable` (`show_loading`, `hide_loading`), `Alertable` (`show_error`, `show_success`).

---

**P: Faz sentido pensar em temas no Design System nesse primeiro momento?**

Não. Tema é uma camada de indireção que só vale quando há múltiplos temas (dark/light) ou quando o DS será consumido por projetos com identidades visuais diferentes. Para um app com identidade única, tokens diretos (`colors.PRIMARY`, `typography.FONT_SIZE_MD`) são suficientes e mais simples. A camada de tema pode ser adicionada depois sem quebrar nada — os tokens continuam existindo, o tema só agruparia referências a eles. Regra prática: tema entra quando aparecer o segundo tema.

---

**P: Enums são comuns em Python? Faria sentido usar para configurar estilos de componentes do DS?**

Sim, `Enum` existe e é bem usado. O padrão com `@property` equivale à variável computável do Swift com `switch self`: cada case do enum expõe propriedades (`font`, `color`, `spacing`) que o componente lê sem saber o que está por baixo. O `match self` (Python 3.10+) é o equivalente do `switch self` do Swift. O componente aceita o enum como parâmetro e aplica as propriedades — desacoplado e extensível.

---

**P: O `@property` é exclusivo do enum?**

Não — funciona em qualquer classe. Transforma um método em algo que parece atributo: chamado sem parênteses, mas executa uma função. Equivalente à variável computável do Swift (`var total: Double { return ... }`). Tem também `@nome.setter` (intercepta atribuição) e `@nome.deleter` (raro). O setter executa antes de persistir o valor — na prática é um `willSet` do Swift, com o valor antigo ainda disponível para comparação antes de atribuir.

---

**P: Python tem observadores como `didSet`/`willSet` do Swift?**

Não nativamente da mesma forma. O `@property` setter funciona como `willSet` — executa antes de persistir, valor antigo ainda disponível. Não existe hook nativo para `didSet` (depois da atribuição); é simulado atribuindo e chamando um método logo em seguida. Para observação de mudanças com múltiplos observadores (equivalente ao `@Published` do SwiftUI), o mecanismo idiomático no PyQt é usar signals.

---

**P: Tem algo em Python parecido com o `consume` do Swift?**

Não. `consume` é sobre ownership — transfere a posse, invalida a variável original em tempo de compilação. Python usa garbage collector com contagem de referências; não há controle de ownership. O `del` remove a referência local, mas se outro lugar ainda aponta para o objeto, ele continua vivo. É uma troca consciente: Python simplifica o modelo mental de memória, mas abre mão do controle fino que Swift e Rust oferecem.

---

**P: Como remover uma branch do remoto pelo terminal?**

`git push origin --delete nome-da-branch`. Deletar a branch remove a referência, mas os commits ficam acessíveis pelo SHA até o garbage collection do GitHub rodar — em repo público isso é um risco se houver dados sensíveis.

---

**P: Como funciona o `git-filter-repo`? É nativo do git?**

Não é nativo — é uma lib terceira (`pip install git-filter-repo`). O git tem o `filter-branch` nativo, mas é lento e imprevisível; a própria documentação do git recomenda `filter-repo` como substituto. Por baixo, ele percorre todo o histórico e reconstrói cada commit aplicando as regras definidas (remover arquivo, renomear path, etc), gerando novos commits com SHAs diferentes. Remove o `origin` automaticamente como proteção — para evitar push acidental com os novos SHAs antes de você revisar o resultado.

---

**P: Quais são as boas práticas de uso de git hooks? Por que `.git/hooks/` vs `.githooks/` vs `.github/`?**

`.git/hooks/` é local e não versionado — só existe na sua máquina. `.githooks/` é uma convenção para versionar hooks junto com o código (ativado com `git config core.hooksPath .githooks`). `.github/` é exclusiva do GitHub (Actions, templates) — o git local ignora completamente. Boas práticas: versionar hooks que são regras do projeto; deixar local hooks de preferência pessoal; não substituir CI com hooks (podem ser burlados com `--no-verify`); manter hooks simples e rápidos para não incentivar o bypass.

---

**P: É possível rodar um script automaticamente após um `git merge`?**

Sim, via hook `post-merge`. Roda após qualquer `git merge` ou `git pull` bem-sucedido. Padrão útil: verificar se `pyproject.toml` mudou com `git diff-tree` e rodar `pip install -e .` só quando necessário — evita rodar setup completo em todo merge.

---

## Sessão — Mai/2026 (Arquitetura: Módulo de Network)

---

**P: O módulo `core/network` está certo dessa forma? (api.py, request, response, client, config)**

Estrutura geral boa — separação de responsabilidades correta. Dois problemas encontrados: (1) **bug real**: `field(default_factory=HTTPMethod.GET)` em `_request.py` — `default_factory` espera um callable, mas `HTTPMethod.GET` é uma string `"GET"`; em runtime levanta `TypeError`. Correto: `method: HTTPMethod = HTTPMethod.GET`. (2) `API(ABC)` sem nenhum `@abstractmethod` não é verdadeiramente abstrata — Python permite instanciar diretamente. O `import json` dentro do método `json()` do `HTTPResponse` também é ruído menor (melhor no topo do arquivo).

---

**P: Quero que `call()` e `entity()` sejam finais (sem override) e que o `__init__` seja acionado automaticamente ao herdar. Como garantir que o `path` seja fornecido?**

O padrão correto: `path` como `@property @abstractmethod`. O `__init__` da base lê `self.path` — sem precisar receber `path` como argumento. Subclasses só declaram a property; ao instanciar, o `__init__` base roda automaticamente e lê o valor. Para travar `call` e `entity`: `@final` do `typing` — não impede override em runtime, mas mypy/pyright reclamam. Se algum `@abstractmethod` não for implementado, Python lança `TypeError` na instanciação (comportamento nativo de ABC).

---

**P: Chamar o `TypeVar` de `Entity` em vez de `T` faria sentido?**

Faz sentido no contexto — comunica intenção. O trade-off: `T` é o padrão neutro do Python, `Entity` foge da convenção mas é mais legível. Ambos são válidos. `EntityT` foi o escolhido: sufixo `T` sinaliza que é um `TypeVar`, prefixo dá contexto semântico. É o mesmo padrão que a stdlib usa em `AnyStr`, `KT`, `VT`.

---

**P: `ENTITY_T` (maiúsculas) seria uma boa forma de nomear o `TypeVar`?**

Não. Em Python, maiúsculas são convenção para constantes (`CONSTANTE = valor`). `ENTITY_T` seria lido como constante, não como tipo genérico. A convenção para `TypeVar` é PascalCase: `EntityT = TypeVar("EntityT")`.

---

## Sessão — Mai/2026 (Estudo: Arquitetura GSNetworking + Design Network Python)

---

**P: Quais são os pontos fortes e o que estaria pendente/poderia melhorar na arquitetura do GSNetworking?**

Pontos fortes: separação total de responsabilidades (lib cuida só do transporte, consumer decide Codable e erros de domínio), plugin system extensível com ordem de execução (`amongTheFirsts/unaware/amongTheLasts`) e resolução Mock > Primary > First, certificate pinning robusto com wildcards e SHA256/SHA512, proteção de headers por nível (`.mandatory`, `.inmutable`) que impede plugins de sobrescrever campos críticos, e testabilidade com mocks inclusos no próprio módulo. Pontos de melhoria: `URLSession` é recriada a cada request (property computada, sem connection pool reaproveitado), WebSockets usa callbacks em vez de async/await (inconsistência com HTTP), sem plugin padrão para token refresh/OAuth, `assert()` no `baseURL` em vez de erro tipado, e sem suporte nativo a progress de upload/download ou deduplicação de requests.

---

**P: O que é `field(default_factory=dict)`?**

Solução para o problema de valores padrão mutáveis em `@dataclass`. Em Python, colocar `headers: dict = {}` como padrão direto cria um único dict compartilhado entre todas as instâncias — o que causa contaminação cruzada entre objetos. `field(default_factory=dict)` diz ao dataclass para chamar `dict()` a cada nova instância, criando um dict independente. O argumento é qualquer callable: `default_factory=list`, `default_factory=lambda: {"Content-Type": "application/json"}`. Em Swift isso não existe porque `struct` já cria cópias por valor.

---

**P: O que é esse `|` sendo usado? Exemplo: `dict[str, str] | None`**

É a sintaxe de union type do Python 3.10+, equivalente ao `Optional` do Swift. `dict[str, str] | None` significa "pode ser um `dict[str, str]` ou `None`" — o mesmo que `[String: String]?` em Swift. Antes do Python 3.10 era necessário `from typing import Optional` e escrever `Optional[Dict[str, str]]`. O `|` funciona para qualquer combinação: `int | str` (um ou outro, sempre presente), `int | str | None` (qualquer dos três incluindo nada).

---

**P: O import dentro de um método é uma boa prática?**

Não como padrão geral — import no topo do arquivo é a convenção. Import dentro de método tem dois usos legítimos: evitar importação circular (quando módulo A importa B e B importa A) e adiar carregamento de dependências pesadas e opcionais (ex: `import reportlab` só quando a função de exportar PDF for chamada). No contexto do `json()` do `HTTPResponse`, o `import json` estava desnecessariamente dentro do método — `json` é stdlib, leve, e não há ciclo. O correto é no topo do arquivo.

---

**P: Esse método não deveria se chamar `to_json` por padrão?**

Não — `to_json` seria semanticamente errado. A convenção em Python é que `to_json` **serializa** (objeto → string/bytes JSON). O método faz o oposto: **desserializa** os bytes do body em `dict`. O nome `.json()` foi herdado do `httpx` e `requests`, que estabeleceram esse padrão no ecossistema Python. Seguir o padrão das libs consagradas tem valor: qualquer dev Python reconhece imediatamente o que o método faz.

---

**P: Em Swift usamos enum para lidar com erros. Em Python a boa prática seria criar classes separadas mesmo?**

Sim. Em Swift `enum` com associated values é o mecanismo natural para erros tipados. Em Python o padrão é hierarquia de classes herdando de `Exception`. A razão é que Python usa `try/except` com tipos de exceção — `except HTTPResponseError` captura especificamente esse erro, enquanto `except NetworkError` captura todos os erros da lib. Enums em Python não integram com esse mecanismo. A hierarquia `NetworkError → HTTPRequestError / HTTPResponseError` é o equivalente pythônico direto.

---

**P: O que é esse `TYPE_CHECKING`?**

É uma constante de `typing` que vale `False` em runtime e `True` apenas quando ferramentas de análise estática (mypy, Pylance) estão verificando tipos. Usado com `if TYPE_CHECKING: from módulo import Tipo` para importar tipos apenas na análise — nunca em execução — quebrando importações circulares. No contexto do design proposto, não era necessário: não havia ciclo real entre `_config.py` e `_client.py`. Foi removido em favor de import direto, que é sempre preferível quando não há ciclo.

---

**P: Por que aspas no tipo ao invés do tipo direto? Exemplo: `response: "HTTPResponse"`**

As aspas criam uma *forward reference* — o Python trata o tipo como string e não tenta resolvê-lo imediatamente. Útil em um único caso legítimo: referenciar uma classe dentro da própria definição dela (ex: `next: "Node | None"` dentro de `class Node`), quando a classe ainda não terminou de ser definida. Fora isso, se o tipo vem de outro arquivo, basta importar e usar diretamente. As aspas no documento foram descuido — foram removidas e substituídas por imports diretos.

---

**P: O que é `T = TypeVar("T")`?**

É a forma do Python 3.12- de declarar um tipo genérico — equivalente ao `<T>` do Swift. Cria um placeholder que representa "algum tipo definido na chamada". Em `entity(self, cls: Type[T]) -> T`, garante que o tipo recebido e o tipo retornado são o mesmo: se passar `Pedido`, recebe `Pedido`, não `Any`. A diferença pro Swift é que Python precisa receber a classe explicitamente como parâmetro (`cls`) porque não tem inferência nesse nível. No Python 3.13 (versão do projeto), a sintaxe moderna elimina o `TypeVar`: `def entity[T](self, cls: type[T]) -> T` — sem imports adicionais.

---

**P: A configuração do WireMock precisa ser necessariamente no arquivo main ou poderia estar em outro local?**

Pode estar em qualquer lugar — `configure()` e `override()` apenas alteram variáveis globais do módulo, então qualquer código que rode antes do primeiro request pode chamá-las. O `__main__.py` é a sugestão mais comum por ser o ponto de entrada, mas não é obrigatório. Casos comuns: arquivo de configuração de ambiente, setup de testes via `conftest.py` (com `yield` + `clear_override()` para garantir limpeza mesmo em falha), ou menu interno de dev. A única regra real é: quem chama `override()` é responsável por chamar `clear_override()` depois.

---

## Sessão — Mai/2026 (Setup: isort, deps de dev e git hooks)

---

**P: Como instalar as dependências de desenvolvimento definidas em `pyproject.toml`? O `build.sh` não estava fazendo isso.**

`pip install -e .` instala apenas as dependências da seção `[project.dependencies]`. Para instalar os extras declarados em `[project.optional-dependencies]`, é necessário nomear o grupo: `pip install -e ".[dev]"`. Para múltiplos grupos: `pip install -e ".[dev,build]"`. O `build.sh` foi atualizado para usar `".[dev]"`.

---

**P: Quais tipos de hooks o git oferece?**

Os hooks são divididos por contexto. **Commit**: `pre-commit`, `prepare-commit-msg`, `commit-msg`, `post-commit`. **Push**: `pre-push`. **Merge/Rebase**: `pre-merge-commit`, `post-merge`, `pre-rebase`. **Checkout**: `post-checkout`. **Server-side**: `pre-receive`, `update`, `post-receive`. Não existe hook `pre-merge` — o mais próximo de "antes de abrir PR" é o `pre-push` (roda antes do push ao remote); para garantir que o merge local esteja limpo, o correto é `pre-merge-commit`.

---

**P: Dentro de um git hook, precisa ativar o venv antes de rodar comandos Python?**

Sim. O git executa hooks em um subshell sem qualquer ativação de ambiente virtual — `isort` e `pip` resolveriam para as versões do sistema (ou não encontrariam o comando). A solução é adicionar `source venv/bin/activate` no início do hook para garantir que os binários corretos do projeto sejam usados.

---

## Sessão — Mai/2026 (Arquitetura: Módulo Backend)

---

**P: Dá para usar Flask com `@route` como módulo local, sem fazer o `.run()`? Isso causaria algum problema?**

Sim. Flask não precisa de `.run()` para funcionar como roteador — o `.run()` sobe o servidor HTTP real (Werkzeug). O que faz o roteamento é o `app.wsgi_app`, que pode ser chamado diretamente. O padrão idiomático é usar `app.test_client()`, que expõe um `client.open()` in-process: recebe path, method, query_string e body, e retorna um `TestResponse` — sem socket, sem thread, sem servidor real. O `BackendServer` usa esse mecanismo para converter `HTTPRequest → Flask → HTTPResponse`.

---

**P: Se adicionarmos o Flask mas não chamarmos `.run()`, e usarmos funções diretas em vez de `@route`, qual é o problema?**

O problema central é o `flask.request` — o proxy de contexto de requisição do Flask. Fora do ciclo de requisição do Flask (ou seja, fora de um `test_client` ou servidor real), `flask.request` não existe e levanta `RuntimeError: Working outside of request context`. Chamar a função de view diretamente sem passar pelo Flask burla o roteamento mas ainda depende de `flask.request` dentro da função. A solução correta é passar pelo `test_client` — que inicializa o contexto corretamente — ou abandonar o Flask e usar funções puras com parâmetros explícitos.

---

**P: Qual a melhor prática para documentar o contrato de um JSON? JSONC ou JSON Schema?**

JSON Schema (`draft-2020-12`) é a melhor prática para contratos: é um padrão aberto (json-schema.org), suporta validação programática, integra com VS Code (IntelliSense em arquivos com `$schema`), e pode ser usado em testes unitários (`jsonschema` no Python). JSONC (JSON com comentários) é atalho de documentação — útil em config, mas não valida nada. Para contratos de API, mesmo que in-process, JSON Schema é mais robusto.

---

**P: Como o JSON Schema permite reutilizar sub-objetos entre schemas diferentes?**

Via `$defs` + `$ref`. No `shared.schema.json` define-se os objetos reutilizáveis dentro de `"$defs"`: `Address`, `Customer`, `PaymentItem`, etc. Outros schemas referenciam com `"$ref": "./shared.schema.json#/$defs/Customer"` — o validador resolve o caminho relativo + fragmento JSON Pointer. É o mecanismo padrão de composição do JSON Schema, equivalente ao `typealias` / `struct` compartilhado no Swift.

---

**P: Qual é a tradução de "parcela" (de compra parcelada) para o inglês?**

`installment` (AmE) ou `instalment` (BrE). É o termo técnico consagrado no contexto financeiro: `installment plan` = plano de parcelamento, `installment payment` = pagamento em parcela. Não confundir com `payment` (pagamento em geral) nem com `portion` (que é mais genérico). Adotado como nome do campo no modelo `PaymentItem`.

---

**P: O `backend/` faz mais sentido estar fora do `core/`, na mesma hierarquia?**

Sim — decisão de arquitetura. `core/` é infraestrutura pura (network, storage, sheets): não conhece regras de negócio, não conhece a planilha. `backend/` tem regras de negócio e conhece os dados do domínio (colunas, modelos, lógica de serviço). Misturar os dois dentro de `core/` quebraria essa separação. Fluxo correto: `features/ → backend/ → core/` — cada camada só conhece a camada abaixo.

---

**P: Faz sentido usar `@dataclass` do Python para representar o contrato JSON dos models?**

Sim — é o padrão mais Pythônico para objetos de dados sem lógica. `@dataclass` gera `__init__`, `__repr__` e `__eq__` automaticamente a partir dos atributos. Para serialização, `dataclasses.asdict()` converte recursivamente o objeto (e objetos aninhados) para `dict` JSON-ready. Campos obrigatórios (sem default) ficam antes dos opcionais (com default ou `| None`) — o Python impõe essa ordem no `__init__` gerado.

---

**P: Faz sentido o mapper ser uma classe separada dentro do próprio arquivo de service?**

Sim. O Mapper fica no mesmo arquivo do service (`payments_service.py`) e tem uma única responsabilidade: transformar `list[Order]` em `dict` JSON-ready via `dataclasses.asdict()`. A route fica limpa — só chama service + mapper + `jsonify`. O padrão é: `class PaymentsMapper` com `@staticmethod to_response(orders) -> dict` e `class PaymentsService` com a lógica. É análogo ao Presenter do Clean Arch, mas mais simples por ser in-process.

---

**P: `StrEnum` vs `Enum` — qual a diferença e quando usar `StrEnum`?**

`StrEnum` (Python 3.11+) é um `Enum` cujos valores são strings e que herda de `str` diretamente. Isso significa que o próprio membro do enum **é** uma string — comparação direta `col == "pedido"` funciona sem `.value`. Com `Enum` clássico, seria necessário `col.value == "pedido"`. Para mapeamento de colunas da planilha, `StrEnum` é ideal: `df[Col.ORDER]` funciona diretamente como chave de DataFrame sem conversão explícita.

---

## Sessão — Mai/2026 (Arquitetura: GoogleSheetsDataSource e camadas do backend)

---

**P: Qual o padrão Flask/backend para separar acesso a dados, regras de negócio e rotas? Como trazer a mesma experiência de um banco SQL para a planilha?**

O padrão clássico é `Route → Service → Repository`. É o equivalente ao que o SQLAlchemy faz com banco de dados: `SQLAlchemy engine` (gerencia conexão) é análogo ao `GoogleSheetsDataSource`; o `Repository/DAO` (sabe como buscar os dados) é o `SheetsRepository`; o `Service` aplica regra de negócio. A planilha é a fonte de dados — o data source sabe como se conectar e otimizar o acesso; o repository não sabe que existe gspread; o service não sabe que existe planilha.

---

**P: Repository vs Use Case — qual a diferença? Por que o backend usa Repository e não Use Case?**

Repository = sabe *como buscar dados* de uma fonte. Não tem regra de negócio — só retorna dados. Use Case = orquestra *o fluxo de uma operação*, coordena repositórios, serviços e cache. No backend Flask, o Use Case não existe como camada formal — o Service absorve essa responsabilidade. O Use Case aparece fora do backend, dentro das features (PyQt6), porque a feature precisa orquestrar: chama o backend, aplica cache, monta o ViewModel.

---

**P: O que são os "dois passes" no acesso à planilha?**

Otimização para não baixar a planilha inteira. Passo 1: lê só a coluna DATA (muito leve). Passo 2: identifica quais linhas têm as datas pedidas e faz `batch_get` só nessas linhas. Sem isso a alternativa seria `get_all_values()` — baixa todas as linhas toda vez. É o equivalente ao MySQL executar `SELECT ... WHERE data = ?` internamente: o consumer não sabe como funciona, só vê o resultado.

---

**P: Faz sentido chamar de `DataSource` em vez de `Service` para a camada de acesso à planilha?**

Sim — e é mais preciso. "Service" no backend já tem um papel definido (regra de negócio). A camada que gerencia a conexão com a planilha é análoga ao SQLAlchemy engine — não é um service, é a fonte de dados. `GoogleSheetsDataSource` comunica isso claramente. Quando a planilha virar SQL, o `GoogleSheetsDataSource` é substituído por `SQLDataSource` com a mesma interface — nada mais muda.

---

**P: Como funciona o `before_request` do Flask e como usar para validar conexão antes de cada rota?**

`before_request` é um hook que roda automaticamente antes de qualquer rota registrada no Blueprint. Registrado uma vez, todas as rotas do Blueprint ganham a validação sem código repetido. No nosso caso: `if not data_source.is_ready(): return jsonify({...}), 503`. É o ponto correto para checar pré-condições de infraestrutura — equivalente a um middleware de autenticação no Express.js.

---

**P: Por que o prewarm usa uma thread? O que ele faz?**

O prewarm faz chamadas de rede: refresh do token OAuth e pré-aquecimento da conexão TLS com o Google. Isso pode levar segundos. Rodar na thread principal travaria a inicialização do app. Com uma thread em background, o app sobe instantaneamente e o prewarm acontece em paralelo. O `wait_ready()` no `before_request` sincroniza quando necessário — se o usuário demorou navegando pela UI, o prewarm já terminou e `wait_ready()` retorna na hora sem custo.

---

**P: Por que o `connect()` é chamado pelo `BackendServer` e não no `__init__` do próprio DataSource?**

Separação de ciclo de vida. O data source não gerencia quando ele se conecta — quem decide é o servidor. Se amanhã o backend for deployado como serviço real, o `connect()` sai do `BackendServer` e vai para o startup do servidor sem mudar nada no `GoogleSheetsDataSource`. Se o `__init__` chamasse `connect()` automaticamente, a classe perderia esse controle externo.

---

## Sessão — Mai/2026 (Estudo: Erros no DataSource e separação de responsabilidades)

---

**P: Como seria o levantamento de erros no GoogleSheetsDataSource — quais erros cada método pode gerar?**

Mapeados 16 erros em 7 categorias: credenciais (4: arquivo não encontrado, corrompido, formato inválido, falha ao salvar), autenticação/token (2: credencial rejeitada pelo Google, token OAuth expirado), planilha (4: sheet_id inválido, planilha não encontrada, sem permissão, falha ao salvar), rede (2: sem conexão, timeout), API Google (2: resposta fora do contrato, quota excedida), dados da planilha (3: data inválida, range invertido, estrutura inesperada), estado do DataSource (2: não pronto ao chamar fetch, prewarm falhou). O único reuso real é `TokenExpiredError` — aparece no prewarm e no fetch em runtime com causa idêntica (token OAuth inválido). O `PrewarmFailedError` é especial: o erro da thread background é guardado na instância e relançado em `wait_ready()`.

---

**P: Dá para centralizar todo o tratamento de erros em outra classe, deixando o `GoogleSheetsDataSource` só com lógica?**

Sim. O padrão é separar em `_error_handlers.py` com uma classe `_SheetsGuard` (context managers + validações) e funções decorator (`handle_api`, `handle_sheet_setup`). O DataSource fica com ~80 linhas de lógica pura; o `_error_handlers.py` fica com ~70 linhas de tratamento. A única exceção é `_do_prewarm()`: a thread background precisa guardar o erro na instância para relançar depois, então mantém `try/except` explícito — único caso onde o padrão não encaixa.

---

**P: Usar `@contextmanager` para centralizar tratamento de erros é uma boa prática em Python?**

Válido mas não convencional. Context manager em Python tem semântica forte de gerenciamento de recurso (abre → usa → fecha) — usar só para mapear exceções funciona, mas `with _guard.api():` não comunica imediatamente que é um guard de erro. O padrão mais idiomático para tratamento de erros é o decorator (`@handle_api`), que aparece na assinatura do método e comunica a intenção diretamente. O híbrido é a solução honesta: decorator para métodos simples onde o tipo de erro dominante é único; context manager quando há múltiplas operações distintas dentro do mesmo método que levantam erros diferentes (ex: `set_credentials` faz leitura de arquivo + I/O local + autenticação Google — três contextos de erro separados).

---

**P: O que é `@contextmanager`?**

Decorator de `contextlib` que transforma uma função geradora em um context manager sem precisar implementar `__enter__` e `__exit__` manualmente. O código antes do `yield` roda no `__enter__`, o código depois roda no `__exit__`. Um `try/except` ao redor do `yield` captura exceções lançadas dentro do bloco `with`. Exemplo canônico da stdlib: `contextlib.suppress(FileNotFoundError)` — ignora a exceção especificada sem nenhum bloco extra. O `@contextmanager` é a alternativa legível a criar uma classe inteira só para gerenciar um recurso ou interceptar exceções.

---

## Sessão — Mai/2026 (Arquitetura: Contrato de erros e blueprint pai)

---

**P: Qual a boa prática em Python/Flask para criar um contrato de erros com as 4 informações (user_message, dev_message, http_status, error_code), considerando que o data source é isolado?**

O equivalente ao protocolo Swift em Python é uma classe base com class-level attributes. Cada subclasse define os valores como atributos de classe — sem `__init__`, sem repetição. Flask oferece `@app.errorhandler(TipoDeErro)`: registrado uma vez no servidor, captura automaticamente qualquer exceção daquele tipo lançada em qualquer route da aplicação. O resultado é routes limpas sem `try/except` e sem `before_request` hardcoded. O `DataSourceError` deve carregar apenas os campos agnósticos de transporte (`code`, `user_message`, `dev_message`); o `http_status` fica em `BackendError` porque é um conceito HTTP — não pertence à camada de dados.

---

**P: Podemos usar duck typing — o DataSourceError ter os mesmos parâmetros que o BackendError para eliminar o translator?**

Sim, funcionaria. O `@app.errorhandler(DataSourceError)` acessaria `e.code`, `e.user_message`, `e.dev_message`, `e.http_status` diretamente. O trade-off: `http_status` é um conceito HTTP dentro de uma camada que deveria ser agnóstica de transporte. Se o data source for substituído por MySQL ou usado em outro contexto (CLI, gRPC), os status codes HTTP são ruído. A decisão foi usar duck typing parcial: `DataSourceError` carrega os 3 campos agnósticos, e o translator adiciona apenas o `http_status`.

---

**P: O data source vai ser substituído por MySQL. Faz sentido o translator só para http_status, retornando -1 do lado do DataSource?**

Sim — é a separação correta. `DataSourceError` carrega `code`, `user_message`, `dev_message` (agnósticos). O `backend/errors/_mapper.py` mantém uma tabela `{DataSourceError subclass → http_status}` e a função `translate()` monta o `BackendError` com os 4 campos. Quando o MySQL chegar: novas subclasses de `DataSourceError` com novo prefixo (ex: `MY01`), mesma estrutura do translator, `BackendError` e o contrato HTTP intocados.

---

**P: O blueprint do summary ter o nome "summary" em vez de "orders" afeta o path do endpoint GET /orders?**

Não. O nome do blueprint (`Blueprint("summary", __name__)`) é apenas um identificador interno do Flask — usado em `url_for()` e no namespace de funções. O path da rota é definido exclusivamente no decorator (`@summary_bp.get("/orders")`). A renomeação foi necessária para evitar conflito de nome com o blueprint pai `orders_bp` criado em `orders/__init__.py` — dois blueprints com o mesmo nome no mesmo Flask app causam erro.

---

**P: Faz sentido colocar o before_request no nível da app ou no nível de orders?**

No nível de `orders/`. O `check_connection` verifica se o data source está pronto — isso só faz sentido para rotas que acessam dados. As rotas de infra (`/auth`, `/source`, `/status`) não acessam o data source e não devem ser bloqueadas por esse check. Flask suporta blueprints aninhados: `before_request` no blueprint pai aplica-se a todos os sub-blueprints registrados nele. `orders/__init__.py` cria o blueprint pai `orders_bp`, registra `deliveries_bp`, `payments_bp` e `summary_bp` nele, e declara o `before_request` — cobertura automática para todas as subfeatures de orders.
