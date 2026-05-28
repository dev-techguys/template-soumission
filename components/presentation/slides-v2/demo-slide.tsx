"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink, Bot, Sparkles } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"

export function DemoSlide() {
  const demoUrl = "https://laval-ai.vercel.app/"

  return (
    <SlideWrapper id="demo">
      <div className="min-h-screen bg-gradient-to-br from-[#143B6D] via-[#0f2d52] to-[#0a1f3a] flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 right-20 w-96 h-96 bg-[#50B878]/20 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-[#5B5CE2]/20 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" 
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm border border-white/20"
            >
              <Bot className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Voyez l&apos;agent en action
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              La meilleure façon de comprendre sa valeur est de l&apos;essayer vous-même.
            </p>
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
            className="mb-12"
          >
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
            >
              {/* Glow effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-[#50B878] rounded-2xl blur-xl"
              />
              
              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#50B878] to-[#3da365] text-white rounded-2xl font-bold text-2xl shadow-2xl cursor-pointer border-2 border-white/20"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Play className="w-8 h-8 fill-current" />
                </motion.div>
                <span>Lancer la démo interactive</span>
                <ExternalLink className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </a>
          </motion.div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute"
                style={{
                  top: `${20 + (i * 15) % 60}%`,
                  left: `${10 + (i * 20) % 80}%`
                }}
              >
                <Sparkles className="w-4 h-4 text-[#50B878]/50" />
              </motion.div>
            ))}
          </div>

          {/* Key points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mt-8"
          >
            {[
              { title: "Comprend", desc: "L'intention du visiteur" },
              { title: "Recommande", desc: "Une ressource ou action" },
              { title: "Transmet", desc: "Les signaux au dashboard" }
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="text-[#50B878] font-bold text-lg mb-1">{point.title}</div>
                <div className="text-white/70">{point.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
