# ⚡ Comandos Rápidos para Teste na Rede

## 🎯 Opção Mais Rápida: Vercel (Recomendado)

### 1. Instalar dependências (primeira vez):
```bash
cd "/home/usuario/ebooks gratuito"
npm install
```

### 2. Criar arquivo .env.local:
```bash
cp env.example .env.local
# Edite o .env.local com suas credenciais do Supabase
```

### 3. Deploy no Vercel:
```bash
# Opção A: Usar script automático
./deploy.sh

# Opção B: Comandos manuais
npm run build
vercel --prod
```

**✅ Seu link estará em: `https://seu-projeto.vercel.app`**

---

## 🔥 Deploy em 3 Comandos:

```bash
cd "/home/usuario/ebooks gratuito"
npm install && npm run build
vercel --prod
```

---

## 📱 Teste Local na Rede (Temporário)

Para testar de outros dispositivos na mesma rede:

```bash
cd "/home/usuario/ebooks gratuito"
npm run dev -- -H 0.0.0.0
```

Depois acesse de outros dispositivos:
- `http://SEU_IP:3000`
- Descubra seu IP: `hostname -I`

---

## 🌐 Usando ngrok (Link Público Temporário)

```bash
# Terminal 1: Inicie o servidor
cd "/home/usuario/ebooks gratuito"
npm run dev

# Terminal 2: Inicie o ngrok
ngrok http 3000
```

Copie a URL do ngrok (ex: `https://abc123.ngrok.io`)

---

## ⚙️ Configuração Rápida do Supabase

1. Acesse: https://supabase.com
2. Crie um projeto
3. Vá em SQL Editor
4. Execute o conteúdo de `supabase-setup.sql`
5. Vá em Settings → API
6. Copie a URL e a chave anon
7. Cole no `.env.local`

---

## 🚨 Checklist Antes do Deploy

- [ ] `npm install` executado
- [ ] `.env.local` criado com credenciais do Supabase
- [ ] Tabela `leads_ebooks` criada no Supabase
- [ ] Links dos ebooks configurados
- [ ] `npm run build` funciona sem erros

---

## 📞 Suporte

Se tiver problemas:
1. Verifique os logs: `vercel logs`
2. Veja o dashboard: https://vercel.com/dashboard
3. Consulte `DEPLOY-RAPIDO.md` para mais detalhes

