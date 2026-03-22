import { WHATSAPP_GREETING } from "@/lib/config";

export function Contact() {
  return (
    <section className="py-20 bg-teal" id="contacto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          ¿Hablamos?
        </h2>
        <p className="font-body text-white/80 text-lg mb-10 max-w-lg mx-auto">
          Escribime por WhatsApp y te cuento cómo podría trabajar con tu
          institución. Sin compromiso.
        </p>
        <a
          href={WHATSAPP_GREETING}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-teal font-body font-semibold px-10 py-4 rounded-full text-lg hover:bg-white/90 transition-colors"
        >
          Escribime por WhatsApp
        </a>
      </div>
    </section>
  );
}
