"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "56900000000"; // <-- cambia a tu número
const WA_PREFILL =
    "Hola, quiero partir con una web premium (Chile). Rubro: _____. Objetivo: _____. ¿Me recomiendas plan y plazos?";

function buildWhatsAppHref(message: string) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export default function CTA() {
    const waHref = buildWhatsAppHref(WA_PREFILL);

    return (
        <section className="dock-safe">
            <div className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="card relative overflow-hidden p-7 md:p-10"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(120,119,255,0.25)] via-[rgba(45,212,191,0.18)] to-transparent" />
                    <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
                        <div className="md:col-span-7">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                                <Sparkles className="h-4 w-4" />
                                Si quieres que tu web se vea pro y convierta, es por acá
                            </div>

                            <h3 className="mt-4 text-balance text-3xl font-[780] leading-[1.05] tracking-[-0.04em] md:text-4xl">
                                ¿La hacemos bien desde el inicio?
                            </h3>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                                Te propongo un plan claro y lo cerramos rápido. Partimos con una landing premium y después puedes sumar mejoras y mantención.
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-sm text-white/75">
                                <ShieldCheck className="h-5 w-5" />
                                Plazos claros + pulido final antes de publicar.
                            </div>
                        </div>

                        <div className="md:col-span-5">
                            <div className="grid gap-3">
                                <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                                    Hablar por WhatsApp ahora
                                    <MessageCircle className="h-5 w-5" />
                                </a>

                                <button
                                    type="button"
                                    onClick={() => document.getElementById("precios")?.scrollIntoView({ behavior: "smooth" })}
                                    className="btn btn-ghost w-full"
                                >
                                    Ver planes
                                    <ArrowUpRight className="h-5 w-5" />
                                </button>

                                <div className="text-xs text-white/55">
                                    Consejo: escribe tu rubro + objetivo y te recomiendo el plan altiro.
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
