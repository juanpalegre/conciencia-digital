import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Eventos — ConCiencia Digital",
  description:
    "Capacitaciones pasadas y próximas de ConCiencia Digital sobre IA en educación.",
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
              Dónde estuvo y adónde va ConCiencia Digital.
            </p>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="bg-black py-2">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-3 gap-2">
              <div className="relative aspect-[4/3] col-span-2">
                <Image
                  src="/images/charla-docentes-1.jpeg"
                  alt="Taller IA en Educación — docentes en círculo de diálogo"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 66vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative aspect-square flex-1">
                  <Image
                    src="/images/equipo-escuela.jpeg"
                    alt="Con el equipo docente de la escuela"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </div>
                <div className="relative aspect-square flex-1">
                  <Image
                    src="/images/charla-docentes-2.jpeg"
                    alt="Facilitando charla sobre IA educativa"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                </div>
              </div>
            </div>
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
                    <EventCard key={e.slug} event={e.frontmatter} />
                  ))}
                </div>
              </div>
            )}

            {past.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-black mb-6">
                  Realizados
                </h2>
                <div className="space-y-4">
                  {past.map((e) => (
                    <EventCard key={e.slug} event={e.frontmatter} />
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

function EventCard({
  event,
}: {
  event: {
    title: string;
    date: string;
    location: string;
    upcoming?: boolean;
    description?: string;
  };
}) {
  return (
    <div className="bg-white rounded-2xl px-6 py-5 border border-teal-light">
      <div className="flex items-center gap-3 mb-1">
        {event.upcoming && (
          <span className="text-xs font-body font-semibold bg-teal text-white px-2 py-0.5 rounded-full">
            Próximo
          </span>
        )}
        <p className="font-body text-xs text-gray-text">
          {event.date} · {event.location}
        </p>
      </div>
      <h3 className="font-display text-xl text-black">{event.title}</h3>
      {event.description && (
        <p className="font-body text-sm text-gray-text mt-2">
          {event.description}
        </p>
      )}
    </div>
  );
}
