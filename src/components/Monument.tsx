"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

interface MonumentProps {
  position: [number, number, number];
  modelPath: string;
  scale?: number;
}

export function Monument({ position, modelPath, scale = 1 }: MonumentProps) {
  const group = useRef<THREE.Group>(null);
  const [gltf, setGltf] = useState<any>(null);

  // Use GitHub raw content CDN for reliable model hosting
  const getModelUrl = (path: string) => {
    const filename = path.split("/").pop();
    return `https://raw.githubusercontent.com/SURAJARS/surajPortfolio2.0/main/public/models/${filename}`;
  };

  const modelUrl = getModelUrl(modelPath);

  // Load model data on mount  
  useEffect(() => {
    let isMounted = true;

    const loadModel = async () => {
      try {
        // Preload to cache
        useGLTF.preload(modelUrl);
        
        // Then load normally
        const loadedGltf = await useGLTF(modelUrl);
        if (isMounted) {
          setGltf(loadedGltf);
          console.log(`✓ Model loaded: ${modelUrl}`);
        }
      } catch (err: any) {
        console.error(`✗ Failed to load model: ${err.message}`);
      }
    };

    loadModel();

    return () => {
      isMounted = false;
    };
  }, [modelUrl]);

  // If model hasn't loaded, don't render
  if (!gltf) {
    return null;
  }

  // Clone the scene once when model loads
  const clonedScene = gltf.scene.clone(true);

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
