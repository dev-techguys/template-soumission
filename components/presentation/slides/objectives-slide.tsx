"use client"

import { SlideWrapper } from "../slide-wrapper"
import { MessageSquare, Navigation, BarChart3, Blocks } from "lucide-react"

const FEATURES = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Widget de chat intelligent",
    description:
      "Un bouton flottant present sur toutes les pages, qui ouvre un panneau de conversation elegant et responsive. Le visiteur interagit via des chips cliquables ou en langage naturel avec un vrai LLM (Groq + Llama 3.3 70B).",
    benefit: "Experience utilisateur premium qui guide le visiteur sans friction vers le bon service Safex.",
    specs: [
      "Bouton flottant bottom-right, cercle 56px, orange Safex",
      "Panel responsive : bottom-sheet mobile, side-panel 380px desktop",
      "Streaming natif (reponse lettre par lettre)",
      "Widget 100% lazy-loaded — zero impact PageSpeed",
      "Bilingue EN/FR, detection automatique",
    ],
  },
  {
    icon: Navigation,
    number: "02",
    title: "Flow de qualification structure",
    description:
      "Trois questions avec chips cliquables pour qualifier rapidement le visiteur : type de cargo, destination, urgence. En moins de 60 secondes, l'agent route vers la bonne page service ou le formulaire de devis.",
    benefit: "Conversion optimisee : chaque visiteur trouve le bon service sans chercher dans le menu.",
    specs: [
      "Q1 : Qu'est-ce qui vous amene ? (Fret general, Reefer, Heavy Haul, 3PL, Chauffeur)",
      "Q2 : Ou va la marchandise ? (Canada, Canada - USA, Pas decide)",
      "Q3 : Quand en avez-vous besoin ? (Urgent, Cette semaine, Flexible)",
      "Matrice de decision vers la page service appropriee",
      "Fallback \"Talk to a human\" differencie par departement",
    ],
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Analytics sans PII + Dashboard admin",
    description:
      "Les chemins de navigation anonymises sont logges en temps reel dans Supabase. Un dashboard protege /admin/agent-stats donne a Pierre une vue complete des conversations, du funnel de conversion et des services les plus demandes.",
    benefit: "Donnees actionables pour optimiser le parcours — conformite Loi 25 garantie.",
    specs: [
      "Aucune conversation stockee — seuls les chemins chips sont logges",
      "Metrics : conversations, taux vers devis, repartition EN/FR",
      "Top services demandes avec barres visuelles",
      "Option B : funnel avance, leads captures, exports",
      "Dashboard protege par ADMIN_SECRET",
    ],
  },
  {
    icon: Blocks,
    number: "04",
    title: "Scalable et extensible",
    description:
      "Architecture modulaire concue pour evoluer : emails automatises vers les sales, integration dans le systeme de vente, interactions intra-site et extra-site avec les outils Safex, API ouverte pour connecter d'autres systemes.",
    benefit: "Un investissement perenne qui supporte la croissance vers 5 bureaux sans refonte.",
    specs: [
      "Option B : Notification email automatique vers sales/dispatch/HR",
      "Option B : Pre-remplissage du formulaire de devis via URL params",
      "Option B : Trigger proactif (30s sur page service, 60% scroll home)",
      "Option B : Persistance de session inter-pages",
      "Architecture extensible : webhooks, API, integrations futures",
    ],
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
                  <p className="text-sm text-[#0f172a]/80 font-sans leading-relaxed font-medium">
                    {feature.benefit}
                  </p>
                </div>

                {/* Right: Specs */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#ff7000] font-sans mb-2 block font-medium">
                      Specifications
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {feature.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff7000] mt-1.5 shrink-0" />
                          <span className="text-xs text-[#0f172a]/80 font-sans leading-relaxed">{spec}</span>
                        </div>
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
