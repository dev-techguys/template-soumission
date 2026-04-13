import { SlideWrapper } from "../slide-wrapper"
import { Award, MapPin, Shield, Mail } from "lucide-react"
import { client, branding, slides } from "@/lib/proposal-data"

const FACT_ICONS = [Award, MapPin, Shield, Mail]

export function ContextSlide() {
  return (
    <SlideWrapper id="context" className="bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#1B365D] font-sans font-medium">
            02 / Contexte
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1B365D] max-w-2xl leading-tight text-balance">
            {slides.context.headline}
          </h2>
          <p className="text-base text-[#64748b] font-sans leading-relaxed max-w-2xl">
            Une entreprise leader avec un volume croissant de demandes clients qui{" "}
            <span className="text-[#1B365D] font-medium">
              nécessite une automatisation intelligente
            </span>{" "}
            pour optimiser le traitement des courriels.
          </p>
          <div className="w-16 h-px bg-[#1B365D]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <div className="flex flex-col gap-8">
            <p className="text-base text-[#64748b] font-sans leading-relaxed">
              {slides.context.companyDescription}
            </p>

            <p className="text-base text-[#64748b] font-sans leading-relaxed">
              {slides.context.proposalRelevance}
            </p>

            <div className="p-5 rounded-xl border border-[#1B365D]/20 bg-[#1B365D]/5">
              <p className="text-sm text-[#1B365D] font-sans leading-relaxed italic">
                {`\u00AB${slides.context.strategicQuote}\u00BB`}
              </p>
            </div>
          </div>

          {/* Right: Key facts */}
          <div className="grid grid-cols-2 gap-4">
            {slides.context.facts.map((fact, index) => {
              const Icon = FACT_ICONS[index] || Award
              return (
                <div
                  key={fact.label}
                  className="p-6 rounded-xl border border-[#e5e7eb] bg-white flex flex-col gap-3 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1B365D]/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#1B365D]" />
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#64748b] font-sans">
                    {fact.label}
                  </span>
                  <span className="font-serif text-lg text-[#1B365D]">{fact.value}</span>
                  <span className="text-xs text-[#64748b] font-sans">{fact.detail}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Services */}
        <div className="mt-12 flex flex-wrap gap-3">
          {slides.context.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-[#e5e7eb] text-xs tracking-[0.1em] uppercase text-[#64748b] font-sans bg-white shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
