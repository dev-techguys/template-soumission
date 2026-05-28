"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Presentation } from "lucide-react"

const NAV_ITEMS = [
  { id: "opening", label: "Ouverture" },
  { id: "objective", label: "Objectif" },
  { id: "priorities", label: "Priorités" },
  { id: "solution", label: "Solution" },
  { id: "modules", label: "Modules" },
  { id: "benefits", label: "Bénéfices" },
  { id: "demo", label: "Démo" },
  { id: "plan", label: "Plan" },
  { id: "investment", label: "Investissement" },
  { id: "team", label: "Équipe" },
]

export function PresentationNavV2() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("opening")
  const [progress, setProgress] = useState(0)
  const [isPresentationMode, setIsPresentationMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(NAV_ITEMS[index].id)
          }
        }
      })

      // Calculate progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalHeight) * 100
      setProgress(currentProgress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#E2E8F0] z-50">
        <motion.div
          className="h-full bg-[#50B878]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Desktop nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-lg border border-[#E2E8F0]">
          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-[#143B6D] text-white"
                    : "text-[#64748B] hover:text-[#1E293B] hover:bg-[#F6F8FA]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setIsPresentationMode(!isPresentationMode)}
              className={`ml-2 p-2 rounded-full transition-colors ${
                isPresentationMode
                  ? "bg-[#50B878] text-white"
                  : "bg-[#F6F8FA] text-[#64748B] hover:text-[#1E293B]"
              }`}
              title="Mode présentation"
            >
              <Presentation className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden p-2.5 md:p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-[#E2E8F0]"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[#1E293B]" />
        ) : (
          <Menu className="w-5 h-5 text-[#1E293B]" />
        )}
      </button>

      {/* Mobile nav panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-y-0 right-0 w-64 sm:w-72 bg-white z-40 shadow-xl lg:hidden overflow-y-auto"
          >
            <div className="p-4 sm:p-6 pt-16 sm:pt-20">
              <h3 className="text-base sm:text-lg font-bold text-[#1E293B] mb-3 sm:mb-4">Navigation</h3>
              <div className="space-y-1.5 sm:space-y-2">
                {NAV_ITEMS.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3 transition-colors text-sm sm:text-base ${
                      activeSection === item.id
                        ? "bg-[#143B6D] text-white"
                        : "text-[#64748B] hover:bg-[#F6F8FA]"
                    }`}
                  >
                    <span className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-current/20 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                      {index + 1}
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dots navigation (right side) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2">
        {NAV_ITEMS.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group relative flex items-center"
            title={item.label}
          >
            <span className="absolute right-6 px-2 py-1 bg-[#1E293B] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activeSection === item.id
                  ? "bg-[#143B6D] scale-125"
                  : "bg-[#E2E8F0] hover:bg-[#143B6D]/50"
              }`}
            />
          </button>
        ))}
      </div>
    </>
  )
}
