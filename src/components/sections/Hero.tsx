"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useEffect, useState, useRef, Suspense } from "react";
import { Monument } from "@/components/Monument";
import { Ground, Lighting } from "@/components/SceneEnvironment";
import { ScrollCamera } from "@/components/CameraController";
import { EnterButton, AudioToggle } from "@/components/HeroControls";
import { motion } from "framer-motion";

const monuments = [
  {
    path: "/models/mahabalipuram.glb",
    position: [0, 0, -10],
    label: "",
  },
  { path: "/models/qutub.glb", position: [0, 0, -25], label: "" },
  { path: "/models/ellora.glb", position: [0, 0, -40], label: "" },
  {
    path: "/models/hampi.glb",
    position: [0, 0, -55],
    label: "",
  },
  { path: "/models/charminar.glb", position: [0, 0, -70], label: "" },
  {
    path: "/models/boat.glb",
    position: [0, 0, -85],
    label: "Thanks for visiting",
  },
];

function Scene() {
  return (
    <>
      {/* Environment with sunset preset */}
      <Environment preset="sunset" />

      {/* Lighting */}
      <Lighting />

      {/* Monuments */}
      {monuments.map((monument, index) => (
        <Monument
          key={index}
          modelPath={monument.path}
          position={monument.position as [number, number, number]}
          scale={3}
        />
      ))}

      {/* Ground plane */}
      <Ground />

      {/* Camera controller */}
      <ScrollCamera />
    </>
  );
}

function MonumentOverlay({
  label,
  scrollPercent,
}: {
  label: string;
  scrollPercent: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      // Show label when within ±10% of monument position
      const isVisible = Math.abs(currentProgress - scrollPercent) < 0.1;
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPercent]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto"
    >
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
          {label}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto" />
      </div>
    </motion.div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen" style={{ height: "100vh" }}>
      {/* 3D Canvas */}
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
        }}
        dpr={[1, 1.5]}
        camera={{
          position: [0, 15, 10],
          fov: 75,
          near: 0.1,
          far: 500,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
        }}
        shadows
      >
        <color attach="background" args={["#f8efe2"]} />
        <fog attach="fog" args={["#f8efe2", 15, 120]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      {/* Scroll Container */}
      <div className="relative h-[500vh] w-full pointer-events-none">
        {/* Monument Overlays */}
        {monuments.map((monument, index) => {
          const scrollPercent = (index + 1) / monuments.length;
          return (
            <MonumentOverlay
              key={index}
              label={monument.label}
              scrollPercent={scrollPercent}
            />
          );
        })}
      </div>

      {/* Controls */}
      <EnterButton />
      <AudioToggle />
    </div>
  );
}
