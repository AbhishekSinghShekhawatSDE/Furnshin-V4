'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function LiquidBlob({ position, scale, distort, speed, color, opacity, ...props }: any) {
    const meshRef = useRef<THREE.Mesh>(null!)
    useFrame((state) => {
        if (!meshRef.current) return
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    })
    return (
        <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale} {...props}>
                <MeshDistortMaterial
                    color={color}
                    distort={distort}
                    speed={speed}
                    transparent
                    opacity={opacity}
                    metalness={1}
                    roughness={0}
                />
            </Sphere>
        </Float>
    )
}

function InteractiveScene() {
    const mainMeshRef = useRef<THREE.Mesh>(null!)
    const lightRef = useRef<THREE.PointLight>(null!)
    const [hovered, setHovered] = useState(false)
    const { mouse, viewport } = useThree()

    useFrame((state, delta) => {
        if (!mainMeshRef.current) return

        // Complex irregular rotation
        mainMeshRef.current.rotation.x += delta * 0.2
        mainMeshRef.current.rotation.y += delta * 0.25

        // Follow mouse with spring lag
        const targetX = (mouse.x * viewport.width) / 6
        const targetY = (mouse.y * viewport.height) / 6

        mainMeshRef.current.position.x = THREE.MathUtils.lerp(mainMeshRef.current.position.x, targetX, 0.04)
        mainMeshRef.current.position.y = THREE.MathUtils.lerp(mainMeshRef.current.position.y, targetY, 0.04)

        if (lightRef.current) {
            lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, targetX * 1.5, 0.1)
            lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, targetY * 1.5, 0.1)
        }

        // Erratic pulsing
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.08
        mainMeshRef.current.scale.set(
            (hovered ? 1.6 : 1.4) * pulse,
            (hovered ? 1.2 : 1.0) * pulse,
            (hovered ? 1.0 : 0.8) * pulse
        )
    })

    return (
        <group>
            <pointLight ref={lightRef} intensity={5} color="#E8553D" distance={15} />

            {/* Main Messy Liquid Blob */}
            <LiquidBlob
                meshRef={mainMeshRef}
                position={[0, 0, 0]}
                scale={[1.4, 1.0, 0.8]}
                distort={0.8}
                speed={5}
                color="#E8553D"
                opacity={hovered ? 0.7 : 0.45}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
            />

            {/* Orbiting Blobs */}
            <LiquidBlob position={[-2, 1, -1]} scale={[0.4, 0.3, 0.3]} distort={0.6} speed={3} color="#E8553D" opacity={0.2} />
            <LiquidBlob position={[2, -1.5, -2]} scale={[0.5, 0.4, 0.4]} distort={0.7} speed={4} color="#be8b5c" opacity={0.15} />
            <LiquidBlob position={[1.5, 2, -3]} scale={[0.3, 0.2, 0.2]} distort={0.5} speed={2} color="#ffffff" opacity={0.1} />

            <Environment preset="city" />
        </group>
    )
}

export default function HeroSphere() {
    return (
        <div className="absolute inset-0 w-full h-full opacity-60 pointer-events-auto" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                <InteractiveScene />
            </Canvas>
        </div>
    )
}
