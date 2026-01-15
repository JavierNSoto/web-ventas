"use client";

import Link from "next/link";
import { Flame, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "56900000000"; // <-- cambia a tu número
function buildWhatsAppHref(message: string) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export default function Footer() {
    const waHref = buildWhatsAppHref("Hola, quiero cotizar una web premium (Chile). ¿Me orientas con planes y plazos?");

    return (
        <footer className="dock-safe">
            <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
                <div className="hr-soft" />

                <div className="mt-10 grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 border border-white/10">
                <Flame className="h-5 w-5 text-white" />
              </span>
                            <div className="leading-tight">
                                <div className="text-sm font-semibold tracking-tight">Agencia Web</div>
                                <div className="text-[12px] text-white/70">Premium • Conversión • Performance</div>
                            </div>
                        </Link>

                        <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                            Creamos páginas web modernas y enfocadas en conversión. Además, ofrecemos mejoras continuas, asesoría y mantención.
                        </p>

                        <div className="mt-5 flex items-center gap-2">
                            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                                <MessageCircle className="h-5 w-5" />
                                WhatsApp
                            </a>

                            <button
                                type="button"
                                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                                className="btn btn-ghost"
                            >
                                Contacto
                            </button>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="grid gap-6 sm:grid-cols-3">
                            <Col
                                title="Secciones"
                                links={[
                                    { label: "Oferta", id: "servicios" },
                                    { label: "Ejemplos", id: "portfolio" },
                                    { label: "Planes", id: "precios" },
                                    { label: "Contacto", id: "contacto" },
                                ]}
                            />
                            <Col
                                title="Servicios"
                                links={[
                                    { label: "Creación web", id: "servicios" },
                                    { label: "Mejoras", id: "servicios" },
                                    { label: "Asesoría", id: "servicios" },
                                    { label: "Mantención", id: "servicios" },
                                ]}
                            />
                            <div className="card p-5">
                                <div className="text-sm font-semibold text-white/90">Rápido y ordenado</div>
                                <div className="mt-2 text-sm text-white/70">
                                    Si me escribes rubro + objetivo, te respondo con plan y plazos sugeridos.
                                </div>
                                <div className="mt-4 text-xs text-white/55">
                                    © {new Date().getFullYear()} Agencia Web. Todos los derechos reservados.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-xs text-white/50">
                    Hecho con Next.js, Tailwind y Framer Motion. Optimizado para Vercel.
                </div>
            </div>
        </footer>
    );
}

function Col({
                 title,
                 links,
             }: {
    title: string;
    links: { label: string; id: string }[];
}) {
    return (
        <div className="card p-5">
            <div className="text-sm font-semibold text-white/90">{title}</div>
            <div className="mt-3 grid gap-2">
                {links.map((l) => (
                    <button
                        key={l.label}
                        type="button"
                        onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                        className="text-left text-sm text-white/70 transition hover:text-white"
                    >
                        {l.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
