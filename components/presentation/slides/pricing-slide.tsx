"use client"

import { useState } from "react"
import { SlideWrapper } from "../slide-wrapper"
import { AnimatedDiv, AnimatedContainer, AnimatedItem } from "../animated-wrapper"
import { Check, X, Star, ChevronDown, BarChart3 } from "lucide-react"
import { pricing } from "@/lib/proposal-data"
import { motion, AnimatePresence } from "framer-motion"

// Radar chart data
const radarMetrics = [
  { label: "Conversion", optionA: 3, optionB: 5 },
  { label: "Scalabilité", optionA: 2, optionB: 5 },
  { label: "Analytics", optionA: 1, optionB: 4 },
  { label: "Personnalisation", optionA: 2, optionB: 5 },
  { label: "ROI estimé", optionA: 3, optionB: 5 },
  { label: "Support", optionA: 2, optionB: 4 },
]

function RadarChart() {
  const size = 280
  const center = size / 2
  const maxRadius = 100
  const levels = 5

  const angleStep = (2 * Math.PI) / radarMetrics.length
  const startAngle = -Math.PI / 2

  const getPoint = (index: number, value: number) => {
    const angle = startAngle + index * angleStep
    const radius = (value / 5) * maxRadius
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    }
  }

  const createPath = (values: number[]) => {
    return values
      .map((value, i) => {
        const point = getPoint(i, value)
        return `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`
      })
      .join(" ") + " Z"
  }

  const optionAPath = createPath(radarMetrics.map((m) => m.optionA))
  const optionBPath = createPath(radarMetrics.map((m) => m.optionB))

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="overflow-visible">
        {/* Grid circles */}
        {Array.from({ length: levels }).map((_, i) => (
          <circle
            key={i}
            cx={center}
            cy={center}
            r={(maxRadius / levels) * (i + 1)}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {radarMetrics.map((_, i) => {
          const point = getPoint(i, 5)
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={point.x}
              y2={point.y}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          )
        })}

        {/* Option A area */}
        <motion.path
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          d={optionAPath}
          fill="rgba(255, 112, 0, 0.15)"
          stroke="#ff7000"
          strokeWidth="2"
        />

        {/* Option B area */}
        <motion.path
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          d={optionBPath}
          fill="rgba(16, 185, 129, 0.15)"
          stroke="#10B981"
          strokeWidth="2"
        />

        {/* Data points Option A */}
        {radarMetrics.map((metric, i) => {
          const point = getPoint(i, metric.optionA)
          return (
            <motion.circle
              key={`a-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#ff7000"
            />
          )
        })}

        {/* Data points Option B */}
        {radarMetrics.map((metric, i) => {
          const point = getPoint(i, metric.optionB)
          return (
            <motion.circle
              key={`b-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#10B981"
            />
          )
        })}

        {/* Labels */}
        {radarMetrics.map((metric, i) => {
          const point = getPoint(i, 6.2)
          return (
            <text
              key={i}
              x={point.x}
              y={point.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[10px] fill-[#64748b] font-sans"
            >
              {metric.label}
            </text>
          )
        })}
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff7000]" />
          <span className="text-xs text-[#64748b] font-sans">Plan Essentiel</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#10B981]" />
          <span className="text-xs text-[#64748b] font-sans">Plan Optimisé</span>
        </div>
      </div>
    </div>
  )
}

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
  const [showRadar, setShowRadar] = useState(false)

  return (
    <SlideWrapper id="pricing" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <AnimatedDiv delay={0}>
            <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
              05 / Tarification
            </span>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
              Comparatif des deux plans
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <div className="w-16 h-px bg-[#ff7000]" />
          </AnimatedDiv>
        </div>

        {/* Radar Chart Toggle */}
        <AnimatedDiv delay={0.3} className="mb-8">
          <button
            onClick={() => setShowRadar(!showRadar)}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-[#e5e7eb] bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#ff7000]/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#ff7000]" />
              </div>
              <div className="text-left">
                <h4 className="font-sans font-medium text-[#0f172a] text-sm">Comparatif visuel des plans</h4>
                <p className="text-xs text-[#64748b]">Voir le radar chart de comparaison</p>
              </div>
            </div>
            <ChevronDown className={`w-5 h-5 text-[#64748b] transition-transform ${showRadar ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {showRadar && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-6 rounded-xl border border-[#e5e7eb] bg-white">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <RadarChart />
                    <div className="flex-1 space-y-4">
                      <h4 className="font-serif text-lg text-[#0f172a]">Pourquoi le Plan Optimisé ?</h4>
                      <div className="space-y-3">
                        {[
                          { label: "+67%", desc: "de couverture fonctionnelle" },
                          { label: "ROI", desc: "estimé en moins de 3 mois" },
                          { label: "4x", desc: "plus de données analytics" },
                        ].map((stat, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="text-lg font-serif text-[#10B981] font-medium w-16">{stat.label}</span>
                            <span className="text-sm text-[#64748b] font-sans">{stat.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedDiv>

        {/* Options grid */}
        <AnimatedContainer staggerDelay={0.2} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Option A */}
          <AnimatedItem direction="left">
            <div className="relative p-8 rounded-2xl border border-[#e5e7eb] bg-white shadow-sm h-full">
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
          </AnimatedItem>

          {/* Option B */}
          <AnimatedItem direction="right">
            <div className="relative p-8 rounded-2xl border-2 border-[#10B981] bg-[#10B981]/5 shadow-lg h-full">
              <div className="flex flex-col gap-6">
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
          </AnimatedItem>
        </AnimatedContainer>

        {/* Recommendation */}
        <AnimatedDiv delay={0.6}>
          <div className="p-6 rounded-xl border border-[#ff7000]/20 bg-[#ff7000]/5">
            <div className="flex flex-col gap-2">
              <h4 className="font-serif text-lg text-[#0f172a]">Recommandation TechGuys</h4>
              <p className="text-sm text-[#64748b] font-sans leading-relaxed">
                {recommendation}
              </p>
            </div>
          </div>
        </AnimatedDiv>
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
          <AnimatedDiv delay={0}>
            <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
              05 / Tarification
            </span>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
              {"Banques d'heures disponibles"}
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <div className="w-16 h-px bg-[#ff7000]" />
          </AnimatedDiv>
        </div>

        {/* Plans grid */}
        <AnimatedContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pricing.plans.map((plan) => (
            <AnimatedItem key={plan.name}>
              <div
                className={`relative p-6 rounded-xl border flex flex-col shadow-sm h-full ${
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
            </AnimatedItem>
          ))}
        </AnimatedContainer>

        {/* Inclusions */}
        <AnimatedDiv delay={0.5}>
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
        </AnimatedDiv>
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
          <AnimatedDiv delay={0}>
            <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
              05 / Tarification
            </span>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
              Votre investissement
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <div className="w-16 h-px bg-[#ff7000]" />
          </AnimatedDiv>
        </div>

        {/* Project card */}
        <AnimatedDiv delay={0.3}>
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
        </AnimatedDiv>

        {/* Deliverables */}
        {fp.deliverables.length > 0 && (
          <AnimatedDiv delay={0.4}>
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
          </AnimatedDiv>
        )}
      </div>
    </SlideWrapper>
  )
}
