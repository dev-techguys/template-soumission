"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Check, Star, Clock, Server, CreditCard, Plus, ArrowRight, FileText, Receipt, CheckCircle2 } from "lucide-react"
import { pricing } from "@/lib/proposal-data"
import { useSelectionStore } from "@/lib/selection-store"

function calculateMvpTotals() {
  const baseHours = pricing.mvp.modules.reduce((sum, m) => sum + m.hours, 0)
  const contingencyHours = Math.round(baseHours * (pricing.mvp.contingencyPercent / 100))
  const totalHours = baseHours + contingencyHours
  const totalPrice = totalHours * pricing.hourlyRate
  return { baseHours, contingencyHours, totalHours, totalPrice }
}

// Payment cycle step component
function PaymentCycleStep({ 
  number, 
  title, 
  description, 
  highlight,
  isLast = false 
}: { 
  number: number
  title: string
  description: string
  highlight?: string
  isLast?: boolean
}) {
  return (
    <div className="flex flex-col items-center text-center relative">
      {/* Circle with number */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0066FF]/20 to-[#0066FF]/5 border border-[#0066FF]/30 flex items-center justify-center mb-4 relative z-10">
          <span className="text-xl font-medium text-[#0066FF]">{number}</span>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#0066FF]/20 blur-xl" />
      </div>
      
      <h4 className="text-sm font-medium text-white mb-1">{title}</h4>
      <p className="text-xs text-white/40 leading-relaxed max-w-[140px]">{description}</p>
      {highlight && (
        <span className="mt-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 text-[10px] text-[#0066FF] font-medium">
          {highlight}
        </span>
      )}
      
      {/* Arrow to next step */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 -right-8 w-16 h-px">
          <div className="w-full h-full bg-gradient-to-r from-[#0066FF]/50 to-[#0066FF]/10" />
          <ArrowRight className="absolute -right-1 -top-2 w-4 h-4 text-[#0066FF]/50" />
        </div>
      )}
    </div>
  )
}

export function PricingSlide() {
  const mvpTotals = calculateMvpTotals()
  const { 
    selectedOptions, 
    toggleOption, 
    getTotalHours,
    getTotalPrice,
    getEstimatedDelivery
  } = useSelectionStore()

  const totalPrice = getTotalPrice()
  const totalHours = getTotalHours()
  const deliveryDate = getEstimatedDelivery()

  // Calculate deposit
  const deposit = Math.round(totalPrice * (pricing.payment.deposit / 100))

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
            <span className="text-sm text-white/30">- prix plafond, contingence de {pricing.mvp.contingencyPercent}% incluse</span>
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
                    Toujours inclus
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
                {mvpTotals.totalPrice.toLocaleString()}$
              </span>
              <span className="text-xs text-white/30">contingence incluse, taxes en sus</span>
            </div>
          </div>

          {/* MVP Modules */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs text-white/30 mb-4 uppercase tracking-wider">8 modules inclus dans le MVP</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pricing.mvp.modules.map((module) => (
                <div key={module.id} className="flex items-center justify-between gap-4 p-3 rounded-xl glass">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#0066FF]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#0066FF]" />
                    </div>
                    <span className="text-sm text-white/60">{module.name}</span>
                  </div>
                  <span className="text-xs text-white/35 font-mono">{module.hours}h</span>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-amber-500/15 flex items-center justify-center">
                    <Clock className="w-3 h-3 text-amber-400" />
                  </div>
                  <span className="text-sm text-amber-400">Contingence ({pricing.mvp.contingencyPercent}%)</span>
                </div>
                <span className="text-xs text-amber-400/60 font-mono">{mvpTotals.contingencyHours}h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Options Selection */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Plus className="w-4 h-4 text-[#0066FF]" />
            <p className="text-xs text-white/30 uppercase tracking-wider">Options additionnelles - Cliquez pour ajouter à votre projet</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricing.options.map((option) => {
              const isSelected = selectedOptions.includes(option.id)
              const optionPrice = option.hours * pricing.hourlyRate
              
              return (
                <button
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`relative glass-card p-5 text-left transition-all duration-300 card-hover ${
                    isSelected ? "option-selected" : ""
                  }`}
                >
                  {option.recommended && (
                    <div className="absolute -top-2 left-4 px-2 py-0.5 bg-gradient-to-r from-[#0066FF] to-[#3388FF] rounded-full">
                      <span className="text-[9px] tracking-[0.1em] uppercase font-semibold text-white">Recommandé</span>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="text-base text-white font-medium">{option.name}</h4>
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                      isSelected 
                        ? "bg-[#0066FF] border-[#0066FF]" 
                        : "border-white/20 bg-transparent"
                    }`}>
                      {isSelected && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </div>
                  <p className="text-xs text-white/35 leading-relaxed mb-4 line-clamp-2">
                    {option.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-xs text-white/25 font-mono">{option.hours}h</span>
                    <span className={`text-sm font-mono font-medium ${isSelected ? "text-[#0066FF]" : "text-[#3388FF]"}`}>
                      +{optionPrice.toLocaleString()}$
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
                <p className="text-xs text-[#0066FF] mt-2">
                  Livraison estimée : {deliveryDate}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl gradient-text-accent font-light">
                    {totalPrice.toLocaleString()}$
                  </span>
                </div>
                <span className="text-sm text-white/30 font-mono">
                  {totalHours} heures · contingence {pricing.mvp.contingencyPercent}% incluse
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Cycle Diagram */}
        <div className="glass-strong p-8 mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center">
              <Receipt className="w-4 h-4 text-[#0066FF]" />
            </div>
            <div>
              <h3 className="text-xl text-white font-medium">Comment ça fonctionne ?</h3>
              <p className="text-xs text-white/40">Cycle de facturation transparent</p>
            </div>
          </div>

          {/* Payment cycle visualization */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-8">
            <PaymentCycleStep 
              number={1}
              title="Signature"
              description="Vous signez la soumission et versez l'acompte"
              highlight={`Acompte ${deposit.toLocaleString()}$`}
            />
            <PaymentCycleStep 
              number={2}
              title="Développement"
              description="On travaille par sprints de 2 semaines avec livrables"
            />
            <PaymentCycleStep 
              number={3}
              title="Facturation"
              description="Facture aux 2 sem. avec rapport détaillé des heures"
              highlight="Heures réelles seulement"
            />
            <PaymentCycleStep 
              number={4}
              title="Livraison"
              description="Plateforme en production, vous payez le solde final"
              isLast
            />
          </div>

          {/* Key points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-white font-medium mb-1">Un seul prix, pas de surprise</p>
                <p className="text-xs text-white/40 leading-relaxed">
                  Le prix affiché est le <strong className="text-white/60">plafond convenu</strong>, contingence comprise. Vous payez les heures réellement consommées : si on finit plus vite, vous payez moins.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-white font-medium mb-1">Contingence de {pricing.mvp.contingencyPercent}% incluse</p>
                <p className="text-xs text-white/40 leading-relaxed">
                  Une réserve pour imprévus est <strong className="text-white/60">déjà comprise dans le prix</strong>. Si elle n{"'"}est pas utilisée, elle n{"'"}est pas facturée. Zéro heure fictive.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-white font-medium mb-1">Suivi transparent</p>
                <p className="text-xs text-white/40 leading-relaxed">
                  Rapport détaillé à chaque facture + suivi hebdomadaire du budget consommé vs. budgété.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hosting & Conditions */}
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#0066FF]" />
              </div>
              <h4 className="text-lg text-white font-medium">Conditions</h4>
            </div>
            <ul className="space-y-2">
              <li className="text-xs text-white/40">Montants en CAD, avant taxes (TPS/TVQ)</li>
              <li className="text-xs text-white/40">Evaluation valide 30 jours</li>
              <li className="text-xs text-white/40">Paiement : virement ou cheque sous 15 jours</li>
              <li className="text-xs text-white/40">Options ajoutables a tout moment au meme tarif</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
