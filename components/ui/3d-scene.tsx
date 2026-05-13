"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from "@react-three/drei"
import { useRef, Suspense } from "react"
import type { Mesh, Group } from "three"

function FloatingShapes() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main sphere with distortion */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1.2, 64, 64]} position={[2, 0.5, -2]}>
          <MeshDistortMaterial
            color="#0066FF"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.6}
          />
        </Sphere>
      </Float>

      {/* Secondary sphere */}
      <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
        <Sphere args={[0.6, 32, 32]} position={[-2.5, -0.5, -1]}>
          <MeshDistortMaterial
            color="#3388FF"
            attach="material"
            distort={0.3}
            speed={3}
            roughness={0.3}
            metalness={0.7}
            transparent
            opacity={0.5}
          />
        </Sphere>
      </Float>

      {/* Torus ring */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={0.8}>
        <Torus args={[0.8, 0.15, 16, 32]} position={[-1.5, 1.5, -3]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial
            color="#0066FF"
            roughness={0.2}
            metalness={0.9}
            transparent
            opacity={0.4}
          />
        </Torus>
      </Float>

      {/* Small cube */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={0.6}>
        <Box args={[0.5, 0.5, 0.5]} position={[3, -1, -2]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial
            color="#66AAFF"
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.5}
          />
        </Box>
      </Float>

      {/* Additional small spheres for depth */}
      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.3} rotationIntensity={0.5} floatIntensity={0.3}>
          <Sphere
            args={[0.1 + Math.random() * 0.15, 16, 16]}
            position={[
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 4,
              -3 - Math.random() * 3,
            ]}
          >
            <meshStandardMaterial
              color={i % 2 === 0 ? "#0066FF" : "#3388FF"}
              roughness={0.3}
              metalness={0.8}
              transparent
              opacity={0.3 + Math.random() * 0.3}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

function AnimatedRing() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <torusGeometry args={[3, 0.02, 16, 100]} />
      <meshStandardMaterial
        color="#0066FF"
        roughness={0.1}
        metalness={0.9}
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

export function Scene3D({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0066FF" />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#3388FF" />
          
          <FloatingShapes />
          <AnimatedRing />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Simpler orb for other slides
export function FloatingOrb({
  position = [0, 0, 0],
  color = "#0066FF",
  size = 1,
}: {
  position?: [number, number, number]
  color?: string
  size?: number
}) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.4}
      />
    </Sphere>
  )
}
