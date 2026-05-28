"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SlideWrapperProps {
  children: ReactNode
  className?: string
  id?: string
}

export function SlideWrapper({ children, className, id }: SlideWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative min-h-screen w-full max-w-full flex flex-col justify-center overflow-hidden overflow-x-hidden",
        className
      )}
    >
      {children}
    </section>
  )
}
