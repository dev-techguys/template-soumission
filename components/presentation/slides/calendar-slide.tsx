"use client"

import { SlideWrapper } from "../slide-wrapper"
import { calendar } from "@/lib/proposal-data"
import { CheckCircle2, Flag, Info } from "lucide-react"

export function CalendarSlide() {
  if (!calendar.weeks || calendar.weeks.length === 0) return null

  return (
    <SlideWrapper id="calendar" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">

        {/* Header */}
        <div className="flex flex-col gap-6 mb-14">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
              Calendrier d&apos;exécution
            </span>
            {calendar.pmApproved && (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-sans font-medium px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Approuvé par le PM / PO
              </div>
            )}
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-2xl leading-tight text-balance">
            Notre plan semaine par semaine
          </h2>
          <div className="w-16 h-px bg-[#387B84]" />
          <p className="text-base md:text-lg text-[#6b7280] font-sans max-w-2xl leading-relaxed">
            Voici la séquence d&apos;exécution que nous prévoyons suivre. Chaque semaine a un focus
            clair et des livrables définis — conçu pour générer de la valeur dès le départ.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-[#387B84]/60 via-[#387B84]/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {calendar.weeks.map((week, idx) => (
              <div key={week.week} className="flex gap-6 md:gap-8 items-start group">

                {/* Week number bubble */}
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#387B84] text-white flex items-center justify-center font-sans font-semibold text-sm z-10 shadow-md group-hover:scale-110 transition-transform duration-200">
                  {week.week}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white border border-[#e5e7eb] rounded-xl p-6 hover:border-[#387B84]/30 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <p className="text-[10px] tracking-[0.25em] uppercase text-[#6b7280] font-sans mb-1">
                        Semaine {week.week}
                      </p>
                      <h3 className="font-serif text-xl text-[#2d3748] leading-snug">
                        {week.title}
                      </h3>
                    </div>
                    {week.milestone && (
                      <div className="flex items-center gap-1.5 bg-[#387B84]/10 text-[#387B84] text-xs font-sans font-medium px-3 py-1 rounded-full flex-shrink-0">
                        <Flag className="w-3 h-3" />
                        {week.milestone}
                      </div>
                    )}
                  </div>

                  {week.focus && (
                    <p className="text-sm text-[#387B84] font-sans font-medium mb-3 leading-relaxed">
                      {week.focus}
                    </p>
                  )}

                  {week.activities.length > 0 && (
                    <ul className="space-y-1.5">
                      {week.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#6b7280] font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#387B84]/50 mt-[6px] flex-shrink-0" />
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
          <div className="mt-14 flex items-start gap-3 p-5 rounded-xl border border-[#e5e7eb] bg-[#f9fafb]">
            <Info className="w-4 h-4 text-[#387B84] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-[#6b7280] font-sans leading-relaxed italic">
              {calendar.iterativeNote}
            </p>
          </div>
        )}
      </div>
    </SlideWrapper>
  )
}
