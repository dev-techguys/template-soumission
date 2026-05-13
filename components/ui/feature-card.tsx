"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

// Card with corner decorations
export function FeatureCard({ 
  children, 
  className,
  glowColor = "#0066FF"
}: { 
  children: ReactNode
  className?: string
  glowColor?: string
}) {
  return (
    <div className={cn(
      "group relative bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/[0.08] transition-all duration-500",
      "hover:border-[#0066FF]/30 hover:bg-[#0A0A0F]/90",
      className
    )}>
      <CardDecorator color={glowColor} />
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}08, transparent 40%)`
        }}
      />
      {children}
    </div>
  )
}

// Corner decorations
function CardDecorator({ color = "#0066FF" }: { color?: string }) {
  return (
    <>
      <span 
        className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 transition-colors duration-300"
        style={{ borderColor: color }}
      />
      <span 
        className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 transition-colors duration-300"
        style={{ borderColor: color }}
      />
      <span 
        className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 transition-colors duration-300"
        style={{ borderColor: color }}
      />
      <span 
        className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 transition-colors duration-300"
        style={{ borderColor: color }}
      />
    </>
  )
}

// Card header with icon
export function CardHeading({ 
  icon: Icon, 
  title, 
  description,
  badge
}: { 
  icon: LucideIcon
  title: string
  description: string
  badge?: string
}) {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <span className="text-white/60 flex items-center gap-2 text-sm">
          <Icon className="size-4 text-[#0066FF]" />
          {title}
        </span>
        {badge && (
          <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-[#0066FF]/20 text-[#0066FF] border border-[#0066FF]/30 rounded">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-4 text-xl font-semibold text-white leading-snug">{description}</p>
    </div>
  )
}

// Stat card with animated number
export function StatCard({
  value,
  label,
  suffix = "",
  prefix = ""
}: {
  value: string
  label: string
  suffix?: string
  prefix?: string
}) {
  return (
    <FeatureCard className="p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {prefix}<span className="text-[#0066FF]">{value}</span>{suffix}
      </div>
      <div className="text-white/60 text-sm">{label}</div>
    </FeatureCard>
  )
}

// Option card with checkbox
export function OptionCard({
  icon: Icon,
  title,
  description,
  price,
  hours,
  isSelected,
  onToggle,
  isRecommended
}: {
  icon: LucideIcon
  title: string
  description: string
  price: string
  hours: string
  isSelected: boolean
  onToggle: () => void
  isRecommended?: boolean
}) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "group relative w-full text-left bg-[#0A0A0F]/80 backdrop-blur-xl border transition-all duration-300",
        isSelected 
          ? "border-[#0066FF]/50 bg-[#0066FF]/5" 
          : "border-white/[0.08] hover:border-white/20"
      )}
    >
      <CardDecorator color={isSelected ? "#0066FF" : "#333"} />
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
              isSelected ? "bg-[#0066FF]/20" : "bg-white/5"
            )}>
              <Icon className={cn(
                "w-5 h-5 transition-colors",
                isSelected ? "text-[#0066FF]" : "text-white/60"
              )} />
            </div>
            <div>
              <h4 className="font-medium text-white text-sm">{title}</h4>
              {isRecommended && (
                <span className="text-[10px] text-[#0066FF] uppercase tracking-wider">Recommande</span>
              )}
            </div>
          </div>
          
          {/* Checkbox */}
          <div className={cn(
            "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
            isSelected 
              ? "bg-[#0066FF] border-[#0066FF]" 
              : "border-white/30 group-hover:border-white/50"
          )}>
            {isSelected && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        
        <p className="text-white/50 text-xs mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/40">{hours}</span>
          <span className="text-[#0066FF] font-medium">{price}</span>
        </div>
      </div>
    </button>
  )
}
