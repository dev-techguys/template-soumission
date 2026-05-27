"use client"

import { motion } from "framer-motion"
import { MessageSquare, Compass, Database, BarChart3, Rocket } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import { SectionHeader } from "../ui/section-header"

const modules = [
  {
    icon: MessageSquare,
    title: "Agent conversationnel",
    deliverable: "Widget IA intégré au site avec réponses claires, suggestions et parcours guidés.",
    benefit: "Les visiteurs trouvent plus vite la bonne ressource."
  },
  {
    icon: Compass,
    title: "Navigation site complet",
    deliverable: "Index ou connexion au contenu du site pour recommander les bonnes pages.",
    benefit: "Le contenu existant devient plus accessible et plus utile."
  },
  {
    icon: Database,
    title: "Connexion base de données",
    deliverable: "Connexion contrôlée pour vérifier, créer ou enrichir un dossier.",
    benefit: "Les suivis internes sont mieux structurés."
  },
  {
    icon: BarChart3,
    title: "Dashboard d'intention",
    deliverable: "Tableau de bord pour suivre les intentions et questions fréquentes.",
    benefit: "Comprendre ce que les entrepreneurs cherchent."
  },
  {
    icon: Rocket,
    title: "Déploiement et formation",
    deliverable: "Tests, mise en ligne, documentation et transfert de connaissances.",
    benefit: "L'équipe peut utiliser et faire évoluer l'agent."
  }
]

export function ModulesSlide() {
  return (
    <SlideWrapper id="modules">
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="SLIDE 5"
            title="Modules livrables"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#F6F8FA] rounded-xl p-5 border border-[#E2E8F0] hover:border-[#143B6D]/30 transition-colors"
              >
                <div className="w-10 h-10 bg-[#E8F3FB] rounded-lg flex items-center justify-center mb-4">
                  <module.icon className="w-5 h-5 text-[#143B6D]" />
                </div>
                <h4 className="font-bold text-[#1E293B] mb-2">{module.title}</h4>
                <p className="text-sm text-[#64748B] mb-3 leading-relaxed">{module.deliverable}</p>
                <p className="text-sm text-[#50B878] font-medium">{module.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
