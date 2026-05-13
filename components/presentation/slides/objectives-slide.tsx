"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Users, FileText, CreditCard, BarChart3, Building2, BookOpen, CheckCircle2, ShieldCheck, Boxes } from "lucide-react"

const MODULES = [
  {
    icon: ShieldCheck,
    number: "00",
    title: "Infrastructure & securite",
    description: "Serveurs heberges au Canada, base de donnees PostgreSQL 16, gestion des roles et acces via Keycloak, environnements dev et prod, pipeline de deploiement automatise.",
    features: ["Hebergement Canada (Loi 25)", "Keycloak 24+ (IAM)", "PostgreSQL avec pgaudit", "CI/CD automatise"],
  },
  {
    icon: Users,
    number: "01",
    title: "Dossiers clients",
    description: "Fiche client complete avec coordonnees, historique des contrats, pieces jointes (contrat, identite, inspection). Statut du dossier et gestion documentaire sur toute la duree du contrat.",
    features: ["Fiche client complete", "Historique des contrats", "Gestion documentaire", "Statuts de dossier"],
  },
  {
    icon: FileText,
    number: "02",
    title: "Contrats de location",
    description: "Formulaire de creation de contrat (vehicule, valeur, versements, duree, acompte). Echeancier genere automatiquement. Solde mis a jour a chaque versement. Option de rachat ou revente.",
    features: ["Creation de contrat", "Echeancier auto", "Calcul des interets", "Options fin de contrat"],
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Suivi des paiements",
    description: "Enregistrement des versements recus. Alertes courriel automatiques si un paiement est manque. Relances programmables (J+1, J+3, J+7). Vue consolidee par statut.",
    features: ["Versements recus", "Alertes courriel", "Relances auto", "Vue par statut"],
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Tableau de bord",
    description: "Vue centralisee en temps reel : nombre de contrats actifs, statut de chaque dossier, liste des retards et defauts. D'un coup d'oeil : qui a paye, qui ne l'a pas fait.",
    features: ["KPIs en temps reel", "Contrats actifs", "Retards et defauts", "Vue consolidee"],
  },
  {
    icon: Building2,
    number: "05",
    title: "Interface concessionnaires",
    description: "Acces dedie pour les conseillers des 5 concessions : soumission de nouveaux dossiers avec pieces jointes, suivi en temps reel du statut des dossiers soumis.",
    features: ["Acces par concession", "Soumission dossiers", "Upload documents", "Suivi en temps reel"],
  },
  {
    icon: BookOpen,
    number: "06",
    title: "Rapports & QuickBooks",
    description: "Rapport mensuel du portefeuille (contrats actifs, retards, defauts, revenus percus). Integration QuickBooks Online via API Intuit — synchronisation automatique sans double saisie.",
    features: ["Rapport mensuel", "Integration QuickBooks", "Sync automatique", "Export comptable"],
  },
  {
    icon: CheckCircle2,
    number: "07",
    title: "Tests & mise en production",
    description: "Tests fonctionnels complets, sessions de validation avec l'equipe Groupe Laplante, corrections, mise en production sur infrastructure canadienne, accompagnement au demarrage.",
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
              radial-gradient(ellipse 100% 50% at 100% 0%, rgba(255, 99, 99, 0.06), transparent 50%),
              radial-gradient(circle at 0% 100%, rgba(255, 99, 99, 0.03), transparent 30%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
              <Boxes className="w-4 h-4 text-[#FF6363]" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#FF6363] font-sans font-medium">
              03 / MVP de base
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-[1.1]">
            Les <span className="gradient-text-accent">8 modules</span> du coeur
            <br />
            <span className="text-white/60">de la plateforme</span>
          </h2>
          <p className="text-base text-white/40 font-sans max-w-2xl leading-relaxed">
            L{"'"}objectif : savoir en tout temps qui a un contrat actif, ou en est chaque dossier, qui a paye et qui ne l{"'"}a pas fait — en un seul endroit.
          </p>
        </div>

        {/* Modules grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MODULES.map((module) => (
            <div
              key={module.number}
              className="group glass-card rounded-2xl p-6 card-hover overflow-hidden relative"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6363]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex gap-4">
                {/* Left: Number + Icon */}
                <div className="flex flex-col items-center gap-3 shrink-0">
                  <span className="font-mono text-sm text-[#FF6363]/50">{module.number}</span>
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF6363]/30 group-hover:bg-[#FF6363]/10 transition-colors">
                    <module.icon className="w-5 h-5 text-white/50 group-hover:text-[#FF6363] transition-colors" />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex flex-col gap-3 flex-1 min-w-0">
                  <h3 className="font-serif text-lg text-white">{module.title}</h3>
                  <p className="text-sm text-white/35 font-sans leading-relaxed">
                    {module.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {module.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] text-white/40 font-sans"
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
