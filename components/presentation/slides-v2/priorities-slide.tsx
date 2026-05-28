"use client"

import { motion } from "framer-motion"
import { Database, Compass, BarChart3 } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import { SectionHeader } from "../ui/section-header"

const priorities = [
  {
    icon: Database,
    number: 1,
    title: "Connexion à la base de données actuelle",
    description: "Vérifier, créer ou enrichir un dossier selon des règles contrôlées.",
    benefit: "Moins de doublons, plus de contexte, suivis mieux préparés",
    color: "#143B6D"
  },
  {
    icon: Compass,
    number: 2,
    title: "Navigation intelligente sur le site complet",
    description: "Comprendre la question et recommander la bonne ressource du site.",
    benefit: "Moins de friction, meilleure utilisation du contenu existant",
    badges: ["Prédiagnostic entrepreneurial"],
    color: "#5B5CE2"
  },
  {
    icon: BarChart3,
    number: 3,
    title: "Tableau de bord des visiteurs et des intentions",
    description: "Visualiser les questions, intentions, services recherchés et suivis humains.",
    benefit: "Meilleure lecture des besoins, décisions plus éclairées",
    color: "#50B878"
  }
]

export function PrioritiesSlide() {
  return (
    <SlideWrapper id="priorities">
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="SLIDE 3"
            title="Trois priorités. Un agent."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {priorities.map((priority, index) => (
              <motion.div
                key={priority.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#F6F8FA] rounded-2xl p-6 md:p-8 border border-[#E2E8F0] hover:border-[#143B6D]/30 transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${priority.color}15` }}
                  >
                    <priority.icon className="w-7 h-7" style={{ color: priority.color }} />
                  </div>
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: priority.color }}
                  >
                    {priority.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">{priority.title}</h3>
                <p className="text-[#64748B] mb-6 leading-relaxed">{priority.description}</p>

                {/* Benefit badge */}
                <div 
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${priority.color}10`,
                    color: priority.color
                  }}
                >
                  {priority.benefit}
                </div>

                {/* Extra badges for pre-diagnostic */}
                {priority.badges && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {priority.badges.map((badge) => (
                      <span 
                        key={badge}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[#F59E0B]/10 text-[#F59E0B]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
