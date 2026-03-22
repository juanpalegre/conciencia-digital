import type { Metadata } from "next";
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
