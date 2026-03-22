import { DIFFERENTIATORS } from "@/lib/config";

export function Approach() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-3xl md:text-4xl text-black mb-12">
          Cómo trabajo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.title} className="bg-teal-light rounded-2xl p-8">
              <span className="text-3xl mb-4 block">{d.icon}</span>
              <h3 className="font-display text-xl text-black mb-3">{d.title}</h3>
              <p className="font-body text-gray-text leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
