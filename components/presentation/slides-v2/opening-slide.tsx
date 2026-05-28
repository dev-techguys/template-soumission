"use client"

import { motion } from "framer-motion"
import { Database, Compass, BarChart3, ArrowRight, Bot, Globe, Users } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import Image from "next/image"

export function OpeningSlide() {
  return (
    <SlideWrapper id="opening">
      <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] flex flex-col px-6 py-8 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#143B6D]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#50B878]/5 rounded-full blur-3xl" />
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
            width={180}
            height={31}
          />
        </motion.div>

        {/* Main content - centered */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1E293B] mb-6"
          >
            <span className="block">Agent IA</span>
            <span className="block text-[#143B6D]">Laval Économique</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-[#475569] mb-12 max-w-2xl mx-auto"
          >
            Connecter le site, les données et les intentions des entrepreneurs.
          </motion.p>

          {/* Three badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {[
              { icon: Compass, label: "Navigation site complet" },
              { icon: Database, label: "Connexion base de données" },
              { icon: BarChart3, label: "Dashboard d'intention" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-full border border-[#E2E8F0]"
              >
                <item.icon className="w-4 h-4 text-[#143B6D]" />
                <span className="text-[#1E293B] text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Flow diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4"
          >
            {[
              { icon: Users, label: "Visiteur" },
              { icon: Bot, label: "Agent IA" },
              { icon: Globe, label: "Site complet" },
              { icon: Database, label: "Base de données" },
              { icon: BarChart3, label: "Dashboard" },
              { icon: Users, label: "Équipe" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center border border-[#E2E8F0]">
                    <item.icon className="w-6 h-6 text-[#143B6D]" />
                  </div>
                  <span className="text-[#64748B] text-xs">{item.label}</span>
                </div>
                {index < 5 && <ArrowRight className="w-4 h-4 text-[#CBD5E1] hidden md:block" />}
              </motion.div>
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
            width={200}
            height={36}
          />
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
