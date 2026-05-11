"use client"

import { SlideWrapper } from "../slide-wrapper"
import { useEffect, useRef, useState } from "react"
import { CheckSquare, Rocket, Sparkles } from "lucide-react"

// Timeline data for Gantt chart - 8 weeks (2 months)
const GANTT_TASKS_A = [
  { id: "validation", name: "Validation contenu", hours: "4h", week: 1, duration: 1, color: "#ff7000" },
  { id: "edge", name: "Edge Function Groq", hours: "3h", week: 1, duration: 1, color: "#ff7000" },
  { id: "widget", name: "Widget UI complet", hours: "3h", week: 2, duration: 1, color: "#ff7000" },
  { id: "routing", name: "Routing + Messages", hours: "2h", week: 2, duration: 1, color: "#ff7000" },
  { id: "analytics", name: "Analytics Supabase", hours: "2h", week: 3, duration: 1, color: "#ff7000" },
  { id: "dashboard", name: "Dashboard admin", hours: "2h", week: 3, duration: 1, color: "#ff7000" },
  { id: "tests", name: "Tests + Deploy", hours: "2h", week: 4, duration: 1, color: "#10B981" },
]

const GANTT_TASKS_B_EXTRAS = [
  { id: "skills", name: "Skills domaine", hours: "4h", week: 3, duration: 1, color: "#10B981" },
  { id: "qualif", name: "Qualification adaptative", hours: "4h", week: 4, duration: 1, color: "#10B981" },
  { id: "notif", name: "Routing sales + Notif", hours: "3h", week: 5, duration: 1, color: "#10B981" },
  { id: "trigger", name: "Trigger proactif", hours: "2h", week: 5, duration: 1, color: "#10B981" },
  { id: "capture", name: "Capture lead", hours: "3h", week: 6, duration: 1, color: "#10B981" },
  { id: "analytics2", name: "Analytics avances", hours: "2h", week: 6, duration: 1, color: "#10B981" },
  { id: "dashboard2", name: "Dashboard avance", hours: "3h", week: 7, duration: 1, color: "#10B981" },
  { id: "polish", name: "Framer + Tests", hours: "2h", week: 8, duration: 1, color: "#10B981" },
]

const WEEKS = [
  { num: 1, label: "S1" },
  { num: 2, label: "S2" },
  { num: 3, label: "S3" },
  { num: 4, label: "S4" },
  { num: 5, label: "S5" },
  { num: 6, label: "S6" },
  { num: 7, label: "S7" },
  { num: 8, label: "S8" },
]

const MONTHS = [
  { name: "Mois 1", weeks: [1, 2, 3, 4] },
  { name: "Mois 2", weeks: [5, 6, 7, 8] },
]

function GanttChart({ tasks, showExtras = false }: { tasks: typeof GANTT_TASKS_A; showExtras?: boolean }) {
  const allTasks = showExtras ? [...GANTT_TASKS_A, ...GANTT_TASKS_B_EXTRAS] : tasks

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px]">
        {/* Month headers */}
        <div className="flex border-b border-[#e5e7eb]">
          <div className="w-40 shrink-0" />
          {MONTHS.map((month) => (
            <div
              key={month.name}
              className="flex-1 text-center py-2 text-sm font-sans font-medium text-[#0f172a] border-l border-[#e5e7eb]"
            >
              {month.name}
            </div>
          ))}
        </div>

        {/* Week headers */}
        <div className="flex border-b border-[#e5e7eb] bg-[#f8fafc]">
          <div className="w-40 shrink-0 px-3 py-2 text-[10px] tracking-[0.1em] uppercase text-[#64748b] font-sans">
            Jalon
          </div>
          {WEEKS.map((week) => (
            <div
              key={week.num}
              className="flex-1 text-center py-2 text-xs font-sans text-[#64748b] border-l border-[#e5e7eb]"
            >
              {week.label}
            </div>
          ))}
        </div>

        {/* Task rows */}
        {allTasks.map((task, index) => (
          <div
            key={task.id}
            className={`flex border-b border-[#e5e7eb] hover:bg-[#f8fafc] transition-colors ${
              index >= GANTT_TASKS_A.length ? "bg-[#10B981]/5" : ""
            }`}
          >
            {/* Task name */}
            <div className="w-40 shrink-0 px-3 py-3 flex items-center gap-2">
              <span className="text-xs font-sans text-[#0f172a] truncate">{task.name}</span>
              <span className="text-[10px] font-sans text-[#64748b] shrink-0">({task.hours})</span>
            </div>

            {/* Week cells with bar */}
            {WEEKS.map((week) => (
              <div
                key={week.num}
                className="flex-1 py-3 px-1 border-l border-[#e5e7eb] flex items-center"
              >
                {week.num >= task.week && week.num < task.week + task.duration && (
                  <div
                    className="h-6 w-full rounded-md flex items-center justify-center"
                    style={{ backgroundColor: task.color }}
                  >
                    <span className="text-[10px] font-sans text-white font-medium truncate px-1">
                      {task.hours}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Legend */}
        <div className="flex items-center gap-6 mt-4 px-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#ff7000]" />
            <span className="text-xs font-sans text-[#64748b]">Option A (Essentiel)</span>
          </div>
          {showExtras && (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#10B981]" />
              <span className="text-xs font-sans text-[#64748b]">Option B (Extras)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const TIMELINE_A = [
  {
    sprint: "Sprint 0",
    title: "Validation contenu",
    effort: "1/2 jour",
    actions: [
      "Reunion de validation avec Pierre (arbre de scenarios, wording EN/FR, emails de contact)",
      "Confirmation des URLs de destination par service",
      "Validation des seuils et comportements souhaites",
    ],
  },
  {
    sprint: "Sprint 1-2",
    title: "Core IA + Widget UI",
    effort: "6h",
    actions: [
      "Edge Function Groq avec streaming et rate limiting",
      "System prompt dynamique adapte a la page courante",
      "Widget UI complet (ChatWidget, ChatBubble, ChatPanel, ChatMessage, QualifyChips, ChatInput)",
    ],
  },
  {
    sprint: "Sprint 3-4",
    title: "Routing + Analytics",
    effort: "4h",
    actions: [
      "Logique resolveDestination() et messages contextuels",
      "Fallback \"Talk to a human\" differencie par departement",
      "Analytics Supabase (logging anonymise, table agent_events)",
    ],
  },
  {
    sprint: "Sprint 5-6",
    title: "Dashboard + Finalisation",
    effort: "4h",
    actions: [
      "Dashboard /admin/agent-stats avec middleware protection",
      "Integration bilingue complete, CSS animations",
      "Tests mobile iOS/Android + PageSpeed validation",
    ],
  },
]

const TIMELINE_B_EXTRAS = [
  {
    sprint: "Sprint 3-4",
    title: "Qualification adaptative",
    effort: "7h",
    actions: [
      "Detection du profil visiteur (acheteur expert, prospect, chauffeur)",
      "Score d'intention en temps reel (0-7)",
      "Questions de qualification approfondies par service (Reefer, Cross-border, etc.)",
      "Routing direct vers sales + notification email (Resend)",
    ],
  },
  {
    sprint: "Sprint 5-6",
    title: "Capture + Trigger",
    effort: "5h",
    actions: [
      "Micro-capture de lead dans le chat (prenom, email, entreprise)",
      "Pre-remplissage du formulaire de devis via URL params",
      "Trigger proactif (30s sur page service, 60% scroll home)",
      "Persistance de session inter-pages",
    ],
  },
  {
    sprint: "Sprint 7-9",
    title: "Dashboard avance + Polish",
    effort: "7h",
    actions: [
      "Dashboard avance avec funnel de conversion",
      "Top questions categorisees, exports",
      "Animations Framer Motion premium",
      "Tests complets et deploiement production",
    ],
  },
]

function SprintCard({
  sprint,
  index,
  isVisible,
  isLast,
}: {
  sprint: (typeof TIMELINE_A)[0]
  index: number
  isVisible: boolean
  isLast: boolean
}) {
  return (
    <div
      className={`relative pb-8 md:pb-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-5 md:gap-8">
        {/* Left: number circle + vertical line */}
        <div className="flex flex-col items-center shrink-0">
          <div
            className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
              isVisible
                ? "border-[#ff7000] bg-[#ff7000]/10 shadow-[0_0_20px_rgba(255,112,0,0.15)]"
                : "border-[#e5e7eb] bg-white"
            }`}
          >
            <span className="font-serif text-lg md:text-xl text-[#ff7000] font-semibold">
              {index + 1}
            </span>
          </div>
          {!isLast && (
            <div className="w-px flex-1 bg-[#e5e7eb] relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 w-full bg-gradient-to-b from-[#ff7000]/60 to-[#ff7000]/10 transition-all duration-1000 ease-out ${
                  isVisible ? "h-full" : "h-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              />
            </div>
          )}
        </div>

        {/* Right: card */}
        <div className="flex-1">
          <div className="rounded-xl border border-[#e5e7eb] bg-white hover:border-[#ff7000]/30 hover:shadow-lg transition-all duration-500 overflow-hidden">
            {/* Card header */}
            <div className="px-5 pt-5 pb-3 md:px-7 md:pt-6 md:pb-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#ff7000] font-sans font-medium">
                    {sprint.sprint}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-[#0f172a] leading-tight">
                    {sprint.title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[10px] font-sans font-medium text-[#10B981]">
                  {sprint.effort}
                </span>
              </div>
            </div>

            {/* Actions list */}
            <div className="px-5 pb-5 md:px-7 md:pb-6 flex flex-col gap-2.5">
              {sprint.actions.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3.5 md:p-4 rounded-xl bg-[#f8fafc] border border-[#e5e7eb] hover:border-[#d1d5db] transition-colors"
                >
                  <div className="shrink-0 mt-0.5">
                    <CheckSquare className="w-4 h-4 text-[#ff7000]/50" />
                  </div>
                  <span className="text-sm font-sans text-[#0f172a]/80 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function RoadmapSlide() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    )

    const container = containerRef.current
    if (container) {
      const cards = container.querySelectorAll("[data-index]")
      cards.forEach((card) => observer.observe(card))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <SlideWrapper id="roadmap" className="bg-[#f8fafc] !min-h-0">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20 w-full">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-14">
          <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
            04 / Feuille de route
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
            Plan de developpement
          </h2>
          <div className="w-16 h-px bg-[#ff7000]" />
          <p className="text-base text-[#64748b] font-sans max-w-2xl leading-relaxed">
            Un plan de developpement structure sur 2 mois, avec validation client a chaque etape cle.
          </p>
        </div>

        {/* Gantt Chart Timeline */}
        <div className="mb-16 p-6 rounded-xl border border-[#e5e7eb] bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#ff7000]/10 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-[#ff7000]" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#0f172a]">Timeline sur 2 mois</h3>
              <p className="text-sm text-[#64748b] font-sans">Vue calendrier hebdomadaire — Option A + B</p>
            </div>
          </div>
          <GanttChart tasks={GANTT_TASKS_A} showExtras={true} />
        </div>

        {/* Option A Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#ff7000]/10 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-[#ff7000]" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#0f172a]">Option A — Essentiel</h3>
              <p className="text-sm text-[#64748b] font-sans">14-16h de developpement - 2-3 semaines</p>
            </div>
          </div>

          <div ref={containerRef} className="relative">
            {TIMELINE_A.map((sprint, localIndex) => (
              <div key={sprint.title} data-index={localIndex}>
                <SprintCard
                  sprint={sprint}
                  index={localIndex}
                  isVisible={visibleCards.has(localIndex)}
                  isLast={localIndex === TIMELINE_A.length - 1}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Option B Extras */}
        <div className="p-6 rounded-xl border border-[#10B981]/30 bg-[#10B981]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#0f172a]">Option B — Sprints additionnels</h3>
              <p className="text-sm text-[#64748b] font-sans">+13-14h supplementaires - 5-7 semaines total</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TIMELINE_B_EXTRAS.map((sprint) => (
              <div key={sprint.sprint} className="p-4 rounded-lg bg-white border border-[#e5e7eb]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#10B981] font-sans font-medium">
                    {sprint.sprint}
                  </span>
                  <span className="text-[10px] text-[#64748b] font-sans">{sprint.effort}</span>
                </div>
                <h4 className="font-serif text-base text-[#0f172a] mb-2">{sprint.title}</h4>
                <ul className="flex flex-col gap-1">
                  {sprint.actions.slice(0, 3).map((action, i) => (
                    <li key={i} className="text-xs text-[#64748b] font-sans flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                      {action}
                    </li>
                  ))}
                  {sprint.actions.length > 3 && (
                    <li className="text-xs text-[#10B981] font-sans">+{sprint.actions.length - 3} autres...</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
