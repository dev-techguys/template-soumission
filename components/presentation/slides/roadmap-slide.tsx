"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Plug, Smartphone, MessageSquare, CreditCard, Search, FileCheck, Shield, Star, Sparkles } from "lucide-react"
import { pricing } from "@/lib/proposal-data"
import { FeatureCard, CardHeading } from "@/components/ui/feature-card"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"

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
}: {
  option: typeof pricing.options[0]
  index: number
}) {
  const Icon = OPTIONS_ICONS[option.id] || Plug
  const priceMin = option.hoursMin * pricing.hourlyRate
  const priceMax = option.hoursMax * pricing.hourlyRate

  return (
    <FeatureCard 
      className={`h-full ${option.recommended ? "border-[#0066FF]/30" : ""}`}
      glowColor={option.recommended ? "#0066FF" : "#3388FF"}
    >
      {/* Recommended badge */}
      {option.recommended && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-[#0066FF] to-[#3388FF] rounded-b-lg">
            <Star className="w-3 h-3 text-white fill-white" />
            <span className="text-[10px] tracking-[0.15em] uppercase font-semibold text-white">
              Recommande
            </span>
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border ${
            option.recommended 
              ? "bg-[#0066FF]/20 border-[#0066FF]/30" 
              : "bg-white/5 border-white/10 group-hover:border-[#0066FF]/30 transition-colors"
          }`}>
            <Icon className={`w-5 h-5 ${option.recommended ? "text-[#0066FF]" : "text-white/60 group-hover:text-[#0066FF] transition-colors"}`} />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#0066FF]/70 block mb-1">
              Option {String.fromCharCode(65 + index)}
            </span>
            <h3 className="text-lg text-white font-medium leading-tight">{option.name}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-white/40 leading-relaxed mb-6 flex-1">
          {option.description}
        </p>

        {/* Footer with pricing */}
        <div className="flex items-end justify-between pt-4 border-t border-white/5">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] text-white/25 uppercase tracking-wider">Effort</span>
            <span className="text-sm text-white/50 font-mono">{option.hoursMin}-{option.hoursMax}h</span>
          </div>
          <div className="flex flex-col gap-0.5 text-right">
            <span className="text-[9px] text-white/25 uppercase tracking-wider">Budget</span>
            <span className={`text-sm font-mono ${option.recommended ? "text-[#0066FF]" : "text-[#3388FF]"}`}>
              {priceMin.toLocaleString()}$ - {priceMax.toLocaleString()}$
            </span>
          </div>
        </div>
      </div>
    </FeatureCard>
  )
}

export function RoadmapSlide() {
  return (
    <SlideWrapper id="roadmap" className="relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Header */}
        <FadeInUp>
          <div className="flex flex-col gap-5 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#0066FF]" />
              </div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#0066FF] font-medium">
                04 / Options additionnelles
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light max-w-4xl leading-[1.1]">
              <span className="text-[#0066FF]">Fonctionnalites</span> disponibles
              <br />
              <span className="text-white/60">en supplement</span>
            </h2>
            <p className="text-base md:text-lg text-white/40 max-w-2xl leading-relaxed">
              Ces fonctionnalites peuvent etre ajoutees au projet des le depart ou apres la mise en production, au meme tarif et dans le meme processus.
            </p>
          </div>
        </FadeInUp>

        {/* Options grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pricing.options.map((option, index) => (
            <StaggerItem key={option.id}>
              <OptionCard
                option={option}
                index={index}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Recommendation note */}
        <FadeInUp delay={0.4}>
          <FeatureCard className="mt-12 p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#0066FF]" />
              </div>
              <div>
                <h4 className="text-lg text-white font-medium mb-2">Notre recommandation</h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  Les options <span className="text-[#0066FF] font-medium">C (PAD)</span> et <span className="text-[#0066FF] font-medium">D (SMS)</span> se completent parfaitement - ensemble, elles automatisent l{"'"}integralite du cycle de recouvrement. C{"'"}est la combinaison la plus recommandee en complement du MVP.
                </p>
              </div>
            </div>
          </FeatureCard>
        </FadeInUp>
      </div>
    </SlideWrapper>
  )
}
