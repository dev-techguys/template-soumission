// ============================================================
// proposal-data.ts — SOURCE UNIQUE DES DONNÉES CLIENT
// Ce fichier est généré et rempli par v0 lors de chaque
// nouvelle soumission client. Ne pas modifier manuellement.
// ============================================================

export const client = {
  name: "Omnigo.ca",
  contactName: "Samuel Cousineau",
  website: "https://www.omnigo.ca",
  industry: "Agence marketing & technologie B2B",
  mission: "Votre Copilote Digital — aligner marketing, ventes et technologie pour une croissance numérique rapide et durable",
  targetAudience: "PMEs québécoises et canadiennes cherchant à accélérer leur croissance numérique",
  currentSituation: "Agence établie (150+ projets, 5M$+ budget géré, 10+ ans) qui cherche à scaler ses opérations, améliorer sa visibilité organique et automatiser ses processus internes",
  // Email qui recevra la notification quand le client signe
  notificationEmail: "jonathan.naal@techguys.consulting",
}

export const branding = {
  primaryColor: "#0DA5B5",
  secondaryColor: "#FFC43D",
  accentColor: "#FC84D2",
  textDark: "#111827",
  textMuted: "#6B7280",
  backgroundLight: "#F0FFFE",
  logoUrl: "/images/omnigo-logo.png",
  coverImageUrl: "/images/omnigo-cover.jpg",
  closingImageUrl: "/images/omnigo-closing.jpg",
  fontSerif: "serif",
  fontSans: "sans-serif",
  visualStyle: "bold, digital, high-contrast, cyan on black",
  toneOfVoice: "direct, énergique, axé résultats, pro mais accessible",
}

export const pricing = {
  // "hourly-bank" = banque d'heures (forfaits mensuels récurrents)
  // "fixed-price"  = prix fixe (projet à coût déterminé)
  type: "hourly-bank" as "hourly-bank" | "fixed-price",

  // ── Mode banque d'heures ───────────────────────────────────
  plans: [
    {
      name: "Essentielle",
      hours: "10h",
      hoursNum: 10,
      featured: false,
      rates: [
        { label: "Sans engagement",   price: "180$/h", priceValue: 180, saving: 0 },
        { label: "Engagement 3 mois", price: "160$/h", priceValue: 160, saving: 200 },
        { label: "Engagement 6 mois", price: "150$/h", priceValue: 150, saving: 300 },
      ],
    },
    {
      name: "Croissance",
      hours: "25h",
      hoursNum: 25,
      featured: true,
      rates: [
        { label: "Sans engagement",   price: "180$/h", priceValue: 180, saving: 0 },
        { label: "Engagement 3 mois", price: "160$/h", priceValue: 160, saving: 500 },
        { label: "Engagement 6 mois", price: "150$/h", priceValue: 150, saving: 750 },
      ],
    },
    {
      name: "Performance+",
      hours: "50h",
      hoursNum: 50,
      featured: false,
      rates: [
        { label: "Sans engagement",   price: "180$/h", priceValue: 180, saving: 0 },
        { label: "Engagement 3 mois", price: "160$/h", priceValue: 160, saving: 1000 },
        { label: "Engagement 6 mois", price: "150$/h", priceValue: 150, saving: 1500 },
      ],
    },
  ],

  inclusions: [
    "Roadmap de croissance mensuelle",
    "Google Drive client",
    "Analyse de marché",
    "Analyse de compétition",
    "Création de persona",
    "Recherche de mots-clés",
    "Plan de campagnes publicitaires",
    "Google Analytics",
    "Google Tag Manager",
    "Google Search Console",
  ],

  // ── Mode prix fixe ─────────────────────────────────────────
  fixedPrice: {
    projectName: "",
    totalPrice: "",
    totalPriceValue: 0,
    estimatedHours: "",
    timeline: "",
    description: "",
    deliverables: [] as string[],
  },
}

// ── Mode de signature ─────────────────────────────────────
// "v0"       = workflow de signature intégré (6 étapes dans la modal)
// "pandadoc" = bouton redirige vers un document PandaDoc externe
export const signing = {
  type: "v0" as "v0" | "pandadoc",
  pandadocUrl: "", // requis si type === "pandadoc"
}

// ── Calendrier d'exécution ────────────────────────────────
// pmApproved : true si le PM/PO a validé ce calendrier avant envoi
export const calendar = {
  pmApproved: true,
  weeks: [
    {
      week: 1,
      title: "Onboarding & Audit digital",
      focus: "Poser les fondations — comprendre l'état actuel avant d'agir",
      activities: [
        "Réunion de lancement et alignement des objectifs",
        "Audit SEO technique et on-page complet",
        "Analyse de la présence publicitaire actuelle",
        "Configuration des outils de tracking (GA4, GTM, GSC)",
      ],
      milestone: "Audit livré",
    },
    {
      week: 2,
      title: "Stratégie & Plan d'action",
      focus: "Traduire les insights de l'audit en actions priorisées",
      activities: [
        "Présentation des résultats d'audit et recommandations",
        "Construction de la stratégie de contenu SEO",
        "Identification des mots-clés prioritaires",
        "Définition des cibles de conversion et des KPIs",
      ],
      milestone: undefined,
    },
    {
      week: 3,
      title: "Optimisation technique & SEO",
      focus: "Corriger les frictions qui ralentissent la croissance organique",
      activities: [
        "Optimisation des pages stratégiques (meta, structure, vitesse)",
        "Mise en place des backlinks prioritaires",
        "Création des 2 premiers articles de blogue optimisés SEO",
        "Amélioration du maillage interne",
      ],
      milestone: undefined,
    },
    {
      week: 4,
      title: "Lancement des campagnes",
      focus: "Activer l'acquisition payante avec un setup irréprochable",
      activities: [
        "Setup et lancement des campagnes Google Ads",
        "Configuration des campagnes Meta Ads",
        "Création des landing pages de conversion",
        "Tests A/B initiaux sur les annonces",
      ],
      milestone: "Campagnes live",
    },
    {
      week: 5,
      title: "Automatisation & CRM",
      focus: "Faire travailler les outils pendant que l'équipe se concentre sur les clients",
      activities: [
        "Setup des séquences d'emails de nurturing",
        "Automatisation du suivi des leads entrants",
        "Configuration du pipeline de vente CRM",
        "Formation de l'équipe aux nouveaux outils",
      ],
      milestone: undefined,
    },
    {
      week: 6,
      title: "Revue de performance & Q2",
      focus: "Mesurer, apprendre et planifier la suite",
      activities: [
        "Rapport de performance complet (SEO, Ads, Conversion)",
        "Analyse des résultats vs objectifs initiaux",
        "Recommandations d'optimisation pour le mois suivant",
        "Planification de la feuille de route Q2",
      ],
      milestone: "Rapport livré",
    },
  ] as Array<{
    week: number
    title: string
    focus: string
    activities: string[]
    milestone?: string
  }>,
  iterativeNote:
    "Ce calendrier représente notre plan idéal basé sur les jalons convenus. Notre approche demeure itérative et s'adapte continuellement à l'évolution de votre situation et des opportunités identifiées.",
}

export const slides = {
  hero: {},
  about: {},
  context: {},
  problems: {},
  roadmap: {},
  calendar: {},
  pricing: {},
  annexe: {},
  closing: {},
}
