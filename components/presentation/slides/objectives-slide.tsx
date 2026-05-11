import { SlideWrapper } from "../slide-wrapper"
import { MessageSquare, Navigation, Bot, Shield } from "lucide-react"

const FEATURES = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Widget de chat intelligent",
    description:
      "Un bouton flottant présent sur toutes les pages, qui ouvre un panneau de conversation élégant et responsive. Le visiteur interagit via des chips cliquables ou en langage naturel.",
    benefit: "Expérience utilisateur premium qui guide le visiteur sans friction vers le bon service Safex.",
    specs: [
      "Bouton flottant bottom-right, cercle 56px, orange Safex",
      "Panel responsive : bottom-sheet mobile, side-panel 380px desktop",
      "Streaming natif (réponse lettre par lettre)",
      "Widget 100% lazy-loaded — zéro impact PageSpeed",
    ],
  },
  {
    icon: Navigation,
    number: "02",
    title: "Flow de qualification structuré",
    description:
      "Trois questions avec chips cliquables pour qualifier rapidement le visiteur : type de cargo, destination, urgence. En moins de 60 secondes, l'agent route vers la bonne page service.",
    benefit: "Conversion optimisée : chaque visiteur trouve le bon service sans chercher dans le menu.",
    specs: [
      "Q1 : Qu'est-ce qui vous amène ? (Fret général, Reefer, Heavy Haul, 3PL, Chauffeur)",
      "Q2 : Où va la marchandise ? (Canada, Canada ↔ USA, Pas décidé)",
      "Q3 : Quand en avez-vous besoin ? (Urgent, Cette semaine, Flexible)",
      "Matrice de décision → routing vers la page service appropriée",
    ],
  },
  {
    icon: Bot,
    number: "03",
    title: "LLM Groq + Llama 3.3 70B",
    description:
      "Un vrai modèle de langage — pas un chatbot à règles. L'agent comprend le jargon B2B transport nativement (BOL, lane, spot quote, OTD) et répond en bilingue EN/FR.",
    benefit: "Crédibilité auprès des professionnels du transport — l'agent parle leur langage.",
    specs: [
      "Groq : ~500 tokens/sec, réponses quasi-instantanées",
      "System prompt dynamique adapté à la page courante",
      "Bilingue natif EN/FR, détection automatique",
      "Coût LLM estimé : < 3$ USD/mois au trafic actuel",
    ],
  },
  {
    icon: Shield,
    number: "04",
    title: "Garde-fous et conformité",
    description:
      "L'agent est configuré avec des garde-fous stricts : pas de tarifs inventés, pas de commentaires RH, pas de données sensibles. Analytics sans PII pour conformité Loi 25.",
    benefit: "Protection de l'image Safex — aucun risque de déclaration inappropriée.",
    specs: [
      "Interdiction de mentionner tarifs, délais garantis, flotte",
      "Aucune conversation stockée côté serveur",
      "Seuls les chemins de navigation anonymisés sont loggés",
      "Fallback \"Talk to a human\" différencié par département",
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
            Agent IA de navigation
          </h2>
          <div className="w-16 h-px bg-[#ff7000]" />
          <p className="text-base text-[#64748b] font-sans max-w-2xl leading-relaxed">
            Un widget de chat flottant, présent sur toutes les pages du site vitrine, qui guide chaque visiteur vers le bon service Safex via un flow de qualification intelligent.
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
                  <p className="text-sm text-[#0f172a]/80 font-sans leading-relaxed">
                    {feature.benefit}
                  </p>
                </div>

                {/* Right: Specs */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#ff7000] font-sans mb-2 block font-medium">
                      Spécifications
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {feature.specs.map((spec) => (
                        <div key={spec} className="flex items-start gap-2">
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
