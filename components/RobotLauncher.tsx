"use client";

import { useEffect, useRef, useState } from "react";

export default function RobotLauncher({ isOpen }: { isOpen: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxOffset = 1.6;
      const scale = dist === 0 ? 0 : Math.min(maxOffset / dist, 1) * (dist > 400 ? 0.3 : 1);
      setEyeOffset({ x: dx * scale * 0.02, y: dy * scale * 0.02 });
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  if (isOpen) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 6L18 18M18 6L6 18" stroke="var(--color-bg-primary)" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ width: 32, height: 32, animation: "robotBob 2.6s ease-in-out infinite" }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <line x1="16" y1="6" x2="16" y2="2" stroke="var(--color-bg-primary)" strokeWidth="1.6" strokeLinecap="round" style={{ transformOrigin: "16px 6px", animation: "antennaSway 2.6s ease-in-out infinite" }} />
        <circle cx="16" cy="2" r="1.6" fill="var(--color-accent-cyan)" style={{ animation: "antennaGlow 1.8s ease-in-out infinite" }} />

        <rect x="5" y="7" width="22" height="19" rx="7" fill="var(--color-bg-primary)" />

        <circle cx="12.5" cy="16" r="3.6" fill="var(--color-card)" />
        <circle cx="19.5" cy="16" r="3.6" fill="var(--color-card)" />

        <circle
          cx={12.5 + eyeOffset.x}
          cy={16 + eyeOffset.y}
          r={isHovering ? 1.9 : 1.6}
          fill="var(--color-accent-cyan)"
          style={{ transition: "r 0.2s ease" }}
        />
        <circle
          cx={19.5 + eyeOffset.x}
          cy={16 + eyeOffset.y}
          r={isHovering ? 1.9 : 1.6}
          fill="var(--color-accent-cyan)"
          style={{ transition: "r 0.2s ease" }}
        />

        <path
          d={isHovering ? "M12 21.5Q16 25 20 21.5" : "M13 21.5Q16 23 19 21.5"}
          stroke="var(--color-card)"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          style={{ transition: "d 0.2s ease" }}
        />
      </svg>

      <style>{`
        @keyframes robotBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes antennaSway {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes antennaGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
