"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { FileSearch, Bot, Database, BarChart3, CheckCircle2, X, Check, Receipt } from "lucide-react"
import { useEffect, useState } from "react"

const budgetItems = [
  {
    icon: FileSearch,
    title: "Cadrage stratégique et architecture",
    value: 2500,
    items: [
      "Analyse des besoins",
      "Cartographie des parcours",
      "Définition des intentions",
      "Architecture fonctionnelle",
      "Règles de gouvernance"
    ],
    color: "blue"
  },
  {
    icon: Bot,
    title: "Agent IA et navigation site complet",
    value: 4500,
    items: [
      "Widget IA",
      "Interface conversationnelle",
      "Connexion ou indexation du contenu",
      "Logique de redirection",
      "Parcours guidés"
    ],
    color: "indigo"
  },
  {
    icon: Database,
    title: "Connexion base de données actuelle",
    value: 4500,
    items: [
      "Analyse de la structure actuelle",
      "Connexion technique",
      "Règles de lecture et d'écriture",
      "Protection contre les doublons",
      "Tests d'intégration"
    ],
    color: "green"
  },
  {
    icon: BarChart3,
    title: "Dashboard visiteurs et intention",
    value: 3500,
    items: [
      "Tableau de bord admin",
      "Suivi des intentions",
      "Suivi des questions fréquentes",
      "Graphiques et filtres",
      "Indicateurs de suivi humain"
    ],
    color: "orange"
  },
  {
    icon: CheckCircle2,
    title: "Tests, déploiement et documentation",
    value: 2500,
    items: [
      "Tests utilisateurs",
      "Ajustements UX",
      "Mise en ligne",
      "Documentation",
      "Transfert de connaissances"
    ],
    color: "teal"
  }
]

const avoids = [
  "Un simple chatbot non connecté",
  "Un formulaire isolé de plus",
  "Une solution sans données exploitables",
  "Une expérience limitée à quelques pages",
  "Une absence de suivi sur les intentions"
]

const creates = [
  "Un outil connecté",
  "Un agent capable d'orienter sur tout le site",
  "Une meilleure compréhension des visiteurs",
  "Un dashboard de décision",
  "Une base évolutive pour le futur"
]

export function BudgetSlide() {
  const [displayedTotal, setDisplayedTotal] = useState(0)
  const total = 17500

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = total / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= total) {
        setDisplayedTotal(total)
        clearInterval(timer)
      } else {
        setDisplayedTotal(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <SlideWrapper id="budget" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#50B878]/10 text-[#50B878] text-xs font-semibold tracking-wide uppercase rounded-full mb-4">
            Section 14
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Proposition budgétaire
          </h2>
        </motion.div>

        {/* Main price card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-[#143B6D] rounded-3xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Receipt className="w-8 h-8 text-white/60" />
            </div>
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">
              {displayedTotal.toLocaleString('fr-CA')} $
            </div>
            <div className="text-white/60 text-lg mb-6">+ taxes</div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Développement d&apos;un Agent IA sur mesure pour Laval Économique
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full">
                Proposition complète
              </span>
              <span className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full">
                Première version robuste
              </span>
              <span className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full">
                Déploiement progressif
              </span>
            </div>
          </div>
        </motion.div>

        {/* Budget breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-lg font-bold text-[#1E293B] mb-6 text-center">Ventilation de la valeur</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {budgetItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + 0.05 * index }}
              >
                <BudgetCard {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Avoids vs Creates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Avoids */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-[#FFF7ED] rounded-2xl border border-[#F97316]/20 p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-[#F97316]" />
                </div>
                <h4 className="text-base font-bold text-[#1E293B]">Ce que cette enveloppe permet d&apos;éviter</h4>
              </div>
              <ul className="space-y-2">
                {avoids.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#64748B]">
                    <X className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Creates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-[#50B878]/5 rounded-2xl border border-[#50B878]/20 p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#50B878]/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#50B878]" />
                </div>
                <h4 className="text-base font-bold text-[#1E293B]">Ce que cette enveloppe permet de créer</h4>
              </div>
              <ul className="space-y-2">
                {creates.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-[#64748B]">
                    <Check className="w-4 h-4 text-[#50B878] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <p className="text-xs text-[#64748B] text-center max-w-3xl mx-auto">
            Le budget exact est présenté comme une enveloppe de projet complète pour une première version robuste. Les intégrations dépendantes de systèmes externes doivent être validées selon les accès disponibles, la documentation technique et les contraintes de sécurité.
          </p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

function BudgetCard({ icon: Icon, title, value, items, color }: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: number
  items: string[]
  color: string
}) {
  const colors: Record<string, { bg: string; iconColor: string }> = {
    blue: { bg: "bg-[#E8F3FB]", iconColor: "text-[#143B6D]" },
    indigo: { bg: "bg-[#5B5CE2]/10", iconColor: "text-[#5B5CE2]" },
    green: { bg: "bg-[#50B878]/10", iconColor: "text-[#50B878]" },
    orange: { bg: "bg-[#FFF7ED]", iconColor: "text-[#F97316]" },
    teal: { bg: "bg-[#14b8a6]/10", iconColor: "text-[#14b8a6]" }
  }

  const c = colors[color] || colors.blue

  return (
    <div className="bg-[#F6F8FA] rounded-2xl p-4 h-full">
      <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-3`}>
        <Icon className={`w-5 h-5 ${c.iconColor}`} />
      </div>
      <div className="text-lg font-bold text-[#1E293B] mb-1">
        {value.toLocaleString('fr-CA')} $
      </div>
      <h4 className="text-xs font-semibold text-[#64748B] mb-3">{title}</h4>
      <ul className="space-y-1">
        {items.slice(0, 3).map((item, index) => (
          <li key={index} className="text-[10px] text-[#64748B] flex items-start gap-1">
            <span className="w-1 h-1 rounded-full bg-[#64748B] mt-1.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
