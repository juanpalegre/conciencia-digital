import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RESOURCES } from "@/lib/config";

export const metadata: Metadata = {
  title: "Recursos — ConCiencia Digital",
  description:
    "Materiales gratuitos sobre IA en educación: actividades, guías y presentaciones para llevar al aula.",
};

export default function RecursosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-teal-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h1 className="font-display text-4xl md:text-5xl text-black mb-4">
              Recursos gratuitos
            </h1>
            <p className="font-body text-gray-text text-xl max-w-xl">
              Materiales para descargar y usar directamente en el aula o en
              reuniones institucionales. Sin registro, sin costo.
            </p>
          </div>
        </section>

        <section className="py-20 bg-bg">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {RESOURCES.map((r) => (
                <div
                  key={r.slug}
                  className="bg-white rounded-2xl p-8 flex flex-col justify-between gap-6 border border-teal-light"
                >
                  <div>
                    <h2 className="font-display text-xl text-black mb-3">
                      {r.title}
                    </h2>
                    <p className="font-body text-gray-text leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                  <a
                    href={r.file}
                    download
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white bg-teal px-5 py-3 rounded-full hover:bg-teal/90 transition-colors w-fit"
                  >
                    {r.fileLabel} ↓
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
