"use client";

import { useEffect, useState } from "react";

export function DebugInfo() {
  const [debug, setDebug] = useState<string[]>([]);

  useEffect(() => {
    const checkModels = async () => {
      const models = [
        "mahabalipuram.glb",
        "qutub.glb",
        "ellora.glb",
        "hampi.glb",
        "charminar.glb",
        "boat.glb",
      ];

      const status: string[] = [];
      for (const model of models) {
        try {
          // Use GitHub raw content CDN for reliable access
          const url = `https://raw.githubusercontent.com/SURAJARS/surajPortfolio2.0/main/public/models/${model}`;
          const response = await fetch(url, { method: "HEAD" });
          status.push(
            `${model}: ${response.ok ? "✓ Found" : "✗ Not Found (HTTP " + response.status + ")"}`,
          );
        } catch (error) {
          status.push(`${model}: ✗ Error`);
        }
      }
      setDebug(status);
    };

    checkModels();
  }, []);

  return (
    <div className="fixed bottom-20 right-8 bg-black/80 text-white text-xs p-4 rounded max-w-xs z-50 font-mono">
      <div className="font-bold mb-2">Model Status (CDN):</div>
      {debug.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}
