"use client"

import { SlideWrapper } from "../slide-wrapper"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function CoverSlide() {
  return (
    <SlideWrapper id="cover" className="relative">
      {/* Full background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/inputkit-cover.jpg')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a3f]/90 via-[#2d5a60]/85 to-[#387B84]/75" />
        
        {/* Subtle decorative accents */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#F6A878]/10 rounded-full blur-3xl" />
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
            2025
          </span>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* InputKit Logo */}
          <div className="mb-4">
            <Image 
              src="/images/inputkit-logo.png" 
              alt="InputKit" 
              width={280} 
              height={80}
              className="brightness-0 invert"
            />
          </div>

          {/* Ornamental line */}
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

          <div className="flex flex-col items-center gap-2">
            <span className="text-sm tracking-[0.4em] uppercase text-[#F6A878] font-sans font-medium">
              Accompagnement stratégique
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-white leading-tight">
            Migration WordPress
          </h1>
          
          <p className="text-xl md:text-2xl text-[#F6A878] font-sans font-medium">
            vers une plateforme sur mesure propulsée par l{"'"}IA
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-white/30 via-[#F6A878] to-white/30" />

          <p className="text-lg md:text-xl text-white/80 font-sans max-w-md leading-relaxed">
            Proposition de partenariat de croissance<br />
            <span className="text-[#F6A878] font-medium">TechGuys & Omnigo.ca</span>
          </p>

          <div className="flex flex-col items-center gap-1 mt-4">
            <span className="text-xs tracking-[0.2em] uppercase text-white/60 font-sans">
              À l{"'"}attention de
            </span>
            <span className="text-base text-white font-serif">
              Philippe Genois
            </span>
          </div>

          {/* Ornamental line */}
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-sans">
            Défiler
          </span>
          <ChevronDown className="w-4 h-4 text-[#F6A878]" />
        </div>
      </div>
    </SlideWrapper>
  )
}
