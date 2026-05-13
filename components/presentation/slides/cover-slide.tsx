"use client"

import { SlideWrapper } from "../slide-wrapper"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { client, branding } from "@/lib/proposal-data"
import { motion } from "framer-motion"
import { Suspense, lazy } from "react"
import { MagneticButton } from "@/components/ui/scroll-animations"

// Lazy load Spline for performance
const Spline = lazy(() => import("@splinetool/react-spline"))

function SplineBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-[#030318] via-[#0a0a2e] to-[#050520]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066FF]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF3366]/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      }>
        {/* Spline - keep original colors (blue/pink/purple), just slight blur */}
        <div 
          className="w-full h-full"
          style={{
            filter: "blur(1px) saturate(1.1)",
          }}
        >
          <Spline
            style={{
              width: "100%",
              height: "100vh",
              pointerEvents: "auto",
            }}
            scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
          />
        </div>
      </Suspense>
      
      {/* Light overlay for readability - not too strong */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(0, 3, 15, 0.15)",
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, transparent 50%, rgba(0, 3, 15, 0.6) 85%, rgba(0, 3, 15, 0.9)),
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
      {/* Spline Galaxy Background */}
      <SplineBackground />
      
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
              Proposition de developpement
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
              AutoFinance
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
              et reprenez le controle de votre portefeuille
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
        </div>

        {/* Scroll indicator with magnetic effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
            Defiler
          </span>
          <MagneticButton>
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer border border-white/10 hover:border-[#0066FF]/50 hover:bg-[#0066FF]/10 transition-all duration-300"
              style={{
                background: "rgba(0, 102, 255, 0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <ChevronDown className="w-5 h-5 text-[#0066FF]" />
            </motion.div>
          </MagneticButton>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
