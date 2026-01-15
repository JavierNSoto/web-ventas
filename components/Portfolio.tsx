import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

const items = [
    { t: "Landing que vende", d: "CTA + WhatsApp + prueba social + formulario.", img: "/portfolio/demo1.jpg" },
    { t: "Web corporativa premium", d: "Confianza, servicios y estructura clara.", img: "/portfolio/demo2.jpg" },
    { t: "E-commerce optimizado", d: "Catálogo, pagos y checkout rápido.", img: "/portfolio/demo3.jpg" },
];

export default function Portfolio() {
    return (
        <section id="portafolio" className="container-max pb-16">
            <SectionReveal>
                <h2 className="text-3xl font-extrabold tracking-tight">Portafolio</h2>
                <p className="mt-3 text-slate-600 max-w-2xl">
                    Reemplaza estos demos por proyectos reales cuando los tengas (sube conversión mucho).
                </p>
            </SectionReveal>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                {items.map((x) => (
                    <SectionReveal key={x.t}>
                        <div className="glass shadow-soft rounded-2xl overflow-hidden border border-slate-200 card-hover">
                            <div className="relative aspect-[16/10] bg-slate-100">
                                <Image
                                    src={x.img}
                                    alt={x.t}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <div className="font-semibold">{x.t}</div>
                                <div className="mt-2 text-sm text-slate-600">{x.d}</div>
                            </div>
                        </div>
                    </SectionReveal>
                ))}
            </div>
        </section>
    );
}
