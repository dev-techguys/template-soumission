import { SlideWrapper } from "../slide-wrapper"
import { AlertTriangle, Lightbulb } from "lucide-react"
import { branding, slides } from "@/lib/proposal-data"

export function ObjectivesSlide() {
  return (
    <SlideWrapper id="objectives" style={{ backgroundColor: branding.backgroundLight }}>
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span
            className="text-xs tracking-[0.4em] uppercase font-sans font-medium"
            style={{ color: branding.primaryColor }}
          >
            03 / Analyse
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl max-w-3xl leading-tight text-balance"
            style={{ color: branding.textDark }}
          >
            {slides.problems.title}
          </h2>
          <div className="w-16 h-px" style={{ backgroundColor: branding.primaryColor }} />
          <p
            className="text-base font-sans max-w-2xl leading-relaxed"
            style={{ color: branding.textMuted }}
          >
            {slides.problems.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problems column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#fef2f2" }}
              >
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-serif text-xl" style={{ color: branding.textDark }}>
                Problematiques identifiees
              </h3>
            </div>

            {slides.problems.problems.map((problem, index) => (
              <div
                key={problem.title}
                className="p-6 rounded-xl border border-[#e5e7eb] bg-white shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="font-serif text-3xl"
                    style={{ color: `${branding.primaryColor}30` }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-[10px] tracking-[0.15em] uppercase font-sans"
                      style={{ color: branding.textMuted }}
                    >
                      {problem.category}
                    </span>
                    <h4 className="font-serif text-lg" style={{ color: branding.textDark }}>
                      {problem.title}
                    </h4>
                    <p
                      className="text-sm font-sans leading-relaxed"
                      style={{ color: branding.textMuted }}
                    >
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Opportunities column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${branding.accentColor}20` }}
              >
                <Lightbulb className="w-5 h-5" style={{ color: branding.primaryColor }} />
              </div>
              <h3 className="font-serif text-xl" style={{ color: branding.textDark }}>
                Opportunites
              </h3>
            </div>

            {slides.problems.opportunities.map((opportunity, index) => (
              <div
                key={opportunity.title}
                className="p-6 rounded-xl border shadow-sm"
                style={{
                  borderColor: `${branding.primaryColor}20`,
                  backgroundColor: `${branding.primaryColor}05`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: branding.accentColor }}
                  >
                    <span className="text-sm font-sans font-bold" style={{ color: branding.primaryColor }}>
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-serif text-lg" style={{ color: branding.textDark }}>
                      {opportunity.title}
                    </h4>
                    <p
                      className="text-sm font-sans leading-relaxed"
                      style={{ color: branding.textMuted }}
                    >
                      {opportunity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
