"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

interface MonumentProps {
  position: [number, number, number];
  modelPath: string;
  scale?: number;
}

export function Monument({ position, modelPath, scale = 1 }: MonumentProps) {
  const group = useRef<THREE.Group>(null);
  const [loaded, setLoaded] = useState(false);

  // Use GitHub raw content CDN for reliable model hosting
  // This bypasses GitHub Pages limitations with binary files
  const getModelUrl = (path: string) => {
    const filename = path.split('/').pop();
    return `https://raw.githubusercontent.com/SURAJARS/surajPortfolio2.0/main/public/models/${filename}`;
  };

  let scene: THREE.Group;
  try {
    const modelUrl = getModelUrl(modelPath);
    const gltf = useGLTF(modelUrl);
    scene = gltf.scene;
    console.log(`✓ Model loaded: ${modelUrl}`);
  } catch (error) {
    console.error(`✗ Failed to load model: ${modelPath}`, error);
    return null;
  }

  const clonedScene = useMemo(() => {
    const cloned = scene.clone(true);
    setLoaded(true);
    return cloned;
  }, [scene]);

  useEffect(() => {
    // Preload models using GitHub raw content CDN
    const models = [
      "/models/mahabalipuram.glb",
      "/models/qutub.glb",
      "/models/ellora.glb",
      "/models/hampi.glb",
      "/models/charminar.glb",
      "/models/boat.glb",
    ];

    models.forEach((modelPath) => {
      const filename = modelPath.split('/').pop();
      const modelUrl = `https://raw.githubusercontent.com/SURAJARS/surajPortfolio2.0/main/public/models/${filename}`;
      try {
        useGLTF.preload(modelUrl);
      } catch (error) {
        console.warn(`Could not preload ${modelUrl}:`, error);
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
