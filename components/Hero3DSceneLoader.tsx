"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const placeholder = <div className="w-full h-full" style={{ background: "var(--color-bg-secondary)" }} />;

const Hero3DScene = dynamic(() => import("@/components/Hero3DScene"), {
  ssr: false,
  loading: () => placeholder,
});

export default function Hero3DSceneLoader() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  if (!isDesktop) return placeholder;

  return <Hero3DScene />;
}
