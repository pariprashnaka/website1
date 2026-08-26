"use client";

import dynamic from "next/dynamic";

const diagramComponents: Record<string, ReturnType<typeof dynamic>> = {
  DroneServiceDiagram: dynamic(() => import("@/components/DroneServiceDiagram"), { ssr: false }),
  SmartAgriculturePlatformDiagram: dynamic(() => import("@/components/SmartAgriculturePlatformDiagram"), { ssr: false }),
  SmartHrmsDiagram: dynamic(() => import("@/components/SmartHrmsDiagram"), { ssr: false }),
  SmartCafeDiagram: dynamic(() => import("@/components/SmartCafeDiagram")),
  CafeOwnerVisibilityScene: dynamic(() => import("@/components/CafeOwnerVisibilityScene"), { ssr: false }),
  SFInventoryDiagram: dynamic(() => import("@/components/SFInventoryDiagram"), { ssr: false }),
  SFLIMSDiagram: dynamic(() => import("@/components/SFLIMSDiagram"), { ssr: false }),
};

export default function ProductDiagramRenderer({ diagram }: { diagram?: string }) {
  if (!diagram || !diagramComponents[diagram]) {
    return <>PRODUCT SCREENSHOT PLACEHOLDER</>;
  }
  const DiagramComponent = diagramComponents[diagram];
  return <DiagramComponent />;
}
