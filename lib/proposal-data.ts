// ============================================================
// proposal-data.ts — SOURCE UNIQUE DES DONNÉES CLIENT
// Ce fichier est généré et rempli par v0 lors de chaque
// nouvelle soumission client. Ne pas modifier manuellement.
// ============================================================

export const client = {
  name: "Safex Transport",
  contactName: "Pierre Major",
  website: "https://safextransport.ca",
  industry: "Transport et logistique B2B — asset-based carrier",
  mission: "Offrir des services de transport et logistique fiables, flexibles et technologiquement avancés à travers le Canada et les États-Unis",
  targetAudience: "Expéditeurs B2B — gestionnaires de chaîne d'approvisionnement, directeurs logistiques, acheteurs transport chez des manufacturiers, distributeurs et détaillants nord-américains",
  currentSituation: "Transporteur asset-based établi depuis 2014, basé à Vaudreuil-Dorion, avec une flotte propre de tracteurs et remorques Volvo. Plateforme web existante avec site vitrine Astro.js et application client Next.js. Projet d'expansion à 5 bureaux d'ici décembre 2026.",
  // Pas d'email de notification — signature via PandaDoc
  notificationEmail: "",
}

export const branding = {
  primaryColor: "#ff7000",      // Orange Safex
  secondaryColor: "#10B981",    // Émeraude (accent)
  accentColor: "#22c55e",       // Vert clair
  textDark: "#0f172a",          // Bleu nuit (fond panel)
  textMuted: "#64748b",         // Gris slate
  backgroundLight: "#f8fafc",   // Slate-50
  logoUrl: "/images/safex-logo.png",
  coverImageUrl: "",            // CSS gradient
  closingImageUrl: "",          // CSS gradient
  fontSerif: "serif",
  fontSans: "sans-serif",
  visualStyle: "bold, transport, dark navy background, orange accents, professional B2B",
  toneOfVoice: "professionnel, direct, expertise transport, fiable, accessible",
}

export const pricing = {
  // "hourly-bank" = banque d'heures (forfaits mensuels récurrents)
  // "fixed-price" = prix fixe (projet à coût déterminé)
  // "dual-offers" = deux options à prix fixe (nouveau mode pour cette soumission)
  type: "dual-offers" as "hourly-bank" | "fixed-price" | "dual-offers",

  // ── Mode banque d'heures (non utilisé) ─────────────────────
  plans: [],
  inclusions: [],

  // ── Mode prix fixe (non utilisé) ───────────────────────────
  fixedPrice: {
    projectName: "",
    totalPrice: "",
    totalPriceValue: 0,
    estimatedHours: "",
    timeline: "",
    description: "",
    deliverables: [] as string[],
  },

  // ── Mode dual-offers (deux options comparatives) ───────────
  dualOffers: {
    optionA: {
      name: "Option A — Essentiel",
      price: "6 400 $",
      priceValue: 6400,
      timeline: "3–4 semaines",
      estimatedHours: "~32h",
      infraCost: "< 10$ USD/mois",
      description: "Un agent IA complet et crédible : vrai LLM, bilingue, avec analytics et dashboard. Le visiteur est guidé, qualifié et routé vers la bonne page en moins de 60 secondes.",
      features: [
        { label: "Widget chips Q1/Q2/Q3", included: true },
        { label: "LLM Llama (conversations naturelles)", included: true },
        { label: "Bilingue EN / FR", included: true },
        { label: "Messages contextuels par page", included: true },
        { label: "Fallback \"Talk to a human\" différencié", included: true },
        { label: "Analytics Supabase sans PII", included: true },
        { label: "Dashboard admin (basique)", included: true },
        { label: "Modele GPT (meilleure qualite)", included: false },
        { label: "Apprentissage continu", included: false },
        { label: "Skills expertise domaine B2B transport", included: false },
        { label: "Qualification adaptative des prospects", included: false },
        { label: "Trigger proactif (ouverture automatique)", included: false },
        { label: "Capture de lead dans le chat", included: false },
        { label: "Routing direct vers sales + notification", included: false },
        { label: "Dashboard avancé avec funnel", included: false },
        { label: "Animations Framer Motion", included: false },
        { label: "Persistance de session inter-pages", included: false },
      ],
      deliverables: [
        "Widget de chat flottant responsive (mobile + desktop)",
        "Edge Function Groq avec streaming",
        "Flow de qualification 3 questions (chips cliquables)",
        "Routing intelligent vers les pages services",
        "Analytics anonymisés (conformité Loi 25)",
        "Dashboard admin /admin/agent-stats",
        "Intégration bilingue EN/FR",
        "Tests mobile + PageSpeed",
      ],
    },
    optionB: {
      name: "Option B — Premium",
      price: "12 400 $",
      priceValue: 12400,
      timeline: "6–8 semaines",
      estimatedHours: "~62h",
      infraCost: "< 25$ USD/mois",
      featured: true,
      description: "L'experience premium : modele GPT de meilleure qualite, apprentissage continu qui s'affine au fil des interactions, et integrations avancees. L'agent apprend en permanence et devient plus precis avec le temps.",
      features: [
        { label: "Widget chips Q1/Q2/Q3", included: true },
        { label: "Modele GPT (meilleure qualite que Llama)", included: true },
        { label: "Apprentissage continu — contexte qui s'enrichit", included: true },
        { label: "Bilingue EN / FR", included: true },
        { label: "Messages contextuels par page", included: true },
        { label: "Fallback \"Talk to a human\" différencié", included: true },
        { label: "Analytics Supabase sans PII", included: true },
        { label: "Dashboard admin (avancé)", included: true },
        { label: "Skills expertise domaine B2B transport", included: true },
        { label: "Qualification adaptative des prospects", included: true },
        { label: "Trigger proactif (ouverture automatique)", included: true },
        { label: "Capture de lead dans le chat", included: true },
        { label: "Routing direct vers sales + notification", included: true },
        { label: "Pré-remplissage du formulaire de devis", included: true },
        { label: "Dashboard avancé avec funnel", included: true },
        { label: "Animations Framer Motion", included: true },
        { label: "Persistance de session inter-pages", included: true },
      ],
      deliverables: [
        "Tout ce qui est inclus dans l'Option A",
        "Skills expertise domaine (réglementation transport, supply chain B2B)",
        "Détection automatique du profil visiteur",
        "Score d'intention en temps réel",
        "Questions de qualification adaptatives par service",
        "Micro-capture de lead dans le chat",
        "Notification email automatique à l'équipe (Resend)",
        "Routing différencié (sales / dispatch / HR)",
        "Pré-remplissage du formulaire de devis",
        "Trigger proactif (temps + scroll)",
        "Persistance de session entre les pages",
        "Animations Framer Motion premium",
        "Dashboard avancé avec funnel de conversion",
      ],
    },
    recommendation: "L'Option A livre un agent IA complet et fonctionnel — vrai LLM, analytics, dashboard. L'Option B est l'experience premium : modele GPT de meilleure qualite, apprentissage continu qui affine les reponses au fil des interactions, et integrations avancees pour maximiser la conversion.",
  },
}

// ── Mode de signature ─────────────────────────────────────
// "v0"       = workflow de signature intégré (6 étapes dans la modal)
// "pandadoc" = bouton redirige vers un document PandaDoc externe
export const signing = {
  type: "pandadoc" as "v0" | "pandadoc",
  pandadocUrl: "https://app.pandadoc.com/s/safex-transport-ai-agent", // À remplacer par le vrai lien PandaDoc
}

// ── Calendrier d'exécution (non utilisé pour ce projet) ───
export const calendar = {
  pmApproved: false,
  weeks: [] as Array<{
    week: number
    title: string
    focus: string
    activities: string[]
    milestone?: string
  }>,
  iterativeNote: "",
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
