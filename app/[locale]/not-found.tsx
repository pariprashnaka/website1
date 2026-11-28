import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — SystemFriendly Labs",
  description: "The page you were looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <div className="mono text-[12px] mb-4" style={{ color: "var(--color-accent-cyan)" }}>404</div>
      <h1 className="text-[clamp(32px,4vw,48px)] leading-[1.1] mb-4">Page not found.</h1>
      <p className="text-[16px] max-w-[480px] leading-[1.6] mb-8" style={{ color: "var(--color-text-muted)" }}>
        The page you were looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/" className="btn btn-primary">Back to home</Link>
        <Link href="/services" className="btn btn-ghost">Our services</Link>
        <Link href="/contact" className="btn btn-ghost">Contact us</Link>
      </div>
    </div>
  );
}
