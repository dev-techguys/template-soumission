"use client"

import { SlideWrapper } from "../slide-wrapper"
import { Wrench, Expand, Clock, ArrowRight } from "lucide-react"
import { branding, slides } from "@/lib/proposal-data"

export function AnnexeSlide() {
  return (
    <SlideWrapper id="annexe" className="!min-h-0" style={{ backgroundColor: branding.backgroundLight }}>
      <div className="max-w-5xl mx-auto px-8 py-20 w-full">
        {/* Section header */}
        <div className="flex flex-col gap-6 mb-16">
          <span
            className="text-xs tracking-[0.4em] uppercase font-sans font-medium"
            style={{ color: branding.primaryColor }}
          >
            06 / Annexe
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl max-w-4xl leading-tight text-balance"
            style={{ color: branding.textDark }}
          >
            {slides.annexe.title}
          </h2>
          <div className="w-16 h-px" style={{ backgroundColor: branding.primaryColor }} />
          <p
            className="text-sm md:text-base font-sans leading-relaxed max-w-3xl"
            style={{ color: branding.textMuted }}
          >
            {slides.annexe.description}
          </p>
        </div>

        {/* Future services cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Ameliorations card */}
          <div className="p-6 rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: branding.primaryColor }}
              >
                <Wrench className="w-5 h-5" style={{ color: branding.textOnDark }} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-lg" style={{ color: branding.textDark }}>
                  Ameliorations du systeme
                </h3>
                <p className="text-sm font-sans" style={{ color: branding.textMuted }}>
                  Ajustements et optimisations continues du systeme d{"'"}automatisation.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 pl-14">
              {[
                "Ajout de nouveaux templates de reponse",
                "Integration de nouvelles succursales",
                "Amelioration de la precision de l'IA",
                "Ajout de nouvelles fonctionnalites",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: branding.primaryColor }}
                  />
                  <span className="text-sm font-sans" style={{ color: branding.textMuted }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Extension card */}
          <div className="p-6 rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: branding.primaryColor }}
              >
                <Expand className="w-5 h-5" style={{ color: branding.textOnDark }} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-lg" style={{ color: branding.textDark }}>
                  Extension a d{"'"}autres canaux
                </h3>
                <p className="text-sm font-sans" style={{ color: branding.textMuted }}>
                  Deploiement de l{"'"}automatisation sur d{"'"}autres points de contact client.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 pl-14">
              {[
                "Automatisation des formulaires du site web",
                "Integration avec le systeme telephonique",
                "Chatbot sur le site web",
                "Integration CRM",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: branding.primaryColor }}
                  />
                  <span className="text-sm font-sans" style={{ color: branding.textMuted }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hourly banks */}
        <div className="p-6 rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: branding.primaryColor }}
            >
              <Clock className="w-5 h-5" style={{ color: branding.textOnDark }} />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-serif text-lg" style={{ color: branding.textDark }}>
                Forfaits banque d{"'"}heures disponibles
              </h3>
              <p className="text-sm font-sans" style={{ color: branding.textMuted }}>
                Pour un accompagnement continu apres le projet initial.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {slides.annexe.hourlyBanks.map((bank, index) => (
              <div
                key={bank.name}
                className="p-4 rounded-xl border"
                style={{
                  borderColor: index === 1 ? `${branding.primaryColor}40` : "#e5e7eb",
                  backgroundColor: index === 1 ? `${branding.primaryColor}05` : branding.backgroundLight,
                }}
              >
                <div className="flex flex-col gap-2">
                  <span
                    className="text-xs tracking-[0.15em] uppercase font-sans"
                    style={{ color: branding.textMuted }}
                  >
                    {bank.name}
                  </span>
                  <span className="font-serif text-2xl" style={{ color: branding.primaryColor }}>
                    {bank.hours}
                  </span>
                  <span className="text-xs font-sans" style={{ color: branding.textMuted }}>
                    {bank.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#e5e7eb]">
            <p className="text-sm font-sans leading-relaxed" style={{ color: branding.textMuted }}>
              Les tarifs et conditions des banques d{"'"}heures seront presentes dans une proposition
              distincte selon vos besoins d{"'"}accompagnement continu.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}
