import { SlideWrapper } from "../slide-wrapper"
import { Truck, Globe, Award, MapPin } from "lucide-react"

const FACTS = [
  {
    icon: Truck,
    label: "Modèle",
    value: "Asset-Based",
    detail: "Flotte propre Volvo",
  },
  {
    icon: Globe,
    label: "Couverture",
    value: "Canada + USA",
    detail: "Cross-border 24/7",
  },
  {
    icon: Award,
    label: "Reconnaissance",
    value: "Platine Northbridge",
    detail: "Prix Québec #1 Transport",
  },
  {
    icon: MapPin,
    label: "Expansion",
    value: "5 bureaux",
    detail: "D'ici décembre 2026",
  },
]

const SERVICES = [
  "FTL (Camion complet)",
  "LTL (Groupage)",
  "Réfrigéré (Reefer)",
  "Hors-gabarit",
  "Transport urgent",
  "Transfrontalier",
  "Logistique 3PL",
  "Intermodal",
]

export function ContextSlide() {
  return (
    <SlideWrapper id="context" className="bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
            02 / Contexte
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-2xl leading-tight text-balance">
            Safex Transport
          </h2>
          <p className="text-base text-[#64748b] font-sans leading-relaxed max-w-2xl">
            Un transporteur asset-based établi qui investit dans la technologie pour <span className="text-[#ff7000] font-medium">se différencier dans un marché compétitif</span> et offrir une expérience client supérieure.
          </p>
          <div className="w-16 h-px bg-[#ff7000]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <div className="flex flex-col gap-8">
            <p className="text-base text-[#64748b] font-sans leading-relaxed">
              <span className="text-[#0f172a] font-medium">Safex Transport</span> opère au Canada et aux États-Unis depuis 2014, basé à Vaudreuil-Dorion, QC. L{"'"}entreprise possède sa propre flotte de tracteurs et remorques Volvo, avec 25 nouvelles acquisitions récentes, offrant une gamme complète de services de transport et logistique.
            </p>

            <p className="text-base text-[#64748b] font-sans leading-relaxed">
              La clientèle cible comprend des <span className="text-[#0f172a] font-medium">expéditeurs B2B</span> — gestionnaires de chaîne d{"'"}approvisionnement, directeurs logistiques et acheteurs transport chez des manufacturiers, distributeurs et détaillants nord-américains.
            </p>

            <div className="p-5 rounded-xl border border-[#ff7000]/20 bg-[#ff7000]/5">
              <p className="text-sm text-[#ff7000] font-sans leading-relaxed italic">
                {`«Un asset-based carrier coast-to-coast avec une expertise cross-border et une disponibilité 24/7 — la combinaison qui fait la différence pour les expéditeurs exigeants.»`}
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
                <div className="w-10 h-10 rounded-xl bg-[#ff7000]/10 flex items-center justify-center">
                  <fact.icon className="w-4 h-4 text-[#ff7000]" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#64748b] font-sans">
                  {fact.label}
                </span>
                <span className="font-serif text-lg text-[#0f172a]">{fact.value}</span>
                <span className="text-xs text-[#64748b] font-sans">{fact.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mt-12 flex flex-wrap gap-3">
          {SERVICES.map((tag) => (
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
