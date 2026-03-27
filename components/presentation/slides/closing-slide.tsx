"use client"

import { SlideWrapper } from "../slide-wrapper"
import Image from "next/image"

export function ClosingSlide() {
  return (
    <SlideWrapper id="closing" className="relative">
      {/* Full background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/inputkit-closing.jpg')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a3f]/90 via-[#2d5a60]/85 to-[#387B84]/75" />
        
        {/* Subtle decorative accents */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#F6A878]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <div className="flex flex-col items-center gap-8 max-w-2xl">
          {/* InputKit Logo */}
          <div>
            <Image 
              src="/images/inputkit-logo.png" 
              alt="InputKit" 
              width={240} 
              height={70}
              className="brightness-0 invert"
            />
          </div>

          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight text-balance">
            Prêts à transformer votre présence numérique ensemble
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-white/30 via-[#F6A878] to-white/30" />

          <p className="text-lg text-white/80 font-sans max-w-lg leading-relaxed">
            De WordPress à une plateforme sur mesure propulsée par l{"'"}IA — 
            plus rapide, plus agile, plus performante.
          </p>

          <div className="flex flex-col items-center gap-2 mt-8">
            <span className="text-xs tracking-[0.2em] uppercase text-white/60 font-sans">
              Préparé pour
            </span>
            <span className="font-serif text-2xl text-[#F6A878]">InputKit</span>
            <span className="text-sm text-white/80 font-sans">Philippe Genois</span>
          </div>

          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

          <span className="text-xs tracking-[0.3em] uppercase text-white/60 font-sans">
            Confidentiel — 2025
          </span>
        </div>
      </div>
    </SlideWrapper>
  )
}
