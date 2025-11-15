'use client'

import { motion } from 'framer-motion'
import CountdownTimer from './CountdownTimer'

export default function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-diagonal" />
      <div className="absolute inset-0 bg-gradient-to-b from-orange-urgent/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-gold">
            ÚLTIMA CHANCE PARA APROVEITAR
          </h2>
          
          <div className="mb-6">
            <p className="text-xl text-gray-light mb-4">⏰ Oferta válida por:</p>
            <div className="flex justify-center">
              <CountdownTimer />
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-2xl text-gray-light mb-2">
              Valor antigo:{' '}
              <span className="line-through text-gray-500">R$891</span>
            </p>
            <p className="text-4xl md:text-5xl font-bold text-gold">GRÁTIS</p>
          </div>
          
          <p className="text-xl text-gray-light mb-8">
            Você está a <span className="text-gold font-bold">1 clique</span> de
            transformar sua preparação ENEM
          </p>
          
          <motion.a
            href="#form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'cta_click', {
                  event_category: 'engagement',
                  event_label: 'final_cta'
                })
              }
            }}
            className="inline-block px-12 py-6 bg-gold text-dark font-bold text-2xl rounded-lg shadow-gold-lg hover:bg-gold-hover transition-all duration-300 animate-pulse"
          >
            SIM, QUERO BAIXAR AGORA
          </motion.a>
          
          <p className="mt-6 text-gray-light">
            Ou{' '}
            <a href="#form" className="text-gold underline hover:text-gold-hover">
              mais informações
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

