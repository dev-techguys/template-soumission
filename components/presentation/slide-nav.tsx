"use client"

import { ChevronUp, ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const SLIDES = [
  "cover",
  "executive-summary", 
  "constat",
  "besoins-prioritaires",
  "vision",
  "besoin-database",
  "besoin-navigation",
  "besoin-dashboard",
  "parcours",
  "use-cases",
  "architecture",
  "security",
  "roadmap",
  "budget",
  "conclusion"
]

const SLIDE_LABELS = [
  "Accueil",
  "Résumé",
  "Constat", 
  "3 Besoins",
  "Vision",
  "Base de données",
  "Navigation",
  "Dashboard",
  "Parcours",
  "Cas d'usage",
  "Architecture",
  "Sécurité",
  "Déploiement",
  "Budget",
  "Conclusion"
]

const NAV_SECTIONS = [
  { id: "executive-summary", label: "Résumé" },
  { id: "besoins-prioritaires", label: "Besoins" },
  { id: "besoin-database", label: "Base de données" },
  { id: "besoin-navigation", label: "Site complet" },
  { id: "besoin-dashboard", label: "Dashboard" },
  { id: "parcours", label: "Parcours" },
  { id: "architecture", label: "Architecture" },
  { id: "security", label: "Sécurité" },
  { id: "roadmap", label: "Déploiement" },
  { id: "budget", label: "Budget" },
]

export function SlideNav() {
  const [current, setCurrent] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollToSlide = useCallback((index: number) => {
    const el = document.getElementById(SLIDES[index])
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setCurrent(index)
      setIsMenuOpen(false)
    }
  }, [])

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-[#E2E8F0]">
        <motion.div 
          className="h-full bg-[#143B6D]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top sticky navigation */}
      <header className="fixed top-1 left-0 right-0 z-50">
        <nav className="mx-auto max-w-7xl px-4">
          <div className="bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-full shadow-sm px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSlide(0)}
              className="text-sm font-semibold text-[#143B6D] hover:text-[#5B5CE2] transition-colors"
            >
              Agent IA Laval Économique
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToId(section.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    SLIDES[current] === section.id
                      ? "bg-[#E8F3FB] text-[#143B6D]"
                      : "text-[#64748B] hover:text-[#143B6D] hover:bg-[#F6F8FA]"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToId("budget")}
                className="hidden sm:block px-4 py-2 text-xs font-semibold bg-[#143B6D] text-white rounded-full hover:bg-[#0f2d52] transition-colors"
              >
                17 500 $
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-[#64748B] hover:text-[#143B6D] transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mx-4 mt-2"
            >
              <div className="bg-white/95 backdrop-blur-md border border-[#E2E8F0] rounded-2xl shadow-lg p-4">
                <div className="grid grid-cols-2 gap-2">
                  {NAV_SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToId(section.id)}
                      className={`px-3 py-2 text-sm font-medium rounded-xl transition-colors text-left ${
                        SLIDES[current] === section.id
                          ? "bg-[#E8F3FB] text-[#143B6D]"
                          : "text-[#64748B] hover:text-[#143B6D] hover:bg-[#F6F8FA]"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Side navigation dots */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2">
        <button
          onClick={() => scrollToSlide(Math.max(0, current - 1))}
          className="p-1.5 rounded-full bg-white/90 border border-[#E2E8F0] text-[#143B6D] hover:bg-[#E8F3FB] transition-colors backdrop-blur-sm shadow-sm"
          aria-label="Diapositive precedente"
        >
          <ChevronUp className="w-3 h-3" />
        </button>

        <div className="flex flex-col gap-1.5 py-2">
          {SLIDES.map((id, i) => (
            <button
              key={id}
              onClick={() => scrollToSlide(i)}
              className="group relative flex items-center justify-end"
              aria-label={`Aller a ${SLIDE_LABELS[i]}`}
            >
              <span className="absolute right-5 whitespace-nowrap text-[10px] font-medium text-[#1E293B] opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-2 py-1 rounded-md border border-[#E2E8F0] shadow-sm">
                {SLIDE_LABELS[i]}
              </span>
              <span
                className={`block rounded-full transition-all duration-300 ${
                  current === i
                    ? "w-2.5 h-2.5 bg-[#143B6D]"
                    : "w-1.5 h-1.5 bg-[#E2E8F0] hover:bg-[#64748B]"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSlide(Math.min(SLIDES.length - 1, current + 1))}
          className="p-1.5 rounded-full bg-white/90 border border-[#E2E8F0] text-[#143B6D] hover:bg-[#E8F3FB] transition-colors backdrop-blur-sm shadow-sm"
          aria-label="Diapositive suivante"
        >
          <ChevronDown className="w-3 h-3" />
        </button>

        <span className="text-[9px] font-medium text-[#64748B] mt-1 tabular-nums">
          {current + 1}/{SLIDES.length}
        </span>
      </nav>
    </>
  )
}
