"use client"

import { motion } from "framer-motion"

interface Phase {
  name: string
  amount: string
  tasks: string[]
}

const phases: Phase[] = [
  {
    name: "Phase 1 — Cadrage stratégique",
    amount: "2 500 $",
    tasks: ["Analyse du mandat", "Parcours prioritaires", "Architecture fonctionnelle", "Règles de données"]
  },
  {
    name: "Phase 2 — Agent IA + Navigation",
    amount: "4 500 $",
    tasks: ["Widget conversationnel", "Parcours guidés", "Connexion au contenu", "Recommandations"]
  },
  {
    name: "Phase 3 — Connexion base de données",
    amount: "4 500 $",
    tasks: ["Analyse de structure", "Recherche de dossier", "Enrichissement contrôlé", "Règles anti-doublon"]
  },
  {
    name: "Phase 4 — Dashboard d'intention",
    amount: "3 500 $",
    tasks: ["Dashboard admin", "Intentions et métriques", "Questions fréquentes", "Suivis humains"]
  },
  {
    name: "Phase 5 — Tests et déploiement",
    amount: "2 500 $",
    tasks: ["Tests", "Ajustements", "Mise en ligne", "Documentation", "Formation"]
  }
]

export function InvestmentTable() {
  return (
    <div className="space-y-3">
      {phases.map((phase, index) => (
        <motion.div
          key={phase.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-xl p-4 border border-[#E2E8F0] flex items-center justify-between gap-4"
        >
          <div className="flex-1">
            <h4 className="font-semibold text-[#1E293B] mb-1">{phase.name}</h4>
            <p className="text-sm text-[#64748B]">{phase.tasks.join(" • ")}</p>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-[#143B6D]">{phase.amount}</span>
          </div>
        </motion.div>
      ))}
      
      {/* Total */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="bg-[#143B6D] rounded-xl p-4 flex items-center justify-between"
      >
        <span className="font-bold text-white">Total</span>
        <span className="text-2xl font-bold text-white">17 500 $ + taxes</span>
      </motion.div>
    </div>
  )
}
