"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BarChart3, Sparkles, Zap } from "lucide-react";

const WHATSAPP_NUMBER = "56900000000"; // <-- cambia a tu número
const WA_PREFILL =
    "Hola, quiero cotizar una web premium enfocada en vender. Soy de Chile. Mi negocio es: _____. Objetivo: _____. ¿Qué plan me recomiendas y en cuánto plazo?";

function buildWhatsAppHref(message: string) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export default function Hero() {
    const waHref = buildWhatsAppHref(WA_PREFILL);

    return (
        <section className="dock-safe">
            <div className="mx-auto w-full max-w-7xl px-4 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                        >
                            <Sparkles className="h-4 w-4" />
                            Diseño 2026 + performance + copy que vende
                            <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-white/70">
                Entrega rápida
              </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                            className="mt-5 text-balance text-[42px] font-[780] leading-[1.02] tracking-[-0.04em] sm:text-[56px]"
                        >
                            Tu web con look{" "}
                            <span className="bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand2))] bg-clip-text text-transparent">
                nivel agencia
              </span>{" "}
                            y pensada para convertir.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/75 sm:text-[17px]"
                        >
                            No es “una web bonita y listo”. Es estructura, mensaje claro, CTAs bien puestos y una experiencia rápida que
                            da confianza. La hacemos, la mejoramos y la mantenemos.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
                        >
                            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Cotizar por WhatsApp
                                <ArrowRight className="h-5 w-5" />
                            </a>

                            <button
                                type="button"
                                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                                className="btn btn-ghost"
                            >
                                Ver ejemplos
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </motion.div>

                        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <Stat
                                icon={<Zap className="h-4 w-4" />}
                                title="Rápida de verdad"
                                desc="Optimización y buenas prácticas desde el día 1."
                            />
                            <Stat
                                icon={<BarChart3 className="h-4 w-4" />}
                                title="Hecha para vender"
                                desc="Orden, copy y CTA para que te contacten."
                            />
                            <Stat
                                icon={<BadgeCheck className="h-4 w-4" />}
                                title="Soporte constante"
                                desc="Mejoras y mantención sin enredos."
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
                            className="card card-hover relative overflow-hidden p-5"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent" />
                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                                    </div>
                                    <div className="pill">
                                        <span className="h-2 w-2 rounded-full bg-[rgb(var(--brand2))]" />
                                        Vista previa
                                    </div>
                                </div>

                                <div className="mt-5 space-y-4">
                                    <div className="h-3 w-2/3 rounded-full bg-white/12" />
                                    <div className="h-3 w-1/2 rounded-full bg-white/10" />

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            <div className="h-10 w-10 rounded-2xl bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand2))]" />
                                            <div className="mt-3 h-3 w-2/3 rounded-full bg-white/12" />
                                            <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                            <div className="h-10 w-10 rounded-2xl bg-gradient-to-r from-white/20 to-white/10" />
                                            <div className="mt-3 h-3 w-2/3 rounded-full bg-white/12" />
                                            <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="h-3 w-1/3 rounded-full bg-white/12" />
                                            <div className="h-8 w-28 rounded-full bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand2))]" />
                                        </div>
                                        <div className="mt-3 h-3 w-5/6 rounded-full bg-white/10" />
                                        <div className="mt-2 h-3 w-2/3 rounded-full bg-white/8" />
                                    </div>
                                </div>

                                <div className="mt-5 text-xs text-white/60">
                                    UI premium, motion suave y CTAs claros. Sin cosas pesadas.
                                </div>
                            </div>
                        </motion.div>

                        <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/70">
                            <div className="card p-3">
                                <div className="font-semibold text-white/90">Next.js</div>
                                <div className="mt-1">App Router</div>
                            </div>
                            <div className="card p-3">
                                <div className="font-semibold text-white/90">Tailwind</div>
                                <div className="mt-1">UI 2026</div>
                            </div>
                            <div className="card p-3">
                                <div className="font-semibold text-white/90">Framer</div>
                                <div className="mt-1">Motion</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 hr-soft" />
            </div>
        </section>
    );
}

function Stat({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="card card-hover p-4">
            <div className="flex items-center gap-2 text-white/90">
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/8 border border-white/10">
          {icon}
        </span>
                <div className="text-sm font-semibold">{title}</div>
            </div>
            <div className="mt-2 text-sm leading-6 text-white/70">{desc}</div>
        </div>
    );
}
