"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { Database, Globe, BarChart3, ArrowRight } from "lucide-react"

const needs = [
  {
    number: "01",
    icon: Database,
    title: "Connecter à la base de données actuelle",
    description: "L'agent doit pouvoir interagir avec la base de données actuelle de Laval Économique selon des règles claires : reconnaître un dossier existant, créer une nouvelle entrée, enrichir certains champs ou transmettre un résumé à l'équipe, sans écraser les données sensibles ou existantes.",
    value: "L'interaction web devient utile pour les opérations internes.",
    color: "indigo"
  },
  {
    number: "02",
    icon: Globe,
    title: "Navigation sur tout le site complet",
    description: "L'agent doit pouvoir aider les visiteurs à naviguer dans l'ensemble du site web, comprendre leurs questions et les diriger vers les bonnes pages, ressources, formulaires, événements ou contacts.",
    value: "Le site devient plus facile à utiliser, même pour quelqu'un qui ne connaît pas les services de Laval Économique.",
    color: "blue"
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Dashboard de visiteurs et d'intention",
    description: "L'équipe doit pouvoir visualiser les questions, les intentions, les services recherchés, les parcours, les besoins fréquents et les opportunités d'amélioration du site ou des services.",
    value: "Les conversations deviennent une source de données stratégiques.",
    color: "green"
  }
]

export function BesoinsPrioritairesSlide() {
  return (
    <SlideWrapper id="besoins-prioritaires" className="bg-white">
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
            Section 4
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Trois besoins structurants pour l&apos;Agent IA
          </h2>
        </motion.div>

        {/* Three need cards */}
        <div className="space-y-6 mb-16">
          {needs.map((need, index) => (
            <motion.div
              key={need.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <NeedCard {...need} />
            </motion.div>
          ))}
        </div>

        {/* Summary box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#143B6D] rounded-3xl p-8 md:p-10"
        >
          <p className="text-lg md:text-xl text-white/90 text-center mb-8">
            Ces trois besoins forment la colonne vertébrale du projet :
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#5B5CE2] flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Connecter</span>
            </motion.div>
            
            <ArrowRight className="w-6 h-6 text-white/40 hidden md:block" />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3b82f6] flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Guider</span>
            </motion.div>
            
            <ArrowRight className="w-6 h-6 text-white/40 hidden md:block" />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#50B878] flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Mesurer</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

function NeedCard({ number, icon: Icon, title, description, value, color }: {
  number: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  value: string
  color: string
}) {
  const colorClasses: Record<string, { bg: string; iconBg: string; iconText: string; badge: string }> = {
    indigo: { 
      bg: "border-l-[#5B5CE2]", 
      iconBg: "bg-[#5B5CE2]/10", 
      iconText: "text-[#5B5CE2]",
      badge: "bg-[#5B5CE2]/10 text-[#5B5CE2]"
    },
    blue: { 
      bg: "border-l-[#143B6D]", 
      iconBg: "bg-[#E8F3FB]", 
      iconText: "text-[#143B6D]",
      badge: "bg-[#E8F3FB] text-[#143B6D]"
    },
    green: { 
      bg: "border-l-[#50B878]", 
      iconBg: "bg-[#50B878]/10", 
      iconText: "text-[#50B878]",
      badge: "bg-[#50B878]/10 text-[#50B878]"
    }
  }

  const colors = colorClasses[color] || colorClasses.blue

  return (
    <div className={`bg-white rounded-2xl border border-[#E2E8F0] border-l-4 ${colors.bg} p-6 md:p-8 hover:shadow-lg transition-all duration-300`}>
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        {/* Icon and number */}
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center`}>
            <Icon className={`w-7 h-7 ${colors.iconText}`} />
          </div>
          <span className="text-4xl font-bold text-[#E2E8F0] font-serif">{number}</span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#1E293B] mb-3">{title}</h3>
          <p className="text-[#64748B] leading-relaxed mb-4">{description}</p>
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badge} rounded-full text-sm font-medium`}>
            <span>Valeur :</span>
            <span>{value}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
