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
    description: "L'agent clarifie le besoin avant le contact humain."
  },
  {
    icon: Users,
    title: "Meilleure préparation des suivis",
    description: "L'équipe reçoit plus de contexte dès le départ."
  },
  {
    icon: FileText,
    title: "Valorisation du contenu existant",
    description: "Les pages et ressources du site sont mieux exploitées."
  },
  {
    icon: LineChart,
    title: "Données d'intention exploitables",
    description: "Les questions deviennent des signaux pour améliorer les services."
  },
  {
    icon: Layers,
    title: "Fondation évolutive",
    description: "La première version peut évoluer vers plus d'intégrations."
  }
]

export function BenefitsSlide() {
  return (
    <SlideWrapper id="benefits">
      <div className="min-h-screen bg-[#F6F8FA] flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="SLIDE 6"
            title="Les bénéfices attendus"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-[#5B5CE2]/10 rounded-lg flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-[#5B5CE2]" />
                </div>
                <h4 className="font-semibold text-[#1E293B] mb-2">{benefit.title}</h4>
                <p className="text-sm text-[#64748B] leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-[#143B6D] rounded-xl p-6 text-center"
          >
            <p className="text-white font-medium">
              Ce n&apos;est pas un simple chatbot. C&apos;est une interface de triage, d&apos;orientation et de mesure.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
