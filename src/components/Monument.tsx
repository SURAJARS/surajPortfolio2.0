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
  const { scene } = useGLTF(modelPath);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    // Preload models
    useGLTF.preload("/models/mahabalipuram.glb");
    useGLTF.preload("/models/qutub.glb");
    useGLTF.preload("/models/ellora.glb");
    useGLTF.preload("/models/hampi.glb");
    useGLTF.preload("/models/charminar.glb");
    useGLTF.preload("/models/boat.glb");
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
