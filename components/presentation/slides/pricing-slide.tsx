import { SlideWrapper } from "../slide-wrapper"
import { Check, Star } from "lucide-react"
import { pricing, branding } from "@/lib/proposal-data"

export function PricingSlide() {
  if (pricing.type === "fixed-price") {
    return <FixedPriceSlide />
  }
  return <HourlyBankSlide />
}

function HourlyBankSlide() {
  return (
    <SlideWrapper id="pricing" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <span
            className="text-xs tracking-[0.4em] uppercase font-sans font-medium"
            style={{ color: branding.primaryColor }}
          >
            05 / Tarification
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl max-w-3xl leading-tight text-balance"
            style={{ color: branding.textDark }}
          >
            {"Banques d'heures disponibles"}
          </h2>
          <div className="w-16 h-px" style={{ backgroundColor: branding.primaryColor }} />
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className="relative p-6 rounded-xl border flex flex-col shadow-sm"
              style={{
                borderColor: plan.featured ? `${branding.primaryColor}66` : "#e5e7eb",
                backgroundColor: plan.featured ? `${branding.primaryColor}08` : "white",
              }}
            >
              {plan.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full"
                  style={{ backgroundColor: branding.primaryColor }}
                >
                  <Star className="w-3 h-3 text-white" />
                  <span className="text-[10px] tracking-[0.15em] uppercase font-sans font-medium text-white">
                    {"Recommande"}
                  </span>
                </div>
              )}

              <div className="flex flex-col items-center gap-1 mb-6 pt-2">
                <span
                  className="text-xs tracking-[0.2em] uppercase font-sans"
                  style={{ color: branding.textMuted }}
                >
                  Banque
                </span>
                <h3 className="font-serif text-2xl" style={{ color: branding.textDark }}>
                  {plan.name}
                </h3>
                <span className="font-serif text-4xl mt-2" style={{ color: branding.primaryColor }}>
                  {plan.hours}
                </span>
                <span className="text-xs font-sans" style={{ color: branding.textMuted }}>
                  par mois
                </span>
              </div>

              <div className="w-full h-px bg-[#e5e7eb] mb-6" />

              <div className="flex flex-col gap-3 flex-1">
                {plan.rates.map((rate) => (
                  <div key={rate.label} className="flex items-center justify-between gap-2">
                    <span className="text-xs font-sans" style={{ color: branding.textMuted }}>
                      {rate.label}
                    </span>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-sm font-sans font-medium w-14 text-right"
                        style={{ color: branding.textDark }}
                      >
                        {rate.price}
                      </span>
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
        {pricing.inclusions.length > 0 && (
          <div
            className="p-6 rounded-xl border border-[#e5e7eb] shadow-sm"
            style={{ backgroundColor: branding.backgroundLight }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-lg" style={{ color: branding.textDark }}>
                  {"Travaux credites avec un engagement de 3 mois ou plus"}
                </h3>
                <p className="text-xs font-sans" style={{ color: branding.textMuted }}>
                  {
                    "Nous incluons tous les travaux preparatoires essentiels au demarrage d'un partenariat de croissance durable."
                  }
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {pricing.inclusions.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 shrink-0" style={{ color: branding.primaryColor }} />
                    <span className="text-xs font-sans" style={{ color: branding.textMuted }}>
                      {item}
                    </span>
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

function FixedPriceSlide() {
  const fp = pricing.fixedPrice
  return (
    <SlideWrapper id="pricing" className="bg-white">
      <div className="max-w-4xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <span
            className="text-xs tracking-[0.4em] uppercase font-sans font-medium"
            style={{ color: branding.primaryColor }}
          >
            05 / Tarification
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl max-w-3xl leading-tight text-balance"
            style={{ color: branding.textDark }}
          >
            Votre investissement
          </h2>
          <div className="w-16 h-px" style={{ backgroundColor: branding.primaryColor }} />
        </div>

        {/* Project card */}
        <div
          className="p-8 rounded-2xl border mb-8"
          style={{
            borderColor: `${branding.primaryColor}33`,
            backgroundColor: `${branding.primaryColor}08`,
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex flex-col gap-3 flex-1">
              <h3 className="font-serif text-2xl" style={{ color: branding.textDark }}>
                {fp.projectName}
              </h3>
              {fp.description && (
                <p
                  className="text-sm font-sans leading-relaxed max-w-lg"
                  style={{ color: branding.textMuted }}
                >
                  {fp.description}
                </p>
              )}
              <div className="flex flex-wrap gap-6 mt-2">
                {fp.estimatedHours && (
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-[10px] tracking-[0.15em] uppercase font-sans"
                      style={{ color: branding.textMuted }}
                    >
                      Effort estime
                    </span>
                    <span className="text-sm font-medium font-sans" style={{ color: branding.textDark }}>
                      {fp.estimatedHours}
                    </span>
                  </div>
                )}
                {fp.timeline && (
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-[10px] tracking-[0.15em] uppercase font-sans"
                      style={{ color: branding.textMuted }}
                    >
                      Delai de livraison
                    </span>
                    <span className="text-sm font-medium font-sans" style={{ color: branding.textDark }}>
                      {fp.timeline}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span
                className="text-[10px] tracking-[0.2em] uppercase font-sans"
                style={{ color: branding.textMuted }}
              >
                Investissement total
              </span>
              <span className="font-serif text-5xl" style={{ color: branding.primaryColor }}>
                {fp.totalPrice}
              </span>
              <span className="text-xs font-sans" style={{ color: branding.textMuted }}>
                taxes en sus
              </span>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        {fp.deliverables.length > 0 && (
          <div
            className="p-6 rounded-xl border border-[#e5e7eb] shadow-sm"
            style={{ backgroundColor: branding.backgroundLight }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-lg" style={{ color: branding.textDark }}>
                  Ce qui est inclus
                </h3>
                <p className="text-xs font-sans" style={{ color: branding.textMuted }}>
                  Livrables et services compris dans le cadre de ce projet.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {fp.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: branding.primaryColor }} />
                    <span className="text-xs font-sans" style={{ color: branding.textMuted }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Monthly costs note */}
        <div className="mt-8 p-4 rounded-xl border border-[#e5e7eb] bg-white">
          <p className="text-sm font-sans leading-relaxed" style={{ color: branding.textMuted }}>
            <span className="font-medium" style={{ color: branding.textDark }}>
              Frais mensuels potentiels :
            </span>{" "}
            Certains frais peuvent s{"'"}appliquer selon la solution retenue (hebergement, API IA,
            automatisation). Estimation : 0 $ a 50 $ / mois.
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
