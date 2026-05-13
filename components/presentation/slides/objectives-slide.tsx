import { SlideWrapper } from "../slide-wrapper"
import { Users, FileText, CreditCard, BarChart3, Building2, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react"

const MODULES = [
  {
    icon: ShieldCheck,
    number: "00",
    title: "Infrastructure & sécurité",
    description: "Serveurs hébergés au Canada, base de données PostgreSQL 16, gestion des rôles et accès via Keycloak, environnements dev et prod, pipeline de déploiement automatisé.",
    features: ["Hébergement Canada (Loi 25)", "Keycloak 24+ (IAM)", "PostgreSQL avec pgaudit", "CI/CD automatisé"],
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
    icon: CheckCircle2,
    number: "07",
    title: "Tests & mise en production",
    description: "Tests fonctionnels complets, sessions de validation avec l'équipe Groupe Laplante, corrections, mise en production sur infrastructure canadienne, accompagnement au démarrage.",
    features: ["Tests complets", "Validation client", "Mise en production", "Accompagnement 2 sem."],
  },
]

export function ObjectivesSlide() {
  return (
    <SlideWrapper id="objectives" className="bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#0035FF] font-sans font-medium">
            03 / MVP de base
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white max-w-3xl leading-tight text-balance">
            Les 8 modules du coeur de la plateforme
          </h2>
          <div className="w-16 h-px bg-[#0035FF]" />
          <p className="text-base text-white/50 font-sans max-w-2xl leading-relaxed">
            L{"'"}objectif : savoir en tout temps qui a un contrat actif, où en est chaque dossier, qui a payé et qui ne l{"'"}a pas fait — en un seul endroit.
          </p>
        </div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MODULES.map((module) => (
            <div
              key={module.number}
              className="group relative p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#0035FF]/30 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#0035FF]/30 via-[#0035FF]/10 to-transparent" />

              <div className="flex gap-4">
                {/* Left: Number + Icon */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <span className="font-mono text-sm text-[#0035FF]/50">{module.number}</span>
                  <div className="w-10 h-10 rounded-xl bg-[#0035FF]/10 border border-[#0035FF]/20 flex items-center justify-center">
                    <module.icon className="w-4 h-4 text-[#0035FF]" />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="font-serif text-lg text-white">{module.title}</h3>
                  <p className="text-sm text-white/40 font-sans leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {module.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 rounded-md border border-white/10 text-[10px] text-white/50 font-sans bg-white/[0.02]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
