"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Check, Server, Shield, Database, Code, Layers, Lock, Globe, Cpu } from "lucide-react"

const TECH_STACK = [
  {
    id: "backend",
    icon: Code,
    title: "Backend — NestJS (Node.js)",
    description: "Framework TypeScript moderne avec architecture modulaire, injection de dépendances native et support GraphQL/REST. Performance et maintenabilité.",
    items: [
      "Architecture modulaire avec séparation claire des responsabilités",
      "TypeORM pour interactions base de données type-safe",
      "Guards et interceptors pour sécurité et validation",
      "Support natif WebSockets pour notifications temps réel",
      "API REST documentée avec Swagger/OpenAPI",
    ],
  },
  {
    id: "frontend",
    icon: Cpu,
    title: "Frontend — Next.js 15+",
    description: "Framework React de référence pour applications web performantes. Server Components, streaming, et optimisations automatiques.",
    items: [
      "App Router avec Server Components pour performance optimale",
      "Streaming SSR et Suspense pour UX fluide",
      "Tailwind CSS pour design system cohérent",
      "React Query pour gestion d'état serveur",
      "TypeScript strict pour robustesse du code",
    ],
  },
  {
    id: "iam",
    icon: Lock,
    title: "Authentification — Supabase / Keycloak",
    description: "Supabase Auth par défaut (intégré au socle data, hébergé au Canada) ; Keycloak en option pour un portail client avancé. Standards IAM éprouvés par les entreprises réglementées.",
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
      "Pipeline CI/CD automatisé avec GitHub Actions",
      "Backups quotidiens avec rétention 30 jours",
    ],
  },
  {
    id: "integrations",
    icon: Layers,
    title: "Intégrations — PAD & QuickBooks",
    description: "Prélèvement Automatique Débit via Rotessa (API moderne, conforme Règle H1 de Paiements Canada) et synchronisation comptable QuickBooks.",
    items: [
      "PAD via Rotessa : 0,25$-0,50$ par transaction, règlement J+2",
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
  { profil: "Agence boutique MTL/QC", taux: "130-150$/h", estimation: "99 000$-145 000$", ecart: "+59% à +133%" },
  { profil: "Grande agence (50+ devs)", taux: "160-200$/h", estimation: "170 000$-217 000$", ecart: "+174% à +249%" },
  { profil: "SaaS (DealerTrack, CDK...)", taux: "Abonnement", estimation: "25 000$-35 000$/an", ecart: "Pas de propriété" },
  { profil: "TechGuys Inc.", taux: "150$/h", estimation: "62 100$", ecart: "Vous économisez ~40%" },
]

export function AnnexeSlide() {
  return (
    <SlideWrapper id="annexe" className="relative !min-h-0">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 100% 0%, rgba(0, 102, 255, 0.04), transparent 40%),
              radial-gradient(circle at 0% 100%, rgba(0, 102, 255, 0.03), transparent 30%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-24 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-5 mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#0066FF] font-sans font-medium">
            Annexe technique
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-[1.1]">
            <span className="gradient-text">Stack technologique</span>
            <br />
            <span className="text-white/60">& conformité</span>
          </h2>
          <p className="text-base text-white/40 font-sans leading-relaxed max-w-3xl">
            Une architecture modulaire moderne, pensée pour évoluer avec vos besoins tout en respectant les exigences réglementaires dès le premier jour.
          </p>
        </div>

        {/* Tech stack accordion */}
        <Accordion type="multiple" className="flex flex-col gap-3">
          {TECH_STACK.map((tech, index) => {
            const Icon = tech.icon
            return (
              <AccordionItem
                key={tech.id}
                value={tech.id}
                className="border-0 rounded-2xl glass-card overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline gap-4 [&>svg]:text-[#0066FF] [&>svg]:w-5 [&>svg]:h-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                      <span className="font-serif text-lg text-white">
                        <span className="text-[#0066FF] mr-2 font-mono text-sm">{String(index + 1).padStart(2, "0")}</span>
                        {tech.title}
                      </span>
                      <span className="text-sm text-white/35 font-sans leading-relaxed hidden md:block">
                        {tech.description}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-sm text-white/35 font-sans leading-relaxed mb-5 md:hidden">
                    {tech.description}
                  </p>

                  <div className="w-full h-px bg-white/5 mb-5" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pl-0 md:pl-[60px]">
                    {tech.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-[#0066FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#0066FF]" />
                        </div>
                        <span className="text-sm text-white/50 font-sans leading-relaxed">
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
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#0066FF]" />
            </div>
            <h3 className="font-serif text-2xl text-white">Positionnement marché</h3>
          </div>
          <div className="glass-card rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left py-4 px-5 text-white/35 font-sans font-medium">Profil</th>
                  <th className="text-right py-4 px-5 text-white/35 font-sans font-medium">Taux</th>
                  <th className="text-right py-4 px-5 text-white/35 font-sans font-medium hidden sm:table-cell">Estimation MVP</th>
                  <th className="text-right py-4 px-5 text-white/35 font-sans font-medium">Écart</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.profil} className={`border-b border-white/5 last:border-0 ${i === COMPARISON.length - 1 ? "bg-[#0066FF]/5" : ""}`}>
                    <td className={`py-4 px-5 font-sans ${i === COMPARISON.length - 1 ? "text-white font-medium" : "text-white/50"}`}>
                      {row.profil}
                    </td>
                    <td className={`py-4 px-5 text-right font-mono ${i === COMPARISON.length - 1 ? "text-[#0066FF]" : "text-white/40"}`}>
                      {row.taux}
                    </td>
                    <td className={`py-4 px-5 text-right font-mono hidden sm:table-cell ${i === COMPARISON.length - 1 ? "text-[#0066FF]" : "text-white/40"}`}>
                      {row.estimation}
                    </td>
                    <td className={`py-4 px-5 text-right font-sans ${i === COMPARISON.length - 1 ? "text-emerald-400 font-medium" : "text-white/30"}`}>
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
