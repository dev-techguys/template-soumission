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
      name: "Plan Essentiel",
      price: "6 400 $",
      priceValue: 6400,
      timeline: "3–4 semaines",
      infraCost: "< 10$ USD/mois",
      tagline: "Modernisation & Impact immédiat",
      description: "Un coup de jus technologique pour impressionner en interne. Un agent IA moderne qui guide et qualifie vos visiteurs en moins de 60 secondes.",
      featureGroups: [
        {
          category: "Conversation IA",
          features: [
            { label: "Saisie libre (langage naturel)", included: true },
            { label: "LLM Llama", included: true },
            { label: "Bilingue FR / EN", included: true },
            { label: "Arbre décisionnel (chips)", included: true },
          ],
        },
        {
          category: "Interface",
          features: [
            { label: "Widget responsive", included: true },
            { label: "Branding personnalisé", included: true },
            { label: "Navigation URL (tronquée)", included: true },
          ],
        },
        {
          category: "Administration",
          features: [
            { label: "Dashboard admin base", included: true },
            { label: "Liste des demandes", included: true },
            { label: "Authentification et rôles", included: true },
            { label: "Analytics sans PII", included: true },
          ],
        },
      ],
      notIncluded: [
        "Modèle GPT avancé",
        "Apprentissage AI continu",
        "Génération de rapport AI",
        "Emails automatisés",
        "Redirection multi-canal",
        "Dashboard avancé avec funnel",
      ],
      deliverables: [
        "Widget de chat flottant responsive",
        "Edge Function Groq avec streaming",
        "Flow de qualification (chips cliquables)",
        "Routing intelligent vers pages services",
        "Dashboard admin basique",
        "Intégration bilingue EN/FR",
      ],
    },
    optionB: {
      name: "Plan Optimisé",
      price: "12 400 $",
      priceValue: 12400,
      timeline: "6–8 semaines",
      infraCost: "< 25$ USD/mois",
      featured: true,
      tagline: "Transformation Data-Driven",
      description: "La première pierre vers une entreprise 100% data-driven. Une IA qui apprend, qui connecte le marché et les clients avec vos opérations, et qui laisse une impression durable à chaque visiteur.",
      includesEssential: true,
      featureGroups: [
        {
          category: "Intelligence Avancée",
          icon: "brain",
          features: [
            { label: "Modèle GPT (meilleure qualité)", included: true },
            { label: "Apprentissage AI continu", included: true },
            { label: "Compréhension continue du business Safex", included: true },
            { label: "Contexte évolutif (mémoire)", included: true },
            { label: "Formulaire interprété par l'IA", included: true },
          ],
        },
        {
          category: "Data & Stratégie",
          icon: "chart",
          features: [
            { label: "Génération de rapport AI", included: true },
            { label: "Recommandations stratégiques", included: true },
            { label: "Prévisions statistiques (opérations)", included: true },
            { label: "Dashboard avancé avec funnel", included: true },
          ],
        },
        {
          category: "Automatisation & Conversion",
          icon: "zap",
          features: [
            { label: "Email automatisé (Resend)", included: true },
            { label: "Rapport PDF transmis auto", included: true },
            { label: "Capture de lead dans le chat", included: true },
            { label: "Routing vers sales + notification", included: true },
            { label: "Redirection multi-canal (tel, email, outils)", included: true },
          ],
        },
        {
          category: "Expérience Mémorable",
          icon: "sparkles",
          features: [
            { label: "Page pleine (immersif)", included: true },
            { label: "Animations Framer Motion", included: true },
            { label: "Persistance session inter-pages", included: true },
            { label: "Impression durable sur les visiteurs", included: true },
          ],
        },
        {
          category: "Conformité & Conseil",
          icon: "shield",
          features: [
            { label: "Conformité Loi 25", included: true },
            { label: "Conseil stratégique intégré", included: true },
            { label: "Expertise domaine B2B transport", included: true },
          ],
        },
      ],
      deliverables: [
        "Tout le Plan Essentiel inclus",
        "Modèle GPT + apprentissage continu",
        "Génération automatique de rapports AI",
        "Emails automatisés (Resend)",
        "Dashboard avancé avec funnel",
        "Redirection multi-canal (tel, email, outils)",
        "Conformité Loi 25 complète",
        "Conseil stratégique et expertise B2B",
      ],
    },
    recommendation: "Le Plan Essentiel modernise votre image et impressionne en interne avec un agent IA fonctionnel. Le Plan Optimisé transforme Safex en entreprise data-driven : l'IA apprend, recommande, et connecte vos clients directement à vos opérations. C'est le premier édifice d'une stratégie 100% connectée au marché.",
  },
}

// ── Mode de signature ─────────────────────────────────────
// "v0"       = workflow de signature intégré (6 étapes dans la modal)
// "pandadoc" = bouton redirige vers un document PandaDoc externe
export const signing = {
  type: "pandadoc" as "v0" | "pandadoc",
  pandadocUrl: "https://app.pandadoc.com/",
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
