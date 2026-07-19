import { Layers, Grid2x2, Sparkles, Smartphone, Globe, Users, Zap, Cloud, BarChart3 } from "lucide-react";
import type { Service } from "@/lib/content";

const iconMap = {
  layers: Layers,
  grid: Grid2x2,
  sparkles: Sparkles,
  smartphone: Smartphone,
  globe: Globe,
  users: Users,
  zap: Zap,
  cloud: Cloud,
  barChart: BarChart3,
};

export default function ServiceIcon({ icon, accent }: { icon: Service["icon"]; accent?: string }) {
  const Icon = iconMap[icon];
  const color = accent || "var(--color-accent-cyan)";
  return (
    <div
      className="w-[38px] h-[38px] rounded-lg flex items-center justify-center mb-5 border transition-transform duration-300 ease-out group-hover:rotate-[-8deg] group-hover:scale-110"
      style={{
        background: accent ? `${accent}1A` : "linear-gradient(160deg, rgba(59,130,246,0.10), rgba(0,212,255,0.04))",
        borderColor: "var(--color-border)",
      }}
    >
      <Icon size={19} strokeWidth={1.6} color={color} />
    </div>
  );
}
