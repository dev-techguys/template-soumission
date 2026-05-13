"use client"

import { SlideWrapper } from "../slide-wrapper"
import { calendar } from "@/lib/proposal-data"
import { Flag, Info, Clock, Calendar } from "lucide-react"

export function CalendarSlide() {
  if (!calendar.weeks || calendar.weeks.length === 0) return null

  return (
    <SlideWrapper id="calendar" className="relative !min-h-0">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 0% 50%, rgba(255, 99, 99, 0.05), transparent 50%),
              radial-gradient(circle at 100% 100%, rgba(255, 99, 99, 0.03), transparent 30%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-14">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
                <Calendar className="w-4 h-4 text-[#FF6363]" />
              </div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#FF6363] font-sans font-medium">
                05 / Calendrier d{"'"}execution
              </span>
            </div>
            {!calendar.pmApproved && (
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full text-amber-400 text-xs font-sans font-medium border-amber-500/30">
                <Clock className="w-3.5 h-3.5" />
                En attente d{"'"}approbation PO
              </div>
            )}
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-[1.1]">
            Notre plan
            <br />
            <span className="gradient-text">semaine par semaine</span>
          </h2>
          <p className="text-base text-white/40 font-sans max-w-2xl leading-relaxed">
            Voici la sequence d{"'"}execution prevue pour le scenario MVP seul. Chaque phase a un focus clair et des livrables definis.
          </p>
          {calendar.reviewCalls && (
            <div className="glass-card inline-flex items-center gap-2 text-sm text-[#FF8585] font-sans px-4 py-2.5 rounded-xl w-fit">
              <Clock className="w-4 h-4" />
              Point d{"'"}avancement : {calendar.reviewCalls}
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - gradient */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6363] via-[#FF6363]/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-5">
            {calendar.weeks.map((week, idx) => (
              <div key={week.week} className="flex gap-5 md:gap-6 items-start group">

                {/* Week number bubble */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF6363] to-[#FF8585] text-white flex items-center justify-center font-sans font-bold text-sm z-10 shadow-lg shadow-[#FF6363]/20 group-hover:scale-105 transition-transform duration-200">
                  {idx + 1}
                </div>

                {/* Card */}
                <div className="flex-1 glass-card rounded-2xl p-6 card-hover overflow-hidden relative">
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6363]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#FF6363]/60 font-sans mb-1">
                          {week.period}
                        </p>
                        <h3 className="font-serif text-xl text-white leading-snug">
                          {week.title}
                        </h3>
                      </div>
                      {week.milestone && (
                        <div className="flex items-center gap-1.5 bg-[#FF6363]/10 border border-[#FF6363]/30 text-[#FF8585] text-xs font-sans font-medium px-3 py-1.5 rounded-full flex-shrink-0">
                          <Flag className="w-3 h-3" />
                          {week.milestone}
                        </div>
                      )}
                    </div>

                    {week.focus && (
                      <p className="text-sm text-[#FF8585] font-sans font-medium mb-4 leading-relaxed">
                        {week.focus}
                      </p>
                    )}

                    {week.activities.length > 0 && (
                      <ul className="space-y-2">
                        {week.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/45 font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6363]/50 mt-[7px] flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Iterative note */}
        {calendar.iterativeNote && (
          <div className="mt-12 glass-card rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-[#FF6363]" />
              </div>
              <p className="text-sm text-white/45 font-sans leading-relaxed">
                {calendar.iterativeNote}
              </p>
            </div>
          </div>
        )}
      </div>
    </SlideWrapper>
  )
}
