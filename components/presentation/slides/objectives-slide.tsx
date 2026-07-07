"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Users, FileText, CreditCard, BarChart3, Building2, BookOpen, CheckCircle2, ShieldCheck, Boxes, ClipboardCheck, Activity, Bell, FileSignature, Landmark, Repeat, MessageSquare, UserCircle } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem, GlowCard, Parallax } from "@/components/ui/scroll-animations"
import { motion } from "framer-motion"

const PHASES = [
  {
    id: "socle",
    label: "Phase 1",
    title: "Socle opérationnel",
    description: "Gérer les dossiers, contrats et paiements au quotidien, avec une vue consolidée du portefeuille.",
    modules: [
      {
        icon: ShieldCheck,
        number: "01",
        title: "Infrastructure & sécurité",
        description: "Serveurs hébergés au Canada, base de données PostgreSQL 16, gestion des rôles et accès via Supabase / Keycloak, environnements dev et prod, pipeline de déploiement automatisé.",
        features: ["Hébergement Canada (Loi 25)", "Supabase / Keycloak (IAM)", "PostgreSQL avec pgaudit", "CI/CD automatisé"],
      },
      {
        icon: Users,
        number: "02",
        title: "Dossiers clients",
        description: "Fiche client complète avec coordonnées, historique des contrats, pièces jointes (contrat, identité, inspection). Statut du dossier et gestion documentaire sur toute la durée du contrat.",
        features: ["Fiche client complète", "Historique des contrats", "Gestion documentaire", "Statuts de dossier"],
      },
      {
        icon: FileText,
        number: "03",
        title: "Contrats de location",
        description: "Formulaire de création de contrat (véhicule, valeur, versements, durée, acompte). Échéancier généré automatiquement. Solde mis à jour à chaque versement. Option de rachat ou revente.",
        features: ["Création de contrat", "Échéancier auto", "Calcul des intérêts", "Options fin de contrat"],
      },
      {
        icon: CreditCard,
        number: "04",
        title: "Suivi des paiements",
        description: "Enregistrement des versements reçus. Alertes courriel automatiques si un paiement est manqué. Relances programmables (J+1, J+3, J+7). Vue consolidée par statut.",
        features: ["Versements reçus", "Alertes courriel", "Relances auto", "Vue par statut"],
      },
      {
        icon: BarChart3,
        number: "05",
        title: "Tableau de bord",
        description: "Vue centralisée en temps réel : nombre de contrats actifs, statut de chaque dossier, liste des retards et défauts. D'un coup d'oeil : qui a payé, qui ne l'a pas fait.",
        features: ["KPIs en temps réel", "Contrats actifs", "Retards et défauts", "Vue consolidée"],
      },
      {
        icon: Repeat,
        number: "06",
        title: "Prélèvement automatique (PAD)",
        description: "Prélèvement direct sur le compte bancaire des clients à chaque échéance. La plateforme déclenche le versement automatiquement et alerte immédiatement si la transaction échoue — l'automatisation de l'encaissement au coeur du suivi des paiements.",
        features: ["Prélèvement à l'échéance", "Gestion des mandats", "Alerte si refus", "Rapprochement auto"],
      },
      {
        icon: UserCircle,
        number: "07",
        title: "Portail client self-service *",
        description: "Interface pour les clients finaux : consulter le solde restant, l'historique des paiements, les documents de contrat et l'échéancier. Réduit les appels entrants et améliore l'expérience client.",
        features: ["Solde en temps réel", "Historique des paiements", "Documents & échéancier", "Moins d'appels entrants"],
        note: "Certains aspects restent à préciser avec Groupe Laplante ; le prix ne devrait toutefois pas varier de façon significative.",
      },
    ],
  },
  {
    id: "credit",
    label: "Phase 2",
    title: "Moteur de crédit & risques",
    description: "Sécuriser la décision de crédit, la souscription et le suivi du risque sur l'ensemble du portefeuille.",
    modules: [
      {
        icon: ClipboardCheck,
        number: "08",
        title: "Checklist de livraison & archivage des preuves",
        description: "Checklist obligatoire qui bloque la livraison d'un véhicule tant que les 5 points ne sont pas validés : GPS installé, assurance valide, Beacon Score (≈500+), preuve et confirmation d'emploi enregistrée. Toutes les preuves sont archivées pour la conformité.",
        features: ["Blocage de livraison", "5 points obligatoires", "Appel enregistré", "Archivage des preuves"],
      },
      {
        icon: FileSignature,
        number: "09",
        title: "Génération de documents",
        description: "Génération automatique des documents requis à partir des données du dossier : contrat de prêt, conditions, taux, échéancier et divulgations — prêts à signer. Modèles conformes, calculs verrouillés et aux couleurs de Groupe Laplante.",
        features: ["Contrat de prêt", "Conditions & taux", "Échéancier généré", "Modèles conformes"],
      },
      {
        icon: Landmark,
        number: "10",
        title: "Connexion bancaire (Plaid)",
        description: "Accès sécurisé aux transactions bancaires des clients via l'API Plaid. Valide les revenus et le comportement bancaire directement dans la souscription, sans relevés manuels.",
        features: ["API Plaid sécurisée", "Validation des revenus", "Comportement bancaire", "Sans relevés manuels"],
      },
      {
        icon: Activity,
        number: "11",
        title: "Monitoring & tableau d'alertes temps réel",
        description: "Le coeur opérationnel : un tableau d'alertes unique qui surveille chaque dossier en continu — paiement manqué, assurance annulée, GPS inactif, document manquant. Détection des défauts et suivi GPS de l'état du véhicule.",
        features: ["Alertes temps réel", "Détection des défauts", "Suivi GPS", "Santé du portefeuille"],
      },
      {
        icon: MessageSquare,
        number: "12",
        title: "SMS & relances automatisées",
        description: "Envoi de SMS automatisés directement branché sur le tableau d'alertes : rappels avant échéance, relances en cas de retard (J+1, J+3, J+7...) et confirmations de réception. Coût de service mensuel fixe en sus (~30-60$/mois).",
        features: ["Rappels avant échéance", "Relances J+1, J+3, J+7", "Confirmations de réception", "Branché aux alertes"],
      },
    ],
  },
  {
    id: "livraison",
    label: "Phase 3",
    title: "Intégrations & mise en service",
    description: "Connecter les partenaires, automatiser la communication client et livrer la plateforme en production.",
    modules: [
      {
        icon: Bell,
        number: "13",
        title: "Intégration assurances partenaires",
        description: "Procuration signée au contrat : l'assureur notifie automatiquement la plateforme dès qu'un client annule sa couverture, déclenchant une alerte immédiate. Suivi continu de la validité des assurances du portefeuille.",
        features: ["Assureurs partenaires", "Procuration au contrat", "Alerte d'annulation", "Suivi continu"],
      },
      {
        icon: Building2,
        number: "14",
        title: "Interface concessionnaires",
        description: "Une vue organisationnelle : une organisation gère plusieurs concessionnaires depuis un seul compte, avec un tableau de bord global sur l'ensemble de ses concessions. Chaque conseiller garde son accès dédié pour soumettre des dossiers avec pièces jointes et suivre leur statut en temps réel.",
        features: ["Vue multi-concessions", "Dashboard global", "Soumission dossiers", "Suivi en temps réel"],
      },
      {
        icon: BookOpen,
        number: "15",
        title: "Rapports & QuickBooks *",
        description: "Rapport mensuel du portefeuille (contrats actifs, retards, défauts, revenus perçus). Intégration QuickBooks Online via API Intuit — synchronisation automatique sans double saisie.",
        features: ["Rapport mensuel", "Intégration QuickBooks", "Sync automatique", "Export comptable"],
        note: "Certains aspects restent à préciser avec Groupe Laplante ; le prix ne devrait toutefois pas varier de façon significative.",
      },
      {
        icon: CheckCircle2,
        number: "16",
        title: "Tests & mise en production",
        description: "Tests fonctionnels complets, sessions de validation avec l'équipe Groupe Laplante, corrections, mise en production sur infrastructure canadienne, accompagnement au démarrage.",
        features: ["Tests complets", "Validation client", "Mise en production", "Accompagnement 2 sem."],
      },
    ],
  },
]

export function ObjectivesSlide() {
  return (
    <SlideWrapper id="objectives" className="relative !min-h-0">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 50% at 100% 0%, rgba(0, 102, 255, 0.06), transparent 50%),
              radial-gradient(circle at 0% 100%, rgba(0, 102, 255, 0.03), transparent 30%)
            `
          }}
        />
      </div>

      {/* Parallax elements */}
      <Parallax offset={60} className="absolute top-20 right-10 w-48 h-48 rounded-full bg-[#0066FF]/5 blur-3xl" />
      <Parallax offset={-40} className="absolute bottom-32 left-20 w-32 h-32 rounded-full bg-[#3388FF]/5 blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-16">
          <FadeInUp>
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ rotate: 10 }}
                className="w-8 h-8 rounded-lg glass flex items-center justify-center"
              >
                <Boxes className="w-4 h-4 text-[#0066FF]" />
              </motion.div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#0066FF] font-sans font-medium">
                03 / MVP de base
              </span>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-[1.1]">
              Un <span className="gradient-text-accent">LOS sur mesure</span> pour
              <br />
              <span className="text-white/60">Groupe Laplante</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-base text-white/40 font-sans max-w-2xl leading-relaxed">
              La plateforme est, dans son ensemble, un Loan Origination System (LOS) taillé pour vos opérations : tout le cycle de vie du prêt, sans les modules superflus des LOS génériques. Livrée en <span className="text-white/70">3 phases</span> et <span className="text-white/70">16 fonctionnalités</span>.
            </p>
          </FadeInUp>
        </div>

        {/* Modules grouped into 3 phases */}
        <div className="flex flex-col gap-16">
          {PHASES.map((phase) => (
            <div key={phase.id} className="flex flex-col gap-6">
              {/* Phase header */}
              <FadeInUp>
                <div className="flex flex-col gap-3 border-l-2 border-[#0066FF]/40 pl-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#0066FF] font-medium">
                      {phase.label}
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                    <span className="font-mono text-xs text-white/30">
                      {phase.modules.length} modules
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-white">{phase.title}</h3>
                  <p className="text-sm text-white/40 font-sans max-w-2xl leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </FadeInUp>

              {/* Phase modules grid */}
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.modules.map((module) => (
                  <StaggerItem key={module.number}>
                    <GlowCard className="group h-full">
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="glass-card rounded-2xl p-6 h-full overflow-hidden relative"
                      >
                        {/* Hover gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex gap-4">
                          {/* Left: Number + Icon */}
                          <div className="flex flex-col items-center gap-3 shrink-0">
                            <span className="font-mono text-sm text-[#0066FF]/50">{module.number}</span>
                            <motion.div 
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#0066FF]/30 group-hover:bg-[#0066FF]/10 transition-colors"
                            >
                              <module.icon className="w-5 h-5 text-white/50 group-hover:text-[#0066FF] transition-colors" />
                            </motion.div>
                          </div>

                          {/* Right: Content */}
                          <div className="flex flex-col gap-3 flex-1 min-w-0">
                            <h3 className="font-serif text-lg text-white">{module.title}</h3>
                            <p className="text-sm text-white/35 font-sans leading-relaxed">
                              {module.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {module.features.map((feature, idx) => (
                                <motion.span
                                  key={feature}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.05 }}
                                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 102, 255, 0.1)" }}
                                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] text-white/40 font-sans"
                                >
                                  {feature}
                                </motion.span>
                              ))}
                            </div>
                            {(module as { note?: string }).note && (
                              <p className="mt-2 text-[11px] leading-relaxed text-amber-400/70 font-sans italic">
                                {"* "}{(module as { note?: string }).note}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </GlowCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
