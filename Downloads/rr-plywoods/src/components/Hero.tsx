import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Text3D, Center } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { ChevronDown } from 'lucide-react'

// 3D Plywood stack scene
function PlywoodStack() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.25
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08
    }
  })

  const layers = [
    { y: 0,    color: '#8B5E3C', roughness: 0.85 },
    { y: 0.28, color: '#A0714F', roughness: 0.80 },
    { y: 0.56, color: '#7A5230', roughness: 0.90 },
    { y: 0.84, color: '#9C6B44', roughness: 0.82 },
    { y: 1.12, color: '#B8845A', roughness: 0.75 },
  ]

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {layers.map((layer, i) => (
        <mesh key={i} position={[0, layer.y, 0]} castShadow receiveShadow>
          <boxGeometry args={[3.2, 0.22, 2.0]} />
          <meshStandardMaterial
            color={layer.color}
            roughness={layer.roughness}
            metalness={0.02}
          />
          {/* Edge detail */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3.22, 0.23, 2.02]} />
            <meshStandardMaterial
              color="#2a1a0a"
              roughness={1}
              transparent
              opacity={0.15}
            />
          </mesh>
        </mesh>
      ))}

      {/* Glass panel leaning behind */}
      <mesh position={[1.8, 1.2, -0.5]} rotation={[0, -0.3, 0.08]} castShadow>
        <boxGeometry args={[0.04, 2.4, 1.6]} />
        <meshPhysicalMaterial
          color="#b0d4e8"
          transmission={0.92}
          roughness={0.02}
          metalness={0.1}
          ior={1.5}
          thickness={0.05}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Gold trim detail on plywood */}
      <mesh position={[1.62, 0.56, 0]} castShadow>
        <boxGeometry args={[0.04, 1.18, 2.02]} />
        <meshStandardMaterial color="#d97706" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

function GoldParticles() {
  const count = 60
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const meshRef = useRef<THREE.Points>(null)
  useFrame((s) => {
    if (meshRef.current) meshRef.current.rotation.y = s.clock.elapsedTime * 0.04
  })
  return (
    <points ref={meshRef} geometry={geo}>
      <pointsMaterial color="#d97706" size={0.025} transparent opacity={0.6} />
    </points>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Canvas background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [4, 2, 5], fov: 45 }}
          shadows
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.2}
            color="#fde68a"
            castShadow
          />
          <directionalLight position={[-3, 2, -2]} intensity={0.3} color="#b45309" />
          <pointLight position={[0, 4, 2]} intensity={0.8} color="#fbbf24" />
          <Suspense fallback={null}>
            <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.4}>
              <PlywoodStack />
            </Float>
            <GoldParticles />
            <Environment preset="night" />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.4}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-dark-950/95 via-dark-950/70 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/40" />

      {/* Content */}
      <div className="relative z-20 container-custom section-padding w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gold-500" />
            <span className="font-mono text-xs text-gold-500 tracking-[0.35em] uppercase">
              Est. Anantapur, A.P.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl font-semibold leading-tight mb-6"
          >
            <span className="text-gold-100">R R Glass</span>
            <br />
            <span className="gold-text italic">&amp; Plywoods</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="font-body text-lg text-gold-100/60 leading-relaxed mb-10 max-w-xl"
          >
            Anantapur's trusted source for premium plywood, toughened glass,
            hardware & power tools. Serving builders, contractors and homes for decades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="px-8 py-4 rounded-full bg-gold-500 text-dark-950 font-body font-semibold text-base hover:bg-gold-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-gold-900/30"
            >
              Explore Products
            </a>
            <a
              href="https://wa.me/919440565917?text=Hi, I'd like to enquire about your products"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-gold-600/50 text-gold-400 font-body text-base hover:bg-gold-600/10 hover:border-gold-500 transition-all duration-300"
            >
              WhatsApp Enquiry
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex gap-10 mt-16 pt-10 border-t border-gold-800/30"
          >
            {[
              { num: '20+', label: 'Years of Trust' },
              { num: '500+', label: 'Products' },
              { num: '5000+', label: 'Happy Customers' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-semibold gold-text">{stat.num}</div>
                <div className="font-body text-xs text-gold-100/40 tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gold-600/50"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
