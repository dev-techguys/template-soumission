"use client"

import { SlideWrapper } from "../slide-wrapper"
import { CalendarDays, Rocket, CheckCircle2, Clock, Plus } from "lucide-react"
import { pricing, calendar } from "@/lib/proposal-data"
import { useSelectionStore } from "@/lib/selection-store"

// Month data for the Gantt chart
const MONTHS = [
  { name: "Juillet", abbr: "Jul", weeks: [1, 2, 3, 4] },
  { name: "Août", abbr: "Aug", weeks: [5, 6, 7, 8] },
  { name: "Sept.", abbr: "Sep", weeks: [9, 10, 11, 12] },
  { name: "Oct.", abbr: "Oct", weeks: [13, 14, 15, 16] },
  { name: "Nov.", abbr: "Nov", weeks: [17, 18, 19, 20] },
  { name: "Déc.", abbr: "Dec", weeks: [21, 22, 23, 24] },
]

// Color per phase number
const phaseColor = (phase: number) =>
  phase === 3
    ? "from-emerald-500 to-emerald-400"
    : phase === 2
      ? "from-[#3388FF] to-[#66AAFF]"
      : "from-[#0066FF] to-[#3388FF]"

export function DeliveryCalendarSlide() {
  const { selectedOptions, getEstimatedWeeks, getEstimatedDelivery } = useSelectionStore()
  
  const estimatedWeeks = getEstimatedWeeks()
  const deliveryDate = getEstimatedDelivery()
  const totalWeeksTimeline = Math.max(calendar.baseDurationWeeks, estimatedWeeks)

  // Calculate additional weeks from selected options
  const selectedOptionsData = pricing.options.filter(opt => selectedOptions.includes(opt.id))
  const additionalWeeks = selectedOptionsData.reduce((sum, opt) => sum + (opt.weeksToAdd || 0), 0)

  // MVP steps (derived from the calendar, grouped by phase)
  const mvpSteps = calendar.weeks.map((w) => ({
    id: w.moduleId,
    name: w.title,
    startWeek: w.week,
    endWeek: w.endWeek,
    phase: w.phase,
    milestone: w.milestone,
    color: phaseColor(w.phase),
  }))

  // Options phases (only shown if selected)
  let optionStartWeek = calendar.baseDurationWeeks + 1
  const optionPhases = selectedOptionsData.map(opt => {
    const phase = {
      id: opt.id,
      name: opt.name.split(" (")[0], // Remove parenthetical
      startWeek: optionStartWeek,
      endWeek: optionStartWeek + (opt.weeksToAdd || 1) - 1,
      color: "from-amber-500 to-amber-400",
    }
    optionStartWeek = phase.endWeek + 1
    return phase
  })

  const totalWeeks = totalWeeksTimeline

  // Calculate which months to show
  const monthsToShow = Math.ceil(totalWeeks / 4)

  return (
    <SlideWrapper id="delivery" className="relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-14">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
              <CalendarDays className="w-4 h-4 text-[#0066FF]" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#0066FF] font-medium">
              08 / Calendrier de livraison
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light max-w-3xl leading-[1.1]">
            Votre <span className="gradient-text-accent font-medium">feuille de route</span>
          </h2>
          <p className="text-base text-white/45 max-w-2xl">
            Ce calendrier s{"'"}adapte automatiquement aux options selectionnees. Demarrage prevu : <span className="text-[#0066FF]">{calendar.startDate}</span>
          </p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#0066FF]" />
              </div>
              <span className="text-xs text-white/40 uppercase tracking-wider">Durée estimée</span>
            </div>
            <div className="text-3xl gradient-text-accent font-light">
              {estimatedWeeks} semaines
            </div>
          </div>

          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-[#0066FF]" />
              </div>
              <span className="text-xs text-white/40 uppercase tracking-wider">Livraison</span>
            </div>
            <div className="text-3xl gradient-text-accent font-light">{deliveryDate}</div>
          </div>

          <div className="glass-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
              </div>
              <span className="text-xs text-white/40 uppercase tracking-wider">Review calls</span>
            </div>
            <div className="text-lg text-white/60">{calendar.reviewCalls}</div>
          </div>
        </div>

        {/* Gantt Chart */}
        <div className="glass-strong p-6 md:p-8 mb-8 overflow-x-auto">
          {/* Month headers */}
          <div className="flex border-b border-white/10 pb-4 mb-6 min-w-[700px]">
            <div className="w-48 shrink-0" />
            {MONTHS.slice(0, monthsToShow).map((month) => (
              <div key={month.name} className="flex-1 text-center">
                <span className="text-sm text-white/60 font-medium">{month.name}</span>
                <span className="text-xs text-white/20 ml-2">2026</span>
              </div>
            ))}
          </div>

          {/* Phases */}
          <div className="space-y-3 min-w-[700px]">
            {calendar.phases.map((phase) => (
              <div key={phase.number} className="space-y-3">
                {/* Phase label */}
                <div className="flex items-center gap-3 mb-1 pt-2">
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${phase.number === 3 ? "text-emerald-400" : "text-[#0066FF]"}`}>
                    Phase {phase.number}
                  </span>
                  <span className="text-[11px] text-white/60">{phase.name}</span>
                  <span className="text-[10px] text-white/25">{phase.period}</span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>

                {mvpSteps
                  .filter((step) => step.phase === phase.number)
                  .map((step) => (
                    <GanttRow
                      key={step.id}
                      phase={step}
                      totalWeeks={monthsToShow * 4}
                      milestone={step.milestone}
                    />
                  ))}
              </div>
            ))}

            {/* Options Label (if any selected) */}
            {optionPhases.length > 0 && (
              <>
                <div className="flex items-center gap-2 my-4">
                  <span className="text-[10px] text-amber-400/60 uppercase tracking-wider">Options selectionnees</span>
                  <div className="flex-1 h-px bg-amber-500/10" />
                </div>

                {optionPhases.map((phase) => (
                  <GanttRow 
                    key={phase.id} 
                    phase={phase} 
                    totalWeeks={monthsToShow * 4}
                    isOption 
                  />
                ))}
              </>
            )}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-[#0066FF] to-[#3388FF]" />
              <span className="text-xs text-white/40">Developpement MVP</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-emerald-500 to-emerald-400" />
              <span className="text-xs text-white/40">Tests & Production</span>
            </div>
            {selectedOptions.length > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-amber-500 to-amber-400" />
                <span className="text-xs text-white/40">Options additionnelles</span>
              </div>
            )}
          </div>
        </div>

        {/* Timeline details */}
        <div className="glass-card p-6">
          <h3 className="text-lg text-white font-medium mb-6">Details des phases</h3>
          <div className="space-y-8">
            {calendar.phases.map((phase) => (
              <div key={phase.number} className="flex flex-col gap-4">
                {/* Phase header */}
                <div className="flex flex-col gap-1.5 border-l-2 border-[#0066FF]/40 pl-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-xs font-mono uppercase tracking-wider ${phase.number === 3 ? "text-emerald-400" : "text-[#0066FF]"}`}>
                      Phase {phase.number}
                    </span>
                    <span className="text-sm text-white font-medium">{phase.name}</span>
                    <span className="text-xs text-white/30 font-mono">{phase.period}</span>
                  </div>
                  <p className="text-xs text-white/40 max-w-2xl">{phase.focus}</p>
                </div>

                {/* Steps within the phase */}
                <div className="flex flex-col gap-4 pl-4">
                  {calendar.weeks
                    .filter((week) => week.phase === phase.number)
                    .map((week, index) => (
                      <div key={index} className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                        <div className="w-24 shrink-0">
                          <span className="text-xs text-[#0066FF] font-mono">{week.period}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm text-white font-medium mb-1">{week.title}</h4>
                          <p className="text-xs text-white/40">{week.focus}</p>
                          {week.milestone && (
                            <div className="flex items-center gap-2 mt-2">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span className="text-xs text-emerald-400">Jalon : {week.milestone}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}

            {/* Options details */}
            {selectedOptionsData.length > 0 && (
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Plus className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-amber-400 uppercase tracking-wider">Options selectionnees (+{additionalWeeks} semaines)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedOptionsData.map(opt => (
                    <div key={opt.id} className="flex items-center justify-between p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                      <span className="text-sm text-white/60">{opt.name}</span>
                      <span className="text-xs text-amber-400 font-mono">+{opt.weeksToAdd} sem.</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Iterative note */}
        <p className="text-xs text-white/30 mt-6 leading-relaxed max-w-3xl">
          {calendar.iterativeNote}
        </p>
      </div>
    </SlideWrapper>
  )
}

// Gantt row component
function GanttRow({ 
  phase, 
  totalWeeks,
  milestone,
  isOption = false
}: { 
  phase: { id: string; name: string; startWeek: number; endWeek: number; color: string }
  totalWeeks: number
  milestone?: string
  isOption?: boolean
}) {
  const startPercent = ((phase.startWeek - 1) / totalWeeks) * 100
  const widthPercent = ((phase.endWeek - phase.startWeek + 1) / totalWeeks) * 100

  return (
    <div className="flex items-center">
      <div className="w-48 shrink-0 pr-4">
        <span className={`text-sm ${isOption ? "text-amber-400/80" : "text-white/60"}`}>{phase.name}</span>
        {milestone && (
          <div className="flex items-center gap-1 mt-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] text-emerald-400">{milestone}</span>
          </div>
        )}
      </div>
      <div className="flex-1 h-10 relative">
        {/* Background grid */}
        <div className="absolute inset-0 flex">
          {Array.from({ length: totalWeeks / 4 }).map((_, i) => (
            <div key={i} className="flex-1 border-l border-white/5 first:border-l-0" />
          ))}
        </div>
        {/* Progress bar */}
        <div 
          className={`absolute top-1/2 -translate-y-1/2 h-6 rounded-md bg-gradient-to-r ${phase.color} shadow-lg ${isOption ? "shadow-amber-500/20" : "shadow-[#0066FF]/20"}`}
          style={{ 
            left: `${startPercent}%`, 
            width: `${widthPercent}%`,
            minWidth: "40px"
          }}
        >
          <div className="absolute inset-0 rounded-md bg-gradient-to-b from-white/10 to-transparent" />
        </div>
      </div>
    </div>
  )
}
