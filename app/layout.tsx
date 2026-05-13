import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Groupe Laplante - Plateforme AutoFinance | TechGuys',
  description: 'Proposition de développement de la plateforme AutoFinance pour Groupe Laplante — Internalisez votre financement automobile par TechGuys',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-[#0A0A0A]">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0A0A0A]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
