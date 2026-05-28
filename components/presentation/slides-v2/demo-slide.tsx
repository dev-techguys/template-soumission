"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink, Bot, Sparkles, MessageSquare, ClipboardList, Route } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"

export function DemoSlide() {
  const demoUrl = "https://laval-ai.vercel.app/"

  return (
    <SlideWrapper id="demo">
      <div className="min-h-screen bg-gradient-to-br from-[#143B6D] via-[#0f2d52] to-[#0a1f3a] flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Pulsing orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.25, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#50B878]/30 to-transparent rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-[#5B5CE2]/30 to-transparent rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" 
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

          {/* Floating particles */}
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

          {/* Animated rings */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-[#50B878]/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-[#50B878]/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 2.1, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-[#50B878]/20 rounded-full"
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
            {/* Animated icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative inline-flex items-center justify-center w-24 h-24 mb-8"
            >
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border-2 border-dashed border-[#50B878]/40"
              />
              {/* Inner glow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-2 bg-[#50B878]/20 rounded-xl blur-sm"
              />
              <div className="relative w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Bot className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Voyez l&apos;agent en action
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-xl text-white/70 max-w-2xl mx-auto"
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
            className="mb-10"
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
                className="absolute -inset-4 bg-[#50B878] rounded-3xl blur-2xl"
              />
              <motion.div
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -inset-2 bg-[#50B878] rounded-2xl blur-xl"
              />
              
              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.08, boxShadow: "0 0 60px rgba(80, 184, 120, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-5 px-14 py-7 bg-gradient-to-r from-[#50B878] via-[#45a56a] to-[#3da365] text-white rounded-2xl font-bold text-2xl shadow-2xl cursor-pointer border-2 border-white/30 overflow-hidden"
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
                  <Play className="w-9 h-9 fill-current" />
                </motion.div>
                <span className="relative">Lancer la démo interactive</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ExternalLink className="w-7 h-7 opacity-80 group-hover:opacity-100 transition-opacity relative" />
                </motion.div>
              </motion.div>
            </a>
          </motion.div>

          {/* Demo modes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-white/60 text-sm mb-4">La démo montre trois modes :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: MessageSquare, label: "Conversation libre" },
                { icon: ClipboardList, label: "Pré-diagnostic 13 questions" },
                { icon: Route, label: "Scénarios fréquents" }
              ].map((mode, i) => (
                <motion.div
                  key={mode.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <mode.icon className="w-4 h-4 text-[#50B878]" />
                  <span className="text-white/80 text-sm">{mode.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scenario buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <p className="text-white/50 text-xs mb-3">Scénarios disponibles dans la démo :</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Démarrer une entreprise",
                "Chercher du financement",
                "Trouver un local",
                "Exporter",
                "Événements",
                "Parler à quelqu'un"
              ].map((scenario, i) => (
                <motion.span
                  key={scenario}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.85 + i * 0.05 }}
                  className="px-3 py-1.5 text-xs bg-white/5 text-white/60 rounded-lg border border-white/10 hover:bg-white/10 hover:text-white/80 transition-colors cursor-default"
                >
                  {scenario}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Key points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { title: "Comprend", desc: "L'intention du visiteur", delay: 0 },
              { title: "Recommande", desc: "Une ressource ou action", delay: 0.1 },
              { title: "Transmet", desc: "Les signaux au dashboard", delay: 0.2 }
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + point.delay, type: "spring" }}
                whileHover={{ scale: 1.05, borderColor: "rgba(80, 184, 120, 0.5)" }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all cursor-default"
              >
                <motion.div 
                  className="text-[#50B878] font-bold text-xl mb-2"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {point.title}
                </motion.div>
                <div className="text-white/70">{point.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
