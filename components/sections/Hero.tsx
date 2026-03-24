import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_GREETING } from "@/lib/config";

export function Hero() {
  return (
    <section className="bg-teal-light py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-teal font-body text-sm font-semibold uppercase tracking-widest mb-4">
              ConCiencia Digital
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-black leading-tight mb-6">
              Tecnología con propósito para docentes y escuelas.
            </h1>
            <p className="font-body text-lg text-gray-text leading-relaxed mb-10">
              La IA ya se está usando en las escuelas.
              La diferencia está en cómo.
              Acompaño a equipos docentes a integrarla de forma clara, útil y sin complicaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_GREETING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal text-white font-body font-semibold px-8 py-4 rounded-full text-base hover:bg-teal/90 transition-colors text-center"
              >
                Contame más
              </a>
              <Link
                href="/propuestas"
                className="inline-block border-2 border-teal text-teal font-body font-semibold px-8 py-4 rounded-full text-base hover:bg-teal/5 transition-colors text-center"
              >
                Ver propuestas
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/charla-docentes-2.jpeg"
                alt="Juan Pablo facilitando una charla sobre IA en educación con docentes"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Caption badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-md px-4 py-3 max-w-[220px]">
              <p className="font-body text-xs text-gray-text leading-snug">
                <span className="font-semibold text-teal">IA en Educación</span>
                {" "}— taller con docentes, GBA 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
