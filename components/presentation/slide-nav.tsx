"use client"

import { ChevronUp, ChevronDown } from "lucide-react"
import { useEffect, useState, useCallback } from "react"

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
  "Problématique",
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
        className="p-1.5 rounded-full bg-white/90 border border-[#e5e7eb] text-[#1B365D] hover:bg-[#f8fafc] transition-colors backdrop-blur-sm shadow-sm"
        aria-label="Diapositive précédente"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      <div className="flex flex-col gap-2 py-2">
        {SLIDES.map((id, i) => (
          <button
            key={id}
            onClick={() => scrollToSlide(i)}
            className="group relative flex items-center justify-end"
            aria-label={`Aller à ${SLIDE_LABELS[i]}`}
          >
            <span className="absolute right-6 whitespace-nowrap text-xs font-sans text-[#1B365D] opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-2 py-1 rounded border border-[#e5e7eb] shadow-sm">
              {SLIDE_LABELS[i]}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                current === i
                  ? "w-3 h-3 bg-[#1B365D]"
                  : "w-2 h-2 bg-[#9ca3af]/50 hover:bg-[#64748b]"
              }`}
            />
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollToSlide(Math.min(SLIDES.length - 1, current + 1))}
        className="p-1.5 rounded-full bg-white/90 border border-[#e5e7eb] text-[#1B365D] hover:bg-[#f8fafc] transition-colors backdrop-blur-sm shadow-sm"
        aria-label="Diapositive suivante"
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      <span className="text-[10px] font-sans text-[#64748b] mt-1 tabular-nums">
        {current + 1}/{SLIDES.length}
      </span>
    </nav>
  )
}
