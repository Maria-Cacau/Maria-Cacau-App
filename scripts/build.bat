@echo off
REM Setup do projeto no Windows: cria o venv e instala as dependencias.
REM Use: scripts\build.bat

set VENV_NAME=venv

REM Verifica Python
where python >nul 2>&1
if errorlevel 1 (
    echo ERRO: Python nao encontrado. Instale em python.org e adicione ao PATH.
    exit /b 1
)

REM Cria o venv se nao existir
if not exist "%VENV_NAME%\" (
    echo Criando ambiente virtual...
    python -m venv %VENV_NAME%
)

REM Instala o pacote e suas dependencias
call %VENV_NAME%\Scripts\activate.bat
python -m pip install --upgrade pip
pip install -e .

REM direnv e opcional no Windows — o VS Code detecta o venv automaticamente
where direnv >nul 2>&1
if not errorlevel 1 (
    direnv allow
) else (
    echo.
    echo AVISO: direnv nao encontrado - ativacao automatica do venv nao disponivel.
    echo Para instalar: scoop install direnv  ou  choco install direnv
)

echo.
echo Setup concluido. Para ativar o venv manualmente:
echo     %VENV_NAME%\Scripts\activate.bat
