"use client"

import { SlideWrapper } from "../slide-wrapper"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations"
import { FeatureCard } from "@/components/ui/feature-card"
import { Target, Boxes, Layers, Wallet, CalendarDays, Cpu, Briefcase, PenLine, ArrowRight, CreditCard } from "lucide-react"

const SECTIONS = [
  {
    id: "about-us",
    icon: Target,
    title: "Notre approche",
    description: "Qui est TechGuys et comment nous abordons votre projet.",
  },
  {
    id: "objectives",
    icon: Boxes,
    title: "MVP de base",
    description: "Le LOS sur mesure : 3 phases et 15 fonctionnalités.",
  },
  {
    id: "roadmap",
    icon: Layers,
    title: "Options complémentaires",
    description: "Modules additionnels pour enrichir la plateforme.",
  },
  {
    id: "pricing",
    icon: Wallet,
    title: "Tarification",
    description: "Investissement détaillé et évolution de la portée.",
  },
  {
    id: "stripe",
    icon: CreditCard,
    title: "Frais Stripe",
    description: "Analyse des frais PAD selon la fréquence de prélèvement.",
  },
  {
    id: "delivery",
    icon: CalendarDays,
    title: "Calendrier de livraison",
    description: "Échéancier des 3 phases jusqu'à la mise en production.",
  },
  {
    id: "annexe",
    icon: Cpu,
    title: "Annexe technique",
    description: "Architecture, sécurité et stack technologique.",
  },
  {
    id: "realisations",
    icon: Briefcase,
    title: "Réalisations",
    description: "Un aperçu de nos projets et de notre expertise.",
  },
  {
    id: "closing",
    icon: PenLine,
    title: "Conclusion & signature",
    description: "Prêt à démarrer — passez à l'action.",
  },
]

export function SommaireSlide() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <SlideWrapper id="sommaire" className="relative">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-14">
          <FadeInUp>
            <span className="text-xs tracking-[0.3em] uppercase text-[#0066FF] font-medium">
              Sommaire
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-[1.1]">
              Naviguez dans
              <br />
              <span className="text-[#0066FF]">la proposition</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-base md:text-lg text-white/40 max-w-2xl leading-relaxed">
              Cliquez sur une section pour vous y rendre directement. Vous pouvez aussi utiliser la navigation à droite en tout temps.
            </p>
          </FadeInUp>
        </div>

        {/* Sections grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SECTIONS.map((section, index) => (
            <StaggerItem key={section.id}>
              <button
                type="button"
                onClick={() => scrollTo(section.id)}
                className="w-full text-left"
                aria-label={`Aller à la section ${section.title}`}
              >
                <FeatureCard className="group h-full hover:border-[#0066FF]/30 transition-colors duration-300">
                  <div className="p-5 flex items-center gap-4">
                    {/* Number */}
                    <span className="text-sm font-mono text-white/25 tabular-nums w-6 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div className="w-11 h-11 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0066FF]/20 transition-colors duration-300">
                      <section.icon className="w-5 h-5 text-[#0066FF]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base text-white font-medium">{section.title}</h3>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </div>
                </FeatureCard>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SlideWrapper>
  )
}
