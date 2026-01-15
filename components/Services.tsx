"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Gauge, Handshake, Layers, RefreshCw, ShieldCheck, Wrench } from "lucide-react";

const cards = [
    {
        title: "Creación de páginas web",
        desc: "Landing, corporativa o catálogo. Diseño premium + copy claro + velocidad real.",
        icon: <Layers className="h-5 w-5" />,
        points: ["Diseño 2026", "SEO técnico base", "Optimización velocidad", "Estructura para vender"],
    },
    {
        title: "Mejoras continuas",
        desc: "Tu web se va puliendo con ciclos: ajustes, nuevas secciones y mejoras de conversión.",
        icon: <RefreshCw className="h-5 w-5" />,
        points: ["Iteración por ciclos", "Mejoras UI/UX", "Mejoras de copy", "Nuevas secciones"],
    },
    {
        title: "Asesoría",
        desc: "Te ayudamos a ordenar tu oferta: qué decir, a quién, y cómo convertir con claridad.",
        icon: <Handshake className="h-5 w-5" />,
        points: ["Mensaje y oferta", "Estructura de secciones", "CTAs y flujo", "Prioridades"],
    },
    {
        title: "Mantención web",
        desc: "Cambios, ajustes y soporte. Ordenado, rápido y sin drama.",
        icon: <Wrench className="h-5 w-5" />,
        points: ["Cambios menores", "Revisión periódica", "Seguridad", "Soporte por WhatsApp"],
    },
];

export default function Services() {
    return (
        <section id="servicios" className="section">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="section-title">Una oferta completa, sin vueltas</h2>
                    <p className="section-subtitle">
                        La idea es simple: una web que se vea pro, cargue rápido y genere contacto. Y si quieres, la seguimos mejorando mes a mes.
                    </p>
                </div>

                <div className="flex items-center gap-2">
          <span className="pill">
            <Gauge className="h-4 w-4" />
            Performance
          </span>
                    <span className="pill">
            <ShieldCheck className="h-4 w-4" />
            Confianza
          </span>
                </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
                {cards.map((c, idx) => (
                    <motion.div
                        key={c.title}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
                        className="card card-hover p-6"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-white/90">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/8 border border-white/10">
                    {c.icon}
                  </span>
                                    <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                                </div>
                                <p className="mt-3 text-sm leading-6 text-white/70">{c.desc}</p>
                            </div>

                            <span className="pill">
                <ArrowUpRight className="h-4 w-4" />
                Pro
              </span>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                            {c.points.map((p) => (
                                <div key={p} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/75">
                                    {p}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-10 card p-6">
                <div className="grid gap-6 md:grid-cols-3">
                    <div>
                        <div className="text-sm font-semibold text-white/90">En qué nos fijamos</div>
                        <div className="mt-2 text-sm leading-6 text-white/70">
                            Que tu web sea una herramienta comercial: clara, rápida y con un CTA que funcione.
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <div className="grid gap-3 sm:grid-cols-3">
                            <Kpi title="Respuesta" value="< 10 min" note="Horario hábil" />
                            <Kpi title="Entrega inicial" value="7–14 días" note="Según alcance" />
                            <Kpi title="Iteración" value="Semanal" note="Si tomas mejoras continuas" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-14 hr-soft" />
        </section>
    );
}

function Kpi({ title, value, note }: { title: string; value: string; note: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/60">{title}</div>
            <div className="mt-1 text-xl font-semibold tracking-tight">{value}</div>
            <div className="mt-1 text-xs text-white/60">{note}</div>
        </div>
    );
}
