"use client";

import { useEffect, useState } from "react";

export function DebugInfo() {
  const [debug, setDebug] = useState<string[]>([]);

  useEffect(() => {
    const checkModels = async () => {
      const models = [
        "/models/mahabalipuram.glb",
        "/models/qutub.glb",
        "/models/ellora.glb",
        "/models/hampi.glb",
        "/models/charminar.glb",
        "/models/boat.glb",
      ];

      const status: string[] = [];
      for (const model of models) {
        try {
          const response = await fetch(model, { method: "HEAD" });
          status.push(`${model}: ${response.ok ? "✓ Found" : "✗ Not Found"}`);
        } catch (error) {
          status.push(`${model}: ✗ Error - ${error}`);
        }
      }
      setDebug(status);
    };

    checkModels();
  }, []);

  return (
    <div className="fixed bottom-20 right-8 bg-black/80 text-white text-xs p-4 rounded max-w-xs z-50 font-mono">
      <div className="font-bold mb-2">Model Status:</div>
      {debug.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}
