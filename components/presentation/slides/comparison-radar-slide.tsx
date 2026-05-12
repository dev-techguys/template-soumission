"use client"

import { SlideWrapper } from "../slide-wrapper"
import { AnimatedDiv } from "../animated-wrapper"
import { motion } from "framer-motion"

const metrics = [
  { label: "Conversion", labelShort: "Conv.", optionA: 2, optionB: 5 },
  { label: "Scalabilité", labelShort: "Scale", optionA: 2, optionB: 5 },
  { label: "Analytics", labelShort: "Data", optionA: 1, optionB: 4 },
  { label: "Personnalisation", labelShort: "Custom", optionA: 2, optionB: 5 },
  { label: "ROI estimé", labelShort: "ROI", optionA: 2, optionB: 5 },
  { label: "Support", labelShort: "Support", optionA: 3, optionB: 4 },
]

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = (angle - 90) * (Math.PI / 180)
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  }
}

function generatePolygonPoints(values: number[], cx: number, cy: number, maxR: number, maxValue: number) {
  const angleStep = 360 / values.length
  return values
    .map((value, i) => {
      const r = (value / maxValue) * maxR
      const point = polarToCartesian(cx, cy, r, i * angleStep)
      return `${point.x},${point.y}`
    })
    .join(" ")
}

export function ComparisonRadarSlide() {
  const cx = 150
  const cy = 150
  const maxR = 120
  const maxValue = 5
  const levels = [1, 2, 3, 4, 5]
  const angleStep = 360 / metrics.length

  const optionAValues = metrics.map((m) => m.optionA)
  const optionBValues = metrics.map((m) => m.optionB)

  const optionAPoints = generatePolygonPoints(optionAValues, cx, cy, maxR, maxValue)
  const optionBPoints = generatePolygonPoints(optionBValues, cx, cy, maxR, maxValue)

  return (
    <SlideWrapper id="comparison" className="bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <AnimatedDiv delay={0}>
            <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
              04 / Comparatif
            </span>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-white max-w-3xl leading-tight text-balance">
              Pourquoi l&apos;Option B maximise votre ROI
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <div className="w-16 h-px bg-[#ff7000]" />
          </AnimatedDiv>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <AnimatedDiv delay={0.3}>
            <div className="relative flex justify-center">
              <svg viewBox="0 0 300 300" className="w-full max-w-md">
                {/* Background levels */}
                {levels.map((level) => {
                  const r = (level / maxValue) * maxR
                  const points = metrics
                    .map((_, i) => {
                      const point = polarToCartesian(cx, cy, r, i * angleStep)
                      return `${point.x},${point.y}`
                    })
                    .join(" ")
                  return (
                    <polygon
                      key={level}
                      points={points}
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                  )
                })}

                {/* Axis lines */}
                {metrics.map((_, i) => {
                  const point = polarToCartesian(cx, cy, maxR, i * angleStep)
                  return (
                    <line
                      key={i}
                      x1={cx}
                      y1={cy}
                      x2={point.x}
                      y2={point.y}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                  )
                })}

                {/* Option A polygon (orange) */}
                <motion.polygon
                  points={optionAPoints}
                  fill="rgba(255,112,0,0.2)"
                  stroke="#ff7000"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />

                {/* Option B polygon (green) */}
                <motion.polygon
                  points={optionBPoints}
                  fill="rgba(16,185,129,0.2)"
                  stroke="#10B981"
                  strokeWidth="2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />

                {/* Data points Option A */}
                {optionAValues.map((value, i) => {
                  const r = (value / maxValue) * maxR
                  const point = polarToCartesian(cx, cy, r, i * angleStep)
                  return (
                    <motion.circle
                      key={`a-${i}`}
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill="#ff7000"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                    />
                  )
                })}

                {/* Data points Option B */}
                {optionBValues.map((value, i) => {
                  const r = (value / maxValue) * maxR
                  const point = polarToCartesian(cx, cy, r, i * angleStep)
                  return (
                    <motion.circle
                      key={`b-${i}`}
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill="#10B981"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.9 + i * 0.05 }}
                    />
                  )
                })}

                {/* Labels */}
                {metrics.map((metric, i) => {
                  const labelR = maxR + 25
                  const point = polarToCartesian(cx, cy, labelR, i * angleStep)
                  return (
                    <text
                      key={i}
                      x={point.x}
                      y={point.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-white/70 text-[10px] font-sans"
                    >
                      {metric.labelShort}
                    </text>
                  )
                })}
              </svg>
            </div>
          </AnimatedDiv>

          {/* Legend and metrics breakdown */}
          <AnimatedDiv delay={0.4}>
            <div className="space-y-8">
              {/* Legend */}
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#ff7000]" />
                  <span className="text-sm text-white/80 font-sans">Option A — Essentiel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#10B981]" />
                  <span className="text-sm text-white/80 font-sans">Option B — Complet</span>
                </div>
              </div>

              {/* Metrics breakdown */}
              <div className="space-y-4">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-sm text-white/60 font-sans w-32">{metric.label}</span>
                    <div className="flex-1 flex items-center gap-3">
                      {/* Option A bar */}
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#ff7000] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(metric.optionA / maxValue) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-[#ff7000] font-mono w-4">{metric.optionA}</span>
                      {/* Option B bar */}
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#10B981] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(metric.optionB / maxValue) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-[#10B981] font-mono w-4">{metric.optionB}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Summary */}
              <div className="p-4 rounded-xl border border-[#10B981]/30 bg-[#10B981]/10">
                <p className="text-sm text-white/80 font-sans leading-relaxed">
                  <span className="text-[#10B981] font-medium">+150% de couverture fonctionnelle</span> avec l&apos;Option B. 
                  L&apos;investissement supplémentaire se rentabilise en 
                  <span className="text-[#10B981] font-medium"> moins de 3 mois</span> grâce aux analytics avancés et à la personnalisation.
                </p>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </SlideWrapper>
  )
}
