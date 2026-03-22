import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { PROPOSALS, COMPARISON_TABLE, WHATSAPP_GREETING } from "@/lib/config";

export const metadata: Metadata = {
  title: "Propuestas — ConCiencia Digital",
  description:
    "Dos propuestas de capacitación y acompañamiento en IA educativa para instituciones.",
};

function formatPrice(price: number) {
  return `$${price.toLocaleString("es-AR")}`;
}

function CheckIcon({ color = "teal" }: { color?: "teal" | "blue" }) {
  return (
    <span className={`font-semibold mt-0.5 ${color === "teal" ? "text-teal" : "text-blue"}`}>
      ✓
    </span>
  );
}

export default function PropuestasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-teal-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl text-black mb-4">
              Propuestas
            </h1>
            <p className="font-body text-gray-text text-xl leading-relaxed">
              Dos opciones según el momento y las necesidades de tu institución.
              Cada una está diseñada para un punto de partida distinto.
            </p>
          </div>
        </section>

        <section className="py-20 bg-bg">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">

            {/* Opción 1 */}
            <div className="bg-white rounded-3xl border-2 border-teal-mid overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div>
                    <p className="text-xs font-body font-semibold uppercase tracking-widest text-teal mb-2">
                      Opción 1
                    </p>
                    <h2 className="font-display text-3xl text-black leading-tight">
                      {PROPOSALS.opcion1.title}
                    </h2>
                    <p className="font-body text-gray-text italic mt-1">
                      {PROPOSALS.opcion1.subtitle}
                    </p>
                  </div>
                  <div className="md:text-right shrink-0">
                    <p className="font-body text-4xl font-semibold text-teal">
                      {formatPrice(PROPOSALS.opcion1.price)}
                    </p>
                    <p className="font-body text-xs text-gray-text mt-1">
                      {PROPOSALS.opcion1.duration} · {PROPOSALS.opcion1.group}
                    </p>
                  </div>
                </div>

                <p className="font-body text-gray-text text-lg leading-relaxed mb-10">
                  {PROPOSALS.opcion1.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  <div>
                    <h3 className="font-display text-lg text-black mb-4">
                      ¿Qué incluye?
                    </h3>
                    <ul className="space-y-3">
                      {PROPOSALS.opcion1.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-body text-sm text-gray-text">
                          <CheckIcon color="teal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-black mb-4">
                      ¿Qué se lleva cada docente?
                    </h3>
                    <ul className="space-y-3">
                      {PROPOSALS.opcion1.takeaway.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-body text-sm text-gray-text">
                          <CheckIcon color="teal" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-display text-lg text-black mb-4 mt-8">
                      ¿Para quién es?
                    </h3>
                    <ul className="space-y-3">
                      {PROPOSALS.opcion1.forWho.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-body text-sm text-gray-text">
                          <span className="text-teal mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-teal-light pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="font-body text-sm text-gray-text">
                    {PROPOSALS.opcion1.paymentNote}
                  </p>
                  <a
                    href={WHATSAPP_GREETING}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 bg-teal text-white font-body font-semibold px-8 py-3 rounded-full hover:bg-teal/90 transition-colors"
                  >
                    Me interesa esta opción
                  </a>
                </div>
              </div>
            </div>

            {/* Opción 2 */}
            <div className="bg-blue-light rounded-3xl border-2 border-blue overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div>
                    <p className="text-xs font-body font-semibold uppercase tracking-widest text-blue mb-2">
                      Opción 2
                    </p>
                    <h2 className="font-display text-3xl text-black leading-tight">
                      {PROPOSALS.opcion2.title}
                    </h2>
                    <p className="font-body text-gray-text italic mt-1">
                      {PROPOSALS.opcion2.subtitle}
                    </p>
                  </div>
                  <div className="md:text-right shrink-0">
                    <p className="font-body text-4xl font-semibold text-blue">
                      {formatPrice(PROPOSALS.opcion2.price)}
                    </p>
                    <p className="font-body text-xs text-gray-text mt-1">
                      {PROPOSALS.opcion2.duration} de proceso completo
                    </p>
                  </div>
                </div>

                <p className="font-body text-gray-text text-lg leading-relaxed mb-10">
                  {PROPOSALS.opcion2.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  <div>
                    <h3 className="font-display text-lg text-black mb-4">
                      ¿Qué incluye?
                    </h3>
                    <ul className="space-y-3">
                      {PROPOSALS.opcion2.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-body text-sm text-gray-text">
                          <CheckIcon color="blue" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-black mb-4">
                      ¿Qué se construye durante el proceso?
                    </h3>
                    <ul className="space-y-3">
                      {PROPOSALS.opcion2.builds.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-body text-sm text-gray-text">
                          <CheckIcon color="blue" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-display text-lg text-black mb-4 mt-8">
                      ¿Para quién es?
                    </h3>
                    <ul className="space-y-3">
                      {PROPOSALS.opcion2.forWho.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-body text-sm text-gray-text">
                          <span className="text-blue mt-0.5">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-blue/20 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="font-body text-sm text-gray-text">
                    {PROPOSALS.opcion2.paymentNote}
                  </p>
                  <a
                    href={WHATSAPP_GREETING}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 bg-blue text-white font-body font-semibold px-8 py-3 rounded-full hover:bg-blue/90 transition-colors"
                  >
                    Me interesa esta opción
                  </a>
                </div>
              </div>
            </div>

            {/* Comparativa */}
            <div>
              <h2 className="font-display text-2xl text-black mb-6">
                Comparativa
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full font-body text-sm">
                  <thead>
                    <tr className="border-b-2 border-teal-mid">
                      <th className="text-left py-3 pr-6 font-semibold text-black w-1/2"></th>
                      <th className="text-center py-3 px-4 font-semibold text-teal">
                        Opción 1 · Capacitación
                      </th>
                      <th className="text-center py-3 px-4 font-semibold text-blue">
                        Opción 2 · Acompañamiento
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_TABLE.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-teal-light ${i % 2 === 0 ? "bg-white" : "bg-bg"}`}
                      >
                        <td className="py-3 pr-6 text-gray-text">{row.feature}</td>
                        <td className="py-3 px-4 text-center text-gray-text">
                          {row.opcion1 === true ? (
                            <span className="text-teal font-semibold">✓</span>
                          ) : row.opcion1 === false ? (
                            <span className="text-gray-text/40">—</span>
                          ) : (
                            row.opcion1
                          )}
                        </td>
                        <td className="py-3 px-4 text-center text-gray-text">
                          {row.opcion2 === true ? (
                            <span className="text-blue font-semibold">✓</span>
                          ) : row.opcion2 === false ? (
                            <span className="text-gray-text/40">—</span>
                          ) : (
                            row.opcion2
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Próximos pasos */}
            <div className="bg-white rounded-2xl border border-teal-light p-8 max-w-2xl">
              <h2 className="font-display text-xl text-black mb-3">
                Próximos pasos
              </h2>
              <p className="font-body text-gray-text leading-relaxed mb-2">
                Si alguna de estas propuestas se ajusta a las necesidades de la
                institución, el siguiente paso es una conversación breve para
                conocer el contexto específico de la escuela y asegurarnos de
                que la propuesta elegida sea la más adecuada.
              </p>
              <p className="font-body text-gray-text italic">
                No hay compromiso en esa conversación. Solo claridad.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
