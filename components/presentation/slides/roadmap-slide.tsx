"use client"

import { SlideWrapper } from "../slide-wrapper"
import { useEffect, useRef, useState } from "react"
import {
  Wrench,
  TrendingUp,
  Bot,
  CheckSquare,
} from "lucide-react"

const TIMELINE = [
  {
    icon: Wrench,
    phase: "Mois 1",
    title: "Phase 1 : Fondations & Quick Wins",
    why: "Avant d'accélérer, il faut poser des bases solides — un audit honnête et un setup analytics irréprochable garantissent que chaque décision sera guidée par les données.",
    kpi: "+25% trafic organique, CPL -20%",
    actions: [
      {
        task: "Audit SEO complet + setup analytics",
        detail:
          "Analyse technique, on-page et off-page complète. Configuration GA4, GTM et Google Search Console pour un tracking fiable dès le départ.",
      },
      {
        task: "Optimisation des pages stratégiques",
        detail:
          "Correction des erreurs techniques prioritaires, optimisation des balises meta, amélioration de la vitesse et de la structure pour les pages à fort potentiel.",
      },
      {
        task: "Setup Google Ads avec structure de campagnes propre",
        detail:
          "Architecture de campagnes segmentée par service (marketing digital, développement, ventes), avec audiences, messages et budgets alignés sur les mandats premium.",
      },
    ],
  },
  {
    icon: TrendingUp,
    phase: "Mois 2",
    title: "Phase 2 : Croissance & Contenu",
    why: "Avec les fondations en place, on active les leviers de croissance — contenu SEO pour le long terme et optimisation continue des campagnes pour le court terme.",
    kpi: "+40% leads qualifiés, +15% taux de conversion",
    actions: [
      {
        task: "Publication de 4 articles SEO à fort potentiel",
        detail:
          "Création d'articles optimisés ciblant des requêtes stratégiques (ex. «agence marketing Montréal», «automatisation CRM PME»). Chaque article génère du trafic qualifié sur le long terme.",
      },
      {
        task: "Optimisation continue des campagnes (A/B sur annonces)",
        detail:
          "Tests A/B sur les créatifs, titres et CTAs. Réallocation du budget vers les groupes d'annonces les plus performants pour améliorer le ROAS.",
      },
      {
        task: "Landing pages de conversion pour chaque service",
        detail:
          "Création de pages dédiées par service (marketing, tech, ventes) avec parcours de conversion optimisé — formulaire court, preuve sociale, CTA clair.",
      },
    ],
  },
  {
    icon: Bot,
    phase: "Mois 3",
    title: "Phase 3 : Automatisation & Scale",
    why: "L'automatisation transforme les résultats en système — les leads entrent, sont qualifiés et suivis sans effort manuel, libérant l'équipe pour se concentrer sur les clients.",
    kpi: "-60% temps de prospection manuelle, ×3 rendez-vous cédulés",
    actions: [
      {
        task: "Setup CRM avec pipeline de vente automatisé",
        detail:
          "Configuration du pipeline de vente avec étapes, assignation automatique et alertes. Chaque lead entrant est tracké et priorisé sans intervention manuelle.",
      },
      {
        task: "Séquences d'email nurturing",
        detail:
          "Création de séquences automatisées pour convertir les leads froids en rendez-vous qualifiés — segmentées par source, service et niveau d'intention.",
      },
      {
        task: "Rapport de performance mensuel systématique",
        detail:
          "Dashboard unifié SEO + Ads + Conversion avec recommandations priorisées pour le mois suivant. Visibility complète sur le ROI de chaque canal.",
      },
    ],
  },
]

function TimelineCard({
  phase,
  index,
  totalInSection,
  isVisible,
}: {
  phase: (typeof TIMELINE)[0]
  index: number
  totalInSection: number
  isVisible: boolean
}) {
  const Icon = phase.icon
  const isLast = index === totalInSection - 1

  return (
    <div
      className={`relative pb-8 md:pb-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-5 md:gap-8">
        {/* Left: number circle + vertical line */}
        <div className="flex flex-col items-center shrink-0">
          <div
            className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
              isVisible
                ? "border-[#0DA5B5] bg-[#0DA5B5]/10 shadow-[0_0_20px_rgba(13,165,181,0.15)]"
                : "border-[#e5e7eb] bg-white"
            }`}
          >
            <span className="font-serif text-lg md:text-xl text-[#0DA5B5] font-semibold">
              {index + 1}
            </span>
          </div>
          {!isLast && (
            <div className="w-px flex-1 bg-[#e5e7eb] relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 w-full bg-gradient-to-b from-[#0DA5B5]/60 to-[#0DA5B5]/10 transition-all duration-1000 ease-out ${
                  isVisible ? "h-full" : "h-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              />
            </div>
          )}
        </div>

        {/* Right: card */}
        <div className="flex-1">
          <div className="rounded-xl border border-[#e5e7eb] bg-white hover:border-[#0DA5B5]/30 hover:shadow-lg transition-all duration-500 overflow-hidden">
            {/* Card header */}
            <div className="px-5 pt-5 pb-3 md:px-7 md:pt-6 md:pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0DA5B5]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#0DA5B5]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#0DA5B5] font-sans font-medium">
                    {phase.phase}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#111827] leading-tight">
                    {phase.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#6B7280] font-sans leading-relaxed mt-3 pl-12">
                {phase.why}
              </p>
              <div className="mt-3 pl-12">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC43D]/15 border border-[#FFC43D]/30">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#111827]/70 font-sans font-medium">
                    Objectif :
                  </span>
                  <span className="text-[10px] font-sans font-medium text-[#111827]">{phase.kpi}</span>
                </span>
              </div>
            </div>

            {/* Actions list */}
            <div className="px-5 pb-5 md:px-7 md:pb-6 flex flex-col gap-2.5">
              {phase.actions.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3.5 md:p-4 rounded-xl bg-[#f7f7f7] border border-[#e5e7eb] hover:border-[#d1d5db] transition-colors"
                >
                  <div className="shrink-0 mt-0.5">
                    <CheckSquare className="w-4 h-4 text-[#0DA5B5]/50" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-sans font-medium text-[#111827] leading-snug">
                      {item.task}
                    </span>
                    <span className="text-xs font-sans text-[#6B7280] leading-relaxed">
                      {item.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function RoadmapSlide() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    )

    const container = containerRef.current
    if (container) {
      const cards = container.querySelectorAll("[data-index]")
      cards.forEach((card) => observer.observe(card))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <SlideWrapper id="roadmap" className="bg-[#f7f7f7] !min-h-0">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 w-full">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-14">
          <span className="text-xs tracking-[0.4em] uppercase text-[#0DA5B5] font-sans font-medium">
            05 / Feuille de route
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#111827] max-w-3xl leading-tight text-balance">
            Plan d{"'"}action sur 3 mois
          </h2>
          <div className="w-16 h-px bg-[#0DA5B5]" />
          <p className="text-base text-[#6B7280] font-sans max-w-2xl leading-relaxed">
            Un plan structuré en 3 phases pour passer de l{"'"}audit à l{"'"}automatisation — avec des résultats mesurables dès le premier mois.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {TIMELINE.map((phase, localIndex) => (
            <div key={phase.title} data-index={localIndex}>
              <TimelineCard
                phase={phase}
                index={localIndex}
                totalInSection={TIMELINE.length}
                isVisible={visibleCards.has(localIndex)}
              />
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
