"use client"

import { SlideWrapper } from "../slide-wrapper"

export function ClosingSlide() {
  return (
    <SlideWrapper id="closing" className="relative">
      {/* Pure CSS dark background with cyan gradient — no images */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        {/* Cyan radial glow top-left */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#7DF9FF]/8 rounded-full blur-[120px]" />
        {/* Cyan radial glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0DA5B5]/12 rounded-full blur-[100px]" />
        {/* Centre glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7DF9FF]/4 rounded-full blur-[80px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(125,249,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(125,249,255,0.6) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Horizontal accent line */}
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <div className="flex flex-col items-center gap-8 max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#7DF9FF]/40" />
            <span className="text-xs tracking-[0.4em] uppercase text-[#7DF9FF]/70 font-sans font-medium">
              TechGuys × Omnigo.ca
            </span>
            <div className="w-8 h-px bg-[#7DF9FF]/40" />
          </div>

          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#7DF9FF]/30 to-transparent" />

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance">
            Un accompagnement stratégique optimal pour propulser votre croissance digitale
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/50 to-transparent" />

          <div className="flex flex-col items-center gap-2 mt-4">
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans">
              Préparé pour
            </span>
            <span className="font-serif text-2xl text-[#7DF9FF]">Omnigo.ca</span>
            <span className="text-sm text-white/70 font-sans">Samuel Cousineau</span>
          </div>

          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#7DF9FF]/20 to-transparent" />

          {/* CTA */}
          <div className="group flex items-center gap-3 px-8 py-4 rounded-full border border-[#7DF9FF]/30 hover:border-[#7DF9FF]/60 hover:bg-[#7DF9FF]/5 transition-all duration-300 cursor-pointer">
            <span className="text-sm tracking-[0.1em] text-[#7DF9FF] font-sans font-medium">
              Démarrer le projet
            </span>
            <span className="text-[#7DF9FF] group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>

          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans mt-4">
            Confidentiel — 2025
          </span>
        </div>
      </div>
    </SlideWrapper>
  )
}
