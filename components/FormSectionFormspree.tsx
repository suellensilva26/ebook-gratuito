'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const FORMSPREE_ID = 'mvgdzwvy'
const TELEGRAM_LINK = 'https://t.me/+vyNGKyTygNY1ODQx'
const WHATSAPP_LINK = 'https://chat.whatsapp.com/KPQjKZF3LfMEbH9dDo7u11?mode=ems_copy_t'

export default function FormSectionFormspree() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [agreed, setAgreed] = useState(false)
  const router = useRouter()

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setMessage('')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim()) {
      setMessage('❌ Preencha todos os campos!')
      return
    }

    if (!agreed) {
      setMessage('❌ Você precisa concordar para continuar')
      return
    }
    
    setLoading(true)
    setMessage('⏳ Processando...')
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nome.trim(),
          email: formData.email.trim(),
          phone: formData.telefone.trim(),
        })
      })

      if (response.ok) {
        setMessage('✅ Enviado com sucesso! Confira seu email em alguns minutos.')
        
        // Track analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: 'ebook_form_formspree'
          })
        }
        
        // Limpa formulário
        setFormData({ nome: '', email: '', telefone: '' })
        
        // Redireciona após 3s
        setTimeout(() => {
          router.push('/sucesso?cupom=NEURO100')
        }, 3000)
      } else {
        setMessage('❌ Erro ao enviar. Tente novamente!')
      }
    } catch (error: any) {
      setMessage(`❌ Erro de conexão: ${error.message || 'Verifique sua internet'}`)
    } finally {
      setLoading(false)
    }
  }

  const sendWhatsApp = () => {
    if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim()) {
      setMessage('❌ Preencha todos os campos primeiro!')
      return
    }

    const msg = `Oi! Meu nome é ${formData.nome}, meu email é ${formData.email} e meu WhatsApp é ${formData.telefone}. Quero receber os 3 ebooks grátis!`
    window.open(WHATSAPP_LINK, '_blank')
  }

  return (
    <section id="form" className="py-20 bg-gradient-to-b from-dark to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto glass rounded-2xl p-8 md:p-12 border border-gold/30"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-8 text-gold">
            BAIXE SEUS EBOOKS GRATUITAMENTE
          </h2>
          
          {message && (
            <div className={`mb-6 p-4 rounded-lg text-center font-bold ${
              message.includes('✅') || message.includes('⏳')
                ? 'bg-green-500/20 border border-green-500 text-green-200'
                : 'bg-red-500/20 border border-red-500 text-red-200'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-gray-light mb-2">
                Seu nome completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={(e) => handleChange('nome', e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-gold rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-hover transition-colors"
                placeholder="Digite seu nome completo"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-light mb-2">
                Email para receber os ebooks
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-gold rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-hover transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="telefone" className="block text-gray-light mb-2">
                WhatsApp (com DDD)
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '')
                  if (value.length > 0) {
                    if (value.length <= 2) {
                      value = `(${value}`
                    } else if (value.length <= 7) {
                      value = `(${value.slice(0, 2)}) ${value.slice(2)}`
                    } else if (value.length <= 11) {
                      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
                    } else {
                      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`
                    }
                  }
                  handleChange('telefone', value)
                }}
                required
                className="w-full px-4 py-3 bg-white/10 border border-gold rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-hover transition-colors"
                placeholder="(XX) XXXXX-XXXX"
              />
            </div>
            
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreed"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
                className="mt-1 w-5 h-5 text-gold bg-dark border-gold/30 rounded focus:ring-gold"
              />
              <label htmlFor="agreed" className="text-sm text-gray-light">
                ✓ Concordo em receber conteúdo exclusivo via email/WhatsApp
              </label>
            </div>
            
            <p className="text-xs text-gray-light text-center">
              Sua privacidade é garantida
            </p>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-5 bg-[#d4af37] text-[#0a0a0a] font-bold text-lg rounded-lg shadow-gold-lg hover:bg-[#e5c158] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '⏳ Processando...' : '✅ RECEBER OS 3 EBOOKS AGORA'}
            </button>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#0088cc] text-white font-bold text-center rounded-lg hover:bg-[#006699] transition-colors"
              >
                ✈️ Telegram
              </a>
              <button
                type="button"
                onClick={sendWhatsApp}
                className="px-6 py-4 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1da851] transition-colors"
              >
                💬 WhatsApp
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
