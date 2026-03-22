import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { PROPOSALS, WHATSAPP_GREETING } from "@/lib/config";

export const metadata: Metadata = {
  title: "Propuestas — ConCiencia Digital",
  description:
    "Dos propuestas de capacitación y acompañamiento en IA educativa para instituciones.",
};

function formatPrice(price: number, currency: string) {
  return `$${price.toLocaleString("es-AR")} ${currency}`;
}

export default function PropuestasPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-teal-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h1 className="font-display text-4xl md:text-5xl text-black mb-4">
              Propuestas
            </h1>
            <p className="font-body text-gray-text text-xl max-w-xl">
              Dos opciones según el momento y las necesidades de tu institución.
              Ambas incluyen acompañamiento real, no solo una charla.
            </p>
          </div>
        </section>

        <section className="py-20 bg-bg">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
            {/* Opción 1 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-teal-mid">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <p className="text-xs font-body font-semibold uppercase tracking-widest text-teal mb-2">
                    Opción 1
                  </p>
                  <h2 className="font-display text-3xl text-black">
                    {PROPOSALS.opcion1.title}
                  </h2>
                  <p className="font-body text-gray-text mt-1">
                    {PROPOSALS.opcion1.duration}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-body text-4xl font-semibold text-teal">
                    {formatPrice(
                      PROPOSALS.opcion1.price,
                      PROPOSALS.opcion1.currency
                    )}
                  </p>
                </div>
              </div>
              <p className="font-body text-gray-text text-lg leading-relaxed mb-8">
                {PROPOSALS.opcion1.description}
              </p>
              <h3 className="font-display text-lg text-black mb-4">
                Qué incluye
              </h3>
              <ul className="space-y-3 mb-10">
                {PROPOSALS.opcion1.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-gray-text"
                  >
                    <span className="text-teal font-semibold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_GREETING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-teal/90 transition-colors"
              >
                Me interesa esta opción
              </a>
            </div>

            {/* Opción 2 */}
            <div className="bg-blue-light rounded-3xl p-8 md:p-12 border-2 border-blue">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <p className="text-xs font-body font-semibold uppercase tracking-widest text-blue mb-2">
                    Opción 2
                  </p>
                  <h2 className="font-display text-3xl text-black">
                    {PROPOSALS.opcion2.title}
                  </h2>
                  <p className="font-body text-gray-text mt-1">
                    {PROPOSALS.opcion2.duration}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-body text-4xl font-semibold text-blue">
                    {formatPrice(
                      PROPOSALS.opcion2.price,
                      PROPOSALS.opcion2.currency
                    )}
                  </p>
                </div>
              </div>
              <p className="font-body text-gray-text text-lg leading-relaxed mb-8">
                {PROPOSALS.opcion2.description}
              </p>
              <h3 className="font-display text-lg text-black mb-4">
                Qué incluye
              </h3>
              <ul className="space-y-3 mb-10">
                {PROPOSALS.opcion2.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-gray-text"
                  >
                    <span className="text-blue font-semibold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_GREETING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-blue/90 transition-colors"
              >
                Me interesa esta opción
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
