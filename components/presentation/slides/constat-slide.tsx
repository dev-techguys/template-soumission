"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { Compass, FileSearch, Eye, Users, Quote } from "lucide-react"

const challenges = [
  {
    icon: Compass,
    title: "Trop de chemins possibles",
    description: "Les entrepreneurs ne connaissent pas toujours le nom du bon programme, de la bonne ressource ou de la bonne personne à contacter."
  },
  {
    icon: FileSearch,
    title: "Information disponible, mais pas toujours actionnable",
    description: "Le contenu existe, mais l'utilisateur doit souvent interpréter lui-même son parcours."
  },
  {
    icon: Eye,
    title: "Données d'intention invisibles",
    description: "Les visites web montrent des pages consultées, mais pas toujours ce que les entrepreneurs voulaient vraiment accomplir."
  },
  {
    icon: Users,
    title: "Suivis internes à mieux préparer",
    description: "Les équipes peuvent recevoir des demandes incomplètes, mal orientées ou sans contexte suffisant."
  }
]

export function ConstatSlide() {
  return (
    <SlideWrapper id="constat" className="bg-[#F6F8FA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-[#143B6D] text-xs font-semibold tracking-wide uppercase rounded-full mb-4 border border-[#E2E8F0]">
            Section 3
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6 text-balance">
            Un site riche, des besoins variés, des parcours parfois complexes
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Laval Économique offre plusieurs ressources, services, programmes et événements aux entrepreneurs. Chaque visiteur arrive avec un contexte différent : démarrage, croissance, financement, exportation, immobilier, événements, accompagnement ou simple recherche d&apos;information. Même avec un site bien structuré, il peut être difficile pour un entrepreneur de savoir quelle action poser.
          </p>
        </motion.div>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-lg hover:border-[#143B6D]/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] flex items-center justify-center flex-shrink-0">
                    <challenge.icon className="w-6 h-6 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1E293B] mb-2">{challenge.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{challenge.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-10">
            <div className="flex items-start gap-6">
              <Quote className="w-10 h-10 text-[#143B6D]/20 flex-shrink-0" />
              <div>
                <p className="text-xl md:text-2xl font-serif text-[#143B6D] leading-relaxed mb-4">
                  Le défi n&apos;est pas seulement de répondre aux questions. C&apos;est de comprendre l&apos;intention derrière chaque visite.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#E8F3FB] text-[#143B6D] text-xs font-medium rounded-full">
                    Comprendre
                  </span>
                  <span className="px-3 py-1 bg-[#50B878]/10 text-[#50B878] text-xs font-medium rounded-full">
                    Orienter
                  </span>
                  <span className="px-3 py-1 bg-[#5B5CE2]/10 text-[#5B5CE2] text-xs font-medium rounded-full">
                    Documenter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
