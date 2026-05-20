# Maria Cacau — App

[![Version](https://img.shields.io/badge/version-4.0-orange)](https://github.com/Maria-Cacau/Maria-Cacau-App/releases/tag/4.0.0)
![Language](https://img.shields.io/badge/language-Python-blue?logo=python)
[![Python Version](https://img.shields.io/badge/python-v3.13+-blue?logo=python)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-brightgreen?logo=creativecommons)](./LICENSE)
![macOS](https://img.shields.io/badge/macOS-000000?logo=apple&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=white)

</br>

- [Plataforma e Requisitos](#plataforma-e-requisitos)
- [Como rodar](#como-rodar)
- [Gerar executável](#gerar-executável)
- [Autor](#autor)

## Plataforma e Requisitos

> [!NOTE]
> O app é **Windows first**, precisa sempre ter como referência a tela gerada no Windows (os layouts não ficam iguais).
> É possível rodar no mac e gerar o .dmg se necessário.

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

```bash
# Rodar o setup (cria o venv e instala as dependências)
scripts\build.bat

# Ativar o ambiente virtual
venv\Scripts\activate.bat

# Rodar o app
python -m maria_cacau
```

## Gerar executável

> [!NOTE]
> É necessário rodar o `build` antes para instalar as dependências e ter o venv configurado.
> O executável gerado acaba ficando na pasta dist/.

| OS | Comando |
|---|---|
| ![macOS](https://img.shields.io/badge/macOS-000000?logo=apple&logoColor=white) | `./scripts/build.sh && ./scripts/package.sh` |
| ![Windows](https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=white) | `scripts\build.bat && scripts\package.bat` |

</br>

---

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
