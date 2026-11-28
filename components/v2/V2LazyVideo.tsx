"use client";
import { useEffect, useRef } from "react";

/** Loads the file only when near the viewport, plays while visible, pauses when not. Skips on Save-Data. */
export default function V2LazyVideo({ src, className, poster }: { src: string; className?: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    if (nav.connection?.saveData) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (!v.getAttribute("src")) v.setAttribute("src", src);
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  return <video ref={ref} className={className} poster={poster} muted loop playsInline preload="none" aria-hidden="true" />;
}
