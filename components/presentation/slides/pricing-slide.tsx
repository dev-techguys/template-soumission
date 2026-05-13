"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Check, Star, Clock, Server } from "lucide-react"
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
    <SlideWrapper id="pricing" className="bg-[#111111]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-[#0035FF] font-sans font-medium">
            06 / Tarification
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white max-w-3xl leading-tight text-balance">
            Votre investissement
          </h2>
          <div className="w-16 h-px bg-[#0035FF]" />
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/50 font-sans">Taux horaire :</span>
            <span className="px-3 py-1 rounded-full bg-[#0035FF]/10 border border-[#0035FF]/30 text-[#3B82F6] text-sm font-mono font-medium">
              {pricing.hourlyRate}$/h
            </span>
            <span className="text-sm text-white/40 font-sans">— facturation aux heures réellement consommées</span>
          </div>
        </div>

        {/* MVP Details */}
        <div className="p-8 rounded-2xl border border-[#0035FF]/20 bg-[#0035FF]/5 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-serif text-2xl text-white">{pricing.mvp.name}</h3>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0035FF] rounded-full">
                  <Star className="w-3 h-3 text-white" />
                  <span className="text-[10px] tracking-[0.15em] uppercase font-sans font-medium text-white">
                    Recommandé pour démarrer
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/50 font-sans leading-relaxed max-w-xl">
                {pricing.mvp.description}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-sans">Investissement</span>
              <span className="font-serif text-4xl text-[#3B82F6]">
                {mvpTotals.totalPriceMin.toLocaleString()}$ – {mvpTotals.totalPriceMax.toLocaleString()}$
              </span>
              <span className="text-xs text-white/40 font-sans">taxes en sus</span>
            </div>
          </div>

          {/* MVP Modules breakdown */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs text-white/40 font-sans mb-4 uppercase tracking-wider">Modules inclus</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pricing.mvp.modules.map((module) => (
                <div key={module.id} className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0035FF] shrink-0" />
                    <span className="text-sm text-white/70 font-sans">{module.name}</span>
                  </div>
                  <span className="text-xs text-white/40 font-mono">{module.hoursMin}–{module.hoursMax}h</span>
                </div>
              ))}
              {/* Contingency row */}
              <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="text-sm text-amber-400 font-sans">Contingence (~{pricing.mvp.contingencyPercent}%)</span>
                </div>
                <span className="text-xs text-amber-400/70 font-mono">{mvpTotals.contingencyMin}–{mvpTotals.contingencyMax}h</span>
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 mt-4 pt-4 border-t border-white/10">
              <span className="text-sm text-white/50 font-sans">Total MVP :</span>
              <span className="text-lg text-white font-mono font-medium">{mvpTotals.totalHoursMin}–{mvpTotals.totalHoursMax}h</span>
            </div>
          </div>
        </div>

        {/* Scenarios */}
        <div className="mb-8">
          <p className="text-xs text-white/40 font-sans mb-4 uppercase tracking-wider">Scénarios pré-configurés</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pricing.scenarios.map((scenario) => {
              const totals = calculateScenarioTotals(scenario.id)
              if (!totals) return null

              return (
                <div
                  key={scenario.id}
                  className={`relative p-5 rounded-xl border flex flex-col ${
                    scenario.recommended
                      ? "border-[#0035FF]/40 bg-[#0035FF]/5"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  {scenario.recommended && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-0.5 bg-[#0035FF] rounded-full">
                      <Star className="w-2.5 h-2.5 text-white" />
                      <span className="text-[9px] tracking-[0.1em] uppercase font-sans font-medium text-white">
                        Recommandé
                      </span>
                    </div>
                  )}

                  <h4 className="font-serif text-lg text-white mb-2 pt-1">{scenario.name}</h4>
                  <p className="text-xs text-white/40 font-sans leading-relaxed mb-4 flex-1">
                    {scenario.description}
                  </p>

                  <div className="pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-white/30 font-sans uppercase tracking-wider">Heures</span>
                      <span className="text-sm text-white/60 font-mono">{totals.totalHoursMin}–{totals.totalHoursMax}h</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/30 font-sans uppercase tracking-wider">Budget</span>
                      <span className="text-sm text-[#3B82F6] font-mono font-medium">
                        {totals.totalPriceMin.toLocaleString()}$ – {totals.totalPriceMax.toLocaleString()}$
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Hosting & Payment terms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-4 h-4 text-[#0035FF]" />
              <h4 className="font-serif text-lg text-white">Hébergement mensuel</h4>
            </div>
            <p className="text-sm text-white/50 font-sans leading-relaxed mb-3">
              {pricing.hosting.note}
            </p>
            <span className="text-lg text-[#3B82F6] font-mono font-medium">
              ~{pricing.hosting.min}$ – {pricing.hosting.max}$/mois
            </span>
          </div>

          <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
            <h4 className="font-serif text-lg text-white mb-3">Modalités de facturation</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-white/50 font-sans">
                <Check className="w-3.5 h-3.5 text-[#0035FF] shrink-0 mt-0.5" />
                Acompte de 25% à la signature
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50 font-sans">
                <Check className="w-3.5 h-3.5 text-[#0035FF] shrink-0 mt-0.5" />
                Facturation aux deux semaines avec rapport détaillé
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50 font-sans">
                <Check className="w-3.5 h-3.5 text-[#0035FF] shrink-0 mt-0.5" />
                Contingence non utilisée = non facturée
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
