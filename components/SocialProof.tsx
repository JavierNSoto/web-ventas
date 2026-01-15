"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Star, TrendingUp, Zap } from "lucide-react";

const testimonials = [
    {
        name: "Cliente — Servicios profesionales (Chile)",
        quote:
            "La landing quedó filete: rápida, moderna y con el mensaje ordenado. Subieron las consultas al tiro.",
        rating: 5,
    },
    {
        name: "Cliente — Negocio local",
        quote:
            "Se nota el foco en conversión. WhatsApp como CTA principal nos cambió el juego.",
        rating: 5,
    },
    {
        name: "Cliente — Marca personal",
        quote:
            "Me guiaron con la oferta y el copy. La web quedó pro y fácil de iterar.",
        rating: 5,
    },
];

export default function SocialProof() {
    return (
        <section className="section" aria-label="Prueba social">
            <div className="grid items-start gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <h2 className="section-title">Confianza que se nota</h2>
                    <p className="section-subtitle">
                        La diferencia está en el detalle: claridad del mensaje, velocidad y un flujo que empuja a contactarte.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                        <MiniKpi icon={<TrendingUp className="h-4 w-4" />} title="Más consultas" desc="CTA claro + copy ordenado" />
                        <MiniKpi icon={<Zap className="h-4 w-4" />} title="Más rapidez" desc="Optimización desde la base" />
                        <MiniKpi icon={<BadgeCheck className="h-4 w-4" />} title="Más confianza" desc="Diseño premium + contenido" />
                    </div>

                    <div className="mt-7 card p-5">
                        <div className="text-sm font-semibold text-white/90">Logos (placeholder)</div>
                        <div className="mt-4 grid grid-cols-3 gap-3">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="h-10 rounded-2xl border border-white/10 bg-white/5" aria-hidden="true" />
                            ))}
                        </div>
                        <div className="mt-3 text-xs text-white/55">
                            Si ya tienes logos reales en <span className="text-white/75">public/</span>, los conectamos altiro.
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7">
                    <div className="grid gap-4 md:grid-cols-3">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.name}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
                                className="card card-hover p-6"
                            >
                                <div className="flex items-center gap-1 text-white/90">
                                    {Array.from({ length: t.rating }).map((_, idx) => (
                                        <Star key={idx} className="h-4 w-4 fill-white/80 text-white/80" />
                                    ))}
                                </div>
                                <div className="mt-4 text-sm leading-6 text-white/75">“{t.quote}”</div>
                                <div className="mt-4 text-xs font-semibold text-white/70">{t.name}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-4 card p-6">
                        <div className="grid gap-4 md:grid-cols-3">
                            <BigKpi title="Iteración" value="Semanal" note="Mejoras continuas" />
                            <BigKpi title="Entrega" value="7–14 días" note="Alcance típico" />
                            <BigKpi title="Soporte" value="WhatsApp" note="Directo y rápido" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-14 hr-soft" />
        </section>
    );
}

function MiniKpi({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-white/90">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/8 border border-white/10">{icon}</span>
                <div className="text-sm font-semibold">{title}</div>
            </div>
            <div className="mt-2 text-sm text-white/70">{desc}</div>
        </div>
    );
}

function BigKpi({ title, value, note }: { title: string; value: string; note: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/60">{title}</div>
            <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
            <div className="mt-1 text-xs text-white/60">{note}</div>
        </div>
    );
}
