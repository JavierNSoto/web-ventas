"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

type QA = { q: string; a: string };

export default function FAQ() {
    const faqs: QA[] = useMemo(
        () => [
            {
                q: "¿En cuánto tiempo está lista?",
                a: "Normalmente 7–14 días para una entrega inicial (depende del alcance). Después podemos seguir con mejoras continuas.",
            },
            {
                q: "¿Incluye SEO?",
                a: "Incluye SEO técnico base (estructura, metadata, performance, accesibilidad). SEO avanzado y estrategia de contenidos se cotiza aparte.",
            },
            {
                q: "¿Puedo pedir cambios después?",
                a: "Sí. Puedes tomar mantención o mejoras continuas. Si no, también hacemos cambios puntuales por bolsa de horas.",
            },
            {
                q: "¿Se trabaja por WhatsApp?",
                a: "Sí, es el canal principal para avanzar rápido. Igual dejamos todo ordenado y claro con entregables.",
            },
            {
                q: "¿Qué necesitas para partir?",
                a: "Tu rubro, objetivo, 1–2 referencias (si tienes) y el CTA principal. Si no tienes textos, los armamos contigo.",
            },
        ],
        []
    );

    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="section" aria-label="Preguntas frecuentes">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="section-title">Preguntas típicas</h2>
                    <p className="section-subtitle">
                        Te respondemos claro y al grano. Si falta algo, lo vemos por WhatsApp.
                    </p>
                </div>

                <div className="small-muted">Tip: mientras más claro el objetivo, más rápido avanzamos.</div>
            </div>

            <div className="mt-10 grid gap-3">
                {faqs.map((item, idx) => {
                    const isOpen = open === idx;
                    return (
                        <div key={item.q} className="card overflow-hidden">
                            <button
                                type="button"
                                onClick={() => setOpen(isOpen ? null : idx)}
                                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                                aria-expanded={isOpen}
                            >
                                <div className="text-base font-semibold tracking-tight">{item.q}</div>
                                <motion.span
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="grid h-10 w-10 place-items-center rounded-2xl bg-white/6 border border-white/10"
                                >
                                    <ChevronDown className="h-5 w-5" />
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen ? (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                    >
                                        <div className="px-5 pb-5 text-sm leading-6 text-white/70">{item.a}</div>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>

            <div className="mt-14 hr-soft" />
        </section>
    );
}
