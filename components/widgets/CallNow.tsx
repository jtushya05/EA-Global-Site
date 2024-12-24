"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

export default function CallNow() {
  return (
    <Link
      href="tel:+919894018848"
className="fixed bottom-6 left-0 bg-blue-600 hover:bg-blue-700 text-white rounded-r-full px-4 py-3 shadow-lg flex items-center gap-3 transition-all duration-300 z-50 group"
      aria-label="Call us now"
      title="Call us now"
    >
      <Phone className="w-5 h-5 order-1 shrink-0" />
      <span className="font-medium order-2 whitespace-nowrap hidden group-hover:block">Call Now</span>
    </Link>
  );
}