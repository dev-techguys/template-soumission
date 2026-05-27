"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { Bot, Globe, Database, BarChart3, FileText, Calendar, Mail, FileSearch, Users } from "lucide-react"

const connections = [
  {
    icon: Globe,
    title: "Site web complet",
    description: "L'agent peut s'appuyer sur les contenus du site pour répondre et rediriger.",
    color: "blue"
  },
  {
    icon: Database,
    title: "Base de données actuelle",
    description: "L'agent peut lire ou écrire certaines informations selon les permissions validées.",
    color: "indigo"
  },
  {
    icon: BarChart3,
    title: "Dashboard",
    description: "Les interactions sont transformées en données de compréhension.",
    color: "green"
  },
  {
    icon: FileText,
    title: "Formulaires",
    description: "L'agent peut déclencher, recommander ou préremplir certains parcours.",
    color: "blue"
  },
  {
    icon: Calendar,
    title: "Eventbrite / inscriptions",
    description: "L'agent peut rediriger vers les bons événements.",
    color: "orange"
  },
  {
    icon: Mail,
    title: "Courriels / notifications",
    description: "L'agent peut transmettre un résumé à la bonne personne ou équipe.",
    color: "teal"
  },
  {
    icon: FileSearch,
    title: "Documents et ressources",
    description: "L'agent peut rendre certaines ressources plus faciles à trouver.",
    color: "gray"
  },
  {
    icon: Users,
    title: "Équipe de conseillers",
    description: "L'agent sait quand l'humain doit prendre le relais.",
    color: "blue"
  }
]

export function ArchitectureSlide() {
  return (
    <SlideWrapper id="architecture" className="bg-[#F6F8FA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-[#143B6D] text-xs font-semibold tracking-wide uppercase rounded-full mb-4 border border-[#E2E8F0]">
            Section 11
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Une architecture simple à comprendre, mais évolutive
          </h2>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-16"
        >
          {/* Central agent */}
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-32 h-32 rounded-3xl bg-[#143B6D] flex items-center justify-center shadow-xl">
                <Bot className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white rounded-full border border-[#E2E8F0] shadow-sm">
                <span className="text-xs font-bold text-[#143B6D]">Agent IA</span>
              </div>
            </motion.div>
          </div>

          {/* Connection lines and nodes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {connections.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + 0.05 * index }}
              >
                <ConnectionCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 text-center">
            <p className="text-lg text-[#64748B] leading-relaxed max-w-3xl mx-auto">
              L&apos;objectif n&apos;est pas de remplacer les systèmes existants. L&apos;objectif est d&apos;ajouter une <span className="font-semibold text-[#143B6D]">couche intelligente</span> qui les rend plus accessibles et plus utiles.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

function ConnectionCard({ icon: Icon, title, description, color }: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}) {
  const colors: Record<string, { bg: string; iconColor: string }> = {
    blue: { bg: "bg-[#E8F3FB]", iconColor: "text-[#143B6D]" },
    indigo: { bg: "bg-[#5B5CE2]/10", iconColor: "text-[#5B5CE2]" },
    green: { bg: "bg-[#50B878]/10", iconColor: "text-[#50B878]" },
    orange: { bg: "bg-[#FFF7ED]", iconColor: "text-[#F97316]" },
    teal: { bg: "bg-[#14b8a6]/10", iconColor: "text-[#14b8a6]" },
    gray: { bg: "bg-[#F6F8FA]", iconColor: "text-[#64748B]" }
  }

  const c = colors[color] || colors.blue

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 text-center hover:shadow-md transition-shadow h-full">
      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mx-auto mb-3`}>
        <Icon className={`w-6 h-6 ${c.iconColor}`} />
      </div>
      <h4 className="text-sm font-bold text-[#1E293B] mb-1">{title}</h4>
      <p className="text-[11px] text-[#64748B] leading-relaxed">{description}</p>
    </div>
  )
}
