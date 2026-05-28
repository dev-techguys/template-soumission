"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface PriorityCardProps {
  icon: LucideIcon
  number: number
  title: string
  description: string
  benefit: string
  delay?: number
}

export function PriorityCard({ icon: Icon, number, title, description, benefit, delay = 0 }: PriorityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 md:p-8 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-[#143B6D] rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="w-8 h-8 bg-[#50B878] rounded-full flex items-center justify-center text-white font-bold text-sm">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#1E293B] mb-3">{title}</h3>
      <p className="text-[#64748B] mb-4 leading-relaxed">{description}</p>
      <div className="inline-block px-3 py-1.5 bg-[#50B878]/10 text-[#50B878] text-sm font-medium rounded-full">
        {benefit}
      </div>
    </motion.div>
  )
}
