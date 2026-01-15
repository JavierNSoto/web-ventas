import Hero from "@/components/Hero";

const BRAND = "TuMarca";
const WHATSAPP = "569XXXXXXXX";
const WA_TEXT = encodeURIComponent("Hola, quiero cotizar una página web.");

export default function Home() {
    const waLink = `https://wa.me/${WHATSAPP}?text=${WA_TEXT}`;

    return (
        <main className="min-h-screen bg-white text-slate-900">
            <Hero brand={BRAND} waLink={waLink} />
            {/* resto de secciones (servicios, precios, FAQ, contacto) pueden seguir server */}
        </main>
    );
}
