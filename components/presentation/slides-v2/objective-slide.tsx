"use client"

import { motion } from "framer-motion"
import { Target, Brain, Users, ClipboardList } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import { SectionHeader } from "../ui/section-header"

const objectives = [
  {
    icon: Target,
    title: "Orienter plus vite",
    description: "Aider le visiteur à trouver la bonne page, le bon service ou la bonne action.",
    color: "#143B6D"
  },
  {
    icon: Brain,
    title: "Comprendre les intentions",
    description: "Identifier les besoins réels derrière les questions posées.",
    color: "#5B5CE2"
  },
  {
    icon: Users,
    title: "Préparer les suivis",
    description: "Relier les interactions importantes à la base de données et à l'équipe.",
    color: "#50B878"
  },
  {
    icon: ClipboardList,
    title: "Pré-qualifier les entrepreneurs",
    description: "13 questions pour clarifier le profil et orienter vers la bonne ressource.",
    color: "#F59E0B"
  }
]

export function ObjectiveSlide() {
  return (
    <SlideWrapper id="objective">
      <div className="min-h-screen bg-[#F6F8FA] flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="SLIDE 2"
            title="Objectif du mandat"
          />

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-[#E2E8F0] mb-12 text-center"
          >
            <p className="text-lg md:text-xl text-[#1E293B] leading-relaxed">
              Créer une première version fonctionnelle de l&apos;Agent IA Laval Économique capable d&apos;aider les entrepreneurs à trouver la bonne ressource, tout en générant des données utiles pour l&apos;organisation.
            </p>
          </motion.div>

          {/* Three objectives */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-[#E2E8F0] text-center"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${obj.color}15` }}
                >
                  <obj.icon className="w-7 h-7" style={{ color: obj.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">{obj.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{obj.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key phrase */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <p className="inline-block px-6 py-3 bg-[#143B6D]/5 rounded-full text-[#143B6D] font-medium">
              L&apos;agent ne remplace pas l&apos;humain. Il prépare mieux l&apos;intervention humaine.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
