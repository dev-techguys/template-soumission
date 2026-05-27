"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ badge, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-[#143B6D]/10 text-[#143B6D] text-sm font-semibold rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
