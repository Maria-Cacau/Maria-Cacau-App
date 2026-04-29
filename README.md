# Maria Cacau - Contagem

[![Version](https://img.shields.io/badge/version-4.0-orange)](#)
![Language](https://img.shields.io/badge/language-Python-blue?logo=python)
[![Python Version](https://img.shields.io/badge/python-v3.13+-blue?logo=python)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/license-MIT-brightgreen)](https://github.com/Gui25Reis/Maria-Cacau-Contagem/blob/main/LICENSE)
![macOS](https://img.shields.io/badge/macOS-000000?logo=apple&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=white)

<p align="center">
    <img width=97% src="arquivos/imagens/Git-Capa.png"/>
</p>

App desktop para gestão de pedidos e entregas da Maria Cacau. Lê diretamente a planilha Google Sheets e gera resumos de:
- **Produtos**: contagem de itens por período
- **Entregas**: resumo diário com inadimplências
- **Nota Fiscal**: dados para emissão SAGE e Melhor Envio

</br>

- [Plataforma e Requisitos](#plataforma-e-requisitos)
- [Como rodar](#como-rodar)
- [Demo](#demo)
- [Autor](#autor)
- [Empresa](#empresa)

## Plataforma e Requisitos

O projeto roda em macOS e Windows.

| **Arquivo** | **Descrição** |
|---|---|
| [`.python-version`](.python-version) | Versão do Python |
| [`pyproject.toml`](pyproject.toml) | Dependências Python |
| [`Brewfile`](Brewfile) | Dependências do sistema (macOS) |

## Como rodar

> [!NOTE]
> Se estiver no VS Code, basta mandar rodar o projeto — o `__main__.py` será [acionado automaticamente](.vscode/launch.json).

**macOS:**

```bash
# Rodar o setup (instala direnv, cria o venv e instala as dependências)
./scripts/build.sh

# Rodar o app
python -m maria_cacau
```

> Após o setup, o [direnv](https://direnv.net) ativa o venv automaticamente ao entrar na pasta do projeto.

**Windows:**

```bat
# Rodar o setup (cria o venv e instala as dependências)
scripts\build.bat

# Ativar o ambiente virtual
venv\Scripts\activate.bat

# Rodar o app
python -m maria_cacau
```

## Gerar executável

> [!NOTE]
> É necessário ter rodado o `build` antes para ter o venv configurado.

**macOS:**

```bash
## Mac
./scripts/package.sh

## Windows
scripts\package.bat

```
O executável fica em `dist/MC - Análise.app`.

## Demo

<p align="center">
    <img width=97% src="arquivos/imagens/telas/Tela-01.png"/>
</p>
<br>
<p align="center">
    <img width=97% src="arquivos/imagens/telas/Tela-04.png"/>
</p>

## Autor

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/Gui25Reis">
                <img src="https://avatars1.githubusercontent.com/u/48360732" width="100px;" alt="Foto do Gui Reis no GitHub"/><br>
                <sub>
                    <b>Gui Reis</b>
                </sub>
            </a>
        </td>
    </tr>
</table>

## Empresa

<table>
    <tr>
        <td colspan="3" align="center">
            <a href="https://www.mariacacau.com.br/">
                <img src="https://static.wixstatic.com/media/808b8f_f53e7ddb5676413d8582cac5a7a4558f.png/v1/fill/w_210,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/808b8f_f53e7ddb5676413d8582cac5a7a4558f.png" width="150px;" alt="Logo Maria Cacau"/><br>
            </a>
        </td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://www.mariacacau.com.br/">site</a>
        </td>
        <td>
            <a href="https://www.instagram.com/mariacacau_oficial/">instagram</a>
        </td>
        <td>
            <a href="https://linktr.ee/mariacacau_oficial">orçamento</a>
        </td>
    </tr>
</table>
