"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Wrench } from "lucide-react";

export default function Hero({
                                 brand,
                                 waLink,
                                 calendly,
                             }: {
    brand: string;
    waLink: string;
    calendly?: string;
}) {
    return (
        <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />

            <div className="blob blob-float -top-28 left-1/2 h-[340px] w-[540px] -translate-x-1/2 bg-gradient-to-r from-indigo-300 via-pink-300 to-cyan-300" />
            <div className="blob blob-float top-52 -left-24 h-[260px] w-[320px] bg-gradient-to-r from-cyan-300 via-indigo-300 to-pink-300" style={{ animationDelay: "1.2s" }} />
            <div className="blob blob-float top-40 -right-24 h-[260px] w-[340px] bg-gradient-to-r from-pink-300 via-cyan-300 to-indigo-300" style={{ animationDelay: "2.1s" }} />

            <div className="container-max pt-14 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="badge shadow-soft"
                >
                    <Zap className="h-4 w-4" />
                    <span>
            Landing + Web corporativa + Tienda online — <span className="font-semibold">Chile</span>
          </span>
                </motion.div>

                <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.05 }}
                            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
                        >
                            Páginas web <span className="text-gradient">premium</span> que
                            <span className="block">dan ganas de comprar</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.12 }}
                            className="mt-4 text-lg text-slate-600"
                        >
                            En {brand} diseñamos y desarrollamos sitios modernos, rápidos y enfocados en conversión.
                            Además, te asesoramos y ofrecemos mantención para que tu web siempre esté segura y actualizada.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.18 }}
                            className="mt-7 flex flex-col sm:flex-row gap-3"
                        >
                            <a className="btn btn-primary shadow-soft group" href={waLink} target="_blank" rel="noreferrer">
                                Cotizar por WhatsApp
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                            </a>

                            <a className="btn btn-secondary shadow-soft" href="#precios">
                                Ver paquetes
                            </a>

                            {calendly ? (
                                <a className="btn btn-secondary shadow-soft" href={calendly} target="_blank" rel="noreferrer">
                                    Agendar llamada
                                </a>
                            ) : null}
                        </motion.div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-3 text-sm text-slate-700">
                            <div className="glass shadow-soft rounded-2xl p-4">
                                <div className="flex items-center gap-2 font-semibold">
                                    <ShieldCheck className="h-4 w-4" /> Confianza
                                </div>
                                <div className="mt-1 text-slate-600">SSL, buenas prácticas, soporte real.</div>
                            </div>
                            <div className="glass shadow-soft rounded-2xl p-4">
                                <div className="flex items-center gap-2 font-semibold">
                                    <Zap className="h-4 w-4" /> Velocidad
                                </div>
                                <div className="mt-1 text-slate-600">Performance, SEO base y estructura pro.</div>
                            </div>
                            <div className="glass shadow-soft rounded-2xl p-4">
                                <div className="flex items-center gap-2 font-semibold">
                                    <Wrench className="h-4 w-4" /> Mantención
                                </div>
                                <div className="mt-1 text-slate-600">Actualizaciones, monitoreo y mejoras.</div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 18, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.08 }}
                        className="glow-border"
                    >
                        <div className="glass shadow-soft rounded-2xl p-6">
                            <div className="text-sm font-semibold text-slate-700">Lo que entregamos</div>
                            <div className="mt-3 grid gap-3">
                                {[
                                    { t: "Diseño moderno", d: "Look premium + micro-interacciones." },
                                    { t: "Copy que convierte", d: "Mensajes claros, CTA y estructura de venta." },
                                    { t: "SEO base", d: "Títulos, metas, sitemap y velocidad." },
                                    { t: "Integraciones", d: "WhatsApp, formularios, analytics, pixel." },
                                ].map((x) => (
                                    <div key={x.t} className="rounded-xl border border-slate-200 bg-white/70 p-4">
                                        <div className="font-semibold">{x.t}</div>
                                        <div className="mt-1 text-sm text-slate-600">{x.d}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 rounded-xl bg-slate-900 text-white p-4">
                                <div className="text-sm font-semibold">Oferta de entrada</div>
                                <div className="mt-1 text-sm text-white/80">
                                    Si estás partiendo, armamos una landing con WhatsApp + formulario y la dejas lista para vender.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
