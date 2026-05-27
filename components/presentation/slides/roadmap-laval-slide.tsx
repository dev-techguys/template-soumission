"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { FileSearch, Bot, Database, BarChart3, CheckCircle2 } from "lucide-react"

const phases = [
  {
    number: "01",
    title: "Cadrage et accès",
    duration: "1 à 2 semaines",
    icon: FileSearch,
    color: "blue",
    actions: [
      "Valider les objectifs de l'agent",
      "Identifier les contenus du site à indexer",
      "Comprendre la structure de la base de données",
      "Définir les règles de lecture et d'écriture",
      "Définir les intentions à suivre dans le dashboard",
      "Valider les contraintes de sécurité et Loi 25"
    ],
    deliverable: "Architecture fonctionnelle et plan de déploiement"
  },
  {
    number: "02",
    title: "Navigation site complet",
    duration: "2 à 3 semaines",
    icon: Bot,
    color: "indigo",
    actions: [
      "Développer le widget d'agent IA",
      "Connecter ou indexer les contenus du site",
      "Configurer les réponses basées sur contenus validés",
      "Créer les parcours de navigation prioritaires",
      "Tester les redirections vers pages et ressources",
      "Valider les limites de réponse"
    ],
    deliverable: "Agent capable de naviguer et orienter sur le site complet"
  },
  {
    number: "03",
    title: "Connexion base de données",
    duration: "2 à 3 semaines",
    icon: Database,
    color: "green",
    actions: [
      "Créer la connexion technique à la base existante",
      "Configurer les règles de vérification de dossier",
      "Définir les champs pouvant être enrichis",
      "Ajouter une logique anti doublon",
      "Tester la lecture et l'écriture contrôlées",
      "Journaliser les actions importantes"
    ],
    deliverable: "Agent connecté à la base de données selon règles validées"
  },
  {
    number: "04",
    title: "Dashboard visiteurs et intention",
    duration: "2 semaines",
    icon: BarChart3,
    color: "orange",
    actions: [
      "Créer le dashboard admin",
      "Définir les intentions suivies",
      "Créer les graphiques et métriques clés",
      "Afficher les conversations ou résumés pertinents",
      "Ajouter les filtres par période et intention",
      "Ajouter les indicateurs de suivi humain"
    ],
    deliverable: "Dashboard opérationnel pour l'équipe"
  },
  {
    number: "05",
    title: "Tests et mise en ligne",
    duration: "1 à 2 semaines",
    icon: CheckCircle2,
    color: "teal",
    actions: [
      "Tests avec scénarios réels",
      "Validation par l'équipe Laval Économique",
      "Ajustements des réponses",
      "Ajustements UX",
      "Validation sécurité",
      "Documentation d'utilisation"
    ],
    deliverable: "Agent IA déployé, testé et prêt à être utilisé"
  }
]

export function RoadmapSlide() {
  return (
    <SlideWrapper id="roadmap" className="bg-[#F6F8FA]">
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
            Section 13
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Une implantation progressive et mesurable
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E2E8F0] hidden md:block" />

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#143B6D] border-4 border-white shadow hidden md:block" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <PhaseCard {...phase} align={index % 2 === 0 ? 'right' : 'left'} />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-[#143B6D] rounded-2xl p-8 text-center">
            <p className="text-xl md:text-2xl text-white font-serif">
              Connecter. Guider. Mesurer. Optimiser.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

function PhaseCard({ number, title, duration, icon: Icon, color, actions, deliverable, align }: {
  number: string
  title: string
  duration: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  actions: string[]
  deliverable: string
  align: 'left' | 'right'
}) {
  const colors: Record<string, { bg: string; iconColor: string; badge: string }> = {
    blue: { bg: "bg-[#E8F3FB]", iconColor: "text-[#143B6D]", badge: "bg-[#143B6D]" },
    indigo: { bg: "bg-[#5B5CE2]/10", iconColor: "text-[#5B5CE2]", badge: "bg-[#5B5CE2]" },
    green: { bg: "bg-[#50B878]/10", iconColor: "text-[#50B878]", badge: "bg-[#50B878]" },
    orange: { bg: "bg-[#FFF7ED]", iconColor: "text-[#F97316]", badge: "bg-[#F97316]" },
    teal: { bg: "bg-[#14b8a6]/10", iconColor: "text-[#14b8a6]", badge: "bg-[#14b8a6]" }
  }

  const c = colors[color] || colors.blue

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm">
      {/* Header */}
      <div className={`flex items-center gap-4 mb-4 ${align === 'right' ? 'md:justify-end' : ''}`}>
        <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${c.iconColor}`} />
        </div>
        <div className={align === 'right' ? 'md:text-right' : ''}>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 ${c.badge} text-white text-[10px] font-bold rounded`}>
              Phase {number}
            </span>
            <span className="text-xs text-[#64748B]">{duration}</span>
          </div>
          <h4 className="text-lg font-bold text-[#1E293B]">{title}</h4>
        </div>
      </div>

      {/* Actions */}
      <ul className={`space-y-2 mb-4 ${align === 'right' ? 'md:text-right' : ''}`}>
        {actions.slice(0, 4).map((action, i) => (
          <li key={i} className={`flex items-start gap-2 text-xs text-[#64748B] ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
            <span className="w-1 h-1 rounded-full bg-[#64748B] mt-1.5 flex-shrink-0" />
            {action}
          </li>
        ))}
      </ul>

      {/* Deliverable */}
      <div className={`pt-4 border-t border-[#E2E8F0] ${align === 'right' ? 'md:text-right' : ''}`}>
        <span className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wide">Livrable</span>
        <p className="text-sm font-medium text-[#1E293B]">{deliverable}</p>
      </div>
    </div>
  )
}
