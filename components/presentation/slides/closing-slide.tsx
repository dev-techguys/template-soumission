"use client"

import { useState } from "react"
import { SlideWrapper } from "../slide-wrapper"
import { SignatureModal } from "../signature-modal"
import Image from "next/image"
import type { ClientInfo } from "@/lib/proposal-data"

interface ClosingSlideProps {
  client: ClientInfo
}

export function ClosingSlide({ client }: ClosingSlideProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <SlideWrapper id="closing" className="relative">
        {/* Background with overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
          <div
            className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "color-mix(in srgb, var(--color-accent) 10%, transparent)" }}
          />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
          <div className="flex flex-col items-center gap-8 max-w-2xl">
            {/* Client logo */}
            <div>
              <Image
                src={client.logo}
                alt={client.companyName}
                width={240}
                height={70}
                className="brightness-0 invert"
              />
            </div>

            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight text-balance">
              Un accompagnement stratégique optimal pour propulser votre croissance digitale
            </h2>

            <div
              className="w-24 h-px"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3), var(--color-accent), rgba(255,255,255,0.3))`,
              }}
            />

            <div className="flex flex-col items-center gap-1">
              <span className="text-xs tracking-[0.2em] uppercase text-white/60 font-sans">
                Préparé pour
              </span>
              <span className="font-serif text-2xl" style={{ color: "var(--color-accent)" }}>
                {client.companyName}
              </span>
              {client.contactName && (
                <span className="text-sm text-white/80 font-sans">{client.contactName}</span>
              )}
            </div>

            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

            {/* CTA button */}
            <button
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-sans font-medium text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "#1a2e30",
              }}
            >
              Démarrer le projet
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>

            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-sans mt-4">
              Confidentiel{client.year ? ` — ${client.year}` : ""}
            </span>
          </div>
        </div>
      </SlideWrapper>

      <SignatureModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
