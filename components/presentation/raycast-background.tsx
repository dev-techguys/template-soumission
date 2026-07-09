"use client"

export function RaycastBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Top spotlight - Blue */}
      <div 
        className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[140%] h-[80%]"
        style={{
          background: 'radial-gradient(ellipse 50% 80% at 50% 0%, rgba(0, 102, 255, 0.12), transparent 60%)',
        }}
      />

      {/* Floating orb - top right */}
      <div 
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.4), transparent 70%)',
        }}
      />

      {/* Floating orb - bottom left */}
      <div 
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.3), transparent 70%)',
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Raycast-style geometric shapes */}
      {/* Large square - rotated */}
      <div 
        className="absolute top-[15%] right-[10%] w-[300px] h-[300px] border border-white/[0.03] rounded-3xl rotate-12"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.02), transparent)',
        }}
      />

      {/* Circle accent */}
      <div 
        className="absolute top-[60%] left-[5%] w-[200px] h-[200px] rounded-full border border-white/[0.03]"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(0, 102, 255, 0.05), transparent 60%)',
        }}
      />

      {/* Small floating square */}
      <div 
        className="absolute top-[40%] right-[5%] w-[100px] h-[100px] border border-white/[0.04] rounded-2xl -rotate-6"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.01), transparent)',
        }}
      />

      {/* Pill shape - bottom */}
      <div 
        className="absolute bottom-[20%] right-[15%] w-[180px] h-[60px] border border-white/[0.03] rounded-full"
        style={{
          background: 'linear-gradient(90deg, rgba(0, 102, 255, 0.03), transparent)',
        }}
      />

      {/* Dot grid pattern - subtle */}
      <div 
        className="absolute top-[30%] left-[15%] w-[150px] h-[150px] opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Gradient line - horizontal */}
      <div 
        className="absolute top-[45%] left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.1) 30%, rgba(0, 102, 255, 0.1) 70%, transparent)',
        }}
      />

      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
