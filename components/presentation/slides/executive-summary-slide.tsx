"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { Target, Compass, Gem, Receipt, Quote } from "lucide-react"

const cards = [
  {
    icon: Target,
    title: "Objectif",
    description: "Créer un agent IA utile dès la première version pour orienter les visiteurs et préparer les suivis internes.",
    color: "blue"
  },
  {
    icon: Compass,
    title: "Portée",
    description: "Site web complet, base de données actuelle, dashboard visiteurs et intention.",
    color: "green"
  },
  {
    icon: Gem,
    title: "Valeur",
    description: "Moins de friction pour les entrepreneurs, plus de clarté pour les équipes, plus de données exploitables pour l'organisation.",
    color: "indigo"
  },
  {
    icon: Receipt,
    title: "Budget",
    description: "Projet complet proposé à 17 500 $ + taxes.",
    color: "orange"
  }
]

export function ExecutiveSummarySlide() {
  return (
    <SlideWrapper id="executive-summary" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#E8F3FB] text-[#143B6D] text-xs font-semibold tracking-wide uppercase rounded-full mb-4">
            Section 2
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Le projet en une page
          </h2>
        </motion.div>

        {/* Main description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-lg text-[#64748B] leading-relaxed text-center">
            Laval Économique dispose d&apos;un site web riche, de nombreux services et d&apos;une relation directe avec les entrepreneurs. Le projet proposé vise à ajouter une couche d&apos;intelligence artificielle capable de guider les visiteurs, de reconnaître leurs intentions, de s&apos;appuyer sur les contenus du site complet et de connecter les interactions pertinentes à la base de données actuelle.
          </p>
        </motion.div>

        {/* Four cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-lg hover:border-[#143B6D]/20 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${getIconBg(card.color)}`}>
                  <card.icon className={`w-6 h-6 ${getIconColor(card.color)}`} />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">{card.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-[#143B6D] rounded-3xl p-8 md:p-12 text-center">
            <Quote className="w-10 h-10 text-white/20 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-white leading-relaxed max-w-4xl mx-auto text-balance">
              La vraie valeur n&apos;est pas dans le chat. Elle est dans la connexion entre l&apos;intention du visiteur, l&apos;information du site et les données internes.
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="px-4 py-2 bg-white/10 text-white/80 text-sm font-medium rounded-full">
                Connecter
              </span>
              <span className="text-white/40">•</span>
              <span className="px-4 py-2 bg-white/10 text-white/80 text-sm font-medium rounded-full">
                Guider
              </span>
              <span className="text-white/40">•</span>
              <span className="px-4 py-2 bg-white/10 text-white/80 text-sm font-medium rounded-full">
                Mesurer
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

function getIconBg(color: string) {
  const colors: Record<string, string> = {
    blue: "bg-[#E8F3FB]",
    green: "bg-[#50B878]/10",
    indigo: "bg-[#5B5CE2]/10",
    orange: "bg-[#FFF7ED]"
  }
  return colors[color] || colors.blue
}

function getIconColor(color: string) {
  const colors: Record<string, string> = {
    blue: "text-[#143B6D]",
    green: "text-[#50B878]",
    indigo: "text-[#5B5CE2]",
    orange: "text-[#F97316]"
  }
  return colors[color] || colors.blue
}
