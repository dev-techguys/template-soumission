import { SlideWrapper } from "../slide-wrapper"
import { Target, Cpu, BarChart3 } from "lucide-react"

const PILLARS = [
  {
    icon: Target,
    title: "Stratégie entrepreneuriale",
    description:
      "Une répartition stratégique des ressources pour assurer l'atteinte de vos objectifs d'affaires.",
  },
  {
    icon: Cpu,
    title: "Technologie & automatisation",
    description:
      "Accélérez l'exécution de vos projets technologiques grâce aux bons outils et à l'IA.",
  },
  {
    icon: BarChart3,
    title: "Marketing & performance",
    description:
      "Tester, mesurer et optimiser en continu à partir de données concrètes.",
  },
]

export function AboutSlide() {
  return (
    <SlideWrapper id="about-us" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
            01 / Notre approche
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-2xl leading-tight text-balance">
            Un partenariat de croissance
          </h2>
          <div className="w-16 h-px bg-[#387B84]" />
          <p className="text-base md:text-lg text-[#6b7280] font-sans max-w-2xl leading-relaxed">
            TechGuys et Omnigo.ca agissent comme des partenaires stratégiques pour votre croissance.
            Au-delà d{"'"}une agence traditionnelle, nous prenons en considération les priorités de votre
            organisation et vous accompagnons tout au long de votre parcours numérique.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative p-8 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#387B84]/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#387B84]/0 via-[#387B84]/20 to-[#387B84]/0 group-hover:via-[#387B84]/50 transition-all duration-500" />

              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#387B84]/10 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-[#387B84]" />
                </div>
                <h3 className="font-serif text-xl text-[#2d3748]">{pillar.title}</h3>
                <p className="text-sm text-[#6b7280] font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 p-6 rounded-xl border border-[#e5e7eb] bg-[#f7f7f7]">
          <p className="text-sm text-[#6b7280] font-sans leading-relaxed text-center">
            Nous alignons <span className="text-[#387B84] font-medium">stratégie</span>,{" "}
            <span className="text-[#4a9ba5] font-medium">marketing</span>,{" "}
            <span className="text-[#F6A878] font-medium">ventes</span> et{" "}
            <span className="text-[#387B84] font-medium">technologie</span> afin d{"'"}optimiser la synergie entre les
            différentes sphères de votre entreprise et maximiser votre retour sur investissement.
          </p>
        </div>
      </div>
    </SlideWrapper>
  )
}
