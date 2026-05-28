"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ModuleCardProps {
  icon: LucideIcon
  title: string
  deliverable: string
  benefit: string
  delay?: number
}

export function ModuleCard({ icon: Icon, title, deliverable, benefit, delay = 0 }: ModuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-white rounded-xl p-5 border border-[#E2E8F0] hover:border-[#143B6D]/30 transition-colors"
    >
      <div className="w-10 h-10 bg-[#E8F3FB] rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-[#143B6D]" />
      </div>
      <h4 className="font-bold text-[#1E293B] mb-2">{title}</h4>
      <p className="text-sm text-[#64748B] mb-3 leading-relaxed">{deliverable}</p>
      <p className="text-sm text-[#50B878] font-medium">{benefit}</p>
    </motion.div>
  )
}
