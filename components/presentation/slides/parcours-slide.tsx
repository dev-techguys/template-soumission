"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { Globe, MessageCircle, Lightbulb, Search, Database, ArrowRight, BarChart3, Bot, User } from "lucide-react"
import { useState, useEffect } from "react"

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Arrivée sur le site",
    description: "L'entrepreneur arrive avec une question ou un besoin.",
    color: "gray"
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Interaction avec l'agent IA",
    description: "Il pose une question libre ou choisit une option guidée.",
    color: "blue"
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Compréhension de l'intention",
    description: "L'agent identifie s'il s'agit de démarrage, financement, exportation, immobilier, événement, croissance ou autre.",
    color: "indigo"
  },
  {
    number: "04",
    icon: Search,
    title: "Navigation dans le site complet",
    description: "L'agent trouve les contenus, pages ou ressources pertinentes.",
    color: "blue"
  },
  {
    number: "05",
    icon: Database,
    title: "Connexion aux données",
    description: "Si pertinent, l'agent vérifie ou crée un lien avec la base de données actuelle.",
    color: "green"
  },
  {
    number: "06",
    icon: ArrowRight,
    title: "Recommandation ou action",
    description: "L'utilisateur reçoit une ressource, un lien, un événement, un formulaire ou une option de contact humain.",
    color: "orange"
  },
  {
    number: "07",
    icon: BarChart3,
    title: "Dashboard et suivi",
    description: "Laval Économique obtient des données sur l'intention, le parcours et les suivis nécessaires.",
    color: "green"
  }
]

const conversation = [
  { type: "user", text: "Je veux démarrer une entreprise à Laval, mais je n'ai pas encore de plan d'affaires." },
  { type: "agent", text: "Je peux vous guider. Votre entreprise est-elle déjà enregistrée ou êtes-vous encore en validation d'idée?" },
  { type: "user", text: "Je suis encore en validation." },
  { type: "agent", text: "Dans ce cas, l'atelier de validation pourrait être une bonne première étape. Je peux vous montrer les prochaines dates ou vous diriger vers la trousse de l'entrepreneur." },
  { type: "agent", text: "Souhaitez-vous aussi laisser vos coordonnées pour qu'un membre de l'équipe puisse vous orienter?" }
]

export function ParcoursSlide() {
  const [visibleMessages, setVisibleMessages] = useState(0)

  useEffect(() => {
    if (visibleMessages < conversation.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [visibleMessages])

  return (
    <SlideWrapper id="parcours" className="bg-[#F6F8FA]">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white text-[#143B6D] text-xs font-semibold tracking-wide uppercase rounded-full mb-4 border border-[#E2E8F0]">
            Section 9
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Un parcours simple pour l&apos;entrepreneur, structuré pour l&apos;équipe
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-[#E2E8F0] hidden lg:block" />
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="relative"
                >
                  <StepCard {...step} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Conversation example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-bold text-[#1E293B] mb-6 text-center">Exemple de conversation</h3>
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden max-w-2xl mx-auto">
            {/* Chat header */}
            <div className="bg-[#143B6D] px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Agent IA Laval Économique</h3>
                <span className="text-white/60 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#50B878]" />
                  En ligne
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4 min-h-[300px]">
              {conversation.slice(0, visibleMessages).map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start gap-3 ${msg.type === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.type === 'agent' && (
                    <div className="w-8 h-8 rounded-full bg-[#143B6D] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                    msg.type === 'user' 
                      ? 'bg-[#E8F3FB] text-[#143B6D] rounded-tr-md'
                      : 'bg-[#F6F8FA] text-[#1E293B] rounded-tl-md'
                  }`}>
                    {msg.text}
                  </div>
                  {msg.type === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-[#64748B] flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
              {visibleMessages < conversation.length && (
                <div className="flex items-center gap-1 pl-11">
                  <span className="w-2 h-2 rounded-full bg-[#64748B]/40 animate-pulse" />
                  <span className="w-2 h-2 rounded-full bg-[#64748B]/40 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="w-2 h-2 rounded-full bg-[#64748B]/40 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

function StepCard({ number, icon: Icon, title, description, color }: {
  number: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}) {
  const colors: Record<string, { bg: string; iconColor: string }> = {
    gray: { bg: "bg-[#F6F8FA]", iconColor: "text-[#64748B]" },
    blue: { bg: "bg-[#E8F3FB]", iconColor: "text-[#143B6D]" },
    indigo: { bg: "bg-[#5B5CE2]/10", iconColor: "text-[#5B5CE2]" },
    green: { bg: "bg-[#50B878]/10", iconColor: "text-[#50B878]" },
    orange: { bg: "bg-[#FFF7ED]", iconColor: "text-[#F97316]" }
  }

  const c = colors[color] || colors.blue

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 text-center hover:shadow-md transition-shadow">
      <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center mx-auto mb-3 relative`}>
        <Icon className={`w-6 h-6 ${c.iconColor}`} />
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#143B6D] text-white text-[10px] font-bold flex items-center justify-center">
          {number}
        </span>
      </div>
      <h4 className="text-sm font-bold text-[#1E293B] mb-1">{title}</h4>
      <p className="text-[11px] text-[#64748B] leading-relaxed">{description}</p>
    </div>
  )
}
