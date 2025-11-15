'use client'

import { motion } from 'framer-motion'

const ebooks = [
  {
    icon: '📊',
    title: 'Os Padrões Escondidos do ENEM',
    description:
      'Decodifique a lógica matemática que repete há 15 anos. Aumente sua nota em até 40% apenas entendendo os padrões.',
    value: 'R$297',
    features: [
      '✅ 15 anos de análise',
      '✅ 3 milhões de respostas decodificadas',
      '✅ 89 padrões identificados',
    ],
  },
  {
    icon: '⚡',
    title: 'Protocolo Completo de Aprendizagem Acelerada',
    description:
      '40 minutos para dominar qualquer tópico. Sistema científico de neuroplasticidade que aumenta retenção em 200%.',
    value: 'R$297',
    features: [
      '✅ 6 fases de aprendizado',
      '✅ Active recall brutal',
      '✅ Retenção permanente',
    ],
  },
  {
    icon: '🧠',
    title: 'Neurohack Cerebral - Máquina de Aprovação',
    description:
      'Hackear seu próprio cérebro com neurociência pura. 86 bilhões de neurônios em seu favor com mudanças neurais em apenas 15 minutos.',
    value: 'R$297',
    features: [
      '✅ Ciclos de neuroplasticidade',
      '✅ Spaced repetition científica',
      '✅ Chunks cognitivos otimizados',
    ],
  },
]

export default function EbooksSection() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-gold"
        >
          OS 3 EBOOKS QUE VOCÊ RECEBE
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((ebook, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-8 border border-gold/30 hover:border-gold transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">{ebook.icon}</div>
              <h3 className="text-xl font-poppins font-bold mb-4 text-gold text-center">
                {ebook.title}
              </h3>
              <p className="text-gray-light mb-6 text-center">
                {ebook.description}
              </p>
              <div className="mb-4">
                <p className="text-gold font-bold text-lg text-center">
                  Valor: <span className="line-through text-gray-500">{ebook.value}</span>
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                {ebook.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-light">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#form"
            className="inline-block px-8 py-4 bg-gold text-dark font-bold text-lg rounded-lg shadow-gold hover:bg-gold-hover transition-all duration-300"
          >
            SIM, QUERO OS 3 EBOOKS AGORA
          </a>
        </motion.div>
      </div>
    </section>
  )
}

