"use client"

import { ChevronUp, ChevronDown } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import { branding } from "@/lib/proposal-data"

const SLIDES = [
  "cover",
  "about-us",
  "context",
  "objectives",
  "roadmap",
  "pricing",
  "annexe",
  "closing",
]

const SLIDE_LABELS = [
  "Couverture",
  "Notre approche",
  "Contexte",
  "Analyse",
  "Feuille de route",
  "Tarification",
  "Annexe",
  "Conclusion",
]

export function SlideNav() {
  const [current, setCurrent] = useState(0)

  const scrollToSlide = useCallback((index: number) => {
    const el = document.getElementById(SLIDES[index])
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setCurrent(index)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SLIDES.indexOf(entry.target.id)
            if (idx !== -1) setCurrent(idx)
          }
        })
      },
      { threshold: 0.5 }
    )

    SLIDES.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      <button
        onClick={() => scrollToSlide(Math.max(0, current - 1))}
        className="p-1.5 rounded-full bg-white/90 border border-[#e5e7eb] hover:bg-[#f7f7f7] transition-colors backdrop-blur-sm shadow-sm"
        style={{ color: branding.primaryColor }}
        aria-label="Diapositive precedente"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      <div className="flex flex-col gap-2 py-2">
        {SLIDES.map((id, i) => (
          <button
            key={id}
            onClick={() => scrollToSlide(i)}
            className="group relative flex items-center justify-end"
            aria-label={`Aller a ${SLIDE_LABELS[i]}`}
          >
            <span
              className="absolute right-6 whitespace-nowrap text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-2 py-1 rounded border border-[#e5e7eb] shadow-sm"
              style={{ color: branding.textDark }}
            >
              {SLIDE_LABELS[i]}
            </span>
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: current === i ? "0.75rem" : "0.5rem",
                height: current === i ? "0.75rem" : "0.5rem",
                backgroundColor: current === i ? branding.primaryColor : "#9ca3af80",
              }}
            />
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollToSlide(Math.min(SLIDES.length - 1, current + 1))}
        className="p-1.5 rounded-full bg-white/90 border border-[#e5e7eb] hover:bg-[#f7f7f7] transition-colors backdrop-blur-sm shadow-sm"
        style={{ color: branding.primaryColor }}
        aria-label="Diapositive suivante"
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      <span className="text-[10px] font-sans mt-1 tabular-nums" style={{ color: branding.textMuted }}>
        {current + 1}/{SLIDES.length}
      </span>
    </nav>
  )
}
