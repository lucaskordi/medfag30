'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-black/40 backdrop-blur-sm text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 font-sink"
            >
              FAG30
            </motion.h3>
            <p className="text-white/80">
              Site moderno criado com as melhores tecnologias web.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-white/80">
              {['Home', 'Sobre', 'Serviços', 'Contato'].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="cursor-pointer hover:text-white transition-colors duration-200"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <p className="text-white/80 mb-2">Email: contato@fag30.com</p>
            <p className="text-white/80">Telefone: (11) 99999-9999</p>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-8 pt-8 text-center text-white/80"
        >
          <p>&copy; 2024 FAG30. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
