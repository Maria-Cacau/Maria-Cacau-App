#!/bin/zsh
# Setup do projeto: instala direnv, cria o venv e instala as dependências.
# Use: ./build.sh  (não precisa de source)

if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    if ! command -v direnv &> /dev/null; then
        echo "Instalando dependências via Homebrew..."
        brew bundle
        echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc
        source ~/.zshrc
    fi

elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    # Windows (Git Bash / WSL)
    if ! command -v direnv &> /dev/null; then
        echo "AVISO: direnv não encontrado."
        echo "Instale manualmente com Scoop:  scoop install direnv"
        echo "Ou via Chocolatey:              choco install direnv"
        echo "Após instalar, adicione ao seu perfil: eval \"\$(direnv hook bash)\""
        exit 1
    fi

else
    echo "Sistema operacional não reconhecido: $OSTYPE"
    exit 1
fi

# Cria o venv se não existir
if [ ! -d "maria-cacau" ]; then
    echo "Criando ambiente virtual..."
    python3 -m venv maria-cacau
fi

# Instala as dependências
source maria-cacau/bin/activate
pip install -r requirements.txt

# Libera o direnv para ativar automaticamente
direnv allow

echo ""
echo "Setup concluído. Abra um novo terminal na pasta do projeto."
