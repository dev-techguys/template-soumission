"use client"

import { SlideWrapper } from "../slide-wrapper"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { client, branding } from "@/lib/proposal-data"

export function CoverSlide() {
  return (
    <SlideWrapper id="cover" className="relative">
      {/* Pure CSS dark background — Raycast inspired */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        {/* Blue radial glow top-right */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#0035FF]/8 rounded-full blur-[150px]" />
        {/* Blue radial glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3B82F6]/6 rounded-full blur-[120px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Horizontal accent line */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0035FF]/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Top line */}
        <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans font-medium">
            Confidentiel
          </span>
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-sans">
            2026
          </span>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="relative w-48 h-16 mb-4">
            <Image
              src={branding.logoUrl}
              alt={`Logo ${client.name}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Eyebrow label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#0035FF]/40" />
            <span className="text-xs tracking-[0.4em] uppercase text-[#0035FF] font-sans font-medium">
              Proposition de développement
            </span>
            <div className="w-8 h-px bg-[#0035FF]/40" />
          </div>

          {/* Agency × Client */}
          <p className="text-sm tracking-[0.25em] uppercase text-white/40 font-sans">
            TechGuys & {client.name}
          </p>

          {/* Ornamental line */}
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#0035FF]/30 to-transparent" />

          {/* Main title */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-white leading-tight max-w-4xl text-balance">
            Plateforme AutoFinance
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#3B82F6] font-sans font-medium max-w-2xl">
            Internalisez votre financement automobile et reprenez le contrôle de votre portefeuille
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#0035FF]/50 to-transparent" />

          {/* Recipient */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans">
              À l{"'"}attention de
            </span>
            <span className="text-base text-white/80 font-serif">
              {client.contactName}
            </span>
          </div>

          {/* Ornamental line */}
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#0035FF]/20 to-transparent" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans">
            Défiler
          </span>
          <ChevronDown className="w-4 h-4 text-[#0035FF]/60" />
        </div>
      </div>
    </SlideWrapper>
  )
}
