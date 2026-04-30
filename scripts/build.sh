#!/usr/bin/env bash
# Setup do projeto: instala direnv, cria o venv e instala as dependências.
# Use: ./scripts/build.sh  (macOS/Linux/Git Bash)
# Windows nativo: use scripts\build.bat

VENV_NAME="venv"
PYTHON=$(command -v python3 2>/dev/null || command -v python 2>/dev/null)

if [[ -z "$PYTHON" ]]; then
    echo "ERRO: Python não encontrado. Instale em python.org e adicione ao PATH."
    exit 1
fi

if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    if ! command -v direnv &> /dev/null; then
        echo "Instalando dependências via Homebrew..."
        brew bundle
        echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc
        source ~/.zshrc
    fi

elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    # Windows via Git Bash
    if ! command -v direnv &> /dev/null; then
        echo "AVISO: direnv não encontrado — ativação automática do venv não estará disponível."
        echo "Para instalar: scoop install direnv  ou  choco install direnv"
        echo "Continuando sem direnv..."
    else
        echo 'eval "$(direnv hook bash)"' >> ~/.bashrc
    fi

else
    echo "Sistema operacional não reconhecido: $OSTYPE"
    exit 1
fi

# Cria o venv se não existir
if [ ! -d "$VENV_NAME" ]; then
    echo "Criando ambiente virtual..."
    "$PYTHON" -m venv "$VENV_NAME"
fi

# Ativa o venv (caminho diferente no Windows)
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    source "$VENV_NAME/Scripts/activate"
else
    source "$VENV_NAME/bin/activate"
fi

# Instala o pacote e suas dependências
python -m pip install --upgrade pip
pip install -e .

# Libera o direnv para ativar automaticamente (só se disponível)
if command -v direnv &> /dev/null; then
    direnv allow
fi

echo ""
echo "Setup concluído. Abra um novo terminal na pasta do projeto."
