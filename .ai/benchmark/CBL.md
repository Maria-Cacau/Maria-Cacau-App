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
