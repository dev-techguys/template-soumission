"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface AnnexItem {
  title: string
  content: string[]
}

const annexes: AnnexItem[] = [
  {
    title: "Gouvernance et données",
    content: [
      "Consentement explicite requis",
      "Données minimales collectées",
      "Accès contrôlés par rôle",
      "Règles de modification validées",
      "Redirection humaine automatique",
      "Conformité Loi 25 à valider"
    ]
  },
  {
    title: "Hypothèses techniques",
    content: [
      "Accès à la base de données requis",
      "Structure de données à valider",
      "Pages du site à indexer",
      "API ou méthode d'intégration à confirmer",
      "Hébergement à confirmer"
    ]
  },
  {
    title: "Questions à valider",
    content: [
      "Quelle base de données est utilisée ?",
      "Quels champs peuvent être lus ou enrichis ?",
      "Quelles pages doivent être incluses ?",
      "Qui aura accès au tableau de bord ?",
      "Quelles intentions doivent être priorisées ?",
      "Quels cas doivent être transférés à un humain ?"
    ]
  },
  {
    title: "Limites du mandat",
    content: [
      "L'agent ne confirme pas l'admissibilité à un programme",
      "L'agent ne remplace pas un conseiller",
      "L'agent dépend de contenus validés",
      "Les intégrations dépendent des accès disponibles",
      "La mise en production exige une validation sécurité"
    ]
  }
]

export function AnnexAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-1.5 md:space-y-2">
      {annexes.map((annex, index) => (
        <div key={annex.title} className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-3 md:px-4 py-2.5 md:py-3 flex items-center justify-between text-left hover:bg-[#F6F8FA] transition-colors"
          >
            <span className="font-medium text-[#1E293B] text-sm md:text-base">{annex.title}</span>
            <ChevronDown 
              className={`w-4 md:w-5 h-4 md:h-5 text-[#64748B] transition-transform flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <ul className="px-3 md:px-4 pb-3 md:pb-4 space-y-1">
                  {annex.content.map((item, i) => (
                    <li key={i} className="text-xs md:text-sm text-[#64748B] flex items-start gap-2">
                      <span className="text-[#50B878] mt-0.5 md:mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
