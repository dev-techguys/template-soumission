"use client"

import { SlideWrapper } from "../slide-wrapper"
import { useState } from "react"
import { CheckSquare, Rocket, Sparkles } from "lucide-react"

// Timeline data for Gantt chart - 8 weeks (2 months)
// Option A: ~32h total
const GANTT_TASKS_A = [
  { id: "validation", name: "Validation contenu", hours: "4h", week: 1, duration: 1, color: "#ff7000" },
  { id: "edge", name: "Edge Function LLM", hours: "6h", week: 1, duration: 2, color: "#ff7000" },
  { id: "widget", name: "Widget UI complet", hours: "6h", week: 2, duration: 2, color: "#ff7000" },
  { id: "routing", name: "Routing + Messages", hours: "4h", week: 3, duration: 1, color: "#ff7000" },
  { id: "qualif", name: "Qualification adaptative", hours: "4h", week: 3, duration: 1, color: "#ff7000" },
  { id: "trigger", name: "Trigger proactif", hours: "2h", week: 4, duration: 1, color: "#ff7000" },
  { id: "analytics", name: "Analytics Supabase", hours: "3h", week: 4, duration: 1, color: "#ff7000" },
  { id: "dashboard", name: "Dashboard admin", hours: "3h", week: 4, duration: 1, color: "#ff7000" },
]

// Option B: ~62h total (includes Option A tasks + extras)
const GANTT_TASKS_B = [
  { id: "validation", name: "Validation contenu", hours: "4h", week: 1, duration: 1, color: "#ff7000" },
  { id: "edge", name: "Edge Function GPT", hours: "6h", week: 1, duration: 2, color: "#ff7000" },
  { id: "widget", name: "Widget UI complet", hours: "6h", week: 2, duration: 2, color: "#ff7000" },
  { id: "routing", name: "Routing + Messages", hours: "4h", week: 3, duration: 1, color: "#ff7000" },
  { id: "qualif", name: "Qualification adaptative", hours: "4h", week: 3, duration: 1, color: "#ff7000" },
  { id: "trigger", name: "Trigger proactif", hours: "2h", week: 4, duration: 1, color: "#ff7000" },
  { id: "analytics", name: "Analytics Supabase", hours: "3h", week: 4, duration: 1, color: "#ff7000" },
  { id: "dashboard", name: "Dashboard basique", hours: "3h", week: 4, duration: 1, color: "#ff7000" },
  // Premium extras
  { id: "skills", name: "Skills domaine B2B", hours: "6h", week: 5, duration: 1, color: "#10B981" },
  { id: "learning", name: "Apprentissage continu", hours: "6h", week: 5, duration: 2, color: "#10B981" },
  { id: "capture", name: "Capture lead + Routing", hours: "5h", week: 6, duration: 1, color: "#10B981" },
  { id: "notif", name: "Notifications sales", hours: "4h", week: 6, duration: 1, color: "#10B981" },
  { id: "dashboard2", name: "Dashboard avance", hours: "5h", week: 7, duration: 1, color: "#10B981" },
  { id: "framer", name: "Animations Framer", hours: "2h", week: 7, duration: 1, color: "#10B981" },
  { id: "persist", name: "Persistance session", hours: "2h", week: 8, duration: 1, color: "#10B981" },
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

function GanttChart({ tasks, selectedOption }: { tasks: typeof GANTT_TASKS_A; selectedOption: "A" | "B" }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px]">
        {/* Month headers */}
        <div className="flex border-b border-[#e5e7eb]">
          <div className="w-44 shrink-0" />
          {MONTHS.map((month, idx) => (
            <div
              key={month.name}
              className={`flex-1 text-center py-2 text-sm font-sans font-medium text-[#0f172a] border-l border-[#e5e7eb] ${
                selectedOption === "A" && idx === 1 ? "opacity-30" : ""
              }`}
            >
              {month.name}
            </div>
          ))}
        </div>

        {/* Week headers */}
        <div className="flex border-b border-[#e5e7eb] bg-[#f8fafc]">
          <div className="w-44 shrink-0 px-3 py-2 text-[10px] tracking-[0.1em] uppercase text-[#64748b] font-sans">
            Jalon
          </div>
          {WEEKS.map((week) => (
            <div
              key={week.num}
              className={`flex-1 text-center py-2 text-xs font-sans text-[#64748b] border-l border-[#e5e7eb] ${
                selectedOption === "A" && week.num > 4 ? "opacity-30 bg-[#f1f5f9]" : ""
              }`}
            >
              {week.label}
            </div>
          ))}
        </div>

        {/* Task rows */}
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex border-b border-[#e5e7eb] hover:bg-[#f8fafc] transition-colors ${
              task.color === "#10B981" ? "bg-[#10B981]/5" : ""
            }`}
          >
            {/* Task name */}
            <div className="w-44 shrink-0 px-3 py-3 flex items-center gap-2">
              <span className="text-xs font-sans text-[#0f172a] truncate">{task.name}</span>
              <span className="text-[10px] font-sans text-[#64748b] shrink-0">({task.hours})</span>
            </div>

            {/* Week cells with bar */}
            {WEEKS.map((week) => {
              const isInRange = week.num >= task.week && week.num < task.week + task.duration
              const isDisabledWeek = selectedOption === "A" && week.num > 4
              
              return (
                <div
                  key={week.num}
                  className={`flex-1 py-3 px-1 border-l border-[#e5e7eb] flex items-center ${
                    isDisabledWeek ? "bg-[#f1f5f9] opacity-30" : ""
                  }`}
                >
                  {isInRange && (
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
              )
            })}
          </div>
        ))}

        {/* Total hours */}
        <div className="flex border-b border-[#e5e7eb] bg-[#0f172a]/5">
          <div className="w-44 shrink-0 px-3 py-3">
            <span className="text-xs font-sans font-semibold text-[#0f172a]">Total</span>
          </div>
          <div className="flex-1 px-3 py-3 border-l border-[#e5e7eb]">
            <span className="text-xs font-sans font-semibold text-[#0f172a]">
              {selectedOption === "A" ? "~32h" : "~62h"}
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-4 px-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#ff7000]" />
            <span className="text-xs font-sans text-[#64748b]">Core (inclus dans les deux options)</span>
          </div>
          {selectedOption === "B" && (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#10B981]" />
              <span className="text-xs font-sans text-[#64748b]">Premium (Option B uniquement)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Option A details
const OPTION_A_DETAILS = {
  name: "Option A — Essentiel",
  price: "6 400 $",
  timeline: "3-4 semaines",
  hours: "~32h",
  description: "Un agent IA complet et fonctionnel : vrai LLM Llama, qualification adaptative, trigger proactif, analytics et dashboard. Le visiteur est guide, qualifie et route vers la bonne page.",
  sprints: [
    {
      title: "Sprint 1 — Setup & Core",
      effort: "12h",
      items: [
        "Validation contenu avec Pierre (arbre scenarios, wording EN/FR)",
        "Edge Function LLM avec streaming et rate limiting",
        "Widget UI complet (ChatWidget, ChatBubble, ChatPanel)",
      ],
    },
    {
      title: "Sprint 2 — Qualification & Routing",
      effort: "10h",
      items: [
        "Flow de qualification 3 questions avec chips cliquables",
        "Qualification adaptative des prospects",
        "Routing intelligent vers les pages services",
        "Messages contextuels par page",
      ],
    },
    {
      title: "Sprint 3 — Analytics & Finalisation",
      effort: "10h",
      items: [
        "Trigger proactif (temps + scroll)",
        "Analytics Supabase (logging anonymise, conformite Loi 25)",
        "Dashboard admin /admin/agent-stats",
        "Tests mobile iOS/Android + PageSpeed validation",
      ],
    },
  ],
}

// Option B details
const OPTION_B_DETAILS = {
  name: "Option B — Premium",
  price: "12 400 $",
  timeline: "6-8 semaines",
  hours: "~62h",
  description: "L'experience premium : modele GPT de meilleure qualite, apprentissage continu qui s'affine au fil des interactions, capture de leads, notifications sales, et dashboard avance avec funnel.",
  sprints: [
    {
      title: "Sprint 1-2 — Core complet",
      effort: "22h",
      items: [
        "Tout le core de l'Option A",
        "Modele GPT (meilleure qualite que Llama)",
        "Qualification adaptative + trigger proactif",
      ],
    },
    {
      title: "Sprint 3-4 — Intelligence avancee",
      effort: "21h",
      items: [
        "Skills expertise domaine B2B transport",
        "Apprentissage continu — contexte qui s'enrichit",
        "Capture de lead dans le chat (prenom, email, entreprise)",
        "Routing direct vers sales + notification email (Resend)",
      ],
    },
    {
      title: "Sprint 5-6 — Dashboard & Polish",
      effort: "19h",
      items: [
        "Dashboard avance avec funnel de conversion",
        "Pre-remplissage du formulaire de devis",
        "Animations Framer Motion premium",
        "Persistance de session inter-pages",
      ],
    },
  ],
}

export function RoadmapSlide() {
  const [selectedOption, setSelectedOption] = useState<"A" | "B">("A")
  const currentTasks = selectedOption === "A" ? GANTT_TASKS_A : GANTT_TASKS_B
  const currentDetails = selectedOption === "A" ? OPTION_A_DETAILS : OPTION_B_DETAILS

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

        {/* Option Toggle Tabs */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setSelectedOption("A")}
            className={`px-5 py-2.5 rounded-lg font-sans text-sm font-medium transition-all ${
              selectedOption === "A"
                ? "bg-[#ff7000] text-white shadow-lg shadow-[#ff7000]/25"
                : "bg-white border border-[#e5e7eb] text-[#64748b] hover:border-[#ff7000]/50 hover:text-[#ff7000]"
            }`}
          >
            Option A — Essentiel
          </button>
          <button
            onClick={() => setSelectedOption("B")}
            className={`px-5 py-2.5 rounded-lg font-sans text-sm font-medium transition-all ${
              selectedOption === "B"
                ? "bg-[#10B981] text-white shadow-lg shadow-[#10B981]/25"
                : "bg-white border border-[#e5e7eb] text-[#64748b] hover:border-[#10B981]/50 hover:text-[#10B981]"
            }`}
          >
            Option B — Premium
          </button>
        </div>

        {/* Gantt Chart Timeline */}
        <div className="mb-12 p-6 rounded-xl border border-[#e5e7eb] bg-white">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                selectedOption === "A" ? "bg-[#ff7000]/10" : "bg-[#10B981]/10"
              }`}>
                {selectedOption === "A" ? (
                  <Rocket className="w-5 h-5 text-[#ff7000]" />
                ) : (
                  <Sparkles className="w-5 h-5 text-[#10B981]" />
                )}
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#0f172a]">Timeline sur 2 mois</h3>
                <p className="text-sm text-[#64748b] font-sans">
                  Vue calendrier hebdomadaire — {selectedOption === "A" ? "Option A (4 semaines)" : "Option B (8 semaines)"}
                </p>
              </div>
            </div>
            <div className={`px-4 py-2 rounded-lg ${
              selectedOption === "A" ? "bg-[#ff7000]/10" : "bg-[#10B981]/10"
            }`}>
              <span className={`text-lg font-serif font-semibold ${
                selectedOption === "A" ? "text-[#ff7000]" : "text-[#10B981]"
              }`}>
                {currentDetails.price}
              </span>
            </div>
          </div>
          <GanttChart tasks={currentTasks} selectedOption={selectedOption} />
        </div>

        {/* Option Details */}
        <div className={`p-6 rounded-xl border ${
          selectedOption === "A" 
            ? "border-[#ff7000]/30 bg-[#ff7000]/5" 
            : "border-[#10B981]/30 bg-[#10B981]/5"
        }`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                selectedOption === "A" ? "bg-[#ff7000]/10" : "bg-[#10B981]/10"
              }`}>
                {selectedOption === "A" ? (
                  <Rocket className="w-5 h-5 text-[#ff7000]" />
                ) : (
                  <Sparkles className="w-5 h-5 text-[#10B981]" />
                )}
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#0f172a]">{currentDetails.name}</h3>
                <p className="text-sm text-[#64748b] font-sans">
                  {currentDetails.hours} de developpement — {currentDetails.timeline}
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#64748b] font-sans leading-relaxed mb-6">
            {currentDetails.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentDetails.sprints.map((sprint) => (
              <div key={sprint.title} className="p-4 rounded-lg bg-white border border-[#e5e7eb]">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] tracking-[0.15em] uppercase font-sans font-medium ${
                    selectedOption === "A" ? "text-[#ff7000]" : "text-[#10B981]"
                  }`}>
                    {sprint.title.split(" — ")[0]}
                  </span>
                  <span className="text-[10px] text-[#64748b] font-sans bg-[#f1f5f9] px-2 py-0.5 rounded">
                    {sprint.effort}
                  </span>
                </div>
                <h4 className="font-serif text-base text-[#0f172a] mb-3">
                  {sprint.title.split(" — ")[1]}
                </h4>
                <ul className="flex flex-col gap-2">
                  {sprint.items.map((item, i) => (
                    <li key={i} className="text-xs text-[#64748b] font-sans flex items-start gap-2">
                      <CheckSquare className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                        selectedOption === "A" ? "text-[#ff7000]/50" : "text-[#10B981]/50"
                      }`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
