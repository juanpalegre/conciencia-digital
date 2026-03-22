import Link from "next/link";
import { WHATSAPP_GREETING } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-display text-lg text-white mb-2">
              ConCiencia Digital
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Capacitación y acompañamiento en tecnología educativa para
              docentes e instituciones.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
              Navegación
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/propuestas", label: "Propuestas" },
                { href: "/recursos", label: "Recursos" },
                { href: "/eventos", label: "Eventos" },
                { href: "/contacto", label: "Contacto" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
              Contacto
            </p>
            <a
              href={WHATSAPP_GREETING}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-teal-mid hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-white/30">
          © {new Date().getFullYear()} ConCiencia Digital — Juan Pablo
        </div>
      </div>
    </footer>
  );
}
