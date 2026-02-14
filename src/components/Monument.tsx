"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { usePathname } from "next/navigation";

interface MonumentProps {
  position: [number, number, number];
  modelPath: string;
  scale?: number;
}

export function Monument({ position, modelPath, scale = 1 }: MonumentProps) {
  const group = useRef<THREE.Group>(null);
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  // Determine basePath from current pathname
  const getBasePath = () => {
    if (pathname.startsWith("/surajPortfolio2.0")) {
      return "/surajPortfolio2.0";
    }
    return "";
  };

  const basePath = getBasePath();

  let scene: THREE.Group;
  try {
    const fullPath = `${basePath}${modelPath}`;
    const gltf = useGLTF(fullPath);
    scene = gltf.scene;
    console.log(`✓ Model loaded: ${fullPath}`);
  } catch (error) {
    console.error(`✗ Failed to load model: ${basePath}${modelPath}`, error);
    return null;
  }

  const clonedScene = useMemo(() => {
    const cloned = scene.clone(true);
    setLoaded(true);
    return cloned;
  }, [scene]);

  useEffect(() => {
    // Preload models with detailed logging
    const models = [
      "/models/mahabalipuram.glb",
      "/models/qutub.glb",
      "/models/ellora.glb",
      "/models/hampi.glb",
      "/models/charminar.glb",
      "/models/boat.glb",
    ];

    models.forEach((modelPath) => {
      const fullPath = `${basePath}${modelPath}`;
      try {
        useGLTF.preload(fullPath);
      } catch (error) {
        console.warn(`Could not preload ${fullPath}:`, error);
      }
    });
  }, [basePath]);

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
