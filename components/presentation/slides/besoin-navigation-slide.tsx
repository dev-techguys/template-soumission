"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { Globe, MessageCircle, FileText, Calendar, Phone, ArrowRight, Search, Languages, CheckCircle2 } from "lucide-react"
import { useState } from "react"

const questions = [
  {
    question: "Je veux démarrer une entreprise à Laval.",
    response: "Page Démarrage + Atelier de validation",
    type: "page"
  },
  {
    question: "Je cherche du financement.",
    response: "Section Financement + Formulaire de contact",
    type: "resource"
  },
  {
    question: "Je veux vendre à l'extérieur du Québec.",
    response: "Section Exportation + Conseiller expert",
    type: "contact"
  },
  {
    question: "Je cherche un local commercial.",
    response: "Section Immobilier + Ressources disponibles",
    type: "page"
  },
  {
    question: "Quels sont les prochains événements?",
    response: "Calendrier Eventbrite + Recommandations",
    type: "event"
  },
  {
    question: "Je veux parler à quelqu'un.",
    response: "Formulaire de contact + Numéro direct",
    type: "contact"
  }
]

const features = [
  { icon: Search, text: "Indexation ou connexion au contenu du site complet" },
  { icon: MessageCircle, text: "Compréhension des questions en langage naturel" },
  { icon: FileText, text: "Recommandation de pages pertinentes" },
  { icon: ArrowRight, text: "Redirection vers les bons services" },
  { icon: MessageCircle, text: "Capacité à poser des questions de clarification" },
  { icon: CheckCircle2, text: "Capacité à proposer une action concrète" },
  { icon: Globe, text: "Mise à jour du contexte quand le site évolue" },
  { icon: Languages, text: "Bilinguisme français et anglais si requis" }
]

export function BesoinNavigationSlide() {
  const [selectedQuestion, setSelectedQuestion] = useState(0)

  return (
    <SlideWrapper id="besoin-navigation" className="bg-[#F6F8FA]">
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
            Besoin 2
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Rendre tout le site plus facile à naviguer
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            L&apos;agent IA doit pouvoir comprendre les questions des visiteurs et les orienter dans l&apos;ensemble du site web de Laval Économique. L&apos;utilisateur ne devrait pas avoir besoin de connaître le nom exact d&apos;un programme ou d&apos;une ressource pour être dirigé au bon endroit.
          </p>
        </motion.div>

        {/* Interactive question selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
            {/* Chat header */}
            <div className="bg-[#143B6D] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Agent IA Laval Économique</h3>
                  <span className="text-white/60 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#50B878]" />
                    En ligne
                  </span>
                </div>
              </div>
            </div>

            {/* Questions and responses */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Question list */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wide mb-3">
                    Exemples de questions
                  </p>
                  {questions.map((q, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedQuestion(index)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                        selectedQuestion === index
                          ? "bg-[#E8F3FB] border-2 border-[#143B6D]/20"
                          : "bg-[#F6F8FA] border-2 border-transparent hover:bg-[#E8F3FB]/50"
                      }`}
                    >
                      <span className="text-sm text-[#1E293B]">&quot;{q.question}&quot;</span>
                    </button>
                  ))}
                </div>

                {/* Response preview */}
                <div className="bg-[#F6F8FA] rounded-2xl p-6">
                  <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wide mb-4">
                    Réponse attendue
                  </p>
                  <motion.div
                    key={selectedQuestion}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <ResponseIcon type={questions[selectedQuestion].type} />
                        <div>
                          <p className="text-sm font-medium text-[#1E293B] mb-1">
                            {questions[selectedQuestion].response}
                          </p>
                          <p className="text-xs text-[#64748B]">
                            L&apos;agent oriente vers la ressource la plus pertinente
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#E8F3FB] text-[#143B6D] text-xs font-medium rounded-full">
                        Page pertinente
                      </span>
                      <span className="px-3 py-1 bg-[#50B878]/10 text-[#50B878] text-xs font-medium rounded-full">
                        Ressource recommandée
                      </span>
                      <span className="px-3 py-1 bg-[#5B5CE2]/10 text-[#5B5CE2] text-xs font-medium rounded-full">
                        Action concrète
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-lg font-bold text-[#1E293B] mb-6 text-center">Fonctionnalités attendues</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl border border-[#E2E8F0] p-4">
                <div className="w-8 h-8 rounded-lg bg-[#E8F3FB] flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-4 h-4 text-[#143B6D]" />
                </div>
                <span className="text-xs text-[#64748B] leading-relaxed">{feature.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-[#143B6D] rounded-2xl p-8 text-center">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Le site web devient un point d&apos;accueil actif, pas seulement une bibliothèque de pages.
            </p>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

function ResponseIcon({ type }: { type: string }) {
  const icons: Record<string, { icon: React.ComponentType<{ className?: string }>; bg: string; color: string }> = {
    page: { icon: FileText, bg: "bg-[#E8F3FB]", color: "text-[#143B6D]" },
    resource: { icon: Globe, bg: "bg-[#50B878]/10", color: "text-[#50B878]" },
    contact: { icon: Phone, bg: "bg-[#5B5CE2]/10", color: "text-[#5B5CE2]" },
    event: { icon: Calendar, bg: "bg-[#FFF7ED]", color: "text-[#F97316]" }
  }

  const config = icons[type] || icons.page
  const Icon = config.icon

  return (
    <div className={`w-10 h-10 rounded-xl ${config.bg} flex items-center justify-center flex-shrink-0`}>
      <Icon className={`w-5 h-5 ${config.color}`} />
    </div>
  )
}
