import Link from "next/link";
import { RESOURCES } from "@/lib/config";

export function Resources() {
  const preview = RESOURCES.slice(0, 4);

  return (
    <section className="py-20 bg-white" id="recursos">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-black mb-2">
              Recursos gratuitos
            </h2>
            <p className="font-body text-gray-text text-lg">
              Materiales para llevar al aula, descargar y usar.
            </p>
          </div>
          <Link
            href="/recursos"
            className="hidden md:block font-body text-sm font-semibold text-teal hover:underline"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {preview.map((r) => (
            <div
              key={r.slug}
              className="bg-bg rounded-2xl p-6 flex flex-col justify-between gap-4 border border-teal-light"
            >
              <div>
                <h3 className="font-display text-lg text-black mb-2">
                  {r.title}
                </h3>
                <p className="font-body text-sm text-gray-text leading-relaxed">
                  {r.description}
                </p>
              </div>
              <a
                href={r.file}
                download
                className="inline-block font-body text-sm font-semibold text-teal hover:underline"
              >
                {r.fileLabel} ↓
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/recursos"
            className="font-body text-sm font-semibold text-teal hover:underline"
          >
            Ver todos los recursos →
          </Link>
        </div>
      </div>
    </section>
  );
}
