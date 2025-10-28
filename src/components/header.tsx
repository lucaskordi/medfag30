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
    <>
             <motion.header
               initial={{ y: -100 }}
               animate={{ y: 0 }}
               transition={{ duration: 0.6, ease: 'easeOut' }}
               className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-sm"
             >
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex justify-between items-center py-4 sm:py-6">
                   <motion.div
                     whileHover={{ scale: 1.05 }}
                     className="flex items-center"
                   >
                     <Image
                       src="/logofrozen.png"
                       alt="Frozen Sunset Logo"
                       width={200}
                       height={100}
                       className="drop-shadow-lg h-10 sm:h-28 w-auto"
                     />
                   </motion.div>

                   <div>
                     <motion.button
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={toggleMenu}
                       className="backdrop-blur-sm text-white px-2 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-lg font-semibold border border-green-300/30 hover:bg-green-600/20 transition-all duration-300"
                       style={{ backgroundColor: 'rgba(97, 111, 38, 0.4)' }}
                     >
                       <div className="flex items-center gap-2 sm:gap-3">
                         <div className="flex flex-col gap-1">
                           <motion.div
                             animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                             transition={{ duration: 0.3 }}
                             className="w-4 h-0.5 sm:w-5 sm:h-0.5 bg-white"
                           />
                           <motion.div
                             animate={{ opacity: isMenuOpen ? 0 : 1 }}
                             transition={{ duration: 0.3 }}
                             className="w-4 h-0.5 sm:w-5 sm:h-0.5 bg-white"
                           />
                           <motion.div
                             animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                             transition={{ duration: 0.3 }}
                             className="w-4 h-0.5 sm:w-5 sm:h-0.5 bg-white"
                           />
                         </div>
                         <span className="hidden sm:inline font-montserrat">Menu</span>
                       </div>
                     </motion.button>

              <AnimatePresence>
                {isMenuOpen && (
                  <>
                    {/* Desktop Menu */}
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="hidden sm:block absolute top-full mt-2 right-0 backdrop-blur-mobile rounded-xl border border-green-300/30 shadow-2xl overflow-hidden min-w-[200px]"
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
                                 className={`w-full px-6 py-4 text-left text-white font-semibold transition-colors duration-200 border-b border-white/10 last:border-b-0 font-montserrat ${
                                   activeMenu === item.id ? 'bg-white/20' : ''
                                 }`}
                        >
                          {item.label}
                        </motion.button>
                      ))}
                    </motion.div>

                    {/* Mobile Fullpage Menu */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="sm:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                      onClick={toggleMenu}
                    >
                      <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-green-900/90 to-green-800/80 backdrop-blur-xl rounded-b-3xl p-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex flex-col items-center space-y-6 pt-8">
                          <div className="relative w-full flex justify-end">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={toggleMenu}
                              className="bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </motion.button>
                          </div>

                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-2"
                          >
                            <Image
                              src="/formologo.svg"
                              alt="FAG30 Logo"
                              width={80}
                              height={80}
                              className="drop-shadow-lg"
                            />
                          </motion.div>

                          <div className="w-full space-y-3 pb-8">
                            {menuItems.map((item, index) => (
                              <motion.button
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => selectMenu(item.id as MenuType)}
                                       className={`w-full py-4 px-6 text-center text-white font-bold text-lg rounded-2xl transition-all duration-300 font-montserrat ${
                                         activeMenu === item.id 
                                           ? 'bg-white/30 border-2 border-white/50' 
                                           : 'bg-white/10 border-2 border-white/20 hover:bg-white/20'
                                       }`}
                              >
                                {item.label}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  )
}