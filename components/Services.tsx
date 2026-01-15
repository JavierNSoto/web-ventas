import SectionReveal from "@/components/SectionReveal";
import { Layers, ShoppingCart, Wand2, Search, MessageCircle, Shield } from "lucide-react";

export default function Services() {
    const cards = [
        { icon: Wand2, t: "Landing que vende", d: "1 página enfocada en captar clientes. Ideal para campañas y servicios." },
        { icon: Layers, t: "Web corporativa", d: "Sitio completo para tu empresa con secciones, confianza y claridad." },
        { icon: ShoppingCart, t: "E-commerce", d: "Tienda online con catálogo, pagos y seguimiento de pedidos." },
        { icon: Search, t: "SEO base", d: "Estructura, metas, sitemap y optimización inicial para Google." },
        { icon: MessageCircle, t: "Asesoría", d: "Te guiamos en contenido, propuesta, oferta y embudo de ventas." },
        { icon: Shield, t: "Seguridad", d: "Buenas prácticas, SSL, y recomendaciones para operar seguro." },
    ];

    return (
        <section id="servicios" className="container-max py-16">
            <SectionReveal>
                <h2 className="text-3xl font-extrabold tracking-tight">Vendemos páginas web y también te asesoramos</h2>
                <p className="mt-3 text-slate-600 max-w-2xl">
                    No es solo “tener una web”. Es tener una web que se vea pro, cargue rápido y convierta visitas en clientes.
                </p>
            </SectionReveal>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                {cards.map((c) => (
                    <SectionReveal key={c.t}>
                        <div className="glass shadow-soft rounded-2xl p-6 hover:translate-y-[-2px] transition">
                            <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                                <div className="font-semibold">{c.t}</div>
                            </div>
                            <div className="mt-3 text-sm text-slate-600">{c.d}</div>
                        </div>
                    </SectionReveal>
                ))}
            </div>
        </section>
    );
}
