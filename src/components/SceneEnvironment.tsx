"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function Ground() {
  const ground = useRef<THREE.Mesh>(null);

  return (
    <mesh
      ref={ground}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -5, -50]}
      receiveShadow
      scale={[200, 200, 200]}
    >
      <planeGeometry args={[1, 1]} />
      <shadowMaterial opacity={0.3} />
    </mesh>
  );
}

export function Lighting() {
  const directional = useRef<THREE.DirectionalLight>(null);

  useFrame((state) => {
    if (!directional.current) return;
    directional.current.position.set(50, 50, 25);
  });

  return (
    <>
      {/* Ambient light - soft warm glow */}
      <ambientLight intensity={0.6} color="#fdb17f" />

      {/* Directional light with shadows */}
      <directionalLight
        ref={directional}
        intensity={1.2}
        color="#fdb17f"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={200}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />

      {/* Fill light for realism */}
      <pointLight position={[-30, 40, -30]} intensity={0.4} color="#ffb96f" />
    </>
  );
}
