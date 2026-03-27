import { SlideWrapper } from "../slide-wrapper"
import { Check, Star } from "lucide-react"

const PLANS = [
  {
    name: "Essentielle",
    hours: "10h",
    featured: false,
    rates: [
      { label: "Sans engagement", price: "180$/h", saving: null },
      { label: "Engagement 3 mois", price: "160$/h", saving: "200$/mois" },
      { label: "Engagement 6 mois", price: "150$/h", saving: "300$/mois" },
    ],
  },
  {
    name: "Croissance",
    hours: "25h",
    featured: true,
    rates: [
      { label: "Sans engagement", price: "180$/h", saving: null },
      { label: "Engagement 3 mois", price: "160$/h", saving: "500$/mois" },
      { label: "Engagement 6 mois", price: "150$/h", saving: "750$/mois" },
    ],
  },
  {
    name: "Performance+",
    hours: "50h",
    featured: false,
    rates: [
      { label: "Sans engagement", price: "180$/h", saving: null },
      { label: "Engagement 3 mois", price: "160$/h", saving: "1 000$/mois" },
      { label: "Engagement 6 mois", price: "150$/h", saving: "1 500$/mois" },
    ],
  },
]

const INCLUSIONS = [
  "Roadmap de croissance",
  "Google Drive client",
  "Analyse de marche",
  "Analyse de competition",
  "Creation de persona",
  "Recherche de mots-cles",
  "Plan de campagnes publicitaires",
  "Google Analytics",
  "Google Tag Manager",
  "Google Search Console",
]

export function PricingSlide() {
  return (
    <SlideWrapper id="pricing" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
            10 / Tarification
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-3xl leading-tight text-balance">
            {"Banques d'heures disponibles"}
          </h2>
          <div className="w-16 h-px bg-[#387B84]" />
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-xl border flex flex-col shadow-sm ${
                plan.featured
                  ? "border-[#387B84]/40 bg-[#387B84]/5"
                  : "border-[#e5e7eb] bg-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-[#387B84] rounded-full">
                  <Star className="w-3 h-3 text-white" />
                  <span className="text-[10px] tracking-[0.15em] uppercase font-sans font-medium text-white">
                    {"Recommande"}
                  </span>
                </div>
              )}

              <div className="flex flex-col items-center gap-1 mb-6 pt-2">
                <span className="text-xs tracking-[0.2em] uppercase text-[#6b7280] font-sans">
                  Banque
                </span>
                <h3 className="font-serif text-2xl text-[#2d3748]">{plan.name}</h3>
                <span className="font-serif text-4xl text-[#387B84] mt-2">{plan.hours}</span>
                <span className="text-xs text-[#6b7280] font-sans">par mois</span>
              </div>

              <div className="w-full h-px bg-[#e5e7eb] mb-6" />

              <div className="flex flex-col gap-3 flex-1">
                {plan.rates.map((rate) => (
                  <div key={rate.label} className="flex items-center justify-between gap-2">
                    <span className="text-xs text-[#6b7280] font-sans">{rate.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[#2d3748] font-sans font-medium w-14 text-right">{rate.price}</span>
                      <span className="w-24 text-right">
                        {rate.saving ? (
                          <span className="text-[10px] font-sans font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            -{rate.saving}
                          </span>
                        ) : null}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Inclusions */}
        <div className="p-6 rounded-xl border border-[#e5e7eb] bg-[#f7f7f7] shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-lg text-[#2d3748]">
                {"Travaux credites avec un engagement de 3 mois ou plus"}
              </h3>
              <p className="text-xs text-[#6b7280] font-sans">
                {"Nous incluons tous les travaux preparatoires essentiels au demarrage d'un partenariat de croissance durable."}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {INCLUSIONS.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#387B84] shrink-0" />
                  <span className="text-xs text-[#6b7280] font-sans">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
