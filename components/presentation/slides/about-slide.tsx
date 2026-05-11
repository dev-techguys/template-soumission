import { SlideWrapper } from "../slide-wrapper"
import { Target, Cpu, BarChart3 } from "lucide-react"

const PILLARS = [
  {
    icon: Target,
    title: "Stratégie digitale",
    description:
      "Une approche technologique alignée sur vos objectifs commerciaux — chaque feature sert un but business mesurable.",
  },
  {
    icon: Cpu,
    title: "Intelligence artificielle",
    description:
      "Des solutions IA concrètes et déployables — pas de buzzwords, mais des outils qui convertissent et automatisent.",
  },
  {
    icon: BarChart3,
    title: "Performance & données",
    description:
      "Chaque interaction est mesurée. Les décisions sont guidées par les données, pas par les intuitions.",
  },
]

export function AboutSlide() {
  return (
    <SlideWrapper id="about-us" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
            01 / Notre approche
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-2xl leading-tight text-balance">
            Un partenariat technologique de confiance
          </h2>
          <div className="w-16 h-px bg-[#ff7000]" />
          <p className="text-base md:text-lg text-[#64748b] font-sans max-w-2xl leading-relaxed">
            TechGuys Consulting accompagne Safex Transport depuis la construction de sa plateforme fullstack.
            Cette soumission représente une nouvelle étape : doter le site vitrine d{"'"}un assistant IA
            capable de guider chaque visiteur vers le bon service.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative p-8 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#ff7000]/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#ff7000]/0 via-[#ff7000]/20 to-[#ff7000]/0 group-hover:via-[#ff7000]/50 transition-all duration-500" />

              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#ff7000]/10 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-[#ff7000]" />
                </div>
                <h3 className="font-serif text-xl text-[#0f172a]">{pillar.title}</h3>
                <p className="text-sm text-[#64748b] font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 p-6 rounded-xl border border-[#e5e7eb] bg-[#f8fafc]">
          <p className="text-sm text-[#64748b] font-sans leading-relaxed text-center">
            Nous intégrons <span className="text-[#ff7000] font-medium">technologie de pointe</span>,{" "}
            <span className="text-[#10B981] font-medium">expertise transport</span> et{" "}
            <span className="text-[#ff7000] font-medium">rigueur opérationnelle</span> pour créer des outils
            qui génèrent de la valeur concrète — plus de leads qualifiés, moins de friction, meilleure expérience client.
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
