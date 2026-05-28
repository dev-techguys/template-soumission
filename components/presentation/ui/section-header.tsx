"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-8 md:mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-3 md:mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg lg:text-xl text-[#64748B] max-w-3xl mx-auto text-balance px-2">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
