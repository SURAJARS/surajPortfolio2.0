"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

interface MonumentProps {
  position: [number, number, number];
  modelPath: string;
  scale?: number;
}

export function Monument({ position, modelPath, scale = 1 }: MonumentProps) {
  const group = useRef<THREE.Group>(null);

  let scene: THREE.Group;
  try {
    const gltf = useGLTF(modelPath);
    scene = gltf.scene;
  } catch (error) {
    console.error(`Failed to load model: ${modelPath}`, error);
    return null;
  }

  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    // Preload models with error handling
    const models = [
      "/models/mahabalipuram.glb",
      "/models/qutub.glb",
      "/models/ellora.glb",
      "/models/hampi.glb",
      "/models/charminar.glb",
      "/models/boat.glb",
    ];

    models.forEach((modelPath) => {
      try {
        useGLTF.preload(modelPath);
      } catch (error) {
        console.warn(`Could not preload ${modelPath}:`, error);
      }
    });
  }, []);

  useFrame((state) => {
    if (!group.current) return;

    // Slow Y rotation
    group.current.rotation.y += 0.0005;

    // Subtle floating animation
    group.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  // Enable shadows on all meshes
  clonedScene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}
