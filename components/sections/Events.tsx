import Link from "next/link";
import type { ContentItem, EventFrontmatter } from "@/lib/content";

interface Props {
  events: ContentItem<EventFrontmatter>[];
}

export function Events({ events }: Props) {
  const preview = events.slice(0, 3);

  return (
    <section className="py-20 bg-bg" id="eventos">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-black mb-2">
              Eventos
            </h2>
            <p className="font-body text-gray-text text-lg">
              Capacitaciones realizadas y próximas fechas.
            </p>
          </div>
          <Link
            href="/eventos"
            className="hidden md:block font-body text-sm font-semibold text-teal hover:underline"
          >
            Ver todos →
          </Link>
        </div>

        {preview.length === 0 ? (
          <p className="font-body text-gray-text">Próximamente nuevas fechas.</p>
        ) : (
          <div className="space-y-4">
            {preview.map((e) => (
              <div
                key={e.slug}
                className="bg-white rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-teal-light"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    {e.frontmatter.upcoming && (
                      <span className="text-xs font-body font-semibold bg-teal text-white px-2 py-0.5 rounded-full">
                        Próximo
                      </span>
                    )}
                    <p className="font-body text-xs text-gray-text">
                      {e.frontmatter.date} · {e.frontmatter.location}
                    </p>
                  </div>
                  <h3 className="font-display text-lg text-black">
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
        )}
      </div>
    </section>
  );
}
