import { SlideWrapper } from "../slide-wrapper"
import { Target, Cpu, BarChart3 } from "lucide-react"
import { client, branding, slides } from "@/lib/proposal-data"

const PILLARS = [
  {
    icon: Target,
    title: "Strategie entrepreneuriale",
    description:
      "Une repartition strategique des ressources pour assurer l'atteinte de vos objectifs d'affaires.",
  },
  {
    icon: Cpu,
    title: "Technologie & automatisation",
    description:
      "Accelerez l'execution de vos projets technologiques grace aux bons outils et a l'IA.",
  },
  {
    icon: BarChart3,
    title: "Marketing & performance",
    description: "Tester, mesurer et optimiser en continu a partir de donnees concretes.",
  },
]

export function AboutSlide() {
  return (
    <SlideWrapper id="about-us" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span
            className="text-xs tracking-[0.4em] uppercase font-sans font-medium"
            style={{ color: branding.primaryColor }}
          >
            01 / Notre approche
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl max-w-2xl leading-tight text-balance"
            style={{ color: branding.textDark }}
          >
            {slides.about.title}
          </h2>
          <div className="w-16 h-px" style={{ backgroundColor: branding.primaryColor }} />
          <p
            className="text-base md:text-lg font-sans max-w-2xl leading-relaxed"
            style={{ color: branding.textMuted }}
          >
            {slides.about.description}
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative p-8 rounded-xl border border-[#e5e7eb] bg-white hover:shadow-lg transition-all duration-500"
              style={
                {
                  "--hover-border": `${branding.primaryColor}4d`,
                } as React.CSSProperties
              }
            >
              <div
                className="absolute top-0 left-0 w-full h-px transition-all duration-500"
                style={{
                  background: `linear-gradient(to right, transparent, ${branding.primaryColor}33, transparent)`,
                }}
              />

              <div className="flex flex-col gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${branding.primaryColor}15` }}
                >
                  <pillar.icon className="w-5 h-5" style={{ color: branding.primaryColor }} />
                </div>
                <h3 className="font-serif text-xl" style={{ color: branding.textDark }}>
                  {pillar.title}
                </h3>
                <p className="text-sm font-sans leading-relaxed" style={{ color: branding.textMuted }}>
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="mt-16 p-6 rounded-xl border border-[#e5e7eb]"
          style={{ backgroundColor: branding.backgroundLight }}
        >
          <p
            className="text-sm font-sans leading-relaxed text-center"
            style={{ color: branding.textMuted }}
          >
            Nous alignons{" "}
            <span className="font-medium" style={{ color: branding.primaryColor }}>
              strategie
            </span>
            ,{" "}
            <span className="font-medium" style={{ color: branding.secondaryColor }}>
              marketing
            </span>
            ,{" "}
            <span className="font-medium" style={{ color: branding.accentColor }}>
              ventes
            </span>{" "}
            et{" "}
            <span className="font-medium" style={{ color: branding.primaryColor }}>
              technologie
            </span>{" "}
            afin d{"'"}optimiser la synergie entre les differentes spheres de votre entreprise et
            maximiser votre retour sur investissement.
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
