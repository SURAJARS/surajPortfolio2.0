"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

interface MonumentProps {
  position: [number, number, number];
  modelPath: string;
  scale?: number;
}

export function Monument({ position, modelPath, scale = 1 }: MonumentProps) {
  const group = useRef<THREE.Group>(null);

  // Use GitHub raw content CDN for reliable model hosting
  const getModelUrl = (path: string) => {
    const filename = path.split("/").pop();
    return `https://raw.githubusercontent.com/SURAJARS/surajPortfolio2.0/main/public/models/${filename}`;
  };

  const modelUrl = getModelUrl(modelPath);
  
  // Load model using useGLTF hook
  let gltf;
  try {
    gltf = useGLTF(modelUrl);
    console.log(`✓ Model loaded: ${modelUrl}`);
  } catch (error) {
    console.error(`✗ Failed to load model: ${modelUrl}`, error);
    return null;
  }

  // Clone the scene once when model loads
  const clonedScene = gltf.scene.clone(true);

  useEffect(() => {
    // Preload all models using GitHub raw content CDN
    const models = [
      "/models/mahabalipuram.glb",
      "/models/qutub.glb",
      "/models/ellora.glb",
      "/models/hampi.glb",
      "/models/charminar.glb",
      "/models/boat.glb",
    ];

    models.forEach((modelPath) => {
      const filename = modelPath.split("/").pop();
      const url = `https://raw.githubusercontent.com/SURAJARS/surajPortfolio2.0/main/public/models/${filename}`;
      try {
        useGLTF.preload(url);
      } catch (error) {
        console.warn(`Could not preload ${url}:`, error);
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

  // Enable shadows and materials on all meshes
  clonedScene.traverse((child: THREE.Object3D) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      // Ensure materials are visible
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
