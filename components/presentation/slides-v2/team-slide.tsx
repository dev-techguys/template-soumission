"use client"

import { motion } from "framer-motion"
import { User, CheckCircle, ArrowRight } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import { SectionHeader } from "../ui/section-header"
import { AnnexAccordion } from "../ui/annex-accordion"
import Image from "next/image"

const team = [
  {
    name: "Direction de projet",
    role: "Coordination",
    responsibility: "Alignement client, portée et suivi."
  },
  {
    name: "Stratège IA / Produit",
    role: "Conception",
    responsibility: "Parcours, intentions et logique de réponse."
  },
  {
    name: "Développeur Full Stack",
    role: "Développement",
    responsibility: "Agent, intégrations et dashboard."
  },
  {
    name: "Designer UX/UI",
    role: "Design",
    responsibility: "Interface et expérience utilisateur."
  },
  {
    name: "Spécialiste Données",
    role: "Intégration",
    responsibility: "Connexions, règles et analytics."
  }
]

const nextSteps = [
  "Valider le périmètre final",
  "Confirmer les accès au site et à la base de données",
  "Prioriser les parcours de la première version",
  "Lancer la phase de cadrage"
]

export function TeamSlide() {
  return (
    <SlideWrapper id="team">
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="SLIDE 10"
            title="Équipe et prochaines étapes"
            subtitle="Une équipe pour livrer, tester et faire évoluer l'agent."
          />

          {/* Team grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F6F8FA] rounded-xl p-4 text-center"
              >
                <div className="w-12 h-12 bg-[#E8F3FB] rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-[#143B6D]" />
                </div>
                <h4 className="font-semibold text-[#1E293B] text-sm mb-1">{member.name}</h4>
                <p className="text-xs text-[#5B5CE2] font-medium mb-1">{member.role}</p>
                <p className="text-xs text-[#64748B]">{member.responsibility}</p>
              </motion.div>
            ))}
          </div>

          {/* Next steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-[#143B6D] rounded-2xl p-8 mb-12"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">Prochaines étapes</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#50B878] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-white/90 text-sm">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center mb-12"
          >
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#50B878] text-white rounded-full font-semibold text-lg hover:bg-[#429a64] transition-colors">
              Lancer le mandat Agent IA Laval Économique
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-[#64748B] mt-4">
              Une première version claire, utile et mesurable pour connecter les entrepreneurs aux bonnes ressources.
            </p>
          </motion.div>

          {/* Annexes */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <h4 className="text-lg font-semibold text-[#1E293B] mb-4 text-center">Annexes</h4>
            <AnnexAccordion />
          </motion.div>

          {/* Logo footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center justify-center gap-6 mb-4">
              <Image
                src="/images/omnigo-techguys-logo.png"
                alt="OMNIGO x TechGuys"
                width={180}
                height={32}
                className="bg-[#1E293B] px-3 py-2 rounded-lg"
              />
              <span className="text-[#64748B] text-lg">pour</span>
              <Image
                src="/images/laval-economique-logo.svg"
                alt="Laval Économique"
                width={160}
                height={28}
              />
            </div>
            <p className="text-[#64748B] text-sm text-center">Proposition de mandat - Agent IA Laval Économique</p>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
