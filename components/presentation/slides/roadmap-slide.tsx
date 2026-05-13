"use client"

import { SlideWrapper } from "../slide-wrapper"
import { useEffect, useRef, useState } from "react"
import { Plug, Smartphone, MessageSquare, CreditCard, Search, FileCheck, Shield, Star } from "lucide-react"
import { pricing } from "@/lib/proposal-data"

const OPTIONS_ICONS: Record<string, React.ElementType> = {
  flinks: Plug,
  certm: Search,
  pad: CreditCard,
  sms: MessageSquare,
  portail: FileCheck,
  mobile: Smartphone,
  fintrac: Shield,
}

function OptionCard({
  option,
  index,
  isVisible,
}: {
  option: typeof pricing.options[0]
  index: number
  isVisible: boolean
}) {
  const Icon = OPTIONS_ICONS[option.id] || Plug
  const priceMin = option.hoursMin * pricing.hourlyRate
  const priceMax = option.hoursMax * pricing.hourlyRate

  return (
    <div
      className={`relative p-6 rounded-xl border transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${
        option.recommended
          ? "border-[#0035FF]/40 bg-[#0035FF]/5"
          : "border-white/10 bg-white/[0.02] hover:border-[#0035FF]/30"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {option.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-[#0035FF] rounded-full">
          <Star className="w-3 h-3 text-white" />
          <span className="text-[10px] tracking-[0.15em] uppercase font-sans font-medium text-white">
            Recommandé
          </span>
        </div>
      )}

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#0035FF]/10 border border-[#0035FF]/20 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-[#0035FF]" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#0035FF]/60 font-sans">
              Option {String.fromCharCode(65 + index)}
            </span>
          </div>
          <h3 className="font-serif text-lg text-white mb-2">{option.name}</h3>
          <p className="text-sm text-white/40 font-sans leading-relaxed mb-4">
            {option.description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-white/30 font-sans uppercase tracking-wider">Effort</span>
              <span className="text-sm text-white/60 font-mono">{option.hoursMin}–{option.hoursMax}h</span>
            </div>
            <div className="flex flex-col gap-0.5 text-right">
              <span className="text-[10px] text-white/30 font-sans uppercase tracking-wider">Budget</span>
              <span className="text-sm text-[#3B82F6] font-mono">
                {priceMin.toLocaleString()}$ – {priceMax.toLocaleString()}$
              </span>
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
    <SlideWrapper id="roadmap" className="bg-[#111111] !min-h-0">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20 w-full">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-14">
          <span className="text-xs tracking-[0.4em] uppercase text-[#0035FF] font-sans font-medium">
            04 / Options additionnelles
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white max-w-3xl leading-tight text-balance">
            Fonctionnalités disponibles en supplément
          </h2>
          <div className="w-16 h-px bg-[#0035FF]" />
          <p className="text-base text-white/50 font-sans max-w-2xl leading-relaxed">
            Ces fonctionnalités peuvent être ajoutées au projet dès le départ ou après la mise en production, au même tarif et dans le même processus.
          </p>
        </div>

        {/* Options grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricing.options.map((option, index) => (
            <div key={option.id} data-index={index}>
              <OptionCard
                option={option}
                index={index}
                isVisible={visibleCards.has(index)}
              />
            </div>
          ))}
        </div>

        {/* Recommendation note */}
        <div className="mt-10 p-5 rounded-xl border border-[#0035FF]/20 bg-[#0035FF]/5">
          <p className="text-sm text-[#3B82F6] font-sans leading-relaxed">
            <strong>Recommandation :</strong> Les options C (PAD) et D (SMS) se complètent — ensemble, elles automatisent l{"'"}intégralité du cycle de recouvrement. C{"'"}est la combinaison la plus recommandée en complément du MVP.
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
