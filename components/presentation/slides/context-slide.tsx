"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Car, Building2, CreditCard, TrendingUp, Sparkles } from "lucide-react"
import { client } from "@/lib/proposal-data"

const FACTS = [
  {
    icon: Car,
    label: "Secteur",
    value: "Auto",
    detail: "Reseau de concessions",
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
    detail: "Plateforme proprietaire",
  },
  {
    icon: TrendingUp,
    label: "Benefice",
    value: "1-3%",
    detail: "Marge recuperee",
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
              radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255, 99, 99, 0.04), transparent 60%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-[#FF6363] font-sans font-medium">
            02 / Contexte
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-[1.1]">
            Le projet
            <br />
            <span className="gradient-text-accent">AutoFinance</span>
          </h2>
          <p className="text-base text-white/40 font-sans leading-relaxed max-w-2xl">
            Une transformation numerique strategique pour <span className="text-[#FF6363] font-medium">internaliser le processus de financement automobile</span> et reprendre le controle de la relation client.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Description */}
          <div className="flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6">
              <p className="text-base text-white/50 font-sans leading-relaxed">
                <span className="text-white font-medium">{client.name}</span> opere un reseau de concessions automobiles au Quebec et agit actuellement comme intermediaire en soumettant les demandes de financement de ses clients a des institutions tierces (banques, captives, etc.).
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-base text-white/50 font-sans leading-relaxed">
                Ce modele entraine une <span className="text-white font-medium">perte de controle sur le processus d{"'"}approbation</span>, des delais non maitrises, et une cession de la relation client a l{"'"}institution financiere.
              </p>
            </div>

            {/* Highlight box */}
            <div className="glass-strong rounded-2xl p-6 border-[#FF6363]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF6363]/15 border border-[#FF6363]/25 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#FF6363]" />
                </div>
                <p className="text-sm text-[#FF8585] font-sans leading-relaxed">
                  La plateforme AutoFinance permettra d{"'"}internaliser la marge d{"'"}intermediation financiere (typiquement 1% a 3% du montant finance), d{"'"}accelerer les approbations et de constituer un portefeuille de prets proprietaire.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Key facts - Bento grid */}
          <div className="grid grid-cols-2 gap-4">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <fact.icon className="w-5 h-5 text-[#FF6363]" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-sans block mb-1">
                    {fact.label}
                  </span>
                  <span className="font-serif text-3xl text-white block mb-1">{fact.value}</span>
                  <span className="text-xs text-white/35 font-sans">{fact.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags - Pills */}
        <div className="mt-12 flex flex-wrap gap-3">
          {["Gestion KYC", "Cycle de vie des prets", "Calcul automatique", "Collecte PAD", "Tableau de bord", "Portail concessionnaire", "Rapports reglementaires"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-2.5 rounded-full glass text-xs tracking-[0.1em] uppercase text-white/40 font-sans hover:text-[#FF6363] hover:border-[#FF6363]/30 transition-colors cursor-default"
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
