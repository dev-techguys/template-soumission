// ============================================================
// proposal-data.ts — SOURCE UNIQUE DES DONNÉES CLIENT
// Ce fichier est généré et rempli par v0 lors de chaque
// nouvelle soumission client. Ne pas modifier manuellement.
// ============================================================

export const client = {
  name: "",
  contactName: "",
  website: "",
  industry: "",
  mission: "",
  targetAudience: "",
  currentSituation: "",
  // Email qui recevra la notification quand le client signe
  notificationEmail: "",
}

export const branding = {
  primaryColor: "",
  secondaryColor: "",
  accentColor: "",
  textDark: "",
  textMuted: "",
  backgroundLight: "",
  logoUrl: "",
  coverImageUrl: "",
  closingImageUrl: "",
  fontSerif: "",
  fontSans: "",
  visualStyle: "",
  toneOfVoice: "",
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
    "Roadmap de croissance",
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

export const slides = {
  hero: {},
  about: {},
  context: {},
  problems: {},
  roadmap: {},
  pricing: {},
  annexe: {},
  closing: {},
}
