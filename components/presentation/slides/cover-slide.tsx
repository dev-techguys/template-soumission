"use client"

import { SlideWrapper } from "../slide-wrapper"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { client, branding } from "@/lib/proposal-data"
import { motion } from "framer-motion"
import { MagneticButton } from "@/components/ui/scroll-animations"

function CoverBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Base gradient (fallback while video loads) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030318] via-[#0a0a2e] to-[#050520]" />

      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero-cars.mov" type="video/mp4" />
        <source src="/videos/hero-cars.mov" type="video/quicktime" />
      </video>

      {/* Dark tint over the video to keep the brand mood and text readable */}
      <div className="absolute inset-0 bg-[#030318]/55" />

      {/* Subtle blue glow accent */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-[120px]" />

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0, 3, 15, 0.35) 0%, transparent 35%, rgba(0, 3, 15, 0.55) 80%, rgba(0, 3, 15, 0.9)),
            linear-gradient(to right, rgba(0, 3, 15, 0.4), transparent 30%, transparent 70%, rgba(0, 3, 15, 0.4))
          `,
        }}
      />
    </div>
  )
}

export function CoverSlide() {
  return (
    <SlideWrapper id="cover" className="relative overflow-hidden">
      {/* Static gradient background */}
      <CoverBackground />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Top line */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8 left-8 right-8 flex items-center justify-between"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase text-white/40 font-medium">
            Confidentiel
          </span>
          <span className="text-[11px] tracking-[0.25em] uppercase text-white/30">
            2026
          </span>
        </motion.div>

        <div className="flex flex-col items-center gap-6">
          {/* Logo with glow animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative mb-6"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.3, 0.15]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 blur-3xl bg-[#0066FF]/30 scale-150" 
            />
            <div className="relative w-56 h-20">
              <Image
                src={branding.logoUrl}
                alt={`Logo ${client.name}`}
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </motion.div>

          {/* Eyebrow label with glass effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="px-6 py-2.5 rounded-full backdrop-blur-xl border border-white/10"
            style={{ 
              background: "rgba(0, 102, 255, 0.1)",
            }}
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-white/70 font-medium">
              Proposition de développement
            </span>
          </motion.div>

          {/* Main title with staggered animation */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.1] max-w-5xl mt-4"
          >
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-light bg-gradient-to-r from-[#0066FF] via-[#3388FF] to-[#66AAFF] bg-clip-text text-transparent inline-block"
            >
              Plateforme
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-white font-semibold inline-block"
            >
              LOS Laplante
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-lg md:text-xl max-w-2xl leading-relaxed mt-2"
          >
            <span className="bg-gradient-to-r from-[#3388FF] to-[#66AAFF] bg-clip-text text-transparent font-medium">
              Internalisez votre financement automobile
            </span>
            <br />
            <span className="text-white/50">
              et reprenez le contrôle de votre portefeuille
            </span>
          </motion.p>

          {/* Animated divider */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="w-px h-14 bg-gradient-to-b from-transparent via-[#0066FF]/30 to-transparent mt-4 origin-top" 
          />

          {/* Recipient card with glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="px-10 py-5 rounded-2xl flex flex-col items-center gap-1.5 backdrop-blur-xl border border-white/10"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
              A l{"'"}attention de
            </span>
            <span className="text-xl text-white font-medium">
              {client.contactName}
            </span>
            <span className="text-sm text-white/50">
              {client.name}
            </span>
          </motion.div>

          {/* TechGuys Partner Badge - same background style as hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <span className="text-[9px] tracking-[0.25em] uppercase text-white/30">
              Partenaire tech stratégique
            </span>
            <div 
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10"
              style={{
                background: "linear-gradient(135deg, rgba(253, 133, 211, 0.12), rgba(120, 0, 60, 0.08))",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* TechGuys Logo - just the pink square */}
              <svg width="32" height="32" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TechGuys logo">
                <rect width="160" height="160" rx="30" fill="#FD85D3"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M96.9867 115.085V93.013C96.9867 86.6791 93.7587 80.8882 88.2748 77.7081L62.113 62.5339V115.085C62.113 124.761 69.9198 132.604 79.552 132.604C89.1839 132.604 96.9867 124.761 96.9867 115.085Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M114.42 27.5012H92.4482C86.143 27.5012 80.3784 30.7439 77.2126 36.2528L62.1069 62.5335H114.42C124.052 62.5335 131.86 54.6905 131.86 45.0147C131.86 35.3442 124.052 27.5012 114.42 27.5012Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M44.6733 27.4962C54.3052 27.4962 62.1131 35.3392 62.1131 45.0149V62.5337H44.6733C35.0414 62.5337 27.2335 54.6907 27.2335 45.0149C27.2335 35.3392 35.0414 27.4962 44.6733 27.4962Z" fill="white"/>
              </svg>
              {/* TechGuys text */}
              <span className="text-lg font-semibold text-white tracking-wide">
                TechGuys
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - positioned in bottom right corner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.2em] uppercase text-white/30">
            Defiler
          </span>
          <MagneticButton>
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border border-white/10 hover:border-[#0066FF]/50 hover:bg-[#0066FF]/10 transition-all duration-300"
              style={{
                background: "rgba(0, 102, 255, 0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <ChevronDown className="w-4 h-4 text-[#0066FF]" />
            </motion.div>
          </MagneticButton>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
