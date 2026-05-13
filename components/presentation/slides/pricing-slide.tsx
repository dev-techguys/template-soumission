"use client"

import { useState, useMemo } from "react"
import { SlideWrapper } from "../slide-wrapper"
import { Check, Star, Clock, Server, CreditCard, Plus } from "lucide-react"
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

export function PricingSlide() {
  const mvpTotals = calculateMvpTotals()
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    )
  }

  const dynamicTotals = useMemo(() => {
    let optionsHoursMin = 0
    let optionsHoursMax = 0
    let optionsPriceMin = 0
    let optionsPriceMax = 0

    selectedOptions.forEach(optId => {
      const opt = pricing.options.find(o => o.id === optId)
      if (opt) {
        optionsHoursMin += opt.hoursMin
        optionsHoursMax += opt.hoursMax
        optionsPriceMin += opt.hoursMin * pricing.hourlyRate
        optionsPriceMax += opt.hoursMax * pricing.hourlyRate
      }
    })

    const totalHoursMin = mvpTotals.totalHoursMin + optionsHoursMin
    const totalHoursMax = mvpTotals.totalHoursMax + optionsHoursMax
    const totalPriceMin = mvpTotals.totalPriceMin + optionsPriceMin
    const totalPriceMax = mvpTotals.totalPriceMax + optionsPriceMax

    return { 
      totalHoursMin, totalHoursMax, totalPriceMin, totalPriceMax,
      optionsHoursMin, optionsHoursMax, optionsPriceMin, optionsPriceMax
    }
  }, [selectedOptions, mvpTotals])

  return (
    <SlideWrapper id="pricing" className="relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-14">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-[#0066FF]" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#0066FF] font-medium">
              06 / Tarification
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light max-w-3xl leading-[1.1]">
            Votre <span className="gradient-text-accent font-medium">investissement</span>
          </h2>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-white/40">Taux horaire :</span>
            <span className="px-4 py-1.5 rounded-full glass border-[#0066FF]/30 text-[#0066FF] text-sm font-mono font-medium">
              {pricing.hourlyRate}$/h
            </span>
            <span className="text-sm text-white/30">- facturation aux heures reellement consommees</span>
          </div>
        </div>

        {/* MVP Details */}
        <div className="glass-strong p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066FF] via-[#3388FF] to-[#66AAFF]" />
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h3 className="text-2xl text-white font-medium">{pricing.mvp.name}</h3>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#0066FF] to-[#3388FF] rounded-full">
                  <Star className="w-3 h-3 text-white fill-white" />
                  <span className="text-[10px] tracking-[0.15em] uppercase font-semibold text-white">
                    Inclus
                  </span>
                </div>
              </div>
              <p className="text-sm text-white/45 leading-relaxed max-w-xl">
                {pricing.mvp.description}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">Base MVP</span>
              <span className="text-4xl gradient-text-accent font-light">
                {mvpTotals.totalPriceMin.toLocaleString()}$ - {mvpTotals.totalPriceMax.toLocaleString()}$
              </span>
              <span className="text-xs text-white/30">taxes en sus</span>
            </div>
          </div>

          {/* MVP Modules */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs text-white/30 mb-4 uppercase tracking-wider">Modules inclus</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pricing.mvp.modules.map((module) => (
                <div key={module.id} className="flex items-center justify-between gap-4 p-3 rounded-xl glass">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#0066FF]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#0066FF]" />
                    </div>
                    <span className="text-sm text-white/60">{module.name}</span>
                  </div>
                  <span className="text-xs text-white/35 font-mono">{module.hoursMin}-{module.hoursMax}h</span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-amber-500/15 flex items-center justify-center">
                    <Clock className="w-3 h-3 text-amber-400" />
                  </div>
                  <span className="text-sm text-amber-400">Contingence (~{pricing.mvp.contingencyPercent}%)</span>
                </div>
                <span className="text-xs text-amber-400/60 font-mono">{mvpTotals.contingencyMin}-{mvpTotals.contingencyMax}h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Options Selection */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Plus className="w-4 h-4 text-[#0066FF]" />
            <p className="text-xs text-white/30 uppercase tracking-wider">Options additionnelles (selectionnez pour ajuster le prix)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricing.options.map((option) => {
              const isSelected = selectedOptions.includes(option.id)
              const optionPriceMin = option.hoursMin * pricing.hourlyRate
              const optionPriceMax = option.hoursMax * pricing.hourlyRate
              
              return (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`relative glass-card p-5 text-left transition-all duration-300 card-hover ${
                    isSelected ? "option-selected" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="text-base text-white font-medium">{option.name}</h4>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      className="checkbox-custom shrink-0"
                    />
                  </div>
                  <p className="text-xs text-white/35 leading-relaxed mb-4 line-clamp-2">
                    {option.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-xs text-white/25 font-mono">{option.hoursMin}-{option.hoursMax}h</span>
                    <span className={`text-sm font-mono font-medium ${isSelected ? "text-[#0066FF]" : "text-[#3388FF]"}`}>
                      +{optionPriceMin.toLocaleString()}$ - {optionPriceMax.toLocaleString()}$
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Dynamic Total */}
        <div className="glass-strong p-8 mb-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/5 to-transparent" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl text-white font-medium mb-2">Total de votre projet</h3>
                <p className="text-sm text-white/40">
                  MVP {selectedOptions.length > 0 && `+ ${selectedOptions.length} option${selectedOptions.length > 1 ? "s" : ""}`}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl gradient-text-accent font-light">
                    {dynamicTotals.totalPriceMin.toLocaleString()}$
                  </span>
                  <span className="text-2xl text-white/30">-</span>
                  <span className="text-5xl md:text-6xl gradient-text-accent font-light">
                    {dynamicTotals.totalPriceMax.toLocaleString()}$
                  </span>
                </div>
                <span className="text-sm text-white/30 font-mono">
                  {dynamicTotals.totalHoursMin} - {dynamicTotals.totalHoursMax} heures estimees
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hosting & Payment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Server className="w-5 h-5 text-[#0066FF]" />
              </div>
              <h4 className="text-lg text-white font-medium">Hebergement mensuel</h4>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              {pricing.hosting.note}
            </p>
            <span className="text-xl text-[#3388FF] font-mono font-medium">
              ~{pricing.hosting.min}$ - {pricing.hosting.max}$/mois
            </span>
          </div>

          <div className="glass-card p-6">
            <h4 className="text-lg text-white font-medium mb-4">Modalites de facturation</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/45">
                <div className="w-5 h-5 rounded-md bg-[#0066FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#0066FF]" />
                </div>
                Acompte de 25% a la signature
              </li>
              <li className="flex items-start gap-3 text-sm text-white/45">
                <div className="w-5 h-5 rounded-md bg-[#0066FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#0066FF]" />
                </div>
                Facturation aux deux semaines avec rapport detaille
              </li>
              <li className="flex items-start gap-3 text-sm text-white/45">
                <div className="w-5 h-5 rounded-md bg-[#0066FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#0066FF]" />
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
