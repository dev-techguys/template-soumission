"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { Lightbulb, Compass, Link, BarChart3, TrendingUp, Bot } from "lucide-react"

const pillars = [
  {
    icon: Lightbulb,
    title: "Comprendre",
    description: "Identifier le besoin réel de l'utilisateur, même s'il ne connaît pas le bon vocabulaire.",
    color: "blue"
  },
  {
    icon: Compass,
    title: "Orienter",
    description: "Diriger vers la bonne page, le bon événement, le bon formulaire ou le bon contact.",
    color: "green"
  },
  {
    icon: Link,
    title: "Connecter",
    description: "Relier les interactions importantes à la base de données actuelle.",
    color: "indigo"
  },
  {
    icon: BarChart3,
    title: "Mesurer",
    description: "Transformer les questions et parcours en données exploitables.",
    color: "orange"
  },
  {
    icon: TrendingUp,
    title: "Améliorer",
    description: "Aider Laval Économique à optimiser ses contenus, ses parcours et ses services.",
    color: "teal"
  }
]

export function VisionSlide() {
  return (
    <SlideWrapper id="vision" className="bg-[#F6F8FA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-[#143B6D] text-xs font-semibold tracking-wide uppercase rounded-full mb-4 border border-[#E2E8F0]">
            Section 5
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Une porte d&apos;entrée intelligente pour les entrepreneurs
          </h2>
        </motion.div>

        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8">
            <p className="text-lg text-[#64748B] leading-relaxed text-center">
              L&apos;Agent IA Laval Économique serait un assistant intégré au site web qui comprend les questions des visiteurs, consulte les contenus du site, guide vers les bonnes ressources, capte les intentions et transmet les informations utiles à la base de données ou au dashboard.
            </p>
          </div>
        </motion.div>

        {/* Five pillars around central agent */}
        <div className="relative mb-16">
          {/* Central agent */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 rounded-3xl bg-[#143B6D] flex items-center justify-center shadow-lg">
              <Bot className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
              >
                <PillarCard {...pillar} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-[#143B6D] rounded-2xl p-8 text-center">
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
              Ce n&apos;est pas un robot qui remplace l&apos;humain. C&apos;est un assistant qui rend chaque interaction plus claire, plus rapide et mieux documentée.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

function PillarCard({ icon: Icon, title, description, color }: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}) {
  const colorClasses: Record<string, { bg: string; iconColor: string }> = {
    blue: { bg: "bg-[#E8F3FB]", iconColor: "text-[#143B6D]" },
    green: { bg: "bg-[#50B878]/10", iconColor: "text-[#50B878]" },
    indigo: { bg: "bg-[#5B5CE2]/10", iconColor: "text-[#5B5CE2]" },
    orange: { bg: "bg-[#FFF7ED]", iconColor: "text-[#F97316]" },
    teal: { bg: "bg-[#14b8a6]/10", iconColor: "text-[#14b8a6]" }
  }

  const colors = colorClasses[color] || colorClasses.blue

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`w-6 h-6 ${colors.iconColor}`} />
      </div>
      <h3 className="text-base font-bold text-[#1E293B] mb-2">{title}</h3>
      <p className="text-xs text-[#64748B] leading-relaxed">{description}</p>
    </div>
  )
}
