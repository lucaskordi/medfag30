import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import '../styles/globals.css'
import '../styles/fonts.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FAG30 - React Next.js Site',
  description: 'Site criado com React, Next.js, Tailwind CSS e Framer Motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
         return (
           <html lang="pt-BR">
             <body className={montserrat.className}>{children}</body>
           </html>
         )
}
