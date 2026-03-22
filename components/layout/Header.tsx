"use client";

import Link from "next/link";
import { useState } from "react";
import { WHATSAPP_GREETING } from "@/lib/config";

const NAV_LINKS = [
  { href: "/propuestas", label: "Propuestas" },
  { href: "/recursos", label: "Recursos" },
  { href: "/eventos", label: "Eventos" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-teal-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-xl text-teal hover:opacity-80 transition-opacity"
        >
          ConCiencia Digital
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-gray-text hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_GREETING}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-teal text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-teal/90 transition-colors"
          >
            Hablemos
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          className="md:hidden p-2 text-gray-text"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-teal-light px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-body text-sm font-medium text-gray-text border-b border-teal-light last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_GREETING}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center bg-teal text-white text-sm font-medium px-4 py-3 rounded-full"
          >
            Hablemos por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
