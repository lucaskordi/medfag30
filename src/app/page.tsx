'use client'

import { motion } from 'framer-motion'
import VideoBackground from '@/components/video-background'
import MainMenu from '@/components/main-menu'

export default function Home() {
  return (
    <>
      <VideoBackground />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 min-h-screen"
      >
        <MainMenu />
      </motion.main>
    </>
  )
}
