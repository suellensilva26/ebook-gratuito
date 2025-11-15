#!/bin/bash

echo "🚀 Preparando deploy da Landing Page Ebooks..."

# Verifica se está no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script na raiz do projeto"
    exit 1
fi

# Instala dependências se necessário
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

# Verifica se .env.local existe
if [ ! -f ".env.local" ]; then
    echo "⚠️  ATENÇÃO: Arquivo .env.local não encontrado!"
    echo "📝 Crie o arquivo .env.local com suas variáveis de ambiente"
    echo "   Use o arquivo env.example como base"
    read -p "Continuar mesmo assim? (s/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Ss]$ ]]; then
        exit 1
    fi
fi

# Build do projeto
echo "🔨 Fazendo build do projeto..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro no build. Corrija os erros antes de fazer deploy."
    exit 1
fi

echo "✅ Build concluído com sucesso!"
echo ""
echo "🌐 Iniciando deploy no Vercel..."
echo ""

# Deploy no Vercel
vercel --prod

echo ""
echo "✅ Deploy concluído!"
echo "📝 Não esqueça de configurar as variáveis de ambiente no dashboard do Vercel:"
echo "   https://vercel.com/dashboard"
echo ""

