"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function BenefitCard({ icon: Icon, title, description, delay = 0 }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-[#F6F8FA] rounded-xl p-5 hover:bg-[#E8F3FB] transition-colors"
    >
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 shadow-sm">
        <Icon className="w-5 h-5 text-[#5B5CE2]" />
      </div>
      <h4 className="font-semibold text-[#1E293B] mb-2">{title}</h4>
      <p className="text-sm text-[#64748B] leading-relaxed">{description}</p>
    </motion.div>
  )
}
