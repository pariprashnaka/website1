/**
 * V2 layout — bypasses the existing Nav + Footer.
 * The floating pill nav lives inside each v2 page.
 */
import { Plus_Jakarta_Sans } from "next/font/google";
import "../../globals.css";
import "./v2.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={plusJakarta.variable} style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif" }}>
      {children}
    </div>
  );
}
