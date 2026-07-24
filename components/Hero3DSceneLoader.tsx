"use client";
import dynamic from "next/dynamic";

const Hero3DScene = dynamic(() => import("@/components/Hero3DScene"), {
  ssr: false,
  loading: () => <div className="w-full h-full" style={{ background: "var(--color-bg-secondary)" }} />,
});

export default function Hero3DSceneLoader() {
  return <Hero3DScene />;
}
