'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const dessertsItems = [
  {
    id: 1,
    name: 'Mini paletas de cheesecake com frutas vermelhas',
    description: 'Servidas em pequenas formas de picolé, remetendo ao conceito "frozen".',
    presentation: 'Pequenas formas de picolé com conceito frozen'
  },
  {
    id: 2,
    name: 'Copinhos de mousse de coco e maracujá com crumble salgado',
    description: 'Apresentação em copinhos translúcidos com decoração minimalista.',
    presentation: 'Copinhos translúcidos com decoração minimalista'
  }
]

export default function DessertsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % dessertsItems.length)
  }

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + dessertsItems.length) % dessertsItems.length)
  }

  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="backdrop-blur-md rounded-2xl p-8 border border-orange-300/30 shadow-2xl w-full max-w-5xl mx-4" style={{ backgroundColor: 'rgba(214, 61, 14, 0.4)' }}>
        <h2 className="text-3xl font-bold text-white mb-6 text-center font-sink uppercase">
          Sobremesas
        </h2>
        <p className="text-white/80 text-center mb-8">
          Doces únicos com apresentação especial e sabores marcantes.
        </p>
        
        <div className="relative overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 font-sink uppercase">
                {dessertsItems[currentIndex].name}
              </h3>
              <p className="text-white/90 mb-4 text-lg">
                {dessertsItems[currentIndex].description}
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/80 font-semibold">
                  Apresentação: {dessertsItems[currentIndex].presentation}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center items-center mt-8 gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevItem}
            className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            ←
          </motion.button>
          
          <div className="flex gap-2">
            {dessertsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextItem}
            className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            →
          </motion.button>
        </div>
      </div>
    </div>
  )
}
