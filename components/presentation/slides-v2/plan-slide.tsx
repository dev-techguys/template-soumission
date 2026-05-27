"use client"

import { motion } from "framer-motion"
import { SlideWrapper } from "../slide-wrapper"
import { SectionHeader } from "../ui/section-header"
import { SimpleGantt } from "../ui/simple-gantt"

const phases = [
  {
    number: 1,
    name: "Cadrage et architecture",
    duration: "Semaine 1-2",
    deliverables: ["Objectifs validés", "Accès identifiés", "Parcours prioritaires", "Règles de données"]
  },
  {
    number: 2,
    name: "Agent + Navigation site",
    duration: "Semaine 2-5",
    deliverables: ["Widget agent IA", "Navigation complète", "Recommandations", "Parcours guidés"]
  },
  {
    number: 3,
    name: "Connexion base de données",
    duration: "Semaine 4-7",
    deliverables: ["Connexion contrôlée", "Recherche de dossier", "Enrichissement", "Règles anti-doublon"]
  },
  {
    number: 4,
    name: "Dashboard intention",
    duration: "Semaine 6-8",
    deliverables: ["Métriques clés", "Intentions", "Questions fréquentes", "Suivis humains"]
  },
  {
    number: 5,
    name: "Tests et déploiement",
    duration: "Semaine 8-10",
    deliverables: ["Tests réels", "Ajustements", "Déploiement", "Formation"]
  }
]

export function PlanSlide() {
  return (
    <SlideWrapper id="plan">
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="SLIDE 8"
            title="Plan de réalisation"
            subtitle="Un déploiement par phases pour limiter le risque et valider la valeur rapidement."
          />

          {/* Gantt chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <SimpleGantt />
          </motion.div>

          {/* Phase details in compact cards */}
          <div className="grid md:grid-cols-5 gap-3">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F6F8FA] rounded-lg p-4 border border-[#E2E8F0]"
              >
                <div className="w-8 h-8 bg-[#143B6D] rounded-full flex items-center justify-center text-white text-sm font-bold mb-3">
                  {phase.number}
                </div>
                <h4 className="font-semibold text-[#1E293B] text-sm mb-1">{phase.name}</h4>
                <p className="text-xs text-[#64748B] mb-2">{phase.duration}</p>
                <ul className="space-y-1">
                  {phase.deliverables.slice(0, 2).map((d, i) => (
                    <li key={i} className="text-xs text-[#64748B] flex items-start gap-1">
                      <span className="text-[#50B878]">•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-[#64748B] mt-8"
          >
            Le calendrier final dépendra des accès techniques, de la base de données et de la validation des contenus.
          </motion.p>
        </div>
      </div>
    </SlideWrapper>
  )
}
