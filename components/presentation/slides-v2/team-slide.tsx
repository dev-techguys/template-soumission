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
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto w-full">
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
            className="mb-8 md:mb-12"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/team-photo.png"
                alt="Équipe OMNIGO x TechGuys"
                width={1200}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/omnigo-techguys-dark.png"
                    alt="OMNIGO x TechGuys"
                    width={160}
                    height={30}
                    className="w-[100px] md:w-[160px] h-auto"
                  />
                </div>
              </div>
            </div>
            <p className="text-center text-[#64748B] mt-3 md:mt-4 text-xs md:text-sm px-2">
              Notre équipe multidisciplinaire : direction de projet, implémentation IA, développement technologique, optimisation des ventes, marketing numérique
            </p>
          </motion.div>

          {/* Next steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#143B6D] rounded-xl md:rounded-2xl p-5 md:p-8 mb-8 md:mb-12"
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 text-center">Prochaines étapes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-[#50B878] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs md:text-sm">
                    {index + 1}
                  </div>
                  <p className="text-white/90 text-xs md:text-sm">{step}</p>
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
            className="text-center mb-8 md:mb-12"
          >
            <button className="inline-flex items-center gap-2 px-5 md:px-8 py-3 md:py-4 bg-[#50B878] text-white rounded-full font-semibold text-sm md:text-lg hover:bg-[#429a64] transition-colors w-full sm:w-auto justify-center">
              <span className="text-center">Lancer le mandat Agent IA Laval Économique</span>
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
            </button>
            <p className="text-[#64748B] mt-3 md:mt-4 text-xs md:text-base px-2">
              Une première version claire, utile et mesurable pour connecter les entrepreneurs aux bonnes ressources.
            </p>
          </motion.div>

          {/* Logo footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-3 md:mb-4">
              <Image
                src="/images/techguys-omnigo-light.png"
                alt="TechGuys x OMNIGO"
                width={180}
                height={32}
                className="w-[120px] md:w-[180px] h-auto"
              />
              <span className="text-[#64748B] text-base md:text-lg">pour</span>
              <Image
                src="/images/laval-economique-logo.svg"
                alt="Laval Économique"
                width={160}
                height={28}
                className="w-[110px] md:w-[160px] h-auto"
              />
            </div>
            <p className="text-[#64748B] text-xs md:text-sm text-center">Proposition de mandat - Agent IA Laval Économique</p>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
