"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    ArrowUpRight,
    BadgeCheck,
    Flame,
    Home,
    LayoutTemplate,
    MessageCircle,
    Tag,
    Workflow,
} from "lucide-react";

type NavItem = {
    id: string;
    label: string;
    icon: React.ReactNode;
};

const WHATSAPP_NUMBER = "56900000000"; // <-- pon tu número real (sin +)
const WA_PREFILL =
    "Hola, quiero cotizar una página web premium (Chile). Mi rubro es: _____. Necesito: _____. ¿Me mandas planes y plazos?";

function buildWhatsAppHref(message: string) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

export default function Navbar() {
    const items: NavItem[] = useMemo(
        () => [
            { id: "top", label: "Inicio", icon: <Home className="h-5 w-5" /> },
            { id: "servicios", label: "Oferta", icon: <Workflow className="h-5 w-5" /> },
            { id: "portfolio", label: "Ejemplos", icon: <LayoutTemplate className="h-5 w-5" /> },
            { id: "precios", label: "Planes", icon: <Tag className="h-5 w-5" /> },
        ],
        []
    );

    const [active, setActive] = useState<string>("top");
    const [scrolled, setScrolled] = useState(false);

    const manualLockUntilRef = useRef<number>(0);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (v) => {
        setScrolled(v > 10);
    });

    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const sectionIds = items.map((i) => i.id);
        const nodes = sectionIds
            .map((id) => document.getElementById(id))
            .filter((n): n is HTMLElement => Boolean(n));

        if (!nodes.length) return;

        observerRef.current?.disconnect();
        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (Date.now() < manualLockUntilRef.current) return;

                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (visible?.target?.id) setActive(visible.target.id);
            },
            {
                root: null,
                threshold: [0.18, 0.28, 0.38, 0.52],
                rootMargin: "-25% 0px -55% 0px",
            }
        );

        nodes.forEach((n) => observerRef.current?.observe(n));

        return () => observerRef.current?.disconnect();
    }, [items]);

    const onNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        setActive(id);
        manualLockUntilRef.current = Date.now() + 900;

        el.scrollIntoView({ behavior: "smooth", block: "start" });

        window.setTimeout(() => {
            if (Date.now() < manualLockUntilRef.current) return;

            const ids = items.map((i) => i.id);
            const positions = ids
                .map((sid) => {
                    const node = document.getElementById(sid);
                    if (!node) return null;
                    const r = node.getBoundingClientRect();
                    return { id: sid, top: r.top };
                })
                .filter(Boolean) as { id: string; top: number }[];

            if (!positions.length) return;

            const sorted = positions
                .map((p) => ({ ...p, score: Math.abs(clamp(p.top, -120, 99999)) }))
                .sort((a, b) => a.score - b.score);

            if (sorted[0]?.id) setActive(sorted[0].id);
        }, 1050);
    };

    const waHref = buildWhatsAppHref(WA_PREFILL);

    return (
        <>
            {/* Desktop / Tablet Header */}
            <header className="fixed top-0 z-50 hidden w-full md:block">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ y: -12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className={[
                            "mt-4 flex items-center justify-between rounded-2xl border px-3 py-3 md:px-4",
                            scrolled ? "glass" : "bg-transparent border-white/10",
                        ].join(" ")}
                    >
                        <Link href="/" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 border border-white/10">
                <Flame className="h-5 w-5 text-white" />
              </span>
                            <div className="leading-tight">
                                <div className="text-sm font-semibold tracking-tight">Agencia Web</div>
                                <div className="text-[12px] text-white/70">Premium • Conversión • Performance</div>
                            </div>
                        </Link>

                        <nav className="hidden items-center gap-1 md:flex">
                            {items.map((it) => (
                                <button
                                    key={it.id}
                                    onClick={() => onNavClick(it.id)}
                                    className={[
                                        "rounded-full px-4 py-2 text-sm font-medium transition",
                                        active === it.id
                                            ? "bg-white/10 border border-white/15"
                                            : "hover:bg-white/5 border border-transparent",
                                    ].join(" ")}
                                    type="button"
                                >
                                    {it.label}
                                </button>
                            ))}
                        </nav>

                        <div className="hidden items-center gap-2 md:flex">
                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost"
                                aria-label="Hablar por WhatsApp"
                            >
                                <MessageCircle className="h-5 w-5" />
                                WhatsApp
                            </a>

                            <button onClick={() => onNavClick("precios")} type="button" className="btn btn-primary">
                                Ver planes
                                <ArrowUpRight className="h-5 w-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Mobile Dock (único nav en móvil) */}
            <div className="fixed bottom-3 left-0 right-0 z-50 md:hidden">
                <div className="mx-auto w-full max-w-lg px-4">
                    <div className="glass rounded-[24px] border border-white/10 px-3 py-2">
                        <div className="grid grid-cols-5 items-center gap-1">
                            <DockButton
                                label="Inicio"
                                active={active === "top"}
                                onClick={() => onNavClick("top")}
                                icon={<Home className="h-5 w-5" />}
                            />

                            <DockButton
                                label="Oferta"
                                active={active === "servicios"}
                                onClick={() => onNavClick("servicios")}
                                icon={<Workflow className="h-5 w-5" />}
                            />

                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand2))] text-[rgb(var(--bg0))] shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition active:translate-y-[1px]"
                                aria-label="WhatsApp (CTA principal)"
                            >
                                <span className="absolute -inset-1 rounded-2xl bg-white/20 blur opacity-0 transition group-hover:opacity-60" />
                                <MessageCircle className="relative h-6 w-6" />
                            </a>

                            <DockButton
                                label="Ejemplos"
                                active={active === "portfolio"}
                                onClick={() => onNavClick("portfolio")}
                                icon={<LayoutTemplate className="h-5 w-5" />}
                            />

                            <DockButton
                                label="Planes"
                                active={active === "precios"}
                                onClick={() => onNavClick("precios")}
                                icon={<Tag className="h-5 w-5" />}
                            />
                        </div>

                        <div className="mt-2 flex items-center justify-center gap-2 text-[11px] text-white/70">
                            <BadgeCheck className="h-4 w-4" />
                            Respondo rápido por WhatsApp (horario hábil)
                        </div>
                    </div>
                </div>
            </div>

            <div id="top" className="h-0 w-0" />
        </>
    );
}

function DockButton({
                        label,
                        icon,
                        onClick,
                        active,
                    }: {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
    active: boolean;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 transition",
                active ? "bg-white/12 border border-white/20" : "hover:bg-white/6 border border-transparent",
            ].join(" ")}
            aria-label={label}
        >
            <span className={active ? "text-white" : "text-white/80"}>{icon}</span>

            <span className={["text-[11px] font-medium transition", active ? "text-white" : "text-white/70"].join(" ")}>
        {label}
      </span>

            <span
                aria-hidden="true"
                className={[
                    "mt-0.5 h-1 w-6 rounded-full transition",
                    active
                        ? "bg-gradient-to-r from-[rgb(var(--brand))] to-[rgb(var(--brand2))] opacity-100"
                        : "bg-white/20 opacity-0",
                ].join(" ")}
            />
        </button>
    );
}
