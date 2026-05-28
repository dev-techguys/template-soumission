"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { Database, X, Check, ArrowRight, Shield, FileText, Users, Search, PenLine, AlertTriangle } from "lucide-react"

const withoutConnection = [
  "Le visiteur pose une question",
  "L'information reste dans le chat ou le formulaire",
  "L'équipe doit retraiter manuellement la demande",
  "Les données peuvent rester isolées",
  "Le suivi dépend du transfert manuel"
]

const withConnection = [
  "Le visiteur est identifié ou qualifié",
  "L'agent vérifie si un dossier existe",
  "Une nouvelle information peut être ajoutée",
  "Un résumé peut être transmis à l'équipe",
  "La base de données devient plus utile et à jour"
]

const features = [
  { icon: Search, text: "Vérification d'un contact existant à partir d'un courriel, téléphone, nom ou NEC" },
  { icon: PenLine, text: "Création potentielle d'une nouvelle entrée si aucun dossier n'existe" },
  { icon: FileText, text: "Enrichissement contrôlé de certains champs" },
  { icon: Users, text: "Ajout d'un résumé de besoin ou d'intention" },
  { icon: ArrowRight, text: "Transmission à la bonne équipe" },
  { icon: Shield, text: "Protection contre l'écrasement de données existantes" },
  { icon: AlertTriangle, text: "Journalisation des actions importantes" },
  { icon: Database, text: "Permissions d'accès claires" }
]

export function BesoinDatabaseSlide() {
  return (
    <SlideWrapper id="besoin-database" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#5B5CE2]/10 text-[#5B5CE2] text-xs font-semibold tracking-wide uppercase rounded-full mb-4">
            Besoin 1
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Connecter l&apos;agent aux données existantes
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            L&apos;agent IA doit pouvoir devenir une passerelle entre les interactions du site web et la base de données actuelle de Laval Économique. Cette connexion doit être contrôlée, sécurisée et définie selon des règles précises.
          </p>
        </motion.div>

        {/* Comparison columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Without connection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-[#FFF7ED] rounded-2xl border border-[#F97316]/20 p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-[#F97316]" />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B]">Sans connexion</h3>
              </div>
              <ul className="space-y-3">
                {withoutConnection.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 flex-shrink-0" />
                    <span className="text-sm text-[#64748B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* With connection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#50B878]/5 rounded-2xl border border-[#50B878]/20 p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#50B878]/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#50B878]" />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B]">Avec connexion</h3>
              </div>
              <ul className="space-y-3">
                {withConnection.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#50B878] mt-2 flex-shrink-0" />
                    <span className="text-sm text-[#64748B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-[#F6F8FA] rounded-2xl p-8 overflow-x-auto">
            <div className="flex items-center justify-center gap-3 min-w-max text-sm">
              <FlowStep label="Visiteur" color="gray" />
              <ArrowRight className="w-4 h-4 text-[#64748B]" />
              <FlowStep label="Agent IA" color="blue" />
              <ArrowRight className="w-4 h-4 text-[#64748B]" />
              <FlowStep label="Vérification" color="indigo" />
              <ArrowRight className="w-4 h-4 text-[#64748B]" />
              <FlowStep label="Dossier existant / nouveau" color="green" />
              <ArrowRight className="w-4 h-4 text-[#64748B]" />
              <FlowStep label="Résumé" color="orange" />
              <ArrowRight className="w-4 h-4 text-[#64748B]" />
              <FlowStep label="Équipe interne" color="gray" />
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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

        {/* Governance note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-[#FFF7ED] rounded-2xl border border-[#F97316]/20 p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[#F97316]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#1E293B] mb-2">Note de gouvernance</h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  La connexion à la base de données devra être conçue avec une logique de prudence : lire avant d&apos;écrire, valider les champs modifiables, éviter les doublons et protéger les données existantes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

function FlowStep({ label, color }: { label: string; color: string }) {
  const colors: Record<string, string> = {
    gray: "bg-white border-[#E2E8F0] text-[#64748B]",
    blue: "bg-[#E8F3FB] border-[#143B6D]/20 text-[#143B6D]",
    indigo: "bg-[#5B5CE2]/10 border-[#5B5CE2]/20 text-[#5B5CE2]",
    green: "bg-[#50B878]/10 border-[#50B878]/20 text-[#50B878]",
    orange: "bg-[#FFF7ED] border-[#F97316]/20 text-[#F97316]"
  }

  return (
    <span className={`px-4 py-2 rounded-lg border font-medium ${colors[color]}`}>
      {label}
    </span>
  )
}
