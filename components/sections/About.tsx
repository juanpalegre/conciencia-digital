import Image from "next/image";

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Photos column */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/perfil.jpg"
                alt="Juan Pablo Alegre"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            {/* Microsoft credential — subtle, not the hero */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/microsoft.jpg"
                alt="Juan Pablo en Microsoft Argentina"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2">
                <p className="font-body text-xs text-white/80">
                  Microsoft Argentina — evento de IA, 2024
                </p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="pt-2">
            <p className="text-teal font-body text-sm font-semibold uppercase tracking-widest mb-4">
              Quién soy
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-black mb-6 leading-tight">
              Fui docente diez años. Hoy trabajo con IA. Nunca dejé de pensar
              en el aula.
            </h2>
            <div className="font-body text-gray-text text-base leading-relaxed space-y-4">
              <p>
                Empecé dando clases en escuelas del GBA. Enseñé tecnología,
                programación y robótica en distintos niveles. Sé lo que es
                preparar una clase con pocos recursos, con grupos difíciles, con
                poco tiempo.
              </p>
              <p>
                Después me formé como ingeniero de IA. Trabajé en proyectos con
                empresas, participé en eventos de Microsoft, y entendí de primera
                mano lo que viene.
              </p>
              <p>
                ConCiencia Digital nació de esa tensión: entre lo que la
                tecnología puede hacer y lo que la escuela necesita. Mi rol es
                ser el puente, sin vender humo, sin simplificar de más.
              </p>
            </div>

            {/* Credentials — simple list */}
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
