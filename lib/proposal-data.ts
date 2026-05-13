// ============================================================
// proposal-data.ts — SOURCE UNIQUE DES DONNÉES CLIENT
// Ce fichier est généré et rempli par v0 lors de chaque
// nouvelle soumission client. Ne pas modifier manuellement.
// ============================================================

export const client = {
  name: "Groupe Laplante",
  contactName: "Hugo Bélanger & Mathieu Laplante",
  website: "https://www.laplantegroupeauto.com/",
  industry: "Réseau de concessions automobiles",
  mission: "Internaliser le processus de financement automobile pour offrir une meilleure expérience client et accroître la rentabilité",
  targetAudience: "Acheteurs de véhicules au Québec cherchant des solutions de financement flexibles",
  currentSituation: "Groupe de concessions automobiles qui agit actuellement comme intermédiaire pour le financement, dépendant d'institutions tierces avec perte de contrôle sur le processus d'approbation",
  notificationEmail: "carl@techguys.consulting",
}

export const branding = {
  primaryColor: "#0035FF",
  secondaryColor: "#FFFFFF",
  accentColor: "#3B82F6",
  textDark: "#FFFFFF",
  textMuted: "#9CA3AF",
  backgroundDark: "#0A0A0A",
  backgroundCard: "#111111",
  logoUrl: "/images/laplante-logo.webp",
  coverImageUrl: "",
  closingImageUrl: "",
  fontSerif: "serif",
  fontSans: "sans-serif",
  visualStyle: "dark, minimal, tech-forward, Raycast-inspired",
  toneOfVoice: "professionnel, technique mais accessible, axé résultats",
}

export const pricing = {
  type: "mvp-options" as "hourly-bank" | "fixed-price" | "mvp-options",
  hourlyRate: 150,

  mvp: {
    name: "MVP de base",
    description: "Le coeur de la plateforme AutoFinance : gestion des dossiers clients, contrats de location, suivi des paiements, tableau de bord, interface concessionnaires et rapports QuickBooks.",
    modules: [
      {
        id: "infra",
        name: "Infrastructure & sécurité",
        description: "Serveurs hébergés au Canada, base de données, gestion des rôles et accès (admin, analyste, conseiller concessionnaire), environnements dev et prod, pipeline de déploiement.",
        hoursMin: 10,
        hoursMax: 20,
      },
      {
        id: "clients",
        name: "Dossiers clients",
        description: "Fiche client complète : coordonnées, historique des contrats, pièces jointes (contrat, identité, inspection du véhicule). Statut du dossier. Gestion documentaire sur la durée du contrat.",
        hoursMin: 10,
        hoursMax: 15,
      },
      {
        id: "contrats",
        name: "Contrats de location",
        description: "Formulaire de contrat (véhicule, valeur, versements, durée, acompte). Échéancier généré automatiquement. Solde mis à jour à chaque versement. Option de rachat ou revente en fin de contrat.",
        hoursMin: 30,
        hoursMax: 40,
      },
      {
        id: "paiements",
        name: "Suivi des paiements",
        description: "Enregistrement des versements reçus. Alertes courriel automatiques si un paiement est manqué. Relances programmables. Historique complet par dossier.",
        hoursMin: 20,
        hoursMax: 30,
      },
      {
        id: "dashboard",
        name: "Tableau de bord",
        description: "Vue centralisée : nombre de contrats actifs, statut de chaque dossier, liste des retards et défauts. Indicateurs clés en temps réel.",
        hoursMin: 15,
        hoursMax: 20,
      },
      {
        id: "concessionnaires",
        name: "Interface concessionnaires",
        description: "Accès dédié pour les conseillers des 4 concessions Chrysler et du Kia : soumission de nouveaux dossiers (avec pièces jointes), suivi en temps réel du statut des dossiers soumis.",
        hoursMin: 20,
        hoursMax: 30,
      },
      {
        id: "rapports",
        name: "Rapports & QuickBooks",
        description: "Rapport mensuel du portefeuille (contrats actifs, retards, défauts, revenus perçus). Intégration QuickBooks Online via API Intuit pour synchroniser les transactions automatiquement.",
        hoursMin: 10,
        hoursMax: 20,
      },
      {
        id: "tests",
        name: "Tests & mise en production",
        description: "Tests fonctionnels complets, sessions de validation avec l'équipe Groupe Laplante, corrections, mise en production sur infrastructure canadienne, accompagnement au démarrage (2 semaines).",
        hoursMin: 20,
        hoursMax: 40,
      },
    ],
    contingencyPercent: 10,
  },

  options: [
    {
      id: "flinks",
      name: "Connexion bancaire (Flinks)",
      description: "Accès sécurisé aux transactions bancaires des clients via l'API Flinks (outil canadien, conforme Loi 25). Valide les revenus et le comportement bancaire sans relevés manuels.",
      hoursMin: 30,
      hoursMax: 45,
      recommended: false,
      weeksToAdd: 1,
    },
    {
      id: "certm",
      name: "Enquête de crédit (CERTM)",
      description: "Intégration API CERTM : pull automatique des rapports de crédit depuis la plateforme. Coût par rapport : ~13$ (facturé au coût réel, en sus du développement).",
      hoursMin: 25,
      hoursMax: 40,
      recommended: false,
      weeksToAdd: 1,
    },
    {
      id: "pad",
      name: "Prélèvement automatique (PAD)",
      description: "Prélèvement direct sur le compte bancaire des clients à chaque échéance. La plateforme déclenche le versement automatiquement et alerte immédiatement si la transaction échoue.",
      hoursMin: 35,
      hoursMax: 55,
      recommended: true,
      weeksToAdd: 2,
    },
    {
      id: "sms",
      name: "SMS & relances automatisées",
      description: "Envoi de SMS illimités : rappels avant échéance, relances en cas de retard (J+1, J+3, J+7...), confirmations de réception. Coût de service mensuel fixe en sus (~30-60$/mois).",
      hoursMin: 10,
      hoursMax: 20,
      recommended: true,
      weeksToAdd: 1,
    },
    {
      id: "portail",
      name: "Portail client self-service",
      description: "Interface pour les clients finaux : consulter le solde restant, l'historique des paiements, les documents de contrat et l'échéancier. Réduit les appels entrants.",
      hoursMin: 20,
      hoursMax: 30,
      recommended: false,
      weeksToAdd: 2,
    },
    {
      id: "mobile",
      name: "Application mobile (iOS & Android)",
      description: "Application native permettant à l'équipe de gérer les dossiers, consulter le tableau de bord et recevoir les alertes sur téléphone — pour les conseillers en concession.",
      hoursMin: 80,
      hoursMax: 120,
      recommended: false,
      weeksToAdd: 5,
    },
    {
      id: "fintrac",
      name: "Conformité FINTRAC",
      description: "Mise en conformité pour prêteur direct : journaux d'audit, déclarations réglementaires, politiques internes. À valider avec votre avocat selon la structure légale retenue.",
      hoursMin: 20,
      hoursMax: 35,
      recommended: false,
      weeksToAdd: 2,
    },
  ],

  scenarios: [
    {
      id: "mvp-seul",
      name: "MVP seul",
      description: "Modules 0 à 7 (infra, dossiers, contrats, paiements, dashboard, concessionnaires, rapports/QuickBooks, tests). Alertes courriel paiements manqués.",
      optionIds: [],
      recommended: true,
    },
    {
      id: "mvp-automatisation",
      name: "MVP + Automatisation",
      description: "MVP de base + Prélèvement automatique PAD + SMS & relances automatisées illimitées.",
      optionIds: ["pad", "sms"],
      recommended: false,
    },
    {
      id: "mvp-essentiel",
      name: "MVP + Pack Essentiel",
      description: "MVP de base + Connexion bancaire Flinks + Enquête crédit CERTM + PAD + SMS illimités.",
      optionIds: ["flinks", "certm", "pad", "sms"],
      recommended: false,
    },
  ],

  hosting: {
    min: 100,
    max: 250,
    note: "Serveurs canadiens mis en place par TechGuys, facturés séparément au coût réel.",
  },

  // Modalités de paiement
  payment: {
    deposit: 25, // % à la signature
    frequency: "Aux deux semaines",
    paymentTerms: 15, // jours
    method: "Virement ou chèque",
    billing: "Aux heures réellement consommées — jamais au-dessus du maximum convenu.",
    contingencyNote: "La contingence non utilisée n'est pas facturée. Aucune heure fictive.",
    tracking: "Suivi hebdomadaire du budget consommé vs. budgété partagé avec Hugo.",
  },

  plans: [],
  inclusions: [],
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

export const signing = {
  type: "pandadoc" as "v0" | "pandadoc",
  pandadocUrl: "",
}

export const calendar = {
  pmApproved: false,
  startDate: "Juin 2026",
  reviewCalls: "30 min à 1h par semaine avec l'équipe Groupe Laplante",
  baseDurationWeeks: 13,
  weeks: [
    {
      week: 1,
      period: "Semaines 1-2",
      month: "Juin",
      title: "Infrastructure & Setup",
      focus: "Poser les fondations techniques solides",
      moduleId: "infra",
      activities: [
        "Mise en place des serveurs au Canada",
        "Configuration de la base de données PostgreSQL",
        "Setup des environnements dev et prod",
        "Configuration du système d'authentification",
        "Pipeline de déploiement automatisé",
      ],
      milestone: "Infrastructure opérationnelle",
    },
    {
      week: 3,
      period: "Semaines 3-5",
      month: "Juin-Juillet",
      title: "Dossiers clients & Contrats",
      focus: "Le coeur métier de la plateforme",
      moduleId: "clients,contrats",
      activities: [
        "Module de gestion des dossiers clients",
        "Formulaire de création de contrats de location",
        "Génération automatique des échéanciers",
        "Gestion des pièces jointes et documents",
        "Calcul automatique des versements et intérêts",
      ],
      milestone: "Contrats fonctionnels",
    },
    {
      week: 6,
      period: "Semaines 6-8",
      month: "Juillet",
      title: "Suivi des paiements & Dashboard",
      focus: "Visibilité en temps réel sur le portefeuille",
      moduleId: "paiements,dashboard",
      activities: [
        "Enregistrement des versements reçus",
        "Alertes courriel automatiques (paiements manqués)",
        "Relances programmables",
        "Tableau de bord avec indicateurs clés",
        "Vue consolidée : à jour, en retard, en défaut",
      ],
      milestone: "Dashboard en temps réel",
    },
    {
      week: 9,
      period: "Semaines 9-11",
      month: "Août",
      title: "Interface concessionnaires & Rapports",
      focus: "Outiller les équipes terrain",
      moduleId: "concessionnaires,rapports",
      activities: [
        "Portail dédié aux 5 concessions",
        "Soumission de nouveaux dossiers avec pièces jointes",
        "Suivi du statut des dossiers soumis",
        "Rapports mensuels du portefeuille",
        "Intégration QuickBooks Online (API Intuit)",
      ],
      milestone: "Concessionnaires connectés",
    },
    {
      week: 12,
      period: "Semaines 12-13",
      month: "Août-Sept.",
      title: "Tests & Mise en production",
      focus: "Livraison d'une plateforme robuste",
      moduleId: "tests",
      activities: [
        "Tests fonctionnels complets",
        "Sessions de validation avec l'équipe Groupe Laplante",
        "Corrections et ajustements finaux",
        "Mise en production sur infrastructure canadienne",
        "Accompagnement au démarrage (2 semaines)",
      ],
      milestone: "Plateforme live",
    },
  ] as Array<{
    week: number
    period: string
    month: string
    title: string
    focus: string
    moduleId: string
    activities: string[]
    milestone?: string
  }>,
  iterativeNote:
    "Ce calendrier représente notre plan idéal basé sur le scénario MVP seul. L'ajout d'options additionnelles allongera le délai de 1 à 5 semaines selon les fonctionnalités sélectionnées. Notre approche demeure itérative avec des points d'avancement courts (30 min) aux deux semaines.",
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
