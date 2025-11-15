# Landing Page - Ebooks Gratuitos ENEM 2025

Landing page premium em Next.js 14 para captura de leads oferecendo 3 ebooks gratuitos sobre preparação ENEM 2025.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Supabase** - Backend para captura de leads
- **React Input Mask** - Máscara para telefone

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no Supabase (para captura de leads)

## 🛠️ Instalação

1. Clone o repositório ou navegue até a pasta do projeto

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

Edite o arquivo `.env` e adicione suas credenciais do Supabase:
```
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

4. Configure o Supabase:

Crie uma tabela chamada `leads_ebooks` com a seguinte estrutura:

```sql
CREATE TABLE leads_ebooks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  telefone TEXT,
  data_criacao TIMESTAMP DEFAULT NOW(),
  origem TEXT DEFAULT 'landing_ebooks',
  cupom_codigo TEXT DEFAULT 'NEURO100',
  cupom_valor NUMERIC DEFAULT 100,
  link_telegram_enviado BOOLEAN DEFAULT false
);

CREATE INDEX idx_email ON leads_ebooks(email);
```

5. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
├── app/
│   ├── api/leads/        # API route para captura de leads
│   ├── sucesso/          # Página de sucesso após download
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Página inicial
│   └── globals.css       # Estilos globais
├── components/
│   ├── Hero.tsx          # Seção hero com countdown
│   ├── EbooksSection.tsx # Cards dos 3 ebooks
│   ├── FormSection.tsx   # Formulário de captura
│   ├── Testimonials.tsx  # Depoimentos
│   ├── FAQ.tsx           # FAQ accordion
│   ├── FinalCTA.tsx      # Última CTA com urgência
│   ├── Footer.tsx        # Rodapé
│   └── CountdownTimer.tsx # Timer de countdown
├── lib/
│   └── supabase.ts       # Cliente Supabase
└── public/               # Arquivos estáticos
```

## 🎨 Design System

- **Cores**: Preto (#0a0a0a) + Dourado (#d4af37)
- **Fontes**: Poppins (headings) + Inter (body)
- **Efeitos**: Glassmorphism, gradientes, animações suaves

## 📱 Responsividade

- Mobile-first design
- Breakpoints: 640px (tablet), 1024px (desktop)
- Layout totalmente adaptável

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para um repositório Git
2. Conecte o repositório no Vercel
3. Configure as variáveis de ambiente no painel do Vercel
4. Deploy automático!

### Outros Provedores

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- AWS Amplify
- etc.

## 📝 Variáveis de Ambiente

Consulte o arquivo `.env.example` para todas as variáveis necessárias.

## 🔧 Funcionalidades

- ✅ Formulário de captura com validação
- ✅ Verificação de email duplicado
- ✅ Countdown timer em tempo real
- ✅ Animações com Framer Motion
- ✅ Design responsivo
- ✅ Integração Supabase
- ✅ Página de sucesso com links de download
- ✅ Meta tags SEO

## 📄 Licença

Todos os direitos reservados - NeuroHack ENEM 2025

