"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";

const schema = z.object({
  email: z.string().email("Enter a valid email."),
  message: z.string().min(1, "Tell us a line about it."),
});
type FormData = z.infer<typeof schema>;

const SHOW_DELAY_MS = 15000;
const SESSION_KEY = "nexora_popup_shown";
const CAPTURED_KEY = "nexora_lead_captured";

export default function LeadPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const close = useCallback(() => {
    setOpen(false);
    if (typeof window !== "undefined") window.sessionStorage.setItem(SESSION_KEY, "1");
  }, []);

  useEffect(() => {
    if (pathname === "/contact") return;
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(CAPTURED_KEY)) return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  async function onSubmit(data: FormData) {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, name: "Website visitor (popup)", source: "timed-popup" }),
      });
      if (!res.ok) throw new Error("failed");
      window.localStorage.setItem(CAPTURED_KEY, "1");
      window.sessionStorage.setItem(SESSION_KEY, "1");
      setSubmitted(true);
      setTimeout(() => setOpen(false), 2200);
    } catch {
      setServerError("Couldn't send that — try again, or reach us at hello@nexorasystems.com.");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[500] flex items-center justify-center p-6"
          style={{ background: "rgba(5,7,10,0.72)", backdropFilter: "blur(6px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          role="dialog"
          aria-modal="true"
          aria-label="Tell us what you're building"
        >
          <motion.div
            className="panel relative w-full max-w-[440px] p-9"
            initial={{ scale: 0.92, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.94, y: 12, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <button onClick={close} aria-label="Close" className="absolute top-5 right-5 opacity-60 hover:opacity-100 transition-opacity">
              <X size={18} color="var(--color-text-white)" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center mx-auto mb-4 border" style={{ background: "rgba(34,197,94,0.12)", borderColor: "var(--color-success)" }}>✓</div>
                <h3 className="text-[18px] mb-1.5">Got it.</h3>
                <p className="text-[13.5px]" style={{ color: "var(--color-text-muted)" }}>We&apos;ll follow up within two business days.</p>
              </div>
            ) : (
              <>
                <span className="eyebrow">Before you dive deeper</span>
                <h3 className="text-[21px] mt-3 mb-2 leading-[1.25]">What are you trying to solve?</h3>
                <p className="text-[13.5px] leading-[1.6] mb-6" style={{ color: "var(--color-text-muted)" }}>
                  Tell us in a line, and we&apos;ll tell you honestly whether we&apos;re the right fit — no sales call required.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-4">
                    <input {...register("email")} autoFocus placeholder="you@company.com" style={{ width: "100%", padding: "12px 14px", background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, color: "var(--color-text-white)", fontSize: 14 }} />
                    {errors.email && <div className="text-[12px] mt-1.5" style={{ color: "var(--color-danger)" }}>{errors.email.message}</div>}
                  </div>
                  <div className="mb-5">
                    <input {...register("message")} placeholder="e.g. Our inventory data lives in three spreadsheets" style={{ width: "100%", padding: "12px 14px", background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, color: "var(--color-text-white)", fontSize: 14 }} />
                    {errors.message && <div className="text-[12px] mt-1.5" style={{ color: "var(--color-danger)" }}>{errors.message.message}</div>}
                  </div>
                  {serverError && <p className="text-[12.5px] mb-4" style={{ color: "var(--color-danger)" }}>{serverError}</p>}
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full justify-center mb-3">
                    {isSubmitting ? "Sending…" : "Get a straight answer"}
                  </button>
                  <button type="button" onClick={close} className="w-full text-center text-[12.5px] py-1" style={{ color: "var(--color-text-muted)" }}>
                    No thanks, just browsing
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
