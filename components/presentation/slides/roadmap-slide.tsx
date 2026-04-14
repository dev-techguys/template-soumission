"use client"

import { SlideWrapper } from "../slide-wrapper"
import { useEffect, useRef, useState } from "react"
import { Search, Cpu, Rocket, CheckSquare } from "lucide-react"
import { branding, slides } from "@/lib/proposal-data"

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Search,
  Cpu,
  Rocket,
}

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
  const Icon = ICON_MAP[phase.icon]
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
              isVisible ? "shadow-lg" : ""
            }`}
            style={{
              borderColor: isVisible ? branding.primaryColor : "#e5e7eb",
              backgroundColor: isVisible ? `${branding.primaryColor}15` : "white",
            }}
          >
            <span className="font-serif text-lg md:text-xl font-semibold" style={{ color: branding.primaryColor }}>
              {index + 1}
            </span>
          </div>
          {!isLast && (
            <div className="w-px flex-1 bg-[#e5e7eb] relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-out ${
                  isVisible ? "h-full" : "h-0"
                }`}
                style={{
                  background: `linear-gradient(to bottom, ${branding.primaryColor}99, ${branding.primaryColor}15)`,
                  transitionDelay: `${index * 100 + 400}ms`,
                }}
              />
            </div>
          )}
        </div>

        {/* Right: card */}
        <div className="flex-1">
          <div className="rounded-xl border border-[#e5e7eb] bg-white hover:shadow-lg transition-all duration-500 overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-px"
              style={{ background: `linear-gradient(to right, ${branding.primaryColor}4d, transparent)` }}
            />

            {/* Card header */}
            <div className="px-5 pt-5 pb-3 md:px-7 md:pt-6 md:pb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${branding.primaryColor}15` }}
                >
                  <Icon className="w-4 h-4" style={{ color: branding.primaryColor }} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl leading-tight" style={{ color: branding.textDark }}>
                  {phase.title}
                </h3>
              </div>
              <p
                className="text-sm font-sans leading-relaxed mt-3 pl-12"
                style={{ color: branding.textMuted }}
              >
                {phase.why}
              </p>
            </div>

            {/* Actions list */}
            <div className="px-5 pb-5 md:px-7 md:pb-6 flex flex-col gap-2.5">
              {phase.actions.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3.5 md:p-4 rounded-xl border border-[#e5e7eb] hover:border-[#d1d5db] transition-colors"
                  style={{ backgroundColor: branding.backgroundLight }}
                >
                  <div className="shrink-0 mt-0.5">
                    <CheckSquare className="w-4 h-4" style={{ color: `${branding.primaryColor}80` }} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-sm font-sans font-medium leading-snug"
                      style={{ color: branding.textDark }}
                    >
                      {item.task}
                    </span>
                    <span
                      className="text-xs font-sans leading-relaxed"
                      style={{ color: branding.textMuted }}
                    >
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
    <SlideWrapper id="roadmap" style={{ backgroundColor: branding.backgroundLight }}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 w-full">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-14">
          <span
            className="text-xs tracking-[0.4em] uppercase font-sans font-medium"
            style={{ color: branding.primaryColor }}
          >
            04 / Feuille de route
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl max-w-3xl leading-tight text-balance"
            style={{ color: branding.textDark }}
          >
            {slides.roadmap.title}
          </h2>
          <div className="w-16 h-px" style={{ backgroundColor: branding.primaryColor }} />
          <p
            className="text-base font-sans max-w-2xl leading-relaxed whitespace-pre-line"
            style={{ color: branding.textMuted }}
          >
            {slides.roadmap.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
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
      </div>
    </SlideWrapper>
  )
}
