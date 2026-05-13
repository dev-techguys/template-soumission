"use client"

import { SlideWrapper } from "../slide-wrapper"
import { client, signing } from "@/lib/proposal-data"
import Image from "next/image"

export function ClosingSlide() {
  return (
    <SlideWrapper id="closing" className="relative">
      {/* Pure CSS dark background — Raycast inspired */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        {/* Blue radial glow top-left */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0035FF]/8 rounded-full blur-[150px]" />
        {/* Blue radial glow bottom-right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/6 rounded-full blur-[120px]" />
        {/* Centre glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0035FF]/4 rounded-full blur-[100px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Horizontal accent line */}
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0035FF]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <div className="flex flex-col items-center gap-8 max-w-2xl">
          {/* Logo */}
          <div className="relative w-40 h-14 mb-2">
            <Image
              src="/images/laplante-logo.webp"
              alt={`Logo ${client.name}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#0035FF]/40" />
            <span className="text-xs tracking-[0.4em] uppercase text-[#0035FF]/70 font-sans font-medium">
              TechGuys & {client.name}
            </span>
            <div className="w-8 h-px bg-[#0035FF]/40" />
          </div>

          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#0035FF]/30 to-transparent" />

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance">
            Prêt à transformer votre financement automobile
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#0035FF]/50 to-transparent" />

          <p className="text-lg text-white/50 font-sans leading-relaxed max-w-xl">
            Une plateforme sur mesure pour internaliser vos opérations de crédit, accélérer vos approbations et maîtriser votre portefeuille.
          </p>

          <div className="flex flex-col items-center gap-2 mt-4">
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans">
              Préparé pour
            </span>
            <span className="font-serif text-2xl text-[#3B82F6]">{client.name}</span>
            <span className="text-sm text-white/60 font-sans">{client.contactName}</span>
          </div>

          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#0035FF]/20 to-transparent" />

          {/* CTA */}
          {signing.type === "pandadoc" && signing.pandadocUrl ? (
            <a
              href={signing.pandadocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#0035FF] hover:bg-[#0035FF]/90 transition-all duration-300"
            >
              <span className="text-sm tracking-[0.1em] text-white font-sans font-medium">
                Signer le contrat
              </span>
              <span className="text-white group-hover:translate-x-1 transition-transform duration-300">&#8594;</span>
            </a>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#0035FF]/30 bg-[#0035FF]/5">
                <span className="text-sm tracking-[0.1em] text-[#3B82F6] font-sans font-medium">
                  Lien PandaDoc à venir
                </span>
              </div>
              <span className="text-xs text-white/30 font-sans">
                Le lien de signature vous sera envoyé par courriel
              </span>
            </div>
          )}

          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-sans mt-4">
            Confidentiel — 2026
          </span>
        </div>
      </div>
    </SlideWrapper>
  )
}
