import { SlideWrapper } from "../slide-wrapper"
import { Zap, Clock, ArrowRight, CheckCircle2, TrendingDown, FileText, Globe, Layout, Code, Database, Wrench } from "lucide-react"

const PHASES = [
  {
    phase: "Phase 1",
    name: "Architecture & Configuration du projet",
    tradLow: 32,
    tradHigh: 45,
    aiLow: 4,
    aiHigh: 7,
    aiMid: 6,
  },
  {
    phase: "Phase 2",
    name: "Design System & Composants partagés",
    tradLow: 42,
    tradHigh: 56,
    aiLow: 10,
    aiHigh: 17,
    aiMid: 14,
  },
  {
    phase: "Phase 3",
    name: "Templates de pages",
    tradLow: 237,
    tradHigh: 322,
    aiLow: 62,
    aiHigh: 106,
    aiMid: 84,
    highlight: true,
  },
  {
    phase: "Phase 4",
    name: "Migration du contenu",
    tradLow: 74,
    tradHigh: 106,
    aiLow: 24,
    aiHigh: 43,
    aiMid: 34,
  },
  {
    phase: "Phase 5",
    name: "Intégrations & Services tiers",
    tradLow: 17,
    tradHigh: 24,
    aiLow: 5,
    aiHigh: 8,
    aiMid: 6,
  },
  {
    phase: "Phase 6",
    name: "SEO & Préservation des URLs",
    tradLow: 21,
    tradHigh: 29,
    aiLow: 6,
    aiHigh: 9,
    aiMid: 7,
  },
  {
    phase: "Phase 7",
    name: "QA, Performance & Lancement",
    tradLow: 35,
    tradHigh: 50,
    aiLow: 13,
    aiHigh: 21,
    aiMid: 17,
  },
]

const SCOPE_METRICS = [
  { icon: Layout, value: "31", label: "Templates uniques", description: "Pages marketing, produits, blog, études de cas..." },
  { icon: FileText, value: "485", label: "URLs totales", description: "Contenu bilingue FR/EN à migrer" },
  { icon: Globe, value: "~318", label: "Pièces de contenu", description: "198 articles + 50 études de cas + guides" },
  { icon: Code, value: "3", label: "Outils interactifs", description: "Calculateurs ROI + Diagnostic CX" },
]

const COMPLEXITY_ITEMS = [
  { title: "Homepage", desc: "Page phare avec sections multiples, animations, social proof" },
  { title: "11 pages produits", desc: "Features CX, Patient, E-Réputation, Employés — optimisées conversion" },
  { title: "13 pages industries", desc: "Verticales avec contenu personnalisé et preuves sociales" },
  { title: "Calculateurs ROI", desc: "Logique conditionnelle, calculs dynamiques, résultats personnalisés" },
  { title: "Migration blog", desc: "198 articles avec préservation URLs, métadonnées, images" },
  { title: "Architecture bilingue", desc: "FR/EN sur toutes les pages avec next-intl" },
]

const KEY_ASSUMPTIONS = [
  "Design inchangé — développement et migration uniquement",
  "IA (Cursor + Claude) pour scaffolding, composants et scripts",
  "Stack : Next.js 14+ (App Router), TypeScript, Tailwind, next-intl",
  "Migration contenu semi-automatisée (~15% révision manuelle)",
  "Inclut : 31 templates, QA responsive, SEO, intégrations de base",
  "Exclut : rédaction, traductions, design graphique, gestion de projet",
]

export function DiagnosticsSlide() {
  const totalTradLow = PHASES.reduce((acc, p) => acc + p.tradLow, 0)
  const totalTradHigh = PHASES.reduce((acc, p) => acc + p.tradHigh, 0)
  const totalAiLow = PHASES.reduce((acc, p) => acc + p.aiLow, 0)
  const totalAiHigh = PHASES.reduce((acc, p) => acc + p.aiHigh, 0)
  const totalAiMid = PHASES.reduce((acc, p) => acc + p.aiMid, 0)
  const tradMidpoint = Math.round((totalTradLow + totalTradHigh) / 2)
  const hoursSaved = tradMidpoint - totalAiMid
  const percentSaved = Math.round((hoursSaved / tradMidpoint) * 100)

  return (
    <SlideWrapper id="diagnostics" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-3 mb-8">
          <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
            03 / Estimation des coûts
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2d3748] max-w-3xl leading-tight text-balance">
            Migration WordPress vers Next.js
          </h2>
          <p className="text-base text-[#6b7280] font-sans max-w-3xl">
            Analyse complète du périmètre et estimation détaillée du projet de refonte
          </p>
          <div className="w-16 h-px bg-[#387B84]" />
        </div>

        {/* Scope Metrics - Why it costs this much */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-[#2d3748] mb-4 flex items-center gap-2">
            <Database className="w-4 h-4 text-[#387B84]" />
            Ampleur du mandat
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SCOPE_METRICS.map((metric, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-gradient-to-br from-[#387B84]/5 to-[#387B84]/10 border border-[#387B84]/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#387B84] flex items-center justify-center">
                    <metric.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-serif text-3xl text-[#387B84] font-bold">{metric.value}</span>
                </div>
                <p className="text-sm font-semibold text-[#2d3748] mb-1">{metric.label}</p>
                <p className="text-xs text-[#6b7280]">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Complexity breakdown */}
        <div className="mb-8 p-6 rounded-xl bg-[#FFF8F3] border border-[#F6A878]/30">
          <h3 className="text-sm font-semibold text-[#2d3748] mb-4 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-[#F6A878]" />
            Éléments à haute complexité
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {COMPLEXITY_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#F6A878]/20">
                <div className="w-6 h-6 rounded-full bg-[#F6A878] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-white">{idx + 1}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2d3748]">{item.title}</p>
                  <p className="text-xs text-[#6b7280]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main table - Hero element */}
        <div className="mb-8 overflow-hidden rounded-2xl border-2 border-[#387B84]/20 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#387B84]">
                  <th className="text-left px-6 py-4 font-sans font-semibold text-white text-base">Phase du projet</th>
                  <th className="text-center px-4 py-4 font-sans font-semibold text-white/90 border-l border-white/20" colSpan={2}>
                    <div className="flex flex-col">
                      <span>Sans IA</span>
                      <span className="text-xs font-normal text-white/70">(heures)</span>
                    </div>
                  </th>
                  <th className="text-center px-4 py-4 font-sans font-semibold text-[#2d3748] bg-[#F6A878] border-l border-[#e5a060]" colSpan={3}>
                    <div className="flex flex-col">
                      <span>Avec IA (Cursor)</span>
                      <span className="text-xs font-normal text-[#2d3748]/70">(heures)</span>
                    </div>
                  </th>
                </tr>
                <tr className="bg-[#f0f4f5] border-b-2 border-[#387B84]/10">
                  <th className="text-left px-6 py-2 font-sans font-normal text-[#6b7280] text-xs"></th>
                  <th className="text-center px-4 py-2 font-sans font-normal text-[#6b7280] text-xs border-l border-[#e5e7eb]">Min</th>
                  <th className="text-center px-4 py-2 font-sans font-normal text-[#6b7280] text-xs">Max</th>
                  <th className="text-center px-4 py-2 font-sans font-normal text-[#6b7280] text-xs border-l border-[#e5e7eb] bg-[#F6A878]/10">Min</th>
                  <th className="text-center px-4 py-2 font-sans font-normal text-[#6b7280] text-xs bg-[#F6A878]/10">Max</th>
                  <th className="text-center px-4 py-2 font-sans font-semibold text-[#387B84] text-xs bg-[#F6A878]/20">Moy.</th>
                </tr>
              </thead>
              <tbody>
                {PHASES.map((phase, idx) => (
                  <tr 
                    key={phase.phase} 
                    className={`border-b border-[#e5e7eb] transition-colors hover:bg-[#f7f9fa] ${phase.highlight ? 'bg-[#387B84]/5' : idx % 2 === 0 ? 'bg-white' : 'bg-[#fafbfc]'}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs text-[#387B84] font-semibold tracking-wide">{phase.phase}</span>
                        <span className="text-[#2d3748] font-sans text-sm font-medium">{phase.name}</span>
                      </div>
                    </td>
                    <td className="text-center px-4 py-4 text-[#6b7280] font-mono border-l border-[#e5e7eb]">{phase.tradLow}</td>
                    <td className="text-center px-4 py-4 text-[#6b7280] font-mono">{phase.tradHigh}</td>
                    <td className="text-center px-4 py-4 text-[#387B84] font-mono font-medium border-l border-[#e5e7eb] bg-[#F6A878]/5">{phase.aiLow}</td>
                    <td className="text-center px-4 py-4 text-[#387B84] font-mono font-medium bg-[#F6A878]/5">{phase.aiHigh}</td>
                    <td className="text-center px-4 py-4 text-[#387B84] font-mono font-bold bg-[#F6A878]/10">{phase.aiMid}</td>
                  </tr>
                ))}
              </tbody>
              {/* Total row - emphasized */}
              <tfoot>
                <tr className="bg-[#387B84] text-white font-semibold">
                  <td className="px-6 py-5 font-sans text-base">TOTAL ESTIMÉ</td>
                  <td className="text-center px-4 py-5 font-mono text-lg border-l border-white/20">{totalTradLow}</td>
                  <td className="text-center px-4 py-5 font-mono text-lg">{totalTradHigh}</td>
                  <td className="text-center px-4 py-5 font-mono text-lg text-[#2d3748] bg-[#F6A878] border-l border-[#e5a060]">{totalAiLow}</td>
                  <td className="text-center px-4 py-5 font-mono text-lg text-[#2d3748] bg-[#F6A878]">{totalAiHigh}</td>
                  <td className="text-center px-4 py-5 font-mono text-xl font-bold text-[#2d3748] bg-[#F6A878]">{totalAiMid}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* AI Productivity Gain - Prominent card */}
        <div className="mb-8 p-8 rounded-2xl bg-gradient-to-br from-[#387B84] to-[#2d5a60] text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F6A878] flex items-center justify-center shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-white mb-1">Gain de productivité avec l{"'"}IA</h3>
                <p className="text-sm text-white/70">Économies réalisées vs développement traditionnel</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-white/10">
                <span className="text-xs text-white/60 uppercase tracking-wider">Traditionnel</span>
                <span className="font-serif text-3xl text-white/90">{tradMidpoint}h</span>
              </div>
              
              <ArrowRight className="w-6 h-6 text-[#F6A878]" />
              
              <div className="flex flex-col items-center px-4 py-2 rounded-xl bg-white/10">
                <span className="text-xs text-white/60 uppercase tracking-wider">Avec IA</span>
                <span className="font-serif text-3xl text-[#F6A878]">{totalAiMid}h</span>
              </div>
              
              <div className="flex flex-col items-center px-6 py-3 rounded-xl bg-[#F6A878] text-[#2d3748]">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" />
                  <span className="font-serif text-3xl font-bold">{hoursSaved}h</span>
                </div>
                <span className="text-xs font-medium">économisées ({percentSaved}%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Assumptions - Clean grid */}
        <div className="p-6 rounded-xl bg-[#f7f9fa] border border-[#e5e7eb]">
          <h3 className="text-xs tracking-[0.2em] uppercase text-[#387B84] font-sans font-semibold mb-4">
            Hypothèses et périmètre du projet
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {KEY_ASSUMPTIONS.map((assumption, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#4a5568]">
                <CheckCircle2 className="w-4 h-4 text-[#387B84] shrink-0 mt-0.5" />
                <span>{assumption}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideWrapper>
  )
}
