"use client"

import type { ReactNode } from "react"
import { SlideNav } from "./slide-nav"
import { AnimatedGradientBackground } from "@/components/ui/spline-background"

export function PresentationShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative bg-[#030308] min-h-screen">
      <AnimatedGradientBackground />
      <SlideNav />
      <div className="relative z-10">
        {children}
      </div>
    </main>
  )
}
