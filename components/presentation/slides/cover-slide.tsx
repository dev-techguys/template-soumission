"use client"

import { SlideWrapper } from "../slide-wrapper"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { client, branding } from "@/lib/proposal-data"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { MagneticButton } from "@/components/ui/scroll-animations"

// Dynamic import for 3D to avoid SSR issues
const Scene3D = dynamic(() => import("@/components/ui/3d-scene").then(mod => mod.Scene3D), {
  ssr: false,
  loading: () => null,
})

export function CoverSlide() {
  return (
    <SlideWrapper id="cover" className="relative overflow-hidden">
      {/* 3D Background */}
      <Scene3D className="opacity-60" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1]" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Top line */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8 left-8 right-8 flex items-center justify-between"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase text-white/30 font-medium">
            Confidentiel
          </span>
          <span className="text-[11px] tracking-[0.25em] uppercase text-white/20">
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
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 blur-3xl bg-[#0066FF]/20 scale-150" 
            />
            <div className="relative w-52 h-16">
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
            className="glass-card px-5 py-2 rounded-full backdrop-blur-xl"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-white/60 font-medium">
              Proposition de developpement
            </span>
          </motion.div>

          {/* Main title with staggered animation */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.1] max-w-5xl mt-4 font-light"
          >
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="gradient-text inline-block"
            >
              Plateforme
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-white font-medium inline-block"
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
            <span className="gradient-text-accent font-medium">
              Internalisez votre financement automobile
            </span>
            <br />
            <span className="text-white/40">
              et reprenez le controle de votre portefeuille
            </span>
          </motion.p>

          {/* Animated divider */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-white/15 to-transparent mt-4 origin-top" 
          />

          {/* Recipient card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="glass-card px-8 py-4 rounded-2xl flex flex-col items-center gap-1 backdrop-blur-xl"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">
              A l{"'"}attention de
            </span>
            <span className="text-lg text-white/90">
              {client.contactName}
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator with magnetic effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/25">
            Defiler
          </span>
          <MagneticButton>
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
            >
              <ChevronDown className="w-5 h-5 text-[#0066FF]" />
            </motion.div>
          </MagneticButton>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
