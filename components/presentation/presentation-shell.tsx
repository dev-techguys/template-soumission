"use client"

import type { ReactNode } from "react"
import { SlideNav } from "./slide-nav"

export function PresentationShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative bg-white">
      <SlideNav />
      {children}
    </main>
  )
}
