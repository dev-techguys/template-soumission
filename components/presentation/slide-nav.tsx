"use client"

import { ChevronUp, ChevronDown } from "lucide-react"
import { useEffect, useState, useCallback } from "react"

const SLIDES = ["cover", "sommaire", "about-us", "objectives", "roadmap", "pricing", "delivery", "annexe", "realisations", "closing"]
const SLIDE_LABELS = ["Couverture", "Sommaire", "Notre approche", "MVP de base", "Options", "Tarification", "Calendrier", "Annexe technique", "Réalisations", "Conclusion"]

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
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
      {/* Up button - glass */}
      <button
        onClick={() => scrollToSlide(Math.max(0, current - 1))}
        className="w-8 h-8 rounded-xl glass flex items-center justify-center text-[#0066FF] hover:bg-white/10 transition-all"
        aria-label="Diapositive precedente"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="flex flex-col gap-2 py-3 px-2 glass rounded-2xl">
        {SLIDES.map((id, i) => (
          <button
            key={id}
            onClick={() => scrollToSlide(i)}
            className="group relative flex items-center justify-center"
            aria-label={`Aller a ${SLIDE_LABELS[i]}`}
          >
            {/* Tooltip */}
            <span className="absolute right-8 whitespace-nowrap text-[11px] font-sans text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-200 glass px-3 py-1.5 rounded-lg pointer-events-none">
              {SLIDE_LABELS[i]}
            </span>
            {/* Dot */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                current === i
                  ? "w-2.5 h-2.5 bg-[#0066FF] shadow-sm shadow-[#0066FF]/50"
                  : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Down button - glass */}
      <button
        onClick={() => scrollToSlide(Math.min(SLIDES.length - 1, current + 1))}
        className="w-8 h-8 rounded-xl glass flex items-center justify-center text-[#0066FF] hover:bg-white/10 transition-all"
        aria-label="Diapositive suivante"
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Counter */}
      <span className="text-[10px] font-mono text-white/30 mt-1 tabular-nums">
        {current + 1}/{SLIDES.length}
      </span>
    </nav>
  )
}
