'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const foodItems = [
  {
    id: 1,
    name: 'Ceviche De Peixe Branco E Maracujá',
    description: 'Servido Em Mini Taças Translúcidas Com Chips De Batata-Doce Espetados.',
    presentation: 'Mini Taças Translúcidas Com Chips De Batata-Doce'
  },
  {
    id: 2,
    name: 'Mini Tostadas De Polvo Com Guacamole Cítrico',
    description: 'Servidas Sobre Bases De Mini Tortilhas Crocantes, Finalizadas Com Brotos E Flor Comestível.',
    presentation: 'Mini Tortilhas Crocantes Com Brotos E Flor Comestível'
  },
  {
    id: 3,
    name: 'Espetinhos De Camarão Com Aioli De Páprica Defumada',
    description: 'Servidos Em Cones De Papel Vegetal, Com Farofinha Crocante E Ervas Secas.',
    presentation: 'Cones De Papel Vegetal Com Farofinha Crocante'
  },
  {
    id: 4,
    name: 'Bruschettas De Tapenade E Tomate Confit',
    description: 'Em Pão Artesanal Tostado, Com Azeite Trufado E Tomatinhos Coloridos.',
    presentation: 'Pão Artesanal Tostado Com Azeite Trufado'
  },
  {
    id: 5,
    name: 'Mini Bowl De Couscous Marroquino',
    description: 'Com Legumes Grelhados E Limão Siciliano, Servido Frio Em Porções Individuais Com Toque De Hortelã Fresca.',
    presentation: 'Porções Individuais Com Hortelã Fresca'
  },
  {
    id: 6,
    name: 'Tacos Mini De Frango Ao Curry',
    description: 'Com Sour Cream De Limão, Montados Na Hora, Com Cores Vibrantes E Aroma Marcante.',
    presentation: 'Montados Na Hora Com Cores Vibrantes'
  }
]

export default function FoodCarousel() {
  const [currentIndex, setCurrentIndex] = useState(-1) // -1 para mostrar card inicial

  const nextItem = () => {
    if (currentIndex === -1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex((prev) => (prev + 1) % foodItems.length)
    }
  }

  const prevItem = () => {
    if (currentIndex === 0) {
      setCurrentIndex(-1)
    } else {
      setCurrentIndex((prev) => (prev - 1 + foodItems.length) % foodItems.length)
    }
  }

  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="backdrop-blur-md rounded-2xl p-8 border border-orange-300/30 shadow-2xl w-full max-w-5xl mx-4" style={{ backgroundColor: 'rgba(214, 61, 14, 0.4)' }}>
        <h2 className="text-3xl font-bold text-white mb-6 text-center font-sink uppercase">
          Food Menu
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
                  <h3 className="text-2xl font-bold text-white font-montserrat">
                    Serviço em mini bowls de cerâmica artesanal colorida
                  </h3>
                  <h3 className="text-2xl font-bold text-white font-montserrat">
                    E copinhos biodegradáveis
                  </h3>
                  <h3 className="text-2xl font-bold text-white font-montserrat">
                    Em bancadas de madeira e ilhas montadas
                  </h3>
                  <h3 className="text-2xl font-bold text-white font-montserrat">
                    Com estética de festival
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
                  {foodItems[currentIndex].name}
                </h3>
                <p className="text-white/90 mb-4 text-lg font-montserrat">
                  {foodItems[currentIndex].description}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex justify-center items-center mt-8 gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevItem}
            className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-200 shadow-lg"
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
            className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-200 shadow-lg"
          >
            →
          </motion.button>
        </div>
      </div>
    </div>
  )
}
