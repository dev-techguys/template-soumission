"use client"

import { useState, useEffect } from "react"
import { SlideWrapper } from "../slide-wrapper"
import { AnimatedDiv, AnimatedContainer, AnimatedItem } from "../animated-wrapper"
import { MessageSquare, Navigation, BarChart3, Blocks, ChevronDown, ArrowRight, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { LiveChatDemo } from "../live-chat-demo"

// Q1/Q2/Q3 Workflow Data
const WORKFLOW_QUESTIONS = [
  {
    id: "Q1",
    question: "What brings you here today?",
    chips: [
      { label: "General freight", sublabel: "(FTL / LTL)" },
      { label: "Temperature-sensitive", sublabel: "(Reefer)" },
      { label: "Oversized/Heavy", sublabel: "(Heavy Haul)" },
      { label: "I need storage", sublabel: "or warehousing" },
      { label: "I'm a driver /", sublabel: "owner-operator" },
    ],
  },
  {
    id: "Q2",
    question: "Where is it going?",
    chips: [
      { label: "Within Canada", sublabel: "" },
      { label: "Canada ↔ USA", sublabel: "" },
      { label: "Not sure yet", sublabel: "" },
    ],
  },
  {
    id: "Q3",
    question: "When do you need it there?",
    chips: [
      { label: "Today or tomorrow", sublabel: "(urgent)" },
      { label: "This week", sublabel: "(standard)" },
      { label: "Flexible /", sublabel: "planning ahead" },
    ],
  },
]

// Decision Tree Branches
const DECISION_BRANCHES = [
  {
    id: "A",
    label: "General freight / Standard cargo",
    color: "#ff7000",
    routes: [
      { path: "Canada → Urgent", destination: "/services/expedited-freight", message: "We run 24/7 for urgent loads" },
      { path: "Canada → This week → FTL", destination: "/services/ftl-transport", message: null },
      { path: "Canada → This week → LTL", destination: "/services/ltl-shipping", message: null },
      { path: "Cross-border → Urgent", destination: "/services/expedited-freight", message: "Cross-border urgent capable" },
      { path: "Cross-border → Standard", destination: "/services/cross-border-transport", message: "Customs & compliance handled" },
    ],
  },
  {
    id: "B",
    label: "Temperature-sensitive (food, pharma)",
    color: "#3b82f6",
    routes: [
      { path: "Direct", destination: "/services/refrigerated-transport", message: "Temp-controlled, CA + US" },
    ],
  },
  {
    id: "C",
    label: "Oversized / Heavy haul",
    color: "#8b5cf6",
    routes: [
      { path: "Direct", destination: "/services/heavy-haul-transport", message: "Permits, escorts, specialized rigs" },
    ],
  },
  {
    id: "D",
    label: "Storage / warehousing",
    color: "#10B981",
    routes: [
      { path: "Direct", destination: "/services/logistics-3pl", message: "WMS, cross-docking, pick & pack" },
    ],
  },
  {
    id: "E",
    label: "Driver / owner-operator",
    color: "#f59e0b",
    routes: [
      { path: "Direct", destination: "/careers", message: "Check open positions or reach HR directly" },
    ],
  },
  {
    id: "F",
    label: "Fallback — free-text intent",
    color: "#64748b",
    routes: [
      { path: '"Where are you located?"', destination: "/about-us-safex-transport", message: null },
      { path: '"Are you hiring?"', destination: "/careers", message: null },
      { path: '"Pricing?" / "How much?"', destination: "/get-your-quote-today", message: "Every load is unique — free spot quote" },
      { path: '"Talk to a human" — Sales', destination: "/get-your-quote-today", message: "Contact sales@safextransport.ca" },
      { path: '"Talk to a human" — Dispatch', destination: "/contact", message: "Reach operations team directly" },
    ],
  },
]

const FEATURES = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Widget de chat intelligent",
    description:
      "Un bouton flottant présent sur toutes les pages, qui ouvre un panneau de conversation élégant et responsive. Le visiteur interagit via des chips cliquables ou en langage naturel avec un LLM performant.",
    problemsLabel: "Bénéfices business",
    problems: [
      "Plus de visiteurs perdus — chaque prospect est guidé vers le bon service",
      "Engagement 24/7 sans mobiliser de ressources humaines",
      "Expérience utilisateur personnalisée dès la première interaction",
    ],
    expandable: true,
    expandableType: "widget",
  },
  {
    icon: Navigation,
    number: "02",
    title: "Flow de qualification structuré",
    description:
      "Trois questions avec chips cliquables pour qualifier rapidement le visiteur : type de cargo, destination, urgence. En moins de 60 secondes, l'agent route vers la bonne page service ou le formulaire de devis.",
    problemsLabel: "Bénéfices business",
    problems: [
      "Leads mieux qualifiés avant d'arriver à l'équipe commerciale",
      "Temps des sales concentré sur les prospects à haute intention",
      "Données d'intention capturées pour chaque visiteur",
    ],
    expandable: true,
    expandableType: "workflow",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Analytics sans PII + Dashboard admin",
    description:
      "Les chemins de navigation anonymisés sont loggés en temps réel. Un dashboard protégé /admin/agent-stats donne une vue complète des conversations, du funnel de conversion et des services les plus demandés.",
    problemsLabel: "Bénéfices business",
    problems: [
      "Décisions basées sur des données, pas des intuitions",
      "Conformité Loi 25 assurée sans compromis sur les insights",
      "Identification des services les plus recherchés pour orienter le business",
    ],
    expandable: true,
    expandableType: "dashboard",
  },
  {
    icon: Blocks,
    number: "04",
    title: "Scalable et extensible",
    description:
      "Architecture modulaire conçue pour évoluer : emails automatisés vers les sales, intégration dans le système de vente, interactions intra-site et extra-site avec les outils Safex, API ouverte pour connecter d'autres systèmes.",
    problemsLabel: "Bénéfices business",
    problems: [
      "Investissement one-shot — pas d'abonnement mensuel qui explose",
      "Propriété totale du modèle et des données, zéro dépendance externe",
      "Scalable à l'infini pour supporter la croissance vers 5 bureaux",
    ],
    expandable: true,
    expandableType: "scalability",
  },
]



// Workflow visualization component with 3 tabs
function WorkflowVisualization() {
  const [activeTab, setActiveTab] = useState<"questions" | "demo" | "tree">("questions")
  const [demoPhase, setDemoPhase] = useState<"idle" | "typing" | "thinking" | "redirect">("idle")
  const [typedText, setTypedText] = useState("")
  const [currentUrl, setCurrentUrl] = useState("safextransport.ca/services")
  const fullText = "I need to ship frozen food from Montreal to Chicago"

  // Manual demo trigger - not auto
  const runDemo = async () => {
    if (demoPhase !== "idle") return
    
    // Phase 1: Typing animation (slower)
    setDemoPhase("typing")
    setTypedText("")
    for (let i = 0; i <= fullText.length; i++) {
      await new Promise(r => setTimeout(r, 60))
      setTypedText(fullText.slice(0, i))
    }
    await new Promise(r => setTimeout(r, 1000))
    
    // Phase 2: AI thinking
    setDemoPhase("thinking")
    await new Promise(r => setTimeout(r, 2500))
    
    // Phase 3: URL change
    setDemoPhase("redirect")
    setCurrentUrl("safextransport.ca/services/refrigerated-transport")
    await new Promise(r => setTimeout(r, 4000))
    
    // Reset
    setCurrentUrl("safextransport.ca/services")
    setDemoPhase("idle")
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-6 overflow-hidden"
    >
      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab("questions")}
          className={`px-4 py-2 rounded-lg text-sm font-sans transition-all ${
            activeTab === "questions"
              ? "bg-[#0f172a] text-white"
              : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]"
          }`}
        >
          Questions Q1/Q2/Q3
        </button>
        <button
          onClick={() => setActiveTab("demo")}
          className={`px-4 py-2 rounded-lg text-sm font-sans transition-all ${
            activeTab === "demo"
              ? "bg-[#0f172a] text-white"
              : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]"
          }`}
        >
          Saisie libre
        </button>
        <button
          onClick={() => setActiveTab("tree")}
          className={`px-4 py-2 rounded-lg text-sm font-sans transition-all ${
            activeTab === "tree"
              ? "bg-[#0f172a] text-white"
              : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]"
          }`}
        >
          Arbre de scénarios
        </button>
      </div>

      <AnimatePresence mode="wait">
        {/* TAB 1: Questions Q1/Q2/Q3 */}
        {activeTab === "questions" && (
          <motion.div
            key="questions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f172a] rounded-xl p-6"
          >
            <p className="text-white/60 text-sm font-sans mb-6">
              Les 3 questions sont posées sous forme de <span className="text-white font-medium">chips cliquables</span> — pas de saisie libre. Simple, rapide, mobile-friendly.
            </p>
            
            {WORKFLOW_QUESTIONS.map((q, qIndex) => (
              <div key={q.id} className={qIndex > 0 ? "mt-6" : ""}>
                <div className="text-white/70 mb-3 font-mono text-sm">
                  <span className="text-[#ff7000]">{q.id}</span> — {q.question}
                </div>
                <div className="flex flex-wrap gap-2">
                  {q.chips.map((chip, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: qIndex * 0.1 + i * 0.05 }}
                      className="px-4 py-2.5 border border-white/20 rounded-lg text-white/90 hover:border-[#ff7000]/50 hover:bg-[#ff7000]/10 transition-all cursor-pointer"
                    >
                      <div className="text-sm font-sans">{chip.label}</div>
                      {chip.sublabel && <div className="text-xs text-white/50">{chip.sublabel}</div>}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* TAB 2: Demo saisie libre */}
        {activeTab === "demo" && (
          <motion.div
            key="demo"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f172a] rounded-xl overflow-hidden"
          >
            {/* Browser mockup header */}
            <div className="bg-[#1e293b] px-4 py-3 flex items-center gap-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
              <div className="flex-1 bg-[#0f172a] rounded-md px-3 py-1.5 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                <motion.span 
                  className="text-xs text-white/70 font-mono"
                  key={currentUrl}
                  animate={demoPhase === "redirect" ? { color: ["rgba(255,255,255,0.7)", "#ff7000", "rgba(255,255,255,0.7)"] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {currentUrl}
                </motion.span>
              </div>
            </div>
            
            {/* Chat widget mockup */}
            <div className="p-6">
              <div className="max-w-lg mx-auto">
                {/* Agent message */}
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#ff7000] flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-md px-4 py-3">
                    <p className="text-white/90 text-sm">Hi! What are you looking to ship today?</p>
                  </div>
                </div>
                
                {/* Idle state - Show button */}
                {demoPhase === "idle" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="ml-11 mb-4"
                  >
                    <button
                      onClick={runDemo}
                      className="flex items-center gap-2 px-4 py-2 bg-[#ff7000] hover:bg-[#e06300] rounded-lg text-white text-sm font-sans transition-colors"
                    >
                      <span>Lancer la démo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-white/40 text-xs mt-2">Le visiteur tape en langage naturel au lieu de cliquer sur les chips</p>
                  </motion.div>
                )}
                
                {/* User typing */}
                {(demoPhase === "typing" || demoPhase === "thinking" || demoPhase === "redirect") && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 mb-4 justify-end"
                  >
                    <div className="bg-[#ff7000] rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                      <p className="text-white text-sm">
                        {typedText}
                        {demoPhase === "typing" && <span className="animate-pulse">|</span>}
                      </p>
                    </div>
                  </motion.div>
                )}
                
                {/* AI thinking */}
                {demoPhase === "thinking" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 mb-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#ff7000] flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <div className="bg-white/10 rounded-2xl rounded-tl-md px-4 py-3">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-[#ff7000]/30 border-t-[#ff7000] rounded-full"
                        />
                        <span className="text-white/50 text-sm">Analyse de l&apos;intention...</span>
                      </div>
                      <div className="mt-2 text-white/30 text-xs font-mono">
                        Intent: reefer, Route: cross-border, Urgency: standard
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* AI response with redirect */}
                {demoPhase === "redirect" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#ff7000] flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <div className="bg-white/10 rounded-2xl rounded-tl-md px-4 py-3">
                      <p className="text-white/90 text-sm mb-2">Perfect! For temperature-controlled shipments to the US, our reefer fleet is ideal.</p>
                      <motion.div 
                        className="flex items-center gap-2 text-[#10b981] text-xs"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight className="w-3 h-3" />
                        <span>Redirecting to /services/refrigerated-transport...</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: Arbre de scénarios */}
        {activeTab === "tree" && (
          <motion.div
            key="tree"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f172a] rounded-xl p-6"
          >
            {/* Header explanation */}
            <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-white/70 text-sm font-sans">
                L&apos;agent IA est guidé par un <span className="text-[#ff7000] font-medium">arbre de scénarios évolutif</span>. 
                Ce projet construit la base de cet arbre, qui pourra être enrichi au fil du temps.
              </p>
            </div>
            
            {/* Tree visualization with proper SVG connections */}
            <div className="relative">
              {/* SVG for connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* Line from START to Q1 */}
                <line x1="50%" y1="40" x2="50%" y2="70" stroke="rgba(255,112,0,0.5)" strokeWidth="2" />
                {/* Lines from Q1 to branches */}
                <line x1="50%" y1="110" x2="10%" y2="170" stroke="rgba(255,112,0,0.3)" strokeWidth="1" />
                <line x1="50%" y1="110" x2="30%" y2="170" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
                <line x1="50%" y1="110" x2="50%" y2="170" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
                <line x1="50%" y1="110" x2="70%" y2="170" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                <line x1="50%" y1="110" x2="90%" y2="170" stroke="rgba(245,158,11,0.3)" strokeWidth="1" />
                {/* Lines from branches to destinations */}
                <line x1="10%" y1="230" x2="10%" y2="270" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                <line x1="30%" y1="230" x2="30%" y2="270" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                <line x1="50%" y1="230" x2="50%" y2="270" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                <line x1="70%" y1="230" x2="70%" y2="270" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                <line x1="90%" y1="230" x2="90%" y2="270" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
              </svg>
              
              <div className="relative flex flex-col items-center" style={{ zIndex: 1 }}>
                {/* Start node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#ff7000] to-[#f59e0b] rounded-full text-white font-sans text-sm font-medium shadow-lg"
                >
                  Visiteur
                </motion.div>
                
                {/* Q1 node */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 px-4 py-2 bg-white/10 border border-[#ff7000]/50 rounded-lg text-white font-sans text-xs"
                >
                  Q1: Type de cargo ?
                </motion.div>
                
                {/* Branches */}
                <div className="mt-8 w-full grid grid-cols-5 gap-2">
                  {DECISION_BRANCHES.slice(0, 5).map((branch, i) => (
                    <motion.div
                      key={branch.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg border-2"
                        style={{ backgroundColor: branch.color + "20", borderColor: branch.color }}
                      >
                        {branch.id}
                      </div>
                      <div className="mt-2 text-center h-8">
                        <p className="text-white/60 text-[10px] font-sans leading-tight">{branch.label.split("/")[0].trim()}</p>
                      </div>
                      {/* Destination */}
                      <div className="mt-4 px-2 py-1.5 bg-[#10b981]/10 border border-[#10b981]/30 rounded-lg">
                        <code className="text-[#10b981] text-[9px]">{branch.routes[0]?.destination.split("/").pop()}</code>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Fallback section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 w-full max-w-md"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-[#64748b] flex items-center justify-center text-white text-xs font-bold">F</div>
                    <span className="text-white/70 text-xs font-sans font-medium">Fallback — Questions free-text</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {DECISION_BRANCHES[5].routes.slice(0, 4).map((route, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px]">
                        <MessageCircle className="w-3 h-3 text-[#64748b] shrink-0" />
                        <span className="text-white/50 truncate">{route.path}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Extensibility note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-6 flex items-center gap-2 text-white/40 text-xs font-sans"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff7000] animate-pulse" />
                  <span>Arbre extensible — nouvelles branches ajoutables sans redéploiement</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Dashboard visualization component with AI report generation
function DashboardVisualization() {
  const [aiPhase, setAiPhase] = useState<"idle" | "thinking" | "done">("idle")
  
  const SERVICES_DATA = [
    { name: "FTL / LTL", percentage: 58, color: "#ff7000" },
    { name: "Reefer", percentage: 22, color: "#3b82f6" },
    { name: "Cross-border", percentage: 11, color: "#10B981" },
    { name: "Driver", percentage: 6, color: "#f59e0b" },
    { name: "Heavy Haul", percentage: 3, color: "#8b5cf6" },
  ]

  const handleGenerateReport = async () => {
    setAiPhase("thinking")
    await new Promise(r => setTimeout(r, 2500))
    setAiPhase("done")
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-6 overflow-hidden"
    >
      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl overflow-hidden">
        {/* Header bar */}
        <div className="bg-[#1e293b] px-6 py-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="w-3 h-3 rounded-full bg-[#10b981]" />
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#ff7000]" />
              <span className="text-white font-sans text-sm font-medium">/admin/agent-stats</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
            <span className="text-white/50 text-xs font-sans">Mai 2026</span>
          </div>
        </div>
        
        <div className="p-6">
          {/* KPI Row */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { label: "Conversations", value: "142", trend: "+12%" },
              { label: "Devis demandés", value: "89", trend: "63%" },
              { label: "Ratio EN/FR", value: "78/22", trend: null },
              { label: "Conversion", value: "4.2%", trend: "+0.8%" },
            ].map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-3 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-[10px] text-white/40 uppercase tracking-wider font-sans">{kpi.label}</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xl text-white font-sans font-bold">{kpi.value}</span>
                  {kpi.trend && <span className="text-[10px] text-[#10b981]">{kpi.trend}</span>}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Chart + AI Button side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mini chart */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-white/60 text-xs font-sans mb-4">Services demandés</div>
              <div className="flex items-end justify-between h-24 gap-2">
                {SERVICES_DATA.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex-1 flex flex-col items-center origin-bottom"
                  >
                    <div 
                      className="w-full rounded-t-sm"
                      style={{ 
                        backgroundColor: service.color, 
                        height: `${service.percentage * 1.5}px` 
                      }}
                    />
                    <span className="text-[8px] text-white/40 mt-1 truncate w-full text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* AI Report Button or Results */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col">
              <AnimatePresence mode="wait">
                {aiPhase === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full gap-3"
                  >
                    <button
                      onClick={handleGenerateReport}
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#ff7000] to-[#f59e0b] rounded-lg text-white text-sm font-sans font-medium hover:opacity-90 transition-opacity"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Générer un rapport avec l&apos;IA
                    </button>
                    <span className="text-[10px] text-white/40 font-sans">Analyse automatique des données</span>
                  </motion.div>
                )}
                
                {aiPhase === "thinking" && (
                  <motion.div
                    key="thinking"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full gap-3"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-2 border-[#ff7000]/30 border-t-[#ff7000] rounded-full"
                    />
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-white/70 text-sm font-sans">Analyse en cours...</span>
                      <motion.span 
                        className="text-[10px] text-white/40"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Extraction des insights
                      </motion.span>
                    </div>
                  </motion.div>
                )}
                
                {aiPhase === "done" && (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="text-white/60 text-xs font-sans mb-2">Actions recommandées</div>
                    {[
                      { icon: "💡", label: "Conseil amélioration", desc: "Ajouter FAQ tracking sur page Reefer" },
                      { icon: "🎯", label: "Conseil stratégique", desc: "Focus acquisition cross-border Q3" },
                      { icon: "📧", label: "Partager par email", desc: "Envoyer le rapport à l'équipe" },
                    ].map((action, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                      >
                        <span className="text-lg">{action.icon}</span>
                        <div className="flex-1 min-w-0">
                          <span className="text-white/80 text-xs font-sans block">{action.label}</span>
                          <span className="text-white/40 text-[10px] font-sans truncate block">{action.desc}</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-white/30" />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] text-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Données anonymisées — Conforme Loi 25</span>
            </div>
            <span className="text-[10px] text-white/20">Dernière mise à jour: il y a 2h</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Scalability visualization component - Multi-channel API architecture (clean centered layout)
function ScalabilityVisualization() {
  const CHANNELS = [
    { name: "Widget web", icon: "🌐", color: "#ff7000" },
    { name: "WhatsApp", icon: "💬", color: "#25D366" },
    { name: "Instagram", icon: "📸", color: "#E4405F" },
    { name: "GPT Action", icon: "🤖", color: "#10a37f" },
    { name: "Email", icon: "📧", color: "#3b82f6" },
  ]

  const OUTPUTS = [
    { name: "CRM", icon: "📊" },
    { name: "Sales", icon: "💼" },
    { name: "Dispatch", icon: "🚚" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-6 overflow-hidden"
    >
      <div className="bg-[#0f172a] rounded-xl p-6">
        {/* Header explanation */}
        <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <p className="text-white/70 text-sm font-sans">
            Architecture modulaire : une <span className="text-[#ff7000] font-medium">API centrale unique</span> qui peut être connectée à n&apos;importe quel canal. 
            Pas besoin de dupliquer le code — une mise à jour se propage partout.
          </p>
        </div>
        
        {/* Clean 3-row architecture */}
        <div className="flex flex-col items-center gap-4">
          {/* Row 1: Input channels */}
          <div className="flex items-center justify-center gap-4">
            {CHANNELS.map((channel, i) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-1.5"
              >
                <div 
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shadow-md"
                  style={{ 
                    backgroundColor: channel.color + "15", 
                    border: `1px solid ${channel.color}30` 
                  }}
                >
                  {channel.icon}
                </div>
                <span className="text-white/40 text-[9px] font-sans">{channel.name}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Row 1.5: Converging arrows */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6 py-2"
          >
            {[1, 2, 3, 4, 5].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="w-px h-4 bg-gradient-to-b from-white/20 to-[#ff7000]/40 origin-top"
              />
            ))}
          </motion.div>
          
          {/* Row 2: Central API */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#ff7000]/10 rounded-2xl blur-xl" />
            <div className="relative px-6 py-4 rounded-2xl border-2 border-[#ff7000] bg-gradient-to-br from-[#ff7000]/15 to-transparent">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff7000] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <code className="text-[#ff7000] text-sm font-bold">/api/agent</code>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="px-1.5 py-0.5 bg-white/10 rounded text-[8px] text-white/50">LLM</span>
                    <span className="px-1.5 py-0.5 bg-white/10 rounded text-[8px] text-white/50">Router</span>
                    <span className="px-1.5 py-0.5 bg-white/10 rounded text-[8px] text-white/50">Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Row 2.5: Diverging arrows */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-8 py-2"
          >
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8 + i * 0.05 }}
                className="w-px h-4 bg-gradient-to-b from-[#ff7000]/40 to-[#10b981]/40 origin-top"
              />
            ))}
          </motion.div>
          
          {/* Row 3: Outputs */}
          <div className="flex items-center justify-center gap-6">
            {OUTPUTS.map((output, i) => (
              <motion.div
                key={output.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.08 }}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-lg">
                  {output.icon}
                </div>
                <span className="text-[#10b981] text-[9px] font-sans">{output.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Benefits row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4"
        >
          {[
            { label: "Maintenance unique", desc: "Un seul prompt à maintenir" },
            { label: "Cohérence garantie", desc: "Même ton sur tous les canaux" },
            { label: "Scaling illimité", desc: "+1 canal = quelques lignes" },
          ].map((benefit, i) => (
            <div key={i} className="text-center p-3 rounded-lg bg-white/5">
              <div className="text-white/80 text-xs font-sans font-medium">{benefit.label}</div>
              <div className="text-white/40 text-[10px] font-sans mt-1">{benefit.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export function ObjectivesSlide() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)

  return (
    <SlideWrapper id="objectives" className="bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <AnimatedDiv delay={0}>
            <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
              03 / Features
            </span>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-3xl leading-tight text-balance">
              Les 4 piliers de l&apos;agent
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <div className="w-16 h-px bg-[#ff7000]" />
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>
            <p className="text-base text-[#64748b] font-sans max-w-2xl leading-relaxed">
              Un widget de chat flottant, present sur toutes les pages du site vitrine, qui guide chaque visiteur vers le bon service Safex via un flow de qualification intelligent.
            </p>
          </AnimatedDiv>
        </div>

        {/* Features */}
        <AnimatedContainer staggerDelay={0.15} className="flex flex-col gap-8">
          {FEATURES.map((feature) => (
            <AnimatedItem key={feature.number}>
              <div className="group relative p-8 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#ff7000]/30 hover:shadow-lg transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#ff7000]/30 via-[#ff7000]/10 to-transparent" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left: Number */}
                  <div className="lg:col-span-1 flex items-start gap-4">
                    <span className="font-serif text-4xl text-[#ff7000]/30">{feature.number}</span>
                  </div>

                  {/* Middle: Content */}
                  <div className="lg:col-span-6 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#ff7000]/10 flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-[#ff7000]" />
                      </div>
                      <h3 className="font-serif text-xl text-[#0f172a]">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-[#64748b] font-sans leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Expand button for expandable features */}
                    {feature.expandable && (
                      <button
                        onClick={() => setExpandedFeature(expandedFeature === feature.number ? null : feature.number)}
                        className="flex items-center gap-2 text-xs text-[#ff7000] font-sans hover:underline mt-2 w-fit"
                      >
                        <span>
                          {expandedFeature === feature.number 
                            ? (feature.expandableType === "widget" ? "Masquer l'agent" : feature.expandableType === "dashboard" ? "Masquer le dashboard" : feature.expandableType === "scalability" ? "Masquer l'architecture" : "Masquer le workflow")
                            : (feature.expandableType === "widget" ? "Voir l'agent en action" : feature.expandableType === "dashboard" ? "Voir le prototype du dashboard" : feature.expandableType === "scalability" ? "Voir l'architecture multi-canal" : "Voir le workflow Q1/Q2/Q3")
                          }
                        </span>
                        <motion.div
                          animate={{ rotate: expandedFeature === feature.number ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                    )}
                  </div>

                  {/* Right: Problems solved */}
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#10B981] font-sans mb-2 block font-medium">
                        {feature.problemsLabel}
                      </span>
                      <div className="flex flex-col gap-1.5">
                        {feature.problems.map((problem, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                            <span className="text-xs text-[#0f172a]/80 font-sans leading-relaxed">{problem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable sections */}
                <AnimatePresence>
                  {feature.expandable && expandedFeature === feature.number && feature.expandableType === "widget" && (
                    <LiveChatDemo />
                  )}
                  {feature.expandable && expandedFeature === feature.number && feature.expandableType === "workflow" && (
                    <WorkflowVisualization />
                  )}
                  {feature.expandable && expandedFeature === feature.number && feature.expandableType === "dashboard" && (
                    <DashboardVisualization />
                  )}
                  {feature.expandable && expandedFeature === feature.number && feature.expandableType === "scalability" && (
                    <ScalabilityVisualization />
                  )}
                </AnimatePresence>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </div>
    </SlideWrapper>
  )
}
