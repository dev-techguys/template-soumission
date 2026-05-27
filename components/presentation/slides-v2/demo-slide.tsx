"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare, Database, BarChart3, Play, Bot } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"

const tabs = [
  { id: "conversation", label: "Conversation", icon: MessageSquare },
  { id: "database", label: "Base de données", icon: Database },
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
]

export function DemoSlide() {
  const [activeTab, setActiveTab] = useState("conversation")

  return (
    <SlideWrapper id="demo">
      <div className="min-h-screen bg-gradient-to-br from-[#143B6D] via-[#0f2d52] to-[#0a1f3a] flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#50B878]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#5B5CE2]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-4">
              SLIDE 7
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Démo de l&apos;agent IA
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              La meilleure façon de comprendre la valeur est de voir l&apos;agent en action.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-2 mb-6"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-white text-[#143B6D]"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Demo container - 70% of viewport */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden"
            style={{ minHeight: "60vh" }}
          >
            {/* Demo placeholder */}
            <div className="h-full min-h-[60vh] flex flex-col items-center justify-center p-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 bg-[#50B878]/20 rounded-full flex items-center justify-center mb-6"
              >
                <Bot className="w-12 h-12 text-[#50B878]" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                Démo live : {tabs.find(t => t.id === activeTab)?.label}
              </h3>
              <p className="text-white/60 text-center max-w-md mb-6">
                Insérer ici la démo interactive de l&apos;Agent IA Laval Économique
              </p>
              
              <button className="flex items-center gap-2 px-6 py-3 bg-[#50B878] text-white rounded-full font-medium hover:bg-[#429a64] transition-colors">
                <Play className="w-5 h-5" />
                Lancer la démo
              </button>
            </div>
          </motion.div>

          {/* Key points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {[
              "L'agent comprend l'intention du visiteur",
              "Il recommande une ressource ou une action",
              "Il envoie les bons signaux au dashboard"
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full"
              >
                <div className="w-2 h-2 bg-[#50B878] rounded-full" />
                <span className="text-white/80 text-sm">{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
