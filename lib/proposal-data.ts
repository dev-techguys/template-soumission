// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface ClientInfo {
  companyName: string
  contactName?: string
  logo: string
  year?: string
}

export interface BrandingConfig {
  primaryColor: string
  secondaryColor?: string
  accentColor?: string
  coverImage: string
}

export interface ContextData {
  companyDescription: string
  offerDescription: string
  serviceTags: string[]
  audienceSegments: string[]
}

export interface Objective {
  title: string
  problems: string[]
}

export interface RoadmapService {
  serviceId: string
  title: string
  focusItems?: string[]
}

export interface RoadmapMonth {
  label: string
  services: RoadmapService[]
}

export interface RoadmapData {
  subtitle: string
  months: RoadmapMonth[]
}

export interface SlideEntry {
  id: string
  label: string
}

export interface ProposalData {
  client: ClientInfo
  branding: BrandingConfig
  context: ContextData
  objectives: Objective[]
  roadmap: RoadmapData
  slides: SlideEntry[]
}

// ─────────────────────────────────────────────────────────────────────────────
// Données — InputKit
// ─────────────────────────────────────────────────────────────────────────────

export const proposalData: ProposalData = {
  client: {
    companyName: "InputKit",
    contactName: "Philippe Genois",
    logo: "/images/inputkit-logo.png",
    year: "2025",
  },

  branding: {
    primaryColor: "#387B84",
    secondaryColor: "#4a9ba5",
    accentColor: "#F6A878",
    coverImage: "/images/inputkit-cover.jpg",
  },

  context: {
    companyDescription:
      "InputKit est une plateforme SaaS B2B de gestion d'expérience client qui aide les entreprises à collecter, analyser et agir sur les retours de leurs clients afin d'améliorer leur satisfaction et leur réputation.",
    offerDescription:
      "La solution offre des outils de sondages, de gestion d'avis en ligne et d'analyse NPS & CSAT. Elle permet aux équipes de piloter la réputation de l'entreprise et d'automatiser les suivis clients à grande échelle.",
    serviceTags: [
      "Gestion d'avis",
      "Sondages clients",
      "NPS & CSAT",
      "Réputation en ligne",
      "Analytics CX",
      "Automatisation",
    ],
    audienceSegments: ["PME", "Entreprises", "Canada", "International"],
  },

  objectives: [
    {
      title: "Migrer le site WordPress vers une architecture moderne et sur mesure",
      problems: [
        "Le CMS WordPress limite l'agilité de l'équipe marketing : chaque modification de contenu nécessite l'intervention d'un développeur, allongeant les délais de réaction face au marché.",
        "Les mises à jour de plugins et de thèmes génèrent des coûts de maintenance cachés et exposent la plateforme à des risques de sécurité récurrents.",
      ],
    },
    {
      title: "Intégrer l'intelligence artificielle pour modifier le contenu en langage naturel",
      problems: [
        "L'architecture WordPress ne permet pas d'intégrer des capacités d'IA de façon native, rendant impossible l'autonomie marketing souhaitée.",
        "L'absence d'un workflow de déploiement moderne (preview branches, rollback) ralentit considérablement la mise en ligne de nouvelles idées.",
      ],
    },
    {
      title: "Améliorer les performances web et le positionnement SEO organique",
      problems: [
        "Le site actuel obtient un score Lighthouse de 42/100 en performance mobile avec un LCP de 3,5 secondes, bien au-delà des seuils recommandés par Google.",
        "La majorité des mots-clés organiques se positionnent entre la 21e et 100e position, laissant un fort potentiel de croissance organique inexploité.",
      ],
    },
    {
      title: "Réduire le délai entre une idée et son déploiement en production",
      problems: [
        "L'écosystème WordPress impose un cycle de modification manuel complexe qui empêche l'équipe de réagir rapidement aux opportunités du marché.",
        "L'absence de CI/CD automatisé et d'environnements de preview allonge le temps de validation et augmente le risque d'erreurs en production.",
      ],
    },
  ],

  roadmap: {
    subtitle:
      "Après nos recherches et discussions sur votre entreprise, voici la trajectoire que nous vous proposons. Celle-ci a été conçue à partir de notre offre de services complète présentée en annexe de ce document. Cette feuille de route peut être ajustée, afin qu'elle reflète exactement les priorités de votre organisation.",
    months: [
      {
        label: "Mois 1",
        services: [
          {
            serviceId: "strategie",
            title: "Structure stratégique",
            focusItems: [
              "Définition des priorités du mandat et de la feuille de route de migration",
              "Stratégie de répartition des ressources pour la phase de transition",
              "Structuration d'une feuille de route agile et évolutive",
            ],
          },
          {
            serviceId: "analyse",
            title: "Outils d'analyse de données",
            focusItems: [
              "Configuration de Google Analytics 4 et Google Tag Manager",
              "Intégration de Google Search Console",
              "Mise en place du tracking des conversions et des événements clés",
            ],
          },
        ],
      },
      {
        label: "Mois 2",
        services: [
          {
            serviceId: "presence",
            title: "Optimisation de la présence numérique",
            focusItems: [
              "Architecture Next.js avec App Router et design system",
              "Développement des pages principales (accueil, produits, pricing)",
              "Optimisation Core Web Vitals — cible score Lighthouse 90+",
              "Migration du contenu existant avec préservation des URLs",
            ],
          },
        ],
      },
      {
        label: "Mois 3",
        services: [
          {
            serviceId: "automatisation",
            title: "Automatisation & intelligence artificielle",
            focusItems: [
              "Interface de modification de contenu par IA en langage naturel",
              "Génération de contenu assistée pour les pages marketing",
              "Mise en place du workflow CI/CD avec preview branches automatiques",
            ],
          },
          {
            serviceId: "seo",
            title: "SEO (référencement naturel)",
            focusItems: [
              "Optimisation technique des pages migrées (métadonnées, structured data)",
              "Stratégie de mots-clés et amélioration du contenu transactionnel",
              "Plan de redirections 301 pour préserver le juice SEO",
            ],
          },
        ],
      },
    ],
  },

  slides: [
    { id: "cover", label: "Couverture" },
    { id: "about-us", label: "Notre approche" },
    { id: "context", label: "Contexte" },
    { id: "objectives", label: "Objectifs" },
    { id: "roadmap", label: "Feuille de route" },
    { id: "pricing", label: "Tarification" },
    { id: "annexe", label: "Annexe" },
    { id: "closing", label: "Conclusion" },
  ],
}
