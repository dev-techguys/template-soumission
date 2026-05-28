"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import { SectionHeader } from "../ui/section-header"
import Image from "next/image"

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

          {/* Team Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/team-photo.png"
                alt="Équipe OMNIGO x TechGuys"
                width={1200}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/omnigo-techguys-dark.png"
                    alt="OMNIGO x TechGuys"
                    width={160}
                    height={30}
                  />
                </div>
              </div>
            </div>
            <p className="text-center text-[#64748B] mt-4 text-sm">
              Notre équipe multidisciplinaire : direction de projet, implémentation IA, développement technologique, optimisation des ventes, marketing numérique
            </p>
          </motion.div>

          {/* Next steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
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
            transition={{ delay: 0.5 }}
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

          {/* Logo footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center justify-center gap-6 mb-4">
              <Image
                src="/images/techguys-omnigo-light.png"
                alt="TechGuys x OMNIGO"
                width={180}
                height={32}
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
