'use client'

import { motion } from 'framer-motion'
import CountdownTimer from './CountdownTimer'

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden gradient-diagonal">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-gold/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 bg-gold/20 border border-gold rounded-full text-gold font-bold text-sm md:text-base"
            >
              ⚡ BLACK FRIDAY ENEM 2025
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold mb-6 leading-tight"
            >
              GARANTA SEU ACESSO{' '}
              <span className="text-gold">AGORA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-light mb-6"
            >
              3 Ebooks Premium + Mega Bônus{' '}
              <span className="line-through text-gray-500">(R$891 de valor)</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-lg mb-3 text-gray-light">Oferta válida por:</p>
              <CountdownTimer />
            </motion.div>

            <motion.a
              href="#form"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'cta_click', {
                    event_category: 'engagement',
                    event_label: 'hero_cta'
                  })
                }
              }}
              className="inline-block px-8 py-5 bg-gold text-dark font-bold text-lg md:text-xl rounded-lg shadow-gold-lg hover:bg-gold-hover transition-all duration-300 animate-pulse"
            >
              BAIXAR GRATUITAMENTE AGORA
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-8 flex items-center justify-center md:justify-start gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gold border-2 border-dark"
                  />
                ))}
              </div>
              <p className="text-gray-light">
                <span className="text-gold font-bold">4.321</span> alunos já
                baixaram
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:block relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-gold/20 to-dark rounded-2xl glass p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📚</div>
                <p className="text-gold font-bold text-xl">3 Ebooks Premium</p>
                <p className="text-gray-light mt-2">Prontos para Download</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

