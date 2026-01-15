import SectionReveal from "@/components/SectionReveal";
import { Check } from "lucide-react";

export default function Pricing({
                                    waMain,
                                    waMaint,
                                }: {
    waMain: string;
    waMaint: string;
}) {
    const plans = [
        {
            tag: "Para partir fuerte",
            t: "Landing",
            price: "Desde $___",
            items: ["1 página", "WhatsApp + formulario", "SEO base + velocidad", "Entrega 3–7 días"],
            cta: waMain,
        },
        {
            tag: "La más vendida",
            t: "Corporativa",
            price: "Desde $___",
            items: ["Hasta 5 secciones", "Estructura pro", "Optimización performance", "Entrega 7–14 días"],
            cta: waMain,
            featured: true,
        },
        {
            tag: "Vender online",
            t: "E-commerce",
            price: "Desde $___",
            items: ["Catálogo", "Pagos", "Checkout optimizado", "Entrega 2–4 semanas"],
            cta: waMain,
        },
    ];

    const maintenance = [
        { t: "Mantención Basic", price: "$___ / mes", items: ["Actualizaciones", "Backups", "Monitoreo"] },
        { t: "Mantención Pro", price: "$___ / mes", items: ["Todo Basic", "Mejoras mensuales", "Soporte prioritario"] },
    ];

    return (
        <>
            <section id="precios" className="container-max pb-16">
                <SectionReveal>
                    <h2 className="text-3xl font-extrabold tracking-tight">Paquetes</h2>
                    <p className="mt-3 text-slate-600 max-w-2xl">
                        Precios “desde” para acelerar decisiones. Ajustamos según contenido, integraciones y objetivos.
                    </p>
                </SectionReveal>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {plans.map((p) => (
                        <SectionReveal key={p.t}>
                            <div className={`rounded-2xl border p-6 shadow-soft bg-white/70 ${p.featured ? "border-slate-900" : "border-slate-200"}`}>
                                <div className="text-sm text-slate-600">{p.tag}</div>
                                <div className="mt-1 text-xl font-bold">{p.t}</div>
                                <div className="mt-3 text-3xl font-extrabold">{p.price}</div>

                                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                                    {p.items.map((it) => (
                                        <li key={it} className="flex gap-2">
                                            <Check className="h-4 w-4 mt-0.5" />
                                            <span>{it}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a className="btn btn-primary mt-6 w-full" href={p.cta} target="_blank" rel="noreferrer">
                                    Cotizar
                                </a>

                                {p.featured ? (
                                    <div className="mt-3 text-xs text-slate-600">
                                        Recomendado si quieres verte premium y convertir mejor.
                                    </div>
                                ) : null}
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </section>

            <section id="mantencion" className="container-max pb-16">
                <SectionReveal>
                    <h2 className="text-3xl font-extrabold tracking-tight">Mantención y soporte</h2>
                    <p className="mt-3 text-slate-600 max-w-2xl">
                        Te ayudamos a mantener tu web segura, rápida y actualizada. Ideal si no quieres preocuparte de nada.
                    </p>
                </SectionReveal>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {maintenance.map((m) => (
                        <SectionReveal key={m.t}>
                            <div className="glass shadow-soft rounded-2xl p-6">
                                <div className="text-xl font-bold">{m.t}</div>
                                <div className="mt-2 text-2xl font-extrabold">{m.price}</div>
                                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                                    {m.items.map((it) => (
                                        <li key={it} className="flex gap-2">
                                            <Check className="h-4 w-4 mt-0.5" />
                                            <span>{it}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a className="btn btn-secondary mt-6 w-full" href={waMaint} target="_blank" rel="noreferrer">
                                    Quiero mantención
                                </a>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </section>
        </>
    );
}
