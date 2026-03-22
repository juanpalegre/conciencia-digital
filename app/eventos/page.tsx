import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Eventos — ConCiencia Digital",
  description:
    "Capacitaciones y disertaciones de Juan Pablo en IA: Microsoft, Fusion Enercon, escuelas.",
};

export default function EventosPage() {
  const events = getEvents();
  const upcoming = events.filter((e) => e.frontmatter.upcoming);
  const past = events.filter((e) => !e.frontmatter.upcoming);

  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-teal-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h1 className="font-display text-4xl md:text-5xl text-black mb-4">
              Eventos
            </h1>
            <p className="font-body text-gray-text text-xl max-w-xl">
              Capacitaciones, disertaciones y talleres. Tres contextos distintos,
              el mismo enfoque: tecnología que sirve a las personas.
            </p>
          </div>
        </section>

        <section className="py-20 bg-bg">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
            {upcoming.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-black mb-6">
                  Próximos
                </h2>
                <div className="space-y-4">
                  {upcoming.map((e) => (
                    <div
                      key={e.slug}
                      className="bg-teal-light rounded-2xl px-6 py-4 flex items-center gap-4 border border-teal-mid"
                    >
                      <span className="text-xs font-body font-semibold bg-teal text-white px-2 py-0.5 rounded-full whitespace-nowrap">
                        Próximo
                      </span>
                      <div>
                        <p className="font-body text-xs text-gray-text">
                          {e.frontmatter.date} · {e.frontmatter.location}
                        </p>
                        <h3 className="font-display text-xl text-black">
                          {e.frontmatter.title}
                        </h3>
                        {e.frontmatter.description && (
                          <p className="font-body text-sm text-gray-text mt-1">
                            {e.frontmatter.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {past.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-black mb-6">
                  Realizados
                </h2>
                <div className="space-y-6">
                  {past.map((e) => (
                    <div
                      key={e.slug}
                      className="bg-white rounded-3xl overflow-hidden border border-teal-light shadow-sm"
                    >
                      <div
                        className={
                          e.frontmatter.image
                            ? "grid grid-cols-1 md:grid-cols-2"
                            : "p-8"
                        }
                      >
                        {e.frontmatter.image && (
                          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px]">
                            <Image
                              src={e.frontmatter.image}
                              alt={
                                e.frontmatter.imageAlt ?? e.frontmatter.title
                              }
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        )}
                        <div className="p-8 flex flex-col justify-center">
                          <p className="font-body text-xs text-gray-text mb-3">
                            {e.frontmatter.date} · {e.frontmatter.location}
                          </p>
                          <h3 className="font-display text-2xl text-black mb-3 leading-snug">
                            {e.frontmatter.title}
                          </h3>
                          {e.frontmatter.description && (
                            <p className="font-body text-sm text-gray-text leading-relaxed">
                              {e.frontmatter.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {events.length === 0 && (
              <p className="font-body text-gray-text">
                Próximamente nuevas fechas.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
