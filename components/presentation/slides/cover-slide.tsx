"use client"

import { SlideWrapper } from "../slide-wrapper"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import type { ClientInfo, BrandingConfig } from "@/lib/proposal-data"

interface CoverSlideProps {
  client: ClientInfo
  branding: BrandingConfig
}

export function CoverSlide({ client, branding }: CoverSlideProps) {
  return (
    <SlideWrapper id="cover" className="relative">
      {/* Full background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${branding.coverImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a3f]/90 via-[#2d5a60]/85 to-[#387B84]/75" />
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: `color-mix(in srgb, var(--color-accent) 10%, transparent)` }} />
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-white/5 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Top line */}
        <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
          <span className="text-xs tracking-[0.3em] uppercase text-white/70 font-sans font-medium">
            Confidentiel
          </span>
          {client.year && (
            <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-sans">
              {client.year}
            </span>
          )}
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Client logo */}
          <div className="mb-4">
            <Image
              src={client.logo}
              alt={client.companyName}
              width={280}
              height={80}
              className="brightness-0 invert"
            />
          </div>

          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

          <div className="flex flex-col items-center gap-2">
            <span className="text-sm tracking-[0.4em] uppercase font-sans font-medium"
              style={{ color: "var(--color-accent)" }}>
              Accompagnement stratégique
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-white leading-tight">
            Proposition de partenariat
          </h1>

          <p className="text-xl md:text-2xl font-sans font-medium"
            style={{ color: "var(--color-accent)" }}>
            de croissance
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-white/30 to-white/30"
            style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3), var(--color-accent), rgba(255,255,255,0.3))` }} />

          <p className="text-lg md:text-xl text-white/80 font-sans max-w-md leading-relaxed">
            Proposition de partenariat de croissance<br />
            <span className="font-medium" style={{ color: "var(--color-accent)" }}>
              TechGuys &amp; Omnigo.ca
            </span>
          </p>

          {client.contactName && (
            <div className="flex flex-col items-center gap-1 mt-4">
              <span className="text-xs tracking-[0.2em] uppercase text-white/60 font-sans">
                À l&apos;attention de
              </span>
              <span className="text-base text-white font-serif">
                {client.contactName}
              </span>
            </div>
          )}

          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-sans">
            Défiler
          </span>
          <ChevronDown className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
        </div>
      </div>
    </SlideWrapper>
  )
}
