"use client"

import { SlideWrapper } from "../slide-wrapper"
import { client, signing } from "@/lib/proposal-data"
import Image from "next/image"
import { ArrowRight, Pen } from "lucide-react"

export function ClosingSlide() {
  return (
    <SlideWrapper id="closing" className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Raycast-style spotlight from bottom */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 100% 80% at 50% 120%, rgba(255, 99, 99, 0.15), transparent 60%),
              radial-gradient(circle at 30% 50%, rgba(255, 99, 99, 0.04), transparent 40%),
              radial-gradient(circle at 70% 30%, rgba(255, 133, 133, 0.03), transparent 35%)
            `
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-8 text-center">
        <div className="flex flex-col items-center gap-8 max-w-2xl">
          {/* Logo with glow */}
          <div className="relative mb-4">
            <div className="absolute inset-0 blur-3xl bg-[#FF6363]/10 scale-150" />
            <div className="relative w-44 h-14">
              <Image
                src="/images/laplante-logo.webp"
                alt={`Logo ${client.name}`}
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
          </div>

          {/* Eyebrow - glass pill */}
          <div className="glass-card px-5 py-2 rounded-full">
            <span className="text-[11px] tracking-[0.25em] uppercase text-white/50 font-sans font-medium">
              TechGuys & {client.name}
            </span>
          </div>

          {/* Main headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
            Pret a <span className="gradient-text-accent">transformer</span>
            <br />
            votre financement automobile
          </h2>

          {/* Divider */}
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          <p className="text-lg text-white/40 font-sans leading-relaxed max-w-xl">
            Une plateforme sur mesure pour internaliser vos operations de credit, accelerer vos approbations et maitriser votre portefeuille.
          </p>

          {/* Prepared for - glass card */}
          <div className="glass-card px-8 py-5 rounded-2xl flex flex-col items-center gap-1.5">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-sans">
              Prepare pour
            </span>
            <span className="font-serif text-2xl gradient-text-accent">{client.name}</span>
            <span className="text-sm text-white/50 font-sans">{client.contactName}</span>
          </div>

          {/* CTA */}
          <div className="mt-4">
            {signing.type === "pandadoc" && signing.pandadocUrl ? (
              <a
                href={signing.pandadocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6363] to-[#FF8585] hover:from-[#FF8585] hover:to-[#FFA8A8] transition-all duration-300 shadow-lg shadow-[#FF6363]/20"
              >
                <Pen className="w-4 h-4 text-white" />
                <span className="text-sm tracking-[0.05em] text-white font-sans font-semibold">
                  Signer le contrat
                </span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border-[#FF6363]/30">
                  <Pen className="w-4 h-4 text-[#FF6363]" />
                  <span className="text-sm tracking-[0.05em] text-[#FF8585] font-sans font-medium">
                    Lien PandaDoc a venir
                  </span>
                </div>
                <span className="text-xs text-white/25 font-sans">
                  Le lien de signature vous sera envoye par courriel
                </span>
              </div>
            )}
          </div>

          {/* Footer */}
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/20 font-sans mt-6">
            Confidentiel — 2026
          </span>
        </div>
      </div>
    </SlideWrapper>
  )
}
