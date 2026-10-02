@echo off
REM ==============================================================================
REM Script de Conexão e Publicação - La Bonelli Pizzaria
REM Repositório: https://github.com/jairodiasdejesus/la-bonelli-pizzaria.git
REM ==============================================================================

echo [1/5] Verificando repositorio Git local...
if not exist .git (
    echo Inicializando repositorio Git...
    git init
    git branch -M main
)

echo [2/5] Configurando repositorio remoto...
git remote remove origin 2>nul
git remote add origin https://github.com/jairodiasdejesus/la-bonelli-pizzaria.git

echo [3/5] Adicionando arquivos ao stage...
git add .

echo [4/5] Criando commit...
set /p commit_msg="Digite a mensagem do commit (padrao: 'feat: publicacao e atualizacao do projeto'): "
if "%commit_msg%"=="" set commit_msg=feat: publicacao e atualizacao do projeto
git commit -m "%commit_msg%"

echo [5/5] Enviando para o GitHub (main)...
git push -u origin main

echo.
echo ==============================================================================
echo Publicacao concluida com sucesso!
echo Verifique em: https://github.com/jairodiasdejesus/la-bonelli-pizzaria
echo ==============================================================================
pause
