"use client";

import { motion } from "framer-motion";

export default function RevealText({
  text,
  className,
  onMount = false,
}: {
  text: string;
  className?: string;
  onMount?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            {...(onMount
              ? { animate: { y: 0, opacity: 1 } }
              : { whileInView: { y: 0, opacity: 1 }, viewport: { once: true, amount: 0.01, margin: "0px 0px -10% 0px" } })}
            transition={{ duration: 0.5, delay: i * 0.025, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}
