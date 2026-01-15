"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero({
                                 brand,
                                 waLink,
                             }: {
    brand: string;
    waLink: string;
}) {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-6 pt-14 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur"
                >
                    <Sparkles className="h-4 w-4" />
                    <span>Webs modernas, rápidas y enfocadas en conversión</span>
                </motion.div>

                <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.05 }}
                            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
                        >
                            {brand}: páginas web que se ven premium y venden.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.12 }}
                            className="mt-4 text-lg text-slate-600"
                        >
                            Diseño + performance + SEO base + WhatsApp y formularios listos para captar clientes.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.18 }}
                            className="mt-7 flex flex-col sm:flex-row gap-3"
                        >
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition"
                            >
                                Cotizar por WhatsApp
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                            </a>

                            <a
                                href="#precios"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-50 transition"
                            >
                                Ver paquetes
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 14, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.08 }}
                        className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
                    >
                        <div className="rounded-xl bg-slate-100 p-6 text-slate-700">
                            <div className="font-semibold">Incluye</div>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li>• Copy orientado a conversión</li>
                                <li>• Animaciones sutiles y look premium</li>
                                <li>• Optimización de velocidad</li>
                                <li>• SEO base + tracking listo</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Fondo visual */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-amber-200 blur-3xl opacity-70" />
            </div>
        </section>
    );
}
