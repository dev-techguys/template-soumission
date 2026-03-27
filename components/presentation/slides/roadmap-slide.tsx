"use client"

import { SlideWrapper } from "../slide-wrapper"
import { useEffect, useRef, useState } from "react"
import { CheckSquare } from "lucide-react"
import type { RoadmapData } from "@/lib/proposal-data"

interface RoadmapSlideProps {
  roadmap: RoadmapData
}

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: RoadmapData["months"][0]["services"][0]
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`p-5 rounded-xl border border-[#e5e7eb] bg-white hover:shadow-md transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h4 className="font-serif text-base text-[#2d3748] mb-3">{service.title}</h4>
      {service.focusItems && service.focusItems.length > 0 && (
        <div className="flex flex-col gap-2">
          {service.focusItems.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <CheckSquare
                className="w-3.5 h-3.5 shrink-0 mt-0.5"
                style={{ color: "var(--color-primary)" }}
              />
              <span className="text-xs text-[#4b5563] font-sans leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function RoadmapSlide({ roadmap }: RoadmapSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleMonths, setVisibleMonths] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-month"))
          if (entry.isIntersecting) {
            setVisibleMonths((prev) => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    )

    const container = containerRef.current
    if (container) {
      container.querySelectorAll("[data-month]").forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <SlideWrapper id="roadmap" className="bg-white !min-h-0">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span
            className="text-xs tracking-[0.4em] uppercase font-sans font-medium"
            style={{ color: "var(--color-primary)" }}
          >
            04 / Feuille de route proposée
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-3xl leading-tight text-balance">
            La trajectoire que nous vous proposons
          </h2>
          <div className="w-16 h-px" style={{ backgroundColor: "var(--color-primary)" }} />
          <p className="text-base text-[#6b7280] font-sans max-w-3xl leading-relaxed">
            {roadmap.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="flex flex-col gap-0">
          {roadmap.months.map((month, monthIdx) => (
            <div
              key={monthIdx}
              data-month={monthIdx}
              className={`relative pb-12 transition-all duration-700 ${
                visibleMonths.has(monthIdx) ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${monthIdx * 120}ms` }}
            >
              <div className="flex gap-6 md:gap-10">
                {/* Left: month label + vertical line */}
                <div className="flex flex-col items-center shrink-0 w-24">
                  <div
                    className="px-4 py-2 rounded-lg text-white text-xs font-sans font-semibold tracking-wide uppercase text-center w-full"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    {month.label}
                  </div>
                  {monthIdx < roadmap.months.length - 1 && (
                    <div
                      className="w-px flex-1 mt-3 min-h-[2rem]"
                      style={{
                        background: `linear-gradient(to bottom, var(--color-primary), color-mix(in srgb, var(--color-primary) 20%, transparent))`,
                      }}
                    />
                  )}
                </div>

                {/* Right: services */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {month.services.map((service, sIdx) => (
                    <ServiceCard
                      key={service.serviceId}
                      service={service}
                      index={sIdx}
                      isVisible={visibleMonths.has(monthIdx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="mt-4 p-5 rounded-xl border text-sm font-sans text-[#6b7280] leading-relaxed"
          style={{
            borderColor: "color-mix(in srgb, var(--color-primary) 20%, transparent)",
            backgroundColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)",
          }}
        >
          Les services présentés sont tirés de l&apos;offre complète détaillée en annexe. Les sous-points
          peuvent être ajustés en fonction de l&apos;évolution de vos besoins au fil du mandat.
        </div>
      </div>
    </SlideWrapper>
  )
}
