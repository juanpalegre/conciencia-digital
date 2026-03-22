import Link from "next/link";
import Image from "next/image";
import type { ContentItem, EventFrontmatter } from "@/lib/content";

interface Props {
  events: ContentItem<EventFrontmatter>[];
}

export function Events({ events }: Props) {
  const past = events.filter((e) => !e.frontmatter.upcoming);
  const upcoming = events.filter((e) => e.frontmatter.upcoming);

  // Featured event: the one with an image, preferring Microsoft
  const featured =
    past.find((e) => e.slug === "microsoft-centros-excelencia") ??
    past.find((e) => e.frontmatter.image) ??
    past[0];

  const rest = past.filter((e) => e.slug !== featured?.slug);

  return (
    <section className="py-20 bg-bg" id="eventos">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-black mb-2">
              Eventos
            </h2>
            <p className="font-body text-gray-text text-lg">
              Dónde estuve y de qué hablé.
            </p>
          </div>
          <Link
            href="/eventos"
            className="hidden md:block font-body text-sm font-semibold text-teal hover:underline"
          >
            Ver todos →
          </Link>
        </div>

        {/* Featured event — big card with photo */}
        {featured && (
          <div className="mb-6 bg-white rounded-3xl overflow-hidden border border-teal-light shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
                <Image
                  src={featured.frontmatter.image ?? "/images/presentacion-microsoft.jpeg"}
                  alt={featured.frontmatter.imageAlt ?? featured.frontmatter.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-teal mb-3">
                  Destacado
                </p>
                <h3 className="font-display text-2xl text-black mb-2 leading-snug">
                  {featured.frontmatter.title}
                </h3>
                <p className="font-body text-xs text-gray-text mb-4">
                  {featured.frontmatter.date} · {featured.frontmatter.location}
                </p>
                {featured.frontmatter.description && (
                  <p className="font-body text-sm text-gray-text leading-relaxed">
                    {featured.frontmatter.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Rest of past events */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {rest.map((e) => (
              <div
                key={e.slug}
                className="bg-white rounded-2xl overflow-hidden border border-teal-light"
              >
                {e.frontmatter.image && (
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={e.frontmatter.image}
                      alt={e.frontmatter.imageAlt ?? e.frontmatter.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="px-5 py-4">
                  <p className="font-body text-xs text-gray-text mb-1">
                    {e.frontmatter.date} · {e.frontmatter.location}
                  </p>
                  <h3 className="font-display text-lg text-black leading-snug">
                    {e.frontmatter.title}
                  </h3>
                  {e.frontmatter.description && (
                    <p className="font-body text-xs text-gray-text mt-2 leading-relaxed">
                      {e.frontmatter.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upcoming */}
        {upcoming.length > 0 && (
          <div className="space-y-3">
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
                  <h3 className="font-display text-base text-black">
                    {e.frontmatter.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
