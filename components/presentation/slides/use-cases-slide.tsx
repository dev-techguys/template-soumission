"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { Rocket, Banknote, Globe, Building2, Calendar, User, Phone, Target, Database, FileText, MessageCircle } from "lucide-react"
import { useState } from "react"

const useCases = [
  {
    id: "demarrage",
    icon: Rocket,
    title: "Démarrage sans plan d'affaires",
    question: "J'ai une idée d'entreprise, mais pas encore de plan d'affaires.",
    steps: [
      "Identifie une intention prédémarrage",
      "Pose 1 à 3 questions de clarification",
      "Recommande l'atelier de validation ou la trousse entrepreneur",
      "Propose une inscription ou un contact humain",
      "Enregistre l'intention dans le dashboard"
    ],
    color: "blue"
  },
  {
    id: "financement",
    icon: Banknote,
    title: "Recherche de financement",
    question: "Je cherche du financement pour mon entreprise.",
    steps: [
      "Demande le stade de l'entreprise",
      "Demande le type de besoin",
      "Recommande la bonne page ou le bon service",
      "Peut transmettre un résumé à l'équipe",
      "Permet de suivre le volume des demandes"
    ],
    color: "green"
  },
  {
    id: "exportation",
    icon: Globe,
    title: "Exportation",
    question: "Je veux vendre à l'extérieur du Québec.",
    steps: [
      "Identifie une intention exportation",
      "Vérifie le niveau de maturité de l'entreprise",
      "Oriente vers les ressources ou experts pertinents",
      "Documente l'intention dans le dashboard"
    ],
    color: "indigo"
  },
  {
    id: "immobilier",
    icon: Building2,
    title: "Recherche de local",
    question: "Je cherche un local commercial à Laval.",
    steps: [
      "Identifie un besoin immobilier",
      "Pose des questions sur le type d'espace recherché",
      "Oriente vers la bonne ressource ou personne",
      "Permet de mesurer la demande immobilière"
    ],
    color: "orange"
  },
  {
    id: "evenements",
    icon: Calendar,
    title: "Événements",
    question: "Quels sont les prochains événements pour les entrepreneurs?",
    steps: [
      "Affiche les événements pertinents",
      "Redirige vers la bonne page ou Eventbrite",
      "Peut recommander selon le profil",
      "Mesure les événements les plus demandés"
    ],
    color: "teal"
  },
  {
    id: "connu",
    icon: User,
    title: "Client déjà connu",
    question: "J'ai déjà parlé avec Laval Économique l'an dernier.",
    steps: [
      "Peut demander un courriel ou identifiant",
      "Vérifie si un dossier existe",
      "Évite de recréer un dossier inutile",
      "Ajoute un résumé ou prépare un suivi"
    ],
    color: "blue"
  },
  {
    id: "humain",
    icon: Phone,
    title: "Besoin d'humain",
    question: "Je ne comprends pas, je veux parler à quelqu'un.",
    steps: [
      "Reconnaît la limite de l'automatisation",
      "Propose un téléphone, courriel ou page contact",
      "Peut transmettre le contexte de la demande",
      "Évite que l'utilisateur recommence son explication"
    ],
    color: "gray"
  }
]

export function UseCasesSlide() {
  const [selectedCase, setSelectedCase] = useState(useCases[0])

  return (
    <SlideWrapper id="use-cases" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#E8F3FB] text-[#143B6D] text-xs font-semibold tracking-wide uppercase rounded-full mb-4">
            Section 10
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Ce que l&apos;agent pourrait faire concrètement
          </h2>
        </motion.div>

        {/* Use case selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Case list */}
          <div className="space-y-2">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setSelectedCase(useCase)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                  selectedCase.id === useCase.id
                    ? "bg-[#143B6D] text-white"
                    : "bg-[#F6F8FA] text-[#1E293B] hover:bg-[#E8F3FB]"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  selectedCase.id === useCase.id
                    ? "bg-white/20"
                    : "bg-white"
                }`}>
                  <useCase.icon className={`w-5 h-5 ${
                    selectedCase.id === useCase.id
                      ? "text-white"
                      : "text-[#143B6D]"
                  }`} />
                </div>
                <span className="text-sm font-medium">{useCase.title}</span>
              </button>
            ))}
          </div>

          {/* Case detail */}
          <div className="lg:col-span-2">
            <motion.div
              key={selectedCase.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F6F8FA] rounded-3xl p-6 lg:p-8 h-full"
            >
              {/* Question */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#64748B] flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] font-medium">Question</span>
                    <p className="text-[#1E293B] font-medium">&quot;{selectedCase.question}&quot;</p>
                  </div>
                </div>
              </div>

              {/* Agent response flow */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="w-4 h-4 text-[#143B6D]" />
                  <span className="text-sm font-semibold text-[#1E293B]">L&apos;agent IA :</span>
                </div>
                <div className="space-y-3">
                  {selectedCase.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#143B6D] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-sm text-[#64748B]">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mini flow */}
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-4">
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B] flex-wrap">
                  <span className="px-3 py-1.5 bg-[#F6F8FA] rounded-lg flex items-center gap-1.5">
                    <MessageCircle className="w-3 h-3" /> Question
                  </span>
                  <span>→</span>
                  <span className="px-3 py-1.5 bg-[#5B5CE2]/10 text-[#5B5CE2] rounded-lg flex items-center gap-1.5">
                    <Target className="w-3 h-3" /> Intention
                  </span>
                  <span>→</span>
                  <span className="px-3 py-1.5 bg-[#E8F3FB] text-[#143B6D] rounded-lg flex items-center gap-1.5">
                    <FileText className="w-3 h-3" /> Action
                  </span>
                  <span>→</span>
                  <span className="px-3 py-1.5 bg-[#50B878]/10 text-[#50B878] rounded-lg flex items-center gap-1.5">
                    <Database className="w-3 h-3" /> Donnée captée
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
