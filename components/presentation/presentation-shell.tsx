"use client"

import type { ReactNode } from "react"
import { SlideNav } from "./slide-nav"
import type { BrandingConfig, SlideEntry } from "@/lib/proposal-data"

interface PresentationShellProps {
  children: ReactNode
  branding: BrandingConfig
  slides: SlideEntry[]
}

export function PresentationShell({ children, branding, slides }: PresentationShellProps) {
  return (
    <main
      className="relative bg-[#0f172a]"
      style={
        {
          "--color-primary": branding.primaryColor,
          "--color-secondary": branding.secondaryColor ?? "#4a9ba5",
          "--color-accent": branding.accentColor ?? "#F6A878",
        } as React.CSSProperties
      }
    >
      <SlideNav slides={slides} />
      {children}
    </main>
  )
}
