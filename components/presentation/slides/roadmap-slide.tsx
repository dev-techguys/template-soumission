"use client"

import { SlideWrapper } from "../slide-wrapper"
import { useEffect, useRef, useState } from "react"
import {
  Wrench,
  BarChart3,
  Globe,
  Cpu,
  Zap,
  Rocket,
  CheckSquare,
} from "lucide-react"

const TIMELINE = [
  {
    icon: Wrench,
    title: "Phase 1 : Audit & Architecture",
    why: "Avant de construire, il faut comprendre l'existant et définir les fondations techniques optimales pour InputKit.",
    actions: [
      {
        task: "Audit complet du site WordPress actuel",
        detail:
          "Analyse de la structure, du contenu, des performances et des intégrations existantes pour planifier une migration sans perte.",
      },
      {
        task: "Définition de l'architecture Next.js",
        detail:
          "Conception de la structure de composants, du routing, et de la stratégie de rendering (SSR, SSG, ISR) adaptée aux besoins d'InputKit.",
      },
      {
        task: "Design system & composants UI",
        detail:
          "Création d'une bibliothèque de composants réutilisables alignée avec l'identité visuelle d'InputKit.",
      },
      {
        task: "Stratégie de migration de contenu",
        detail:
          "Plan détaillé pour migrer chaque page, image et élément de contenu de WordPress vers la nouvelle plateforme.",
      },
    ],
  },
  {
    icon: Globe,
    title: "Phase 2 : Développement du site sur mesure",
    why: "Construction de la nouvelle plateforme avec les meilleures pratiques modernes et une attention particulière à la performance.",
    actions: [
      {
        task: "Mise en place de l'infrastructure Vercel",
        detail:
          "Configuration du projet Next.js sur Vercel avec CI/CD, preview deployments et monitoring intégré.",
      },
      {
        task: "Développement des pages principales",
        detail:
          "Création des pages d'accueil, produit, pricing, ressources et contact avec optimisation SEO native.",
      },
      {
        task: "Intégration des fonctionnalités dynamiques",
        detail:
          "Blog, formulaires, intégrations CRM et analytics avec des performances optimales.",
      },
      {
        task: "Optimisation Core Web Vitals",
        detail:
          "Optimisation des images, du code et du loading pour atteindre des scores Lighthouse de 90+.",
      },
    ],
  },
  {
    icon: Cpu,
    title: "Phase 3 : Intégration IA & Automatisation",
    why: "L'intelligence artificielle est au cœur de cette transformation — elle permet l'agilité et l'autonomie recherchées.",
    actions: [
      {
        task: "Interface de modification par IA",
        detail:
          "Développement d'une interface permettant de modifier le contenu du site via des commandes en langage naturel.",
      },
      {
        task: "Génération de contenu assistée",
        detail:
          "Outils d'IA pour aider à créer et optimiser le contenu marketing, les descriptions produit et les articles de blog.",
      },
      {
        task: "A/B testing automatisé",
        detail:
          "Système intelligent pour tester automatiquement différentes versions de contenu et optimiser les conversions.",
      },
      {
        task: "Personnalisation dynamique",
        detail:
          "Adaptation du contenu en fonction du visiteur, de son secteur d'activité et de son parcours sur le site.",
      },
    ],
  },
  {
    icon: BarChart3,
    title: "Phase 4 : SEO & Analytics",
    why: "Avec les fondations en place, on optimise la visibilité et on mesure chaque interaction pour améliorer continuellement.",
    actions: [
      {
        task: "Optimisation SEO technique avancée",
        detail:
          "Structured data, sitemap dynamique, optimisation des métadonnées et stratégie de linking interne.",
      },
      {
        task: "Configuration analytics complète",
        detail:
          "Google Analytics 4, Google Tag Manager, et événements personnalisés pour tracker chaque conversion.",
      },
      {
        task: "Tableaux de bord de performance",
        detail:
          "Création de dashboards pour suivre les KPIs clés : trafic, conversions, performance technique.",
      },
      {
        task: "Stratégie de contenu SEO",
        detail:
          "Plan de création de contenu optimisé pour les requêtes stratégiques du marché CX.",
      },
    ],
  },
  {
    icon: Zap,
    title: "Phase 5 : Migration & Go-Live",
    why: "La transition de l'ancien vers le nouveau site doit être fluide, sans impact sur le SEO ou l'expérience utilisateur.",
    actions: [
      {
        task: "Plan de redirection 301",
        detail:
          "Mapping complet des URLs anciennes vers nouvelles pour préserver le juice SEO et éviter les 404.",
      },
      {
        task: "Tests de régression complets",
        detail:
          "Vérification de chaque fonctionnalité, formulaire et intégration avant le lancement.",
      },
      {
        task: "Migration DNS & Go-Live",
        detail:
          "Basculement du domaine vers la nouvelle infrastructure avec monitoring renforcé.",
      },
      {
        task: "Monitoring post-lancement",
        detail:
          "Surveillance active des performances, erreurs et métriques clés pendant les premières semaines.",
      },
    ],
  },
  {
    icon: Rocket,
    title: "Phase 6 : Optimisation continue",
    why: "Le lancement n'est que le début — l'amélioration continue est essentielle pour maximiser le ROI.",
    actions: [
      {
        task: "Analyse des données utilisateur",
        detail:
          "Étude des comportements, heatmaps et recordings pour identifier les opportunités d'amélioration.",
      },
      {
        task: "Itérations basées sur les données",
        detail:
          "Modifications et optimisations guidées par les métriques réelles, pas les suppositions.",
      },
      {
        task: "Formation de l'équipe InputKit",
        detail:
          "Sessions de formation sur l'utilisation de l'interface IA et les bonnes pratiques de modification de contenu.",
      },
    ],
  },
]

function TimelineCard({
  phase,
  index,
  totalInSection,
  isVisible,
}: {
  phase: (typeof TIMELINE)[0]
  index: number
  totalInSection: number
  isVisible: boolean
}) {
  const Icon = phase.icon
  const isLast = index === totalInSection - 1

  return (
    <div
      className={`relative pb-8 md:pb-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-5 md:gap-8">
        {/* Left: number circle + vertical line that stays within the card */}
        <div className="flex flex-col items-center shrink-0">
          <div
            className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
              isVisible
                ? "border-[#387B84] bg-[#387B84]/10 shadow-[0_0_20px_rgba(56,123,132,0.15)]"
                : "border-[#e5e7eb] bg-white"
            }`}
          >
            <span className="font-serif text-lg md:text-xl text-[#387B84] font-semibold">
              {index + 1}
            </span>
          </div>
          {!isLast && (
            <div className="w-px flex-1 bg-[#e5e7eb] relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 w-full bg-gradient-to-b from-[#387B84]/60 to-[#4a9ba5]/10 transition-all duration-1000 ease-out ${
                  isVisible ? "h-full" : "h-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              />
            </div>
          )}
        </div>

        {/* Right: card */}
        <div className="flex-1">
          <div className="rounded-xl border border-[#e5e7eb] bg-white hover:border-[#387B84]/30 hover:shadow-lg transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#387B84]/30 to-transparent" />

            {/* Card header */}
            <div className="px-5 pt-5 pb-3 md:px-7 md:pt-6 md:pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#387B84]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#387B84]" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-[#2d3748] leading-tight">
                  {phase.title}
                </h3>
              </div>
              <p className="text-sm text-[#6b7280] font-sans leading-relaxed mt-3 pl-12">
                {phase.why}
              </p>
            </div>

            {/* Actions list */}
            <div className="px-5 pb-5 md:px-7 md:pb-6 flex flex-col gap-2.5">
              {phase.actions.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3.5 md:p-4 rounded-xl bg-[#f7f7f7] border border-[#e5e7eb] hover:border-[#d1d5db] transition-colors"
                >
                  <div className="shrink-0 mt-0.5">
                    <CheckSquare className="w-4 h-4 text-[#387B84]/50" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-sans font-medium text-[#2d3748] leading-snug">
                      {item.task}
                    </span>
                    <span className="text-xs font-sans text-[#6b7280] leading-relaxed">
                      {item.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TimelineSection({
  phases,
  slideId,
  sectionLabel,
  sectionTitle,
  sectionSubtitle,
}: {
  phases: { phase: (typeof TIMELINE)[0]; globalIndex: number }[]
  slideId: string
  sectionLabel: string
  sectionTitle: string
  sectionSubtitle?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    )

    const container = containerRef.current
    if (container) {
      const cards = container.querySelectorAll("[data-index]")
      cards.forEach((card) => observer.observe(card))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <SlideWrapper id={slideId} className="bg-[#f7f7f7] !min-h-0">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 w-full">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-14">
          <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
            {sectionLabel}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-3xl leading-tight text-balance">
            {sectionTitle}
          </h2>
          <div className="w-16 h-px bg-[#387B84]" />
          {sectionSubtitle && (
            <p className="text-base text-[#6b7280] font-sans max-w-2xl leading-relaxed whitespace-pre-line">
              {sectionSubtitle}
            </p>
          )}
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {phases.map(({ phase }, localIndex) => (
            <div key={phase.title} data-index={localIndex}>
              <TimelineCard
                phase={phase}
                index={localIndex}
                totalInSection={phases.length}
                isVisible={visibleCards.has(localIndex)}
              />
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}

export function RoadmapSlide1() {
  const phases = TIMELINE.slice(0, 3).map((phase, i) => ({
    phase,
    globalIndex: i,
  }))

  return (
    <TimelineSection
      phases={phases}
      slideId="roadmap-1"
      sectionLabel="09 / Feuille de route"
      sectionTitle="Plan d'implémentation"
      sectionSubtitle={`Voici le plan d'exécution proposé pour la migration de WordPress vers une plateforme sur mesure propulsée par l'intelligence artificielle.\n\nCette feuille de route peut être ajustée selon les priorités et les contraintes d'InputKit.`}
    />
  )
}

export function RoadmapSlide2() {
  const phases = TIMELINE.slice(3).map((phase, i) => ({
    phase,
    globalIndex: i + 3,
  }))

  return (
    <TimelineSection
      phases={phases}
      slideId="roadmap-2"
      sectionLabel="09 / Feuille de route (suite)"
      sectionTitle="Optimisation et croissance"
      sectionSubtitle="Une fois les fondations en place, on optimise le SEO, on lance le nouveau site et on entre dans une phase d'amélioration continue."
    />
  )
}
