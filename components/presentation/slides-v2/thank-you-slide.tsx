"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Calendar, ArrowRight } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import Image from "next/image"

export function ThankYouSlide() {
  return (
    <SlideWrapper id="thank-you">
      <div className="min-h-screen bg-gradient-to-br from-[#143B6D] via-[#0f2d52] to-[#0a1f3a] flex flex-col items-center justify-center px-8 py-16 relative overflow-hidden">
        
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-96 h-96 bg-[#50B878]/20 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#50B878]/10 rounded-full blur-3xl" 
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Thank you message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Merci
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-16 max-w-2xl mx-auto">
              Nous sommes impatients de collaborer avec Laval Économique pour transformer l&apos;expérience de vos visiteurs.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Email */}
            <a 
              href="mailto:car@techguys.consulting"
              className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#50B878] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/50 text-sm mb-1">Courriel</p>
                <p className="text-white text-lg font-medium">car@techguys.consulting</p>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:514-619-5579"
              className="group flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#50B878] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/50 text-sm mb-1">Téléphone</p>
                <p className="text-white text-lg font-medium">514-619-5579</p>
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
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#50B878] text-white text-xl font-bold rounded-2xl hover:bg-[#429a64] transition-all duration-300 shadow-lg shadow-[#50B878]/30 hover:shadow-xl hover:shadow-[#50B878]/40 hover:scale-105"
            >
              <Calendar className="w-6 h-6" />
              Prendre rendez-vous
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Logo footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-20 pt-8 border-t border-white/10"
          >
            <Image
              src="/images/techguys-omnigo-light.png"
              alt="TechGuys x OMNIGO"
              width={180}
              height={32}
              className="mx-auto brightness-0 invert"
            />
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}
