#!/bin/zsh
# Gera o executável do app usando Nuitka.
# Use: ./scripts/package.sh  (sempre da raiz do projeto ou de qualquer lugar)

# Garante que os caminhos relativos funcionem independente de onde o script é chamado
cd "$(dirname "$0")/.." || exit 1

ENTRY="maria_cacau/__main__.py"
OUTPUT="dist"

APP_NAME=$(python -c "import maria_cacau; print(maria_cacau.__app_name__)")
VERSION=$(python -c "import maria_cacau; print(maria_cacau.__version__)")
COPYRIGHT=$(python -c "import maria_cacau; print(maria_cacau.__copyright__)")
ICON_MAC=$(python -c "import maria_cacau; print(maria_cacau.__icon_mac__)")
ICON_WIN=$(python -c "import maria_cacau; print(maria_cacau.__icon_win__)")

# Windows exige versão com 4 partes (X.Y.Z.W)
WIN_VERSION="${VERSION}.0"

if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Gerando .app para macOS..."

    python -m nuitka \
        --standalone \
        --enable-plugin=pyqt6 \
        --macos-create-app-bundle \
        --macos-app-name="$APP_NAME" \
        --macos-app-version="$VERSION" \
        --macos-app-icon="$ICON_MAC" \
        --include-data-dir=maria_cacau/assets=maria_cacau/assets \
        --include-data-files=pyproject.toml=pyproject.toml \
        --output-dir="$OUTPUT" \
        "$ENTRY"

    echo ""
    echo "Gerado em: $OUTPUT/$APP_NAME.app"

elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    echo "Gerando .exe para Windows..."

    python -m nuitka \
        --onefile \
        --enable-plugin=pyqt6 \
        --windows-disable-console \
        --windows-icon-from-ico="$ICON_WIN" \
        --windows-product-name="$APP_NAME" \
        --windows-product-version="$WIN_VERSION" \
        --windows-file-version="$WIN_VERSION" \
        --windows-company-name="KINGS" \
        --windows-file-description="$APP_NAME" \
        --copyright="$COPYRIGHT" \
        --include-data-dir=maria_cacau/assets=maria_cacau/assets \
        --include-data-files=pyproject.toml=pyproject.toml \
        --output-filename="$APP_NAME" \
        --output-dir="$OUTPUT" \
        "$ENTRY"

    echo ""
    echo "Gerado em: $OUTPUT/$APP_NAME.exe"

else
    echo "Sistema operacional não reconhecido: $OSTYPE"
    exit 1
fi
