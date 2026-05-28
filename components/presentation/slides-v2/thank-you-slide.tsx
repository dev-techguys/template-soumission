"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import { AnnexAccordion } from "../ui/annex-accordion"
import Image from "next/image"

export function ThankYouSlide() {
  return (
    <SlideWrapper id="thank-you">
      <div className="min-h-screen bg-gradient-to-br from-[#143B6D] via-[#0f2d52] to-[#0a1f3a] flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-16 relative overflow-hidden">
        
        {/* Background decorations - reduced size on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-48 md:w-96 h-48 md:h-96 bg-[#50B878]/20 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-10 w-40 md:w-80 h-40 md:h-80 bg-white/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#50B878]/10 rounded-full blur-3xl" 
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          {/* Thank you message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6">
              Merci
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-10 md:mb-16 max-w-2xl mx-auto px-2">
              Nous sommes impatients de collaborer avec Laval Économique pour transformer l&apos;expérience de vos visiteurs.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            {/* Email */}
            <a 
              href="mailto:car@techguys.consulting"
              className="group flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-11 md:w-14 h-11 md:h-14 bg-[#50B878] rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail className="w-5 md:w-7 h-5 md:h-7 text-white" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-white/50 text-xs md:text-sm mb-0.5 md:mb-1">Courriel</p>
                <p className="text-white text-sm md:text-lg font-medium truncate">car@techguys.consulting</p>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:514-619-5579"
              className="group flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-11 md:w-14 h-11 md:h-14 bg-[#50B878] rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Phone className="w-5 md:w-7 h-5 md:h-7 text-white" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-white/50 text-xs md:text-sm mb-0.5 md:mb-1">Téléphone</p>
                <p className="text-white text-sm md:text-lg font-medium">514-619-5579</p>
              </div>
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="https://omnitech.zohobookings.ca/#/9263000000061018"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-10 py-4 md:py-5 bg-[#50B878] text-white text-base md:text-xl font-bold rounded-xl md:rounded-2xl hover:bg-[#429a64] transition-all duration-300 shadow-lg shadow-[#50B878]/30 hover:shadow-xl hover:shadow-[#50B878]/40 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
              <span>Prendre rendez-vous</span>
              <ArrowRight className="w-5 md:w-6 h-5 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
          </motion.div>

          {/* Logo footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10"
          >
            <Image
              src="/images/omnigo-techguys-dark.png"
              alt="OMNIGO x TechGuys"
              width={180}
              height={32}
              className="mx-auto w-[120px] md:w-[180px] h-auto"
            />
          </motion.div>

          {/* Annexes */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-12 md:mt-16 w-full max-w-4xl"
          >
            <h4 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 text-center">Annexes</h4>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10">
              <AnnexAccordion />
            </div>
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
