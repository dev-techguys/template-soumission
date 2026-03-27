"use client"

import type { ReactNode } from "react"
import { SlideNav } from "./slide-nav"

export function PresentationShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative bg-[#0f172a]">
      <SlideNav />
      {children}
    </main>
  )
}
