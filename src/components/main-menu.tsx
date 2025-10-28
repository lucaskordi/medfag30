'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from './header'
import FoodCarousel from './food-carousel'
import DrinksCarousel from './drinks-carousel'
import DessertsCarousel from './desserts-carousel'

type MenuType = 'food' | 'drinks' | 'desserts'

export default function MainMenu() {
  const [activeMenu, setActiveMenu] = useState<MenuType>('food')

  return (
    <>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className="min-h-screen flex items-center justify-center px-4 pt-24">
        <motion.div
          key={activeMenu}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          {activeMenu === 'food' && <FoodCarousel />}
          {activeMenu === 'drinks' && <DrinksCarousel />}
          {activeMenu === 'desserts' && <DessertsCarousel />}
        </motion.div>
      </div>
    </>
  )
}