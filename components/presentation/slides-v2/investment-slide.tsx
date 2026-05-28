"use client"

import { motion } from "framer-motion"
import { Database, Compass, BarChart3 } from "lucide-react"
import { SlideWrapper } from "../slide-wrapper"
import { SectionHeader } from "../ui/section-header"
import { InvestmentTable } from "../ui/investment-table"

export function InvestmentSlide() {
  return (
    <SlideWrapper id="investment">
      <div className="min-h-screen bg-[#F6F8FA] flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto w-full">
          <SectionHeader
            badge="SLIDE 9"
            title="Investissement"
          />

          {/* Main price */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-8"
          >
            <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#143B6D]">17 500 $</span>
            <span className="text-lg sm:text-xl md:text-2xl text-[#64748B] ml-1 md:ml-2">+ taxes</span>
          </motion.div>

          {/* Investment table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 md:mb-10"
          >
            <InvestmentTable />
          </motion.div>

          {/* Value blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4"
          >
            {[
              { icon: Database, label: "Connecter", desc: "Base de données", color: "#143B6D" },
              { icon: Compass, label: "Guider", desc: "Site complet", color: "#5B5CE2" },
              { icon: BarChart3, label: "Mesurer", desc: "Tableau de bord d'intention", color: "#50B878" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-4 md:p-5 border border-[#E2E8F0] text-center"
              >
                <div 
                  className="w-10 md:w-12 h-10 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-5 md:w-6 h-5 md:h-6" style={{ color: item.color }} />
                </div>
                <h4 className="font-bold text-[#1E293B] text-sm md:text-base">{item.label}</h4>
                <p className="text-xs md:text-sm text-[#64748B]">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-xs md:text-sm text-[#64748B] mt-6 md:mt-8 px-2"
          >
            Les intégrations dépendantes de systèmes externes seront validées selon les accès et contraintes de sécurité.
          </motion.p>
        </div>
      </div>
    </SlideWrapper>
  )
}
