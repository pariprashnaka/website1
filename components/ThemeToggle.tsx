"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("sfl-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("sfl-theme", "light");
    }
  }

  if (!mounted) {
    return <div className="w-[38px] h-[38px] rounded-full" style={{ background: "var(--color-bg-secondary)" }} />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark reading mode"}
      className="w-[38px] h-[38px] rounded-full flex items-center justify-center transition-colors"
      style={{ background: "var(--color-bg-secondary)", border: "1px solid var(--color-border)" }}
    >
      {isDark ? <Sun size={16} color="var(--color-text-soft)" /> : <Moon size={16} color="var(--color-text-soft)" />}
    </button>
  );
}
