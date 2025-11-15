import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700', '800'],
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: '3 Ebooks Premium ENEM 2025 - Download Grátis | NeuroHack',
  description: 'Baixe gratuitamente 3 ebooks premium sobre preparação ENEM 2025. Padrões escondidos, protocolo acelerado e neurohack cerebral. Oferta limitada!',
  keywords: 'ENEM 2025, ebooks grátis, preparação ENEM, padrões ENEM, neurohack, estudo acelerado',
  openGraph: {
    title: '3 Ebooks Premium ENEM 2025 - Download Grátis',
    description: 'Baixe gratuitamente 3 ebooks premium sobre preparação ENEM 2025',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Ebooks Premium ENEM 2025 - Download Grátis',
    description: 'Baixe gratuitamente 3 ebooks premium sobre preparação ENEM 2025',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#d4af37',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}

