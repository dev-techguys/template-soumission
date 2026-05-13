"use client"

import { SlideWrapper } from "../slide-wrapper"
import { useEffect, useRef, useState } from "react"
import { Plug, Smartphone, MessageSquare, CreditCard, Search, FileCheck, Shield, Star, Sparkles } from "lucide-react"
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
      className={`group relative rounded-2xl transition-all duration-700 card-hover ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Glass card */}
      <div className={`relative h-full p-6 rounded-2xl overflow-hidden ${
        option.recommended 
          ? "glass-strong border-[#FF6363]/30" 
          : "glass-card"
      }`}>
        {/* Subtle gradient overlay for recommended */}
        {option.recommended && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6363]/5 via-transparent to-transparent pointer-events-none" />
        )}

        {/* Recommended badge */}
        {option.recommended && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#FF6363] to-[#FF8585] rounded-b-xl">
              <Star className="w-3 h-3 text-white fill-white" />
              <span className="text-[10px] tracking-[0.15em] uppercase font-sans font-semibold text-white">
                Recommande
              </span>
            </div>
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              option.recommended 
                ? "bg-[#FF6363]/20 border border-[#FF6363]/30" 
                : "bg-white/5 border border-white/10 group-hover:border-[#FF6363]/30 transition-colors"
            }`}>
              <Icon className={`w-5 h-5 ${option.recommended ? "text-[#FF6363]" : "text-white/60 group-hover:text-[#FF6363] transition-colors"}`} />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#FF6363]/70 font-sans block mb-1">
                Option {String.fromCharCode(65 + index)}
              </span>
              <h3 className="font-serif text-lg text-white leading-tight">{option.name}</h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-white/40 font-sans leading-relaxed mb-6 flex-1">
            {option.description}
          </p>

          {/* Footer with pricing */}
          <div className="flex items-end justify-between pt-4 border-t border-white/5">
            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] text-white/25 font-sans uppercase tracking-wider">Effort</span>
              <span className="text-sm text-white/50 font-mono">{option.hoursMin}-{option.hoursMax}h</span>
            </div>
            <div className="flex flex-col gap-0.5 text-right">
              <span className="text-[9px] text-white/25 font-sans uppercase tracking-wider">Budget</span>
              <span className={`text-sm font-mono ${option.recommended ? "text-[#FF6363]" : "text-[#FF8585]"}`}>
                {priceMin.toLocaleString()}$ - {priceMax.toLocaleString()}$
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const container = containerRef.current
    if (container) {
      const cards = container.querySelectorAll("[data-index]")
      cards.forEach((card) => observer.observe(card))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <SlideWrapper id="roadmap" className="relative !min-h-0">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255, 99, 99, 0.06), transparent 50%),
              radial-gradient(circle at 0% 50%, rgba(255, 99, 99, 0.03), transparent 30%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#FF6363]" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#FF6363] font-sans font-medium">
              04 / Options additionnelles
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-[1.1]">
            <span className="gradient-text">Fonctionnalites</span> disponibles
            <br />
            <span className="text-white/60">en supplement</span>
          </h2>
          <p className="text-base md:text-lg text-white/40 font-sans max-w-2xl leading-relaxed">
            Ces fonctionnalites peuvent etre ajoutees au projet des le depart ou apres la mise en production, au meme tarif et dans le meme processus.
          </p>
        </div>

        {/* Options grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        <div className="mt-12 glass-card rounded-2xl p-6 border-[#FF6363]/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FF6363]/10 border border-[#FF6363]/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#FF6363]" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-white mb-2">Notre recommandation</h4>
              <p className="text-sm text-white/50 font-sans leading-relaxed">
                Les options <span className="text-[#FF6363] font-medium">C (PAD)</span> et <span className="text-[#FF6363] font-medium">D (SMS)</span> se completent parfaitement — ensemble, elles automatisent l{"'"}integralite du cycle de recouvrement. C{"'"}est la combinaison la plus recommandee en complement du MVP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
