"use client";
import { useEffect, useState } from "react";
import NetworkDiagram from "@/components/NetworkDiagram";

export default function NetworkDiagramLoader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full aspect-square">
      {/* Placeholder always visible underneath, hides the flash */}
      <div
        className="absolute inset-0 rounded-[32px]"
        style={{
          background: mounted ? "transparent" : "var(--color-card)",
          border: "1px solid var(--color-border)",
          boxShadow: "0 30px 70px rgba(15,23,42,0.14)",
          transition: "background 0.3s ease",
          zIndex: mounted ? -1 : 1,
        }}
      />
      {mounted && <NetworkDiagram />}
    </div>
  );
}
