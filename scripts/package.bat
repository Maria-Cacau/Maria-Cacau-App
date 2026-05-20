@echo off
chcp 65001 > nul
REM Gera o .exe para Windows usando Nuitka.
REM Use: scripts\package.bat  (sempre da raiz do projeto)

cd /d "%~dp0\.."

REM Ativa o venv para garantir que nuitka e demais pacotes estejam disponíveis
if exist "venv\Scripts\activate.bat" (
    call venv\Scripts\activate.bat
) else (
    echo AVISO: venv nao encontrado. Execute scripts\build.bat primeiro.
)

REM Garante que as dependências de build (nuitka) estão instaladas
python -m pip install -e ".[build]" --quiet

set ENTRY=maria_cacau
set OUTPUT=dist

for /f "delims=" %%i in ('python -c "import maria_cacau; print(maria_cacau.__app_name__)"') do set APP_NAME=%%i
for /f "delims=" %%i in ('python -c "import maria_cacau; print(maria_cacau.__version__)"') do set VERSION=%%i
for /f "delims=" %%i in ('python -c "import maria_cacau; print(maria_cacau.__copyright__)"') do set COPYRIGHT=%%i
for /f "delims=" %%i in ('python -c "import maria_cacau; print(maria_cacau.__icon_win__)"') do set ICON_WIN=%%i
for /f "delims=" %%i in ('python -c "import maria_cacau; print(maria_cacau.__company__)"') do set COMPANY_NAME=%%i
for /f "delims=" %%i in ('python -c "import maria_cacau; print(maria_cacau.__description__)"') do set DESCRIPTION=%%i

REM Windows exige versão com 4 partes (X.Y.Z.W)
set WIN_VERSION=%VERSION%.0

echo Gerando .exe para Windows...

python -m nuitka ^
    --onefile ^
    --enable-plugin=pyqt6 ^
    --windows-console-mode=disable ^
    --windows-icon-from-ico="%ICON_WIN%" ^
    --windows-product-name="%APP_NAME%" ^
    --windows-product-version="%WIN_VERSION%" ^
    --windows-file-version="%WIN_VERSION%" ^
    --windows-company-name="%COMPANY_NAME%" ^
    --windows-file-description="%DESCRIPTION%" ^
    --copyright="%COPYRIGHT%" ^
    --include-data-dir=maria_cacau/assets=maria_cacau/assets ^
    --include-data-files=pyproject.toml=pyproject.toml ^
    --include-data-files=venv\Lib\site-packages\pywinsparkle\WinSparkle.dll=WinSparkle.dll ^
    --output-filename="%APP_NAME%" ^
    --output-dir="%OUTPUT%" ^
    %ENTRY%

echo.
echo Gerado em: %OUTPUT%\%APP_NAME%.exe
