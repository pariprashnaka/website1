"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [state, setState] = useState({ mounted: false, isDark: false, showHint: false });

  useEffect(() => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const hasSeenHint = localStorage.getItem("sfl-theme-hint-seen");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading browser-only APIs (localStorage, DOM attribute) for hydration-safe initial state; unavoidable here since these aren't available during SSR
    setState({ mounted: true, isDark, showHint: false });

    if (!hasSeenHint) {
      const timer = setTimeout(() => {
        setState((s) => ({ ...s, showHint: true }));
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismissHint() {
    setState((s) => ({ ...s, showHint: false }));
    localStorage.setItem("sfl-theme-hint-seen", "1");
  }

  function toggle() {
    const next = !state.isDark;
    setState((s) => ({ ...s, isDark: next, showHint: false }));
    if (state.showHint) localStorage.setItem("sfl-theme-hint-seen", "1");
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("sfl-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("sfl-theme", "light");
    }
  }

  if (!state.mounted) {
    return <div className="w-[38px] h-[38px] rounded-full" style={{ background: "var(--color-bg-secondary)" }} />;
  }

  return (
    <div className="relative">
      <button
        onClick={toggle}
        title={state.isDark ? "Switch to light mode" : "Switch to dark reading mode"}
        aria-label={state.isDark ? "Switch to light mode" : "Switch to dark reading mode"}
        className="w-[38px] h-[38px] rounded-full flex items-center justify-center transition-colors relative"
        style={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)" }}
      >
        {state.showHint && (
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: "var(--color-accent-blue)", opacity: 0.3 }}
          />
        )}
        {state.isDark ? <Sun size={16} color="var(--color-text-soft)" /> : <Moon size={16} color="var(--color-text-soft)" />}
      </button>

      {state.showHint && (
        <div
          className="absolute top-[46px] right-0 z-[250] w-[190px] rounded-xl p-3.5 text-[12.5px] leading-[1.5] shadow-lg"
          style={{ background: "var(--color-card)", border: "1px solid var(--color-border)", color: "var(--color-text-soft)" }}
        >
          Prefer reading in the dark? Tap here anytime to switch.
          <button
            onClick={dismissHint}
            className="block mt-2 text-[11px] font-medium"
            style={{ color: "var(--color-accent-blue)" }}
          >
            Got it
          </button>
        </div>
      )}
    </div>
  );
}
