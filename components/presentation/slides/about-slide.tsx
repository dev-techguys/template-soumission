"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Code, Zap, Shield, ArrowRight } from "lucide-react"
import { FadeInUp, FadeInLeft, StaggerContainer, StaggerItem, GlowCard, Parallax } from "@/components/ui/scroll-animations"

const PILLARS = [
  {
    icon: Code,
    title: "Developpement sur mesure",
    description:
      "Une plateforme construite specifiquement pour vos besoins - pas une solution generique avec des compromis.",
    gradient: "from-[#0066FF]/20 to-transparent",
  },
  {
    icon: Zap,
    title: "Livraison acceleree par l'IA",
    description:
      "Notre utilisation de l'IA dans le developpement nous permet de livrer plus vite a un tarif 35% plus competitif.",
    gradient: "from-[#3388FF]/15 to-transparent",
  },
  {
    icon: Shield,
    title: "Conformite des la conception",
    description:
      "Architecture pensee pour les exigences reglementaires canadiennes : Loi 25, FINTRAC, donnees hebergees au Canada.",
    gradient: "from-[#66AAFF]/10 to-transparent",
  },
]

export function AboutSlide() {
  return (
    <SlideWrapper id="about-us" className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 0% 0%, rgba(0, 102, 255, 0.08), transparent 50%),
              radial-gradient(circle at 100% 80%, rgba(0, 102, 255, 0.04), transparent 30%)
            `
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

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
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-[1.1]">
              Un partenaire technique
              <br />
              <span className="gradient-text">de confiance</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-base md:text-lg text-white/40 font-sans max-w-2xl leading-relaxed">
              TechGuys accompagne les entreprises quebecoises dans leur transformation numerique.
              Nous combinons expertise technique et comprehension des enjeux d{"'"}affaires pour livrer
              des solutions qui generent des resultats concrets.
            </p>
          </FadeInUp>
        </div>

        {/* Pillars - Glass cards with stagger animation */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((pillar, index) => (
            <StaggerItem key={pillar.title}>
              <GlowCard className="group relative card-hover h-full">
                <div className="glass-card h-full p-7 rounded-2xl overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center group-hover:bg-[#0066FF]/20 group-hover:scale-110 transition-all duration-300">
                      <pillar.icon className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-sans mb-2 block">
                        0{index + 1}
                      </span>
                      <h3 className="font-serif text-xl text-white mb-3">{pillar.title}</h3>
                      <p className="text-sm text-white/40 font-sans leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-[#0066FF] text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                        <span>En savoir plus</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom note - Glass */}
        <FadeInUp delay={0.5} className="mt-12">
          <div className="glass-card rounded-2xl p-6">
            <p className="text-sm text-white/50 font-sans leading-relaxed text-center">
              Nous avons analyse en profondeur les <span className="text-[#0066FF] font-medium">dimensions techniques</span>,{" "}
              <span className="text-[#3388FF] font-medium">reglementaires</span>,{" "}
              <span className="text-[#66AAFF] font-medium">financieres</span> et{" "}
              <span className="text-white/70 font-medium">organisationnelles</span> de votre projet afin de vous proposer
              une solution adaptee a vos besoins reels.
            </p>
          </div>
        </FadeInUp>
      </div>
    </SlideWrapper>
  )
}
