'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    text: 'Estava com 450 pontos em matemática. Depois dos padrões, virou 780. Simplesmente funcionou.',
    rating: 5,
    badge: 'Aprovada em Medicina',
    avatar: '👩‍⚕️',
  },
  {
    name: 'João Santos',
    location: 'Rio de Janeiro, RJ',
    text: 'Procrastinador de ouro. Com o neurohack, virei máquina. Minha nota subiu 300 pontos em 2 meses.',
    rating: 5,
    badge: 'Aprovado em Engenharia',
    avatar: '👨‍🔧',
  },
  {
    name: 'Ana Costa',
    location: 'Belo Horizonte, MG',
    text: 'Redação era meu terror. Depois da fórmula científica, tirei 920. Não acreditei.',
    rating: 5,
    badge: 'Aprovada em Direito',
    avatar: '👩‍⚖️',
  },
]

const stats = [
  { label: 'alunos', value: '4.321' },
  { label: 'aprovados', value: '3.241' },
  { label: 'Média', value: '+250 pontos' },
  { label: 'Satisfação', value: '98.7%' },
]

export default function Testimonials() {
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
          O QUE NOSSOS ALUNOS DIZEM
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass rounded-2xl p-6 border border-gold/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-3xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-light">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-light mb-4">{testimonial.text}</p>
              <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-sm rounded-full border border-gold/30">
                {testimonial.badge}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 border border-gold/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-light text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

