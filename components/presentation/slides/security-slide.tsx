"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { Shield, FileCheck, Lock, UserCheck, KeyRound, Users, TrendingUp, CheckCircle2 } from "lucide-react"

const principles = [
  {
    icon: FileCheck,
    title: "Contenus validés",
    description: "Les réponses de l'agent doivent s'appuyer sur des sources approuvées par Laval Économique."
  },
  {
    icon: Shield,
    title: "Connexion prudente à la base de données",
    description: "Les règles de lecture, création et modification doivent être définies avant l'intégration."
  },
  {
    icon: Lock,
    title: "Protection des données personnelles",
    description: "Les données collectées doivent être minimisées, protégées et utilisées pour des fins claires."
  },
  {
    icon: UserCheck,
    title: "Consentement utilisateur",
    description: "Lorsqu'une information personnelle est collectée, l'utilisateur doit comprendre pourquoi."
  },
  {
    icon: KeyRound,
    title: "Accès contrôlés",
    description: "Le dashboard et les données doivent être accessibles uniquement aux personnes autorisées."
  },
  {
    icon: Users,
    title: "Redirection vers humain",
    description: "En cas d'incertitude, de demande sensible ou de limite de l'agent, l'humain doit prendre le relais."
  },
  {
    icon: TrendingUp,
    title: "Amélioration encadrée",
    description: "L'agent peut être amélioré avec les données d'usage, mais les ajustements importants doivent être validés."
  }
]

const checklist = [
  "Données collectées",
  "Consentement",
  "Hébergement",
  "Accès admin",
  "Champs modifiables",
  "Historique des actions",
  "Durée de conservation",
  "Procédure de suppression",
  "Procédure de correction",
  "Limites de réponse"
]

export function SecuritySlide() {
  return (
    <SlideWrapper id="security" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FFF7ED] text-[#F97316] text-xs font-semibold tracking-wide uppercase rounded-full mb-4 border border-[#F97316]/20">
            Section 12
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Un agent contrôlé, sécuritaire et gouverné
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Puisque l&apos;agent peut interagir avec des visiteurs, des données et potentiellement des dossiers existants, le projet doit être conçu avec une gouvernance claire dès le départ.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="bg-[#F6F8FA] rounded-2xl p-5 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1E293B] mb-1">{principle.title}</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-[#F6F8FA] rounded-2xl p-6">
            <h3 className="text-sm font-bold text-[#1E293B] mb-4 text-center">Checklist de gouvernance</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {checklist.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + 0.05 * index }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#E2E8F0]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#50B878]" />
                  <span className="text-xs text-[#64748B]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-[#FFF7ED] rounded-2xl border border-[#F97316]/20 p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1E293B] mb-2">Important</h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  L&apos;agent ne doit pas promettre une admissibilité, remplacer un conseiller ou prendre des décisions sensibles. Il doit <span className="font-semibold text-[#1E293B]">informer, orienter, qualifier et documenter</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
