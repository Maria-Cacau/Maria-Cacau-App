# Maria Cacau - Contagem

[![Version](https://img.shields.io/badge/version-3.0-orange)](#)
![Language](https://img.shields.io/badge/language-Python-blue?logo=python)
[![Python Version](https://img.shields.io/badge/python-v3.13+-blue?logo=python)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/license-MIT-brightgreen)](https://github.com/Gui25Reis/Maria-Cacau-Contagem/blob/main/LICENSE)

<p align="center">
    <img width=97% src="arquivos/imagens/Git-Capa.png"/>
</p>

Programa que analisa a planilha usada como banco de dados, filtrando os dados para gerar resumos de:
- Produtos a serem feitos em um intervalo de datas
- Entregas previstas para uma data específica
- Dados necessários para nota fiscal

</br>

- [Platform \& Requirements](#platform--requirements)
- [How to run](#how-to-run)
- [Demo](#demo)
- [License](#license)
- [Author](#author)
- [Company](#company)

## Platform & Requirements

The project runs on macOS and Windows.

| **File** | **Description** |
|---|---|
| [`.python-version`](.python-version) | Python version |
| [`requirements.txt`](requirements.txt) | Python dependencies |
| [`Brewfile`](Brewfile) | macOS system dependencies |

## How to run

The project uses [direnv](https://direnv.net) for automatic virtual environment activation.

```bash
# Clone the repository
git clone https://github.com/Gui25Reis/Maria-Cacau-Contagem.git
cd Maria-Cacau-Contagem

# Run setup (installs direnv, creates venv and installs dependencies)
./build.sh
```

After setup, direnv will activate the virtual environment automatically whenever you enter the project folder.

```bash
# Run the application
cd _main
python3 main.py
```

## Demo

<p align="center">
    <img width=97% src="arquivos/imagens/telas/Tela-01.png"/>
</p>
<br>
<p align="center">
    <img width=97% src="arquivos/imagens/telas/Tela-04.png"/>
</p>

## Author

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/Gui25Reis">
                <img src="https://avatars1.githubusercontent.com/u/48360732" width="100px;" alt="Gui Reis photo at GitHub"/><br>
                <sub>
                    <b>Gui Reis</b>
                </sub>
            </a>
        </td>
    </tr>
</table>

## Company

<table>
    <tr>
        <td colspan="3" align="center">
            <a href="https://www.mariacacau.com.br/">
                <img src="https://static.wixstatic.com/media/808b8f_f53e7ddb5676413d8582cac5a7a4558f.png/v1/fill/w_210,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/808b8f_f53e7ddb5676413d8582cac5a7a4558f.png" width="150px;" alt="Maria Cacau logo"/><br>
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
