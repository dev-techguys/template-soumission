"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
  delay: number
  duration: number
}

interface DataFlowAnimationProps {
  fromRef?: React.RefObject<HTMLDivElement>
  toRef?: React.RefObject<HTMLDivElement>
  color?: string
  particleCount?: number
  active?: boolean
}

export function DataFlowAnimation({
  color = "#10B981",
  particleCount = 8,
  active = true,
}: DataFlowAnimationProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (!active) return

    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      startX: 10 + Math.random() * 20,
      startY: 50 + (Math.random() - 0.5) * 30,
      endX: 80 + Math.random() * 15,
      endY: 50 + (Math.random() - 0.5) * 40,
      delay: i * 0.15,
      duration: 1.5 + Math.random() * 0.5,
    }))
    setParticles(newParticles)
  }, [active, particleCount])

  if (!active) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Flow path */}
        <motion.path
          d="M 15 50 Q 50 30, 85 50"
          fill="none"
          stroke={color}
          strokeWidth="0.3"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        {/* Particles */}
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            r="1"
            fill={color}
            initial={{ 
              cx: particle.startX, 
              cy: particle.startY,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              cx: [particle.startX, 50, particle.endX],
              cy: [particle.startY, particle.startY - 10, particle.endY],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  )
}

// Glow effect component
export function GlowEffect({ 
  color = "#10B981", 
  intensity = "medium" 
}: { 
  color?: string
  intensity?: "low" | "medium" | "high" 
}) {
  const shadowSize = intensity === "high" ? "0 0 60px" : intensity === "medium" ? "0 0 40px" : "0 0 20px"
  
  return (
    <motion.div
      className="absolute inset-0 rounded-xl pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{
        boxShadow: `${shadowSize} ${color}40, inset 0 0 20px ${color}20`,
      }}
    />
  )
}

// Animated counter component
export function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "",
  duration = 1.5,
  className = ""
}: { 
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      setDisplayValue(Math.floor(progress * value))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return (
    <span className={className}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}

// Connection line with pulse
export function ConnectionLine({
  from,
  to,
  color = "#10B981",
  animated = true
}: {
  from: { x: number; y: number }
  to: { x: number; y: number }
  color?: string
  animated?: boolean
}) {
  const midX = (from.x + to.x) / 2
  const midY = Math.min(from.y, to.y) - 20

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
      <motion.path
        d={`M ${from.x} ${from.y} Q ${midX} ${midY}, ${to.x} ${to.y}`}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {animated && (
        <motion.circle
          r="4"
          fill={color}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            offsetDistance: ["0%", "100%"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            offsetPath: `path('M ${from.x} ${from.y} Q ${midX} ${midY}, ${to.x} ${to.y}')`
          }}
        />
      )}
    </svg>
  )
}

// Brain AI animation
export function BrainAnimation({ size = 60, active = true }: { size?: number; active?: boolean }) {
  if (!active) return null

  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", duration: 0.6 }}
    >
      {/* Outer glow rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-[#10B981]"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5 + i * 0.3, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Brain icon center */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-[#10B981] rounded-full"
        animate={{ 
          boxShadow: [
            "0 0 20px #10B98150",
            "0 0 40px #10B98180",
            "0 0 20px #10B98150"
          ]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-1/2 h-1/2 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      </motion.div>
    </motion.div>
  )
}
