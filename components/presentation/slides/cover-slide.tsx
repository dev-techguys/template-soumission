"use client"

import { SlideWrapper } from "../slide-wrapper"
import { motion } from "framer-motion"
import { ChevronDown, Database, Globe, BarChart3, Bot, Sparkles } from "lucide-react"

export function CoverSlide() {
  return (
    <SlideWrapper id="cover" className="relative">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#E8F3FB]/30 to-white">
        {/* Subtle blue glow top-right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#143B6D]/5 rounded-full blur-[120px]" 
        />
        {/* Green glow bottom-left */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#50B878]/5 rounded-full blur-[100px]" 
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#143B6D 1px, transparent 1px), linear-gradient(90deg, #143B6D 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 lg:px-16 gap-12 lg:gap-20 pt-20 pb-12">
        {/* Left column - Text content */}
        <div className="flex flex-col items-center lg:items-start gap-6 max-w-2xl text-center lg:text-left">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F3FB] border border-[#143B6D]/10 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-[#5B5CE2]" />
            <span className="text-xs font-semibold tracking-wide text-[#143B6D] uppercase">
              Proposition Agent IA
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#143B6D] leading-tight text-balance"
          >
            Agent IA Laval Économique
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-[#64748B] font-sans max-w-xl leading-relaxed"
          >
            Une couche intelligente pour connecter le site web, les données et les intentions des entrepreneurs.
          </motion.p>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-sm text-[#64748B] font-sans max-w-xl leading-relaxed"
          >
            Une solution sur mesure intégrée au site de Laval Économique pour aider les visiteurs à trouver la bonne information, comprendre leurs intentions, connecter les interactions à la base de données actuelle et offrir à l&apos;équipe un tableau de bord clair sur les besoins réels des entrepreneurs.
          </motion.p>

          {/* Three badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mt-2"
          >
            <Badge icon={<Database className="w-3.5 h-3.5" />} label="Connexion base de données" variant="blue" />
            <Badge icon={<Globe className="w-3.5 h-3.5" />} label="Navigation site complet" variant="green" />
            <Badge icon={<BarChart3 className="w-3.5 h-3.5" />} label="Dashboard visiteurs et intention" variant="indigo" />
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a 
              href="#executive-summary"
              className="px-6 py-3 bg-[#143B6D] text-white text-sm font-semibold rounded-full hover:bg-[#0f2d52] transition-colors shadow-sm"
            >
              Voir la proposition
            </a>
            <div className="flex items-center gap-2">
              <span className="px-4 py-2 bg-[#50B878]/10 text-[#50B878] text-sm font-bold rounded-full border border-[#50B878]/20">
                17 500 $
              </span>
              <span className="text-xs text-[#64748B]">+ taxes</span>
            </div>
          </motion.div>
        </div>

        {/* Right column - Visual mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full max-w-lg lg:max-w-xl"
        >
          {/* Flow diagram */}
          <div className="relative">
            {/* Main mockup card */}
            <div className="bg-white rounded-3xl shadow-xl border border-[#E2E8F0] p-6 relative z-10">
              {/* Browser header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#E2E8F0]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#E2E8F0]" />
                  <div className="w-3 h-3 rounded-full bg-[#E2E8F0]" />
                  <div className="w-3 h-3 rounded-full bg-[#E2E8F0]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[#F6F8FA] rounded-full px-4 py-1.5 text-xs text-[#64748B]">
                    lavaleconomique.com
                  </div>
                </div>
              </div>

              {/* Chat widget mockup */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#143B6D] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-[#F6F8FA] rounded-2xl rounded-tl-md px-4 py-3 text-sm text-[#1E293B]">
                    Bonjour! Comment puis-je vous aider aujourd&apos;hui?
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-[#E8F3FB] rounded-2xl rounded-tr-md px-4 py-3 text-sm text-[#143B6D]">
                    Je cherche du financement pour mon entreprise
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#143B6D] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-[#F6F8FA] rounded-2xl rounded-tl-md px-4 py-3 text-sm text-[#1E293B]">
                    Je peux vous orienter. Êtes-vous en démarrage ou en croissance?
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -right-4 top-8 bg-white rounded-xl shadow-lg border border-[#E2E8F0] p-3 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#5B5CE2]/10 flex items-center justify-center">
                  <Database className="w-4 h-4 text-[#5B5CE2]" />
                </div>
                <div>
                  <div className="text-[10px] text-[#64748B]">Dossier existant</div>
                  <div className="text-xs font-semibold text-[#1E293B]">Trouvé</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -left-4 bottom-16 bg-white rounded-xl shadow-lg border border-[#E2E8F0] p-3 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#50B878]/10 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-[#50B878]" />
                </div>
                <div>
                  <div className="text-[10px] text-[#64748B]">Intention détectée</div>
                  <div className="text-xs font-semibold text-[#1E293B]">Financement</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute right-8 -bottom-4 bg-[#143B6D] rounded-xl shadow-lg p-3 z-20"
            >
              <div className="text-center">
                <div className="text-[10px] text-white/70">Proposition projet</div>
                <div className="text-lg font-bold text-white">17 500 $</div>
              </div>
            </motion.div>
          </div>

          {/* Flow schema below */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-8 flex items-center justify-center gap-2 text-[10px] text-[#64748B]"
          >
            <span className="px-2 py-1 bg-[#F6F8FA] rounded-md">Visiteur</span>
            <span>→</span>
            <span className="px-2 py-1 bg-[#E8F3FB] text-[#143B6D] rounded-md font-medium">Agent IA</span>
            <span>→</span>
            <span className="px-2 py-1 bg-[#F6F8FA] rounded-md">Site web</span>
            <span>→</span>
            <span className="px-2 py-1 bg-[#F6F8FA] rounded-md">Base de données</span>
            <span>→</span>
            <span className="px-2 py-1 bg-[#F6F8FA] rounded-md">Dashboard</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#143B6D]/40" />
        </motion.div>
      </motion.div>
    </SlideWrapper>
  )
}

function Badge({ icon, label, variant }: { icon: React.ReactNode; label: string; variant: 'blue' | 'green' | 'indigo' }) {
  const variants = {
    blue: "bg-[#E8F3FB] text-[#143B6D] border-[#143B6D]/10",
    green: "bg-[#50B878]/10 text-[#50B878] border-[#50B878]/20",
    indigo: "bg-[#5B5CE2]/10 text-[#5B5CE2] border-[#5B5CE2]/20",
  }

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border ${variants[variant]}`}>
      {icon}
      {label}
    </span>
  )
}
