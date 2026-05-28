"use client"

import { motion } from "framer-motion"
import { Database, Compass, BarChart3 } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import Image from "next/image"

export function OpeningSlide() {
  return (
    <SlideWrapper id="opening">
      <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] flex flex-col px-4 md:px-6 py-6 md:py-8 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-48 md:w-96 h-48 md:h-96 bg-[#143B6D]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-[#50B878]/5 rounded-full blur-3xl" />
        </div>

        {/* Top left - Laval Économique logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Image
            src="/images/laval-economique-logo.svg"
            alt="Laval Économique"
            width={280}
            height={48}
            className="w-[180px] md:w-[240px] lg:w-[280px] h-auto"
          />
        </motion.div>

        {/* Main content - centered */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto text-center px-2">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#1E293B] mb-4 md:mb-6"
          >
            <span className="block">Agent IA</span>
            <span className="block text-[#143B6D]">Laval Économique</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#475569] mb-8 md:mb-12 max-w-2xl mx-auto px-2"
          >
            Connecter le site, les données et les intentions des visiteurs.
          </motion.p>

          {/* Three badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 w-full"
          >
            {[
              { icon: Compass, label: "Navigation sur le site complet" },
              { icon: Database, label: "Connexion à la base de données" },
              { icon: BarChart3, label: "Tableau de bord d'intention" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white shadow-sm rounded-full border border-[#E2E8F0]"
              >
                <item.icon className="w-4 h-4 text-[#143B6D] flex-shrink-0" />
                <span className="text-[#1E293B] text-xs sm:text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom center - Omnigo TechGuys logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="relative z-10 flex justify-center pb-4"
        >
          <Image
            src="/images/techguys-omnigo-light.png"
            alt="TechGuys x OMNIGO"
            width={320}
            height={58}
            className="w-[200px] md:w-[260px] lg:w-[320px] h-auto"
          />
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
