"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Check, Star, Clock, Server, CreditCard } from "lucide-react"
import { pricing } from "@/lib/proposal-data"

function calculateMvpTotals() {
  const hoursMin = pricing.mvp.modules.reduce((sum, m) => sum + m.hoursMin, 0)
  const hoursMax = pricing.mvp.modules.reduce((sum, m) => sum + m.hoursMax, 0)
  const contingencyMin = Math.round(hoursMin * (pricing.mvp.contingencyPercent / 100))
  const contingencyMax = Math.round(hoursMax * (pricing.mvp.contingencyPercent / 100))
  const totalHoursMin = hoursMin + contingencyMin
  const totalHoursMax = hoursMax + contingencyMax
  const totalPriceMin = totalHoursMin * pricing.hourlyRate
  const totalPriceMax = totalHoursMax * pricing.hourlyRate
  return { hoursMin, hoursMax, contingencyMin, contingencyMax, totalHoursMin, totalHoursMax, totalPriceMin, totalPriceMax }
}

function calculateScenarioTotals(scenarioId: string) {
  const scenario = pricing.scenarios.find(s => s.id === scenarioId)
  if (!scenario) return null

  const mvp = calculateMvpTotals()
  let optionsHoursMin = 0
  let optionsHoursMax = 0

  scenario.optionIds.forEach(optId => {
    const opt = pricing.options.find(o => o.id === optId)
    if (opt) {
      optionsHoursMin += opt.hoursMin
      optionsHoursMax += opt.hoursMax
    }
  })

  const totalHoursMin = mvp.totalHoursMin + optionsHoursMin
  const totalHoursMax = mvp.totalHoursMax + optionsHoursMax
  const totalPriceMin = totalHoursMin * pricing.hourlyRate
  const totalPriceMax = totalHoursMax * pricing.hourlyRate

  return { totalHoursMin, totalHoursMax, totalPriceMin, totalPriceMax, optionsHoursMin, optionsHoursMax }
}

export function PricingSlide() {
  const mvpTotals = calculateMvpTotals()

  return (
    <SlideWrapper id="pricing" className="relative !min-h-0">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030303]">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 99, 99, 0.08), transparent 50%),
              radial-gradient(circle at 100% 50%, rgba(255, 99, 99, 0.04), transparent 30%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-14">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-[#FF6363]" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#FF6363] font-sans font-medium">
              06 / Tarification
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-[1.1]">
            Votre <span className="gradient-text-accent">investissement</span>
          </h2>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-white/40 font-sans">Taux horaire :</span>
            <span className="px-4 py-1.5 rounded-full glass border-[#FF6363]/30 text-[#FF6363] text-sm font-mono font-medium">
              {pricing.hourlyRate}$/h
            </span>
            <span className="text-sm text-white/30 font-sans">— facturation aux heures reellement consommees</span>
          </div>
        </div>

        {/* MVP Details - Highlighted card */}
        <div className="glass-strong rounded-3xl p-8 mb-8 border-[#FF6363]/20 relative overflow-hidden">
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6363] via-[#FF8585] to-[#FFA8A8]" />
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h3 className="font-serif text-2xl text-white">{pricing.mvp.name}</h3>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#FF6363] to-[#FF8585] rounded-full">
                  <Star className="w-3 h-3 text-white fill-white" />
                  <span className="text-[10px] tracking-[0.15em] uppercase font-sans font-semibold text-white">
                    Recommande pour demarrer
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/45 font-sans leading-relaxed max-w-xl">
                {pricing.mvp.description}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-sans">Investissement</span>
              <span className="font-serif text-4xl gradient-text-accent">
                {mvpTotals.totalPriceMin.toLocaleString()}$ - {mvpTotals.totalPriceMax.toLocaleString()}$
              </span>
              <span className="text-xs text-white/30 font-sans">taxes en sus</span>
            </div>
          </div>

          {/* MVP Modules breakdown */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs text-white/30 font-sans mb-4 uppercase tracking-wider">Modules inclus</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pricing.mvp.modules.map((module) => (
                <div key={module.id} className="flex items-center justify-between gap-4 p-3 rounded-xl glass">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#FF6363]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#FF6363]" />
                    </div>
                    <span className="text-sm text-white/60 font-sans">{module.name}</span>
                  </div>
                  <span className="text-xs text-white/35 font-mono">{module.hoursMin}-{module.hoursMax}h</span>
                </div>
              ))}
              {/* Contingency row */}
              <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-amber-500/15 flex items-center justify-center">
                    <Clock className="w-3 h-3 text-amber-400" />
                  </div>
                  <span className="text-sm text-amber-400 font-sans">Contingence (~{pricing.mvp.contingencyPercent}%)</span>
                </div>
                <span className="text-xs text-amber-400/60 font-mono">{mvpTotals.contingencyMin}-{mvpTotals.contingencyMax}h</span>
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 mt-4 pt-4 border-t border-white/5">
              <span className="text-sm text-white/40 font-sans">Total MVP :</span>
              <span className="text-lg text-white font-mono font-medium">{mvpTotals.totalHoursMin}-{mvpTotals.totalHoursMax}h</span>
            </div>
          </div>
        </div>

        {/* Scenarios */}
        <div className="mb-10">
          <p className="text-xs text-white/30 font-sans mb-5 uppercase tracking-wider">Scenarios pre-configures</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricing.scenarios.map((scenario) => {
              const totals = calculateScenarioTotals(scenario.id)
              if (!totals) return null

              return (
                <div
                  key={scenario.id}
                  className={`relative glass-card rounded-2xl p-6 flex flex-col card-hover ${
                    scenario.recommended ? "border-[#FF6363]/30" : ""
                  }`}
                >
                  {scenario.recommended && (
                    <div className="absolute -top-px left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#FF6363] to-[#FF8585] rounded-b-xl">
                        <Star className="w-2.5 h-2.5 text-white fill-white" />
                        <span className="text-[9px] tracking-[0.1em] uppercase font-sans font-semibold text-white">
                          Recommande
                        </span>
                      </div>
                    </div>
                  )}

                  <h4 className="font-serif text-lg text-white mb-2 pt-2">{scenario.name}</h4>
                  <p className="text-xs text-white/35 font-sans leading-relaxed mb-5 flex-1">
                    {scenario.description}
                  </p>

                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-white/25 font-sans uppercase tracking-wider">Heures</span>
                      <span className="text-sm text-white/50 font-mono">{totals.totalHoursMin}-{totals.totalHoursMax}h</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/25 font-sans uppercase tracking-wider">Budget</span>
                      <span className={`text-sm font-mono font-medium ${scenario.recommended ? "text-[#FF6363]" : "text-[#FF8585]"}`}>
                        {totals.totalPriceMin.toLocaleString()}$ - {totals.totalPriceMax.toLocaleString()}$
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Hosting & Payment terms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Server className="w-5 h-5 text-[#FF6363]" />
              </div>
              <h4 className="font-serif text-lg text-white">Hebergement mensuel</h4>
            </div>
            <p className="text-sm text-white/40 font-sans leading-relaxed mb-4">
              {pricing.hosting.note}
            </p>
            <span className="text-xl text-[#FF8585] font-mono font-medium">
              ~{pricing.hosting.min}$ - {pricing.hosting.max}$/mois
            </span>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h4 className="font-serif text-lg text-white mb-4">Modalites de facturation</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/45 font-sans">
                <div className="w-5 h-5 rounded-md bg-[#FF6363]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#FF6363]" />
                </div>
                Acompte de 25% a la signature
              </li>
              <li className="flex items-start gap-3 text-sm text-white/45 font-sans">
                <div className="w-5 h-5 rounded-md bg-[#FF6363]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#FF6363]" />
                </div>
                Facturation aux deux semaines avec rapport detaille
              </li>
              <li className="flex items-start gap-3 text-sm text-white/45 font-sans">
                <div className="w-5 h-5 rounded-md bg-[#FF6363]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#FF6363]" />
                </div>
                Contingence non utilisee = non facturee
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
