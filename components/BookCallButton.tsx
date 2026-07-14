"use client";

import { useState } from "react";
import Modal from "./Modal";
import Magnetic from "./Magnetic";

export default function BookCallButton() {
  const [open, setOpen] = useState(false);
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
