"use client";

import Link from "next/link";

export default function WhatsAppUs() {
  return (
    <Link
      href="https://wa.me/919894018848" // Replace with the actual WhatsApp link
      className="fixed bottom-20 left-0 bg-green-500 hover:bg-green-600 text-white rounded-r-full px-4 py-3 shadow-lg flex items-center gap-3 transition-all duration-300 z-50 group"
      aria-label="WhatsApp us now"
      title="WhatsApp us now"
    >
      <img width="50" height="50" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="WhatsApp" className="w-5 h-5 order-1 shrink-0" />
      <span className="font-medium order-2 whitespace-nowrap hidden group-hover:block">WhatsApp Us</span>
    </Link>
  );
}
