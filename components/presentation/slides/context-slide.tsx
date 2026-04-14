import { SlideWrapper } from "../slide-wrapper"
import { Building2, Mail, Clock, Award } from "lucide-react"
import { client, branding, slides } from "@/lib/proposal-data"

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Building2,
  Mail,
  Clock,
  Award,
}

export function ContextSlide() {
  return (
    <SlideWrapper id="context" style={{ backgroundColor: branding.backgroundLight }}>
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span
            className="text-xs tracking-[0.4em] uppercase font-sans font-medium"
            style={{ color: branding.primaryColor }}
          >
            02 / Contexte
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight text-balance"
            style={{ color: branding.textDark }}
          >
            L{"'"}entreprise
          </h2>
          <p className="text-base font-sans leading-relaxed max-w-2xl" style={{ color: branding.textMuted }}>
            {slides.context.headline.split("limite").map((part, i) =>
              i === 0 ? (
                part
              ) : (
                <span key={i}>
                  <span className="font-medium" style={{ color: branding.primaryColor }}>
                    limite
                  </span>
                  {part}
                </span>
              )
            )}
          </p>
          <div className="w-16 h-px" style={{ backgroundColor: branding.primaryColor }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <div className="flex flex-col gap-8">
            <p className="text-base font-sans leading-relaxed" style={{ color: branding.textMuted }}>
              {slides.context.description.split("35 ans").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="font-medium" style={{ color: branding.textDark }}>
                      35 ans
                    </span>
                  </span>
                ) : (
                  part
                )
              )}
            </p>

            <p className="text-base font-sans leading-relaxed" style={{ color: branding.textMuted }}>
              L{"'"}objectif de cette proposition est de{" "}
              <span className="font-medium" style={{ color: branding.textDark }}>
                mettre en place un systeme d{"'"}automatisation intelligent
              </span>{" "}
              capable d{"'"}analyser les courriels entrants, identifier le service demande et la
              localisation du client, puis generer une reponse personnalisee avec la succursale
              appropriee en copie.
            </p>

            <div
              className="p-5 rounded-xl"
              style={{
                backgroundColor: branding.primaryColor,
              }}
            >
              <p
                className="text-sm font-sans leading-relaxed italic"
                style={{ color: branding.textOnDark }}
              >
                {`\u00AB${slides.context.quote}\u00BB`}
              </p>
            </div>
          </div>

          {/* Right: Key facts */}
          <div className="grid grid-cols-2 gap-4">
            {slides.context.facts.map((fact) => {
              const Icon = ICON_MAP[fact.icon]
              return (
                <div
                  key={fact.label}
                  className="p-6 rounded-xl border border-[#e5e7eb] bg-white flex flex-col gap-3 shadow-sm"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: branding.primaryColor }}
                  >
                    <Icon className="w-4 h-4" style={{ color: branding.textOnDark }} />
                  </div>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-sans"
                    style={{ color: branding.textMuted }}
                  >
                    {fact.label}
                  </span>
                  <span className="font-serif text-lg" style={{ color: branding.textDark }}>
                    {fact.value}
                  </span>
                  <span className="text-xs font-sans" style={{ color: branding.textMuted }}>
                    {fact.detail}
                  </span>
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
              className="px-4 py-2 rounded-full border border-[#e5e7eb] text-xs tracking-[0.1em] uppercase font-sans bg-white shadow-sm"
              style={{ color: branding.textMuted }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
