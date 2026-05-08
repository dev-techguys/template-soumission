import { SlideWrapper } from "../slide-wrapper"
import { Globe, Users, Zap, Star } from "lucide-react"

const FACTS = [
  {
    icon: Globe,
    label: "Modèle",
    value: "Agence B2B",
    detail: "Marketing, Tech & Ventes",
  },
  {
    icon: Users,
    label: "Clientèle",
    value: "PMEs Canada",
    detail: "150+ projets réalisés",
  },
  {
    icon: Zap,
    label: "Expertise",
    value: "10+ ans",
    detail: "5M$+ budget pub géré",
  },
  {
    icon: Star,
    label: "Positionnement",
    value: "Copilote Digital",
    detail: "Approche 360°",
  },
]

export function ContextSlide() {
  return (
    <SlideWrapper id="context" className="bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#0DA5B5] font-sans font-medium">
            02 / Contexte
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#111827] max-w-2xl leading-tight text-balance">
            L{"'"}entreprise
          </h2>
          <p className="text-base text-[#6B7280] font-sans leading-relaxed max-w-2xl">
            Une agence établie avec un historique de résultats solides, qui cherche à <span className="text-[#0DA5B5] font-medium">scaler ses propres opérations</span> et à devenir une référence incontournable dans son marché.
          </p>
          <div className="w-16 h-px bg-[#0DA5B5]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <div className="flex flex-col gap-8">
            <p className="text-base text-[#6B7280] font-sans leading-relaxed">
              Omnigo.ca est une <span className="text-[#111827] font-medium">agence de marketing et technologie B2B</span> dont la mission est d{"'"}agir comme copilote digital pour ses clients. En alignant marketing, ventes et technologie, Omnigo aide les PMEs québécoises et canadiennes à accélérer leur croissance numérique de manière rapide et durable.
            </p>

            <p className="text-base text-[#6B7280] font-sans leading-relaxed">
              Fort de plus de <span className="text-[#111827] font-medium">150 projets réalisés et 5M$+ de budget publicitaire géré</span>, Omnigo est prête à franchir une nouvelle étape : scaler ses propres opérations, améliorer sa visibilité organique et automatiser ses processus internes pour libérer du temps et augmenter la capacité.
            </p>

            <div className="p-5 rounded-xl border border-[#0DA5B5]/20 bg-[#0DA5B5]/5">
              <p className="text-sm text-[#0DA5B5] font-sans leading-relaxed italic">
                {`«Votre Copilote Digital — aligner marketing, ventes et technologie pour une croissance numérique rapide et durable.»`}
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
                <div className="w-10 h-10 rounded-xl bg-[#0DA5B5]/10 flex items-center justify-center">
                  <fact.icon className="w-4 h-4 text-[#0DA5B5]" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#6B7280] font-sans">
                  {fact.label}
                </span>
                <span className="font-serif text-lg text-[#111827]">{fact.value}</span>
                <span className="text-xs text-[#6B7280] font-sans">{fact.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mt-12 flex flex-wrap gap-3">
          {["Marketing Digital", "Développement Technologique", "Optimisation des Ventes", "SEO & Contenu", "Campagnes Publicitaires", "Automatisation"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-[#e5e7eb] text-xs tracking-[0.1em] uppercase text-[#6B7280] font-sans bg-white shadow-sm"
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
