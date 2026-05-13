"use client"

import { SlideWrapper } from "../slide-wrapper"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { client, branding } from "@/lib/proposal-data"

export function CoverSlide() {
  return (
    <SlideWrapper id="cover" className="relative">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Top line */}
        <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
          <span className="text-[11px] tracking-[0.25em] uppercase text-white/30 font-medium">
            Confidentiel
          </span>
          <span className="text-[11px] tracking-[0.25em] uppercase text-white/20">
            2026
          </span>
        </div>

        <div className="flex flex-col items-center gap-6">
          {/* Logo with subtle glow */}
          <div className="relative mb-6">
            <div className="absolute inset-0 blur-3xl bg-[#0066FF]/10 scale-150" />
            <div className="relative w-52 h-16">
              <Image
                src={branding.logoUrl}
                alt={`Logo ${client.name}`}
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </div>

          {/* Eyebrow label - glass pill */}
          <div className="glass-card px-5 py-2 rounded-full">
            <span className="text-[11px] tracking-[0.3em] uppercase text-white/60 font-medium">
              Proposition de developpement
            </span>
          </div>

          {/* Main title with gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.1] max-w-5xl mt-4 font-light">
            <span className="gradient-text">Plateforme</span>
            <br />
            <span className="text-white font-medium">AutoFinance</span>
          </h1>

          {/* Subtitle with accent */}
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mt-2">
            <span className="gradient-text-accent font-medium">
              Internalisez votre financement automobile
            </span>
            <br />
            <span className="text-white/40">
              et reprenez le controle de votre portefeuille
            </span>
          </p>

          {/* Divider */}
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/15 to-transparent mt-4" />

          {/* Recipient - glass card */}
          <div className="glass-card px-8 py-4 rounded-2xl flex flex-col items-center gap-1">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">
              A l{"'"}attention de
            </span>
            <span className="text-lg text-white/90">
              {client.contactName}
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/25">
            Defiler
          </span>
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
            <ChevronDown className="w-4 h-4 text-[#0066FF]/70 animate-bounce" />
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
