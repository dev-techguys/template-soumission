"use client"

import { SlideWrapper } from "../slide-wrapper"
import { AnimatedDiv, AnimatedContainer, AnimatedItem } from "../animated-wrapper"
import { Server, TrendingUp, Clock, Shield } from "lucide-react"

const VALUE_PROPS = [
  {
    icon: Clock,
    label: "Qualification",
    value: "< 60s",
    detail: "Chaque visiteur guidé vers le bon service",
  },
  {
    icon: TrendingUp,
    label: "Leads qualifiés",
    value: "Avant contact",
    detail: "Qualification intelligente pré-formulaire",
  },
  {
    icon: Server,
    label: "Analytics",
    value: "Actionnables",
    detail: "Optimiser le parcours de conversion",
  },
  {
    icon: Shield,
    label: "Conformité",
    value: "Loi 25",
    detail: "Zéro PII stocké",
  },
]

const PAIN_POINTS = [
  "Solutions SaaS avec abonnement mensuel croissant selon le volume",
  "Dépendance à un fournisseur externe — données hors de votre contrôle",
  "Limites de scaling strictes (tokens/mois, conversations/jour)",
  "IA générique qui ne comprend pas le jargon transport B2B",
  "Coûts imprévisibles qui explosent avec la croissance",
]

const SOLUTION_POINTS = [
  "Chaque visiteur guidé vers le bon service en moins de 60 secondes",
  "Qualification intelligente avant le formulaire — leads mieux qualifiés",
  "Analytics actionnables pour optimiser le parcours de conversion",
  "Jargon transport intégré : BOL, lane, spot quote, OTD, FTL/LTL",
  "Investissement one-shot qui supporte la croissance vers 5 bureaux",
]

export function ContextSlide() {
  return (
    <SlideWrapper id="context" className="bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <AnimatedDiv delay={0}>
            <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
              02 / Le projet
            </span>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
              <span className="text-[#ff7000]">Safex AI</span> — votre IA, sur mesure
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <p className="text-base text-[#64748b] font-sans leading-relaxed max-w-2xl">
              Un agent IA <span className="text-[#ff7000] font-medium">personnalisé et propriétaire</span> qui représente Safex Transport. Pas un chatbot générique — une IA construite sur mesure pour votre entreprise, qui vous appartient, et qui évolue avec vos besoins.
            </p>
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>
            <div className="w-16 h-px bg-[#ff7000]" />
          </AnimatedDiv>
        </div>

        {/* Value props grid */}
        <AnimatedContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {VALUE_PROPS.map((prop) => (
            <AnimatedItem key={prop.label}>
              <div className="p-5 rounded-xl border border-[#e5e7eb] bg-white flex flex-col gap-3 shadow-sm hover:border-[#ff7000]/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#ff7000]/10 flex items-center justify-center">
                  <prop.icon className="w-4 h-4 text-[#ff7000]" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#64748b] font-sans">
                  {prop.label}
                </span>
                <span className="font-serif text-2xl text-[#0f172a]">{prop.value}</span>
                <span className="text-xs text-[#64748b] font-sans">{prop.detail}</span>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedContainer>

        {/* Pain points vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pain points */}
          <AnimatedDiv delay={0.4} direction="left">
            <div className="p-6 rounded-xl border border-[#e5e7eb] bg-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <h3 className="font-serif text-xl text-[#0f172a]">Solutions SaaS traditionnelles</h3>
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
          </AnimatedDiv>

          {/* Solution */}
          <AnimatedDiv delay={0.5} direction="right">
            <div className="p-6 rounded-xl border border-[#10B981]/30 bg-[#10B981]/5 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                <h3 className="font-serif text-xl text-[#0f172a]">Safex AI — sur mesure</h3>
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
          </AnimatedDiv>
        </div>

        {/* Quote */}
        <AnimatedDiv delay={0.6}>
          <div className="mt-12 p-6 rounded-xl border border-[#ff7000]/20 bg-[#ff7000]/5">
            <p className="text-base text-[#ff7000] font-sans leading-relaxed italic text-center">
              {`« Safex AI n'est pas un outil loué — c'est un actif stratégique qui vous appartient, construit autour de votre expertise transport. »`}
            </p>
          </div>
        </AnimatedDiv>
      </div>
    </SlideWrapper>
  )
}
