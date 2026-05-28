"use client"

import { motion } from "framer-motion"
import { MessageSquare, Brain, Compass, Database, BarChart3, ArrowDown, ClipboardList, Route } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import { SectionHeader } from "../ui/section-header"

const blocks = [
  {
    icon: MessageSquare,
    title: "Interface agent IA",
    description: "Le visiteur pose une question ou choisit un parcours guidé.",
    color: "#143B6D"
  },
  {
    icon: ClipboardList,
    title: "Pré-diagnostic entrepreneurial",
    description: "Questionnaire guidé de 13 questions pour clarifier le profil, le stade et les besoins.",
    color: "#F59E0B"
  },
  {
    icon: Brain,
    title: "Moteur d'intention",
    description: "L'agent comprend le besoin : démarrage, financement, exportation, etc.",
    color: "#5B5CE2",
    subBlock: {
      icon: Route,
      title: "Scénarios intégrés",
      description: "Questions fréquentes et parcours récurrents pour accélérer les réponses."
    }
  },
  {
    icon: Compass,
    title: "Navigation site complet",
    description: "L'agent recommande la bonne ressource.",
    color: "#50B878"
  },
  {
    icon: Database,
    title: "Connecteur base de données",
    description: "L'agent prépare ou enrichit les suivis selon les règles définies.",
    color: "#143B6D"
  },
  {
    icon: BarChart3,
    title: "Dashboard",
    description: "L'équipe voit les intentions, demandes et opportunités.",
    color: "#5B5CE2"
  }
]

export function SolutionSlide() {
  return (
    <SlideWrapper id="solution">
      <div className="min-h-screen bg-[#F6F8FA] flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="SLIDE 4"
            title="La solution proposée"
            subtitle="Une couche intelligente entre le visiteur, le site, les données et l'équipe."
          />

          {/* Architecture flow */}
          <div className="flex flex-col items-center gap-4">
            {blocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-full max-w-2xl"
              >
                <div className="bg-white rounded-xl p-5 border border-[#E2E8F0] flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${block.color}15` }}
                  >
                    <block.icon className="w-6 h-6" style={{ color: block.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E293B]">{block.title}</h4>
                    <p className="text-sm text-[#64748B]">{block.description}</p>
                  </div>
                </div>
                {/* Sub-block for scenarios */}
                {block.subBlock && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="ml-8 mt-2 bg-[#F8FAFC] rounded-lg p-3 border border-[#E2E8F0] flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#5B5CE2]/10">
                      <block.subBlock.icon className="w-4 h-4 text-[#5B5CE2]" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#1E293B] text-sm">{block.subBlock.title}</h5>
                      <p className="text-xs text-[#64748B]">{block.subBlock.description}</p>
                    </div>
                  </motion.div>
                )}
                {index < blocks.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-5 h-5 text-[#E2E8F0]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Link to annex */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-[#64748B]">
              Les détails techniques sont disponibles en annexe.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
