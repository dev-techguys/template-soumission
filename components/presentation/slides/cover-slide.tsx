"use client"

import { SlideWrapper } from "../slide-wrapper"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function CoverSlide() {
  return (
    <SlideWrapper id="cover" className="relative">
      {/* Dark navy background with orange/emerald gradients */}
      <div className="absolute inset-0 bg-[#0f172a]">
        {/* Orange radial glow top-right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff7000]/10 rounded-full blur-[120px]" />
        {/* Emerald radial glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#10B981]/8 rounded-full blur-[100px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,112,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,112,0,0.6) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Diagonal accent line */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff7000]/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center pt-24">
        {/* Top line */}
        <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
          <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-sans font-medium">
            Confidentiel
          </span>
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-sans">
            Mai 2026
          </span>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Logo Safex */}
          <div className="w-28 h-28 relative mb-2">
            <Image
              src="/images/safex-logo.png"
              alt="Safex Transport"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Eyebrow label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#ff7000]/40" />
            <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
              Proposition de partenariat technologique
            </span>
            <div className="w-8 h-px bg-[#ff7000]/40" />
          </div>

          {/* Agency × Client */}
          <p className="text-sm tracking-[0.25em] uppercase text-white/50 font-sans">
            TechGuys Consulting & Safex Transport
          </p>

          {/* Ornamental line */}
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#ff7000]/30 to-transparent" />

          {/* Main title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-white leading-tight max-w-4xl text-balance">
            Agent IA de Navigation Web
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#ff7000] font-sans font-medium max-w-2xl">
            Un assistant intelligent pour guider vos visiteurs vers le bon service Safex
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#ff7000]/50 to-transparent" />

          {/* Recipient */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans">
              {"À l'attention de"}
            </span>
            <span className="text-base text-white/80 font-serif">
              Pierre Major
            </span>
          </div>

          {/* Reference */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-sans">
              Référence projet :
            </span>
            <code className="text-[10px] text-[#10B981]/70 font-mono bg-[#10B981]/10 px-2 py-0.5 rounded">
              feat/ai-chat-agent
            </code>
          </div>

          {/* Ornamental line */}
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#ff7000]/20 to-transparent" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans">
            Défiler
          </span>
          <ChevronDown className="w-4 h-4 text-[#ff7000]/60" />
        </div>
      </div>
    </SlideWrapper>
  )
}
