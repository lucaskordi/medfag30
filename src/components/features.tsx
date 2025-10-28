'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'React',
    description: 'Biblioteca JavaScript para construir interfaces de usuário',
    icon: '⚛️',
  },
  {
    title: 'Next.js',
    description: 'Framework React para produção com recursos avançados',
    icon: '🚀',
  },
  {
    title: 'Tailwind CSS',
    description: 'Framework CSS utilitário para design rápido e responsivo',
    icon: '🎨',
  },
  {
    title: 'Framer Motion',
    description: 'Biblioteca de animações para React com performance otimizada',
    icon: '✨',
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg font-sink">
            Tecnologias Utilizadas
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Este projeto utiliza as melhores tecnologias modernas para criar uma experiência excepcional
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
