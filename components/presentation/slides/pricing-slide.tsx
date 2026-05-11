import { SlideWrapper } from "../slide-wrapper"
import { Check, X, Star } from "lucide-react"
import { pricing } from "@/lib/proposal-data"

export function PricingSlide() {
  if (pricing.type === "dual-offers") {
    return <DualOffersSlide />
  }
  if (pricing.type === "fixed-price") {
    return <FixedPriceSlide />
  }
  return <HourlyBankSlide />
}

function DualOffersSlide() {
  const { optionA, optionB, recommendation } = pricing.dualOffers

  return (
    <SlideWrapper id="pricing" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
            05 / Tarification
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
            Comparatif des deux options
          </h2>
          <div className="w-16 h-px bg-[#ff7000]" />
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Option A */}
          <div className="relative p-8 rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="font-serif text-2xl text-[#0f172a] mb-2">{optionA.name}</h3>
                <p className="text-sm text-[#64748b] font-sans leading-relaxed">
                  {optionA.description}
                </p>
              </div>

              <div className="flex items-end gap-2">
                <span className="font-serif text-5xl text-[#ff7000]">{optionA.price}</span>
                <span className="text-sm text-[#64748b] font-sans mb-2">CAD + taxes</span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-[#64748b] font-sans">
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#64748b]/70">Délai</span>
                  <span className="font-medium text-[#0f172a]">{optionA.timeline}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#64748b]/70">Effort</span>
                  <span className="font-medium text-[#0f172a]">{optionA.estimatedHours}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#64748b]/70">Infra/mois</span>
                  <span className="font-medium text-[#0f172a]">{optionA.infraCost}</span>
                </div>
              </div>

              <div className="w-full h-px bg-[#e5e7eb]" />

              <div className="flex flex-col gap-2">
                {optionA.features.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-2">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-[#d1d5db] shrink-0" />
                    )}
                    <span className={`text-sm font-sans ${feature.included ? "text-[#0f172a]" : "text-[#d1d5db]"}`}>
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Option B */}
          <div className="relative p-8 rounded-2xl border-2 border-[#10B981] bg-[#10B981]/5 shadow-lg">
            {/* Featured badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-[#10B981] rounded-full">
              <Star className="w-3.5 h-3.5 text-white" />
              <span className="text-xs tracking-[0.15em] uppercase font-sans font-medium text-white">
                Recommandé
              </span>
            </div>

            <div className="flex flex-col gap-6 pt-2">
              <div>
                <h3 className="font-serif text-2xl text-[#0f172a] mb-2">{optionB.name}</h3>
                <p className="text-sm text-[#64748b] font-sans leading-relaxed">
                  {optionB.description}
                </p>
              </div>

              <div className="flex items-end gap-2">
                <span className="font-serif text-5xl text-[#10B981]">{optionB.price}</span>
                <span className="text-sm text-[#64748b] font-sans mb-2">CAD + taxes</span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-[#64748b] font-sans">
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#64748b]/70">Délai</span>
                  <span className="font-medium text-[#0f172a]">{optionB.timeline}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#64748b]/70">Effort</span>
                  <span className="font-medium text-[#0f172a]">{optionB.estimatedHours}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#64748b]/70">Infra/mois</span>
                  <span className="font-medium text-[#0f172a]">{optionB.infraCost}</span>
                </div>
              </div>

              <div className="w-full h-px bg-[#10B981]/30" />

              <div className="flex flex-col gap-2">
                {optionB.features.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-2">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-[#d1d5db] shrink-0" />
                    )}
                    <span className={`text-sm font-sans ${feature.included ? "text-[#0f172a]" : "text-[#d1d5db]"}`}>
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="p-6 rounded-xl border border-[#ff7000]/20 bg-[#ff7000]/5">
          <div className="flex flex-col gap-2">
            <h4 className="font-serif text-lg text-[#0f172a]">Recommandation TechGuys</h4>
            <p className="text-sm text-[#64748b] font-sans leading-relaxed">
              {recommendation}
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}

function HourlyBankSlide() {
  return (
    <SlideWrapper id="pricing" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
            05 / Tarification
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
            {"Banques d'heures disponibles"}
          </h2>
          <div className="w-16 h-px bg-[#ff7000]" />
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-xl border flex flex-col shadow-sm ${
                plan.featured
                  ? "border-[#ff7000]/40 bg-[#ff7000]/5"
                  : "border-[#e5e7eb] bg-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-[#ff7000] rounded-full">
                  <Star className="w-3 h-3 text-white" />
                  <span className="text-[10px] tracking-[0.15em] uppercase font-sans font-medium text-white">
                    {"Recommandé"}
                  </span>
                </div>
              )}

              <div className="flex flex-col items-center gap-1 mb-6 pt-2">
                <span className="text-xs tracking-[0.2em] uppercase text-[#64748b] font-sans">
                  Banque
                </span>
                <h3 className="font-serif text-2xl text-[#0f172a]">{plan.name}</h3>
                <span className="font-serif text-4xl text-[#ff7000] mt-2">{plan.hours}</span>
                <span className="text-xs text-[#64748b] font-sans">par mois</span>
              </div>

              <div className="w-full h-px bg-[#e5e7eb] mb-6" />

              <div className="flex flex-col gap-3 flex-1">
                {plan.rates.map((rate) => (
                  <div key={rate.label} className="flex items-center justify-between gap-2">
                    <span className="text-xs text-[#64748b] font-sans">{rate.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[#0f172a] font-sans font-medium w-14 text-right">{rate.price}</span>
                      <span className="w-24 text-right">
                        {rate.saving ? (
                          <span className="text-[10px] font-sans font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            -{rate.saving}$/mois
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
        <div className="p-6 rounded-xl border border-[#e5e7eb] bg-[#f8fafc] shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-lg text-[#0f172a]">
                {"Travaux crédités avec un engagement de 3 mois ou plus"}
              </h3>
              <p className="text-xs text-[#64748b] font-sans">
                {"Nous incluons tous les travaux préparatoires essentiels au démarrage d'un partenariat de croissance durable."}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {pricing.inclusions.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#ff7000] shrink-0" />
                  <span className="text-xs text-[#64748b] font-sans">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}

function FixedPriceSlide() {
  const fp = pricing.fixedPrice
  return (
    <SlideWrapper id="pricing" className="bg-white">
      <div className="max-w-4xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
            05 / Tarification
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
            Votre investissement
          </h2>
          <div className="w-16 h-px bg-[#ff7000]" />
        </div>

        {/* Project card */}
        <div className="p-8 rounded-2xl border border-[#ff7000]/20 bg-[#ff7000]/5 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex flex-col gap-3 flex-1">
              <h3 className="font-serif text-2xl text-[#0f172a]">{fp.projectName}</h3>
              {fp.description && (
                <p className="text-sm text-[#64748b] font-sans leading-relaxed max-w-lg">
                  {fp.description}
                </p>
              )}
              <div className="flex flex-wrap gap-6 mt-2">
                {fp.estimatedHours && (
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#64748b] font-sans">Effort estimé</span>
                    <span className="text-sm font-medium text-[#0f172a] font-sans">{fp.estimatedHours}</span>
                  </div>
                )}
                {fp.timeline && (
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#64748b] font-sans">Délai de livraison</span>
                    <span className="text-sm font-medium text-[#0f172a] font-sans">{fp.timeline}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#64748b] font-sans">Investissement total</span>
              <span className="font-serif text-5xl text-[#ff7000]">{fp.totalPrice}</span>
              <span className="text-xs text-[#64748b] font-sans">taxes en sus</span>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        {fp.deliverables.length > 0 && (
          <div className="p-6 rounded-xl border border-[#e5e7eb] bg-[#f8fafc] shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-lg text-[#0f172a]">Ce qui est inclus</h3>
                <p className="text-xs text-[#64748b] font-sans">
                  Livrables et services compris dans le cadre de ce projet.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {fp.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#ff7000] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#64748b] font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </SlideWrapper>
  )
}
