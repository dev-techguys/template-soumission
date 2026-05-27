"use client"

import { motion } from "framer-motion"

interface GanttPhase {
  name: string
  start: number
  end: number
  color: string
}

const phases: GanttPhase[] = [
  { name: "Cadrage", start: 1, end: 2, color: "#143B6D" },
  { name: "Agent + Navigation", start: 2, end: 5, color: "#5B5CE2" },
  { name: "Base de données", start: 4, end: 7, color: "#50B878" },
  { name: "Dashboard", start: 6, end: 8, color: "#143B6D" },
  { name: "Tests + Déploiement", start: 8, end: 10, color: "#64748B" },
]

export function SimpleGantt() {
  const weeks = Array.from({ length: 10 }, (_, i) => i + 1)
  
  return (
    <div className="bg-white rounded-xl p-6 border border-[#E2E8F0]">
      {/* Header */}
      <div className="flex mb-4">
        <div className="w-40 flex-shrink-0" />
        <div className="flex-1 flex">
          {weeks.map((week) => (
            <div key={week} className="flex-1 text-center text-xs text-[#64748B] font-medium">
              S{week}
            </div>
          ))}
        </div>
      </div>
      
      {/* Phases */}
      <div className="space-y-3">
        {phases.map((phase, index) => (
          <motion.div 
            key={phase.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center"
          >
            <div className="w-40 flex-shrink-0 text-sm font-medium text-[#1E293B] pr-4">
              {phase.name}
            </div>
            <div className="flex-1 flex h-8 relative">
              {weeks.map((week) => (
                <div key={week} className="flex-1 border-l border-[#E2E8F0] first:border-l-0" />
              ))}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="absolute h-6 top-1 rounded-full origin-left"
                style={{
                  left: `${((phase.start - 1) / 10) * 100}%`,
                  width: `${((phase.end - phase.start + 1) / 10) * 100}%`,
                  backgroundColor: phase.color,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Legend */}
      <p className="text-xs text-[#64748B] mt-6 text-center">
        Durée totale estimée : 8 à 10 semaines
      </p>
    </div>
  )
}
