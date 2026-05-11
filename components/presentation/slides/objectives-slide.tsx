"use client"

import { useState } from "react"
import { SlideWrapper } from "../slide-wrapper"
import { AnimatedDiv, AnimatedContainer, AnimatedItem } from "../animated-wrapper"
import { MessageSquare, Navigation, BarChart3, Blocks, ChevronDown, ArrowRight, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
      "Un bouton flottant present sur toutes les pages, qui ouvre un panneau de conversation elegant et responsive. Le visiteur interagit via des chips cliquables ou en langage naturel avec un LLM performant.",
    problemsLabel: "Benefices business",
    problems: [
      "Plus de visiteurs perdus — chaque prospect est guide vers le bon service",
      "Engagement 24/7 sans mobiliser de ressources humaines",
      "Experience utilisateur personnalisee des la premiere interaction",
    ],
    expandable: false,
  },
  {
    icon: Navigation,
    number: "02",
    title: "Flow de qualification structure",
    description:
      "Trois questions avec chips cliquables pour qualifier rapidement le visiteur : type de cargo, destination, urgence. En moins de 60 secondes, l'agent route vers la bonne page service ou le formulaire de devis.",
    problemsLabel: "Benefices business",
    problems: [
      "Leads mieux qualifies avant d'arriver a l'equipe commerciale",
      "Temps des sales concentre sur les prospects a haute intention",
      "Donnees d'intention capturees pour chaque visiteur",
    ],
    expandable: true,
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Analytics sans PII + Dashboard admin",
    description:
      "Les chemins de navigation anonymises sont logges en temps reel. Un dashboard protege /admin/agent-stats donne une vue complete des conversations, du funnel de conversion et des services les plus demandes.",
    problemsLabel: "Benefices business",
    problems: [
      "Decisions basees sur des donnees, pas des intuitions",
      "Conformite Loi 25 assuree sans compromis sur les insights",
      "Identification des services les plus recherches pour orienter le business",
    ],
    expandable: false,
  },
  {
    icon: Blocks,
    number: "04",
    title: "Scalable et extensible",
    description:
      "Architecture modulaire concue pour evoluer : emails automatises vers les sales, integration dans le systeme de vente, interactions intra-site et extra-site avec les outils Safex, API ouverte pour connecter d'autres systemes.",
    problemsLabel: "Benefices business",
    problems: [
      "Investissement one-shot — pas d'abonnement mensuel qui explose",
      "Propriete totale du modele et des donnees, zero dependance externe",
      "Scalable a l'infini pour supporter la croissance vers 5 bureaux",
    ],
    expandable: false,
  },
]

// Workflow visualization component
function WorkflowVisualization() {
  const [activeTab, setActiveTab] = useState<"questions" | "tree">("questions")

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-6 overflow-hidden"
    >
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
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
          onClick={() => setActiveTab("tree")}
          className={`px-4 py-2 rounded-lg text-sm font-sans transition-all ${
            activeTab === "tree"
              ? "bg-[#0f172a] text-white"
              : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]"
          }`}
        >
          Arbre de decision
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "questions" ? (
          <motion.div
            key="questions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f172a] rounded-xl p-6 font-mono text-sm"
          >
            {WORKFLOW_QUESTIONS.map((q, qIndex) => (
              <div key={q.id} className={qIndex > 0 ? "mt-6" : ""}>
                <div className="text-white/70 mb-3">
                  <span className="text-[#ff7000]">{q.id}</span> — {q.question}
                </div>
                <div className="flex flex-wrap gap-2">
                  {q.chips.map((chip, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: qIndex * 0.1 + i * 0.05 }}
                      className="px-4 py-2 border border-white/20 rounded-lg text-white/90 hover:border-[#ff7000]/50 hover:bg-[#ff7000]/10 transition-all cursor-pointer"
                    >
                      <div className="text-xs">{chip.label}</div>
                      {chip.sublabel && <div className="text-[10px] text-white/50">{chip.sublabel}</div>}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="tree"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f172a] rounded-xl p-6 font-mono text-xs overflow-x-auto"
          >
            {/* Start node */}
            <div className="text-white/50 mb-4">START</div>
            <div className="border border-white/20 rounded-lg p-3 mb-6 max-w-md">
              <div className="text-white/70 text-[11px]">Message de bienvenue contextuel</div>
              <div className="text-[#10B981] text-[10px] mt-1">EN: &quot;Hi! What are you looking to ship today?&quot;</div>
              <div className="text-[#10B981] text-[10px]">FR: &quot;Bonjour ! Qu&apos;est-ce que vous expediez aujourd&apos;hui ?&quot;</div>
            </div>

            {/* Decision branches */}
            <div className="flex flex-col gap-4">
              {DECISION_BRANCHES.map((branch, bIndex) => (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: bIndex * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-6 h-6 rounded flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ backgroundColor: branch.color }}
                    >
                      {branch.id}
                    </div>
                    <span className="text-white/90">{branch.label}</span>
                  </div>
                  <div className="ml-8 flex flex-col gap-1">
                    {branch.routes.map((route, rIndex) => (
                      <div key={rIndex} className="flex items-center gap-2 text-white/60">
                        <span className="text-white/40">├──</span>
                        <span>{route.path}</span>
                        <ArrowRight className="w-3 h-3 text-[#ff7000]" />
                        <code className="text-[#10B981]">{route.destination}</code>
                        {route.message && (
                          <span className="flex items-center gap-1 text-[#64748b]">
                            <MessageCircle className="w-3 h-3" />
                            <span className="italic">&quot;{route.message}&quot;</span>
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
              03 / La feature
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
                        <span>{expandedFeature === feature.number ? "Masquer le workflow" : "Voir le workflow Q1/Q2/Q3"}</span>
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

                {/* Expandable workflow section */}
                <AnimatePresence>
                  {feature.expandable && expandedFeature === feature.number && (
                    <WorkflowVisualization />
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
