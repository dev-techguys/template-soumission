"use client"

import { motion } from "framer-motion"
import { Zap, Target, Users, FileText, LineChart, Layers } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import { SectionHeader } from "../ui/section-header"

const benefits = [
  {
    icon: Zap,
    title: "Moins de friction",
    description: "Les entrepreneurs trouvent plus rapidement le bon chemin."
  },
  {
    icon: Target,
    title: "Moins de demandes mal orientées",
    description: "L'agent clarifie le besoin avant le suivi humain."
  },
  {
    icon: Users,
    title: "Meilleure préparation des suivis",
    description: "L'équipe reçoit plus de contexte dès le départ."
  },
  {
    icon: FileText,
    title: "Meilleure qualification des entrepreneurs",
    description: "Le prédiagnostic permet de comprendre rapidement le stade et les besoins."
  },
  {
    icon: LineChart,
    title: "Réponses plus rapides aux besoins récurrents",
    description: "Les scénarios fréquents reconnaissent les demandes courantes et proposent le bon chemin."
  },
  {
    icon: Layers,
    title: "Suivis plus efficaces",
    description: "Les équipes reçoivent un résumé clair au lieu d'une demande vague ou incomplète."
  }
]

export function BenefitsSlide() {
  return (
    <SlideWrapper id="benefits">
      <div className="min-h-screen bg-[#F6F8FA] flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto w-full">
          <SectionHeader
            badge="SLIDE 6"
            title="Les bénéfices attendus"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-8 md:mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 md:p-5 hover:shadow-md transition-shadow"
              >
                <div className="w-9 md:w-10 h-9 md:h-10 bg-[#5B5CE2]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <benefit.icon className="w-4 md:w-5 h-4 md:h-5 text-[#5B5CE2]" />
                </div>
                <h4 className="font-semibold text-[#1E293B] mb-1.5 md:mb-2 text-sm md:text-base">{benefit.title}</h4>
                <p className="text-xs md:text-sm text-[#64748B] leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-[#143B6D] rounded-xl p-4 md:p-6 text-center"
          >
            <p className="text-white font-medium text-sm md:text-base">
              Ce n&apos;est pas un simple chatbot. C&apos;est une interface de triage, d&apos;orientation et de mesure.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
