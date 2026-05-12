# 📘 Resumo Completo — Arquitetura Desktop (PyQt, Design System, Comparações com iOS e Windows)

---

# 🧠 CONTEXTO GERAL

Projeto:

* Aplicação desktop em **Python + PyQt6**
* Background em **iOS (Swift / UIKit / arquitetura limpa)**
* Objetivos:

  * Arquitetura escalável
  * Separação de responsabilidades
  * Modularização
  * Possível Design System reutilizável

---

# 🧱 ARQUITETURA EM PYQT (MENTALIDADE iOS)

## 📌 Mapeamento

| iOS              | PyQt                   |
| ---------------- | ---------------------- |
| UIView           | QWidget                |
| UIViewController | Controller             |
| Delegate         | Signals                |
| ViewModel        | Classe opcional        |
| AutoLayout       | Layouts (QVBox, QHBox) |

---

## 📌 Estrutura por módulo (feature)

```
feature/
├── view.py
├── controller.py
├── view_model.py (opcional)
├── use_case.py (opcional)
```

---

## 📌 Responsabilidades

### View

* cria UI
* emite eventos (`signals`)
* NÃO contém lógica

### Controller

* conecta signals
* orquestra fluxo
* chama lógica (use cases)

---

# 🔔 SIGNALS (SUBSTITUTO DE DELEGATE)

## Problema

Evitar acoplamento com UI interna

❌ ERRADO:

```python
view.button.clicked.connect(...)
```

✅ CERTO:

```python
view.copy_requested.connect(...)
```

## Benefício

* desacoplamento
* manutenção fácil
* abstração de intenção

---

# 🧱 COMPOSIÇÃO DE TELA (HOME COM SEÇÕES)

Estrutura:

```
HomeController
├── SectionAController
├── SectionBController
├── SectionCController
```

## Regras

* cada seção é independente
* HomeController orquestra
* HomeView apenas layout

---

## Comunicação

* interna → signals
* entre seções → HomeController (mediador)

---

# 🧠 SEPARAÇÃO DE LÓGICA (ESSENCIAL)

## Fluxo

```
UI → API → filtro → transformação → UI
```

---

## Arquitetura correta

```
Controller
    ↓
UseCase / Interactor
    ↓
Repository
    ↓
API
```

---

## Responsabilidades

### Repository

* acesso a dados (API, DB)
* sem regra de negócio

### UseCase / Interactor

* regras
* filtros
* transformação

### Controller

* apenas orquestra

---

## Exemplo

```python
class GetFilteredReports:
    def execute(self):
        data = repo.fetch()
        return process(data)
```

---

# 🧠 NOMENCLATURA (PYTHONIC)

## Arquivos

* `snake_case.py`
* ex: `home_controller.py`

## Classes

* `PascalCase`
* ex: `HomeController`

## Métodos

* `snake_case`
* ex: `handle_copy_report`

---

## Naming de eventos

| Contexto      | Nome                 |
| ------------- | -------------------- |
| View (signal) | `copy_requested`     |
| Controller    | `handle_copy_report` |

---

# 🎨 DESIGN SYSTEM EM PYTHON + QT

## Objetivo

Criar um módulo reutilizável de UI

---

## Estrutura

```
design_system/
├── components/
├── theme/
├── tokens/
├── styles/
```

---

## Exemplo

```python
class DSButton(QPushButton):
    def __init__(self, text):
        super().__init__(text)
        self.setStyleSheet("...")
```

---

## Tokens

```python
PRIMARY = "#007AFF"
SPACING_MD = 8
```

---

## Regras

* ❌ sem lógica de negócio
* ✔️ apenas UI
* ✔️ reutilizável

---

# 📦 DISTRIBUIÇÃO DO DESIGN SYSTEM

## 🥇 Local (dev)

```
pip install -e ../design-system
```

---

## 🥈 Git privado

```
pip install git+ssh://repo.git
```

---

## 🥉 Registry privado

* GitHub Packages
* GitLab
* Artifactory

---

## Versionamento

```
0.1.0 → inicial
1.0.0 → estável
```

---

# 🧠 PYQT VS NATIVO WINDOWS

## PyQt

✔️ rápido
✔️ cross-platform
❌ não nativo

---

## Windows nativo

### Melhor opção

* WinUI + C#

### Outras

* WPF (maduro)
* WinForms (antigo)
* C++ Win32 (baixo nível)

---

## Diferenças

| Qt             | WinUI       |
| -------------- | ----------- |
| código cria UI | XAML        |
| signals        | events      |
| flexível       | estruturado |

---

# ⚠️ XAML (PONTO CRÍTICO)

* UI declarada em XML
* lógica em C#
* separação forte

❗ diferente de UIKit

---

# 🧠 IMPORTANTE

❌ Não existe equivalente direto a UIKit no Windows moderno

* ou usa XAML
* ou código puro (menos comum)

---

# 🎯 DECISÃO FINAL

## Para seu caso

✔️ PyQt é válido
✔️ Escala se bem arquitetado

---

## Evolução ideal

* modularização por feature
* signals como delegate
* use cases para lógica
* repository para dados
* design system separado

---

# 🚀 TL;DR

* PyQt funciona bem com arquitetura correta
* Use:

  * View + Controller por módulo
  * Signals
  * UseCase
  * Repository
* HomeController orquestra tudo
* Design System:

  * package separado
  * versionado
  * reutilizável
* Windows nativo ≠ UIKit

  * padrão moderno = WinUI + XAML

---

# 📌 OBSERVAÇÃO FINAL

Essa abordagem combina:

* mentalidade iOS
* práticas Python
* padrões de mercado

Resultado:

✔️ código limpo
✔️ escalável
✔️ desacoplado
✔️ fácil de evoluir

---
