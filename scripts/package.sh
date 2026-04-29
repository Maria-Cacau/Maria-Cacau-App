#!/bin/zsh
# Gera o .app para macOS usando Nuitka.
# Use: ./scripts/package.sh  (sempre da raiz do projeto ou de qualquer lugar)

cd "$(dirname "$0")/.." || exit 1

ENTRY="maria_cacau"
OUTPUT="dist"

APP_NAME=$(python3 -c "import maria_cacau; print(maria_cacau.__app_name__)")
VERSION=$(python3 -c "import maria_cacau; print(maria_cacau.__version__)")
ICON_MAC=$(python3 -c "import maria_cacau; print(maria_cacau.__icon_mac__)")

echo "Gerando .app para macOS..."

python3 -m nuitka \
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
