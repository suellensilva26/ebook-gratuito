# ⚡ Quick Start - Landing Page Ebooks

## 🚀 Início Rápido (5 minutos)

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Supabase

1. Crie uma conta em [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. No SQL Editor, execute o arquivo `supabase-setup.sql`
4. Copie a URL e a chave anon do projeto

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
NEXT_PUBLIC_EBOCK_1_URL=https://link-do-ebook-1.pdf
NEXT_PUBLIC_EBOCK_2_URL=https://link-do-ebook-2.pdf
NEXT_PUBLIC_EBOCK_3_URL=https://link-do-ebook-3.pdf
NEXT_PUBLIC_TELEGRAM_GROUP=https://t.me/seugrupo
NEXT_PUBLIC_WHATSAPP_LINK=https://wa.me/5511999999999
NEXT_PUBLIC_APP_LINK=https://seu-app.com?cupom=NEURO100
```

### 4. Rodar o Projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📝 Próximos Passos

1. Personalize os textos nos componentes
2. Adicione seus links reais dos ebooks
3. Configure os links do Telegram/WhatsApp
4. Faça deploy no Vercel (veja `DEPLOY.md`)

## 🎨 Personalização

- **Cores**: Edite `tailwind.config.ts`
- **Textos**: Edite os componentes em `components/`
- **Ebooks**: Atualize `components/EbooksSection.tsx`
- **Depoimentos**: Atualize `components/Testimonials.tsx`

## ✅ Checklist

- [ ] Supabase configurado
- [ ] Variáveis de ambiente configuradas
- [ ] Projeto rodando localmente
- [ ] Formulário testado
- [ ] Links dos ebooks atualizados
- [ ] Deploy no Vercel (opcional)

