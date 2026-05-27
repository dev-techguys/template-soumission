"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"

export function DemoSlide() {
  const demoUrl = "https://laval-ai.vercel.app/"

  return (
    <SlideWrapper id="demo">
      <div className="min-h-screen bg-gradient-to-br from-[#143B6D] via-[#0f2d52] to-[#0a1f3a] flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#50B878]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#5B5CE2]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Démo de l&apos;agent IA
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Interagissez avec l&apos;agent en temps réel pour voir sa valeur.
            </p>
          </motion.div>

          {/* iframe container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{ height: "70vh" }}
          >
            <iframe
              src={demoUrl}
              title="Agent IA Laval Économique - Démo"
              className="w-full h-full border-0"
              allow="microphone; camera"
            />
          </motion.div>

          {/* Open in new tab button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-6"
          >
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors border border-white/20"
            >
              <ExternalLink className="w-5 h-5" />
              Ouvrir dans un nouvel onglet
            </a>
          </motion.div>

          {/* Key points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            {[
              "L'agent comprend l'intention du visiteur",
              "Il recommande une ressource ou une action",
              "Il envoie les bons signaux au dashboard"
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full"
              >
                <div className="w-2 h-2 bg-[#50B878] rounded-full" />
                <span className="text-white/80 text-sm">{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
