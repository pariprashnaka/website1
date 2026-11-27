/**
 * V2 layout — bypasses the existing Nav + Footer (those live in the
 * (main) route group now). Loads Instrument Serif (display) + Inter
 * (body) for the Apple-style redesign.
 */
import { Instrument_Serif, Inter } from "next/font/google";
import "../../globals.css";
import "./v2.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${instrumentSerif.variable} ${inter.variable}`}>
      {children}
    </div>
  );
}
