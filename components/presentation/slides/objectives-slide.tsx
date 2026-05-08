import { SlideWrapper } from "../slide-wrapper"
import { Search, MousePointerClick, Target, Bot } from "lucide-react"

const OBJECTIVES = [
  {
    icon: Search,
    number: "01",
    title: "Visibilité organique sous-exploitée",
    description:
      "Omnigo génère l'essentiel de ses leads via le bouche-à-oreille et les références, mais son SEO propre est limité — la marque n'apparaît pas sur les requêtes que ses propres clients recherchent.",
    goal: "Devenir la référence organique «agence marketing Montréal / Québec» et capter des dizaines de leads qualifiés qui vont aujourd'hui chez des concurrents.",
    kpis: ["+25% trafic organique", "Top 3 requêtes cibles", "DA & backlinks"],
    actions: [
      "Audit SEO complet (technique, on-page, off-page)",
      "Optimisation des pages stratégiques",
      "Création d'articles de blogue à fort potentiel",
      "Stratégie de backlinks ciblée",
    ],
  },
  {
    icon: MousePointerClick,
    number: "02",
    title: "Conversion site web insuffisante",
    description:
      "Le trafic existant ne se convertit pas assez en rendez-vous qualifiés. Pas de A/B testing, pas de heat mapping, parcours de conversion non optimisé.",
    goal: "Doubler le taux de conversion sans augmenter le budget publicitaire — chaque visiteur non converti est une dépense marketing perdue.",
    kpis: ["×2 taux de conversion", "CPA -30%", "Sessions → RDV"],
    actions: [
      "Audit du parcours de conversion actuel",
      "Création de landing pages dédiées par service",
      "A/B testing sur les CTAs et formulaires",
      "Heat mapping et analyse comportementale",
    ],
  },
  {
    icon: Target,
    number: "03",
    title: "Acquisition payante à optimiser",
    description:
      "Les campagnes Google Ads et Meta Ads ne sont pas structurées pour maximiser le ROAS sur les services à haute valeur (développement, ventes).",
    goal: "Réduire le CPL de 30-40% en segmentant mieux les audiences et en concentrant le budget sur les mandats premium.",
    kpis: ["CPL -30 à -40%", "ROAS +50%", "Leads qualifiés"],
    actions: [
      "Restructuration des campagnes Google Ads",
      "Segmentation avancée des audiences Meta",
      "Création d'annonces par segment de service",
      "Optimisation continue du budget par canal",
    ],
  },
  {
    icon: Bot,
    number: "04",
    title: "Automatisation interne limitée",
    description:
      "Les processus de suivi des prospects, de qualification et de nurturing sont manuels, créant une dépendance aux individus.",
    goal: "Libérer 5-10h/semaine par représentant avec un CRM automatisé — moins de temps sur l'admin, plus de temps sur les clients.",
    kpis: ["-60% temps prospection", "×3 RDV cédulés", "0 lead perdu"],
    actions: [
      "Setup CRM avec pipeline de vente automatisé",
      "Séquences d'email nurturing",
      "Automatisation du suivi des leads entrants",
      "Formation de l'équipe aux nouveaux outils",
    ],
  },
]

export function ObjectivesSlide() {
  return (
    <SlideWrapper id="objectives" className="bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#0DA5B5] font-sans font-medium">
            04 / Problématiques
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#111827] max-w-3xl leading-tight text-balance">
            Les freins à votre croissance
          </h2>
          <div className="w-16 h-px bg-[#0DA5B5]" />
          <p className="text-base text-[#6B7280] font-sans max-w-2xl leading-relaxed">
            Chaque problématique identifiée représente une opportunité de croissance directe. Voici ce que nous allons corriger ensemble.
          </p>
        </div>

        {/* Objectives */}
        <div className="flex flex-col gap-8">
          {OBJECTIVES.map((obj) => (
            <div
              key={obj.number}
              className="group relative p-8 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#0DA5B5]/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#0DA5B5]/30 via-[#0DA5B5]/10 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Number */}
                <div className="lg:col-span-1 flex items-start gap-4">
                  <span className="font-serif text-4xl text-[#0DA5B5]/30">{obj.number}</span>
                </div>

                {/* Middle: Content */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0DA5B5]/10 flex items-center justify-center">
                      <obj.icon className="w-4 h-4 text-[#0DA5B5]" />
                    </div>
                    <h3 className="font-serif text-xl text-[#111827]">{obj.title}</h3>
                  </div>
                  <p className="text-sm text-[#6B7280] font-sans leading-relaxed">
                    {obj.description}
                  </p>
                  <p className="text-sm text-[#111827]/80 font-sans leading-relaxed">
                    {obj.goal}
                  </p>
                </div>

                {/* Right: Actions + KPIs */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#0DA5B5] font-sans mb-2 block font-medium">
                      Actions clés
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {obj.actions.map((action) => (
                        <div key={action} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0DA5B5] mt-1.5 shrink-0" />
                          <span className="text-xs text-[#111827]/80 font-sans leading-relaxed">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#6B7280] font-sans mb-2 block">
                      KPI{"'"}s clés
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {obj.kpis.map((kpi) => (
                        <span
                          key={kpi}
                          className="px-2.5 py-1 rounded-full border border-[#e5e7eb] text-[10px] text-[#6B7280] font-sans bg-[#f7f7f7]"
                        >
                          {kpi}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
