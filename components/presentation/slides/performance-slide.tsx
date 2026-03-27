"use client"

import { SlideWrapper } from "../slide-wrapper"

function PerformanceRing({ score, label, color }: { score: number; label: string; color: string }) {
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="6" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-2xl text-[#2d3748]">{score}</span>
        </div>
      </div>
      <span className="text-[10px] tracking-[0.1em] uppercase text-[#6b7280] font-sans text-center">{label}</span>
    </div>
  )
}

function CoreWebVitalCard({ label, value, status, description }: { label: string; value: string; status: "good" | "warning" | "poor"; description: string }) {
  const statusColors = {
    good: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600", dot: "bg-emerald-500" },
    warning: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-600", dot: "bg-orange-500" },
    poor: { bg: "bg-red-50", border: "border-red-200", text: "text-red-600", dot: "bg-red-500" },
  }
  const colors = statusColors[status]

  return (
    <div className={`p-4 rounded-lg border ${colors.border} ${colors.bg}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-[#2d3748]">{label}</span>
        <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
      </div>
      <div className={`font-serif text-2xl ${colors.text} mb-1`}>{value}</div>
      <span className="text-[10px] text-[#6b7280]">{description}</span>
    </div>
  )
}

export function PerformanceSlide() {
  return (
    <SlideWrapper id="performance" className="bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-8 py-16 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
            07 / Performance web
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d3748] max-w-3xl leading-tight text-balance">
            Audit de performance PageSpeed Insights
          </h2>
          <div className="w-16 h-px bg-[#387B84]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column - Lighthouse Scores */}
          <div className="p-6 rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#6b7280] font-sans font-medium">
                Scores Lighthouse — Mobile
              </span>
              <span className="px-2 py-0.5 rounded text-[9px] bg-red-100 text-red-600 font-medium">Core Web Vitals : Échec</span>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <PerformanceRing score={42} label="Performance" color="#ef4444" />
              <PerformanceRing score={87} label="Accessibilité" color="#22c55e" />
              <PerformanceRing score={77} label="Bonnes pratiques" color="#F6A878" />
              <PerformanceRing score={92} label="SEO" color="#22c55e" />
            </div>

            <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#e5e7eb]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-[9px] text-[#6b7280] font-sans">0-49</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F6A878]" />
                <span className="text-[9px] text-[#6b7280] font-sans">50-89</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[9px] text-[#6b7280] font-sans">90-100</span>
              </div>
            </div>
          </div>

          {/* Right column - Core Web Vitals */}
          <div className="p-6 rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
            <span className="text-[10px] tracking-[0.15em] uppercase text-[#6b7280] font-sans font-medium mb-6 block">
              Core Web Vitals — Métriques détaillées
            </span>

            <div className="grid grid-cols-2 gap-3">
              <CoreWebVitalCard 
                label="LCP (Largest Contentful Paint)" 
                value="3,5 s" 
                status="warning"
                description="Temps d'affichage du plus grand élément"
              />
              <CoreWebVitalCard 
                label="INP (Interaction to Next Paint)" 
                value="144 ms" 
                status="good"
                description="Réactivité aux interactions"
              />
              <CoreWebVitalCard 
                label="CLS (Cumulative Layout Shift)" 
                value="0,1" 
                status="warning"
                description="Stabilité visuelle de la page"
              />
              <CoreWebVitalCard 
                label="FCP (First Contentful Paint)" 
                value="2,4 s" 
                status="warning"
                description="Premier affichage de contenu"
              />
              <CoreWebVitalCard 
                label="TTFB (Time to First Byte)" 
                value="1,5 s" 
                status="warning"
                description="Temps de réponse serveur"
              />
              <div className="p-4 rounded-lg border border-[#387B84]/20 bg-[#387B84]/5">
                <span className="text-xs font-medium text-[#387B84] block mb-2">Objectif Next.js</span>
                <div className="font-serif text-xl text-[#387B84]">Score 90+</div>
                <span className="text-[10px] text-[#6b7280]">Performance optimale garantie</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact summary */}
        <div className="mt-6 p-5 rounded-xl border border-[#F6A878]/40 bg-[#F6A878]/10">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#F6A878]/20 flex items-center justify-center shrink-0">
              <span className="font-serif text-sm text-[#c97a4a]">!</span>
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-sm text-[#2d3748] mb-1">Impact sur les conversions</h3>
              <p className="text-xs text-[#6b7280] font-sans leading-relaxed">
                Avec un score de <span className="text-red-600 font-medium">42/100</span> et un LCP de 3,5s, le site perd des conversions. 
                Chaque seconde de délai peut réduire les conversions de 7%. La migration vers Next.js avec Vercel permettra d{"'"}atteindre 
                des scores de <span className="text-emerald-600 font-medium">90+</span> et un LCP sous 2,5s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
