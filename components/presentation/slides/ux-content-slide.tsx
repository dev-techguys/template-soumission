import { SlideWrapper } from "../slide-wrapper"
import { FileText, Zap, Layout, Layers, Clock, Wrench } from "lucide-react"

const CONTENT_ISSUES = [
  {
    icon: Clock,
    title: "Délais de modification",
    description:
      "Chaque modification de contenu sur WordPress nécessite soit une connaissance du CMS, soit l'intervention d'un développeur. Ce délai freine la réactivité marketing.",
    impact: "Perte d'agilité",
    severity: "Critique",
  },
  {
    icon: Wrench,
    title: "Maintenance technique",
    description:
      "Mises à jour de plugins, de thèmes et de WordPress lui-même. Risques de compatibilité et de sécurité qui demandent une surveillance constante.",
    impact: "Coûts cachés",
    severity: "Élevé",
  },
  {
    icon: FileText,
    title: "Gestion de contenu rigide",
    description:
      "Le CMS WordPress impose une structure de contenu qui peut ne pas correspondre aux besoins évolutifs d'InputKit.",
    impact: "Flexibilité limitée",
    severity: "Élevé",
  },
  {
    icon: Layout,
    title: "Design system fragmenté",
    description:
      "Les thèmes WordPress rendent difficile la création d'un design system cohérent et la réutilisation de composants.",
    impact: "Incohérence UI",
    severity: "Moyen",
  },
]

const UX_ISSUES = [
  {
    icon: Zap,
    title: "Performance limitée par les plugins",
    description:
      "Chaque plugin WordPress ajoute du poids au site. Les performances dépendent de la qualité et du nombre de plugins installés.",
    impact: "Chargement lent",
    severity: "Élevé",
  },
  {
    icon: Layers,
    title: "Personnalisation contrainte",
    description:
      "Les thèmes WordPress offrent une personnalisation limitée. Les modifications avancées nécessitent du développement custom sur une stack vieillissante.",
    impact: "Expérience générique",
    severity: "Élevé",
  },
]

const POSITIONING_ISSUES = [
  {
    title: "Impossible d'intégrer l'IA facilement",
    description: "WordPress n'est pas conçu pour intégrer des fonctionnalités d'intelligence artificielle de manière native.",
  },
  {
    title: "Déploiement manuel complexe",
    description: "Les mises à jour et déploiements sur WordPress sont plus complexes que sur les plateformes modernes comme Vercel.",
  },
  {
    title: "Pas de preview branches",
    description: "Impossible de tester des modifications dans un environnement isolé avant de les publier.",
  },
  {
    title: "Rollback limité",
    description: "En cas de problème, revenir à une version précédente est complexe et risqué sur WordPress.",
  },
]

export function UxContentSlide() {
  return (
    <SlideWrapper id="ux-content" className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
            04 / Limitations actuelles
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-3xl leading-tight text-balance">
            Contraintes WordPress
          </h2>
          <div className="w-16 h-px bg-[#387B84]" />
          <p className="text-base text-[#6b7280] font-sans max-w-2xl leading-relaxed">
            WordPress a été un excellent choix pour démarrer, mais les besoins d{"'"}InputKit ont évolué. Voici les principales limitations qui freinent la croissance.
          </p>
        </div>

        {/* Content issues */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {CONTENT_ISSUES.map((issue) => (
            <div
              key={issue.title}
              className="group p-6 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#387B84]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#387B84]/10 flex items-center justify-center shrink-0">
                  <issue.icon className="w-4 h-4 text-[#387B84]" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-base text-[#2d3748]">{issue.title}</h3>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] tracking-[0.1em] uppercase font-sans ${
                        issue.severity === "Critique"
                          ? "bg-red-50 text-red-600 border border-red-200"
                          : issue.severity === "Élevé"
                            ? "bg-[#F6A878]/20 text-[#c97a4a] border border-[#F6A878]/40"
                            : "bg-[#387B84]/10 text-[#387B84] border border-[#387B84]/20"
                      }`}
                    >
                      {issue.severity}
                    </span>
                  </div>
                  <span className="text-xs text-[#F6A878] font-sans font-medium">{issue.impact}</span>
                  <p className="text-sm text-[#6b7280] font-sans leading-relaxed">
                    {issue.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* UX and Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* UX Issues */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#6b7280] font-sans">
              Performance & UX
            </h3>
            {UX_ISSUES.map((issue) => (
              <div
                key={issue.title}
                className="p-5 rounded-xl border border-[#e5e7eb] bg-white"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F6A878]/20 flex items-center justify-center shrink-0">
                    <issue.icon className="w-3.5 h-3.5 text-[#c97a4a]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-serif text-sm text-[#2d3748]">{issue.title}</h4>
                    <p className="text-xs text-[#6b7280] font-sans leading-relaxed">
                      {issue.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Positioning Issues */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#6b7280] font-sans">
              Limitations techniques
            </h3>
            {POSITIONING_ISSUES.map((issue) => (
              <div
                key={issue.title}
                className="p-4 rounded-xl border border-[#e5e7eb] bg-white"
              >
                <h4 className="font-serif text-sm text-[#2d3748] mb-1">{issue.title}</h4>
                <p className="text-xs text-[#6b7280] font-sans leading-relaxed">
                  {issue.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
