import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WHATSAPP_GREETING } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto — ConCiencia Digital",
  description: "Escribile a Juan Pablo por WhatsApp para saber más sobre las propuestas de ConCiencia Digital.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-teal-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h1 className="font-display text-4xl md:text-5xl text-black mb-4">
              Contacto
            </h1>
            <p className="font-body text-gray-text text-xl max-w-xl">
              La forma más directa de hablar conmigo es por WhatsApp. No hay
              formularios, no hay esperas.
            </p>
          </div>
        </section>

        <section className="py-20 bg-bg">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="bg-white rounded-3xl p-10 border border-teal-light">
              <div className="text-5xl mb-6">💬</div>
              <h2 className="font-display text-2xl text-black mb-4">
                Escribime por WhatsApp
              </h2>
              <p className="font-body text-gray-text leading-relaxed mb-8">
                Contame de qué institución sos, qué están buscando, y hablamos.
                Sin compromiso, sin presión.
              </p>
              <a
                href={WHATSAPP_GREETING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal text-white font-body font-semibold px-10 py-4 rounded-full text-lg hover:bg-teal/90 transition-colors"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
