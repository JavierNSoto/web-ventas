"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Zap, Wrench } from "lucide-react";

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
        <section id="top" className="bg-aurora relative">
            <div className="noise" />

            <div className="container-max pt-14 pb-14 md:pt-20 md:pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="badge shadow-soft"
                >
                    <Sparkles className="h-4 w-4" />
                    <span>Agencia web: creación • mejoras • mantención • asesoría</span>
                </motion.div>

                <div className="mt-7 grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.05 }}
                            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]"
                        >
                            Páginas web <span className="text-gradient">modernas</span> que
                            <span className="block">se ven premium y convierten</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.12 }}
                            className="mt-5 text-lg text-slate-600 leading-relaxed"
                        >
                            En {brand} diseñamos y construimos sitios con estética de alto nivel, velocidad real y estructura de venta.
                            Además, te damos seguimiento con mejoras y mantención para que tu web siempre rinda.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.18 }}
                            className="mt-7 flex flex-col sm:flex-row gap-3"
                        >
                            <a className="btn btn-primary group" href={waLink} target="_blank" rel="noreferrer">
                                Cotizar por WhatsApp
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                            </a>

                            <a className="btn btn-secondary" href="#precios">
                                Ver paquetes
                            </a>

                            {calendly ? (
                                <a className="btn btn-secondary" href={calendly} target="_blank" rel="noreferrer">
                                    Agendar llamada
                                </a>
                            ) : null}
                        </motion.div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {[
                                { i: ShieldCheck, t: "Confianza", d: "Buenas prácticas, checklist y soporte." },
                                { i: Zap, t: "Velocidad", d: "Performance y SEO base listos." },
                                { i: Wrench, t: "Seguimiento", d: "Mejoras y mantención mensual." },
                            ].map((x) => (
                                <div key={x.t} className="glass shadow-soft card p-4">
                                    <div className="flex items-center gap-2 font-semibold">
                                        <x.i className="h-4 w-4" />
                                        {x.t}
                                    </div>
                                    <div className="mt-1 text-sm text-slate-600">{x.d}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right “showcase” */}
                    <motion.div
                        initial={{ opacity: 0, y: 18, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.08 }}
                        className="glow-border"
                    >
                        <div className="glass shadow-soft card p-6">
                            <div className="text-sm font-semibold text-slate-700">Lo que obtienes</div>

                            <div className="mt-4 grid gap-3">
                                {[
                                    { t: "Diseño premium", d: "Look moderno tipo SaaS/Agency + micro-animaciones." },
                                    { t: "Copy que vende", d: "Estructura de conversión + CTA claros." },
                                    { t: "Integraciones", d: "WhatsApp, formularios, analytics, pixel." },
                                    { t: "Mantención", d: "Backups, updates, monitoreo y mejoras." },
                                ].map((x) => (
                                    <div key={x.t} className="card border border-slate-200 bg-white/75 p-4">
                                        <div className="font-semibold">{x.t}</div>
                                        <div className="mt-1 text-sm text-slate-600">{x.d}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 card bg-slate-900 p-4 text-white">
                                <div className="text-sm font-extrabold">“Primer impacto” garantizado</div>
                                <div className="mt-1 text-sm text-white/80">
                                    Si tu web no se ve y se siente premium, estás perdiendo ventas.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
