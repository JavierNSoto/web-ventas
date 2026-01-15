"use client";

import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    { q: "¿En cuánto tiempo entregan?", a: "Landing: 3–7 días. Corporativa: 7–14 días. E-commerce: 2–4 semanas (según catálogo e integraciones)." },
    { q: "¿Incluye dominio y correo?", a: "Podemos ayudarte a configurarlo. El dominio y correo se pagan al proveedor (NIC/Workspace, etc.)." },
    { q: "¿Puedo editar la web después?", a: "Sí. Podemos dejarla administrable o manejar cambios por mantención." },
    { q: "¿Hacen mantención?", a: "Sí: actualizaciones, backups, monitoreo, mejoras y soporte según el plan." },
    { q: "¿Trabajan con WordPress o a medida?", a: "Ambas. Recomendamos la mejor opción según tu negocio, presupuesto y velocidad de salida." },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" className="container-max pb-16">
            <SectionReveal>
                <h2 className="text-3xl font-extrabold tracking-tight">Preguntas frecuentes</h2>
                <p className="mt-3 text-slate-600 max-w-2xl">Cierra objeciones y acelera la compra.</p>
            </SectionReveal>

            <div className="mt-8 grid gap-3">
                {faqs.map((f, idx) => {
                    const isOpen = open === idx;
                    return (
                        <SectionReveal key={f.q}>
                            <button
                                type="button"
                                onClick={() => setOpen(isOpen ? null : idx)}
                                className="w-full text-left rounded-2xl border border-slate-200 bg-white/70 shadow-soft px-5 py-4"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="font-semibold">{f.q}</div>
                                    <ChevronDown className={cn("h-5 w-5 transition", isOpen && "rotate-180")} />
                                </div>
                                <div className={cn("mt-2 text-sm text-slate-600 leading-relaxed", !isOpen && "hidden")}>
                                    {f.a}
                                </div>
                            </button>
                        </SectionReveal>
                    );
                })}
            </div>
        </section>
    );
}
