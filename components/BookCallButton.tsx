"use client";

import { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import Magnetic from "./Magnetic";
import { trackEvent } from "@/lib/gtag";

export default function BookCallButton() {
  const [open, setOpen] = useState(false);
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  if (calLink) {
    return (
      <Magnetic>
        <Link
          href={calLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          onClick={() => trackEvent({ action: "book_call_click", category: "lead_gen", label: "cal_com" })}
        >
          Book a call
        </Link>
      </Magnetic>
    );
  }

  return (
    <>
      <Magnetic>
        <button onClick={() => setOpen(true)} className="btn btn-ghost">Book a call</button>
      </Magnetic>
      <Modal open={open} onClose={() => setOpen(false)} title="Calendar booking is on its way">
        We&apos;re wiring this up to live availability. For now, send us a note through the contact form and we&apos;ll reply with times that work.
      </Modal>
    </>
  );
}
