'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'

function RotatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.25
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.2}>
      <MeshDistortMaterial
        color="#00f5ff"
        attach="material"
        distort={0.35}
        speed={2}
        roughness={0.05}
        metalness={0.9}
        wireframe={false}
      />
    </Sphere>
  )
}

function FloatingRings() {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ringRef.current) return
    ringRef.current.rotation.x = state.clock.elapsedTime * 0.3
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.1
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.2, 0.02, 16, 100]} />
      <meshStandardMaterial color="#a855f7" opacity={0.5} transparent />
    </mesh>
  )
}

export default function SphereCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#a855f7" />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00f5ff" />
        <spotLight position={[0, 10, 0]} intensity={1} color="#00f5ff" angle={0.3} />

        {/* 3D Objects */}
        <RotatingSphere />
        <FloatingRings />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

        {/* Controls — user can drag to rotate */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  )
}
