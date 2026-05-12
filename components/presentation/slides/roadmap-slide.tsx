"use client"

import { SlideWrapper } from "../slide-wrapper"
import { AnimatedDiv, AnimatedContainer, AnimatedItem } from "../animated-wrapper"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckSquare, Rocket, Sparkles, X } from "lucide-react"

// Task type with execution actions
interface Task {
  id: string
  name: string
  week: number
  duration: number
  color: string
  type: "core" | "premium"
  actions: string[]
}

// Timeline data for Gantt chart - 8 weeks (2 months)
const GANTT_TASKS_A: Task[] = [
  { id: "validation", name: "Validation contenu", week: 1, duration: 1, color: "#ff7000", type: "core", actions: ["Revue de l'arbre de scénarios avec Pierre", "Validation du wording EN/FR", "Définition des edge cases"] },
  { id: "edge", name: "Edge Function LLM", week: 1, duration: 2, color: "#ff7000", type: "core", actions: ["Configuration Groq API + streaming", "Implémentation rate limiting", "Tests de latence et fallback"] },
  { id: "widget", name: "Widget UI complet", week: 2, duration: 2, color: "#ff7000", type: "core", actions: ["ChatWidget + ChatBubble + ChatPanel", "Responsive mobile-first design", "Intégration chips cliquables"] },
  { id: "routing", name: "Routing + Messages", week: 3, duration: 1, color: "#ff7000", type: "core", actions: ["Navigation vers pages services", "Messages contextuels par page"] },
  { id: "qualif", name: "Qualification adaptative", week: 3, duration: 1, color: "#ff7000", type: "core", actions: ["Flow 3 questions dynamique", "Logique de scoring prospect"] },
  { id: "trigger", name: "Trigger proactif", week: 4, duration: 1, color: "#ff7000", type: "core", actions: ["Déclenchement temps + scroll", "Cooldown intelligent"] },
  { id: "analytics", name: "Analytics Supabase", week: 4, duration: 1, color: "#ff7000", type: "core", actions: ["Logging anonymisé Loi 25", "Schéma de données optimisé"] },
  { id: "dashboard", name: "Dashboard admin", week: 4, duration: 1, color: "#ff7000", type: "core", actions: ["/admin/agent-stats protégé", "KPIs conversations et funnel"] },
]

// Option B Premium tasks - Start from week 2 and integrate with Option A
const PREMIUM_TASKS: Task[] = [
  { id: "gpt", name: "Modèle GPT", week: 2, duration: 1, color: "#10B981", type: "premium", actions: ["Migration Llama vers GPT-4o", "Optimisation prompts", "Tests de qualité réponses"] },
  { id: "learning", name: "Apprentissage continu", week: 3, duration: 2, color: "#10B981", type: "premium", actions: ["Système de mémoire contextuelle", "Feedback loop automatisé", "Enrichissement progressif"] },
  { id: "skills", name: "Skills domaine B2B", week: 4, duration: 2, color: "#10B981", type: "premium", actions: ["Expertise transport intégrée", "Jargon BOL, lane, spot quote", "Scénarios métier avancés"] },
  { id: "capture", name: "Capture lead", week: 5, duration: 1, color: "#10B981", type: "premium", actions: ["Formulaire inline dans chat", "Validation email + entreprise", "Routing vers bon commercial"] },
  { id: "dashboard2", name: "Dashboard avancé", week: 6, duration: 1, color: "#10B981", type: "premium", actions: ["Funnel de conversion", "Heatmap parcours utilisateur"] },
  { id: "framer", name: "Animations Framer", week: 7, duration: 1, color: "#10B981", type: "premium", actions: ["Transitions fluides", "Micro-interactions premium"] },
  { id: "persist", name: "Persistance session", week: 7, duration: 1, color: "#10B981", type: "premium", actions: ["LocalStorage + Supabase sync", "Reprise conversation inter-pages"] },
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

// Task tooltip component - now uses fixed positioning for better overflow handling
function TaskTooltip({ task, position }: { task: Task; position: { x: number; y: number } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed z-[100] w-64 p-4 rounded-xl border shadow-xl bg-white pointer-events-none"
      style={{ 
        borderColor: task.color + "40",
        left: Math.min(position.x, window.innerWidth - 280),
        top: position.y + 10,
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: task.color }}
        />
        <span className="font-serif text-sm text-[#0f172a] font-medium">{task.name}</span>
      </div>
      <div className="flex flex-col gap-2">
        {task.actions.map((action, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckSquare 
              className="w-3 h-3 mt-0.5 shrink-0" 
              style={{ color: task.color }} 
            />
            <span className="text-xs text-[#64748b] font-sans">{action}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function GanttChart({ selectedOption }: { selectedOption: "A" | "B" }) {
  const [hoveredTask, setHoveredTask] = useState<Task | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  
  // Combine tasks based on selected option
  const allTasks = selectedOption === "A" ? GANTT_TASKS_A : [...GANTT_TASKS_A, ...PREMIUM_TASKS]
  
  // Get max week for current option
  const maxWeek = selectedOption === "A" ? 4 : 8
  
  const handleMouseEnter = (task: Task, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltipPosition({ x: rect.left, y: rect.bottom })
    setHoveredTask(task)
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[700px]">
        {/* Month headers */}
        <div className="flex border-b border-[#e5e7eb]">
          <div className="w-44 shrink-0" />
          {MONTHS.map((month, idx) => (
            <motion.div
              key={month.name}
              initial={{ opacity: selectedOption === "A" && idx === 1 ? 0.3 : 1 }}
              animate={{ opacity: selectedOption === "A" && idx === 1 ? 0.3 : 1 }}
              transition={{ duration: 0.4 }}
              className="flex-1 text-center py-2 text-sm font-sans font-medium text-[#0f172a] border-l border-[#e5e7eb]"
            >
              {month.name}
            </motion.div>
          ))}
        </div>

        {/* Week headers */}
        <div className="flex border-b border-[#e5e7eb] bg-[#f8fafc]">
          <div className="w-44 shrink-0 px-3 py-2 text-[10px] tracking-[0.1em] uppercase text-[#64748b] font-sans">
            Jalon
          </div>
          {WEEKS.map((week) => (
            <motion.div
              key={week.num}
              initial={{ opacity: week.num > maxWeek ? 0.3 : 1 }}
              animate={{ 
                opacity: week.num > maxWeek ? 0.3 : 1,
                backgroundColor: week.num > maxWeek ? "#f1f5f9" : "transparent"
              }}
              transition={{ duration: 0.4 }}
              className="flex-1 text-center py-2 text-xs font-sans text-[#64748b] border-l border-[#e5e7eb]"
            >
              {week.label}
            </motion.div>
          ))}
        </div>

        {/* Milestone indicators row - TOP POSITION */}
        <div className="flex border-b-2 border-[#0f172a]/20 bg-gradient-to-r from-[#fef3c7] via-[#dbeafe] to-[#d1fae5]">
          <div className="w-44 shrink-0 px-3 py-3 flex items-center">
            <span className="text-xs font-sans font-semibold text-[#0f172a]">Livrables</span>
          </div>
          {WEEKS.map((week) => {
            const milestones = []
            
            if (week.num === 3) {
              milestones.push({ label: "Chatbot en ligne", icon: "msg", color: "#ff7000", bgColor: "#fff7ed" })
            }
            if (week.num === 4) {
              milestones.push({ label: "Dashboard opérationnel", icon: "chart", color: "#3b82f6", bgColor: "#eff6ff" })
            }
            if (week.num === 6 && selectedOption === "B") {
              milestones.push({ label: "Analyse pertinente (2 sem. de data)", icon: "trend", color: "#10B981", bgColor: "#ecfdf5" })
            }
            
            const isDisabledWeek = week.num > maxWeek
            
            return (
              <motion.div
                key={`milestone-${week.num}`}
                animate={{ opacity: isDisabledWeek ? 0.3 : 1 }}
                transition={{ duration: 0.4 }}
                className="flex-1 py-2 px-1 border-l border-[#e5e7eb]/50 flex items-center justify-center"
              >
                {milestones.map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="relative group"
                  >
                    <motion.div 
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="flex flex-col items-center gap-1 px-2 py-1.5 rounded-lg shadow-lg border-2 cursor-pointer hover:scale-105 transition-transform"
                      style={{ 
                        backgroundColor: milestone.bgColor, 
                        borderColor: milestone.color,
                      }}
                    >
                      {milestone.icon === "msg" && (
                        <svg className="w-5 h-5" style={{ color: milestone.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      )}
                      {milestone.icon === "chart" && (
                        <svg className="w-5 h-5" style={{ color: milestone.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                      {milestone.icon === "trend" && (
                        <svg className="w-5 h-5" style={{ color: milestone.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                      <span className="text-[9px] font-sans font-semibold whitespace-nowrap" style={{ color: milestone.color }}>
                        {milestone.icon === "msg" ? "Chatbot" : milestone.icon === "chart" ? "Dashboard" : "Analyse"}
                      </span>
                    </motion.div>
                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-[#0f172a] text-white text-[11px] font-sans rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
                      {milestone.label}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-[#0f172a]" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )
          })}
        </div>

        {/* Task rows */}
        <AnimatePresence mode="popLayout">
          {allTasks.map((task, index) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, x: task.type === "premium" ? 20 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ 
                duration: 0.4, 
                delay: task.type === "premium" ? index * 0.05 : 0,
                layout: { duration: 0.3 }
              }}
              className={`flex border-b border-[#e5e7eb] hover:bg-[#f8fafc] transition-colors ${
                task.type === "premium" ? "bg-[#10B981]/5" : ""
              }`}
            >
              {/* Task name */}
              <div className="w-44 shrink-0 px-3 py-3 flex items-center gap-2">
                <span className="text-xs font-sans text-[#0f172a] truncate">{task.name}</span>
              </div>

              {/* Week cells with bar */}
              {WEEKS.map((week) => {
                const isInRange = week.num >= task.week && week.num < task.week + task.duration
                const isDisabledWeek = week.num > maxWeek
                
                return (
                  <motion.div
                    key={week.num}
                    animate={{
                      opacity: isDisabledWeek ? 0.3 : 1,
                      backgroundColor: isDisabledWeek ? "#f1f5f9" : "transparent"
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 py-3 px-1 border-l border-[#e5e7eb] flex items-center relative"
                  >
                    {isInRange && (
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="h-7 w-full rounded-md flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                        style={{ backgroundColor: task.color, transformOrigin: "left" }}
                        onMouseEnter={(e) => handleMouseEnter(task, e)}
                        onMouseLeave={() => setHoveredTask(null)}
                      />
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mt-4 px-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#ff7000]" />
            <span className="text-xs font-sans text-[#64748b]">Core (inclus dans les deux options)</span>
          </div>
          <AnimatePresence>
            {selectedOption === "B" && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-2"
              >
                <div className="w-4 h-4 rounded bg-[#10B981]" />
                <span className="text-xs font-sans text-[#64748b]">Premium (Plan Optimisé uniquement)</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Fixed position tooltip */}
      <AnimatePresence>
        {hoveredTask && (
          <TaskTooltip task={hoveredTask} position={tooltipPosition} />
        )}
      </AnimatePresence>
    </div>
  )
}

// Milestone scrollable section
function MilestoneSection({ task }: { task: Task }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 rounded-lg bg-white border border-[#e5e7eb] hover:border-[#ff7000]/30 transition-colors"
    >
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: task.color }}
        />
                <span className="font-serif text-sm text-[#0f172a]">{task.name}</span>
              </div>
      <div className="max-h-20 overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-1.5">
          {task.actions.map((action, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckSquare 
                className="w-3 h-3 mt-0.5 shrink-0" 
                style={{ color: task.color + "80" }} 
              />
              <span className="text-[11px] text-[#64748b] font-sans">{action}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Option details
const OPTION_A_DETAILS = {
  name: "Plan Essentiel",
  timeline: "3-4 semaines",
  description: "Un agent IA complet et fonctionnel : vrai LLM Llama, qualification adaptative, trigger proactif, analytics et dashboard. Le visiteur est guidé, qualifié et routé vers la bonne page.",
}

const OPTION_B_DETAILS = {
  name: "Plan Optimisé",
  timeline: "6-8 semaines",
  description: "L'expérience premium : modèle GPT de meilleure qualité, apprentissage continu qui s'affine au fil des interactions, capture de leads, notifications sales, et dashboard avancé avec funnel.",
}

export function RoadmapSlide() {
  const [selectedOption, setSelectedOption] = useState<"A" | "B">("A")
  const currentDetails = selectedOption === "A" ? OPTION_A_DETAILS : OPTION_B_DETAILS
  const currentTasks = selectedOption === "A" ? GANTT_TASKS_A : [...GANTT_TASKS_A, ...PREMIUM_TASKS]

  return (
    <SlideWrapper id="roadmap" className="bg-[#f8fafc] !min-h-0">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20 w-full">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-14">
          <AnimatedDiv delay={0}>
            <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
              04 / Feuille de route
            </span>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
              Agenda
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <div className="w-16 h-px bg-[#ff7000]" />
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>
            <p className="text-base text-[#64748b] font-sans max-w-2xl leading-relaxed">
              Overview de la gestion de projet avec les jalons clés et la répartition des tâches. Survolez les tâches pour voir les actions d&apos;exécution.
            </p>
          </AnimatedDiv>
        </div>

        {/* Option Toggle Tabs */}
        <AnimatedDiv delay={0.4}>
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setSelectedOption("A")}
              className={`px-5 py-2.5 rounded-lg font-sans text-sm font-medium transition-all ${
                selectedOption === "A"
                  ? "bg-[#ff7000] text-white shadow-lg shadow-[#ff7000]/25"
                  : "bg-white border border-[#e5e7eb] text-[#64748b] hover:border-[#ff7000]/50 hover:text-[#ff7000]"
              }`}
            >
              Plan Essentiel
            </button>
            <button
              onClick={() => setSelectedOption("B")}
              className={`px-5 py-2.5 rounded-lg font-sans text-sm font-medium transition-all ${
                selectedOption === "B"
                  ? "bg-[#10B981] text-white shadow-lg shadow-[#10B981]/25"
                  : "bg-white border border-[#e5e7eb] text-[#64748b] hover:border-[#10B981]/50 hover:text-[#10B981]"
              }`}
            >
              Plan Optimisé
            </button>
          </div>
        </AnimatedDiv>

        {/* Gantt Chart Timeline */}
        <AnimatedDiv delay={0.5}>
          <div className="mb-12 p-6 rounded-xl border border-[#e5e7eb] bg-white">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <motion.div 
                  animate={{ backgroundColor: selectedOption === "A" ? "#ff7000" + "1a" : "#10B981" + "1a" }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                >
                  {selectedOption === "A" ? (
                    <Rocket className="w-5 h-5 text-[#ff7000]" />
                  ) : (
                    <Sparkles className="w-5 h-5 text-[#10B981]" />
                  )}
                </motion.div>
                <div>
                  <h3 className="font-serif text-xl text-[#0f172a]">Timeline sur 2 mois</h3>
                  <p className="text-sm text-[#64748b] font-sans">
                    Vue calendrier hebdomadaire — {selectedOption === "A" ? "Plan Essentiel (4 semaines)" : "Plan Optimisé (8 semaines)"}
                  </p>
                </div>
              </div>
            </div>
            <GanttChart selectedOption={selectedOption} />
          </div>
        </AnimatedDiv>

        {/* Milestones with scrollable actions */}
        <AnimatedDiv delay={0.6}>
          <div className={`p-6 rounded-xl border ${
            selectedOption === "A" 
              ? "border-[#ff7000]/30 bg-[#ff7000]/5" 
              : "border-[#10B981]/30 bg-[#10B981]/5"
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <motion.div 
                  animate={{ backgroundColor: selectedOption === "A" ? "#ff7000" + "1a" : "#10B981" + "1a" }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                >
                  {selectedOption === "A" ? (
                    <Rocket className="w-5 h-5 text-[#ff7000]" />
                  ) : (
                    <Sparkles className="w-5 h-5 text-[#10B981]" />
                  )}
                </motion.div>
                <div>
              <h3 className="font-serif text-xl text-[#0f172a]">{currentDetails.name}</h3>
              <p className="text-sm text-[#64748b] font-sans">
                {currentDetails.timeline}
              </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#64748b] font-sans leading-relaxed mb-6">
              {currentDetails.description}
            </p>

            {/* Scrollable milestones grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[280px] overflow-y-auto custom-scrollbar pr-2">
              <AnimatePresence mode="popLayout">
                {currentTasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                  >
                    <MilestoneSection task={task} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </AnimatedDiv>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </SlideWrapper>
  )
}
