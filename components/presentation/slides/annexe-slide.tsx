"use client"

import { SlideWrapper } from "../slide-wrapper"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Check,
  Zap,
  Globe,
  ShoppingCart,
  Bot,
  BarChart3,
  Megaphone,
  Search,
  Users,
  AlertTriangle,
} from "lucide-react"

const SERVICES = [
  {
    id: "strategie",
    icon: Zap,
    title: "Structure stratégique",
    description:
      "Aligner les initiatives en cours sur les actions ayant le plus fort levier pour l'entreprise.",
    items: [
      "Définition des priorités mensuelles et des actions à concentrer",
      "Stratégie de répartition des ressources pour des résultats optimaux",
      "Soutien à la prise de décision rapide selon l'effort et l'impact",
      "Traduction des idées en actions concrètes et testables",
      "Structuration d'une feuille de route agile, évolutive chaque mois",
    ],
  },
  {
    id: "presence",
    icon: Globe,
    title: "Optimisation de la présence numérique",
    description: "Évolution rapide des plateformes web pour soutenir la croissance.",
    items: [
      "Optimisation de sites web existants",
      "Création de landing pages orientées conversion",
      "Ajustements UX/UI basés sur les données réelles",
      "Déploiement rapide de nouvelles pages/offres (sans refonte majeure)",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce & rétention client",
    description: "Transformer les ventes ponctuelles en revenus récurrents.",
    items: [
      "Amélioration du tunnel de conversion E-commerce",
      "Mise en place d'offres récurrentes : abonnements, bundles, avantages",
      "Optimisation d'applications et de fonctionnalités de boutiques en ligne",
      "Tests de parcours favorisant la fidélisation et la récurrence",
    ],
  },
  {
    id: "automatisation",
    icon: Bot,
    title: "Automatisation & intelligence artificielle",
    description:
      "Accélérer l'exécution grâce à des processus automatisés et intelligents.",
    items: [
      "Automatisation de processus marketing (emails, relances, onboarding)",
      "Automatisation interne (suivis, alertes, organisation)",
      "Utilisation d'outils IA pour accélérer l'exécution",
      "Simplification de tâches répétitives",
    ],
  },
  {
    id: "analyse",
    icon: BarChart3,
    title: "Outils d'analyse de données",
    description:
      "Infrastructure technologique essentielle à la collecte et le suivi des performances.",
    items: [
      "Configuration des outils d'analyse des performances du site web",
      "Configuration des outils d'analyse des performances publicitaires",
      "Intégration des plateformes publicitaires et systèmes de conversion",
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing digital (référencement payant)",
    description:
      "Générer du trafic qualifié, des leads et des ventes avec un coût d'acquisition maîtrisé.",
    note: "La recherche, préparation marketing et plan de campagnes sont offerts gratuitement avec tout engagement d'un minimum de 3 mois",
    items: [
      "Recherche et préparation marketing (analyses, persona, mots-clés, etc.)",
      "Plan de campagnes (audiences, offres, messages et budgets publicitaires)",
      "Création et déploiement de campagnes Google Ads & Meta Ads",
      "Optimisation continue des performances publicitaires",
      "Suivi et analyse de données mensuelle des performances",
      "Production de rapports de performance qualitatif et quantitatif",
      "Vulgarisation des données et suggestions d'actions concrètes",
      "Tests et ajustement des campagnes pour améliorer le ROI",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO (référencement naturel)",
    description:
      "Développer une croissance organique durable et renforcer la visibilité sur le long terme.",
    items: [
      "Analyse SEO complète (On-site, Off-site, technique)",
      "Optimisation technique des pages existantes",
      "Structuration de l'architecture des pages web",
      "Recherche de mots-clés et amélioration de la rédaction web",
      "SEO local : amélioration de la visibilité locale",
      "Articles de blog optimisés pour le référencement",
      "Autorité et backlinks (liens internes et externes)",
      "Optimisation pour les moteurs génératifs et l'IA (ChatGPT, Gemini, etc.)",
    ],
  },
  {
    id: "terrain",
    icon: Users,
    title: "Support aux initiatives de terrain & hybrides",
    description:
      "Connecter les initiatives physiques et événementielles à l'écosystème numérique et aux ventes.",
    items: [
      "Amélioration de la fluidité du parcours client omnicanal",
      "Création de pages dédiées pour événements ou activations",
      "Analyse de la performance des initiatives hors ligne",
      "Interconnexion et automatisation entre les points physiques et numériques",
    ],
  },
]

export function AnnexeSlide() {
  return (
    <SlideWrapper id="annexe" className="bg-[#f8fafc] !min-h-0">
      <div className="max-w-5xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#1B365D] font-sans font-medium">
            Annexe
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1B365D] max-w-4xl leading-tight text-balance">
            {"Ensemble des services disponibles avec la banque d'heures"}
          </h2>
          <div className="w-16 h-px bg-[#1B365D]" />
          <p className="text-sm md:text-base text-[#64748b] font-sans leading-relaxed max-w-3xl">
            La banque d{"'"}heures donne accès à un ensemble de services intégrés combinant
            stratégie, technologie, marketing et ventes. La feuille de route proposée demeure
            flexible : certains services pourront être ajoutés, remplacés ou priorisés différemment
            au fil du mandat, selon l{"'"}évolution de vos besoins et des opportunités d{"'"}affaires.
          </p>
        </div>

        {/* Accordion services */}
        <Accordion type="multiple" className="flex flex-col gap-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <AccordionItem
                key={service.id}
                value={service.id}
                className="border-0 rounded-xl border border-[#e5e7eb] bg-white overflow-hidden px-6 md:px-8 shadow-sm"
              >
                <AccordionTrigger className="py-6 hover:no-underline gap-4 [&>svg]:text-[#1B365D] [&>svg]:w-5 [&>svg]:h-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1B365D]/10 border border-[#1B365D]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#1B365D]" />
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                      <span className="font-serif text-lg md:text-xl text-[#1B365D]">
                        <span className="text-[#1B365D] mr-2 font-sans text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {service.title}
                      </span>
                      <span className="text-sm text-[#64748b] font-sans leading-relaxed hidden md:block">
                        {service.description}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  {/* Description on mobile */}
                  <p className="text-sm text-[#64748b] font-sans leading-relaxed mb-5 md:hidden">
                    {service.description}
                  </p>

                  <div className="w-full h-px bg-[#e5e7eb] mb-5" />

                  {/* Service items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pl-0 md:pl-14">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#1B365D] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#4b5563] font-sans leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Note if present */}
                  {service.note && (
                    <div className="flex items-start gap-2 mt-4 pl-0 md:pl-14">
                      <span className="text-[10px] tracking-[0.1em] uppercase text-[#1B365D]/70 font-sans leading-relaxed">
                        * {service.note}
                      </span>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            )
          })}

          {/* Hors périmètre - always visible */}
          <div className="px-6 md:px-8 py-6 rounded-xl border border-[#e5e7eb] bg-white flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#64748b]/10 border border-[#64748b]/20 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-[#64748b]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-lg md:text-xl text-[#1B365D]">
                Hors périmètre — projets spéciaux
              </h3>
              <p className="text-sm text-[#64748b] font-sans leading-relaxed">
                Les projets majeurs ne sont pas inclus dans la banque d{"'"}heures et feront l{"'"}objet
                d{"'"}une évaluation distincte (ex. refonte complète, développement lourd, nouvelle
                plateforme indépendante, système CRM, etc.)
              </p>
            </div>
          </div>
        </Accordion>
      </div>
    </SlideWrapper>
  )
}
