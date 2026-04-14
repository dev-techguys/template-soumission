// ============================================================
// proposal-data.ts — SOURCE UNIQUE DES DONNEES CLIENT
// Ce fichier est genere et rempli par v0 lors de chaque
// nouvelle soumission client. Ne pas modifier manuellement.
// ============================================================

export const client = {
  name: "Dr Tint",
  contactName: "Leonce Simard",
  website: "https://drtint.com",
  industry: "Services automobiles - Vitres teintees et protection PPF",
  mission:
    "Offrir des services de teintage de vitres et de protection automobile de qualite superieure a travers un reseau de succursales au Quebec.",
  targetAudience:
    "Proprietaires de vehicules (particuliers et entreprises) cherchant a proteger et personnaliser leur vehicule, ainsi que clients commerciaux et residentiels pour les pellicules architecturales.",
  currentSituation:
    "Dr Tint recoit un volume important de courriels clients necessitant une analyse manuelle pour identifier le service demande, la localisation et la succursale appropriee. Ce processus est chronophage et ralentit les temps de reponse aux prospects.",
  notificationEmail: "jonathan.naal@techguys.consulting",
}

export const branding = {
  primaryColor: "#1B2F4A",
  secondaryColor: "#2A4166",
  accentColor: "#C5D82D",
  textDark: "#1B2F4A",
  textOnDark: "#ffffff",
  textMuted: "#64748b",
  backgroundLight: "#f8fafc",
  logoUrl:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-Logo-DrTint-Logo-35e-Web2023-768x256-EDloP42R5UYm7vKPNBKSA8AJXGdaVq.png",
  coverImageUrl: "/images/drtint-cover.jpg",
  closingImageUrl: "/images/drtint-closing.jpg",
  fontSerif: "Playfair Display",
  fontSans: "Inter",
  visualStyle: "Professionnel, automobile, premium",
  toneOfVoice: "Expert, accessible, oriente solution",
}

export const pricing = {
  type: "fixed-price" as "hourly-bank" | "fixed-price",

  // ── Mode banque d'heures (non utilise pour ce projet) ───────
  plans: [],
  inclusions: [],

  // ── Mode prix fixe ─────────────────────────────────────────
  fixedPrice: {
    projectName: "Automatisation intelligente des courriels",
    totalPrice: "1 800 $",
    totalPriceValue: 1800,
    estimatedHours: "12 heures",
    timeline: "2-3 semaines",
    description:
      "Conception et mise en place d'un systeme d'automatisation utilisant l'intelligence artificielle pour optimiser le traitement des courriels entrants, accelerer les reponses aux clients et diriger automatiquement les leads vers la succursale appropriee.",
    deliverables: [
      "Analyse et comprehension du processus actuel de gestion des courriels",
      "Configuration du systeme de surveillance de la boite courriel",
      "Integration d'un modele d'IA (Claude ou Gemini) pour l'analyse des courriels",
      "Developpement de la logique d'identification de succursale par localisation",
      "Generation automatique de reponses personnalisees",
      "Mise en place de l'envoi automatique avec succursale en CC",
      "Mode brouillon avec validation OU envoi automatique (selon preference)",
      "Documentation du systeme et formation de l'equipe Dr Tint",
    ],
  },
}

export const slides = {
  hero: {
    tagline: "Accompagnement strategique",
    title: "Automatisation intelligente des courriels",
    subtitle: "propulsee par l'intelligence artificielle",
    partnership: "TechGuys & Dr Tint",
    attention: "Leonce Simard",
  },
  about: {
    title: "Un partenariat de croissance",
    description:
      "TechGuys et Dr Tint agissent comme des partenaires strategiques pour votre croissance. Au-dela d'une agence traditionnelle, nous prenons en consideration les priorites de votre organisation et vous accompagnons tout au long de votre parcours numerique.",
  },
  context: {
    headline:
      "Un leader des vitres teintees au Quebec, mais un processus de gestion des courriels qui limite la reactivite et la conversion des leads.",
    description:
      "Dr Tint est specialiste des vitres teintees et de la protection PPF (pare-pierre) depuis 35 ans. Avec plusieurs succursales a Montreal, Laval, Rive-Sud, Saint-Hyacinthe et Drummondville, l'entreprise recoit quotidiennement des demandes de soumission par courriel necessitant une analyse manuelle.",
    challenge:
      "L'objectif de cette proposition est de mettre en place un systeme d'automatisation intelligent capable d'analyser les courriels entrants, identifier le service demande et la localisation du client, puis generer une reponse personnalisee avec la succursale appropriee en copie.",
    quote:
      "Passer d'un processus manuel repetitif a un systeme intelligent qui repond automatiquement aux clients tout en assignant les leads aux bonnes succursales.",
    facts: [
      { icon: "Building2", label: "Succursales", value: "8+", detail: "Partout au Quebec" },
      { icon: "Mail", label: "Courriels", value: "Quotidien", detail: "Volume important" },
      { icon: "Clock", label: "Processus actuel", value: "Manuel", detail: "Chronophage" },
      { icon: "Award", label: "Experience", value: "35 ans", detail: "Leader du marche" },
    ],
    tags: [
      "Vitres teintees",
      "PPF / Pare-pierre",
      "Nano ceramique",
      "Pellicules architecturales",
      "Multi-succursales",
      "Service premium",
    ],
  },
  problems: {
    title: "Problematique et opportunites",
    description:
      "L'analyse du processus actuel revele des opportunites significatives d'optimisation grace a l'intelligence artificielle.",
    problems: [
      {
        title: "Traitement manuel des courriels",
        category: "Efficacite operationnelle",
        description:
          "Chaque courriel entrant doit etre lu, analyse et traite manuellement pour identifier le service demande, le vehicule concerne et la localisation du client. Ce processus mobilise du temps precieux qui pourrait etre consacre a des taches a plus forte valeur ajoutee.",
      },
      {
        title: "Identification de la succursale appropriee",
        category: "Distribution des leads",
        description:
          "La redirection vers la bonne succursale selon la localisation du client demande une connaissance des zones de couverture et une action manuelle. Des erreurs d'assignation peuvent entrainer des delais supplementaires.",
      },
      {
        title: "Temps de reponse variable",
        category: "Experience client",
        description:
          "Le delai de reponse depend de la disponibilite pour traiter les courriels. Un prospect qui attend trop longtemps risque de se tourner vers un concurrent plus reactif.",
      },
    ],
    opportunities: [
      {
        title: "Reponses instantanees 24/7",
        description:
          "Un systeme automatise peut repondre aux courriels immediatement, meme en dehors des heures d'ouverture, ameliorant significativement l'experience client.",
      },
      {
        title: "Assignation intelligente des leads",
        description:
          "L'IA peut identifier automatiquement la localisation et assigner le lead a la succursale appropriee, eliminant les erreurs et accelerant le suivi.",
      },
      {
        title: "Temps libere pour la conversion",
        description:
          "En automatisant les reponses initiales, l'equipe peut se concentrer sur le suivi personnalise des leads qualifies et la conversion en clients.",
      },
    ],
  },
  roadmap: {
    title: "Plan d'implementation",
    subtitle:
      "Voici le plan d'execution propose pour la mise en place du systeme d'automatisation des courriels.\n\nCette feuille de route peut etre ajustee selon les priorites et les contraintes de Dr Tint.",
    phases: [
      {
        icon: "Search",
        title: "Phase 1 : Analyse et preparation",
        why: "Comprendre le processus actuel en profondeur avant de construire la solution optimale.",
        actions: [
          {
            task: "Analyse du processus actuel de gestion des courriels",
            detail:
              "Etude des templates existants, des types de demandes frequentes et des regles d'assignation par succursale.",
          },
          {
            task: "Documentation des succursales et zones de couverture",
            detail:
              "Mapping complet des succursales avec leurs zones geographiques pour l'assignation automatique.",
          },
          {
            task: "Collecte des templates de reponse",
            detail:
              "Recuperation et structuration des templates existants pour les integrer au systeme d'IA.",
          },
        ],
      },
      {
        icon: "Cpu",
        title: "Phase 2 : Developpement du systeme IA",
        why: "Construction du coeur du systeme avec l'intelligence artificielle pour l'analyse et la generation de reponses.",
        actions: [
          {
            task: "Configuration de la surveillance de boite courriel",
            detail: "Mise en place du systeme de detection automatique des nouveaux courriels entrants.",
          },
          {
            task: "Integration du modele d'IA (Claude ou Gemini)",
            detail:
              "Configuration du modele pour analyser le contenu, identifier le service et detecter la localisation.",
          },
          {
            task: "Developpement de la logique d'assignation",
            detail:
              "Creation de l'algorithme d'association automatique entre localisation client et succursale.",
          },
          {
            task: "Generation de reponses personnalisees",
            detail:
              "Configuration de l'IA pour generer des reponses adaptees incluant les informations pertinentes (prix, vehicule, etc.).",
          },
        ],
      },
      {
        icon: "Rocket",
        title: "Phase 3 : Deploiement et formation",
        why: "Mise en production du systeme avec une phase de validation et transfert des connaissances.",
        actions: [
          {
            task: "Tests et validation du systeme",
            detail:
              "Phase de tests avec des courriels reels en mode brouillon pour valider la qualite des reponses.",
          },
          {
            task: "Ajustements et optimisations",
            detail:
              "Corrections et ameliorations basees sur les retours de la phase de test.",
          },
          {
            task: "Formation de l'equipe Dr Tint",
            detail:
              "Session de formation sur l'utilisation du systeme, la validation des brouillons et la comprehension du fonctionnement.",
          },
          {
            task: "Documentation et support",
            detail:
              "Livraison de la documentation complete et support pour les premieres semaines d'utilisation.",
          },
        ],
      },
    ],
  },
  pricing: {},
  annexe: {
    title: "Suite du mandat",
    description:
      "Suite a ce projet, les ameliorations pourront etre realisees a l'heure ou via une banque d'heures mensuelle.",
    services: [
      {
        id: "ameliorations",
        icon: "Wrench",
        title: "Ameliorations du systeme",
        description: "Ajustements et optimisations continues du systeme d'automatisation.",
        items: [
          "Ajout de nouveaux templates de reponse",
          "Integration de nouvelles succursales",
          "Amelioration de la precision de l'IA",
          "Ajout de nouvelles fonctionnalites",
        ],
      },
      {
        id: "extension",
        icon: "Expand",
        title: "Extension a d'autres canaux",
        description: "Deploiement de l'automatisation sur d'autres points de contact client.",
        items: [
          "Automatisation des formulaires du site web",
          "Integration avec le systeme telephonique",
          "Chatbot sur le site web",
          "Integration CRM",
        ],
      },
    ],
    hourlyBanks: [
      { name: "Essentielle", hours: "10h/mois", description: "Pour des ajustements ponctuels" },
      { name: "Croissance", hours: "25h/mois", description: "Pour un accompagnement regulier" },
      { name: "Performance+", hours: "50h/mois", description: "Pour une evolution continue" },
    ],
  },
  closing: {
    title: "Prets a automatiser votre gestion de courriels",
    subtitle:
      "De la lecture manuelle a l'intelligence artificielle - plus rapide, plus precis, plus efficace.",
    preparedFor: "Dr Tint",
    contact: "Leonce Simard",
  },
}
