# 🚀 Deploy Rápido - Link para Teste

## Opção 1: Vercel (Recomendado - 2 minutos)

### Passo a Passo:

1. **Instale o Vercel CLI** (se ainda não tiver):
```bash
npm i -g vercel
```

2. **Faça login no Vercel**:
```bash
vercel login
```

3. **Deploy do projeto**:
```bash
cd "/home/usuario/ebooks gratuito"
vercel
```

4. **Siga as instruções**:
   - Link para produção? **Y**
   - Override settings? **N** (primeira vez)
   - Adicione as variáveis de ambiente quando solicitado

5. **Configure variáveis de ambiente no Vercel Dashboard**:
   - Acesse: https://vercel.com/dashboard
   - Vá em Settings → Environment Variables
   - Adicione:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `NEXT_PUBLIC_EBOCK_1_URL`
     - `NEXT_PUBLIC_EBOCK_2_URL`
     - `NEXT_PUBLIC_EBOCK_3_URL`
     - `NEXT_PUBLIC_TELEGRAM_GROUP`
     - `NEXT_PUBLIC_WHATSAPP_LINK`
     - `NEXT_PUBLIC_APP_LINK`
     - `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` (opcional)

6. **Redeploy após adicionar variáveis**:
```bash
vercel --prod
```

**✅ Seu link estará pronto em: `https://seu-projeto.vercel.app`**

---

## Opção 2: Netlify (Alternativa)

1. **Instale Netlify CLI**:
```bash
npm i -g netlify-cli
```

2. **Login**:
```bash
netlify login
```

3. **Deploy**:
```bash
cd "/home/usuario/ebooks gratuito"
npm run build
netlify deploy --prod
```

---

## Opção 3: Teste Local na Rede (Temporário)

Para testar localmente acessível na sua rede:

```bash
cd "/home/usuario/ebooks gratuito"
npm run dev -- -H 0.0.0.0
```

Depois acesse de outros dispositivos usando:
- `http://SEU_IP_LOCAL:3000`
- Descubra seu IP: `hostname -I` ou `ip addr`

---

## Opção 4: Usando ngrok (Túnel Local)

1. **Instale ngrok**:
```bash
# Linux
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
tar -xzf ngrok-v3-stable-linux-amd64.tgz
sudo mv ngrok /usr/local/bin/
```

2. **Inicie o servidor local**:
```bash
cd "/home/usuario/ebooks gratuito"
npm run dev
```

3. **Em outro terminal, inicie o ngrok**:
```bash
ngrok http 3000
```

4. **Copie a URL do ngrok** (ex: `https://abc123.ngrok.io`)

**⚠️ Link temporário, muda a cada reinício do ngrok**

---

## ⚡ Deploy Mais Rápido (Vercel via GitHub)

1. **Crie repositório no GitHub**:
```bash
cd "/home/usuario/ebooks gratuito"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/SEU_USUARIO/ebooks-enem.git
git push -u origin main
```

2. **No Vercel Dashboard**:
   - New Project → Import Git Repository
   - Selecione o repositório
   - Configure variáveis de ambiente
   - Deploy!

**✅ Link automático: `https://seu-projeto.vercel.app`**

---

## 🔧 Checklist Antes do Deploy

- [ ] Variáveis de ambiente configuradas
- [ ] Supabase configurado (tabela criada)
- [ ] Links dos ebooks atualizados
- [ ] Links do Telegram/WhatsApp configurados
- [ ] Google Analytics ID (se usar)

---

## 📝 Comando Rápido Vercel

```bash
# Deploy completo em um comando
cd "/home/usuario/ebooks gratuito" && vercel --prod
```

