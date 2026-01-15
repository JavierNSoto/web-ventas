import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosMarquee from "@/components/LogosMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const BRAND = "TuMarca";
const WHATSAPP = "569XXXXXXXX"; // Ej: 56912345678
const EMAIL = "contacto@tudominio.cl";
const CALENDLY_URL = "https://calendly.com/tuusuario/llamada"; // opcional, si no tienes, deja ""

const WA_TEXT_MAIN = encodeURIComponent(
    "Hola, quiero cotizar una página web. ¿Me compartes paquetes y tiempos?"
);
const WA_TEXT_MAINT = encodeURIComponent(
    "Hola, me interesa un plan de mantención web. ¿Qué incluye y cuánto cuesta?"
);

export default function Home() {
    const waMain = `https://wa.me/${WHATSAPP}?text=${WA_TEXT_MAIN}`;
    const waMaint = `https://wa.me/${WHATSAPP}?text=${WA_TEXT_MAINT}`;

    return (
        <main className="min-h-screen">
            <Navbar brand={BRAND} waLink={waMain} />
            <Hero brand={BRAND} waLink={waMain} calendly={CALENDLY_URL || undefined} />
            <LogosMarquee />

            <Services />
            <Process />
            <Portfolio />
            <Pricing waMain={waMain} waMaint={waMaint} />
            <Testimonials />
            <FAQ />
            <CTA waLink={waMain} />

            {/* CONTACTO (Server, sin JS) */}
            <section id="contacto" className="container-max pb-16">
                <div className="glow-border">
                    <div className="glass shadow-soft rounded-2xl p-8 md:p-10">
                        <h2 className="text-3xl font-extrabold tracking-tight">Cotiza en 1 minuto</h2>
                        <p className="mt-3 text-slate-600 max-w-2xl">
                            Cuéntame qué vendes, qué necesitas (landing/corporativa/tienda) y cuándo quieres lanzarla.
                        </p>

                        <form className="mt-6 grid gap-4 md:grid-cols-2" action="/gracias" method="GET">
                            <input
                                className="rounded-xl border border-slate-300 bg-white/70 px-4 py-3"
                                placeholder="Nombre"
                                name="name"
                                required
                            />
                            <input
                                className="rounded-xl border border-slate-300 bg-white/70 px-4 py-3"
                                placeholder="Email"
                                name="email"
                                type="email"
                                required
                            />
                            <input
                                className="rounded-xl border border-slate-300 bg-white/70 px-4 py-3 md:col-span-2"
                                placeholder="¿Qué necesitas? (Landing / Corporativa / Tienda) + rubro"
                                name="need"
                                required
                            />
                            <textarea
                                className="rounded-xl border border-slate-300 bg-white/70 px-4 py-3 md:col-span-2 min-h-[120px]"
                                placeholder="Cuéntame tu objetivo (vender más, captar leads, mostrar servicios, etc.)"
                                name="message"
                                required
                            />

                            <button type="submit" className="btn btn-primary shadow-soft md:col-span-2">
                                Enviar solicitud
                            </button>

                            <a
                                className="md:col-span-2 text-center text-sm text-slate-600 hover:text-slate-900"
                                href={waMain}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Prefiero hablar por WhatsApp
                            </a>
                        </form>

                        <div className="mt-6 text-sm text-slate-600">
                            O escríbenos: <a className="hover:text-slate-900" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer brand={BRAND} email={EMAIL} />
        </main>
    );
}
