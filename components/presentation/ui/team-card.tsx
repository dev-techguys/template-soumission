"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

interface TeamCardProps {
  name: string
  role: string
  responsibility: string
  delay?: number
}

export function TeamCard({ name, role, responsibility, delay = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-white rounded-xl p-5 border border-[#E2E8F0] text-center"
    >
      <div className="w-16 h-16 bg-[#E8F3FB] rounded-full flex items-center justify-center mx-auto mb-4">
        <User className="w-8 h-8 text-[#143B6D]" />
      </div>
      <h4 className="font-bold text-[#1E293B] mb-1">{name}</h4>
      <p className="text-sm text-[#5B5CE2] font-medium mb-2">{role}</p>
      <p className="text-sm text-[#64748B]">{responsibility}</p>
    </motion.div>
  )
}
