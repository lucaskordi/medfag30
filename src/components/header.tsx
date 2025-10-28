'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

type MenuType = 'food' | 'drinks' | 'desserts'

interface HeaderProps {
  activeMenu: MenuType
  setActiveMenu: (menu: MenuType) => void
}

export default function Header({ activeMenu, setActiveMenu }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: 'food', label: 'Food' },
    { id: 'drinks', label: 'Carta de Drinks' },
    { id: 'desserts', label: 'Sobremesas' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const selectMenu = (menuId: MenuType) => {
    setActiveMenu(menuId)
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4 relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Image
              src="/logofrozen.png"
              alt="Frozen Sunset Logo"
              width={200}
              height={100}
              className="drop-shadow-lg"
            />
          </motion.div>

          <div className="absolute right-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="backdrop-blur-sm text-white px-4 sm:px-6 py-3 rounded-xl text-lg font-semibold border border-green-300/30 hover:bg-green-600/20 transition-all duration-300"
              style={{ backgroundColor: 'rgba(97, 111, 38, 0.4)' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1">
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-0.5 bg-white"
                  />
                  <motion.div
                    animate={{ opacity: isMenuOpen ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-0.5 bg-white"
                  />
                  <motion.div
                    animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-0.5 bg-white"
                  />
                </div>
                <span className="hidden sm:inline">Menu</span>
              </div>
            </motion.button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full mt-2 right-0 backdrop-blur-mobile rounded-xl border border-green-300/30 shadow-2xl overflow-hidden min-w-[200px]"
                  style={{ backgroundColor: 'rgba(97, 111, 38, 0.6)' }}
                >
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                      onClick={() => selectMenu(item.id as MenuType)}
                      className={`w-full px-6 py-4 text-left text-white font-semibold transition-colors duration-200 border-b border-white/10 last:border-b-0 ${
                        activeMenu === item.id ? 'bg-white/20' : ''
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  )
}