"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink, Bot, Sparkles, Smartphone } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"

export function DemoSlide() {
  const demoUrl = "https://laval-ai.vercel.app/"
  const mobileDemoUrl = "https://v0-laval-economique-ai.vercel.app/"

  return (
    <SlideWrapper id="demo">
      <div className="min-h-screen bg-gradient-to-br from-[#143B6D] via-[#0f2d52] to-[#0a1f3a] flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Pulsing orbs - reduced size on mobile */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-[250px] md:w-[400px] lg:w-[500px] h-[250px] md:h-[400px] lg:h-[500px] bg-gradient-to-br from-[#50B878]/30 to-transparent rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-gradient-to-tr from-[#5B5CE2]/30 to-transparent rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-white/5 rounded-full blur-3xl" 
          />

          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px"
              }}
            />
          </div>

          {/* Floating particles - hidden on mobile for performance */}
          <div className="hidden md:block">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-30, 30, -30],
                  x: [-15, 15, -15],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 4 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                className="absolute"
                style={{
                  top: `${10 + (i * 8) % 80}%`,
                  left: `${5 + (i * 9) % 90}%`
                }}
              >
                <Sparkles className="w-3 h-3 text-[#50B878]/60" />
              </motion.div>
            ))}
          </div>

          {/* Animated rings - smaller on mobile */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[300px] h-[150px] md:h-[300px] border-2 border-[#50B878]/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[300px] h-[150px] md:h-[300px] border-2 border-[#50B878]/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 2.1, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[300px] h-[150px] md:h-[300px] border-2 border-[#50B878]/20 rounded-full"
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            {/* Animated icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative inline-flex items-center justify-center w-16 md:w-24 h-16 md:h-24 mb-6 md:mb-8"
            >
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-dashed border-[#50B878]/40"
              />
              {/* Inner glow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-2 bg-[#50B878]/20 rounded-lg md:rounded-xl blur-sm"
              />
              <div className="relative w-14 md:w-20 h-14 md:h-20 bg-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Bot className="w-7 md:w-10 h-7 md:h-10 text-white" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Démonstration de l&apos;agent IA
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto px-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              La meilleure façon de comprendre sa valeur est de l&apos;essayer vous-même.
            </motion.p>
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 150, damping: 15 }}
            className="mb-10 md:mb-16"
          >
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
            >
              {/* Multiple glow layers */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-3 md:-inset-4 bg-[#50B878] rounded-2xl md:rounded-3xl blur-xl md:blur-2xl"
              />
              <motion.div
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -inset-1.5 md:-inset-2 bg-[#50B878] rounded-xl md:rounded-2xl blur-lg md:blur-xl"
              />
              
              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.08, boxShadow: "0 0 60px rgba(80, 184, 120, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-3 md:gap-5 px-6 sm:px-8 md:px-14 py-4 md:py-7 bg-gradient-to-r from-[#50B878] via-[#45a56a] to-[#3da365] text-white rounded-xl md:rounded-2xl font-bold text-base sm:text-lg md:text-2xl shadow-2xl cursor-pointer border-2 border-white/30 overflow-hidden"
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="relative"
                >
                  <Play className="w-6 md:w-9 h-6 md:h-9 fill-current" />
                </motion.div>
                <span className="relative whitespace-nowrap">Lancer la démo</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ExternalLink className="w-5 md:w-7 h-5 md:h-7 opacity-80 group-hover:opacity-100 transition-opacity relative" />
                </motion.div>
              </motion.div>
            </a>

            {/* Mobile demo button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-4"
            >
              <a
                href={mobileDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-white/80 hover:text-white text-sm transition-all"
              >
                <Smartphone className="w-4 h-4" />
                <span>Version mobile</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </motion.div>
          </motion.div>

          {/* Key points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6"
          >
            {[
              { title: "Comprend", desc: "L'intention du visiteur", delay: 0 },
              { title: "Recommande", desc: "Une ressource ou action", delay: 0.1 },
              { title: "Transmet", desc: "Les signaux au tableau de bord", delay: 0.2 }
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + point.delay, type: "spring" }}
                whileHover={{ scale: 1.05, borderColor: "rgba(80, 184, 120, 0.5)" }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 transition-all cursor-default"
              >
                <motion.div 
                  className="text-[#50B878] font-bold text-lg md:text-xl mb-1 md:mb-2"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {point.title}
                </motion.div>
                <div className="text-white/70 text-sm md:text-base">{point.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
