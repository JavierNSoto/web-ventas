"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";

const WHATSAPP_NUMBER = "56900000000"; // <-- cambia a tu número
const EMAIL_TO = "hola@tudominio.cl"; // <-- cambia a tu email

function buildWhatsAppHref(message: string) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export default function Contact() {
    const [name, setName] = useState("");
    const [business, setBusiness] = useState("");
    const [goal, setGoal] = useState("");
    const [budget, setBudget] = useState("");
    const [notes, setNotes] = useState("");

    const waMessage = useMemo(() => {
        const lines = [
            "Hola, quiero cotizar una web premium (Chile).",
            name ? `Nombre: ${name}` : null,
            business ? `Rubro/Negocio: ${business}` : null,
            goal ? `Objetivo: ${goal}` : null,
            budget ? `Presupuesto aprox: ${budget}` : null,
            notes ? `Detalles: ${notes}` : null,
        ].filter(Boolean);
        return lines.join("\n");
    }, [name, business, goal, budget, notes]);

    const waHref = buildWhatsAppHref(waMessage);

    const onEmail = () => {
        const subject = encodeURIComponent("Cotización web premium");
        const body = encodeURIComponent(waMessage);
        window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contacto" className="section">
            <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                    <h2 className="section-title">Conversemos y lo cerramos rápido</h2>
                    <p className="section-subtitle">
                        Te respondo con plan sugerido, plazos y próximos pasos. Si ya tienes web, también podemos mejorarla y mantenerla.
                    </p>

                    <div className="mt-7 grid gap-3">
                        <InfoRow icon={<MessageCircle className="h-4 w-4" />} title="WhatsApp" desc="Canal principal (rápido)" />
                        <InfoRow icon={<Mail className="h-4 w-4" />} title="Email" desc="Para cotización formal" />
                        <InfoRow icon={<ShieldCheck className="h-4 w-4" />} title="Orden" desc="Checklist y entregables claros" />
                    </div>

                    <div className="mt-7 card p-5">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <div className="text-sm font-semibold text-white/90">¿Te urge?</div>
                                <div className="mt-1 text-sm text-white/70">
                                    Escribe “URGENTE” y te digo altiro si puedo priorizar.
                                </div>
                            </div>
                            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/8 border border-white/10">
                <Phone className="h-5 w-5" />
              </span>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="lg:col-span-7"
                >
                    <div className="card p-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Tu nombre" value={name} onChange={setName} placeholder="Ej: Javier" />
                            <Field label="Tu negocio / rubro" value={business} onChange={setBusiness} placeholder="Ej: Centro médico / Pyme / Servicios" />
                            <Field label="Objetivo principal" value={goal} onChange={setGoal} placeholder="Ej: Más cotizaciones por WhatsApp" />
                            <Field label="Presupuesto aprox" value={budget} onChange={setBudget} placeholder="Ej: $___ a $___ CLP" />
                        </div>

                        <div className="mt-4">
                            <label className="text-sm font-semibold text-white/90">Detalles (opcional)</label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="¿Qué necesitas? ¿Tienes referencias? ¿Servicios clave?"
                                className="mt-2 h-28 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 outline-none transition focus:border-white/20"
                            />
                            <div className="mt-2 text-xs text-white/55">
                                Con 2–3 líneas basta. Lo ordenamos y te propongo un plan.
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                                Enviar por WhatsApp
                                <MessageCircle className="h-5 w-5" />
                            </a>

                            <button type="button" onClick={onEmail} className="btn btn-ghost w-full">
                                Enviar por email
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="mt-4 text-xs text-white/55">
                            Usamos tus datos solo para responder la cotización.
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="mt-14 hr-soft" />
        </section>
    );
}

function InfoRow({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
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

function Field({
                   label,
                   value,
                   onChange,
                   placeholder,
               }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder: string;
}) {
    return (
        <div>
            <label className="text-sm font-semibold text-white/90">{label}</label>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 outline-none transition focus:border-white/20"
            />
        </div>
    );
}
