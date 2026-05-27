"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { BarChart3, Users, MessageCircle, TrendingUp, Target, FileSearch, Lightbulb, AlertCircle } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  { label: "Conversations mensuelles", value: 428, icon: MessageCircle },
  { label: "Orientées sans humain", value: 62, suffix: "%", icon: TrendingUp },
  { label: "Suivis humains requis", value: 22, icon: Users },
  { label: "Coordonnées captées", value: 48, icon: Target }
]

const intentions = [
  { label: "Démarrage", value: 31, color: "#143B6D" },
  { label: "Financement", value: 18, color: "#50B878" },
  { label: "Événements", value: 14, color: "#5B5CE2" },
  { label: "Immobilier", value: 9, color: "#F97316" },
  { label: "Exportation", value: 7, color: "#14b8a6" }
]

const insights = [
  {
    type: "Opérationnel",
    icon: AlertCircle,
    text: "Plusieurs visiteurs cherchent du financement sans savoir quel programme consulter.",
    color: "orange"
  },
  {
    type: "Contenu",
    icon: FileSearch,
    text: "La page Bootcamp est souvent recommandée après des questions sur le plan d'affaires.",
    color: "blue"
  },
  {
    type: "Stratégique",
    icon: Lightbulb,
    text: "Une hausse des intentions liées à l'immobilier pourrait indiquer un besoin de contenu supplémentaire.",
    color: "green"
  }
]

export function BesoinDashboardSlide() {
  return (
    <SlideWrapper id="besoin-dashboard" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#50B878]/10 text-[#50B878] text-xs font-semibold tracking-wide uppercase rounded-full mb-4">
            Besoin 3
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#143B6D] mb-6">
            Mesurer les intentions, pas seulement les visites
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Le dashboard doit permettre à Laval Économique de comprendre ce que les visiteurs cherchent réellement, quelles questions reviennent souvent, quels services génèrent le plus d&apos;intérêt et quels parcours nécessitent un meilleur accompagnement.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-[#F6F8FA] rounded-3xl border border-[#E2E8F0] p-6 lg:p-8">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#143B6D] flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E293B]">Dashboard Intentions</h3>
                  <span className="text-xs text-[#64748B]">Mai 2026</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-[#FFF7ED] text-[#F97316] text-xs font-medium rounded-full border border-[#F97316]/20">
                Données fictives pour démonstration
              </span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + 0.1 * index }}
                >
                  <StatCard {...stat} />
                </motion.div>
              ))}
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Intentions bar chart */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
                <h4 className="text-sm font-semibold text-[#1E293B] mb-4">Intentions les plus fréquentes</h4>
                <div className="space-y-3">
                  {intentions.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <span className="text-xs text-[#64748B] w-24">{item.label}</span>
                      <div className="flex-1 h-6 bg-[#F6F8FA] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                      <span className="text-sm font-bold text-[#1E293B] w-12 text-right">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Questions list */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
                <h4 className="text-sm font-semibold text-[#1E293B] mb-4">Questions récurrentes</h4>
                <div className="space-y-3">
                  {[
                    "Comment démarrer une entreprise?",
                    "Quels programmes de financement?",
                    "Prochains événements?",
                    "Besoin d'un local commercial",
                    "Comment exporter mes produits?"
                  ].map((question, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-[#E8F3FB] text-[#143B6D] flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-[#64748B]">{question}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + 0.1 * index }}
                >
                  <InsightCard {...insight} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Actionable reports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-lg font-bold text-[#1E293B] mb-4 text-center">Rapports actionnables</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Ajouter une FAQ sur le financement",
              "Clarifier la page des ateliers",
              "Créer un parcours prédémarrage",
              "Mettre en évidence les événements",
              "Documenter les questions export"
            ].map((action, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-[#E8F3FB] text-[#143B6D] text-sm font-medium rounded-full"
              >
                {action}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}

function StatCard({ label, value, suffix, icon: Icon }: { 
  label: string
  value: number
  suffix?: string
  icon: React.ComponentType<{ className?: string }>
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1500
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[#E8F3FB] flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#143B6D]" />
        </div>
      </div>
      <div className="text-2xl font-bold text-[#1E293B]">
        {count}{suffix}
      </div>
      <div className="text-xs text-[#64748B]">{label}</div>
    </div>
  )
}

function InsightCard({ type, icon: Icon, text, color }: {
  type: string
  icon: React.ComponentType<{ className?: string }>
  text: string
  color: string
}) {
  const colors: Record<string, { bg: string; iconBg: string; iconColor: string }> = {
    orange: { bg: "bg-[#FFF7ED]", iconBg: "bg-[#F97316]/20", iconColor: "text-[#F97316]" },
    blue: { bg: "bg-[#E8F3FB]", iconBg: "bg-[#143B6D]/10", iconColor: "text-[#143B6D]" },
    green: { bg: "bg-[#50B878]/5", iconBg: "bg-[#50B878]/20", iconColor: "text-[#50B878]" }
  }

  const c = colors[color] || colors.blue

  return (
    <div className={`${c.bg} rounded-xl p-4`}>
      <div className="flex items-start gap-3">
        <div className={`w-8 h-8 rounded-lg ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-4 h-4 ${c.iconColor}`} />
        </div>
        <div>
          <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">{type}</span>
          <p className="text-sm text-[#1E293B] mt-1">{text}</p>
        </div>
      </div>
    </div>
  )
}
