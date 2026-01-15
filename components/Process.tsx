import SectionReveal from "@/components/SectionReveal";

export default function Process() {
    const steps = [
        { n: "1", t: "Diagnóstico", d: "Objetivo, público, oferta y estructura de la página." },
        { n: "2", t: "Diseño premium", d: "Propuesta visual moderna y coherente con tu marca." },
        { n: "3", t: "Desarrollo rápido", d: "Performance, SEO base, tracking y checklist final." },
        { n: "4", t: "Lanzamiento", d: "Dominio, SSL, analítica, y entrega para operar." },
    ];

    return (
        <section className="container-max pb-16">
            <SectionReveal>
                <h2 className="text-3xl font-extrabold tracking-tight">Proceso simple, resultados serios</h2>
                <p className="mt-3 text-slate-600 max-w-2xl">
                    Trabajamos rápido, pero con método. Cada etapa tiene entregables claros.
                </p>
            </SectionReveal>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
                {steps.map((s) => (
                    <SectionReveal key={s.n}>
                        <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-soft">
                            <div className="text-sm font-semibold text-slate-500">Paso {s.n}</div>
                            <div className="mt-1 font-semibold">{s.t}</div>
                            <div className="mt-2 text-sm text-slate-600">{s.d}</div>
                        </div>
                    </SectionReveal>
                ))}
            </div>
        </section>
    );
}
