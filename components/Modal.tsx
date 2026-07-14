"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

export default function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[400] flex items-center justify-center p-6"
          style={{ background: "rgba(5,7,10,0.75)", backdropFilter: "blur(4px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="panel p-10 max-w-[420px] text-center"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h3 className="text-[19px] mb-3">{title}</h3>
            <div className="text-[14px] mb-6 leading-[1.6]" style={{ color: "var(--color-text-muted)" }}>
              {children}
            </div>
            <Link href="/contact" className="btn btn-primary w-full justify-center">
              Go to contact form
            </Link>
            <div className="mt-3">
              <button onClick={onClose} className="btn btn-ghost w-full justify-center">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
