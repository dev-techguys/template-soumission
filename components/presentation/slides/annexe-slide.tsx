"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Check, Zap, Globe, ShoppingCart, Bot, BarChart3, Megaphone, Search, Users, AlertTriangle } from "lucide-react"

const SERVICES = [
  {
    id: "strategie",
    icon: Zap,
    title: "Structure strategique",
    description: "Aligner les initiatives en cours sur les actions ayant le plus fort levier pour l'entreprise.",
    items: [
      "Definition des priorites mensuelles et des actions a concentrer",
      "Strategie de repartition des ressources pour des resultats optimaux",
      "Soutien a la prise de decision rapide selon l'effort et l'impact",
      "Traduction des idees en actions concretes et testables",
      "Structuration d'une feuille de route agile, evolutive chaque mois",
    ],
  },
  {
    id: "presence",
    icon: Globe,
    title: "Optimisation de la presence numerique",
    description: "Evolution rapide des plateformes web pour soutenir la croissance.",
    items: [
      "Optimisation de sites web existants",
      "Creation de landing pages orientees conversion",
      "Ajustements UX/UI bases sur les donnees reelles",
      "Deploiement rapide de nouvelles pages/offres (sans refonte majeure)",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce & retention client",
    description: "Transformer les ventes ponctuelles en revenus recurrents.",
    items: [
      "Amelioration du tunnel de conversion E-commerce",
      "Mise en place d'offres recurrentes : abonnements, bundles, avantages",
      "Optimisation d'applications et de fonctionnalites de boutiques en ligne",
      "Tests de parcours favorisant la fidelisation et la recurrence",
    ],
  },
  {
    id: "automatisation",
    icon: Bot,
    title: "Automatisation & intelligence artificielle",
    description: "Accelerer l'execution grace a des processus automatises et intelligents.",
    items: [
      "Automatisation de processus marketing (emails, relances, onboarding)",
      "Automatisation interne (suivis, alertes, organisation)",
      "Utilisation d'outils IA pour accelerer l'execution",
      "Simplification de taches repetitives",
    ],
  },
  {
    id: "analyse",
    icon: BarChart3,
    title: "Outils d'analyse de donnees",
    description: "Infrastructure technologique essentielle a la collecte et le suivi des performances.",
    items: [
      "Configuration des outils d'analyse des performances du site web",
      "Configuration des outils d'analyse des performances publicitaires",
      "Integration des plateformes publicitaires et systemes de conversion",
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing digital (referencement payant)",
    description: "Generer du trafic qualifie, des leads et des ventes avec un cout d'acquisition maitrise.",
    note: "La recherche, preparation marketing et plan de campagnes sont offerts gratuitement avec tout engagement d'un minimum de 3 mois",
    items: [
      "Recherche et preparation marketing (analyses, persona, mots-cles, etc.)",
      "Plan de campagnes (audiences, offres, messages et budgets publicitaires)",
      "Creation et deploiement de campagnes Google Ads & Meta Ads",
      "Optimisation continue des performances publicitaires",
      "Suivi et analyse de donnees mensuelle des performances",
      "Production de rapports de performance qualitatif et quantitatif",
      "Vulgarisation des donnees et suggestions d'actions concretes",
      "Tests et ajustement des campagnes pour ameliorer le ROI",
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO (referencement naturel)",
    description: "Developper une croissance organique durable et renforcer la visibilite sur le long terme.",
    items: [
      "Analyse SEO complete (On-site, Off-site, technique)",
      "Optimisation technique des pages existantes",
      "Structuration de l'architecture des pages web",
      "Recherche de mots-cles et amelioration de la redaction web",
      "SEO local : amelioration de la visibilite locale",
      "Articles de blog optimises pour le referencement",
      "Autorite et backlinks (liens internes et externes)",
      "Optimisation pour les moteurs generatifs et l'IA (ChatGPT, Gemini, etc.)",
    ],
  },
  {
    id: "terrain",
    icon: Users,
    title: "Support aux initiatives de terrain & hybrides",
    description: "Connecter les initiatives physiques et evenementielles a l'ecosysteme numerique et aux ventes.",
    items: [
      "Amelioration de la fluidite du parcours client omnicanal",
      "Creation de pages dediees pour evenements ou activations",
      "Analyse de la performance des initiatives hors ligne",
      "Interconnexion et automatisation entre les points physiques et numeriques",
    ],
  },
]

export function AnnexeSlide() {
  return (
    <SlideWrapper id="annexe" className="bg-[#f7f7f7] !min-h-0">
      <div className="max-w-5xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
            Annexe
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-4xl leading-tight text-balance">
            {"Ensemble des services disponibles avec la banque d'heures"}
          </h2>
          <div className="w-16 h-px bg-[#387B84]" />
          <p className="text-sm md:text-base text-[#6b7280] font-sans leading-relaxed max-w-3xl">
            {"La banque d'heures donne acces a un ensemble de services integres combinant strategie, technologie, marketing et ventes. La feuille de route proposee demeure flexible : certains services pourront etre ajoutes, remplaces ou priorises differemment au fil du mandat, selon l'evolution de vos besoins et des opportunites d'affaires."}
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
                <AccordionTrigger className="py-6 hover:no-underline gap-4 [&>svg]:text-[#387B84] [&>svg]:w-5 [&>svg]:h-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#387B84]/10 border border-[#387B84]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#387B84]" />
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                      <span className="font-serif text-lg md:text-xl text-[#2d3748]">
                        <span className="text-[#387B84] mr-2 font-sans text-sm">{String(index + 1).padStart(2, "0")}</span>
                        {service.title}
                      </span>
                      <span className="text-sm text-[#6b7280] font-sans leading-relaxed hidden md:block">
                        {service.description}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  {/* Description on mobile */}
                  <p className="text-sm text-[#6b7280] font-sans leading-relaxed mb-5 md:hidden">
                    {service.description}
                  </p>

                  <div className="w-full h-px bg-[#e5e7eb] mb-5" />

                  {/* Service items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pl-0 md:pl-14">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#387B84] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#4b5563] font-sans leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Note if present */}
                  {service.note && (
                    <div className="flex items-start gap-2 mt-4 pl-0 md:pl-14">
                      <span className="text-[10px] tracking-[0.1em] uppercase text-[#387B84]/70 font-sans leading-relaxed">
                        * {service.note}
                      </span>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            )
          })}

          {/* Hors perimetre - always visible */}
          <div className="px-6 md:px-8 py-6 rounded-xl border border-[#e5e7eb] bg-white flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#6b7280]/10 border border-[#6b7280]/20 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-[#6b7280]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-lg md:text-xl text-[#2d3748]">
                {"Hors perimetre \u2013 projets speciaux"}
              </h3>
              <p className="text-sm text-[#6b7280] font-sans leading-relaxed">
                {"Les projets majeurs ne sont pas inclus dans la banque d'heures et feront l'objet d'une evaluation distincte (ex. refonte complete, developpement lourd, nouvelle plateforme independante, systeme CRM, etc.)"}
              </p>
            </div>
          </div>
        </Accordion>
      </div>
    </SlideWrapper>
  )
}
