"use client";

import { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import Magnetic from "./Magnetic";
import { trackEvent } from "@/lib/gtag";

export default function BookCallButton() {
  return (
    <Magnetic>
      <Link
        href="/contact#schedule"
        className="btn btn-ghost"
        onClick={() => trackEvent({ action: "book_call_click", category: "lead_gen", label: "schedule_meeting" })}
      >
        Book a call
      </Link>
    </Magnetic>
  );
}
