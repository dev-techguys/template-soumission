"use client"

import { SlideWrapper } from "../slide-wrapper"
import { MessageSquare, Navigation, BarChart3, Blocks } from "lucide-react"

const FEATURES = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Widget de chat intelligent",
    description:
      "Un bouton flottant present sur toutes les pages, qui ouvre un panneau de conversation elegant et responsive. Le visiteur interagit via des chips cliquables ou en langage naturel avec un LLM performant.",
    problemsLabel: "Problemes resolus",
    problems: [
      "Visiteurs qui quittent le site sans trouver le bon service",
      "Navigation complexe dans un catalogue de services varie",
      "Manque d'engagement sur les pages — taux de rebond eleve",
      "Pas de premier point de contact accessible 24/7",
      "Experience utilisateur impersonnelle et generique",
    ],
  },
  {
    icon: Navigation,
    number: "02",
    title: "Flow de qualification structure",
    description:
      "Trois questions avec chips cliquables pour qualifier rapidement le visiteur : type de cargo, destination, urgence. En moins de 60 secondes, l'agent route vers la bonne page service ou le formulaire de devis.",
    problemsLabel: "Problemes resolus",
    problems: [
      "Formulaires de contact non qualifies qui surchargent l'equipe",
      "Leads froids qui n'ont pas ete pre-qualifies avant contact",
      "Temps perdu par les commerciaux sur des demandes hors cible",
      "Prospects perdus car ils ne trouvent pas le service adapte",
      "Manque de donnees sur les intentions des visiteurs",
    ],
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Analytics sans PII + Dashboard admin",
    description:
      "Les chemins de navigation anonymises sont logges en temps reel. Un dashboard protege /admin/agent-stats donne une vue complete des conversations, du funnel de conversion et des services les plus demandes.",
    problemsLabel: "Problemes resolus",
    problems: [
      "Aucune visibilite sur le comportement des visiteurs",
      "Decisions business basees sur des intuitions, pas des donnees",
      "Conformite Loi 25 difficile avec les outils analytics classiques",
      "Impossible d'identifier les services les plus recherches",
      "Pas de metriques pour optimiser le parcours de conversion",
    ],
  },
  {
    icon: Blocks,
    number: "04",
    title: "Scalable et extensible",
    description:
      "Architecture modulaire concue pour evoluer : emails automatises vers les sales, integration dans le systeme de vente, interactions intra-site et extra-site avec les outils Safex, API ouverte pour connecter d'autres systemes.",
    problemsLabel: "Problemes resolus",
    problems: [
      "Solutions SaaS avec couts qui explosent selon le volume",
      "Dependance a un fournisseur externe pour une fonction critique",
      "Limites de scaling strictes (tokens/mois, conversations/jour)",
      "Architecture fermee qui empeche les integrations futures",
      "Pas de propriete des donnees ni du modele IA",
    ],
  },
]

const OPTION_B_EXTRAS = [
  {
    title: "Modele GPT de meilleure qualite",
    description: "Option B utilise GPT-4o au lieu de Llama 3.3, offrant des reponses plus nuancees, une meilleure comprehension du contexte metier, et une conversation plus naturelle.",
  },
  {
    title: "Apprentissage continu",
    description: "L'agent construit son contexte au fur et a mesure des interactions. Il devient plus precis et pertinent avec le temps, ameliorant continuellement le parcours de conversion.",
  },
]

export function ObjectivesSlide() {
  return (
    <SlideWrapper id="objectives" className="bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
            03 / La feature
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
            Les 4 piliers de l&apos;agent
          </h2>
          <div className="w-16 h-px bg-[#ff7000]" />
          <p className="text-base text-[#64748b] font-sans max-w-2xl leading-relaxed">
            Un widget de chat flottant, present sur toutes les pages du site vitrine, qui guide chaque visiteur vers le bon service Safex via un flow de qualification intelligent.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.number}
              className="group relative p-8 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#ff7000]/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#ff7000]/30 via-[#ff7000]/10 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Number */}
                <div className="lg:col-span-1 flex items-start gap-4">
                  <span className="font-serif text-4xl text-[#ff7000]/30">{feature.number}</span>
                </div>

                {/* Middle: Content */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ff7000]/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-[#ff7000]" />
                    </div>
                    <h3 className="font-serif text-xl text-[#0f172a]">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-[#64748b] font-sans leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Right: Problems solved */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#10B981] font-sans mb-2 block font-medium">
                      {feature.problemsLabel}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {feature.problems.map((problem, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                          <span className="text-xs text-[#0f172a]/80 font-sans leading-relaxed">{problem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Option B extras */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30">
              <span className="text-xs font-medium text-[#10B981] uppercase tracking-wider">Option B uniquement</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPTION_B_EXTRAS.map((extra, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#10B981]/30 bg-[#10B981]/5">
                <h4 className="font-serif text-lg text-[#0f172a] mb-2">{extra.title}</h4>
                <p className="text-sm text-[#64748b] font-sans leading-relaxed">{extra.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
