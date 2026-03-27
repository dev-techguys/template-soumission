import { SlideWrapper } from "../slide-wrapper"
import { Globe, Zap, Cpu, Rocket } from "lucide-react"

const OBJECTIVES = [
  {
    icon: Globe,
    number: "01",
    title: "Migration vers une architecture moderne",
    description:
      "Migrer le site WordPress vers une architecture Next.js/React moderne, offrant des performances supérieures, une meilleure expérience développeur et une scalabilité optimale.",
    goal: "Créer un site sur mesure qui reflète l'innovation d'InputKit, avec des temps de chargement ultra-rapides et une expérience utilisateur fluide sur tous les appareils.",
    kpis: ["Performance 90+", "Core Web Vitals", "Temps de déploiement", "DX score"],
    actions: [
      "Architecture Next.js avec App Router",
      "Composants React réutilisables",
      "Optimisation des images et assets",
      "CDN global via Vercel",
      "CI/CD automatisé",
    ],
  },
  {
    icon: Cpu,
    number: "02",
    title: "Intégration de l'intelligence artificielle",
    description:
      "Implémenter des capacités d'IA pour permettre des modifications de contenu en langage naturel, sans passer par un CMS traditionnel. Réagir instantanément aux besoins du marché.",
    goal: "Permettre aux équipes marketing de modifier le site en quelques minutes via des commandes en langage naturel, éliminant les délais et les dépendances techniques.",
    kpis: ["Temps de mise à jour", "Autonomie marketing", "Coût par modification"],
    actions: [
      "Interface de modification par IA",
      "Génération de contenu assistée",
      "A/B testing automatisé",
      "Personnalisation dynamique",
    ],
  },
  {
    icon: Zap,
    number: "03",
    title: "Optimisation SEO & Performance",
    description:
      "Profiter de la migration pour implémenter les meilleures pratiques SEO techniques et maximiser les Core Web Vitals, améliorant significativement la visibilité organique.",
    goal: "Atteindre des scores Lighthouse de 90+ sur toutes les métriques et améliorer le positionnement organique sur les requêtes stratégiques du marché CX.",
    kpis: ["Positions SEO", "Trafic organique", "Score Lighthouse"],
    actions: [
      "Optimisation des métadonnées",
      "Structured data (Schema.org)",
      "Sitemap dynamique",
      "Pages AMP optionnelles",
    ],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Agilité & autonomie marketing",
    description:
      "Éliminer la dépendance au CMS WordPress et créer un workflow où les modifications peuvent être déployées en quelques minutes, pas en quelques jours.",
    goal: "Réduire le temps entre l'idée et le déploiement de 90%, permettant une réactivité sans précédent aux opportunités du marché.",
    kpis: ["Délai de déploiement", "Autonomie équipe", "Coût opérationnel"],
    actions: [
      "Workflow de déploiement simplifié",
      "Preview branches automatiques",
      "Rollback instantané",
      "Monitoring en temps réel",
    ],
  },
]

export function ObjectivesSlide() {
  return (
    <SlideWrapper id="objectives" className="bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#387B84] font-sans font-medium">
            08 / Objectifs du mandat
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2d3748] max-w-3xl leading-tight text-balance">
            Nos recommandations stratégiques
          </h2>
          <div className="w-16 h-px bg-[#387B84]" />
          <p className="text-base text-[#6b7280] font-sans max-w-2xl leading-relaxed">
            Chaque recommandation vise à transformer la présence numérique d{"'"}InputKit, passant d{"'"}un environnement WordPress contraint à une plateforme agile propulsée par l{"'"}IA.
          </p>
        </div>

        {/* Objectives */}
        <div className="flex flex-col gap-8">
          {OBJECTIVES.map((obj) => (
            <div
              key={obj.number}
              className="group relative p-8 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#387B84]/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#387B84]/30 via-[#4a9ba5]/10 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Number + icon */}
                <div className="lg:col-span-1 flex items-start gap-4">
                  <span className="font-serif text-4xl text-[#387B84]/30">{obj.number}</span>
                </div>

                {/* Middle: Content */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#387B84]/10 flex items-center justify-center">
                      <obj.icon className="w-4 h-4 text-[#387B84]" />
                    </div>
                    <h3 className="font-serif text-xl text-[#2d3748]">{obj.title}</h3>
                  </div>
                  <p className="text-sm text-[#6b7280] font-sans leading-relaxed">
                    {obj.description}
                  </p>
                  <p className="text-sm text-[#2d3748]/80 font-sans leading-relaxed">
                    {obj.goal}
                  </p>
                </div>

                {/* Right: Actions + KPIs */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#387B84] font-sans mb-2 block font-medium">
                      Actions clés
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {obj.actions.map((action) => (
                        <div key={action} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#387B84] mt-1.5 shrink-0" />
                          <span className="text-xs text-[#2d3748]/80 font-sans leading-relaxed">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#6b7280] font-sans mb-2 block">
                      KPI{"'"}s clés
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {obj.kpis.map((kpi) => (
                        <span
                          key={kpi}
                          className="px-2.5 py-1 rounded-full border border-[#e5e7eb] text-[10px] text-[#6b7280] font-sans bg-[#f7f7f7]"
                        >
                          {kpi}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
