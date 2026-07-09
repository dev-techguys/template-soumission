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
  mission: "Internaliser le processus de location automobile pour offrir une meilleure expérience client et accroître la rentabilité",
  targetAudience: "Clients au Québec cherchant des solutions de location automobile flexibles",
  currentSituation: "Groupe de concessions automobiles qui agit actuellement comme intermédiaire pour la location, dépendant d'institutions tierces avec perte de contrôle sur le processus d'approbation",
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
    description: "La plateforme est, dans son ensemble, un Lease Origination System (LOS) sur mesure pour Groupe Laplante : elle couvre tout le cycle de vie de la location automobile, de la soumission du dossier jusqu'au financement et au suivi, sans les modules superflus des LOS américains génériques. Elle réunit la gestion des dossiers clients, les contrats de location, la génération automatique des documents (contrat de location, conditions, taux, échéancier), le suivi des paiements, le tableau de bord, le portail client self-service, l'interface concessionnaires et les rapports QuickBooks — enrichis des exigences métier critiques identifiées en rencontre : checklist de livraison bloquante, monitoring et tableau d'alertes temps réel, SMS et relances automatisées, intégration des assurances et connexion bancaire Plaid.",
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
        description: "Suivi des versements directement dans le dossier client : enregistrement de chaque paiement reçu, mise à jour du solde et de l'échéancier, et historique complet par dossier. Versements hebdomadaires privilégiés pour la clientèle 2e chance (120-140$/sem. plutôt qu'un paiement mensuel). La détection des paiements manqués et les alertes sont gérées par le module Monitoring.",
        hours: 31,
      },
      {
        id: "dashboard",
        name: "Tableau de bord",
        description: "Vue centralisée : nombre de contrats actifs, statut de chaque dossier, liste des retards et défauts. Indicateurs clés en temps réel.",
        hours: 18,
      },
      {
        id: "portail",
        name: "Portail client self-service",
        description: "Interface pour les clients finaux : consulter le solde restant, l'historique des paiements, les documents de contrat et l'échéancier. Réduit les appels entrants et améliore l'expérience client.",
        hours: 25,
        note: "Certains aspects restent à préciser avec Groupe Laplante ; le prix ne devrait toutefois pas varier de façon significative.",
      },
      {
        id: "concessionnaires",
        name: "Interface concessionnaires",
        description: "Une vue organisationnelle où une organisation gère plusieurs concessionnaires depuis un seul compte : tableau de bord global regroupant l'ensemble des concessions, plus l'accès dédié de chaque conseiller pour soumettre des dossiers (avec pièces jointes) et suivre leur statut en temps réel. Inclut une vue dédiée aux F&I — les responsables Financement & Assurance qui récoltent les dossiers et documents en concession pour monter la demande de location.",
        hours: 25,
      },
      {
        id: "souscription",
        name: "Checklist de livraison & archivage des preuves",
        description: "Checklist obligatoire qui BLOQUE la livraison d'un véhicule tant que les 5 points ne sont pas validés : GPS installé, assurance valide, Beacon Score (≈500+), preuve d'emploi et confirmation téléphonique enregistrée. Toutes les preuves (appels, revenus, relevés, contrats) sont archivées avec un historique complet pour la conformité.",
        hours: 50,
      },
      {
        id: "monitoring",
        name: "Monitoring des paiements manqués",
        description: "Un tableau d'alertes en temps réel centré sur les paiements manqués : détection automatique dès qu'un versement échoue et alerte courriel immédiate à l'équipe. Les autres suivis (assurance annulée, GPS inactif, document manquant) restent gérés manuellement pour l'instant; des automatisations pourront être ajoutées ultérieurement.",
        hours: 40,
      },
      {
        id: "sms",
        name: "SMS & relances automatisées",
        description: "Envoi de SMS automatisés directement branché sur le tableau d'alertes : rappels avant échéance, relances en cas de retard (J+1, J+3, J+7...) et confirmations de réception. Coût de service mensuel fixe en sus (~30-60$/mois).",
        hours: 15,
      },
      {
        id: "documents",
        name: "Génération de documents",
        description: "Génération automatique des documents requis à partir des données du dossier : contrat de location, conditions, taux, échéancier et divulgations — prêts à signer. Modèles conformes, calculs verrouillés sur les données du dossier et personnalisés aux couleurs de Groupe Laplante.",
        hours: 35,
      },
      {
        id: "plaid",
        name: "Connexion bancaire (Plaid)",
        description: "Accès sécurisé aux transactions bancaires des clients via l'API Plaid. Valide les revenus et le comportement bancaire directement dans la souscription, sans relevés manuels. Peut aussi servir à vérifier l'identité de la personne (KYC via Plaid Identity) à l'ouverture du dossier, pour alimenter la piste de conformité FINTRAC.",
        hours: 38,
      },
      {
        id: "tests",
        name: "Tests & mise en production",
        description: "Tests fonctionnels complets, sessions de validation avec l'équipe Groupe Laplante, corrections, mise en production sur infrastructure canadienne, accompagnement au démarrage (2 semaines).",
        hours: 30,
      },
    ],
    contingencyPercent: 20,
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
      description: "Une couche de journalisation de conformité distincte des logs applicatifs : un registre immuable (append-only), horodaté et attribué à chaque utilisateur/système, permettant de reconstituer par dossier la vérification d'identité (méthode, date, pièces), la cote de risque et son historique de révision, ainsi que les alertes de surveillance et leur traitement (rejetée, escaladée, déclarée). Production à FINTRAC sous 30 jours sur demande et conservation 5 ans après la fin du contrat. La vérification d'identité (KYC) à l'ouverture du dossier peut s'appuyer sur Plaid Identity. À valider avec votre avocat selon la structure légale retenue.",
      hours: 35,
      recommended: false,
      weeksToAdd: 2,
    },
    {
      id: "cbb",
      name: "Évaluation véhicules (Canadian Black Book) *",
      description: "Intégration à l'API Canadian Black Book pour obtenir en temps réel la valeur d'un véhicule à partir de son VIN et calculer automatiquement le prix de location. Décodage VIN (marque, modèle, année, trim, options à partir des 17 caractères), récupération des valeurs détail, échange et gros ajustées selon le kilométrage et la condition, calcul du prix de location basé sur la valeur résiduelle CBB, le taux, la durée et la marge de Groupe Laplante, et données de marché actualisées quotidiennement sans intervention manuelle.",
      hours: 50,
      recommended: false,
      weeksToAdd: 2,
      note: "* Information encore incomplète : à préciser avec Groupe Laplante et sujet à l'obtention d'un accès développeur Canadian Black Book (délai d'onboarding externe non inclus dans l'échéancier de développement). L'estimation pourrait être ajustée en conséquence.",
    },
  ],

  scenarios: [
    {
      id: "mvp-seul",
      name: "MVP complet",
      description: "L'ensemble du LOS sur mesure : dossiers, contrats, paiements, prélèvement automatique (PAD), tableau de bord, concessionnaires, rapports/QuickBooks, checklist de livraison, monitoring, SMS & relances, assurances, génération de documents et connexion bancaire Plaid.",
      optionIds: [],
      recommended: true,
    },
    {
      id: "mvp-credit",
      name: "MVP + Enquête crédit",
      description: "MVP complet + Enquête de crédit automatisée (CERTM) : pull des rapports de crédit directement dans la souscription.",
      optionIds: ["certm"],
      recommended: false,
    },
    {
      id: "mvp-essentiel",
      name: "MVP + Pack Essentiel",
      description: "MVP complet + Enquête crédit CERTM + Conformité FINTRAC + Application mobile.",
      optionIds: ["certm", "fintrac", "mobile"],
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
    contingencyNote: "Une réserve de 20 % pour imprévus est déjà incluse dans le prix. Si elle n'est pas utilisée, elle n'est pas facturée. Aucune heure fictive.",
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

// Modules facturés à l'heure (hors prix plafond du MVP).
// Ces portions dépendent d'une solution technique à confirmer en cours de projet
// (ex. le fournisseur de prélèvement automatique), ce qui rend leur coût et leur
// durée difficiles à figer d'avance. Ils sont donc facturés aux heures réellement
// consommées plutôt qu'inclus dans le forfait à prix fixe.
export const hourlyBilling = {
  rationale:
    "Certaines portions du projet dépendent d'une solution technique que nous choisirons en cours de route. Comme il est difficile d'en prévoir 100 % du coût et du temps à l'avance, nous préférons les sortir du prix plafond et les facturer aux heures réellement consommées, au même taux horaire, en toute transparence.",
  hourlyRate: 150,
  modules: [
    {
      id: "pad",
      name: "Prélèvement automatique (PAD)",
      description:
        "Prélèvement direct sur le compte bancaire des clients à chaque échéance : déclenchement automatique du versement et alerte immédiate en cas de transaction refusée. L'intégration dépend du fournisseur de paiement retenu (ex. Stripe, évalué en priorité car conforme au Canada), qui déterminera l'effort réel.",
      estimatedHours: 45,
      note: "Estimation indicative fournie à titre de repère. La facturation se fait aux heures réellement travaillées selon la solution retenue — non incluse dans le prix plafond du MVP.",
    },
    {
      id: "assurances",
      name: "Intégration assurances partenaires",
      description:
        "Partenariats avec les compagnies d'assurance : la procuration signée au contrat autorise l'assureur à notifier automatiquement la plateforme dès qu'un client annule sa couverture, déclenchant une alerte immédiate. Suivi continu de la validité des assurances sur l'ensemble du portefeuille. L'effort dépend des modalités techniques offertes par chaque assureur partenaire, encore à confirmer.",
      estimatedHours: 34,
      note: "Estimation indicative fournie à titre de repère. La facturation se fait aux heures réellement travaillées selon les intégrations retenues avec les assureurs — non incluse dans le prix plafond du MVP.",
    },
    {
      id: "rapports",
      name: "Rapports & QuickBooks",
      description:
        "Rapport mensuel du portefeuille (contrats actifs, retards, défauts, revenus perçus). Intégration QuickBooks Online via API Intuit pour synchroniser les transactions automatiquement. La portée de l'intégration comptable reste à préciser avec Groupe Laplante.",
      estimatedHours: 25,
      note: "Estimation indicative fournie à titre de repère. La facturation se fait aux heures réellement travaillées selon la portée retenue — non incluse dans le prix plafond du MVP.",
    },
  ],
}

export const signing = {
  type: "pandadoc" as "v0" | "pandadoc",
  pandadocUrl: "https://app.pandadoc.com/document/v2?token=b2f04c87a486d1a6944819a010738720fa01ce09",
}

// Analyse comparative des frais Stripe pour le prélèvement automatique (PAD / ACSS Debit)
// selon la fréquence de prélèvement de la location (hebdomadaire vs mensuel).
export const stripeFeesComparison = {
  contexte:
    "Tarif Stripe PAD (ACSS Debit) au Canada : 1% + 0,40$CA par transaction, plafonné à 5,00$CA par transaction.",
  hypothese:
    "Calcul basé sur une location moyenne de 7 800$/an. Le montant réel varie selon la location; le plafond de 5,00$ s'applique dès qu'un paiement d��passe environ 460$ (ex: paiement mensuel).",
  noteCourte:
    "Calcul basé sur une location moyenne de 7 800$/an. Le plafond de 5,00$ s'applique dès qu'un paiement dépasse ~460$.",
  // Paramètres du modèle de frais Stripe (utilisés pour le recalcul dynamique côté client)
  feeModel: {
    percent: 0.01, // 1%
    fixed: 0.4, // 0,40$ par transaction
    cap: 5.0, // plafond 5,00$ par transaction
    capThreshold: 460, // un paiement au-dessus de ~460$ atteint le plafond
  },
  montantPretAnnuelDefaut: 7800,
  annees: [
    {
      annee: 2026,
      nombreDePrets: 120,
      hebdomadaire: {
        nombreDePaiements: 52,
        fraisParTransaction: 1.9,
        fraisAnnuelParPret: 98.8,
        fraisAnnuelTotal: 11856,
        volumeTransaction: 936000,
      },
      mensuel: {
        nombreDePaiements: 12,
        fraisParTransactionAvantPlafond: 6.9,
        fraisParTransaction: 5.0,
        plafondApplique: true,
        fraisAnnuelParPret: 60.0,
        fraisAnnuelTotal: 7200,
        volumeTransaction: 936000,
      },
      ecartHebdoVsMensuel: 4656,
    },
    {
      annee: 2027,
      nombreDePrets: 360,
      hebdomadaire: {
        nombreDePaiements: 52,
        fraisParTransaction: 1.9,
        fraisAnnuelParPret: 98.8,
        fraisAnnuelTotal: 35568,
        volumeTransaction: 2808000,
      },
      mensuel: {
        nombreDePaiements: 12,
        fraisParTransactionAvantPlafond: 6.9,
        fraisParTransaction: 5.0,
        plafondApplique: true,
        fraisAnnuelParPret: 60.0,
        fraisAnnuelTotal: 21600,
        volumeTransaction: 2808000,
      },
      ecartHebdoVsMensuel: 13968,
    },
  ],
  cumulatif2026_2027: {
    hebdomadaire: 47424,
    mensuel: 28800,
    ecart: 18624,
  },
}

export const calendar = {
  pmApproved: false,
  startDate: "Juillet 2026",
  reviewCalls: "30 min à 1h par semaine avec l'équipe Groupe Laplante",
  baseDurationWeeks: 16,
  phases: [
    {
      number: 1,
      name: "Socle opérationnel",
      period: "Semaines 1-8",
      focus: "Gérer les dossiers, contrats et paiements au quotidien, avec prélèvement automatique et vue consolidée du portefeuille.",
    },
    {
      number: 2,
      name: "Moteur de crédit & risques",
      period: "Semaines 9-13",
      focus: "Sécuriser la décision de crédit, la souscription, le suivi du risque et les relances automatisées.",
    },
    {
      number: 3,
      name: "Intégrations & mise en service",
      period: "Semaines 14-16",
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
      endWeek: 4,
      period: "Semaines 3-4",
      month: "Juillet",
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
      week: 5,
      endWeek: 6,
      period: "Semaines 5-6",
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
      phase: 1,
      week: 7,
      endWeek: 8,
      period: "Semaines 7-8",
      month: "Août",
      title: "Prélèvement automatique (PAD)",
      focus: "Automatiser l'encaissement des versements",
      moduleId: "pad",
      billing: "hourly",
      activities: [
        "Intégration du prélèvement bancaire préautorisé (PAD)",
        "Déclenchement automatique des versements à l'échéance",
        "Gestion des mandats et consentements clients",
        "Alertes immédiates en cas de transaction refusée",
        "Rapprochement automatique avec les dossiers",
      ],
      milestone: "Encaissement automatisé",
    },
    {
      phase: 2,
      week: 9,
      endWeek: 10,
      period: "Semaines 9-10",
      month: "Septembre",
      title: "Checklist de livraison & Génération de documents",
      focus: "Sécuriser la livraison et produire les documents de location",
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
      week: 11,
      endWeek: 12,
      period: "Semaines 11-12",
      month: "Septembre",
      title: "Connexion Plaid & Monitoring des paiements manqués",
      focus: "Valider les revenus et détecter les paiements manqués",
      moduleId: "plaid,monitoring",
      activities: [
        "Connexion bancaire Plaid (validation des revenus)",
        "Analyse du comportement bancaire",
        "Détection automatique des paiements manqués",
        "Tableau d'alertes temps réel et alerte courriel",
        "Base pour automatisations futures (assurance, GPS, documents)",
      ],
      milestone: "Moteur de crédit opérationnel",
    },
    {
      phase: 2,
      week: 13,
      endWeek: 13,
      period: "Semaine 13",
      month: "Octobre",
      title: "SMS & relances automatisées",
      focus: "Automatiser les rappels et relances clients",
      moduleId: "sms",
      activities: [
        "Envoi de SMS branché sur le tableau d'alertes",
        "Rappels avant échéance",
        "Relances automatiques en cas de retard (J+1, J+3, J+7)",
        "Confirmations de réception des paiements",
        "Configuration des séquences de relance",
      ],
      milestone: "Relances automatisées",
    },
    {
      phase: 3,
      week: 14,
      endWeek: 14,
      period: "Semaine 14",
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
      week: 15,
      endWeek: 16,
      period: "Semaines 15-16",
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
