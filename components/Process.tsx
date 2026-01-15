"use client";

import { motion } from "framer-motion";
import { CalendarDays, FileText, Rocket, Search, Sparkles, Target } from "lucide-react";

const steps = [
    {
        title: "Brief y objetivo",
        desc: "Aterrizamos tu oferta: qué vendes, a quién y qué acción quieres que hagan.",
        icon: <Target className="h-5 w-5" />,
        meta: "Día 1",
    },
    {
        title: "Estructura y copy",
        desc: "Ordenamos secciones, mensajes y CTAs para que se entienda al tiro.",
        icon: <FileText className="h-5 w-5" />,
        meta: "Días 2–3",
    },
    {
        title: "Diseño premium",
        desc: "UI moderna + motion sutil. Que se vea pro y se sienta fluida.",
        icon: <Sparkles className="h-5 w-5" />,
        meta: "Días 4–7",
    },
    {
        title: "Desarrollo + velocidad",
        desc: "Next.js, SEO técnico base y performance real (sin peso innecesario).",
        icon: <Search className="h-5 w-5" />,
        meta: "Días 8–12",
    },
    {
        title: "Revisión fina",
        desc: "Mobile-first, detalles de conversión y pulido final antes de publicar.",
        icon: <CalendarDays className="h-5 w-5" />,
        meta: "Días 13–14",
    },
    {
        title: "Lanzamiento + mejoras",
        desc: "Se publica y, si quieres, seguimos con mejoras continuas y mantención.",
        icon: <Rocket className="h-5 w-5" />,
        meta: "Semana 3+",
    },
];

export default function Process() {
    return (
        <section className="section" aria-label="Proceso">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="section-title">Proceso claro, resultado pro</h2>
                    <p className="section-subtitle">
                        Aquí no hay humo: método, plazos y entregables. Y lo dejamos fino antes de lanzar.
                    </p>
                </div>

                <div className="pill">
                    <span className="h-2 w-2 rounded-full bg-[rgb(var(--brand2))]" />
                    Roadmap transparente
                </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {steps.map((s, i) => (
                    <motion.div
                        key={s.title}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.04 }}
                        className="card card-hover p-6"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/8 border border-white/10">
                                {s.icon}
                            </div>
                            <span className="pill">{s.meta}</span>
                        </div>

                        <div className="mt-4 text-lg font-semibold tracking-tight">{s.title}</div>
                        <div className="mt-2 text-sm leading-6 text-white/70">{s.desc}</div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-14 hr-soft" />
        </section>
    );
}
