"use client"

import { SlideWrapper } from "../slide-wrapper"
import { ChevronDown } from "lucide-react"

export function CoverSlide() {
  return (
    <SlideWrapper id="cover" className="relative">
      {/* Pure CSS dark background with cyan gradient — no images */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        {/* Cyan radial glow top-right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7DF9FF]/8 rounded-full blur-[120px]" />
        {/* Cyan radial glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0DA5B5]/12 rounded-full blur-[100px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(125,249,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(125,249,255,0.6) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Diagonal accent line */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Top line */}
        <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
          <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-sans font-medium">
            Confidentiel
          </span>
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-sans">
            2025
          </span>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Eyebrow label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#7DF9FF]/40" />
            <span className="text-xs tracking-[0.4em] uppercase text-[#7DF9FF] font-sans font-medium">
              Proposition de partenariat de croissance
            </span>
            <div className="w-8 h-px bg-[#7DF9FF]/40" />
          </div>

          {/* Agency × Client */}
          <p className="text-sm tracking-[0.25em] uppercase text-white/50 font-sans">
            TechGuys & Omnigo.ca
          </p>

          {/* Ornamental line */}
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#7DF9FF]/30 to-transparent" />

          {/* Main title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-white leading-tight max-w-3xl text-balance">
            Propulser la croissance numérique d{"'"}Omnigo.ca
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#7DF9FF] font-sans font-medium max-w-xl">
            Stratégie, acquisition et automatisation — un plan sur 6 semaines
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/50 to-transparent" />

          {/* Recipient */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans">
              À l{"'"}attention de
            </span>
            <span className="text-base text-white/80 font-serif">
              Samuel Cousineau
            </span>
          </div>

          {/* Ornamental line */}
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#7DF9FF]/20 to-transparent" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans">
            Défiler
          </span>
          <ChevronDown className="w-4 h-4 text-[#7DF9FF]/60" />
        </div>
      </div>
    </SlideWrapper>
  )
}
