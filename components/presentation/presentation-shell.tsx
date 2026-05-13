"use client"

import type { ReactNode } from "react"
import { SlideNav } from "./slide-nav"
import { RaycastBackground } from "./raycast-background"

export function PresentationShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative bg-black min-h-screen">
      <RaycastBackground />
      <SlideNav />
      <div className="relative z-10">
        {children}
      </div>
    </main>
  )
}
