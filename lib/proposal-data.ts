// ============================================================
// proposal-data.ts — SOURCE UNIQUE DES DONNÉES CLIENT
// Ce fichier est généré et rempli par v0 lors de chaque
// nouvelle soumission client. Ne pas modifier manuellement.
// ============================================================

export const client = {
  name: "Groupe Laplante",
  contactName: "Hugo Bélanger, Mathieu Laplante & Christopher Tollstam",
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
    description: "La plateforme est, dans son ensemble, un Loan Origination System (LOS) sur mesure pour Groupe Laplante : elle couvre tout le cycle de vie du prêt, de la soumission du dossier jusqu'au financement et au suivi, sans les modules superflus des LOS américains génériques. Elle réunit la gestion des dossiers clients, les contrats de location, la génération automatique des documents (contrat de prêt, conditions, taux, échéancier), le suivi des paiements, le tableau de bord, l'interface concessionnaires et les rapports QuickBooks — enrichis des exigences métier critiques identifiées en rencontre : checklist de livraison bloquante, monitoring et tableau d'alertes temps réel, intégration des assurances et connexion bancaire Plaid.",
    modules: [
      {
        id: "infra",
        name: "Infrastructure & sécurité",
        description: "Serveurs hébergés au Canada, base de données, gestion des rôles et accès (admin, analyste, conseiller concessionnaire), environnements dev et prod, pipeline de déploiement.",
        hours: 15,
      },
      {
        id: "clients",
        name: "Dossiers clients",
        description: "Fiche client complète : coordonnées, historique des contrats, pièces jointes (contrat, identité, inspection du véhicule). Statut du dossier. Gestion documentaire sur la durée du contrat.",
        hours: 13,
      },
      {
        id: "contrats",
        name: "Contrats de location",
        description: "Formulaire de contrat (véhicule, valeur, versements, durée, acompte). Échéancier généré automatiquement. Solde mis à jour à chaque versement. Option de rachat ou revente en fin de contrat.",
        hours: 35,
      },
      {
        id: "paiements",
        name: "Suivi des paiements",
        description: "Versements hebdomadaires surveillés automatiquement (privilégiés pour la clientèle 2e chance : 120-140$/sem. plutôt qu'un paiement mensuel). Détection immédiate des paiements manqués, relances programmables et historique complet par dossier.",
        hours: 31,
      },
      {
        id: "dashboard",
        name: "Tableau de bord",
        description: "Vue centralisée : nombre de contrats actifs, statut de chaque dossier, liste des retards et défauts. Indicateurs clés en temps réel.",
        hours: 18,
      },
      {
        id: "concessionnaires",
        name: "Interface concessionnaires",
        description: "Accès dédié pour les conseillers des 4 concessions Chrysler et du Kia : soumission de nouveaux dossiers (avec pièces jointes), suivi en temps réel du statut des dossiers soumis.",
        hours: 25,
      },
      {
        id: "rapports",
        name: "Rapports & QuickBooks",
        description: "Rapport mensuel du portefeuille (contrats actifs, retards, défauts, revenus perçus). Intégration QuickBooks Online via API Intuit pour synchroniser les transactions automatiquement.",
        hours: 15,
      },
      {
        id: "souscription",
        name: "Checklist de livraison & archivage des preuves",
        description: "Checklist obligatoire qui BLOQUE la livraison d'un véhicule tant que les 5 points ne sont pas validés : GPS installé, assurance valide, Beacon Score (≈500+), preuve d'emploi et confirmation téléphonique enregistrée. Toutes les preuves (appels, revenus, relevés, contrats) sont archivées avec un historique complet pour la conformité.",
        hours: 50,
      },
      {
        id: "monitoring",
        name: "Monitoring & tableau d'alertes temps réel",
        description: "Le coeur opérationnel du produit : un tableau d'alertes unique qui surveille en continu chaque dossier — paiement manqué, assurance annulée, GPS inactif, document manquant. Détection précoce des défauts, santé du portefeuille et segmentation par niveau de risque, avec suivi GPS de l'état du véhicule.",
        hours: 40,
      },
      {
        id: "assurances",
        name: "Intégration assurances partenaires",
        description: "Partenariats avec les compagnies d'assurance : la procuration signée au contrat autorise l'assureur à notifier automatiquement la plateforme dès qu'un client annule sa couverture, déclenchant une alerte immédiate. Suivi continu de la validité des assurances sur l'ensemble du portefeuille.",
        hours: 34,
      },
      {
        id: "documents",
        name: "Génération de documents",
        description: "Génération automatique des documents requis à partir des données du dossier : contrat de prêt, conditions, taux, échéancier et divulgations — prêts à signer. Modèles conformes, calculs verrouillés sur les données du dossier et personnalisés aux couleurs de Groupe Laplante.",
        hours: 35,
      },
      {
        id: "plaid",
        name: "Connexion bancaire (Plaid)",
        description: "Accès sécurisé aux transactions bancaires des clients via l'API Plaid. Valide les revenus et le comportement bancaire directement dans la souscription, sans relevés manuels.",
        hours: 38,
      },
      {
        id: "tests",
        name: "Tests & mise en production",
        description: "Tests fonctionnels complets, sessions de validation avec l'équipe Groupe Laplante, corrections, mise en production sur infrastructure canadienne, accompagnement au démarrage (2 semaines).",
        hours: 30,
      },
    ],
    contingencyPercent: 15,
  },

  options: [
    {
      id: "certm",
      name: "Enquête de crédit (CERTM)",
      description: "Intégration API CERTM : pull automatique des rapports de crédit depuis la plateforme. Coût par rapport : ~13$ (facturé au coût réel, en sus du développement).",
      hours: 33,
      recommended: false,
      weeksToAdd: 1,
    },
    {
      id: "pad",
      name: "Prélèvement automatique (PAD)",
      description: "Prélèvement direct sur le compte bancaire des clients à chaque échéance. La plateforme déclenche le versement automatiquement et alerte immédiatement si la transaction échoue.",
      hours: 45,
      recommended: true,
      weeksToAdd: 2,
    },
    {
      id: "sms",
      name: "SMS & relances automatisées",
      description: "Envoi de SMS illimités : rappels avant échéance, relances en cas de retard (J+1, J+3, J+7...), confirmations de réception. Coût de service mensuel fixe en sus (~30-60$/mois).",
      hours: 15,
      recommended: true,
      weeksToAdd: 1,
    },
    {
      id: "portail",
      name: "Portail client self-service",
      description: "Interface pour les clients finaux : consulter le solde restant, l'historique des paiements, les documents de contrat et l'échéancier. Réduit les appels entrants.",
      hours: 25,
      recommended: false,
      weeksToAdd: 2,
    },
    {
      id: "mobile",
      name: "Application mobile (iOS & Android)",
      description: "Application native permettant à l'équipe de gérer les dossiers, consulter le tableau de bord et recevoir les alertes sur téléphone — pour les conseillers en concession.",
      hours: 100,
      recommended: false,
      weeksToAdd: 5,
    },
    {
      id: "fintrac",
      name: "Conformité FINTRAC",
      description: "Mise en conformité pour prêteur direct : journaux d'audit, déclarations réglementaires, politiques internes. À valider avec votre avocat selon la structure légale retenue.",
      hours: 28,
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
      description: "MVP de base + Connexion bancaire Plaid + Enquête crédit CERTM + PAD + SMS illimités.",
      optionIds: ["plaid", "certm", "pad", "sms"],
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
    billing: "Aux heures réellement consommées — le prix affiché est le plafond convenu, contingence incluse.",
    contingencyNote: "Une réserve de 15 % pour imprévus est déjà incluse dans le prix. Si elle n'est pas utilisée, elle n'est pas facturée. Aucune heure fictive.",
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
  startDate: "Juillet 2026",
  reviewCalls: "30 min à 1h par semaine avec l'équipe Groupe Laplante",
  baseDurationWeeks: 17,
  phases: [
    {
      number: 1,
      name: "Socle opérationnel",
      period: "Semaines 1-8",
      focus: "Gérer les dossiers, contrats et paiements au quotidien, avec une vue consolidée du portefeuille.",
    },
    {
      number: 2,
      name: "Moteur de crédit & risques",
      period: "Semaines 9-13",
      focus: "Sécuriser la décision de crédit, la souscription et le suivi du risque.",
    },
    {
      number: 3,
      name: "Intégrations & mise en service",
      period: "Semaines 14-17",
      focus: "Connecter les partenaires, produire les rapports et livrer la plateforme en production.",
    },
  ] as Array<{
    number: number
    name: string
    period: string
    focus: string
  }>,
  weeks: [
    {
      phase: 1,
      week: 1,
      endWeek: 2,
      period: "Semaines 1-2",
      month: "Juillet",
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
      phase: 1,
      week: 3,
      endWeek: 5,
      period: "Semaines 3-5",
      month: "Juillet-Août",
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
      phase: 1,
      week: 6,
      endWeek: 8,
      period: "Semaines 6-8",
      month: "Août",
      title: "Paiements & Tableau de bord",
      focus: "Visibilité en temps réel sur le portefeuille",
      moduleId: "paiements,dashboard",
      activities: [
        "Enregistrement des versements reçus (hebdomadaires)",
        "Alertes courriel automatiques (paiements manqués)",
        "Relances programmables (J+1, J+3, J+7)",
        "Tableau de bord avec indicateurs clés",
        "Vue consolidée : à jour, en retard, en défaut",
      ],
      milestone: "Dashboard en temps réel",
    },
    {
      phase: 2,
      week: 9,
      endWeek: 11,
      period: "Semaines 9-11",
      month: "Sept.",
      title: "Checklist de livraison & Génération de documents",
      focus: "Sécuriser la livraison et produire les documents de prêt",
      moduleId: "souscription,documents",
      activities: [
        "Checklist bloquante : GPS, assurance, Beacon Score, emploi",
        "Enregistrement d'appel de confirmation d'emploi",
        "Génération des documents (contrat, conditions, taux, échéancier)",
        "Modèles conformes aux couleurs de Groupe Laplante",
        "Archivage des preuves pour la conformité",
      ],
      milestone: "Livraison sécurisée & documents",
    },
    {
      phase: 2,
      week: 12,
      endWeek: 13,
      period: "Semaines 12-13",
      month: "Septembre-Oct.",
      title: "Connexion Plaid & Monitoring",
      focus: "Valider les revenus et surveiller le risque en continu",
      moduleId: "plaid,monitoring",
      activities: [
        "Connexion bancaire Plaid (validation des revenus)",
        "Analyse du comportement bancaire",
        "Monitoring du portefeuille et détection des défauts",
        "Tableau d'alertes temps réel et suivi GPS",
        "Segmentation par niveau de risque",
      ],
      milestone: "Moteur de crédit opérationnel",
    },
    {
      phase: 3,
      week: 14,
      endWeek: 15,
      period: "Semaines 14-15",
      month: "Octobre",
      title: "Assurances, Concessionnaires & Rapports",
      focus: "Connecter les partenaires et outiller les équipes terrain",
      moduleId: "assurances,concessionnaires,rapports",
      activities: [
        "Intégration des 3 assureurs partenaires + procuration",
        "Portail dédié aux 5 concessions",
        "Soumission et suivi des dossiers avec pièces jointes",
        "Rapports mensuels du portefeuille",
        "Intégration QuickBooks Online (API Intuit)",
      ],
      milestone: "Partenaires connectés",
    },
    {
      phase: 3,
      week: 16,
      endWeek: 17,
      period: "Semaines 16-17",
      month: "Octobre",
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
    phase: number
    week: number
    endWeek: number
    period: string
    month: string
    title: string
    focus: string
    moduleId: string
    activities: string[]
    milestone?: string
  }>,
  iterativeNote:
    "Ce calendrier correspond au scénario MVP seul et inclut déjà une marge de contingence pour absorber les imprévus. L'ajout d'options additionnelles allonge le délai selon les fonctionnalités sélectionnées (indiqué pour chacune). Notre approche demeure itérative avec des points d'avancement courts (30 min) aux deux semaines.",
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
