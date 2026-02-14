"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

interface MonumentProps {
  position: [number, number, number];
  modelPath: string;
  scale?: number;
}

// Inner component that actually uses useGLTF
function MonumentModel({ position, modelPath, scale = 1 }: MonumentProps) {
  const group = useRef<THREE.Group>(null);

  // Get model URL
  const filename = modelPath.split("/").pop();
  const modelUrl = `https://raw.githubusercontent.com/SURAJARS/surajPortfolio2.0/main/public/models/${filename}`;

  // This hook works with Suspense - it throws a promise until loaded
  const { scene } = useGLTF(modelUrl);
  
  // Clone the scene
  const clonedScene = scene.clone(true);

  // Setup animations
  useFrame((state) => {
    if (!group.current) return;

    // Slow Y rotation
    group.current.rotation.y += 0.0005;

    // Subtle floating animation
    group.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  // Enable shadows and materials
  clonedScene.traverse((child: THREE.Object3D) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((mat: THREE.Material) => {
            mat.side = THREE.DoubleSide;
          });
        } else {
          (child.material as THREE.Material).side = THREE.DoubleSide;
        }
      }
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}

// Outer component that preloads and wraps with Suspense
export function Monument({ position, modelPath, scale = 1 }: MonumentProps) {
  const filename = modelPath.split("/").pop();
  const modelUrl = `https://raw.githubusercontent.com/SURAJARS/surajPortfolio2.0/main/public/models/${filename}`;

  // Preload model
  useGLTF.preload(modelUrl);

  return <MonumentModel position={position} modelPath={modelPath} scale={scale} />;
}
