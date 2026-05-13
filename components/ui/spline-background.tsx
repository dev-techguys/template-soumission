"use client"

import React, { Suspense, lazy } from "react"

const Spline = lazy(() => import("@splinetool/react-spline"))

export function SplineBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Suspense fallback={<SplineFallback />}>
        <Spline
          style={{
            width: "100%",
            height: "100vh",
            pointerEvents: "none",
          }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      {/* Gradient overlays for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.85), transparent 40%, transparent 60%, rgba(0, 0, 0, 0.85)),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.95))
          `,
        }}
      />
      {/* Blue tint overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 102, 255, 0.15), transparent)"
        }}
      />
    </div>
  )
}

function SplineFallback() {
  return (
    <div className="w-full h-full bg-[#030308]">
      {/* Animated gradient background as fallback */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0, 102, 255, 0.3), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(0, 102, 255, 0.15), transparent),
            radial-gradient(ellipse 50% 30% at 20% 80%, rgba(0, 102, 255, 0.1), transparent)
          `
        }}
      />
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />
    </div>
  )
}

// Alternative: CSS-only animated background for better performance
export function AnimatedGradientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#030308]">
      {/* Main gradient orbs */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-[-20%] left-[10%] w-[60%] h-[60%] rounded-full animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float1 20s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute bottom-[-10%] right-[5%] w-[50%] h-[50%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "float2 25s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(51, 136, 255, 0.08) 0%, transparent 70%)",
            filter: "blur(50px)",
            animation: "float3 15s ease-in-out infinite"
          }}
        />
      </div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px"
        }}
      />
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
        }}
      />
      
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(5%, 10%) scale(1.1); }
          50% { transform: translate(-5%, 5%) scale(0.95); }
          75% { transform: translate(10%, -5%) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-10%, -5%) scale(1.1); }
          66% { transform: translate(5%, 10%) scale(0.9); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15%, 15%); }
        }
      `}</style>
    </div>
  )
}
