import SectionReveal from "@/components/SectionReveal";

export default function Testimonials() {
    const items = [
        { n: "Cliente 1", r: "“Se ve pro, carga rápido y nos empezaron a llegar consultas por WhatsApp.”" },
        { n: "Cliente 2", r: "“Me asesoraron con el contenido y quedó súper claro lo que vendemos.”" },
        { n: "Cliente 3", r: "“La mantención me salvó. Todo actualizado y sin dolores de cabeza.”" },
    ];

    return (
        <section className="container-max pb-16">
            <SectionReveal>
                <h2 className="text-3xl font-extrabold tracking-tight">Lo que la gente valora</h2>
                <p className="mt-3 text-slate-600 max-w-2xl">
                    Reemplaza estos testimonios por reales apenas puedas (sube conversión mucho).
                </p>
            </SectionReveal>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                {items.map((x) => (
                    <SectionReveal key={x.n}>
                        <div className="glass shadow-soft rounded-2xl p-6">
                            <div className="text-sm font-semibold text-slate-700">{x.n}</div>
                            <div className="mt-3 text-slate-600">{x.r}</div>
                        </div>
                    </SectionReveal>
                ))}
            </div>
        </section>
    );
}
