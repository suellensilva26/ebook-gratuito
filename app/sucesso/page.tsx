'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

// Links fixos - sem variáveis de ambiente
const TELEGRAM_LINK = 'https://t.me/+vyNGKyTygNY1ODQx'
const WHATSAPP_LINK = 'https://chat.whatsapp.com/KPQjKZF3LfMEbH9dDo7u11?mode=ems_copy_t'

// Link da pasta do Google Drive com os 3 ebooks
// Pasta: https://drive.google.com/drive/folders/1fgOQQ8UP3z5_50Qm6IrczDfAwzbYyuQ2
// Contém:
// 1. COMO-APRENDER-QUALQUER-CONTEUDO-MESMO-SENDO-BURRO.pdf
// 2. ESTRATEGIAS-SECRETAS-PARA-ACERTAR-QUESTOES-NO-ENEM-MESMO-SEM-TER-ESTUDADO-O-ANO-TODO (1).pdf
// 3. KIT-REVISAO-EXPRESS-ENEM-2025.pdf
const EBOOK_DRIVE_FOLDER = 'https://drive.google.com/drive/folders/1fgOQQ8UP3z5_50Qm6IrczDfAwzbYyuQ2?usp=sharing'

function SucessoContent() {
  const searchParams = useSearchParams()
  const cupom = searchParams.get('cupom') || 'NEURO100'
  const [countdown, setCountdown] = useState(30)

  const appLink = process.env.NEXT_PUBLIC_APP_LINK || `https://teste-enem.netlify.app/?cupom=${cupom}`

  useEffect(() => {
    // Track analytics
    if (typeof window !== 'undefined') {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'ebook_download', {
          event_category: 'conversion',
          event_label: 'success_page'
        })
      }
    }

    // Countdown e redirecionamento automático
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Redireciona para o app com cupom
          window.location.href = appLink
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [appLink])

  const handleAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'redirect_to_app', {
        event_category: 'conversion',
        event_label: 'app_cta_click'
      })
    }
  }

  const handleEbookDownload = (ebookNumber: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ebook_download', {
        event_category: 'download',
        event_label: `ebook_${ebookNumber}`
      })
    }
  }

  return (
    <main className="min-h-screen bg-dark flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto glass rounded-2xl p-8 md:p-12 border border-gold/30 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="text-6xl mb-6"
          >
            ✅
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-gold">
            Seus Ebooks Chegaram!
          </h1>

          <p className="text-xl text-gray-light mb-8">
            Parabéns! Seus 3 ebooks premium estão prontos para download.
          </p>

          {/* Countdown de redirecionamento */}
          <div className="mb-8 p-4 bg-orange-urgent/20 border border-orange-urgent rounded-lg">
            <p className="text-orange-urgent font-bold">
              ⏰ Redirecionamento automático em {countdown}s para o app com cupom {cupom}
            </p>
          </div>

          {/* Download Links */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Baixe Seus Ebooks:
            </h2>
            
            {/* Botão principal para abrir pasta do Google Drive */}
            <a
              href={EBOOK_DRIVE_FOLDER}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                handleEbookDownload(1)
                handleEbookDownload(2)
                handleEbookDownload(3)
              }}
              className="block w-full px-8 py-6 bg-gold text-dark font-bold text-lg rounded-lg hover:bg-gold-hover transition-colors shadow-gold-lg text-center mb-4"
            >
              📚 ABRIR PASTA COM OS 3 EBOOKS
            </a>
            
            {/* Lista dos 3 ebooks */}
            <div className="space-y-3">
              <div className="px-4 py-3 bg-gold/10 border border-gold/30 rounded-lg">
                <span className="text-2xl mr-3">📊</span>
                <span className="font-bold text-gold">1. Os Padrões Escondidos do ENEM</span>
              </div>
              
              <div className="px-4 py-3 bg-gold/10 border border-gold/30 rounded-lg">
                <span className="text-2xl mr-3">⚡</span>
                <span className="font-bold text-gold">2. Protocolo de Aprendizagem Acelerada</span>
              </div>
              
              <div className="px-4 py-3 bg-gold/10 border border-gold/30 rounded-lg">
                <span className="text-2xl mr-3">🧠</span>
                <span className="font-bold text-gold">3. Neurohack Cerebral</span>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-blue-500/20 border border-blue-500 rounded-lg">
              <p className="text-sm text-blue-200 text-center">
                📱 <strong>Como baixar no celular:</strong>
              </p>
              <ol className="text-sm text-blue-200 mt-2 text-left list-decimal list-inside space-y-1">
                <li>Clique no botão &quot;ABRIR PASTA COM OS 3 EBOOKS&quot; acima</li>
                <li>A pasta do Google Drive abrirá com os 3 PDFs</li>
                <li>Toque em cada PDF para visualizar</li>
                <li>No canto superior direito, toque nos 3 pontos (⋮)</li>
                <li>Selecione &quot;Fazer download&quot; para salvar no celular</li>
              </ol>
            </div>
          </div>

          {/* Bonus Links */}
          <div className="space-y-4 mb-8 pt-8 border-t border-gold/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Bônus Exclusivos:
            </h2>
            
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-4 bg-[#0088cc] text-white font-bold rounded-lg hover:bg-[#006699] transition-colors"
            >
              ✈️ Entrar no Grupo VIP Telegram
            </a>
            
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-4 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1da851] transition-colors"
            >
              💬 Entrar no Grupo VIP WhatsApp
            </a>
          </div>

          {/* App CTA */}
          <div className="glass rounded-lg p-6 border border-gold/30 mb-8">
            <h3 className="text-xl font-bold text-gold mb-2">
              🎁 Cupom Exclusivo: {cupom}
            </h3>
            <p className="text-gray-light mb-4">
              Aproveite <span className="text-gold font-bold">R$100 OFF</span> no
              app completo. De R$197 por apenas{' '}
              <span className="text-gold font-bold">R$97</span>
            </p>
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAppClick}
              className="inline-block px-8 py-4 bg-gold text-dark font-bold rounded-lg hover:bg-gold-hover transition-colors shadow-gold"
            >
              QUERO O APP COM DESCONTO
            </a>
            <p className="text-sm text-gray-light mt-2">
              ⏰ Oferta válida HOJE até 23h59
            </p>
          </div>

          <Link
            href="/"
            className="text-gray-light hover:text-gold transition-colors"
          >
            ← Voltar para a página inicial
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

export default function SucessoPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-gold text-xl">Carregando...</div>
      </div>
    }>
      <SucessoContent />
    </Suspense>
  )
}
