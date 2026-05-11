"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import Image from "next/image"

export function ClosingSlide() {
  return (
    <SlideWrapper id="closing" className="relative">
      {/* Dark navy background with orange/emerald gradients */}
      <div className="absolute inset-0 bg-[#0f172a]">
        {/* Orange radial glow top-left */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#ff7000]/10 rounded-full blur-[120px]" 
        />
        {/* Emerald radial glow bottom-right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#10B981]/8 rounded-full blur-[100px]" 
        />
        {/* Centre glow */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#ff7000]/4 rounded-full blur-[80px]" 
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,112,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,112,0,0.6) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Horizontal accent line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff7000]/10 to-transparent" 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center pt-16">
        <div className="flex flex-col items-center gap-8 max-w-2xl">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-24 relative mb-2"
          >
            <Image
              src="/images/safex-logo.png"
              alt="Safex Transport"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-px bg-[#ff7000]/40" />
            <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000]/70 font-sans font-medium">
              TechGuys Consulting & Safex Transport
            </span>
            <div className="w-8 h-px bg-[#ff7000]/40" />
          </motion.div>

          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-[#ff7000]/30 to-transparent origin-top" 
          />

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance"
          >
            Un agent IA pour transformer chaque visiteur en prospect qualifié
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#ff7000]/50 to-transparent" 
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col items-center gap-2 mt-4"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans">
              Préparé pour
            </span>
            <span className="font-serif text-2xl text-[#ff7000]">Safex Transport</span>
            <span className="text-sm text-white/70 font-sans">Pierre Major</span>
          </motion.div>

          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-[#ff7000]/20 to-transparent origin-top" 
          />

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-[#ff7000]/30 hover:border-[#ff7000]/60 hover:bg-[#ff7000]/5 transition-all duration-300 cursor-pointer"
          >
            <span className="text-sm tracking-[0.1em] text-[#ff7000] font-sans font-medium">
              Démarrer le projet
            </span>
            <span className="text-[#ff7000] group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.div>

          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans mt-4"
          >
            Confidentiel — Mai 2026
          </motion.span>
        </div>
      </div>
    </SlideWrapper>
  )
}
