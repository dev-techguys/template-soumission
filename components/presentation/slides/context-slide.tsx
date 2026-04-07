import { SlideWrapper } from "../slide-wrapper"
import { Globe, Users, Zap, Star } from "lucide-react"
import type { ContextData, ClientInfo } from "@/lib/proposal-data"

interface ContextSlideProps {
  client: ClientInfo
  context: ContextData
}

const FACT_ICONS = [Globe, Users, Zap, Star]

export function ContextSlide({ client, context }: ContextSlideProps) {
  const facts = [
    { label: "Entreprise", value: client.companyName },
    { label: "Segments cibles", value: context.audienceSegments.join(" & ") },
    { label: "Offre", value: context.serviceTags[0] ?? "—" },
    { label: "Marché", value: context.audienceSegments.slice(-1)[0] ?? "—" },
  ]

  return (
    <SlideWrapper id="context" className="bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase font-sans font-medium"
            style={{ color: "var(--color-primary)" }}>
            02 / Contexte
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-2xl leading-tight text-balance">
            L&apos;entreprise
          </h2>
          <div className="w-16 h-px" style={{ backgroundColor: "var(--color-primary)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <div className="flex flex-col gap-6">
            <p className="text-base text-[#6b7280] font-sans leading-relaxed">
              {context.companyDescription}
            </p>
            <p className="text-base text-[#6b7280] font-sans leading-relaxed">
              {context.offerDescription}
            </p>

            {/* Audience segments */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans">
                Segments d&apos;audience cible
              </span>
              <div className="flex flex-wrap gap-2">
                {context.audienceSegments.map((segment) => (
                  <span
                    key={segment}
                    className="px-3 py-1.5 rounded-full text-xs font-sans font-medium border"
                    style={{
                      color: "var(--color-primary)",
                      borderColor: "color-mix(in srgb, var(--color-primary) 30%, transparent)",
                      backgroundColor: "color-mix(in srgb, var(--color-primary) 8%, transparent)",
                    }}
                  >
                    {segment}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Key facts */}
          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact, i) => {
              const Icon = FACT_ICONS[i]
              return (
                <div
                  key={fact.label}
                  className="p-6 rounded-xl border border-[#e5e7eb] bg-white flex flex-col gap-3 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)" }}>
                    <Icon className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans">
                    {fact.label}
                  </span>
                  <span className="font-serif text-lg text-[#2d3748]">{fact.value}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Service tags */}
        <div className="mt-12 flex flex-wrap gap-3">
          {context.serviceTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-[#e5e7eb] text-xs tracking-[0.1em] uppercase text-[#6b7280] font-sans bg-white shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
