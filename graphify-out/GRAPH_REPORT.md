# Graph Report - Maria-Cacau-Contagem  (2026-04-28)

## Corpus Check
- 33 files · ~10,563 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 214 nodes · 424 edges · 9 communities detected
- Extraction: 58% EXTRACTED · 42% INFERRED · 0% AMBIGUOUS · INFERRED: 180 edges (avg confidence: 0.69)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `GuiMain` - 25 edges
2. `AuxWidgets` - 24 edges
3. `GuiDados` - 24 edges
4. `GuiPopup` - 22 edges
5. `GuiProdutos` - 19 edges
6. `SecurityStorage` - 17 edges
7. `CadastroAnalyseHandler` - 15 edges
8. `GuiEntregas` - 14 edges
9. `GoogleSheetsService` - 13 edges
10. `CacheStorage` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Área de consulta de frete: interface gráfica e lógica de consulta.` --uses--> `AuxWidgets`  [INFERRED]
  features/home/sub_features/freight_query/freight_query_view.py → design_system/aux_widgets.py
- `Área de validação de CPF: interface gráfica e lógica de verificação.` --uses--> `AuxWidgets`  [INFERRED]
  features/home/sub_features/cpf_validation/cpf_validation_view.py → design_system/aux_widgets.py
- `Área de resumo de produtos: contagem de itens por período.` --uses--> `AuxWidgets`  [INFERRED]
  features/home/sub_features/products_resume/products_resume_view.py → design_system/aux_widgets.py
- `main()` --calls--> `GuiMain`  [INFERRED]
  __main__.py → features/home/home_view.py
- `Entry point da aplicação. Execute com: python -m maria_cacau` --uses--> `GuiMain`  [INFERRED]
  __main__.py → features/home/home_view.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (23): AppError, certificado_limpo(), certificado_ok(), planilha_conectada(), planilha_ok(), Códigos de erro da aplicação com estrutura AppError., Confirmação de certificado configurado com sucesso., Confirmação de credenciais removidas com sucesso. (+15 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (6): AuxFrame, Frame composto reutilizável com label, entrada de texto e botão de cópia., AuxWidgets, Factory de widgets PyQt6 reutilizáveis em toda a interface., Área de dados para emissão de Nota SAGE e Melhor Envio., QFrame

### Community 2 - "Community 2"
Cohesion: 0.1
Nodes (11): GoogleSheetsService, Autenticação e acesso ao Google Sheets., Lê linhas da aba Cadastro para um conjunto específico de datas.          Mesmo m, Lê o .json da Service Account, autentica e salva no keychain., Tenta autenticar usando credenciais salvas no keychain. Retorna False se não hou, Remove as credenciais do keychain. Retorna False se não havia nada salvo., Retorna True se uma planilha foi vinculada., Define qual planilha vai ser lida pelo ID ou URL do Google Sheets. (+3 more)

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (12): AuxWidgets, GuiValiCpf, Área de validação de CPF: interface gráfica e lógica de verificação., GuiConsFrete, Área de consulta de frete: interface gráfica e lógica de consulta., _BackgroundWidget, _DialogConectarPlanilha, _extract_sheet_id() (+4 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (6): CadastroAnalyseHandler, Orquestra a autenticação e o acesso às abas da planilha., Autentica e aponta para a planilha. Não lê dados ainda., Lê e processa as 20 datas mais recentes da aba Cadastro (chamado uma vez, no Ati, Lê entregas de uma data específica direto da planilha (sem cache global)., SheetsManager

### Community 5 - "Community 5"
Cohesion: 0.13
Nodes (6): ABC, CacheStorage, Backend de cache em arquivo JSON no diretório do usuário., Contrato base para todos os backends de armazenamento., StorageHandler, Backend de armazenamento seguro via keychain do SO.

### Community 6 - "Community 6"
Cohesion: 0.21
Nodes (2): GuiDados, QWidget

### Community 7 - "Community 7"
Cohesion: 0.27
Nodes (2): GuiProdutos, Área de resumo de produtos: contagem de itens por período.

### Community 8 - "Community 8"
Cohesion: 1.0
Nodes (1): Metadados centralizados do pacote maria-cacau.

## Knowledge Gaps
- **9 isolated node(s):** `Metadados centralizados do pacote maria-cacau.`, `Códigos de erro da aplicação com estrutura AppError.`, `Estrutura de uma mensagem de erro/info para exibição no PopUp.`, `Confirmação de certificado configurado com sucesso.`, `Confirmação de credenciais removidas com sucesso.` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 6`** (18 nodes): `.combo_box()`, `.on_ok_dados()`, `.on_ok_entregas()`, `GuiDados`, `.create_frame()`, `.get_date()`, `.__init__()`, `.navigate()`, `.on_ativar()`, `.on_nav()`, `.on_tab_changed()`, `.set_belga()`, `.set_enabled()`, `.set_resumo()`, `.setup_ui()`, `.show_page()`, `.update_nav()`, `QWidget`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 7`** (14 nodes): `.fix_date()`, `products_resume_view.py`, `.on_ok_produtos()`, `GuiProdutos`, `.add_to_dict()`, `.dict_to_str()`, `.format_num()`, `.get_date_range()`, `.merge_cols()`, `.resumo_dia()`, `.resumo_pedido()`, `.set_resumo()`, `.set_text()`, `Área de resumo de produtos: contagem de itens por período.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (2 nodes): `__init__.py`, `Metadados centralizados do pacote maria-cacau.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GuiMain` connect `Community 0` to `Community 3`, `Community 4`, `Community 5`, `Community 6`, `Community 7`?**
  _High betweenness centrality (0.193) - this node is a cross-community bridge._
- **Why does `GuiPopup` connect `Community 0` to `Community 1`, `Community 3`, `Community 4`, `Community 6`, `Community 7`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **Why does `CacheStorage` connect `Community 5` to `Community 0`, `Community 3`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **Are the 9 inferred relationships involving `GuiMain` (e.g. with `Entry point da aplicação. Execute com: python -m maria_cacau` and `CacheStorage`) actually correct?**
  _`GuiMain` has 9 INFERRED edges - model-reasoned connections that need verification._
- **Are the 12 inferred relationships involving `AuxWidgets` (e.g. with `AuxFrame` and `Frame composto reutilizável com label, entrada de texto e botão de cópia.`) actually correct?**
  _`AuxWidgets` has 12 INFERRED edges - model-reasoned connections that need verification._
- **Are the 7 inferred relationships involving `GuiDados` (e.g. with `_DialogConectarPlanilha` and `_BackgroundWidget`) actually correct?**
  _`GuiDados` has 7 INFERRED edges - model-reasoned connections that need verification._
- **Are the 17 inferred relationships involving `GuiPopup` (e.g. with `CadastroAnalyseHandler` and `Processa os dados da aba Cadastro da planilha Google Sheets.`) actually correct?**
  _`GuiPopup` has 17 INFERRED edges - model-reasoned connections that need verification._