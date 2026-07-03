"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Users, FileText, CreditCard, BarChart3, Building2, BookOpen, CheckCircle2, ShieldCheck, Boxes, ClipboardCheck, Activity, Bell, Workflow, Landmark, MessageSquare } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem, GlowCard, Parallax } from "@/components/ui/scroll-animations"
import { motion } from "framer-motion"

const MODULES = [
  {
    icon: ShieldCheck,
    number: "00",
    title: "Infrastructure & sécurité",
    description: "Serveurs hébergés au Canada, base de données PostgreSQL 16, gestion des rôles et accès via Supabase / Keycloak, environnements dev et prod, pipeline de déploiement automatisé.",
    features: ["Hébergement Canada (Loi 25)", "Supabase / Keycloak (IAM)", "PostgreSQL avec pgaudit", "CI/CD automatisé"],
  },
  {
    icon: Users,
    number: "01",
    title: "Dossiers clients",
    description: "Fiche client complète avec coordonnées, historique des contrats, pièces jointes (contrat, identité, inspection). Statut du dossier et gestion documentaire sur toute la durée du contrat.",
    features: ["Fiche client complète", "Historique des contrats", "Gestion documentaire", "Statuts de dossier"],
  },
  {
    icon: FileText,
    number: "02",
    title: "Contrats de location",
    description: "Formulaire de création de contrat (véhicule, valeur, versements, durée, acompte). Échéancier généré automatiquement. Solde mis à jour à chaque versement. Option de rachat ou revente.",
    features: ["Création de contrat", "Échéancier auto", "Calcul des intérêts", "Options fin de contrat"],
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Suivi des paiements",
    description: "Enregistrement des versements reçus. Alertes courriel automatiques si un paiement est manqué. Relances programmables (J+1, J+3, J+7). Vue consolidée par statut.",
    features: ["Versements reçus", "Alertes courriel", "Relances auto", "Vue par statut"],
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Tableau de bord",
    description: "Vue centralisée en temps réel : nombre de contrats actifs, statut de chaque dossier, liste des retards et défauts. D'un coup d'oeil : qui a payé, qui ne l'a pas fait.",
    features: ["KPIs en temps réel", "Contrats actifs", "Retards et défauts", "Vue consolidée"],
  },
  {
    icon: Building2,
    number: "05",
    title: "Interface concessionnaires",
    description: "Accès dédié pour les conseillers des 5 concessions : soumission de nouveaux dossiers avec pièces jointes, suivi en temps réel du statut des dossiers soumis.",
    features: ["Accès par concession", "Soumission dossiers", "Upload documents", "Suivi en temps réel"],
  },
  {
    icon: BookOpen,
    number: "06",
    title: "Rapports & QuickBooks",
    description: "Rapport mensuel du portefeuille (contrats actifs, retards, défauts, revenus perçus). Intégration QuickBooks Online via API Intuit — synchronisation automatique sans double saisie.",
    features: ["Rapport mensuel", "Intégration QuickBooks", "Sync automatique", "Export comptable"],
  },
  {
    icon: ClipboardCheck,
    number: "07",
    title: "Checklist de livraison & archivage des preuves",
    description: "Checklist obligatoire qui bloque la livraison d'un véhicule tant que les 5 points ne sont pas validés : GPS installé, assurance valide, Beacon Score (≈500+), preuve et confirmation d'emploi enregistrée. Toutes les preuves sont archivées pour la conformité.",
    features: ["Blocage de livraison", "5 points obligatoires", "Appel enregistré", "Archivage des preuves"],
  },
  {
    icon: Activity,
    number: "08",
    title: "Monitoring & tableau d'alertes temps réel",
    description: "Le coeur opérationnel : un tableau d'alertes unique qui surveille chaque dossier en continu — paiement manqué, assurance annulée, GPS inactif, document manquant. Détection des défauts et suivi GPS de l'état du véhicule.",
    features: ["Alertes temps réel", "Détection des défauts", "Suivi GPS", "Santé du portefeuille"],
  },
  {
    icon: Bell,
    number: "09",
    title: "Intégration assurances partenaires",
    description: "Procuration signée au contrat : l'assureur notifie automatiquement la plateforme dès qu'un client annule sa couverture, déclenchant une alerte immédiate. Suivi continu de la validité des assurances du portefeuille.",
    features: ["Assureurs partenaires", "Procuration au contrat", "Alerte d'annulation", "Suivi continu"],
  },
  {
    icon: Workflow,
    number: "10",
    title: "Loan Origination System (LOS)",
    description: "Le moteur d'origination couvrant tout le cycle de vie d'un prêt : création du dossier, dépôt des pièces, analyse du crédit et décision (approuvé / refusé / informations requises), structuration et financement du deal.",
    features: ["Cycle de vie complet", "Analyse de crédit", "Décision automatisée", "Financement"],
  },
  {
    icon: Landmark,
    number: "11",
    title: "Connexion bancaire (Plaid)",
    description: "Accès sécurisé aux transactions bancaires des clients via l'API Plaid. Valide les revenus et le comportement bancaire directement dans la souscription, sans relevés manuels.",
    features: ["API Plaid sécurisée", "Validation des revenus", "Comportement bancaire", "Sans relevés manuels"],
  },
  {
    icon: MessageSquare,
    number: "12",
    title: "SMS & relances automatisées",
    description: "Envoi de SMS automatisés : rappels avant échéance, relances en cas de retard (J+1, J+3, J+7...) et confirmations de réception. Coût de service mensuel fixe en sus (~30-60$/mois).",
    features: ["Rappels avant échéance", "Relances J+1, J+3, J+7", "Confirmations de réception", "Coût mensuel en sus"],
  },
  {
    icon: CheckCircle2,
    number: "13",
    title: "Tests & mise en production",
    description: "Tests fonctionnels complets, sessions de validation avec l'équipe Groupe Laplante, corrections, mise en production sur infrastructure canadienne, accompagnement au démarrage.",
    features: ["Tests complets", "Validation client", "Mise en production", "Accompagnement 2 sem."],
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
              Les <span className="gradient-text-accent">14 modules</span> du coeur
              <br />
              <span className="text-white/60">de la plateforme</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-base text-white/40 font-sans max-w-2xl leading-relaxed">
              L{"'"}objectif : savoir en tout temps qui a un contrat actif, où en est chaque dossier, qui a payé et qui ne l{"'"}a pas fait — en un seul endroit.
            </p>
          </FadeInUp>
        </div>

        {/* Modules grid - Bento style with stagger */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MODULES.map((module) => (
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
                    </div>
                  </div>
                </motion.div>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SlideWrapper>
  )
}
