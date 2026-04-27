#!/bin/zsh
# Gera o executável do app usando Nuitka.
# Use: ./package.sh

APP_NAME="MC - Análise"
ENTRY="_main/main.py"
OUTPUT="dist"

if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Gerando .app para macOS..."

    python -m nuitka \
        --standalone \
        --enable-plugin=pyqt6 \
        --macos-create-app-bundle \
        --macos-app-name="$APP_NAME" \
        --macos-app-icon=images/logo-icone.icns \
        --include-data-dir=images=images \
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
        --windows-icon-from-ico=images/logo-icone.ico \
        --include-data-dir=images=images \
        --output-filename="$APP_NAME" \
        --output-dir="$OUTPUT" \
        "$ENTRY"

    echo ""
    echo "Gerado em: $OUTPUT/$APP_NAME.exe"

else
    echo "Sistema operacional não reconhecido: $OSTYPE"
    exit 1
fi
