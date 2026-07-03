"use client"

import { SlideWrapper } from "../slide-wrapper"
import { FadeInUp, StaggerContainer, StaggerItem, Parallax } from "@/components/ui/scroll-animations"
import { FeatureCard } from "@/components/ui/feature-card"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const PROJECTS = [
  {
    name: "Plania AI",
    category: "Application web",
    description:
      "Plateforme propulsée par l'IA pour créer des plans d'affaires professionnels et gérer l'accompagnement entrepreneurial à grande échelle.",
  },
  {
    name: "Stronger Together",
    category: "Application mobile",
    description:
      "Plateforme fitness pour femmes : entraînements, programmes, nutrition et suivi, avec calculs de macros propulsés par l'IA.",
  },
  {
    name: "Voltix Consultation",
    category: "Site web",
    description:
      "Site premium sur mesure pour une firme d'intégration CRM, connecté à Sanity et à l'écosystème Zoho.",
  },
  {
    name: "Virtuose Formation",
    category: "Application web",
    description:
      "Plateforme de formation orientée conversion, de l'exploration des programmes jusqu'à l'inscription.",
  },
  {
    name: "Aidexpress",
    category: "Application mobile",
    description:
      "Plateforme de services à domicile reliant familles et intervenants qualifiés partout au Québec et en Ontario.",
  },
  {
    name: "Samuelsohn",
    category: "Application web",
    description:
      "Expérience web élégante pour une maison de vêtements haut de gamme, au service de son héritage et de son positionnement premium.",
  },
  {
    name: "Bibliothèque de Laval",
    category: "Application web",
    description:
      "Application de découverte de services en swipe façon Tinder, avec analyses d'intérêts pour la bibliothèque.",
  },
  {
    name: "HotellerieJobs",
    category: "Application web",
    description:
      "Migration complète d'une plateforme d'emploi en restauration et hôtellerie, avec imports d'annonces par API.",
  },
  {
    name: "APFF",
    category: "Application mobile",
    description:
      "Plateforme événementielle (web + PWA) pour un congrès annuel : programmes, conférenciers et sondages en temps réel.",
  },
]

const PORTFOLIO_URL = "https://www.techguys.consulting/fr/projets"

export function PortfolioSlide() {
  return (
    <SlideWrapper id="realisations" className="relative">
      {/* Parallax floating elements */}
      <Parallax offset={50} className="absolute top-24 left-16 w-32 h-32 rounded-full bg-[#0066FF]/5 blur-3xl" />
      <Parallax offset={-30} className="absolute bottom-32 right-10 w-24 h-24 rounded-full bg-[#3388FF]/5 blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-14">
          <FadeInUp>
            <span className="text-xs tracking-[0.3em] uppercase text-[#0066FF] font-medium">
              Réalisations
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-[1.1]">
              Des réalisations qui
              <br />
              <span className="text-[#0066FF]">parlent d&apos;elles-mêmes</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-base md:text-lg text-white/40 max-w-2xl leading-relaxed">
              Des startups aux entreprises établies, nous avons livré des produits numériques qui génèrent
              de la croissance et des résultats concrets dans tous les secteurs.
            </p>
          </FadeInUp>
        </div>

        {/* Projects grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <StaggerItem key={project.name}>
              <FeatureCard className="group h-full hover:border-[#0066FF]/30 transition-colors duration-300">
                <div className="p-6 flex flex-col gap-3 h-full">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-[#0066FF]/80 font-medium">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <h3 className="text-lg text-white font-medium">{project.name}</h3>
                  <p className="text-sm text-white/40 leading-relaxed flex-1">{project.description}</p>
                </div>
              </FeatureCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA to full portfolio */}
        <FadeInUp delay={0.3} className="mt-12">
          <FeatureCard className="p-6 md:p-7">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h4 className="text-lg text-white font-medium mb-1">Découvrez notre portfolio complet</h4>
                <p className="text-sm text-white/45 leading-relaxed max-w-xl">
                  Explorez l&apos;ensemble de nos projets, études de cas et technologies sur notre site web.
                </p>
              </div>
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#3388FF] hover:from-[#3388FF] hover:to-[#66AAFF] transition-all duration-300 shadow-lg shadow-[#0066FF]/20 shrink-0"
              >
                <span className="text-sm tracking-[0.03em] text-white font-sans font-semibold">
                  Voir tous nos projets
                </span>
                <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </FeatureCard>
        </FadeInUp>
      </div>
    </SlideWrapper>
  )
}
