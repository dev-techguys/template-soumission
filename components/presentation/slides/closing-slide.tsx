"use client"

import { SlideWrapper } from "../slide-wrapper"
import Image from "next/image"
import { client, branding, slides } from "@/lib/proposal-data"

export function ClosingSlide() {
  const currentYear = new Date().getFullYear()

  return (
    <SlideWrapper id="closing" className="relative">
      {/* Full background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${branding.closingImageUrl}')`,
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
          className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${branding.accentColor}15` }}
        />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <div className="flex flex-col items-center gap-8 max-w-2xl">
          {/* Client Logo */}
          <div>
            <Image
              src={branding.logoUrl}
              alt={client.name}
              width={280}
              height={90}
              className="brightness-0 invert"
            />
          </div>

          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight text-balance">
            {slides.closing.title}
          </h2>

          <div
            className="w-24 h-px"
            style={{
              background: `linear-gradient(to right, rgba(255,255,255,0.3), ${branding.accentColor}, rgba(255,255,255,0.3))`,
            }}
          />

          <p className="text-lg text-white/80 font-sans max-w-lg leading-relaxed">
            {slides.closing.subtitle}
          </p>

          <div className="flex flex-col items-center gap-2 mt-8">
            <span className="text-xs tracking-[0.2em] uppercase text-white/60 font-sans">
              Prepare pour
            </span>
            <span className="font-serif text-2xl" style={{ color: branding.accentColor }}>
              {slides.closing.preparedFor}
            </span>
            <span className="text-sm text-white/80 font-sans">{slides.closing.contact}</span>
          </div>

          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

          <span className="text-xs tracking-[0.3em] uppercase text-white/60 font-sans">
            Confidentiel — {currentYear}
          </span>
        </div>
      </div>
    </SlideWrapper>
  )
}
