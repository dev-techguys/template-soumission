import { SlideWrapper } from "../slide-wrapper"
import { Clock, Wrench, Zap, Globe } from "lucide-react"

const CONVERSION_ISSUES = [
  {
    icon: Clock,
    title: "Temps de modification trop long",
    problem: "Dépendance technique",
    description:
      "Chaque changement de texte, image ou structure sur WordPress nécessite soit une connaissance du CMS, soit l'intervention d'un développeur. Ce délai freine la réactivité marketing.",
    recommendation: "Modification par IA en langage naturel",
  },
  {
    icon: Wrench,
    title: "Maintenance constante requise",
    problem: "Coûts cachés",
    description:
      "Mises à jour WordPress, plugins, thèmes, sécurité... Cette maintenance continue consomme des ressources qui pourraient être investies dans la croissance.",
    recommendation: "Infrastructure auto-gérée avec Vercel",
  },
  {
    icon: Zap,
    title: "Performance non optimale",
    problem: "Impact SEO & UX",
    description:
      "Les temps de chargement WordPress avec plugins sont souvent supérieurs à 3 secondes sur mobile, affectant le référencement et l'expérience utilisateur.",
    recommendation: "Next.js + Edge Computing = <1s",
  },
  {
    icon: Globe,
    title: "Scalabilité limitée",
    problem: "Frein à la croissance",
    description:
      "L'architecture WordPress n'est pas conçue pour des pics de trafic importants ou des fonctionnalités avancées comme la personnalisation en temps réel.",
    recommendation: "Architecture serverless scalable",
  },
]

export function ConversionSlide() {
  return (
    <SlideWrapper id="conversion" className="bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-12">
          <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
            05 / Freins actuels
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-3xl leading-tight text-balance">
            Impacts sur l{"'"}efficacité
          </h2>
          <div className="w-16 h-px bg-[#387B84]" />
          <p className="text-base text-[#6b7280] font-sans max-w-2xl leading-relaxed">
            Les limitations de WordPress ont un impact direct sur l{"'"}agilité et la performance d{"'"}InputKit. Voici les principaux freins identifiés.
          </p>
        </div>

        {/* Conversion funnel issues */}
        <div className="flex flex-col gap-6">
          {CONVERSION_ISSUES.map((issue, index) => (
            <div
              key={issue.title}
              className="group relative p-6 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#387B84]/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#F6A878]/30 via-transparent to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left: Number + Icon */}
                <div className="lg:col-span-1 flex items-center gap-3">
                  <span className="font-serif text-3xl text-[#F6A878]/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Middle: Problem */}
                <div className="lg:col-span-7 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F6A878]/15 flex items-center justify-center shrink-0">
                    <issue.icon className="w-4 h-4 text-[#c97a4a]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-base text-[#2d3748]">{issue.title}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] tracking-[0.1em] uppercase font-sans bg-[#F6A878]/20 text-[#c97a4a] border border-[#F6A878]/40 w-fit">
                      {issue.problem}
                    </span>
                    <p className="text-sm text-[#6b7280] font-sans leading-relaxed">
                      {issue.description}
                    </p>
                  </div>
                </div>

                {/* Right: Quick recommendation */}
                <div className="lg:col-span-4 flex items-start lg:items-center h-full">
                  <div className="p-4 rounded-xl border border-[#387B84]/20 bg-[#387B84]/5 w-full">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans block mb-1">
                      Solution proposée
                    </span>
                    <p className="text-sm text-[#387B84] font-sans leading-relaxed font-medium">
                      {issue.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom alert */}
        <div className="mt-8 p-6 rounded-xl border border-[#387B84]/20 bg-[#387B84]/5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#387B84]/10 flex items-center justify-center shrink-0">
              <span className="font-serif text-lg text-[#387B84]">+</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-base text-[#2d3748]">Opportunité de transformation</h3>
              <p className="text-sm text-[#6b7280] font-sans leading-relaxed">
                La migration vers une architecture moderne avec intégration IA permet de résoudre tous ces problèmes simultanément, tout en créant un avantage compétitif durable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
