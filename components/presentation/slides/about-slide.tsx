import { SlideWrapper } from "../slide-wrapper"
import { Code, Zap, Shield } from "lucide-react"

const PILLARS = [
  {
    icon: Code,
    title: "Développement sur mesure",
    description:
      "Une plateforme construite spécifiquement pour vos besoins — pas une solution générique avec des compromis.",
  },
  {
    icon: Zap,
    title: "Livraison accélérée par l'IA",
    description:
      "Notre utilisation de l'IA dans le développement nous permet de livrer plus vite à un tarif 35% plus compétitif.",
  },
  {
    icon: Shield,
    title: "Conformité dès la conception",
    description:
      "Architecture pensée pour les exigences réglementaires canadiennes : Loi 25, FINTRAC, données hébergées au Canada.",
  },
]

export function AboutSlide() {
  return (
    <SlideWrapper id="about-us" className="bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#0035FF] font-sans font-medium">
            01 / Notre approche
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white max-w-2xl leading-tight text-balance">
            Un partenaire technique de confiance
          </h2>
          <div className="w-16 h-px bg-[#0035FF]" />
          <p className="text-base md:text-lg text-white/60 font-sans max-w-2xl leading-relaxed">
            TechGuys accompagne les entreprises québécoises dans leur transformation numérique.
            Nous combinons expertise technique et compréhension des enjeux d{"'"}affaires pour livrer
            des solutions qui génèrent des résultats concrets.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#0035FF]/30 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#0035FF]/0 via-[#0035FF]/20 to-[#0035FF]/0 group-hover:via-[#0035FF]/50 transition-all duration-500" />

              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#0035FF]/10 border border-[#0035FF]/20 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-[#0035FF]" />
                </div>
                <h3 className="font-serif text-xl text-white">{pillar.title}</h3>
                <p className="text-sm text-white/50 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 p-6 rounded-xl border border-white/10 bg-white/[0.02]">
          <p className="text-sm text-white/50 font-sans leading-relaxed text-center">
            Nous avons analysé en profondeur les <span className="text-[#0035FF] font-medium">dimensions techniques</span>,{" "}
            <span className="text-[#0035FF] font-medium">réglementaires</span>,{" "}
            <span className="text-[#3B82F6] font-medium">financières</span> et{" "}
            <span className="text-[#0035FF] font-medium">organisationnelles</span> de votre projet afin de vous proposer
            une solution adaptée à vos besoins réels.
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
