"use client"

import { SlideWrapper } from "../slide-wrapper"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { client, branding, slides } from "@/lib/proposal-data"

export function CoverSlide() {
  const currentYear = new Date().getFullYear()

  return (
    <SlideWrapper id="cover" className="relative">
      {/* Full background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${branding.coverImageUrl}')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom right, ${branding.primaryColor}ee, ${branding.secondaryColor}dd, ${branding.primaryColor}cc)`,
          }}
        />

        {/* Subtle decorative accents */}
        <div
          className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: `${branding.accentColor}15` }}
        />
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-white/5 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Top line */}
        <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
          <span className="text-xs tracking-[0.3em] uppercase text-white/70 font-sans font-medium">
            Confidentiel
          </span>
          <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-sans">
            {currentYear}
          </span>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Client Logo */}
          <div className="mb-4">
            <Image
              src={branding.logoUrl}
              alt={client.name}
              width={320}
              height={100}
              className="brightness-0 invert"
            />
          </div>

          {/* Ornamental line */}
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

          <div className="flex flex-col items-center gap-2">
            <span
              className="text-sm tracking-[0.4em] uppercase font-sans font-medium"
              style={{ color: branding.accentColor }}
            >
              {slides.hero.tagline}
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-white leading-tight">
            {slides.hero.title}
          </h1>

          <p
            className="text-xl md:text-2xl font-sans font-medium"
            style={{ color: branding.accentColor }}
          >
            {slides.hero.subtitle}
          </p>

          <div
            className="w-24 h-px"
            style={{
              background: `linear-gradient(to right, rgba(255,255,255,0.3), ${branding.accentColor}, rgba(255,255,255,0.3))`,
            }}
          />

          <p className="text-lg md:text-xl text-white/80 font-sans max-w-md leading-relaxed">
            Proposition de partenariat de croissance
            <br />
            <span className="font-medium" style={{ color: branding.accentColor }}>
              {slides.hero.partnership}
            </span>
          </p>

          <div className="flex flex-col items-center gap-1 mt-4">
            <span className="text-xs tracking-[0.2em] uppercase text-white/60 font-sans">
              A l{"'"}attention de
            </span>
            <span className="text-base text-white font-serif">{slides.hero.attention}</span>
          </div>

          {/* Ornamental line */}
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-sans">
            Defiler
          </span>
          <ChevronDown className="w-4 h-4" style={{ color: branding.accentColor }} />
        </div>
      </div>
    </SlideWrapper>
  )
}
