'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const drinksItems = [
  {
    id: 1,
    name: 'Maracujito Chill',
    base: 'Rum branco',
    touches: 'maracujá, hortelã e xarope artesanal de gengibre',
    aesthetic: 'amarelo intenso com raspas de limão e folha de hortelã congelada dentro'
  },
  {
    id: 2,
    name: 'Coco Dream',
    base: 'Vodka',
    touches: 'leite de coco, limão siciliano e toque de baunilha artesanal',
    aesthetic: 'degradê branco e creme com raspas de limão e pitadas douradas'
  },
  {
    id: 3,
    name: 'Manga Rosa',
    base: 'Gin + licor de pêssego',
    touches: 'manga, hibisco e flor de sal',
    aesthetic: 'rosa vibrante e dourado, com brilho comestível e flor seca'
  },
  {
    id: 4,
    name: 'Sunset 43',
    base: 'Licor 43',
    touches: 'limão-taiti, raspas de laranja e leve toque de mel',
    aesthetic: 'dourado-âmbar com rodelas finas de limão desidratado'
  },
  {
    id: 5,
    name: 'Pitaya Punch',
    base: 'Vodka + licor de amora',
    touches: 'pitaya e hortelã',
    aesthetic: 'roxo-pink intenso com pedrinhas de gelo translúcidas coloridas'
  },
  {
    id: 6,
    name: 'Frozen Verde Limão',
    base: 'Cachaça artesanal',
    touches: 'limão tahiti, mel e manjericão',
    aesthetic: 'verde neon com folhas inteiras de manjericão'
  }
]

export default function DrinksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(-1) // -1 para mostrar card inicial

  const nextItem = () => {
    if (currentIndex === -1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex((prev) => (prev + 1) % drinksItems.length)
    }
  }

  const prevItem = () => {
    if (currentIndex === 0) {
      setCurrentIndex(-1)
    } else {
      setCurrentIndex((prev) => (prev - 1 + drinksItems.length) % drinksItems.length)
    }
  }

  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="backdrop-blur-md rounded-2xl p-8 border border-orange-300/30 shadow-2xl w-full max-w-5xl mx-4" style={{ backgroundColor: 'rgba(214, 61, 14, 0.4)' }}>
        <h2 className="text-3xl font-bold text-white mb-6 text-center font-sink uppercase">
          Carta de Drinks
        </h2>
        
        <div className="relative overflow-hidden">
          {currentIndex === -1 ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white font-sink uppercase">
                    Drinks Servidos em
                  </h3>
                  <h3 className="text-2xl font-bold text-white font-sink uppercase">
                    Copos Acrílicos com Glitter Holográfico
                  </h3>
                  <h3 className="text-2xl font-bold text-white font-sink uppercase">
                    Decorações com Frutas Frescas
                  </h3>
                  <h3 className="text-2xl font-bold text-white font-sink uppercase">
                    Ervas Congeladas
                  </h3>
                </div>
              </div>
            </motion.div>
          ) : (
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
                  {drinksItems[currentIndex].name}
                </h3>
                
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Base:</h4>
                    <p className="text-white/90">{drinksItems[currentIndex].base}</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Toques:</h4>
                    <p className="text-white/90">{drinksItems[currentIndex].touches}</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Estética:</h4>
                    <p className="text-white/90">{drinksItems[currentIndex].aesthetic}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
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
            <button
              onClick={() => setCurrentIndex(-1)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentIndex === -1 ? 'bg-white' : 'bg-white/40'
              }`}
            />
            {drinksItems.map((_, index) => (
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
