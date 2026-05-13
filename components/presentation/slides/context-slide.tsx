import { SlideWrapper } from "../slide-wrapper"
import { Car, Building2, CreditCard, TrendingUp } from "lucide-react"
import { client } from "@/lib/proposal-data"

const FACTS = [
  {
    icon: Car,
    label: "Secteur",
    value: "Auto",
    detail: "Réseau de concessions",
  },
  {
    icon: Building2,
    label: "Concessions",
    value: "5",
    detail: "4 Chrysler + 1 Kia",
  },
  {
    icon: CreditCard,
    label: "Objectif",
    value: "Financement",
    detail: "Plateforme propriétaire",
  },
  {
    icon: TrendingUp,
    label: "Bénéfice",
    value: "1-3%",
    detail: "Marge récupérée",
  },
]

export function ContextSlide() {
  return (
    <SlideWrapper id="context" className="bg-[#111111]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#0035FF] font-sans font-medium">
            02 / Contexte
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white max-w-2xl leading-tight text-balance">
            Le projet AutoFinance
          </h2>
          <p className="text-base text-white/50 font-sans leading-relaxed max-w-2xl">
            Une transformation numérique stratégique pour <span className="text-[#0035FF] font-medium">internaliser le processus de financement automobile</span> et reprendre le contrôle de la relation client.
          </p>
          <div className="w-16 h-px bg-[#0035FF]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <div className="flex flex-col gap-8">
            <p className="text-base text-white/50 font-sans leading-relaxed">
              <span className="text-white font-medium">{client.name}</span> opère un réseau de concessions automobiles au Québec et agit actuellement comme intermédiaire en soumettant les demandes de financement de ses clients à des institutions tierces (banques, captives, etc.).
            </p>

            <p className="text-base text-white/50 font-sans leading-relaxed">
              Ce modèle entraîne une <span className="text-white font-medium">perte de contrôle sur le processus d{"'"}approbation</span>, des délais non maîtrisés, et une cession de la relation client à l{"'"}institution financière.
            </p>

            <div className="p-5 rounded-xl border border-[#0035FF]/20 bg-[#0035FF]/5">
              <p className="text-sm text-[#3B82F6] font-sans leading-relaxed">
                La plateforme AutoFinance permettra d{"'"}internaliser la marge d{"'"}intermédiation financière (typiquement 1% à 3% du montant financé), d{"'"}accélérer les approbations et de constituer un portefeuille de prêts propriétaire.
              </p>
            </div>
          </div>

          {/* Right: Key facts */}
          <div className="grid grid-cols-2 gap-4">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0035FF]/10 border border-[#0035FF]/20 flex items-center justify-center">
                  <fact.icon className="w-4 h-4 text-[#0035FF]" />
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-sans">
                  {fact.label}
                </span>
                <span className="font-serif text-2xl text-white">{fact.value}</span>
                <span className="text-xs text-white/40 font-sans">{fact.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fonctions clés */}
        <div className="mt-12 flex flex-wrap gap-3">
          {["Gestion KYC", "Cycle de vie des prêts", "Calcul automatique", "Collecte PAD", "Tableau de bord", "Portail concessionnaire", "Rapports réglementaires"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full border border-white/10 text-xs tracking-[0.1em] uppercase text-white/50 font-sans bg-white/[0.02]"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </SlideWrapper>
  )
}
