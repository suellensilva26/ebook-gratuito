'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Como faço para baixar os ebooks?',
    answer:
      'Basta preencher o formulário com seu email. Os 3 ebooks chegam instantaneamente no seu email + você recebe link direto para baixar.',
  },
  {
    question: 'Quanto tempo for lê-los?',
    answer:
      'Você pode ler em 1-2 horas (cada um tem ~30 páginas), ou ir absorvendo conforme estuda.',
  },
  {
    question: 'Posso usar os padrões em provas anteriores?',
    answer:
      'Sim! Os padrões valem para QUALQUER simulado, ENEM anterior ou prova de vestibular.',
  },
  {
    question: 'Depois de baixar, vou ser perseguido por vendas?',
    answer:
      'Não. Você receberá 1-2 mensagens oferecendo o app com cupom R$97 (normal: R$197). Depois, silêncio respeitoso.',
  },
  {
    question: 'E se eu não gostar?',
    answer:
      'Os ebooks são simples. Se não servir, ao menos aprendeu algo novo. Sem garantia de reembolso, pois são digitais.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-dark to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-gold"
        >
          PERGUNTAS FREQUENTES
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-lg border border-gold/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gold/10 transition-colors"
              >
                <span className="font-bold text-white pr-4">{faq.question}</span>
                <span className="text-gold text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-light border-t border-gold/20">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

