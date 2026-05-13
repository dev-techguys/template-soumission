"use client"

import { SlideWrapper } from "../slide-wrapper"
import { calendar } from "@/lib/proposal-data"
import { Flag, Info, Clock } from "lucide-react"

export function CalendarSlide() {
  if (!calendar.weeks || calendar.weeks.length === 0) return null

  return (
    <SlideWrapper id="calendar" className="bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">

        {/* Header */}
        <div className="flex flex-col gap-6 mb-14">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs tracking-[0.4em] uppercase text-[#0035FF] font-sans font-medium">
              05 / Calendrier d{"'"}exécution
            </span>
            {!calendar.pmApproved && (
              <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-sans font-medium px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                En attente d{"'"}approbation PO
              </div>
            )}
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-white max-w-2xl leading-tight text-balance">
            Notre plan semaine par semaine
          </h2>
          <div className="w-16 h-px bg-[#0035FF]" />
          <p className="text-base md:text-lg text-white/50 font-sans max-w-2xl leading-relaxed">
            Voici la séquence d{"'"}exécution prévue pour le scénario MVP seul. Chaque phase a un focus clair et des livrables définis.
          </p>
          {calendar.reviewCalls && (
            <div className="flex items-center gap-2 text-sm text-[#3B82F6] font-sans">
              <Clock className="w-4 h-4" />
              Point d{"'"}avancement : {calendar.reviewCalls}
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-[#0035FF]/60 via-[#0035FF]/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {calendar.weeks.map((week, idx) => (
              <div key={week.week} className="flex gap-6 md:gap-8 items-start group">

                {/* Week number bubble */}
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0035FF] text-white flex items-center justify-center font-sans font-semibold text-sm z-10 shadow-lg group-hover:scale-110 transition-transform duration-200">
                  {idx + 1}
                </div>

                {/* Card */}
                <div className="flex-1 border border-white/10 bg-white/[0.02] rounded-xl p-6 hover:border-[#0035FF]/30 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <p className="text-[10px] tracking-[0.25em] uppercase text-[#0035FF]/60 font-sans mb-1">
                        {week.period}
                      </p>
                      <h3 className="font-serif text-xl text-white leading-snug">
                        {week.title}
                      </h3>
                    </div>
                    {week.milestone && (
                      <div className="flex items-center gap-1.5 bg-[#0035FF]/10 border border-[#0035FF]/30 text-[#3B82F6] text-xs font-sans font-medium px-3 py-1 rounded-full flex-shrink-0">
                        <Flag className="w-3 h-3" />
                        {week.milestone}
                      </div>
                    )}
                  </div>

                  {week.focus && (
                    <p className="text-sm text-[#3B82F6] font-sans font-medium mb-3 leading-relaxed">
                      {week.focus}
                    </p>
                  )}

                  {week.activities.length > 0 && (
                    <ul className="space-y-1.5">
                      {week.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/50 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0035FF]/50 mt-[6px] flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Iterative note */}
        {calendar.iterativeNote && (
          <div className="mt-14 flex items-start gap-3 p-5 rounded-xl border border-white/10 bg-white/[0.02]">
            <Info className="w-4 h-4 text-[#0035FF] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-white/50 font-sans leading-relaxed italic">
              {calendar.iterativeNote}
            </p>
          </div>
        )}
      </div>
    </SlideWrapper>
  )
}
