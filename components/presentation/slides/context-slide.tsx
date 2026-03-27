import { SlideWrapper } from "../slide-wrapper"
import { Globe, Users, Zap, Star } from "lucide-react"

const FACTS = [
  {
    icon: Globe,
    label: "Plateforme",
    value: "SaaS B2B",
    detail: "Expérience client",
  },
  {
    icon: Users,
    label: "Clientèle",
    value: "PME & Entreprises",
    detail: "Canada & International",
  },
  {
    icon: Zap,
    label: "Technologie actuelle",
    value: "WordPress",
    detail: "À migrer vers sur mesure",
  },
  {
    icon: Star,
    label: "Positionnement",
    value: "Leader CX",
    detail: "Satisfaction client",
  },
]

export function ContextSlide() {
  return (
    <SlideWrapper id="context" className="bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
            02 / Contexte
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-2xl leading-tight text-balance">
            L{"'"}entreprise
          </h2>
          <p className="text-base text-[#6b7280] font-sans leading-relaxed max-w-2xl">
            Une plateforme SaaS innovante, mais un site web WordPress qui <span className="text-[#387B84] font-medium">limite l{"'"}agilité et la capacité d{"'"}adaptation</span> dans un marché en constante évolution.
          </p>
          <div className="w-16 h-px bg-[#387B84]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <div className="flex flex-col gap-8">
            <p className="text-base text-[#6b7280] font-sans leading-relaxed">
              InputKit est une <span className="text-[#2d3748] font-medium">plateforme de gestion d{"'"}expérience client</span> qui aide les entreprises à collecter, analyser et agir sur les retours de leurs clients. La solution permet d{"'"}améliorer la satisfaction client, de gérer les avis en ligne et d{"'"}optimiser la réputation des entreprises.
            </p>

            <p className="text-base text-[#6b7280] font-sans leading-relaxed">
              L{"'"}objectif de cette proposition est de <span className="text-[#2d3748] font-medium">migrer le site WordPress vers une solution sur mesure</span>, offrant une plus grande agilité grâce à l{"'"}intelligence artificielle et permettant des modifications rapides sans dépendre d{"'"}un CMS traditionnel.
            </p>

            <div className="p-5 rounded-xl border border-[#387B84]/20 bg-[#387B84]/5">
              <p className="text-sm text-[#387B84] font-sans leading-relaxed italic">
                {`\u00ABPasser d'un environnement WordPress fermé vers un écosystème ouvert, agile et propulsé par l'IA pour réagir plus rapidement aux besoins du marché.\u00BB`}
              </p>
            </div>
          </div>

          {/* Right: Key facts */}
          <div className="grid grid-cols-2 gap-4">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="p-6 rounded-xl border border-[#e5e7eb] bg-white flex flex-col gap-3 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#387B84]/10 flex items-center justify-center">
                  <fact.icon className="w-4 h-4 text-[#387B84]" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans">
                  {fact.label}
                </span>
                <span className="font-serif text-lg text-[#2d3748]">{fact.value}</span>
                <span className="text-xs text-[#6b7280] font-sans">{fact.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mt-12 flex flex-wrap gap-3">
          {["Gestion d'avis", "Sondages clients", "NPS & CSAT", "Réputation en ligne", "Analytics CX", "Automatisation"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-[#e5e7eb] text-xs tracking-[0.1em] uppercase text-[#6b7280] font-sans bg-white shadow-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </SlideWrapper>
  )
}
