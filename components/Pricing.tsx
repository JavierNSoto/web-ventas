"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Check, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "56900000000"; // <-- cambia a tu número
function buildWhatsAppHref(message: string) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

type Plan = {
    name: string;
    price: string;
    desc: string;
    highlight?: boolean;
    features: string[];
    waMessage: string;
};

const plans: Plan[] = [
    {
        name: "Starter",
        price: "Desde $___ CLP",
        desc: "Para partir rápido con una landing pro y enfocada en contacto.",
        features: [
            "Landing 1 página (secciones clave)",
            "CTA a WhatsApp + copy base",
            "SEO técnico base",
            "Optimización de velocidad",
            "Entrega 7–10 días",
        ],
        waMessage: "Hola, quiero cotizar el plan Starter (Landing). Rubro: _____. Objetivo: _____.",
    },
    {
        name: "Business",
        price: "Desde $___ CLP",
        desc: "Para empresas que necesitan verse serias y convertir.",
        highlight: true,
        features: [
            "Landing + secciones avanzadas",
            "Prueba social + FAQ + proceso",
            "Enfoque conversion-first",
            "Analítica básica (base)",
            "Entrega 10–14 días",
            "Soporte priorizado",
        ],
        waMessage: "Hola, quiero cotizar el plan Business. Rubro: _____. Necesito: _____.",
    },
    {
        name: "Growth",
        price: "Desde $___ CLP",
        desc: "Evolución continua: mejoras, ajustes y mantención mensual.",
        features: [
            "Todo lo de Business",
            "Ciclos de mejoras continuas",
            "Cambios y soporte mensual",
            "Optimización UX y copy",
            "Backlog y roadmap",
        ],
        waMessage: "Hola, quiero Growth (mejoras + mantención). Mi web actual es: _____.",
    },
];

export default function Pricing() {
    return (
        <section id="precios" className="section">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="section-title">Planes pensados para vender</h2>
                    <p className="section-subtitle">
                        Partimos con una entrega premium y, si te hace sentido, seguimos con mejoras continuas para que tu web no se quede atrás.
                    </p>
                </div>

                <div className="pill">
                    <ShieldCheck className="h-4 w-4" />
                    Trabajo ordenado y profesional
                </div>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {plans.map((p, idx) => {
                    const href = buildWhatsAppHref(p.waMessage);
                    return (
                        <motion.div
                            key={p.name}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
                            className={[
                                "card card-hover relative overflow-hidden p-6",
                                p.highlight ? "border-white/20" : "",
                            ].join(" ")}
                        >
                            {p.highlight ? (
                                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(120,119,255,0.18)] to-transparent" />
                            ) : null}

                            <div className="relative">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div className="text-lg font-semibold tracking-tight">{p.name}</div>
                                            {p.highlight ? (
                                                <span className="pill">
                          <Sparkles className="h-4 w-4" />
                          Más elegido
                        </span>
                                            ) : null}
                                        </div>
                                        <div className="mt-1 text-sm text-white/70">{p.desc}</div>
                                    </div>

                                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/8 border border-white/10">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                                </div>

                                <div className="mt-5 text-3xl font-semibold tracking-tight">{p.price}</div>
                                <div className="mt-1 text-xs text-white/55">Se ajusta según alcance y necesidades</div>

                                <div className="mt-5 space-y-2">
                                    {p.features.map((f) => (
                                        <div key={f} className="flex items-start gap-2 text-sm text-white/75">
                      <span className="mt-[3px] grid h-5 w-5 place-items-center rounded-full bg-white/8 border border-white/10">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                                            <span className="leading-6">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-col gap-2">
                                    <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                                        Cotizar por WhatsApp
                                        <MessageCircle className="h-5 w-5" />
                                    </a>

                                    <button
                                        type="button"
                                        onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                                        className="btn btn-ghost w-full"
                                    >
                                        Cotizar por email
                                        <ArrowUpRight className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="mt-4 text-xs text-white/55">
                                    Antes de publicar, lo dejamos pulido contigo: detalles, copy y flow.
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="mt-6 card p-6">
                <div className="grid gap-4 md:grid-cols-3">
                    <Assurance title="Sin humo" desc="Método claro y entregables acordados." />
                    <Assurance title="Sin enredos" desc="WhatsApp + ciclos cortos de feedback." />
                    <Assurance title="Sin quedar botado" desc="Mantención y mejoras disponibles." />
                </div>
            </div>

            <div className="mt-14 hr-soft" />
        </section>
    );
}

function Assurance({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold text-white/90">{title}</div>
            <div className="mt-2 text-sm leading-6 text-white/70">{desc}</div>
        </div>
    );
}
