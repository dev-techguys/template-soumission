"use client"

import { SlideWrapper } from "../slide-wrapper"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { client, branding } from "@/lib/proposal-data"
import { motion } from "framer-motion"
import { Suspense, lazy } from "react"
import { MagneticButton } from "@/components/ui/scroll-animations"

// Lazy load Spline for performance
const Spline = lazy(() => import("@splinetool/react-spline"))

function SplineBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-[#030318] via-[#0a0a2e] to-[#050520]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0066FF]/25 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#990033]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      }>
        {/* Spline with hue shift toward blue and blur */}
        <div 
          className="w-full h-full"
          style={{
            filter: "blur(2px) saturate(0.9) hue-rotate(-15deg)",
          }}
        >
          <Spline
            style={{
              width: "100%",
              height: "100vh",
              pointerEvents: "auto",
            }}
            scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
          />
        </div>
      </Suspense>
      
      {/* Blue tint overlay to shift colors */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(0, 20, 60, 0.25)",
          mixBlendMode: "overlay",
        }}
      />
      
      {/* Darker red accent in corner */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 40% 40% at 70% 60%, rgba(120, 0, 40, 0.15), transparent 70%)",
        }}
      />
      
      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, transparent 50%, rgba(0, 3, 15, 0.5) 80%, rgba(0, 3, 15, 0.85)),
            linear-gradient(to right, rgba(0, 3, 15, 0.3), transparent 30%, transparent 70%, rgba(0, 3, 15, 0.3))
          `,
        }}
      />
    </div>
  )
}

export function CoverSlide() {
  return (
    <SlideWrapper id="cover" className="relative overflow-hidden">
      {/* Spline Galaxy Background */}
      <SplineBackground />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Top line */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8 left-8 right-8 flex items-center justify-between"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase text-white/40 font-medium">
            Confidentiel
          </span>
          <span className="text-[11px] tracking-[0.25em] uppercase text-white/30">
            2026
          </span>
        </motion.div>

        <div className="flex flex-col items-center gap-6">
          {/* Logo with glow animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative mb-6"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.3, 0.15]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 blur-3xl bg-[#0066FF]/30 scale-150" 
            />
            <div className="relative w-56 h-20">
              <Image
                src={branding.logoUrl}
                alt={`Logo ${client.name}`}
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </motion.div>

          {/* Eyebrow label with glass effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="px-6 py-2.5 rounded-full backdrop-blur-xl border border-white/10"
            style={{ 
              background: "rgba(0, 102, 255, 0.1)",
            }}
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-white/70 font-medium">
              Proposition de developpement
            </span>
          </motion.div>

          {/* Main title with staggered animation */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.1] max-w-5xl mt-4"
          >
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-light bg-gradient-to-r from-[#0066FF] via-[#3388FF] to-[#66AAFF] bg-clip-text text-transparent inline-block"
            >
              Plateforme
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-white font-semibold inline-block"
            >
              AutoFinance
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-lg md:text-xl max-w-2xl leading-relaxed mt-2"
          >
            <span className="bg-gradient-to-r from-[#3388FF] to-[#66AAFF] bg-clip-text text-transparent font-medium">
              Internalisez votre financement automobile
            </span>
            <br />
            <span className="text-white/50">
              et reprenez le controle de votre portefeuille
            </span>
          </motion.p>

          {/* Animated divider */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="w-px h-14 bg-gradient-to-b from-transparent via-[#0066FF]/30 to-transparent mt-4 origin-top" 
          />

          {/* Recipient card with glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="px-10 py-5 rounded-2xl flex flex-col items-center gap-1.5 backdrop-blur-xl border border-white/10"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
              A l{"'"}attention de
            </span>
            <span className="text-xl text-white font-medium">
              {client.contactName}
            </span>
            <span className="text-sm text-white/50">
              {client.name}
            </span>
          </motion.div>

          {/* TechGuys Partner Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <span className="text-[9px] tracking-[0.25em] uppercase text-white/30">
              Partenaire tech strategique
            </span>
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-xl backdrop-blur-md border border-white/5"
              style={{
                background: "linear-gradient(135deg, rgba(253, 133, 211, 0.08), rgba(253, 133, 211, 0.02))",
              }}
            >
              <svg width="100" height="24" viewBox="0 0 669 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TechGuys logo">
                <rect width="160" height="160" rx="30" fill="#FD85D3"/>
                <g clipPath="url(#logo-v2-clip)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M96.9867 115.085V93.013C96.9867 86.6791 93.7587 80.8882 88.2748 77.7081L62.113 62.5339V115.085C62.113 124.761 69.9198 132.604 79.552 132.604C89.1839 132.604 96.9867 124.761 96.9867 115.085Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M114.42 27.5012H92.4482C86.143 27.5012 80.3784 30.7439 77.2126 36.2528L62.1069 62.5335H114.42C124.052 62.5335 131.86 54.6905 131.86 45.0147C131.86 35.3442 124.052 27.5012 114.42 27.5012Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M44.6733 27.4962C54.3052 27.4962 62.1131 35.3392 62.1131 45.0149V62.5337H44.6733C35.0414 62.5337 27.2335 54.6907 27.2335 45.0149C27.2335 35.3392 35.0414 27.4962 44.6733 27.4962Z" fill="white"/>
                </g>
                <path d="M225.5 125.63C219.55 125.63 214.93 123.95 211.64 120.59C208.35 117.23 206.705 112.505 206.705 106.415V78.905H196.73V68.195H198.305C200.965 68.195 203.03 67.425 204.5 65.885C205.97 64.345 206.705 62.245 206.705 59.585V55.175H218.57V68.195H231.485V78.905H218.57V105.89C218.57 107.85 218.885 109.53 219.515 110.93C220.145 112.26 221.16 113.31 222.56 114.08C223.96 114.78 225.78 115.13 228.02 115.13C228.58 115.13 229.21 115.095 229.91 115.025C230.61 114.955 231.275 114.885 231.905 114.815V125C230.925 125.14 229.84 125.28 228.65 125.42C227.46 125.56 226.41 125.63 225.5 125.63Z" fill="white"/>
                <path d="M269.128 126.26C263.458 126.26 258.418 124.965 254.008 122.375C249.668 119.715 246.273 116.145 243.823 111.665C241.373 107.115 240.148 102.04 240.148 96.44C240.148 90.7 241.373 85.625 243.823 81.215C246.343 76.805 249.703 73.34 253.903 70.82C258.103 68.23 262.863 66.935 268.183 66.935C273.503 66.935 278.228 68.16 282.358 70.61C286.488 72.99 289.708 76.35 292.018 80.69C294.398 85.03 295.588 90.07 295.588 95.81C295.588 96.65 295.553 97.525 295.483 98.435C295.413 99.275 295.308 100.15 295.168 101.06H252.223V92.168H284.248L278.053 95.81C278.053 92.52 277.458 89.72 276.268 87.41C275.078 85.1 273.433 83.315 271.333 82.055C269.233 80.795 266.818 80.165 264.088 80.165C261.358 80.165 258.943 80.795 256.843 82.055C254.743 83.315 253.098 85.135 251.908 87.515C250.718 89.825 250.123 92.66 250.123 96.02C250.123 99.38 250.753 102.285 252.013 104.735C253.273 107.185 255.058 109.075 257.368 110.405C259.678 111.735 262.408 112.4 265.558 112.4C268.358 112.4 270.878 111.875 273.118 110.825C275.358 109.775 277.248 108.235 278.788 106.205L288.973 114.08C286.593 117.58 283.408 120.31 279.418 122.27C275.498 124.16 271.053 126.26 269.128 126.26Z" fill="white"/>
                <path d="M334.817 126.26C329.147 126.26 324.002 124.965 319.382 122.375C314.832 119.785 311.227 116.215 308.567 111.665C305.977 107.115 304.682 102.04 304.682 96.44C304.682 90.84 305.977 85.8 308.567 81.32C311.227 76.77 314.867 73.2 319.487 70.61C324.107 68.02 329.252 66.725 334.922 66.725C340.662 66.725 345.702 67.985 350.042 70.505C354.452 72.955 357.812 76.385 360.122 80.795L348.677 87.935C347.137 85.135 345.142 83.035 342.692 81.635C340.242 80.165 337.477 79.43 334.397 79.43C331.177 79.43 328.307 80.165 325.787 81.635C323.337 83.105 321.412 85.17 320.012 87.83C318.612 90.42 317.912 93.5 317.912 97.07C317.912 100.57 318.612 103.65 320.012 106.31C321.412 108.9 323.337 110.93 325.787 112.4C328.307 113.87 331.177 114.605 334.397 114.605C337.477 114.605 340.242 113.905 342.692 112.505C345.142 111.035 347.137 108.9 348.677 106.1L360.122 113.24C357.812 117.65 354.452 121.115 350.042 123.635C345.702 126.085 340.627 126.26 334.817 126.26Z" fill="white"/>
                <path d="M398.663 66.935C403.563 66.935 407.868 67.88 411.578 69.77C415.358 71.66 418.298 74.53 420.398 78.38C422.568 82.16 423.653 87.025 423.653 92.975V125H411.578V94.865C411.578 89.545 410.318 85.59 407.798 82.895C405.278 80.2 401.778 78.905 397.298 78.905C394.148 78.905 391.348 79.57 388.898 80.9C386.448 82.23 384.523 84.19 383.123 86.78C381.723 89.37 381.023 92.52 381.023 96.23V125H368.948V50.93H381.023V80.69L378.436 76.63C380.466 73.62 383.228 71.275 386.728 69.595C390.228 67.845 394.218 66.935 398.663 66.935Z" fill="white"/>
                <path d="M480.907 96.44C480.907 96.58 480.872 97.455 480.802 99.065C480.732 100.605 480.627 101.83 480.487 102.74H444.577V103.475C444.857 106.835 446.012 109.565 448.042 111.665C450.072 113.765 452.802 114.815 456.232 114.815C458.892 114.815 461.237 114.185 463.267 112.925C465.297 111.595 466.802 109.81 467.782 107.57L479.122 113.135C476.952 117.475 473.802 120.87 469.672 123.32C465.542 125.77 460.817 126.26 456.127 126.26C450.387 126.26 445.277 124.965 440.797 122.375C436.387 119.785 432.957 116.215 430.507 111.665C428.057 107.045 426.832 101.935 426.832 96.335C426.832 90.735 428.022 85.695 430.402 81.215C432.852 76.735 436.212 73.235 440.482 70.715C444.822 68.125 449.792 66.83 455.392 66.83C460.712 66.83 465.437 68.055 469.567 70.505C473.767 72.885 477.057 76.28 479.437 80.69C481.817 85.1 483.007 90.315 483.007 96.335L480.907 96.44ZM455.392 78.17C452.172 78.17 449.442 79.15 447.202 81.11C444.962 83 443.527 85.625 442.897 88.985L443.212 87.2H468.622L468.097 88.985C467.607 85.835 466.242 83.28 464.002 81.32C461.832 79.29 459.032 78.275 455.602 78.275L455.392 78.17Z" fill="white"/>
                <path d="M533.123 96.44C533.123 96.58 533.088 97.455 533.018 99.065C532.948 100.605 532.843 101.83 532.703 102.74H496.793V103.475C497.073 106.835 498.228 109.565 500.258 111.665C502.288 113.765 505.018 114.815 508.448 114.815C511.108 114.815 513.453 114.185 515.483 112.925C517.513 111.595 519.018 109.81 519.998 107.57L531.338 113.135C529.168 117.475 526.018 120.87 521.888 123.32C517.758 125.77 513.033 126.26 508.343 126.26C502.603 126.26 497.493 124.965 493.013 122.375C488.603 119.785 485.173 116.215 482.723 111.665C480.273 107.045 479.048 101.935 479.048 96.335C479.048 90.735 480.238 85.695 482.618 81.215C485.068 76.735 488.428 73.235 492.698 70.715C497.038 68.125 502.008 66.83 507.608 66.83C512.928 66.83 517.653 68.055 521.783 70.505C525.983 72.885 529.273 76.28 531.653 80.69C534.033 85.1 535.223 90.315 535.223 96.335L533.123 96.44ZM507.608 78.17C504.388 78.17 501.658 79.15 499.418 81.11C497.178 83 495.743 85.625 495.113 88.985L495.428 87.2H520.838L520.313 88.985C519.823 85.835 518.458 83.28 516.218 81.32C514.048 79.29 511.248 78.275 507.818 78.275L507.608 78.17Z" fill="white"/>
                <path d="M553.484 125H541.409V68.195H553.064V82.79L551.384 79.78C553.274 75.86 556.004 72.815 559.574 70.645C563.214 68.475 567.519 67.39 572.489 67.39V79.465C571.789 79.395 571.159 79.36 570.599 79.36C565.489 79.36 561.359 80.935 558.209 84.085C555.059 87.235 553.484 91.645 553.484 97.315V125Z" fill="white"/>
                <path d="M579.891 90.595C579.891 84.645 581.046 79.465 583.356 75.055C585.736 70.645 589.026 67.25 593.226 64.87C597.426 62.42 602.256 61.195 607.716 61.195C612.056 61.195 615.906 61.965 619.266 63.505C622.696 65.045 625.461 67.18 627.561 69.91L618.216 78.31C616.746 76.56 615.136 75.265 613.386 74.425C611.636 73.585 609.711 73.165 607.611 73.165C604.741 73.165 602.186 73.865 599.946 75.265C597.706 76.595 595.956 78.52 594.696 81.04C593.436 83.56 592.806 86.5 592.806 89.86C592.806 93.22 593.436 96.195 594.696 98.785C595.956 101.305 597.706 103.265 599.946 104.665C602.186 106.065 604.741 106.765 607.611 106.765C609.711 106.765 611.636 106.345 613.386 105.505C615.136 104.665 616.746 103.37 618.216 101.62L627.561 110.02C625.461 112.75 622.696 114.885 619.266 116.425C615.906 117.965 612.056 118.735 607.716 118.735C602.256 118.735 597.426 117.545 593.226 115.165C589.026 112.715 585.736 109.32 583.356 104.98C581.046 100.64 579.891 95.565 579.891 89.755V90.595Z" fill="white" transform="translate(10, 30)"/>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - positioned in bottom right corner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.2em] uppercase text-white/30">
            Defiler
          </span>
          <MagneticButton>
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border border-white/10 hover:border-[#0066FF]/50 hover:bg-[#0066FF]/10 transition-all duration-300"
              style={{
                background: "rgba(0, 102, 255, 0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <ChevronDown className="w-4 h-4 text-[#0066FF]" />
            </motion.div>
          </MagneticButton>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
