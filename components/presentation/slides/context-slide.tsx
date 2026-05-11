"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Bot, TrendingUp, Clock, Shield } from "lucide-react"

const VALUE_PROPS = [
  {
    icon: TrendingUp,
    label: "Conversion",
    value: "+35%",
    detail: "Engagement sur pages service",
  },
  {
    icon: Clock,
    label: "Qualification",
    value: "< 60s",
    detail: "Du premier clic au devis",
  },
  {
    icon: Bot,
    label: "Disponibilite",
    value: "24/7",
    detail: "Sans intervention humaine",
  },
  {
    icon: Shield,
    label: "Conformite",
    value: "Loi 25",
    detail: "Zero PII stocke",
  },
]

const PAIN_POINTS = [
  "Visiteurs qui quittent sans trouver le bon service",
  "Equipe commerciale sollicitee pour des questions basiques",
  "Prospects perdus en dehors des heures de bureau",
  "Pas de qualification avant le formulaire de devis",
]

const SOLUTION_POINTS = [
  "Chaque visiteur est guide vers le bon service en < 60 secondes",
  "L'agent repond aux questions frequentes 24/7 sans intervention",
  "Qualification intelligente avant le formulaire — leads mieux qualifies",
  "Analytics actionables pour optimiser le parcours de conversion",
]

export function ContextSlide() {
  return (
    <SlideWrapper id="context" className="bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
            02 / Le projet
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
            Agent IA de navigation web
          </h2>
          <p className="text-base text-[#64748b] font-sans leading-relaxed max-w-2xl">
            Un widget de chat intelligent qui <span className="text-[#ff7000] font-medium">transforme chaque visiteur en prospect qualifie</span> — disponible 24/7, bilingue, et parfaitement integre a l&apos;identite Safex.
          </p>
          <div className="w-16 h-px bg-[#ff7000]" />
        </div>

        {/* Value props grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {VALUE_PROPS.map((prop) => (
            <div
              key={prop.label}
              className="p-5 rounded-xl border border-[#e5e7eb] bg-white flex flex-col gap-3 shadow-sm hover:border-[#ff7000]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#ff7000]/10 flex items-center justify-center">
                <prop.icon className="w-4 h-4 text-[#ff7000]" />
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#64748b] font-sans">
                {prop.label}
              </span>
              <span className="font-serif text-2xl text-[#0f172a]">{prop.value}</span>
              <span className="text-xs text-[#64748b] font-sans">{prop.detail}</span>
            </div>
          ))}
        </div>

        {/* Pain points vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pain points */}
          <div className="p-6 rounded-xl border border-[#e5e7eb] bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <h3 className="font-serif text-xl text-[#0f172a]">Aujourd&apos;hui</h3>
            </div>
            <div className="flex flex-col gap-3">
              {PAIN_POINTS.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#fef2f2] border border-[#fecaca]">
                  <span className="text-[#ef4444] font-sans text-sm">-</span>
                  <span className="text-sm text-[#0f172a]/80 font-sans leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="p-6 rounded-xl border border-[#10B981]/30 bg-[#10B981]/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              <h3 className="font-serif text-xl text-[#0f172a]">Avec l&apos;agent IA</h3>
            </div>
            <div className="flex flex-col gap-3">
              {SOLUTION_POINTS.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#10B981]/20">
                  <span className="text-[#10B981] font-sans text-sm">+</span>
                  <span className="text-sm text-[#0f172a]/80 font-sans leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 p-6 rounded-xl border border-[#ff7000]/20 bg-[#ff7000]/5">
          <p className="text-base text-[#ff7000] font-sans leading-relaxed italic text-center">
            {`«Un assistant commercial IA qui parle le jargon transport B2B — BOL, lane, spot quote, OTD — et guide chaque visiteur vers la bonne ressource Safex.»`}
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
