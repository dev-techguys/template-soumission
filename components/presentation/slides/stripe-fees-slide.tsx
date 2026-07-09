"use client"

import { useMemo, useState } from "react"
import { SlideWrapper } from "../slide-wrapper"
import { stripeFeesComparison } from "@/lib/proposal-data"
import { CreditCard, Info, CalendarRange, CalendarDays, TrendingDown, ShieldCheck, RotateCcw, Wallet } from "lucide-react"

const { feeModel, annees, montantPretAnnuelDefaut, contexte, noteCourte } = stripeFeesComparison

// Formatage monétaire canadien-français
const fmt0 = (n: number) => n.toLocaleString("fr-CA", { maximumFractionDigits: 0 })
const fmt2 = (n: number) => n.toLocaleString("fr-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

// Recalcul dynamique des frais pour une année donnée selon le montant de la location
// et le nombre de locations (tous deux ajustables dans le simulateur).
function computeYear(
  loanAmount: number,
  loanCount: number,
  year: { annee: number; nombreDePrets: number; hebdomadaire: { nombreDePaiements: number }; mensuel: { nombreDePaiements: number } }
) {
  const weeklyCount = year.hebdomadaire.nombreDePaiements
  const monthlyCount = year.mensuel.nombreDePaiements

  const weeklyPayment = loanAmount / weeklyCount
  const monthlyPayment = loanAmount / monthlyCount

  const weeklyFeeRaw = weeklyPayment * feeModel.percent + feeModel.fixed
  const monthlyFeeRaw = monthlyPayment * feeModel.percent + feeModel.fixed

  const weeklyFee = Math.min(weeklyFeeRaw, feeModel.cap)
  const monthlyFee = Math.min(monthlyFeeRaw, feeModel.cap)

  const weeklyPerLoan = weeklyFee * weeklyCount
  const monthlyPerLoan = monthlyFee * monthlyCount

  const weeklyTotal = weeklyPerLoan * loanCount
  const monthlyTotal = monthlyPerLoan * loanCount

  return {
    annee: year.annee,
    nombreDePrets: loanCount,
    volumeTransaction: loanAmount * loanCount,
    weekly: {
      count: weeklyCount,
      payment: weeklyPayment,
      fee: weeklyFee,
      capped: weeklyFeeRaw > feeModel.cap,
      perLoan: weeklyPerLoan,
      total: weeklyTotal,
    },
    monthly: {
      count: monthlyCount,
      payment: monthlyPayment,
      fee: monthlyFee,
      capped: monthlyFeeRaw > feeModel.cap,
      perLoan: monthlyPerLoan,
      total: monthlyTotal,
    },
    ecart: weeklyTotal - monthlyTotal,
  }
}

const defaultCounts: Record<number, number> = Object.fromEntries(annees.map((y) => [y.annee, y.nombreDePrets]))

export function StripeFeesSlide() {
  const [loanAmount, setLoanAmount] = useState<number>(montantPretAnnuelDefaut)
  const [loanCounts, setLoanCounts] = useState<Record<number, number>>(defaultCounts)

  const safeAmount = Number.isFinite(loanAmount) && loanAmount > 0 ? loanAmount : montantPretAnnuelDefaut

  const years = useMemo(
    () =>
      annees.map((y) => {
        const count = loanCounts[y.annee]
        const safeCount = Number.isFinite(count) && count >= 0 ? count : y.nombreDePrets
        return computeYear(safeAmount, safeCount, y)
      }),
    [safeAmount, loanCounts],
  )

  const resetAll = () => {
    setLoanAmount(montantPretAnnuelDefaut)
    setLoanCounts(defaultCounts)
  }

  const cumul = useMemo(() => {
    const weekly = years.reduce((s, y) => s + y.weekly.total, 0)
    const monthly = years.reduce((s, y) => s + y.monthly.total, 0)
    const volume = years.reduce((s, y) => s + y.volumeTransaction, 0)
    return { weekly, monthly, ecart: weekly - monthly, volume }
  }, [years])

  const weeklyPaymentEx = safeAmount / 52
  const monthlyPaymentEx = safeAmount / 12

  return (
    <SlideWrapper id="stripe" className="relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-[#0066FF]" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#0066FF] font-medium">
              07 / Frais Stripe — PAD
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light max-w-4xl leading-[1.1] text-balance">
            Frais Stripe — impact de la <span className="gradient-text-accent font-medium">fréquence de prélèvement</span>
          </h2>
          <p className="text-sm text-white/40 max-w-3xl leading-relaxed">
            {noteCourte}
          </p>
        </div>

        {/* Encart clé : tarif et plafond Stripe */}
        <div className="glass-strong p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066FF] via-[#3388FF] to-amber-400" />
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#0066FF]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg text-white font-medium mb-2">Stripe — première option évaluée</h3>
              <p className="text-sm text-white/50 leading-relaxed max-w-3xl">
                {contexte} Nous explorons actuellement Stripe comme première option puisqu{"'"}elle est conforme au Canada à 100% et facile à intégrer.
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="glass-card p-4">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-white/30">Tarif par transaction</span>
                  <p className="text-lg text-white font-medium mt-1 font-mono">1% + 0,40$</p>
                </div>
                <div className="glass-card p-4 border-amber-500/25">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-amber-400/70">Plafond par transaction</span>
                  <p className="text-lg text-amber-400 font-medium mt-1 font-mono">5,00$</p>
                </div>
                <div className="glass-card p-4">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-white/30">Seuil du plafond</span>
                  <p className="text-lg text-white font-medium mt-1 font-mono">~460$ / paiement</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-white/40 leading-relaxed">
                Le prélèvement <strong className="text-amber-400/90">mensuel</strong> ({fmt0(monthlyPaymentEx)}$/paiement) atteint le plafond de 5,00$, contrairement à l{"'"}
                <strong className="text-[#66AAFF]">hebdomadaire</strong> ({fmt0(weeklyPaymentEx)}$/paiement) qui reste sous le plafond — d{"'"}où un coût annuel plus élevé en hebdomadaire.
              </p>
            </div>
          </div>
        </div>

        {/* Simulateur : montant de la location */}
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center">
                <Info className="w-4 h-4 text-[#0066FF]" />
              </div>
              <div>
                <label htmlFor="loan-amount" className="block text-sm text-white font-medium">
                  Montant de la location annuelle
                </label>
                <span className="text-xs text-white/40">Ajustez pour recalculer les frais en temps réel</span>
              </div>
            </div>
            <div className="flex items-center gap-3 md:ml-auto">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">$</span>
                <input
                  id="loan-amount"
                  type="number"
                  min={0}
                  step={100}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.valueAsNumber)}
                  className="w-40 pl-8 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm font-mono focus:outline-none focus:border-[#0066FF]/50 focus:ring-1 focus:ring-[#0066FF]/30 transition-all"
                />
              </div>
              <button
                onClick={resetAll}
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl glass text-white/60 text-xs hover:text-white hover:bg-white/10 transition-all"
                aria-label="Réinitialiser le montant et le nombre de locations"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Réinitialiser
              </button>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-xs text-white/50">
              <CalendarRange className="w-3.5 h-3.5 text-[#66AAFF]" />
              Paiement hebdomadaire : <strong className="text-white/80 font-mono">{fmt2(weeklyPaymentEx)}$</strong>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <CalendarDays className="w-3.5 h-3.5 text-amber-400" />
              Paiement mensuel : <strong className="text-white/80 font-mono">{fmt2(monthlyPaymentEx)}$</strong>
            </div>
          </div>
        </div>

        {/* Comparaison par année */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {years.map((y) => (
            <div key={y.annee} className="glass-strong p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-white font-light">{y.annee}</span>
                  <div className="flex items-center gap-1.5 pl-2.5 pr-1.5 py-1 rounded-full glass">
                    <label htmlFor={`count-${y.annee}`} className="sr-only">
                      Nombre de locations en {y.annee}
                    </label>
                    <input
                      id={`count-${y.annee}`}
                      type="number"
                      min={0}
                      step={10}
                      value={loanCounts[y.annee] ?? y.nombreDePrets}
                      onChange={(e) =>
                        setLoanCounts((prev) => ({ ...prev, [y.annee]: e.target.valueAsNumber }))
                      }
                      className="w-14 bg-transparent text-[12px] text-white font-mono text-right focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <span className="text-[11px] text-white/50">locations</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span className="font-mono">−{fmt0(y.ecart)}$</span>
                  <span className="text-white/30">en mensuel</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 px-3 py-2.5 rounded-xl glass">
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-white/40" />
                  <span className="text-xs text-white/50">Volume de transactions</span>
                  <span className="text-[10px] text-white/30 font-mono">
                    ({fmt0(y.nombreDePrets)} × {fmt0(safeAmount)}$)
                  </span>
                </div>
                <span className="text-sm text-white font-medium font-mono">{fmt0(y.volumeTransaction)}$</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Hebdomadaire */}
                <div className="glass-card p-4 border-[#66AAFF]/25">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarRange className="w-4 h-4 text-[#66AAFF]" />
                    <span className="text-sm text-white font-medium">Hebdomadaire</span>
                  </div>
                  <dl className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <dt className="text-xs text-white/40">Paiements/an</dt>
                      <dd className="text-xs text-white/70 font-mono">{y.weekly.count}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-xs text-white/40">Frais/transaction</dt>
                      <dd className="text-xs text-white/70 font-mono">{fmt2(y.weekly.fee)}$</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-xs text-white/40">Frais/location/an</dt>
                      <dd className="text-xs text-white/70 font-mono">{fmt2(y.weekly.perLoan)}$</dd>
                    </div>
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                      <dt className="text-xs text-white/50">Total annuel</dt>
                      <dd className="text-base text-[#66AAFF] font-medium font-mono">{fmt0(y.weekly.total)}$</dd>
                    </div>
                  </dl>
                </div>

                {/* Mensuel */}
                <div className="glass-card p-4 border-amber-500/25">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarDays className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-white font-medium">Mensuel</span>
                  </div>
                  <dl className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <dt className="text-xs text-white/40">Paiements/an</dt>
                      <dd className="text-xs text-white/70 font-mono">{y.monthly.count}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-xs text-white/40">Frais/transaction</dt>
                      <dd className="text-xs font-mono flex items-center gap-1">
                        <span className="text-white/70">{fmt2(y.monthly.fee)}$</span>
                        {y.monthly.capped && (
                          <span className="text-[9px] px-1 py-0.5 rounded bg-amber-500/15 text-amber-400 tracking-wide">
                            PLAFOND
                          </span>
                        )}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-xs text-white/40">Frais/location/an</dt>
                      <dd className="text-xs text-white/70 font-mono">{fmt2(y.monthly.perLoan)}$</dd>
                    </div>
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                      <dt className="text-xs text-white/50">Total annuel</dt>
                      <dd className="text-base text-amber-400 font-medium font-mono">{fmt0(y.monthly.total)}$</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cumulatif 2026-2027 */}
        <div className="glass-strong p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#66AAFF] via-[#0066FF] to-emerald-400" />
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">Cumulatif 2026 – 2027</span>
              <h3 className="text-xl text-white font-medium mt-1">Économie potentielle avec le prélèvement mensuel</h3>
              <div className="flex items-center gap-2 mt-3">
                <Wallet className="w-4 h-4 text-white/40" />
                <span className="text-xs text-white/50">Volume de transactions total</span>
                <span className="text-sm text-white font-medium font-mono">{fmt0(cumul.volume)}$</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 md:min-w-[420px]">
              <div className="glass-card p-4 border-[#66AAFF]/25 text-center">
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#66AAFF]/70">Hebdomadaire</span>
                <p className="text-xl text-[#66AAFF] font-light mt-1 font-mono">{fmt0(cumul.weekly)}$</p>
              </div>
              <div className="glass-card p-4 border-amber-500/25 text-center">
                <span className="text-[10px] tracking-[0.15em] uppercase text-amber-400/70">Mensuel</span>
                <p className="text-xl text-amber-400 font-light mt-1 font-mono">{fmt0(cumul.monthly)}$</p>
              </div>
              <div className="glass-card p-4 border-emerald-500/30 text-center">
                <span className="text-[10px] tracking-[0.15em] uppercase text-emerald-400/70">Écart</span>
                <p className="text-xl text-emerald-400 font-light mt-1 font-mono">−{fmt0(cumul.ecart)}$</p>
              </div>
            </div>
          </div>
        </div>

        {/* Note de bas de slide */}
        <p className="mt-6 text-[11px] leading-relaxed text-white/35 font-sans italic max-w-3xl">
          {"* "}{noteCourte} Le montant de la location et le nombre de locations par année sont ajustables ci-dessus pour comparer différents scénarios en temps réel (valeurs par défaut : 120 locations en 2026, 360 en 2027).
        </p>
      </div>
    </SlideWrapper>
  )
}
