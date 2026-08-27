"use client";
import dynamic from "next/dynamic";

const screenComponents: Record<string, ReturnType<typeof dynamic>> = {
  // Drone
  PlantationHealthMap: dynamic(() => import("@/components/drone-screens/PlantationHealthMap")),
  SprayCoverageCard: dynamic(() => import("@/components/drone-screens/SprayCoverageCard")),
  ChemicalUsageCard: dynamic(() => import("@/components/drone-screens/ChemicalUsageCard")),
  // Agriculture
  DataSourcesStatusCard: dynamic(() => import("@/components/agri-platform-screens/DataSourcesStatusCard")),
  SoilHealthAlertCard: dynamic(() => import("@/components/agri-platform-screens/SoilHealthAlertCard")),
  ScaleStatCard: dynamic(() => import("@/components/agri-platform-screens/ScaleStatCard")),
  // HRMS
  PayrollBreakdownCard: dynamic(() => import("@/components/hrms-screens/PayrollBreakdownCard")),
  AttendanceTodayCard: dynamic(() => import("@/components/hrms-screens/AttendanceTodayCard")),
  WorkforceAnalyticsCard: dynamic(() => import("@/components/hrms-screens/WorkforceAnalyticsCard")),
  // Cafe
  OrderTrackingCard: dynamic(() => import("@/components/cafe-screens/OrderTrackingCard")),
  CafeDiscoveryCard: dynamic(() => import("@/components/cafe-screens/CafeDiscoveryCard")),
  SalesSnapshotCard: dynamic(() => import("@/components/cafe-screens/SalesSnapshotCard")),
  // SF Inventory
  SFInventoryKPICard: dynamic(() => import("@/components/sf-inventory-screens/SFInventoryKPICard")),
  SFInventoryStockCard: dynamic(() => import("@/components/sf-inventory-screens/SFInventoryStockCard")),
  SFInventorySalesCard: dynamic(() => import("@/components/sf-inventory-screens/SFInventorySalesCard")),
  // SF LIMS
  SFLIMSPatientCard: dynamic(() => import("@/components/sf-lims-screens/SFLIMSPatientCard")),
  SFLIMSQueueCard: dynamic(() => import("@/components/sf-lims-screens/SFLIMSQueueCard")),
  SFLIMSReportCard: dynamic(() => import("@/components/sf-lims-screens/SFLIMSReportCard")),
};

export default function ScreenRenderer({ name }: { name: string }) {
  const Component = screenComponents[name];
  if (!Component) return <span>SCREEN PLACEHOLDER</span>;
  return <Component />;
}
