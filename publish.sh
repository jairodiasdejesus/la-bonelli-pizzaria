#!/usr/bin/env bash
# ==============================================================================
# Script de Conexão e Publicação - La Bonelli Pizzaria
# Repositório: https://github.com/jairodiasdejesus/la-bonelli-pizzaria.git
# ==============================================================================

set -e

echo "🍕 [1/5] Verificando repositório Git local..."
if [ ! -d ".git" ]; then
    git init
    git branch -M main
fi

echo "🔗 [2/5] Configurando repositório remoto..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/jairodiasdejesus/la-bonelli-pizzaria.git

echo "📦 [3/5] Adicionando arquivos..."
git add .

echo "📝 [4/5] Criando commit..."
COMMIT_MSG="${1:-feat: publicacao e atualizacao do projeto}"
git commit -m "$COMMIT_MSG" || echo "Nenhuma alteração para commitar."

echo "🚀 [5/5] Enviando para o GitHub (branch main)..."
git push -u origin main

echo ""
echo "✨ Publicação concluída com sucesso no GitHub!"
echo "🌐 Repositório: https://github.com/jairodiasdejesus/la-bonelli-pizzaria"
