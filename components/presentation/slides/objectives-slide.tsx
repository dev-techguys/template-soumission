import { SlideWrapper } from "../slide-wrapper"
import type { Objective } from "@/lib/proposal-data"

interface ObjectivesSlideProps {
  objectives: Objective[]
}

export function ObjectivesSlide({ objectives }: ObjectivesSlideProps) {
  return (
    <SlideWrapper id="objectives" className="bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase font-sans font-medium"
            style={{ color: "var(--color-primary)" }}>
            03 / Objectifs &amp; Problématiques
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-3xl leading-tight text-balance">
            Ce que nous souhaitons accomplir ensemble
          </h2>
          <div className="w-16 h-px" style={{ backgroundColor: "var(--color-primary)" }} />
          <p className="text-base text-[#6b7280] font-sans max-w-2xl leading-relaxed">
            Les objectifs suivants ont été définis à partir de nos échanges. Chacun est accompagné des
            problématiques actuelles qui en freinent l&apos;atteinte.
          </p>
        </div>

        {/* Objectives list */}
        <div className="flex flex-col gap-6">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl border border-[#e5e7eb] bg-white hover:shadow-lg transition-all duration-500"
              style={{
                borderLeftWidth: "3px",
                borderLeftColor: "var(--color-primary)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-serif text-4xl"
                    style={{ color: "color-mix(in srgb, var(--color-primary) 25%, transparent)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Objective title */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium"
                    style={{ color: "var(--color-primary)" }}>
                    Objectif
                  </span>
                  <h3 className="font-serif text-xl text-[#2d3748] leading-snug">
                    {obj.title}
                  </h3>
                </div>

                {/* Problems */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans font-medium">
                    Problématiques identifiées
                  </span>
                  <div className="flex flex-col gap-3">
                    {obj.problems.map((problem, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        <p className="text-sm text-[#6b7280] font-sans leading-relaxed">
                          {problem}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
