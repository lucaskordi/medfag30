'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const foodItems = [
  {
    id: 1,
    name: 'Ceviche de peixe branco e maracujá',
    description: 'Servido em mini taças translúcidas com chips de batata-doce espetados.',
    presentation: 'Mini taças translúcidas com chips de batata-doce'
  },
  {
    id: 2,
    name: 'Mini tostadas de polvo com guacamole cítrico',
    description: 'Servidas sobre bases de mini tortilhas crocantes, finalizadas com brotos e flor comestível.',
    presentation: 'Mini tortilhas crocantes com brotos e flor comestível'
  },
  {
    id: 3,
    name: 'Espetinhos de camarão com aioli de páprica defumada',
    description: 'Servidos em cones de papel vegetal, com farofinha crocante e ervas secas.',
    presentation: 'Cones de papel vegetal com farofinha crocante'
  },
  {
    id: 4,
    name: 'Bruschettas de tapenade e tomate confit',
    description: 'Em pão artesanal tostado, com azeite trufado e tomatinhos coloridos.',
    presentation: 'Pão artesanal tostado com azeite trufado'
  },
  {
    id: 5,
    name: 'Mini bowl de couscous marroquino',
    description: 'Com legumes grelhados e limão siciliano, servido frio em porções individuais com toque de hortelã fresca.',
    presentation: 'Porções individuais com hortelã fresca'
  },
  {
    id: 6,
    name: 'Tacos mini de frango ao curry',
    description: 'Com sour cream de limão, montados na hora, com cores vibrantes e aroma marcante.',
    presentation: 'Montados na hora com cores vibrantes'
  }
]

export default function FoodCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % foodItems.length)
  }

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + foodItems.length) % foodItems.length)
  }

  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="backdrop-blur-md rounded-2xl p-8 border border-orange-300/30 shadow-2xl w-full max-w-5xl mx-4" style={{ backgroundColor: 'rgba(214, 61, 14, 0.4)' }}>
        <h2 className="text-3xl font-bold text-white mb-6 text-center font-sink uppercase">
          Food Menu
        </h2>
        <p className="text-white/80 text-center mb-8">
          Serviço em mini bowls de cerâmica artesanal colorida e copinhos biodegradáveis, 
          em bancadas de madeira e ilhas montadas com estética de festival.
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
                {foodItems[currentIndex].name}
              </h3>
              <p className="text-white/90 mb-4 text-lg">
                {foodItems[currentIndex].description}
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/80 font-semibold">
                  Apresentação: {foodItems[currentIndex].presentation}
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
            {foodItems.map((_, index) => (
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
