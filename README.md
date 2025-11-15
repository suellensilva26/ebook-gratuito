# 📚 Landing Page - Ebooks Gratuitos ENEM 2025

Landing page premium em Next.js 14 para captura de leads oferecendo 3 ebooks gratuitos sobre preparação ENEM 2025.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Formspree** - Captura de leads via email
- **Google Drive** - Hospedagem dos ebooks para download

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no Formspree (gratuita) - [formspree.io](https://formspree.io)
- Google Drive com pasta compartilhada (para os ebooks)

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/suellensilva26/ebook-gratuito.git
cd ebook-gratuito
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (opcional):
```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` se necessário (os links principais já estão hardcoded no código):
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXX (opcional)
NEXT_PUBLIC_APP_LINK=https://seu-app.com (opcional)
```

4. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
├── app/
│   ├── sucesso/          # Página de sucesso após download
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Página inicial
│   └── globals.css       # Estilos globais
├── components/
│   ├── Hero.tsx          # Seção hero com countdown
│   ├── EbooksSection.tsx # Cards dos 3 ebooks
│   ├── FormSection.tsx   # Formulário de captura (Formspree)
│   ├── Testimonials.tsx  # Depoimentos
│   ├── FAQ.tsx           # FAQ accordion
│   ├── FinalCTA.tsx      # Última CTA com urgência
│   ├── Footer.tsx        # Rodapé
│   ├── CountdownTimer.tsx # Timer de countdown
│   └── GoogleAnalytics.tsx # Google Analytics 4
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

- ✅ Formulário de captura com Formspree (envia email automaticamente)
- ✅ Validação em tempo real
- ✅ Countdown timer até 23h59
- ✅ Animações com Framer Motion
- ✅ Design responsivo mobile-first
- ✅ Integração Google Drive para download dos ebooks
- ✅ Página de sucesso com links diretos
- ✅ Botões Telegram e WhatsApp funcionais
- ✅ Google Analytics 4 integrado
- ✅ Meta tags SEO otimizadas

## 📚 Ebooks no Google Drive

Os 3 ebooks estão hospedados no Google Drive:
- Link da pasta: `https://drive.google.com/drive/folders/1fgOQQ8UP3z5_50Qm6IrczDfAwzbYyuQ2`
- Funciona perfeitamente no celular
- Download direto dos PDFs

## 🔗 Links Integrados

- **Formspree ID:** `mvgdzwvy` (já configurado)
- **Telegram:** `https://t.me/+vyNGKyTygNY1ODQx`
- **WhatsApp:** `https://chat.whatsapp.com/KPQjKZF3LfMEbH9dDo7u11`
- **Google Drive:** Link da pasta com os 3 ebooks

## 📄 Licença

Todos os direitos reservados - NeuroHack ENEM 2025

