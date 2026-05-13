"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Check, Server, Shield, Database, Code, Layers, Lock, Globe } from "lucide-react"

const TECH_STACK = [
  {
    id: "backend",
    icon: Code,
    title: "Backend — Java Spring Boot 3.x",
    description: "Framework standard du secteur bancaire canadien (RBC, TD, BNC, Desjardins) avec support natif pour la sécurité et les transactions ACID.",
    items: [
      "Architecture hexagonale (ports & adapters) pour isolation du domaine métier",
      "Spring Security OAuth2 Resource Server pour intégration Keycloak",
      "Hibernate Envers pour journalisation d'audit FINTRAC-compatible",
      "Flyway pour migrations de base de données versionnées",
      "API REST documentée avec OpenAPI/Swagger",
    ],
  },
  {
    id: "iam",
    icon: Lock,
    title: "Gestion des identités — Keycloak 24+",
    description: "Standard de facto en IAM open-source pour les entreprises réglementées. Utilisé par Banque Nationale, iA Groupe Financier et Desjardins.",
    items: [
      "RBAC granulaire avec héritage de rôles (admin, analyste, conseiller)",
      "MFA obligatoire par TOTP/WebAuthn/SMS",
      "Support SSO/SAML 2.0 pour portails partenaires",
      "Journalisation complète des événements d'accès",
      "Déployable on-premise sans frais de licence",
    ],
  },
  {
    id: "database",
    icon: Database,
    title: "Base de données — PostgreSQL 16",
    description: "Robustesse pour les transactions financières (ACID complet), fonctionnalités d'audit avancées et haute disponibilité.",
    items: [
      "Transactions ACID avec isolation SERIALIZABLE pour calculs financiers",
      "Extension pgaudit pour journalisation FINTRAC et Loi 25",
      "Row Level Security (RLS) pour isolation par concessionnaire",
      "PITR (Point-in-Time Recovery) avec objectif RPO < 1 heure",
      "Chiffrement at-rest conforme Loi 25",
    ],
  },
  {
    id: "hosting",
    icon: Server,
    title: "Infrastructure — Hébergement Canada",
    description: "Stratégie progressive : démarrage sur Railway (région Canada East) ou VPS Hetzner Montréal, migration possible vers infrastructure dédiée.",
    items: [
      "Données des clients québécois au Canada dès le premier jour",
      "Conformité Loi 25 (souveraineté des données)",
      "Environnements dev et prod séparés",
      "Pipeline CI/CD automatisé",
      "Backups quotidiens avec rétention 30 jours",
    ],
  },
  {
    id: "integrations",
    icon: Layers,
    title: "Intégrations — PAD & QuickBooks",
    description: "Prélèvement Automatique Débit via Rotessa (API moderne, conforme Règle H1 de Paiements Canada) et synchronisation comptable QuickBooks.",
    items: [
      "PAD via Rotessa : 0,25$–0,50$ par transaction, règlement J+2",
      "Conformité Règle H1 : autorisation signée, prénotification, droits de révocation",
      "Gestion des retours NSF avec codes appropriés",
      "QuickBooks Online : OAuth 2.0 + REST API officielle Intuit",
      "Synchronisation automatique sans double saisie comptable",
    ],
  },
  {
    id: "compliance",
    icon: Shield,
    title: "Conformité — Loi 25 & FINTRAC",
    description: "Architecture pensée pour les exigences réglementaires dès la conception.",
    items: [
      "Loi 25 (Québec) : résidence des données, consentements, droit d'accès",
      "FINTRAC : journaux d'audit, KYC, déclarations si applicable",
      "Loi sur la protection du consommateur : divulgation des taux, droit de résolution",
      "Conservation des autorisations PAD pendant 3 ans",
      "Piste d'audit complète sur toutes les opérations sensibles",
    ],
  },
]

const COMPARISON = [
  { profil: "Agence boutique MTL/QC", taux: "130–150$/h", estimation: "48 000$–78 000$", ecart: "+33% à +67%" },
  { profil: "Grande agence (50+ devs)", taux: "160–200$/h", estimation: "83 000$–105 000$", ecart: "+60% à +124%" },
  { profil: "SaaS (DealerTrack, CDK...)", taux: "Abonnement", estimation: "25 000$–35 000$/an", ecart: "Pas de propriété" },
  { profil: "TechGuys Inc.", taux: "150$/h", estimation: "23 250$–36 750$", ecart: "Vous économisez ~35%" },
]

export function AnnexeSlide() {
  return (
    <SlideWrapper id="annexe" className="bg-[#0A0A0A] !min-h-0">
      <div className="max-w-5xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#0035FF] font-sans font-medium">
            Annexe technique
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white max-w-4xl leading-tight text-balance">
            Stack technologique & conformité
          </h2>
          <div className="w-16 h-px bg-[#0035FF]" />
          <p className="text-sm md:text-base text-white/50 font-sans leading-relaxed max-w-3xl">
            Une architecture modulaire éprouvée dans le secteur bancaire canadien, pensée pour évoluer avec vos besoins tout en respectant les exigences réglementaires dès le premier jour.
          </p>
        </div>

        {/* Tech stack accordion */}
        <Accordion type="multiple" className="flex flex-col gap-4">
          {TECH_STACK.map((tech, index) => {
            const Icon = tech.icon
            return (
              <AccordionItem
                key={tech.id}
                value={tech.id}
                className="border-0 rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden px-6 md:px-8"
              >
                <AccordionTrigger className="py-6 hover:no-underline gap-4 [&>svg]:text-[#0035FF] [&>svg]:w-5 [&>svg]:h-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0035FF]/10 border border-[#0035FF]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#0035FF]" />
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                      <span className="font-serif text-lg md:text-xl text-white">
                        <span className="text-[#0035FF] mr-2 font-sans text-sm">{String(index + 1).padStart(2, "0")}</span>
                        {tech.title}
                      </span>
                      <span className="text-sm text-white/40 font-sans leading-relaxed hidden md:block">
                        {tech.description}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-white/40 font-sans leading-relaxed mb-5 md:hidden">
                    {tech.description}
                  </p>

                  <div className="w-full h-px bg-white/10 mb-5" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pl-0 md:pl-14">
                    {tech.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#0035FF] shrink-0 mt-0.5" />
                        <span className="text-sm text-white/60 font-sans leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        {/* Market comparison */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-[#0035FF]" />
            <h3 className="font-serif text-xl text-white">Positionnement marché</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/40 font-sans font-medium">Profil</th>
                  <th className="text-right py-3 px-4 text-white/40 font-sans font-medium">Taux</th>
                  <th className="text-right py-3 px-4 text-white/40 font-sans font-medium">Estimation MVP</th>
                  <th className="text-right py-3 px-4 text-white/40 font-sans font-medium">Écart</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.profil} className={`border-b border-white/5 ${i === COMPARISON.length - 1 ? "bg-[#0035FF]/5" : ""}`}>
                    <td className={`py-3 px-4 font-sans ${i === COMPARISON.length - 1 ? "text-white font-medium" : "text-white/60"}`}>
                      {row.profil}
                    </td>
                    <td className={`py-3 px-4 text-right font-mono ${i === COMPARISON.length - 1 ? "text-[#3B82F6]" : "text-white/50"}`}>
                      {row.taux}
                    </td>
                    <td className={`py-3 px-4 text-right font-mono ${i === COMPARISON.length - 1 ? "text-[#3B82F6]" : "text-white/50"}`}>
                      {row.estimation}
                    </td>
                    <td className={`py-3 px-4 text-right font-sans ${i === COMPARISON.length - 1 ? "text-emerald-400 font-medium" : "text-white/40"}`}>
                      {row.ecart}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
