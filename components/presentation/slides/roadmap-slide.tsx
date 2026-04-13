"use client"

import { SlideWrapper } from "../slide-wrapper"
import { useEffect, useRef, useState } from "react"
import { Search, Code, Rocket, CheckSquare, DollarSign, Calendar } from "lucide-react"
import { slides } from "@/lib/proposal-data"

const PHASE_ICONS = [Search, Code, Rocket]

function TimelineCard({
  phase,
  index,
  totalInSection,
  isVisible,
}: {
  phase: (typeof slides.roadmap.phases)[0]
  index: number
  totalInSection: number
  isVisible: boolean
}) {
  const Icon = PHASE_ICONS[index] || Search
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
                ? "border-[#1B365D] bg-[#1B365D]/10 shadow-[0_0_20px_rgba(27,54,93,0.15)]"
                : "border-[#e5e7eb] bg-white"
            }`}
          >
            <span className="font-serif text-lg md:text-xl text-[#1B365D] font-semibold">
              {index + 1}
            </span>
          </div>
          {!isLast && (
            <div className="w-px flex-1 bg-[#e5e7eb] relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 w-full bg-gradient-to-b from-[#1B365D]/60 to-[#243B5C]/10 transition-all duration-1000 ease-out ${
                  isVisible ? "h-full" : "h-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              />
            </div>
          )}
        </div>

        {/* Right: card */}
        <div className="flex-1">
          <div className="rounded-xl border border-[#e5e7eb] bg-white hover:border-[#1B365D]/30 hover:shadow-lg transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#1B365D]/30 to-transparent" />

            {/* Card header */}
            <div className="px-5 pt-5 pb-3 md:px-7 md:pt-6 md:pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#1B365D]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#1B365D]" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-[#1B365D] leading-tight">
                  {phase.title}
                </h3>
              </div>
              <p className="text-sm text-[#64748b] font-sans leading-relaxed mt-3 pl-12">
                {phase.why}
              </p>
            </div>

            {/* Actions list */}
            <div className="px-5 pb-5 md:px-7 md:pb-6 flex flex-col gap-2.5">
              {phase.actions.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3.5 md:p-4 rounded-xl bg-[#f8fafc] border border-[#e5e7eb] hover:border-[#d1d5db] transition-colors"
                >
                  <div className="shrink-0 mt-0.5">
                    <CheckSquare className="w-4 h-4 text-[#1B365D]/50" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-sans font-medium text-[#1B365D] leading-snug">
                      {item.task}
                    </span>
                    <span className="text-xs font-sans text-[#64748b] leading-relaxed">
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

  const { estimation } = slides.roadmap

  return (
    <SlideWrapper id="roadmap" className="bg-[#f8fafc] !min-h-0">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 w-full">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-14">
          <span className="text-xs tracking-[0.4em] uppercase text-[#1B365D] font-sans font-medium">
            04 / Feuille de route
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1B365D] max-w-3xl leading-tight text-balance">
            {"Plan d'implémentation"}
          </h2>
          <div className="w-16 h-px bg-[#1B365D]" />
          <p className="text-base text-[#64748b] font-sans max-w-2xl leading-relaxed">
            Voici le plan d{"'"}exécution proposé pour la mise en place du système d{"'"}automatisation
            des courriels. Cette feuille de route peut être ajustée selon vos priorités.
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative mb-12">
          {slides.roadmap.phases.map((phase, index) => (
            <div key={phase.title} data-index={index}>
              <TimelineCard
                phase={phase}
                index={index}
                totalInSection={slides.roadmap.phases.length}
                isVisible={visibleCards.has(index)}
              />
            </div>
          ))}
        </div>

        {/* Estimation */}
        <div className="p-6 rounded-xl border border-[#1B365D]/20 bg-white shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-xl text-[#1B365D] flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#D4E800]" />
                Estimation du projet
              </h3>
              <p className="text-sm text-[#64748b] font-sans">{estimation.note}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl text-[#1B365D]">
                  {estimation.total.toLocaleString("fr-CA")} $
                </span>
              </div>
              <span className="text-sm text-[#64748b] font-sans">
                {estimation.totalHours}h x {estimation.hourlyRate}$/h
              </span>
            </div>
          </div>

          {/* Monthly fees note */}
          <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-[#64748b] mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-sans font-medium text-[#1B365D]">
                  Frais mensuels potentiels : {slides.roadmap.monthlyFees.min}$ à{" "}
                  {slides.roadmap.monthlyFees.max}$/mois
                </span>
                <span className="text-xs text-[#64748b] font-sans">
                  {slides.roadmap.monthlyFees.note}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
