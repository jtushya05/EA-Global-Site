"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

export default function CallNow() {
  return (
    <Link
      href="tel:+919894018848"
      className="fixed bottom-6 right-0 bg-green-600 hover:bg-green-700 text-white rounded-l-full px-4 py-3 shadow-lg flex items-center gap-3 transition-all duration-300 z-50 slide-in focus:translate-x-0 focus:opacity-100"
      aria-label="Call us now"
      title="Call us now"
    >
      <span className="font-medium order-2 whitespace-nowrap">Call Now</span>
      <Phone className="w-5 h-5 order-1 shrink-0" />
    </Link>
  );
}
