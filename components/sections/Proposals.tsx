import Link from "next/link";
import { PROPOSALS } from "@/lib/config";

function formatPrice(price: number, currency: string) {
  return `$${price.toLocaleString("es-AR")} ${currency}`;
}

export function Proposals() {
  return (
    <section className="py-20 bg-bg" id="propuestas">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-3xl md:text-4xl text-black mb-4">
          Propuestas
        </h2>
        <p className="font-body text-gray-text text-lg mb-12 max-w-xl">
          Dos opciones según el momento y las necesidades de tu institución.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Opción 1 */}
          <div className="border-2 border-teal-mid rounded-2xl p-8 bg-white">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-teal mb-4">
              Opción 1
            </p>
            <h3 className="font-display text-2xl text-black mb-2">
              {PROPOSALS.opcion1.title}
            </h3>
            <p className="font-body text-3xl font-semibold text-teal mb-1">
              {formatPrice(PROPOSALS.opcion1.price, PROPOSALS.opcion1.currency)}
            </p>
            <p className="font-body text-sm text-gray-text mb-6">
              {PROPOSALS.opcion1.duration}
            </p>
            <p className="font-body text-gray-text leading-relaxed mb-6">
              {PROPOSALS.opcion1.description}
            </p>
            <ul className="space-y-2 mb-8">
              {PROPOSALS.opcion1.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-gray-text">
                  <span className="text-teal mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/propuestas"
              className="block text-center bg-teal text-white font-body font-semibold px-6 py-3 rounded-full hover:bg-teal/90 transition-colors"
            >
              Ver detalles
            </Link>
          </div>

          {/* Opción 2 */}
          <div className="border-2 border-blue rounded-2xl p-8 bg-blue-light">
            <p className="text-xs font-body font-semibold uppercase tracking-widest text-blue mb-4">
              Opción 2
            </p>
            <h3 className="font-display text-2xl text-black mb-2">
              {PROPOSALS.opcion2.title}
            </h3>
            <p className="font-body text-3xl font-semibold text-blue mb-1">
              {formatPrice(PROPOSALS.opcion2.price, PROPOSALS.opcion2.currency)}
            </p>
            <p className="font-body text-sm text-gray-text mb-6">
              {PROPOSALS.opcion2.duration}
            </p>
            <p className="font-body text-gray-text leading-relaxed mb-6">
              {PROPOSALS.opcion2.description}
            </p>
            <ul className="space-y-2 mb-8">
              {PROPOSALS.opcion2.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-gray-text">
                  <span className="text-blue mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/propuestas"
              className="block text-center bg-blue text-white font-body font-semibold px-6 py-3 rounded-full hover:bg-blue/90 transition-colors"
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
