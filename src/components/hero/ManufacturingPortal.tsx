"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Scene() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.002;
            meshRef.current.rotation.y += 0.002;

            const targetX = (state.mouse.x * 0.5);
            const targetY = (state.mouse.y * 0.5);
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
        }
    });

    return (
        <>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <Environment preset="city" />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Sphere
                    ref={meshRef}
                    args={[1.8, 128, 128]}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    <MeshDistortMaterial
                        color={hovered ? "#E8553D" : "#ffffff"}
                        roughness={0.1}
                        metalness={0.8}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        speed={hovered ? 4 : 2}
                        distort={hovered ? 0.4 : 0.2}
                        radius={1}
                    />
                </Sphere>
            </Float>
        </>
    );
}

export default function ManufacturingPortal() {
    return (
        <div className="absolute inset-0 z-0 opacity-60 mix-blend-multiply pointer-events-auto">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
                <Scene />
            </Canvas>
        </div>
    );
}
