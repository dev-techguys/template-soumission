import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto" 
});

const robotoMono = Roboto_Mono({ 
  subsets: ["latin"], 
  variable: "--font-roboto-mono" 
});

export const metadata: Metadata = {
  title: 'Groupe Laplante - Plateforme AutoFinance | TechGuys',
  description: 'Proposition de développement de la plateforme AutoFinance pour Groupe Laplante - Internalisez votre financement automobile par TechGuys',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-black">
      <body className={`${roboto.variable} ${robotoMono.variable} font-sans antialiased bg-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
