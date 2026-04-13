import { SlideWrapper } from "../slide-wrapper"
import { Check, DollarSign, Clock, Zap } from "lucide-react"

const INCLUSIONS = [
  "Analyse des flux actuels",
  "Configuration de l'IA",
  "Intégration multi-succursales",
  "Tests et validation",
  "Formation de l'équipe",
  "Documentation complète",
]

export function PricingSlide() {
  return (
    <SlideWrapper id="pricing" className="bg-white">
      <div className="max-w-5xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-[#1B365D] font-sans font-medium">
            05 / Tarification
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1B365D] max-w-3xl leading-tight text-balance">
            Votre investissement
          </h2>
          <div className="w-16 h-px bg-[#1B365D]" />
          <p className="text-base text-[#64748b] font-sans max-w-2xl leading-relaxed">
            Un projet clé en main pour automatiser la gestion de vos courriels entrants
            et optimiser la distribution vers vos succursales.
          </p>
        </div>

        {/* Main pricing card */}
        <div className="relative p-8 md:p-10 rounded-2xl border-2 border-[#1B365D]/20 bg-gradient-to-br from-[#1B365D]/5 to-white shadow-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left side - Project details */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1B365D] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#1B365D]">Automatisation des courriels</h3>
                  <p className="text-sm text-[#64748b] font-sans">Projet clé en main</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B365D]/10">
                  <Clock className="w-4 h-4 text-[#1B365D]" />
                  <span className="text-sm text-[#1B365D] font-sans font-medium">12 heures estimées</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B365D]/10">
                  <Calendar className="w-4 h-4 text-[#1B365D]" />
                  <span className="text-sm text-[#1B365D] font-sans font-medium">2-3 semaines</span>
                </div>
              </div>
            </div>

            {/* Right side - Price */}
            <div className="flex flex-col items-center md:items-end gap-1">
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-6xl md:text-7xl text-[#1B365D] font-medium">1 800</span>
                <span className="font-serif text-3xl text-[#1B365D]">$</span>
              </div>
              <span className="text-sm text-[#64748b] font-sans">+ taxes applicables</span>
              <span className="text-xs text-[#94a3b8] font-sans mt-1">150$/h x 12h</span>
            </div>
          </div>
        </div>

        {/* Inclusions */}
        <div className="p-6 rounded-xl border border-[#e5e7eb] bg-[#f8fafc] shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#1B365D]" />
              <h3 className="font-serif text-lg text-[#1B365D]">
                Inclus dans le projet
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {INCLUSIONS.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4E800] shrink-0" />
                  <span className="text-sm text-[#64748b] font-sans">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </SlideWrapper>
  )
}
