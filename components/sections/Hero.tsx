import Link from "next/link";
import { WHATSAPP_GREETING } from "@/lib/config";

export function Hero() {
  return (
    <section className="bg-teal-light py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-teal font-body text-sm font-semibold uppercase tracking-widest mb-4">
            ConCiencia Digital
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-black leading-tight mb-6">
            Tecnología con propósito para docentes y escuelas.
          </h1>
          <p className="font-body text-lg text-gray-text leading-relaxed mb-10 max-w-xl">
            La IA llegó sin que nadie avisara. ConCiencia Digital acompaña a
            instituciones educativas a integrar tecnología con sentido
            pedagógico y valores humanos.
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
      </div>
    </section>
  );
}
