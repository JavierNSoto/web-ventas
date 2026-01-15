"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, Shield, Sparkles, Zap } from "lucide-react";

const cases = [
    {
        title: "Landing de conversión",
        tag: "Servicios",
        bullets: ["Hero con oferta clara", "Sección de confianza", "CTA a WhatsApp", "Velocidad optimizada"],
    },
    {
        title: "Sitio corporativo premium",
        tag: "Empresa",
        bullets: ["Arquitectura de contenido", "Sección de proceso", "FAQs y soporte", "SEO técnico base"],
    },
    {
        title: "Catálogo / portfolio",
        tag: "Marca personal",
        bullets: ["Galería moderna", "Sección de casos", "Copy persuasivo", "Diseño 2026"],
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="section">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="section-title">Casos con look premium</h2>
                    <p className="section-subtitle">
                        No dependemos de “plantillas”. El resultado se siente moderno, rápido y confiable, con microinteracciones bien puestas.
                    </p>
                </div>

                <div className="flex items-center gap-2">
          <span className="pill">
            <Zap className="h-4 w-4" />
            Rápido
          </span>
                    <span className="pill">
            <Shield className="h-4 w-4" />
            Confiable
          </span>
                    <span className="pill">
            <Sparkles className="h-4 w-4" />
            Premium
          </span>
                </div>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {cases.map((c, idx) => (
                    <motion.div
                        key={c.title}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
                        className="card card-hover overflow-hidden"
                    >
                        <div className="relative p-6">
                            {/* Mockup */}
                            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs text-white/65">
                                        <Monitor className="h-4 w-4" />
                                        Preview
                                    </div>
                                    <span className="pill">{c.tag}</span>
                                </div>

                                <div className="mt-4 rounded-2xl border border-white/10 bg-[rgba(10,12,18,0.45)] p-4">
                                    <div className="h-3 w-2/3 rounded-full bg-white/12" />
                                    <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
                                    <div className="mt-5 grid grid-cols-3 gap-2">
                                        <div className="h-12 rounded-2xl bg-white/8" />
                                        <div className="h-12 rounded-2xl bg-white/6" />
                                        <div className="h-12 rounded-2xl bg-white/7" />
                                    </div>
                                    <div className="mt-4 h-9 w-32 rounded-full bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand2))]" />
                                </div>
                            </div>

                            <div className="mt-5 flex items-start justify-between gap-3">
                                <div>
                                    <div className="text-lg font-semibold tracking-tight">{c.title}</div>
                                    <div className="mt-2 grid gap-2">
                                        {c.bullets.map((b) => (
                                            <div key={b} className="text-sm text-white/70">
                                                • {b}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/8 border border-white/10">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-14 hr-soft" />
        </section>
    );
}
