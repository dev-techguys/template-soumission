"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface Phase {
  name: string
  amount: string
  tasks: string[]
}

const phases: Phase[] = [
  {
    name: "Phase 1 — Cadrage stratégique",
    amount: "2 500 $",
    tasks: [
      "Analyse du mandat",
      "Rencontre de cadrage",
      "Validation des objectifs",
      "Identification des parcours prioritaires",
      "Définition de l'architecture fonctionnelle",
      "Définition des règles de données",
      "Validation des accès nécessaires",
      "Priorisation du périmètre MVP"
    ]
  },
  {
    name: "Phase 2 — Agent IA + Navigation",
    amount: "4 500 $",
    tasks: [
      "Développement du widget conversationnel",
      "Création des parcours guidés",
      "Connexion ou structuration du contenu du site",
      "Détection des intentions principales",
      "Recommandations de ressources",
      "Suggestions contextuelles",
      "Cartes de ressources",
      "Tests des scénarios utilisateurs",
      "Ajustement des réponses de l'agent"
    ]
  },
  {
    name: "Phase 3 — Connexion base de données",
    amount: "4 500 $",
    tasks: [
      "Analyse de la structure de la base actuelle",
      "Identification des champs accessibles",
      "Définition des règles de lecture",
      "Définition des règles d'enrichissement",
      "Recherche de dossier existant",
      "Gestion des correspondances exactes",
      "Gestion des correspondances partielles",
      "Règles anti doublon",
      "Résumé de demande pour l'équipe",
      "Journalisation des actions importantes"
    ]
  },
  {
    name: "Phase 4 — Dashboard d'intention",
    amount: "3 500 $",
    tasks: [
      "Création du dashboard admin",
      "Suivi des intentions visiteurs",
      "Suivi des questions fréquentes",
      "Suivi des services recommandés",
      "Suivi des demandes de contact humain",
      "Métriques de navigation",
      "Indicateurs de conversion",
      "Graphiques simples et lisibles",
      "Filtres par période et type d'intention",
      "Insights actionnables pour l'équipe"
    ]
  },
  {
    name: "Phase 5 — Tests et déploiement",
    amount: "2 500 $",
    tasks: [
      "Tests fonctionnels",
      "Tests des réponses de l'agent",
      "Tests des parcours utilisateurs",
      "Ajustements UX",
      "Ajustements des contenus",
      "Mise en ligne",
      "Documentation d'utilisation",
      "Formation de l'équipe",
      "Transfert de connaissances",
      "Recommandations pour la suite"
    ]
  }
]

export function InvestmentTable() {
  const [openPhase, setOpenPhase] = useState<number | null>(null)

  const togglePhase = (index: number) => {
    setOpenPhase(openPhase === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {phases.map((phase, index) => (
        <motion.div
          key={phase.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow duration-200"
        >
          {/* Header - Always visible */}
          <button
            onClick={() => togglePhase(index)}
            className="w-full p-4 flex items-center justify-between gap-4 text-left hover:bg-[#F8FAFC] transition-colors duration-200"
          >
            <div className="flex items-center gap-3 flex-1">
              <motion.div
                animate={{ rotate: openPhase === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 rounded-lg bg-[#F1F5F9] flex items-center justify-center flex-shrink-0"
              >
                <ChevronDown className="w-4 h-4 text-[#64748B]" />
              </motion.div>
              <h4 className="font-semibold text-[#1E293B]">{phase.name}</h4>
            </div>
            <span className="text-lg font-bold text-[#143B6D] flex-shrink-0">{phase.amount}</span>
          </button>

          {/* Expandable content */}
          <AnimatePresence>
            {openPhase === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 pt-2 border-t border-[#E2E8F0]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <motion.li
                        key={task}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: taskIndex * 0.03 }}
                        className="flex items-start gap-2 text-sm text-[#64748B]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#50B878] mt-1.5 flex-shrink-0" />
                        {task}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
