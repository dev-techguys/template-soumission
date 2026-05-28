"use client"

import { motion } from "framer-motion"
import { SlideWrapper } from "../slide-wrapper"
import { SectionHeader } from "../ui/section-header"

const phases = [
  {
    number: 1,
    name: "Cadrage et architecture",
    startWeek: 1,
    endWeek: 2,
    color: "#143B6D",
    deliverables: ["Objectifs validés", "Accès identifiés"]
  },
  {
    number: 2,
    name: "Agent + Navigation site",
    startWeek: 2,
    endWeek: 5,
    color: "#1E5A9C",
    deliverables: ["Widget agent IA", "Navigation complète"]
  },
  {
    number: 3,
    name: "Connexion base de données",
    startWeek: 4,
    endWeek: 7,
    color: "#50B878",
    deliverables: ["Connexion contrôlée", "Recherche de dossier"]
  },
  {
    number: 4,
    name: "Dashboard intention",
    startWeek: 6,
    endWeek: 8,
    color: "#5B5CE2",
    deliverables: ["Métriques clés", "Intentions détectées"]
  },
  {
    number: 5,
    name: "Tests et déploiement",
    startWeek: 8,
    endWeek: 10,
    color: "#F59E0B",
    deliverables: ["Tests réels", "Formation équipe"]
  }
]

const totalWeeks = 10

export function PlanSlide() {
  return (
    <SlideWrapper id="plan">
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <SectionHeader
            title="Plan de réalisation"
            subtitle="Un déploiement progressif sur 10 semaines pour limiter le risque et valider la valeur rapidement."
          />

          {/* Elegant Gantt Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-2xl p-8 shadow-sm border border-[#E2E8F0]"
          >
            {/* Week headers */}
            <div className="flex mb-6">
              <div className="w-56 shrink-0" />
              <div className="flex-1 flex">
                {Array.from({ length: totalWeeks }, (_, i) => (
                  <div
                    key={i}
                    className="flex-1 text-center text-xs font-medium text-[#64748B]"
                  >
                    S{i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Gantt rows */}
            <div className="space-y-4">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center group"
                >
                  {/* Phase name */}
                  <div className="w-56 shrink-0 pr-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-sm"
                        style={{ backgroundColor: phase.color }}
                      >
                        {phase.number}
                      </div>
                      <div>
                        <p className="font-semibold text-[#1E293B] text-sm">{phase.name}</p>
                        <p className="text-xs text-[#64748B]">Sem. {phase.startWeek}-{phase.endWeek}</p>
                      </div>
                    </div>
                  </div>

                  {/* Gantt bar */}
                  <div className="flex-1 flex relative h-10">
                    {/* Background grid */}
                    <div className="absolute inset-0 flex">
                      {Array.from({ length: totalWeeks }, (_, i) => (
                        <div
                          key={i}
                          className="flex-1 border-l border-[#E2E8F0] first:border-l-0"
                        />
                      ))}
                    </div>
                    
                    {/* Progress bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                      className="absolute h-8 top-1 rounded-lg shadow-sm flex items-center px-3 origin-left"
                      style={{
                        left: `${((phase.startWeek - 1) / totalWeeks) * 100}%`,
                        width: `${((phase.endWeek - phase.startWeek + 1) / totalWeeks) * 100}%`,
                        backgroundColor: phase.color,
                      }}
                    >
                      <span className="text-xs text-white font-medium truncate opacity-90">
                        {phase.deliverables[0]}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Legend / Milestones */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { week: 2, label: "Cadrage terminé", color: "#143B6D" },
                  { week: 5, label: "Agent opérationnel", color: "#1E5A9C" },
                  { week: 7, label: "Base connectée", color: "#50B878" },
                  { week: 10, label: "Mise en production", color: "#F59E0B" },
                ].map((milestone, i) => (
                  <motion.div
                    key={milestone.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: milestone.color }}
                    />
                    <span className="text-xs text-[#64748B]">
                      <span className="font-semibold text-[#1E293B]">S{milestone.week}</span> — {milestone.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center text-sm text-[#64748B] mt-8"
          >
            Le calendrier final dépendra des accès techniques, de la base de données et de la validation des contenus.
          </motion.p>
        </div>
      </div>
    </SlideWrapper>
  )
}
