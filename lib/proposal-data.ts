// ============================================================
// proposal-data.ts — SOURCE UNIQUE DES DONNÉES CLIENT
// Ce fichier est généré et rempli par v0 lors de chaque
// nouvelle soumission client. Ne pas modifier manuellement.
// ============================================================

export const client = {
  name: "Dr Tint",
  contactName: "Léonce Simard",
  website: "https://drtint.com",
  industry: "Services automobiles — Vitres teintées et protection PPF",
  mission:
    "Offrir des services de vitres teintées et de protection automobile de qualité supérieure depuis 35 ans, avec une garantie à vie sur les produits et installations.",
  targetAudience:
    "Propriétaires de véhicules (particuliers et flottes) recherchant protection, esthétique et confort pour leur automobile dans la grande région de Montréal.",
  currentSituation:
    "Entreprise établie avec 35 ans d'expertise et plusieurs succursales (Montréal, Laval, Rive-Sud, Laurentides, Saint-Hyacinthe, Drummondville). Volume important de courriels entrants nécessitant un traitement manuel pour identifier le service demandé et rediriger vers la bonne succursale.",
  // Email qui recevra la notification quand le client signe
  notificationEmail: "Carl@techguys.consulting",
}

export const branding = {
  primaryColor: "#1B365D", // Bleu marine Dr Tint
  secondaryColor: "#243B5C", // Bleu marine légèrement plus clair
  accentColor: "#D4E800", // Jaune/lime Dr Tint
  textDark: "#1B365D",
  textMuted: "#64748b",
  backgroundLight: "#f8fafc",
  logoUrl:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-Logo-DrTint-Logo-35e-Web2023-768x256-NPwmM7B9FdEvDax1X59q93vXpeu5nK.png",
  coverImageUrl: "/images/drtint-cover.jpg",
  closingImageUrl: "/images/drtint-closing.jpg",
  fontSerif: "Playfair Display",
  fontSans: "Inter",
  visualStyle: "Professionnel, établi, expertise automobile, qualité premium",
  toneOfVoice: "Expert mais accessible, confiance, fiabilité, 35 ans d'expérience",
}

export const slides = {
  hero: {
    tagline: "Automatisation intelligente",
    title: "Gestion automatisée des courriels",
    subtitle: "propulsée par l'intelligence artificielle",
    valueProposition: "TechGuys & Dr Tint",
  },
  about: {
    headline: "Un partenariat de croissance",
    description:
      "TechGuys et Dr Tint agissent comme des partenaires stratégiques pour votre croissance. Au-delà d'une agence traditionnelle, nous prenons en considération les priorités de votre organisation et vous accompagnons tout au long de votre parcours numérique.",
  },
  context: {
    headline: "35 ans d'excellence automobile",
    companyDescription:
      "Dr Tint est le leader québécois des vitres teintées et de la protection automobile (PPF). Avec plusieurs succursales stratégiquement positionnées à Montréal, Laval, Rive-Sud, Laurentides, Saint-Hyacinthe et Drummondville, l'entreprise dessert une vaste clientèle à travers le Québec.",
    proposalRelevance:
      "Avec un volume croissant de demandes par courriel, le traitement manuel devient chronophage : lecture, identification du service, détection de la localisation du client, et redirection vers la bonne succursale. Cette automatisation permettra de répondre plus rapidement aux prospects tout en libérant du temps pour les tâches à haute valeur ajoutée.",
    strategicQuote:
      "Automatiser le traitement des courriels pour répondre plus rapidement aux clients et distribuer intelligemment les leads vers les bonnes succursales.",
    facts: [
      {
        label: "Expertise",
        value: "35 ans",
        detail: "Leader de l'industrie",
      },
      {
        label: "Réseau",
        value: "8 succursales",
        detail: "Couverture provinciale",
      },
      {
        label: "Garantie",
        value: "À vie",
        detail: "Produits et installation",
      },
      {
        label: "Volume",
        value: "Élevé",
        detail: "Courriels quotidiens",
      },
    ],
    tags: [
      "Vitres teintées",
      "Protection PPF",
      "Nano céramique",
      "Architectural",
      "Garantie à vie",
      "Multi-succursales",
    ],
  },
  problems: {
    items: [
      {
        title: "Traitement manuel chronophage",
        category: "Opérations",
        explanation:
          "Chaque courriel entrant doit être lu, analysé et traité manuellement pour identifier le service demandé, la localisation du client et la succursale appropriée. Ce processus répétitif consomme un temps précieux qui pourrait être consacré au développement des affaires.",
      },
      {
        title: "Délai de réponse variable",
        category: "Expérience client",
        explanation:
          "Le temps de réponse aux prospects dépend de la disponibilité pour traiter les courriels. Un délai de réponse plus long peut entraîner la perte de leads au profit de concurrents plus réactifs.",
      },
      {
        title: "Distribution manuelle des leads",
        category: "Gestion commerciale",
        explanation:
          "L'attribution des demandes aux différentes succursales repose sur une analyse manuelle de la localisation du client. Ce processus peut être source d'erreurs ou de retards dans le suivi commercial.",
      },
    ],
    opportunities: [
      {
        title: "Réponse instantanée 24/7",
        explanation:
          "Un système automatisé peut répondre aux prospects en quelques secondes, même en dehors des heures d'ouverture, améliorant significativement l'expérience client.",
      },
      {
        title: "Distribution intelligente des leads",
        explanation:
          "L'IA peut détecter automatiquement la localisation du client et assigner le lead à la succursale appropriée, optimisant le suivi commercial.",
      },
      {
        title: "Personnalisation des réponses",
        explanation:
          "Les réponses générées peuvent inclure automatiquement les informations pertinentes (prix selon le véhicule, coordonnées de la succursale) pour une expérience client premium.",
      },
    ],
  },
  roadmap: {
    phases: [
      {
        title: "Phase 1 : Analyse et configuration",
        why: "Comprendre le flux de courriels actuel et documenter les règles de traitement pour configurer le système d'automatisation.",
        actions: [
          {
            task: "Analyse des types de courriels entrants",
            detail:
              "Catégoriser les demandes : soumissions vitres teintées, PPF, commercial/résidentiel, questions générales.",
          },
          {
            task: "Documentation des templates de réponse",
            detail:
              "Structurer les réponses types avec variables dynamiques (nom, véhicule, prix, succursale).",
          },
          {
            task: "Mapping des succursales par région",
            detail:
              "Associer chaque région/ville aux coordonnées de la succursale appropriée pour le CC automatique.",
          },
          {
            task: "Configuration de l'environnement IA",
            detail:
              "Mise en place de l'infrastructure technique (n8n ou solution serveur) avec le modèle d'IA.",
          },
        ],
      },
      {
        title: "Phase 2 : Développement et intégration",
        why: "Construire le système d'automatisation et l'intégrer à la boîte courriel de Dr Tint.",
        actions: [
          {
            task: "Connexion à la boîte courriel",
            detail:
              "Intégration avec le compte courriel pour surveiller et traiter les messages entrants.",
          },
          {
            task: "Développement du moteur d'analyse IA",
            detail:
              "Configuration du modèle pour extraire : service demandé, véhicule, localisation, intention.",
          },
          {
            task: "Système de génération de réponses",
            detail:
              "Création des réponses personnalisées avec insertion automatique des variables contextuelles.",
          },
          {
            task: "Logique d'assignation des succursales",
            detail:
              "Algorithme de détection géographique pour ajouter la bonne succursale en CC.",
          },
        ],
      },
      {
        title: "Phase 3 : Tests et déploiement",
        why: "Valider le système en conditions réelles et former l'équipe à son utilisation.",
        actions: [
          {
            task: "Tests en mode brouillon",
            detail:
              "Validation des réponses générées avant envoi automatique pour assurer la qualité.",
          },
          {
            task: "Ajustements et optimisations",
            detail:
              "Affinage des prompts IA et des règles de routage selon les retours des tests.",
          },
          {
            task: "Formation et documentation",
            detail:
              "Session de formation sur l'utilisation du système et transmission des connaissances.",
          },
          {
            task: "Passage en mode automatique",
            detail:
              "Activation de l'envoi automatique avec monitoring des performances.",
          },
        ],
      },
    ],
    estimation: {
      totalHours: 12,
      hourlyRate: 150,
      total: 1800,
      note: "Estimation basée sur la portée du projet décrite. Ajustable selon les besoins spécifiques identifiés lors de l'analyse.",
    },
    monthlyFees: {
      min: 0,
      max: 50,
      note: "Frais potentiels selon la solution retenue : hébergement, API IA, automatisation (n8n).",
    },
  },
  pricing: {
    projectBased: {
      title: "Projet d'automatisation",
      hours: 12,
      rate: 150,
      total: 1800,
    },
    hourlyBanks: [
      {
        name: "Essentielle",
        hours: "10h",
        featured: false,
        rates: [
          { label: "Sans engagement", price: "180$/h", saving: null },
          { label: "Engagement 3 mois", price: "160$/h", saving: "200$/mois" },
          { label: "Engagement 6 mois", price: "150$/h", saving: "300$/mois" },
        ],
      },
      {
        name: "Croissance",
        hours: "25h",
        featured: true,
        rates: [
          { label: "Sans engagement", price: "180$/h", saving: null },
          { label: "Engagement 3 mois", price: "160$/h", saving: "500$/mois" },
          { label: "Engagement 6 mois", price: "150$/h", saving: "750$/mois" },
        ],
      },
      {
        name: "Performance+",
        hours: "50h",
        featured: false,
        rates: [
          { label: "Sans engagement", price: "180$/h", saving: null },
          { label: "Engagement 3 mois", price: "160$/h", saving: "1 000$/mois" },
          { label: "Engagement 6 mois", price: "150$/h", saving: "1 500$/mois" },
        ],
      },
    ],
  },
  annexe: {},
  closing: {
    headline: "Prêts à automatiser votre gestion des courriels",
    subheadline:
      "Un système intelligent pour répondre plus rapidement à vos clients et optimiser la distribution des leads vers vos succursales.",
  },
}
