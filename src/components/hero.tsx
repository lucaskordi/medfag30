'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg font-sink"
          >
            Bem-vindo ao{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              FAG30
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md"
          >
            Um site moderno criado com React, Next.js, Tailwind CSS e Framer Motion.
            Descubra as possibilidades infinitas da web moderna.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors duration-200 border border-white/30 backdrop-blur-sm"
            >
              Explorar
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/50 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
            >
              Saiba Mais
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-full max-w-4xl h-64 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="text-white text-6xl drop-shadow-lg"
            >
              ⚡
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
