"use client"

import FlowArt, { FlowSection } from '@/components/ui/story-scroll'
import { client, pricing, calendar } from "@/lib/proposal-data"
import { 
  Building2, Target, Zap, Shield, TrendingUp, Calendar as CalendarIcon, 
  CheckCircle2, ArrowRight, CreditCard, Users, FileText, BarChart3,
  Sparkles, Clock, Database, Lock
} from "lucide-react"

// Derive modules and options from pricing
const modules = pricing.mvp.modules
const options = pricing.options
const milestones = calendar.weeks

// Calculate total price from modules (prix unique, contingence incluse)
const baseHours = modules.reduce((sum, m) => sum + m.hours, 0)
const totalHours = baseHours + Math.round(baseHours * (pricing.mvp.contingencyPercent / 100))
const totalPrice = totalHours * pricing.hourlyRate
const infraPrice = (modules.find(m => m.id === 'infra')?.hours || 0) * pricing.hourlyRate
const devPrice = modules.filter(m => !['infra', 'tests'].includes(m.id)).reduce((sum, m) => sum + m.hours, 0) * pricing.hourlyRate
const testPrice = (modules.find(m => m.id === 'tests')?.hours || 0) * pricing.hourlyRate

// TechGuys Logo SVG
function TechGuysLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="120" height="28" viewBox="0 0 669 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="160" rx="30" fill="#FD85D3"/>
      <g clipPath="url(#clip0)">
        <path fillRule="evenodd" clipRule="evenodd" d="M96.9867 115.085V93.013C96.9867 86.6791 93.7587 80.8882 88.2748 77.7081L62.113 62.5339V115.085C62.113 124.761 69.9198 132.604 79.552 132.604C89.1839 132.604 96.9867 124.761 96.9867 115.085Z" fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M114.42 27.5012H92.4482C86.143 27.5012 80.3784 30.7439 77.2126 36.2528L62.1069 62.5335H114.42C124.052 62.5335 131.86 54.6905 131.86 45.0147C131.86 35.3442 124.052 27.5012 114.42 27.5012Z" fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M44.6733 27.4962C54.3052 27.4962 62.1131 35.3392 62.1131 45.0149V62.5337H44.6733C35.0414 62.5337 27.2335 54.6907 27.2335 45.0149C27.2335 35.3392 35.0414 27.4962 44.6733 27.4962Z" fill="white"/>
      </g>
      <path d="M225.5 125.63C219.55 125.63 214.93 123.95 211.64 120.59C208.35 117.23 206.705 112.505 206.705 106.415V78.905H196.73V68.195H198.305C200.965 68.195 203.03 67.425 204.5 65.885C205.97 64.345 206.705 62.245 206.705 59.585V55.175H218.57V68.195H231.485V78.905H218.57V105.89C218.57 107.85 218.885 109.53 219.515 110.93C220.145 112.26 221.16 113.31 222.56 114.08C223.96 114.78 225.78 115.13 228.02 115.13C228.58 115.13 229.21 115.095 229.91 115.025C230.61 114.955 231.275 114.885 231.905 114.815V125C230.925 125.14 229.84 125.28 228.65 125.42C227.46 125.56 226.41 125.63 225.5 125.63Z" fill="white"/>
      <path d="M269.128 126.26C263.458 126.26 258.418 124.965 254.008 122.375C249.668 119.715 246.273 116.145 243.823 111.665C241.373 107.115 240.148 102.04 240.148 96.44C240.148 90.7 241.373 85.625 243.823 81.215C246.343 76.805 249.703 73.34 253.903 70.82C258.103 68.23 262.863 66.935 268.183 66.935C273.503 66.935 278.228 68.16 282.358 70.61C286.488 72.99 289.708 76.35 292.018 80.69C294.398 85.03 295.588 90.07 295.588 95.81C295.588 96.65 295.553 97.525 295.483 98.435C295.413 99.275 295.308 100.15 295.168 101.06H252.223V92.168H284.248L278.053 95.81C278.053 92.52 277.458 89.72 276.268 87.41C275.078 85.1 273.433 83.315 271.333 82.055C269.233 80.795 266.818 80.165 264.088 80.165C261.358 80.165 258.943 80.795 256.843 82.055C254.743 83.315 253.098 85.135 251.908 87.515C250.718 89.825 250.123 92.66 250.123 96.02C250.123 99.38 250.753 102.285 252.013 104.735C253.273 107.185 255.058 109.075 257.368 110.405C259.678 111.735 262.408 112.4 265.558 112.4C268.358 112.4 270.878 111.875 273.118 110.825C275.358 109.775 277.248 108.235 278.788 106.205L288.973 114.08C286.593 117.58 283.408 120.31 279.418 122.27C275.498 124.16 271.053 126.26 269.128 126.26Z" fill="white"/>
      <path d="M334.817 126.26C329.147 126.26 324.002 124.965 319.382 122.375C314.832 119.785 311.227 116.215 308.567 111.665C305.977 107.115 304.682 102.04 304.682 96.44C304.682 90.84 305.977 85.8 308.567 81.32C311.227 76.77 314.867 73.2 319.487 70.61C324.107 68.02 329.252 66.725 334.922 66.725C340.662 66.725 345.702 67.985 350.042 70.505C354.452 72.955 357.812 76.385 360.122 80.795L348.677 87.935C347.137 85.135 345.142 83.035 342.692 81.635C340.242 80.165 337.477 79.43 334.397 79.43C331.177 79.43 328.307 80.165 325.787 81.635C323.337 83.105 321.412 85.17 320.012 87.83C318.612 90.42 317.912 93.5 317.912 97.07C317.912 100.57 318.612 103.65 320.012 106.31C321.412 108.9 323.337 110.93 325.787 112.4C328.307 113.87 331.177 114.605 334.397 114.605C337.477 114.605 340.242 113.905 342.692 112.505C345.142 111.035 347.137 108.9 348.677 106.1L360.122 113.24C357.812 117.65 354.452 121.115 350.042 123.635C345.702 126.085 340.627 126.26 334.817 126.26Z" fill="white"/>
      <path d="M398.663 66.935C403.563 66.935 407.868 67.88 411.578 69.77C415.358 71.66 418.298 74.53 420.398 78.38C422.568 82.16 423.653 87.025 423.653 92.975V125H411.578V94.865C411.578 89.545 410.318 85.59 407.798 82.895C405.278 80.2 401.778 78.905 397.298 78.905C394.148 78.905 391.348 79.57 388.898 80.9C386.448 82.23 384.523 84.19 383.123 86.78C381.723 89.37 381.023 92.52 381.023 96.23V125H368.948V50.93H381.023V80.69L378.436 76.63C380.466 73.62 383.228 71.275 386.728 69.595C390.228 67.845 394.218 66.935 398.663 66.935Z" fill="white"/>
    </svg>
  )
}

export default function StoryScrollPage() {
  return (
    <FlowArt aria-label="Proposition commerciale Groupe Laplante">
      {/* Section 1: Cover */}
      <FlowSection 
        aria-label="Couverture" 
        style={{ backgroundColor: '#030318', color: '#fff' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/30 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-[#0066FF]" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]">Proposition Commerciale</p>
        </div>
        
        <hr className="my-[2vw] border-none border-t border-white/10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div>
          <h1 className="text-[clamp(2.5rem,10vw,10rem)] font-bold leading-[0.9] uppercase tracking-tight">
            Plateforme
            <br />
            <span className="text-[#0066FF]">LOS Laplante</span>
          </h1>
        </div>
        
        <hr className="my-[2vw] border-none border-t border-white/10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="flex flex-wrap gap-8 items-end justify-between">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.2em] uppercase text-white/40">À l{"'"}attention de</p>
            <p className="text-2xl font-semibold">{client.contactName}</p>
            <p className="text-white/50">{client.name}</p>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <p className="text-xs tracking-[0.2em] uppercase text-white/40">Partenaire tech stratégique</p>
            <TechGuysLogo />
          </div>
        </div>
      </FlowSection>

      {/* Section 2: Context */}
      <FlowSection 
        aria-label="Le contexte" 
        style={{ backgroundColor: '#0a0a1a', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]">01 — Le Contexte</p>
        
        <hr className="my-[2vw] border-none h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        
        <div>
          <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight">
            Reprendre
            <br />
            Le Contrôle
          </h2>
        </div>
        
        <hr className="my-[2vw] border-none h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        
        <p className="max-w-[60ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-white/70">
          <span className="text-white font-medium">{client.name}</span> opère un réseau de <span className="text-[#0066FF] font-semibold">5 concessions automobiles</span> au Québec. 
          Actuellement, les demandes de financement sont soumises à des institutions tierces, entraînant une perte de contrôle et de marge.
        </p>
        
        <hr className="my-[2vw] border-none h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[200px] flex-1 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="w-5 h-5 text-[#0066FF]" />
              <p className="text-sm font-bold uppercase tracking-wider">Problème</p>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Perte de 1-3% de marge sur chaque financement cédé aux institutions tierces
            </p>
          </div>
          <div className="min-w-[200px] flex-1 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-[#0066FF]" />
              <p className="text-sm font-bold uppercase tracking-wider">Délais</p>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Processus d{"'"}approbation non maîtrisé, délais variables et frustrants
            </p>
          </div>
          <div className="min-w-[200px] flex-1 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-[#0066FF]" />
              <p className="text-sm font-bold uppercase tracking-wider">Relation</p>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Cession de la relation client à l{"'"}institution financière externe
            </p>
          </div>
        </div>
      </FlowSection>

      {/* Section 3: Solution */}
      <FlowSection 
        aria-label="La solution" 
        style={{ backgroundColor: '#0066FF', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">02 — La Solution</p>
        
        <hr className="my-[2vw] border-none h-px bg-white/20" />
        
        <div>
          <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight">
            LOS Laplante
            <br />
            Platform
          </h2>
        </div>
        
        <hr className="my-[2vw] border-none h-px bg-white/20" />
        
        <p className="max-w-[60ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-white/80">
          Une plateforme complète pour internaliser le financement automobile, 
          de la soumission à la collecte, en passant par la gestion du cycle de vie des prêts.
        </p>
        
        <hr className="my-[2vw] border-none h-px bg-white/20" />
        
        <div className="flex flex-wrap gap-[3vw]">
          {modules.slice(0, 7).map((module, index) => (
            <div key={module.id} className="min-w-[200px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white/90">
                {String(index + 1).padStart(2, '0')} — {module.name}
              </p>
              <p className="text-sm leading-relaxed text-white/70">
                {module.description}
              </p>
            </div>
          ))}
        </div>
        
        <hr className="my-[2vw] border-none h-px bg-white/20" />
        
        <div className="flex flex-wrap gap-[3vw]">
          {modules.slice(7, 15).map((module, index) => (
            <div key={module.id} className="min-w-[200px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-white/90">
                {String(index + 8).padStart(2, '0')} — {module.name}
              </p>
              <p className="text-sm leading-relaxed text-white/70">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* Section 4: Pricing */}
      <FlowSection 
        aria-label="Investissement" 
        style={{ backgroundColor: '#050510', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]">03 — Investissement</p>
        
        <hr className="my-[2vw] border-none h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        
        <div>
          <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight">
            <span className="text-[#0066FF]">{totalPrice.toLocaleString('fr-CA')}$</span>
            <br />
            Forfait Clé
            <br />
            En Main
          </h2>
        </div>
        
        <hr className="my-[2vw] border-none h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[200px] flex-1 p-6 rounded-2xl bg-[#0066FF]/10 border border-[#0066FF]/30">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-5 h-5 text-[#0066FF]" />
              <p className="text-sm font-bold uppercase tracking-wider">Infrastructure</p>
            </div>
            <p className="text-3xl font-bold text-[#0066FF] mb-1">{infraPrice.toLocaleString('fr-CA')}$</p>
            <p className="text-sm text-white/50">Cloud, sécurité, DevOps</p>
          </div>
          <div className="min-w-[200px] flex-1 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-5 h-5 text-[#0066FF]" />
              <p className="text-sm font-bold uppercase tracking-wider">Développement</p>
            </div>
            <p className="text-3xl font-bold mb-1">{devPrice.toLocaleString('fr-CA')}$</p>
            <p className="text-sm text-white/50">15 modules complets</p>
          </div>
          <div className="min-w-[200px] flex-1 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-5 h-5 text-[#0066FF]" />
              <p className="text-sm font-bold uppercase tracking-wider">Tests & QA</p>
            </div>
            <p className="text-3xl font-bold mb-1">{testPrice.toLocaleString('fr-CA')}$</p>
            <p className="text-sm text-white/50">Validation complète</p>
          </div>
        </div>
        
        <hr className="my-[2vw] border-none h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        
        <div className="flex flex-wrap gap-6">
          {options.map((option) => (
            <div 
              key={option.id}
              className={`flex-1 min-w-[280px] p-6 rounded-2xl border ${
                option.recommended 
                  ? 'bg-[#0066FF]/10 border-[#0066FF]/40' 
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {option.recommended && (
                <span className="inline-block px-3 py-1 rounded-full bg-[#0066FF] text-xs font-bold uppercase tracking-wider mb-3">
                  Recommandé
                </span>
              )}
              <p className="text-lg font-bold mb-2">{option.name}</p>
              <p className="text-2xl font-bold text-[#0066FF] mb-2">+{(option.hours * pricing.hourlyRate).toLocaleString('fr-CA')}$</p>
              <p className="text-sm text-white/50">{option.description}</p>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* Section 5: Timeline */}
      <FlowSection 
        aria-label="Echeancier" 
        style={{ backgroundColor: '#0a0a1a', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]">04 — Echeancier</p>
        
        <hr className="my-[2vw] border-none h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        
        <div>
          <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] uppercase tracking-tight">
            6 Mois
            <br />
            <span className="text-[#0066FF]">Vers Le</span>
            <br />
            Succes
          </h2>
        </div>
        
        <hr className="my-[2vw] border-none h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        
        <div className="flex flex-wrap gap-[2vw]">
          {milestones.slice(0, 5).map((milestone, index) => (
            <div key={milestone.week} className="min-w-[180px] flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 border border-[#0066FF]/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#0066FF]">{index + 1}</span>
                </div>
                <span className="text-xs text-white/40 uppercase tracking-wider">{milestone.period}</span>
              </div>
              <p className="text-lg font-bold mb-2">{milestone.title}</p>
              <ul className="space-y-1">
                {milestone.activities.slice(0, 2).map((activity, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* Section 6: CTA */}
      <FlowSection 
        aria-label="Prochaines etapes" 
        style={{ backgroundColor: '#0066FF', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">05 — Prochaines Etapes</p>
        
        <hr className="my-[2vw] border-none h-px bg-white/20" />
        
        <div>
          <h2 className="text-[clamp(2.5rem,10vw,10rem)] font-bold leading-[0.9] uppercase tracking-tight">
            Pret A
            <br />
            Demarrer?
          </h2>
        </div>
        
        <hr className="my-[2vw] border-none h-px bg-white/20" />
        
        <p className="max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed text-white/80">
          Transformons ensemble votre vision en realite. 
          Contactez-nous pour planifier une session de decouverte.
        </p>
        
        <hr className="my-[2vw] border-none h-px bg-white/20" />
        
        <div className="flex flex-wrap gap-6 items-center">
          <button className="px-8 py-4 bg-white text-[#0066FF] rounded-full font-bold text-lg hover:bg-white/90 transition-colors flex items-center gap-3">
            Planifier un appel
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col">
            <span className="text-sm text-white/60">Contact</span>
            <span className="text-lg font-semibold">info@techguys.ca</span>
          </div>
        </div>
        
        <div className="mt-auto pt-8 flex items-center justify-between">
          <TechGuysLogo />
          <p className="text-sm text-white/60">
            Proposition valide 30 jours
          </p>
        </div>
      </FlowSection>
    </FlowArt>
  )
}
