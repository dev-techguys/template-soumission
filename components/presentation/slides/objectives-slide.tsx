import { SlideWrapper } from "../slide-wrapper"
import { AlertTriangle, Clock, MapPin, Zap, Target, Sparkles } from "lucide-react"
import { slides } from "@/lib/proposal-data"

const PROBLEM_ICONS = [Clock, AlertTriangle, MapPin]
const OPPORTUNITY_ICONS = [Zap, Target, Sparkles]

export function ObjectivesSlide() {
  return (
    <SlideWrapper id="objectives" className="bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#1B365D] font-sans font-medium">
            03 / Problématique et opportunités
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1B365D] max-w-3xl leading-tight text-balance">
            Défis actuels et solutions proposées
          </h2>
          <div className="w-16 h-px bg-[#1B365D]" />
          <p className="text-base text-[#64748b] font-sans max-w-2xl leading-relaxed">
            Identifier les points de friction dans le traitement des courriels et les transformer en
            opportunités d{"'"}amélioration grâce à l{"'"}automatisation intelligente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Problems */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-[#1B365D] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              Problématiques identifiées
            </h3>

            <div className="flex flex-col gap-4">
              {slides.problems.items.map((problem, index) => {
                const Icon = PROBLEM_ICONS[index] || AlertTriangle
                return (
                  <div
                    key={problem.title}
                    className="p-6 rounded-xl border border-[#e5e7eb] bg-white hover:border-red-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-red-500" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] tracking-[0.15em] uppercase text-red-500 font-sans font-medium px-2 py-0.5 bg-red-50 rounded-full">
                            {problem.category}
                          </span>
                        </div>
                        <h4 className="font-serif text-lg text-[#1B365D]">{problem.title}</h4>
                        <p className="text-sm text-[#64748b] font-sans leading-relaxed">
                          {problem.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Opportunities */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-[#1B365D] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D4E800]/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#1B365D]" />
              </div>
              Opportunités
            </h3>

            <div className="flex flex-col gap-4">
              {slides.problems.opportunities.map((opportunity, index) => {
                const Icon = OPPORTUNITY_ICONS[index] || Zap
                return (
                  <div
                    key={opportunity.title}
                    className="p-6 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#D4E800]/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#D4E800]/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#1B365D]" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h4 className="font-serif text-lg text-[#1B365D]">{opportunity.title}</h4>
                        <p className="text-sm text-[#64748b] font-sans leading-relaxed">
                          {opportunity.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
