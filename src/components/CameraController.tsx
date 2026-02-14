"use client";

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";

export function ScrollCamera() {
  const { camera } = useThree();
  const targetZ = useRef(10);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? scrolled / scrollHeight : 0;

      // Camera moves from z: 10 to z: -90
      targetZ.current = 10 + progress * -100;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animate = () => {
      // Smooth lerp interpolation
      camera.position.z += (targetZ.current - camera.position.z) * 0.1;
      requestAnimationFrame(animate);
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [camera]);

  return null;
}
