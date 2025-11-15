# 🚀 Guia de Deploy - Landing Page Ebooks Gratuitos

## 📋 Pré-requisitos

1. Conta no [Supabase](https://supabase.com) (gratuita)
2. Conta no [Vercel](https://vercel.com) (gratuita)
3. Repositório Git (GitHub, GitLab, etc.)

## 🔧 Passo 1: Configurar Supabase

### 1.1 Criar Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma nova conta ou faça login
3. Clique em "New Project"
4. Preencha:
   - **Name**: `ebooks-enem-2025` (ou qualquer nome)
   - **Database Password**: Anote esta senha!
   - **Region**: Escolha a mais próxima (South America - São Paulo)
5. Aguarde o projeto ser criado (~2 minutos)

### 1.2 Criar Tabela

1. No painel do Supabase, vá em **SQL Editor**
2. Clique em **New Query**
3. Copie e cole o conteúdo do arquivo `supabase-setup.sql`
4. Clique em **Run** (ou pressione Ctrl+Enter)
5. Verifique se a tabela foi criada em **Table Editor** → `leads_ebooks`

### 1.3 Obter Credenciais

1. No painel do Supabase, vá em **Settings** → **API**
2. Anote:
   - **Project URL** (será `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon public** key (será `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

## 📦 Passo 2: Preparar Código

### 2.1 Configurar Variáveis de Ambiente

1. Crie um arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui

# Links dos Ebooks (substitua pelos links reais)
NEXT_PUBLIC_EBOCK_1_URL=https://drive.google.com/ebook1.pdf
NEXT_PUBLIC_EBOCK_2_URL=https://drive.google.com/ebook2.pdf
NEXT_PUBLIC_EBOCK_3_URL=https://drive.google.com/ebook3.pdf

# Links Externos
NEXT_PUBLIC_TELEGRAM_GROUP=https://t.me/seugrupo
NEXT_PUBLIC_WHATSAPP_LINK=https://wa.me/5511999999999
NEXT_PUBLIC_APP_LINK=https://seu-app.com?cupom=NEURO100
```

### 2.2 Testar Localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) e teste o formulário.

## 🌐 Passo 3: Deploy no Vercel

### 3.1 Preparar Repositório Git

```bash
# Inicializar Git (se ainda não tiver)
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "Initial commit - Landing page ebooks"

# Criar repositório no GitHub/GitLab e fazer push
git remote add origin https://github.com/seu-usuario/seu-repo.git
git push -u origin main
```

### 3.2 Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub/GitLab
3. Clique em **Add New Project**
4. Importe seu repositório
5. Configure:
   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Root Directory**: `./` (raiz)
   - **Build Command**: `npm run build` (padrão)
   - **Output Directory**: `.next` (padrão)

### 3.3 Adicionar Variáveis de Ambiente no Vercel

1. Na página de configuração do projeto, vá em **Environment Variables**
2. Adicione cada variável do `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_EBOCK_1_URL`
   - `NEXT_PUBLIC_EBOCK_2_URL`
   - `NEXT_PUBLIC_EBOCK_3_URL`
   - `NEXT_PUBLIC_TELEGRAM_GROUP`
   - `NEXT_PUBLIC_WHATSAPP_LINK`
   - `NEXT_PUBLIC_APP_LINK`

3. Clique em **Deploy**

### 3.4 Verificar Deploy

1. Aguarde o build completar (~2-3 minutos)
2. Acesse a URL fornecida pelo Vercel
3. Teste o formulário novamente
4. Verifique no Supabase se os leads estão sendo salvos

## ✅ Checklist Pós-Deploy

- [ ] Formulário está funcionando
- [ ] Leads estão sendo salvos no Supabase
- [ ] Página de sucesso está redirecionando corretamente
- [ ] Links dos ebooks estão funcionando
- [ ] Links do Telegram/WhatsApp estão corretos
- [ ] Countdown timer está funcionando
- [ ] Design está responsivo no mobile
- [ ] Meta tags estão corretas

## 🔍 Troubleshooting

### Erro: "Missing Supabase environment variables"
- Verifique se as variáveis estão configuradas no Vercel
- Certifique-se de que os nomes estão corretos (com `NEXT_PUBLIC_`)

### Erro: "Failed to fetch" no formulário
- Verifique se a tabela foi criada no Supabase
- Verifique se as políticas RLS estão configuradas corretamente
- Teste a API diretamente no Supabase

### Leads não aparecem no Supabase
- Verifique as políticas RLS
- Verifique se a anon key está correta
- Veja os logs do Vercel para erros

### Página não carrega
- Verifique os logs do build no Vercel
- Certifique-se de que todas as dependências estão no `package.json`

## 📊 Próximos Passos

1. **Configurar Email Automático**: Use Supabase Edge Functions ou SendGrid
2. **Integrar WhatsApp API**: Use Twilio ou Evolution API
3. **Adicionar Analytics**: Google Analytics ou Plausible
4. **Otimizar SEO**: Adicione mais meta tags e structured data
5. **A/B Testing**: Teste diferentes CTAs e textos

## 🆘 Suporte

Se tiver problemas, verifique:
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Supabase](https://supabase.com/docs)
- [Documentação Vercel](https://vercel.com/docs)

