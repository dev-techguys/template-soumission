"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Code, Zap, Shield } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem, Parallax } from "@/components/ui/scroll-animations"
import { FeatureCard } from "@/components/ui/feature-card"

const PILLARS = [
  {
    icon: Code,
    title: "Developpement sur mesure",
    description:
      "Une plateforme construite specifiquement pour vos besoins - pas une solution generique avec des compromis.",
  },
  {
    icon: Zap,
    title: "Livraison acceleree par l'IA",
    description:
      "Notre utilisation de l'IA dans le developpement nous permet de livrer plus vite a un tarif plus competitif.",
  },
  {
    icon: Shield,
    title: "Conformite des la conception",
    description:
      "Architecture pensee pour les exigences reglementaires canadiennes : Loi 25, FINTRAC, donnees hebergees au Canada.",
  },
]

export function AboutSlide() {
  return (
    <SlideWrapper id="about-us" className="relative">
      {/* Parallax floating elements */}
      <Parallax offset={50} className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#0066FF]/5 blur-3xl" />
      <Parallax offset={-30} className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-[#3388FF]/5 blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-16">
          <FadeInUp>
            <span className="text-xs tracking-[0.3em] uppercase text-[#0066FF] font-medium">
              01 / Notre approche
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-[1.1]">
              Un partenaire technique
              <br />
              <span className="text-[#0066FF]">de confiance</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-base md:text-lg text-white/40 max-w-2xl leading-relaxed">
              TechGuys accompagne les entreprises quebecoises dans leur transformation numerique.
              Nous combinons expertise technique et comprehension des enjeux d{"'"}affaires pour livrer
              des solutions qui generent des resultats concrets.
            </p>
          </FadeInUp>
        </div>

        {/* Pillars - Feature cards with corner decorations */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((pillar, index) => (
            <StaggerItem key={pillar.title}>
              <FeatureCard className="h-full group">
                <div className="p-7 flex flex-col gap-5 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center group-hover:bg-[#0066FF]/20 group-hover:scale-110 transition-all duration-300">
                    <pillar.icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-2 block">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl text-white mb-3 font-medium">{pillar.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FeatureCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <FadeInUp delay={0.5} className="mt-12">
          <FeatureCard className="p-6">
            <p className="text-sm text-white/50 leading-relaxed text-center">
              Nous avons analyse en profondeur les <span className="text-[#0066FF] font-medium">dimensions techniques</span>,{" "}
              <span className="text-[#3388FF] font-medium">reglementaires</span>,{" "}
              <span className="text-[#66AAFF] font-medium">financieres</span> et{" "}
              <span className="text-white/70 font-medium">organisationnelles</span> de votre projet afin de vous proposer
              une solution adaptee a vos besoins reels.
            </p>
          </FeatureCard>
        </FadeInUp>
      </div>
    </SlideWrapper>
  )
}
