"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Car, Building2, CreditCard, TrendingUp, Sparkles } from "lucide-react"
import { client } from "@/lib/proposal-data"
import { FadeInUp, FadeInLeft, FadeInRight, StaggerContainer, StaggerItem, ScaleIn, AnimatedCounter, Parallax } from "@/components/ui/scroll-animations"
import { motion } from "framer-motion"

const FACTS = [
  {
    icon: Car,
    label: "Secteur",
    value: "Auto",
    detail: "Réseau de concessions",
    isNumber: false,
  },
  {
    icon: Building2,
    label: "Concessions",
    value: 5,
    detail: "4 Chrysler + 1 Kia",
    isNumber: true,
  },
  {
    icon: CreditCard,
    label: "Objectif",
    value: "Financement",
    detail: "Plateforme propriétaire",
    isNumber: false,
  },
  {
    icon: TrendingUp,
    label: "Bénéfice",
    value: "1-3%",
    detail: "Marge récupérée",
    isNumber: false,
  },
]

export function ContextSlide() {
  return (
    <SlideWrapper id="context" className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 102, 255, 0.04), transparent 60%)
            `
          }}
        />
      </div>

      {/* Parallax floating elements */}
      <Parallax offset={40} className="absolute top-32 left-10 w-40 h-40 rounded-full bg-[#0066FF]/5 blur-3xl" />
      <Parallax offset={-50} className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-[#3388FF]/5 blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-14">
          <FadeInUp>
            <span className="text-xs tracking-[0.3em] uppercase text-[#0066FF] font-sans font-medium">
              02 / Contexte
            </span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-[1.1]">
              Le projet
              <br />
              <span className="gradient-text-accent">LOS Laplante</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-base text-white/40 font-sans leading-relaxed max-w-2xl">
              Une application web sur mesure pour <span className="text-[#0066FF] font-medium">internaliser le processus de location automobile</span> et reprendre le contrôle de la relation client.
            </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Description */}
          <FadeInLeft className="flex flex-col gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card rounded-2xl p-6"
            >
              <p className="text-base text-white/50 font-sans leading-relaxed">
                <span className="text-white font-medium">{client.name}</span> opère un réseau de concessions automobiles au Québec et agit actuellement comme intermédiaire en soumettant les demandes de financement de ses clients à des institutions tierces (banques, captives, etc.).
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card rounded-2xl p-6"
            >
              <p className="text-base text-white/50 font-sans leading-relaxed">
                Ce modèle entraîne une <span className="text-white font-medium">perte de contrôle sur le processus d{"'"}approbation</span>, des délais non maîtrisés, et une cession de la relation client à l{"'"}institution financière.
              </p>
            </motion.div>

            {/* Highlight box */}
            <ScaleIn delay={0.3}>
              <motion.div 
                whileHover={{ scale: 1.02, borderColor: "rgba(0, 102, 255, 0.4)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-strong rounded-2xl p-6 border-[#0066FF]/20"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="w-10 h-10 rounded-xl bg-[#0066FF]/15 border border-[#0066FF]/25 flex items-center justify-center shrink-0"
                  >
                    <Sparkles className="w-5 h-5 text-[#0066FF]" />
                  </motion.div>
                  <p className="text-sm text-[#3388FF] font-sans leading-relaxed">
                    La plateforme LOS Laplante permettra d{"'"}internaliser la marge d{"'"}intermédiation financière (typiquement 1% à 3% du montant financé), d{"'"}accélérer les approbations et de constituer un portefeuille de locations propriétaire.
                  </p>
                </div>
              </motion.div>
            </ScaleIn>
          </FadeInLeft>

          {/* Right: Key facts - Bento grid */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4">
            {FACTS.map((fact) => (
              <StaggerItem key={fact.label}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card rounded-2xl p-6 flex flex-col gap-4 h-full"
                >
                  <motion.div 
                    whileHover={{ rotate: 10 }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                  >
                    <fact.icon className="w-5 h-5 text-[#0066FF]" />
                  </motion.div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-sans block mb-1">
                      {fact.label}
                    </span>
                    <span className="font-serif text-3xl text-white block mb-1">
                      {fact.isNumber ? (
                        <AnimatedCounter value={fact.value as number} />
                      ) : (
                        fact.value
                      )}
                    </span>
                    <span className="text-xs text-white/35 font-sans">{fact.detail}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Tags - Pills with stagger */}
        <FadeInUp delay={0.4} className="mt-12">
          <motion.div className="flex flex-wrap gap-3">
            {["Gestion KYC", "Cycle de vie des locations", "Calcul automatique", "Collecte PAD", "Tableau de bord", "Portail concessionnaire", "Rapports réglementaires"].map(
              (tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 102, 255, 0.1)" }}
                  className="px-4 py-2.5 rounded-full glass text-xs tracking-[0.1em] uppercase text-white/40 font-sans hover:text-[#0066FF] hover:border-[#0066FF]/30 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              )
            )}
          </motion.div>
        </FadeInUp>
      </div>
    </SlideWrapper>
  )
}
