"use client"

import { motion } from "framer-motion"
import { Database, Compass, BarChart3, ArrowRight, Bot, Globe, Users } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"

export function OpeningSlide() {
  return (
    <SlideWrapper id="opening">
      <div className="min-h-screen bg-gradient-to-br from-[#143B6D] via-[#0f2d52] to-[#0a1f3a] flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#50B878]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#5B5CE2]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <span className="text-white/80 text-sm">Proposition de mandat</span>
            <span className="px-2 py-0.5 bg-[#50B878] text-white text-xs font-bold rounded-full">17 500 $ + taxes</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance"
          >
            Agent IA Laval Économique
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Connecter le site, les données et les intentions des entrepreneurs.
          </motion.p>

          {/* Short description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-white/60 mb-12 max-w-xl mx-auto"
          >
            Une solution IA pour orienter les visiteurs, comprendre leurs besoins et préparer les suivis de l&apos;équipe.
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
            ].map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <item.icon className="w-4 h-4 text-[#50B878]" />
                <span className="text-white text-sm font-medium">{item.label}</span>
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
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/60 text-xs">{item.label}</span>
                </div>
                {index < 5 && <ArrowRight className="w-4 h-4 text-white/40 hidden md:block" />}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
