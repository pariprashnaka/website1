"use client";
import { useEffect, useState } from "react";
import { feedback } from "./v2-feedback";

const MS = 3500;

export default function V2Feedback() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = feedback.length;

  useEffect(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), MS);
    return () => clearInterval(t);
  }, [paused, n]);

  if (!n) return null;
  return (
    <div className="v2-fb" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="v2-fb-stage">
        {feedback.map((f, k) => {
          const d = (k - i + n) % n;
          const cls = d === 0 ? "is-on" : d === n - 1 ? "is-out" : "is-wait";
          return (
            <figure key={k} className={`v2-fb-card ${cls}`} aria-hidden={d !== 0}>
              <blockquote>&ldquo;{f.quote}&rdquo;</blockquote>
              <figcaption><b>{f.name}</b> — {f.role}</figcaption>
            </figure>
          );
        })}
      </div>
      {n > 1 && (
        <div className="v2-fb-dots" role="tablist">
          {feedback.map((_, k) => (
            <button key={k} className={k === i ? "on" : ""} aria-label={`Feedback ${k + 1}`} onClick={() => setI(k)} />
          ))}
        </div>
      )}
    </div>
  );
}
