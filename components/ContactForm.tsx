"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Magnetic from "./Magnetic";
import { trackEvent } from "@/lib/gtag";

const schema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Tell us a little about the project."),
  website: z.string().optional(), // honeypot — must stay empty
});

type FormData = z.infer<typeof schema>;

const services = [
  "SaaS Development", "ERP Solutions", "AI Solutions", "Mobile Application", "Web Application",
  "CRM System", "Business Automation", "Cloud Engineering", "Data Engineering", "Not sure yet",
];

const inputStyle = {
  width: "100%", padding: "13px 14px", background: "var(--color-card)",
  border: "1px solid var(--color-border)", borderRadius: 8, color: "var(--color-text-white)", fontSize: 14,
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      if (typeof window !== "undefined") window.localStorage.setItem("sfl_lead_captured", "1");
      trackEvent({ action: "lead_captured", category: "lead_gen", label: "contact_form" });
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong sending your message. Please try again, or email us directly.");
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center mx-auto mb-5 border"
          style={{ background: "rgba(34,197,94,0.12)", borderColor: "var(--color-success)" }}
        >
          ✓
        </div>
        <h3 className="mb-2">Message sent</h3>
        <p style={{ color: "var(--color-text-muted)" }}>
          Thanks — we&apos;ve received your brief and will reply within two business days with real next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* honeypot — hidden from real users, bots that auto-fill every field will trip it */}
      <input
        {...register("website")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      <Field label="Full name" error={errors.name?.message}>
        <input {...register("name")} style={inputStyle} placeholder="Jane Doe" />
      </Field>
      <Field label="Work email" error={errors.email?.message}>
        <input {...register("email")} style={inputStyle} placeholder="you@company.com" />
      </Field>
      <Field label="Company">
        <input {...register("company")} style={inputStyle} placeholder="Company name (optional)" />
      </Field>
      <Field label="What do you need?">
        <select {...register("service")} style={inputStyle}>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </Field>
      <Field label="Project brief" error={errors.message?.message}>
        <textarea {...register("message")} style={{ ...inputStyle, minHeight: 120, resize: "vertical" }} placeholder="What problem are you trying to solve?" />
      </Field>

      {serverError && <p className="text-[13px] mb-4" style={{ color: "var(--color-danger)" }}>{serverError}</p>}

      <Magnetic className="w-full">
        <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full justify-center">
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
      </Magnetic>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <label className="block text-[13px] mb-2 mono" style={{ color: "var(--color-text-soft)" }}>{label}</label>
      {children}
      {error && <div className="text-[12px] mt-1.5" style={{ color: "var(--color-danger)" }}>{error}</div>}
    </div>
  );
}
