/**
 * V2 layout — bypasses the existing Nav + Footer (those live in the
 * (main) route group now). Loads Instrument Serif (display) + Inter
 * (body) for the Apple-style redesign.
 */
import { Instrument_Serif } from "next/font/google";
import V2Nav from "@/components/v2/V2Nav";
import V2Footer from "@/components/v2/V2Footer";
import "../../globals.css";
import "./v2.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${instrumentSerif.variable} v2-root`}>
      <V2Nav />
      {children}
      <V2Footer />
    </div>
  );
}
