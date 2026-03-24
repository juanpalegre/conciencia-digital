import Image from "next/image";

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo column — Microsoft only */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/microsoft.jpg"
              alt="Juan Pablo en Microsoft Argentina"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-3">
              <p className="font-body text-xs text-white/80">
                Microsoft Argentina — Centros de Excelencia de IA, 2025
              </p>
            </div>
          </div>

          {/* Text column */}
          <div className="pt-2">
            <p className="text-teal font-body text-sm font-semibold uppercase tracking-widest mb-4">
              Quién soy
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6 leading-tight">
              Ayudo a escuelas a entender y usar la inteligencia artificial de forma concreta.
            </h2>
            <div className="font-body text-gray-text text-base leading-relaxed space-y-4">
              <p>
                Combino experiencia en el aula, formación en gestión educativa y trabajo en proyectos reales de tecnología. Eso me permite traducir lo complejo en herramientas útiles para docentes y equipos directivos.
              </p>
              <p>
                También participo en charlas y espacios de formación sobre IA, y trabajo con tecnologías aplicadas en entornos reales.
              </p>
              <p>
                ConCiencia Digital nace para cerrar la brecha entre lo que la tecnología promete y lo que realmente se puede aplicar en la escuela hoy.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { number: "10+", label: "años en el aula" },
                { number: "3", label: "niveles educativos" },
                { number: "IA", label: "Ingeniero certificado" },
                { number: "GBA", label: "zona de trabajo" },
              ].map((c) => (
                <div key={c.label} className="bg-teal-light rounded-xl p-4">
                  <p className="font-display text-2xl text-teal">{c.number}</p>
                  <p className="font-body text-xs text-gray-text mt-1">
                    {c.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
