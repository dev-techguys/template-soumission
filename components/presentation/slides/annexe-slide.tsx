"use client"

import { SlideWrapper } from "../slide-wrapper"
import { AnimatedDiv } from "../animated-wrapper"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Check, BookOpen, Code, Database, Shield } from "lucide-react"

const GLOSSARY = [
  {
    id: "transport",
    icon: BookOpen,
    title: "Jargon transport compris par l'agent",
    description: "L'agent IA comprend et utilise naturellement ce vocabulaire B2B transport.",
    items: [
      { term: "FTL", def: "Full Truckload — camion complet" },
      { term: "LTL", def: "Less-than-Truckload — envoi partiel / groupage" },
      { term: "Reefer", def: "Remorque réfrigérée / température contrôlée" },
      { term: "Dry van", def: "Remorque standard fermée 53 pieds" },
      { term: "Flatbed", def: "Plateau ouvert (machinerie, acier, hors-gabarit)" },
      { term: "Heavy Haul", def: "Transport hors-gabarit avec permis spéciaux" },
      { term: "BOL", def: "Bill of Lading — document de transport" },
      { term: "Spot quote", def: "Devis ponctuel au prix du marché" },
      { term: "Lane", def: "Couloir de transport entre deux points fixes" },
      { term: "Cross-docking", def: "Transit sans stockage" },
      { term: "Drop-and-hook", def: "Échange de remorques sans attente" },
      { term: "FSC", def: "Fuel Surcharge — surcharge carburant" },
      { term: "Detention", def: "Frais d'attente du camion aux quais" },
      { term: "OTD", def: "On-Time Delivery — taux de livraison dans les délais" },
      { term: "Owner-operator", def: "Chauffeur propriétaire de son camion" },
      { term: "ELD", def: "Electronic Logging Device" },
      { term: "ACI / ACE", def: "Pré-déclaration douanière Canada / USA" },
    ],
  },
  {
    id: "tech",
    icon: Code,
    title: "Stack technique",
    description: "Technologies utilisées pour l'implémentation de l'agent IA.",
    items: [
      { term: "Widget UI", def: "React island dans Astro (client:load, lazy)" },
      { term: "LLM", def: "Groq + Llama 3.3 70B (~500 tokens/sec)" },
      { term: "Edge Function", def: "Vercel Edge avec streaming natif" },
      { term: "Analytics", def: "Supabase (free tier)" },
      { term: "Hosting", def: "Vercel (plan existant)" },
      { term: "Langue", def: "TypeScript strict" },
      { term: "Styling", def: "Tailwind CSS v4 + design tokens Safex" },
      { term: "Notifications (Plan Optimisé)", def: "Resend API ($0 < 3 000 emails/mois)" },
      { term: "Animations (Plan Optimisé)", def: "Framer Motion" },
    ],
  },
  {
    id: "analytics",
    icon: Database,
    title: "Données collectées (sans PII)",
    description: "Conformité Loi 25 — aucune conversation stockée, uniquement des chemins anonymisés.",
    items: [
      { term: "session_id", def: "UUID généré côté client, sans lien à l'IP" },
      { term: "q1_selection", def: "\"general_freight\" | \"reefer\" | \"driver\" | ..." },
      { term: "q2_selection", def: "\"canada\" | \"cross_border\" | \"unsure\"" },
      { term: "q3_selection", def: "\"urgent\" | \"this_week\" | \"flexible\"" },
      { term: "destination_url", def: "Page de destination (ex. \"/services/ftl-transport\")" },
      { term: "locale", def: "\"en\" | \"fr\"" },
      { term: "page_origin", def: "Page où l'agent a été ouvert" },
      { term: "reached_quote", def: "true si le visiteur a cliqué vers le formulaire de devis" },
    ],
  },
  {
    id: "guardrails",
    icon: Shield,
    title: "Garde-fous anti-hallucination",
    description: "Instructions strictes intégrées au system prompt pour protéger l'image Safex.",
    items: [
      { term: "Tarifs", def: "Interdit d'inventer des prix ou devis précis" },
      { term: "Délais", def: "Interdit de garantir des délais de transit spécifiques" },
      { term: "Clients", def: "Interdit de mentionner des clients ou conducteurs nommés" },
      { term: "Promesses", def: "Interdit de faire des promesses contractuelles" },
      { term: "Incidents", def: "Interdit de commenter des accidents ou litiges passés" },
      { term: "Flotte", def: "Interdit de donner des chiffres précis de tracteurs/remorques" },
      { term: "RH / Driver Inc.", def: "Interdit de commenter les pratiques RH ou le statut des conducteurs" },
    ],
  },
]

export function AnnexeSlide() {
  return (
    <SlideWrapper id="annexe" className="bg-[#f8fafc] !min-h-0">
      <div className="max-w-5xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <AnimatedDiv delay={0}>
            <span className="text-xs tracking-[0.4em] uppercase text-[#ff7000] font-sans font-medium">
              Annexe
            </span>
          </AnimatedDiv>
          <AnimatedDiv delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] max-w-4xl leading-tight text-balance">
              Références techniques
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <div className="w-16 h-px bg-[#ff7000]" />
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>
            <p className="text-sm md:text-base text-[#64748b] font-sans leading-relaxed max-w-3xl">
              Documentation technique complémentaire : glossaire transport, stack technologique, données collectées et garde-fous de sécurité.
            </p>
          </AnimatedDiv>
        </div>

        {/* Accordion sections */}
        <AnimatedDiv delay={0.4}>
          <Accordion type="multiple" className="flex flex-col gap-4">
            {GLOSSARY.map((section, index) => {
              const Icon = section.icon
              return (
                <AccordionItem
                  key={section.id}
                  value={section.id}
                  className="border-0 rounded-xl border border-[#e5e7eb] bg-white overflow-hidden px-6 md:px-8 shadow-sm"
                >
                  <AccordionTrigger className="py-6 hover:no-underline gap-4 [&>svg]:text-[#ff7000] [&>svg]:w-5 [&>svg]:h-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#ff7000]/10 border border-[#ff7000]/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#ff7000]" />
                      </div>
                      <div className="flex flex-col gap-0.5 text-left">
                        <span className="font-serif text-lg md:text-xl text-[#0f172a]">
                          <span className="text-[#ff7000] mr-2 font-sans text-sm">{String(index + 1).padStart(2, "0")}</span>
                          {section.title}
                        </span>
                        <span className="text-sm text-[#64748b] font-sans leading-relaxed hidden md:block">
                          {section.description}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    {/* Description on mobile */}
                    <p className="text-sm text-[#64748b] font-sans leading-relaxed mb-5 md:hidden">
                      {section.description}
                    </p>

                    <div className="w-full h-px bg-[#e5e7eb] mb-5" />

                    {/* Terms grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pl-0 md:pl-14">
                      {section.items.map((item) => (
                        <div key={item.term} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#ff7000] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-sm font-medium text-[#0f172a] font-sans">{item.term}</span>
                            <span className="text-sm text-[#64748b] font-sans"> — {item.def}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </AnimatedDiv>
      </div>
    </SlideWrapper>
  )
}
