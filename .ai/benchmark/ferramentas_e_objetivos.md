# Benchmark — Ferramentas e Objetivos Futuros

> Registro das análises e decisões tomadas em sessão de planejamento (Mai/2026).

---

## UI — Date Picker moderno

**Contexto:** protótipo recebido usava date picker estilo HTML/browser. Avaliamos como replicar em PyQt6.

**Conclusão:** `QDateEdit` com `setCalendarPopup(True)` é o equivalente nativo. O projeto já usa esse widget em `products_resume_view.py` e `orders_pendent_view.py`. A diferença visual em relação ao protótipo é só QSS — o widget e a lógica são os mesmos.

POC criada em `scripts/poc_date_picker.py`.

---

## UI — PyQt6 vs. alternativas

**Análise comparativa:**

| Abordagem | Visual | Integração Python | Peso | Complexidade |
|---|---|---|---|---|
| **PyQt6** | 85–90% do protótipo | Nativo, tudo num processo | Leve | Baixa |
| **Electron** | 100% (é web) | Bridge HTTP/subprocess | ~150MB runtime | Média |
| **Tauri** | 100% (é web) | Bridge HTTP/subprocess | ~5MB | Média |
| **Flutter Desktop** | Ótimo | subprocess/HTTP | Médio | Alta (Dart) |

**Conclusão:** PyQt6 continua sendo a escolha certa para esse projeto. A diferença visual que não se consegue replicar (sombras, animações suaves, anti-aliasing de fonte) raramente é percebida pelo usuário final em um app desktop. O ganho de manter tudo em Python num único processo supera o custo visual.

**Anti-aliasing:** técnica de suavizar bordas de texto/formas para não ficarem serrilhadas. Web sempre ganha nesse aspecto por usar motor de renderização próprio do browser.

---

## Performance — Python vs. C/C++

**Contexto:** avaliação de usar C ou C++ para melhorar performance.

**Conclusão:** PyQt6 já é C++ por baixo (é um wrapper Python do Qt6). Migrar para C++ não mudaria o visual nem a performance perceptível para um app desktop. Se um dia aparecer gargalo de processamento, as saídas são: `ctypes`/`cffi` (chama `.so` em C), `Cython`, ou `numpy`/`pandas` (já são C por baixo). Para o volume atual do projeto, Python não é o gargalo — a latência da API do Google Sheets é.

---

## Banco de Dados — Análise de opções

**Requisitos levantados:**
- Compartilhado no escritório + acesso remoto eventual (donos)
- Budget: até R$100/mês considerando tudo
- Sem gerenciamento de servidor/rede
- MySQL de preferência
- ~25k+ pedidos (6 anos), muitas tabelas, banco complexo

**Opções avaliadas:**

| Opção | Custo | MySQL | Gerenciamento | Observação |
|---|---|---|---|---|
| **Railway** | ~$0/mês (free $5 crédito) | Real | Zero | Recomendado |
| **TiDB Cloud** | $0/mês | Compatível | Zero | 5GB free |
| **Supabase** | $0/mês | Não (PostgreSQL) | Zero | Melhor free tier, mas não é MySQL |
| **PlanetScale** | ~$39/mês | Compatível | Zero | Free tier encerrado |
| **VPS (Hetzner)** | ~R$25/mês | Real | Alto | Mais controle, mais trabalho |

**Conclusão:** Railway para MySQL real sem gerenciamento, dentro do budget. TiDB Cloud como alternativa gratuita MySQL-compatible.

---

## Arquitetura — Backend + Banco

**Decisão:** não conectar o app direto no banco. Usar um backend intermediário.

```
App Python (desktop)  →  FastAPI (Railway)  →  MySQL (Railway)
```

**Motivo:** as credenciais do banco ficam apenas no servidor. O app (que pode sair do escritório) só conhece a URL da API. Ambos os serviços (FastAPI + MySQL) cabem no free tier do Railway para o volume de uso previsto.

---

## Objetivos Futuros — Novo Sistema

**Visão geral:** migrar o fluxo atual da planilha Google Sheets para uma aplicação própria com banco de dados.

**Stack definida:**
- Banco: Railway (MySQL)
- Backend: FastAPI (Railway)
- Frontend: PyQt6 (mesmo stack atual)

**Telas prioritárias:**
1. Cadastro de novo pedido
2. Visualização de pedidos
3. Visualização de produtos
4. Geração de folha de pedido (formato personalizado)

**Abordagem incremental definida:**
1. Tela de cadastro gravando na planilha Google Sheets (sem banco ainda — entrega valor imediato)
2. Geração da folha de pedido a partir dos dados cadastrados
3. Tela de visualização de pedidos e produtos
4. Migração para banco de dados quando o volume/complexidade justificar

**Próximo passo:** análise profunda da planilha para entender o "as is" e modelar o banco de dados de forma escalável. Fazer isso em sessão dedicada com contexto limpo.
