"use client"

import { signing } from "@/lib/proposal-data"
import { PenLine, ExternalLink } from "lucide-react"

export function SignatureModal() {
  // For PandaDoc signing, we just show a simple button that links externally
  // The full v0 signature modal workflow is not needed for this project

  if (signing.type === "pandadoc") {
    if (!signing.pandadocUrl) {
      // No link yet - show disabled state
      return (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 text-white/50 px-5 py-3 rounded-full shadow-lg cursor-not-allowed">
            <PenLine className="w-5 h-5" />
            <span className="font-medium text-sm">Lien PandaDoc à venir</span>
          </div>
        </div>
      )
    }

    return (
      <a
        href={signing.pandadocUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="flex items-center gap-3 bg-[#0035FF] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#0035FF]/90 transition-all duration-300 hover:scale-105">
          <PenLine className="w-5 h-5" />
          <span className="font-medium text-sm">Signer le contrat</span>
          <ExternalLink className="w-4 h-4 opacity-70" />
        </div>
      </a>
    )
  }

  // For v0 signature workflow (not used in this project)
  return null
}
