"use client"

import { useState, useEffect } from "react"
import { SlideWrapper } from "../slide-wrapper"
import { AnimatedDiv, AnimatedContainer, AnimatedItem } from "../animated-wrapper"
import { MessageSquare, Navigation, BarChart3, Blocks, ChevronDown, ArrowRight, MessageCircle, TrendingUp, Brain, Phone, Mail, Database } from "lucide-react"
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
  const [selectedPlan, setSelectedPlan] = useState<"essentiel" | "optimise">("essentiel")
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
            {/* Plan Toggle with visual indicator */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedPlan("essentiel")}
                  className={`px-5 py-2.5 rounded-xl text-sm font-sans font-medium transition-all ${
                    selectedPlan === "essentiel"
                      ? "bg-[#ff7000] text-white shadow-lg shadow-[#ff7000]/25"
                      : "bg-white/10 text-white/60 hover:bg-white/20"
                  }`}
                >
                  Plan Essentiel
                </button>
                <button
                  onClick={() => setSelectedPlan("optimise")}
                  className={`px-5 py-2.5 rounded-xl text-sm font-sans font-medium transition-all ${
                    selectedPlan === "optimise"
                      ? "bg-[#10B981] text-white shadow-lg shadow-[#10B981]/25"
                      : "bg-white/10 text-white/60 hover:bg-white/20"
                  }`}
                >
                  Plan Optimisé
                </button>
              </div>
              {selectedPlan === "optimise" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#10B981]/10 rounded-full border border-[#10B981]/30"
                >
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs text-[#10B981] font-sans font-medium">Mode Intelligence Active</span>
                </motion.div>
              )}
            </div>

            {/* Header explanation */}
            <div className={`mb-6 p-4 rounded-xl border transition-all ${
              selectedPlan === "optimise" 
                ? "bg-[#10B981]/5 border-[#10B981]/20" 
                : "bg-white/5 border-white/10"
            }`}>
              {selectedPlan === "essentiel" ? (
                <p className="text-white/70 text-sm font-sans">
                  <span className="text-[#ff7000] font-medium">Arbre statique</span> — 
                  L&apos;agent route le visiteur vers la bonne page selon ses réponses. Simple et efficace.
                </p>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#10B981]/20 flex items-center justify-center shrink-0">
                    <Brain className="w-6 h-6 text-[#10B981]" />
                  </div>
                  <p className="text-white/70 text-sm font-sans">
                    <span className="text-[#10B981] font-medium">Arbre intelligent</span> — 
                    L&apos;IA apprend de chaque conversation. Les données remontent vers le Dashboard en temps réel.
                  </p>
                </div>
              )}
            </div>
            
            {/* Tree visualization - split layout for optimise */}
            <div className={`grid gap-6 ${selectedPlan === "optimise" ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"}`}>
              {/* Main Tree */}
              <div className={`relative ${selectedPlan === "optimise" ? "lg:col-span-2" : ""}`}>
                {/* Animated glow for Plan Optimisé */}
                {selectedPlan === "optimise" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      boxShadow: "0 0 60px rgba(16, 185, 129, 0.1), inset 0 0 30px rgba(16, 185, 129, 0.05)"
                    }}
                  />
                )}

                {/* SVG for connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  {/* Lines with animation for Plan Optimisé */}
                  <line x1="50%" y1="40" x2="50%" y2="70" stroke={selectedPlan === "optimise" ? "rgba(16,185,129,0.5)" : "rgba(255,112,0,0.5)"} strokeWidth="2" />
                  {[10, 30, 50, 70, 90].map((x, i) => (
                    <g key={i}>
                      <line 
                        x1="50%" y1="110" x2={`${x}%`} y2="170" 
                        stroke={selectedPlan === "optimise" ? "rgba(16,185,129,0.3)" : "rgba(255,112,0,0.3)"} 
                        strokeWidth="1" 
                      />
                      <line 
                        x1={`${x}%`} y1="230" x2={`${x}%`} y2="270" 
                        stroke="rgba(16,185,129,0.3)" 
                        strokeWidth="1" 
                      />
                      {/* Animated particles for Plan Optimisé */}
                      {selectedPlan === "optimise" && (
                        <motion.circle
                          r="3"
                          fill="#10B981"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            cx: ["50%", `${x}%`, `${x}%`],
                            cy: [110, 170, 270]
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        />
                      )}
                    </g>
                  ))}
                </svg>
                
                <div className="relative flex flex-col items-center" style={{ zIndex: 1 }}>
                  {/* Start node */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`px-5 py-2.5 rounded-full text-white font-sans text-sm font-medium shadow-lg ${
                      selectedPlan === "optimise"
                        ? "bg-gradient-to-r from-[#10B981] to-[#059669]"
                        : "bg-gradient-to-r from-[#ff7000] to-[#f59e0b]"
                    }`}
                  >
                    Visiteur
                  </motion.div>
                  
                  {/* Q1 node */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`mt-8 px-4 py-2 bg-white/10 rounded-lg text-white font-sans text-xs border ${
                      selectedPlan === "optimise" ? "border-[#10B981]/50" : "border-[#ff7000]/50"
                    }`}
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
                        <motion.div 
                          className={`w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 ${
                            selectedPlan === "optimise" ? "border-[#10B981]" : ""
                          }`}
                          style={{ 
                            backgroundColor: selectedPlan === "optimise" ? "rgba(16,185,129,0.2)" : branch.color + "20", 
                            borderColor: selectedPlan === "optimise" ? "#10B981" : branch.color 
                          }}
                          animate={selectedPlan === "optimise" ? {
                            boxShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 15px rgba(16,185,129,0.5)", "0 0 0px rgba(16,185,129,0)"]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        >
                          {branch.id}
                        </motion.div>
                        <div className="mt-2 text-center h-8">
                          <p className="text-white/60 text-[10px] font-sans leading-tight">{branch.label.split("/")[0].trim()}</p>
                        </div>
                        {/* Destination with routing options for Plan Optimisé */}
                        <div className={`mt-4 px-2 py-1.5 rounded-lg ${
                          selectedPlan === "optimise"
                            ? "bg-[#10b981]/20 border border-[#10b981]/40"
                            : "bg-[#10b981]/10 border border-[#10b981]/30"
                        }`}>
                          <code className="text-[#10b981] text-[9px]">{branch.routes[0]?.destination.split("/").pop()}</code>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Multi-channel routing for Plan Optimisé */}
                  {selectedPlan === "optimise" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-6 flex items-center gap-4"
                    >
                      {[
                        { icon: Navigation, label: "Page", active: true },
                        { icon: Phone, label: "Tel", active: true },
                        { icon: Mail, label: "Email", active: true },
                      ].map((channel, i) => (
                        <motion.div
                          key={channel.label}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="flex items-center gap-2 px-3 py-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-lg"
                        >
                          <channel.icon className="w-4 h-4 text-[#10B981]" />
                          <span className="text-[#10B981] text-xs font-medium">{channel.label}</span>
                          <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            className="w-2 h-2 rounded-full bg-[#10B981]"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                  
                  {/* Fallback section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className={`mt-8 p-4 rounded-xl border w-full max-w-md ${
                      selectedPlan === "optimise"
                        ? "bg-[#10B981]/5 border-[#10B981]/20"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold ${
                        selectedPlan === "optimise" ? "bg-[#10B981]" : "bg-[#64748b]"
                      }`}>F</div>
                      <span className="text-white/70 text-xs font-sans font-medium">Fallback — Questions free-text</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {DECISION_BRANCHES[5].routes.slice(0, 4).map((route, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px]">
                          <MessageCircle className={`w-3 h-3 shrink-0 ${selectedPlan === "optimise" ? "text-[#10B981]" : "text-[#64748b]"}`} />
                          <span className="text-white/50 truncate">{route.path}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Intelligence Panel - Plan Optimisé only */}
              {selectedPlan === "optimise" && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-1"
                >
                  <div className="bg-gradient-to-br from-[#10B981]/10 to-transparent rounded-xl border border-[#10B981]/30 p-4 h-full relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-[#10B981]"
                          initial={{ opacity: 0, x: 0, y: "100%" }}
                          animate={{ opacity: [0, 1, 0], y: ["100%", "0%"] }}
                          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                          style={{ left: `${20 + i * 15}%` }}
                        />
                      ))}
                    </div>

                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4 relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-10 h-10 rounded-xl bg-[#10B981] flex items-center justify-center"
                      >
                        <Brain className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-white font-sans font-medium text-sm">Intelligence Active</h4>
                        <p className="text-[#10B981] text-[10px]">Apprentissage en temps réel</p>
                      </div>
                    </div>

                    {/* Learning Stats */}
                    <div className="space-y-3 relative">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-3 rounded-lg bg-white/5 border border-white/10"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/40 text-[10px] uppercase tracking-wider">Apprentissage</span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[#10B981] text-xs font-medium"
                          >
                            +12% ce mois
                          </motion.span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "78%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-[#10B981] to-[#34d399] rounded-full"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="p-3 rounded-lg bg-white/5 border border-white/10"
                      >
                        <span className="text-white/40 text-[10px] uppercase tracking-wider block mb-2">Données collectées</span>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { label: "Leads", value: "234" },
                            { label: "Conversations", value: "1.2K" },
                            { label: "Intentions", value: "89%" },
                            { label: "Conversion", value: "12%" },
                          ].map((stat, i) => (
                            <motion.div
                              key={stat.label}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.7 + i * 0.1 }}
                              className="text-center"
                            >
                              <span className="text-[#10B981] text-lg font-serif block">{stat.value}</span>
                              <span className="text-white/40 text-[9px]">{stat.label}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="p-3 rounded-lg bg-gradient-to-r from-[#10B981]/20 to-transparent border border-[#10B981]/30"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="w-3 h-3 text-[#10B981]" />
                          <span className="text-[#10B981] text-[10px] font-medium uppercase tracking-wider">Sync Dashboard</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-[#10B981]"
                          />
                          <span className="text-white/60 text-xs">Temps réel activé</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
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
  const [selectedPlan, setSelectedPlan] = useState<"essentiel" | "optimise">("essentiel")
  const [showOptimiseAnimation, setShowOptimiseAnimation] = useState(false)
  
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

  // Trigger animation when switching to Plan Optimisé
  useEffect(() => {
    if (selectedPlan === "optimise") {
      setShowOptimiseAnimation(true)
    }
  }, [selectedPlan])

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-6 overflow-hidden"
    >
      {/* Plan Toggle with visual indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedPlan("essentiel")}
            className={`px-5 py-2.5 rounded-xl text-sm font-sans font-medium transition-all ${
              selectedPlan === "essentiel"
                ? "bg-[#ff7000] text-white shadow-lg shadow-[#ff7000]/25"
                : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]"
            }`}
          >
            Plan Essentiel
          </button>
          <button
            onClick={() => setSelectedPlan("optimise")}
            className={`px-5 py-2.5 rounded-xl text-sm font-sans font-medium transition-all ${
              selectedPlan === "optimise"
                ? "bg-[#10B981] text-white shadow-lg shadow-[#10B981]/25"
                : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]"
            }`}
          >
            Plan Optimisé
          </button>
        </div>
        {selectedPlan === "optimise" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#10B981]/10 rounded-full border border-[#10B981]/30"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#10B981]"
            />
            <span className="text-xs text-[#10B981] font-sans font-medium">Intelligence Active</span>
          </motion.div>
        )}
      </div>

      <div className={`bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl overflow-hidden relative transition-all duration-500 ${
        selectedPlan === "optimise" ? "ring-2 ring-[#10B981]/30" : ""
      }`}>
        {/* Animated glow for Plan Optimisé */}
        {selectedPlan === "optimise" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 0 60px rgba(16, 185, 129, 0.1)" }}
          />
        )}

        {/* Header bar */}
        <div className={`px-6 py-4 flex items-center justify-between border-b transition-colors ${
          selectedPlan === "optimise" ? "bg-[#10B981]/10 border-[#10B981]/20" : "bg-[#1e293b] border-white/5"
        }`}>
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="w-3 h-3 rounded-full bg-[#10b981]" />
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className={`w-4 h-4 ${selectedPlan === "optimise" ? "text-[#10B981]" : "text-[#ff7000]"}`} />
              <span className="text-white font-sans text-sm font-medium">/admin/agent-stats</span>
              {selectedPlan === "optimise" && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="px-2 py-0.5 bg-[#10B981]/20 rounded text-[#10B981] text-[10px] font-medium"
                >
                  + Intelligence
                </motion.span>
              )}
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
              { label: "Conversations", value: "142", trend: "+12%", optimiseValue: "1,420", optimiseTrend: "+156%" },
              { label: "Devis demandés", value: "89", trend: "63%", optimiseValue: "890", optimiseTrend: "89%" },
              { label: "Ratio EN/FR", value: "78/22", trend: null, optimiseValue: "72/28", optimiseTrend: null },
              { label: "Conversion", value: "4.2%", trend: "+0.8%", optimiseValue: "12.8%", optimiseTrend: "+8.6%" },
            ].map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-3 rounded-lg border transition-all ${
                  selectedPlan === "optimise"
                    ? "bg-[#10B981]/5 border-[#10B981]/20"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <span className="text-[10px] text-white/40 uppercase tracking-wider font-sans">{kpi.label}</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <motion.span 
                    key={`${kpi.label}-${selectedPlan}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`text-xl font-sans font-bold ${selectedPlan === "optimise" ? "text-[#10B981]" : "text-white"}`}
                  >
                    {selectedPlan === "optimise" ? kpi.optimiseValue : kpi.value}
                  </motion.span>
                  {(selectedPlan === "optimise" ? kpi.optimiseTrend : kpi.trend) && (
                    <span className="text-[10px] text-[#10b981]">
                      {selectedPlan === "optimise" ? kpi.optimiseTrend : kpi.trend}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Main content area - different layout for each plan */}
          <AnimatePresence mode="wait">
            {selectedPlan === "essentiel" ? (
              <motion.div
                key="essentiel-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
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
                          style={{ backgroundColor: service.color, height: `${service.percentage * 1.5}px` }}
                        />
                        <span className="text-[8px] text-white/40 mt-1 truncate w-full text-center">{service.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* AI Report Button */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                  <AnimatePresence mode="wait">
                    {aiPhase === "idle" && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center h-full gap-3">
                        <button onClick={handleGenerateReport} className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#ff7000] to-[#f59e0b] rounded-lg text-white text-sm font-sans font-medium hover:opacity-90 transition-opacity">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Générer un rapport avec l&apos;IA
                        </button>
                        <span className="text-[10px] text-white/40 font-sans">Analyse automatique des données</span>
                      </motion.div>
                    )}
                    {aiPhase === "thinking" && (
                      <motion.div key="thinking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center h-full gap-3">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-8 h-8 border-2 border-[#ff7000]/30 border-t-[#ff7000] rounded-full" />
                        <span className="text-white/70 text-sm font-sans">Analyse en cours...</span>
                      </motion.div>
                    )}
                    {aiPhase === "done" && (
                      <motion.div key="done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2">
                        <div className="text-white/60 text-xs font-sans mb-2">Actions recommandées</div>
                        {[
                          { icon: "💡", label: "Conseil amélioration", desc: "Ajouter FAQ tracking sur page Reefer" },
                          { icon: "🎯", label: "Conseil stratégique", desc: "Focus acquisition cross-border Q3" },
                        ].map((action, i) => (
                          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                            <span className="text-lg">{action.icon}</span>
                            <div className="flex-1 min-w-0">
                              <span className="text-white/80 text-xs font-sans block">{action.label}</span>
                              <span className="text-white/40 text-[10px] font-sans truncate block">{action.desc}</span>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="optimise-content"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Top row - Funnel + Live Graph */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Animated Funnel */}
                  <div className="p-5 rounded-xl bg-gradient-to-br from-[#10B981]/10 to-transparent border border-[#10B981]/30 relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <TrendingUp className="w-4 h-4 text-[#10B981]" />
                      </motion.div>
                      <span className="text-[#10B981] text-xs font-sans font-medium uppercase tracking-wider">Funnel de conversion en direct</span>
                    </div>
                    
                    {/* Visual Funnel */}
                    <div className="relative h-48">
                      {[
                        { stage: "Visiteurs", value: 1420, percent: 100 },
                        { stage: "Engagés", value: 890, percent: 63 },
                        { stage: "Qualifiés", value: 340, percent: 24 },
                        { stage: "Convertis", value: 89, percent: 6 },
                      ].map((item, i) => (
                        <motion.div
                          key={item.stage}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="absolute left-0 right-0"
                          style={{ top: `${i * 25}%` }}
                        >
                          <div className="flex items-center gap-3">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.percent}%` }}
                              transition={{ delay: i * 0.2 + 0.3, duration: 0.8, ease: "easeOut" }}
                              className="h-8 rounded-r-lg bg-gradient-to-r from-[#10B981] to-[#34d399] relative overflow-hidden"
                              style={{ maxWidth: `${item.percent}%` }}
                            >
                              {/* Shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                              />
                            </motion.div>
                            <div className="flex items-baseline gap-2 shrink-0">
                              <span className="text-white text-sm font-bold">{item.value.toLocaleString()}</span>
                              <span className="text-white/40 text-xs">{item.stage}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Conversion rate highlight */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="mt-4 p-3 rounded-lg bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-between"
                    >
                      <span className="text-white/70 text-xs">Taux de conversion global</span>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5, type: "spring" }}
                        className="text-[#10B981] text-2xl font-serif font-bold"
                      >
                        6.27%
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Live Analytics Graph */}
                  <div className="p-5 rounded-xl bg-gradient-to-br from-[#10B981]/10 to-transparent border border-[#10B981]/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-[#10B981]" />
                        <span className="text-[#10B981] text-xs font-sans font-medium uppercase tracking-wider">Tendance 7 jours</span>
                      </div>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex items-center gap-1"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                        <span className="text-[10px] text-[#10B981]">Live</span>
                      </motion.div>
                    </div>
                    
                    {/* Animated line graph */}
                    <div className="h-32 relative">
                      <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                        {/* Grid lines */}
                        {[0, 25, 50, 75, 100].map((y) => (
                          <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                        ))}
                        
                        {/* Animated area fill */}
                        <motion.path
                          d="M 0 80 L 30 70 L 60 75 L 90 50 L 120 45 L 150 30 L 180 35 L 200 20 L 200 100 L 0 100 Z"
                          fill="url(#greenGradient)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                        />
                        
                        {/* Animated line */}
                        <motion.path
                          d="M 0 80 L 30 70 L 60 75 L 90 50 L 120 45 L 150 30 L 180 35 L 200 20"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        
                        {/* Data points */}
                        {[[0, 80], [30, 70], [60, 75], [90, 50], [120, 45], [150, 30], [180, 35], [200, 20]].map(([x, y], i) => (
                          <motion.circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="4"
                            fill="#10B981"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 * i + 0.5 }}
                          />
                        ))}
                        
                        <defs>
                          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* X-axis labels */}
                      <div className="flex justify-between mt-2">
                        {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
                          <span key={day} className="text-[9px] text-white/30">{day}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom row - AI Insights + Predictions + Context */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* AI Strategic Recommendations */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#10B981]/15 to-transparent border border-[#10B981]/40 relative overflow-hidden">
                    <motion.div
                      className="absolute top-2 right-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Brain className="w-16 h-16 text-[#10B981]/10" />
                    </motion.div>
                    
                    <div className="flex items-center gap-2 mb-3 relative">
                      <Brain className="w-4 h-4 text-[#10B981]" />
                      <span className="text-[#10B981] text-xs font-sans font-medium uppercase tracking-wider">AI Recommandations</span>
                    </div>
                    
                    <div className="space-y-2 relative">
                      {[
                        { text: "Renforcer acquisition cross-border US", priority: "Haute", impact: "+23% leads" },
                        { text: "Optimiser landing page Reefer", priority: "Moyenne", impact: "+12% conv." },
                        { text: "Lancer campagne Heavy Haul", priority: "Basse", impact: "+8% reach" },
                      ].map((rec, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.15 }}
                          className="p-2 rounded-lg bg-white/5 border border-white/10"
                        >
                          <div className="flex items-start gap-2">
                            <span className={`px-1.5 py-0.5 rounded text-[8px] font-medium ${
                              rec.priority === "Haute" ? "bg-[#ef4444]/20 text-[#ef4444]" :
                              rec.priority === "Moyenne" ? "bg-[#f59e0b]/20 text-[#f59e0b]" :
                              "bg-white/10 text-white/40"
                            }`}>{rec.priority}</span>
                            <div className="flex-1">
                              <span className="text-white/80 text-[11px] block leading-tight">{rec.text}</span>
                              <span className="text-[#10B981] text-[10px] font-medium">{rec.impact}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Predictive Analytics */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-[#10B981]" />
                      <span className="text-white/60 text-xs font-sans font-medium uppercase tracking-wider">Prévisions Q3</span>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { label: "Leads projetés", current: "890", projected: "1,420", change: "+59%" },
                        { label: "Revenue estimé", current: "$45K", projected: "$72K", change: "+60%" },
                        { label: "Pic attendu", current: "-", projected: "15 Juil", change: null },
                      ].map((pred, i) => (
                        <motion.div
                          key={pred.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + i * 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-white/40 text-[10px]">{pred.label}</span>
                            {pred.change && (
                              <span className="text-[#10B981] text-[10px] font-medium">{pred.change}</span>
                            )}
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-white/30 text-sm line-through">{pred.current}</span>
                            <motion.span
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              className="text-[#10B981] text-lg font-bold"
                            >
                              {pred.projected}
                            </motion.span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Context */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Database className="w-4 h-4 text-[#10B981]" />
                      <span className="text-white/60 text-xs font-sans font-medium uppercase tracking-wider">Contexte opérations</span>
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        { label: "Capacité fleet", value: "78%", status: "optimal" },
                        { label: "Drivers disponibles", value: "12/15", status: "warning" },
                        { label: "Routes actives", value: "34", status: "optimal" },
                        { label: "Délai moyen", value: "2.3j", status: "optimal" },
                      ].map((ctx, i) => (
                        <motion.div
                          key={ctx.label}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                          className="flex items-center justify-between p-2 rounded-lg bg-white/5"
                        >
                          <span className="text-white/50 text-[11px]">{ctx.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-white text-xs font-medium">{ctx.value}</span>
                            <span className={`w-2 h-2 rounded-full ${
                              ctx.status === "optimal" ? "bg-[#10B981]" : "bg-[#f59e0b]"
                            }`} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] text-white/30">
              <motion.span 
                animate={selectedPlan === "optimise" ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
                className={`w-1.5 h-1.5 rounded-full ${selectedPlan === "optimise" ? "bg-[#10B981]" : "bg-[#ff7000]"}`} 
              />
              <span>Données anonymisées — Conforme Loi 25</span>
            </div>
            <span className="text-[10px] text-white/20">
              {selectedPlan === "optimise" ? "Sync temps réel" : "Dernière mise à jour: il y a 2h"}
            </span>
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
              Les 4 features phares d&apos;un agent IA Safex x TechGuys
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
