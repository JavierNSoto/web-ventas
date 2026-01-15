const WHATSAPP = "569XXXXXXXX"; // Ej: 56912345678
const WA_TEXT = encodeURIComponent("Hola, quiero cotizar una página web.");

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
                <div className="font-bold">TuMarca</div>

                <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
                    <a href="#servicios" className="hover:text-slate-900">
                        Servicios
                    </a>
                    <a href="#proceso" className="hover:text-slate-900">
                        Proceso
                    </a>
                    <a href="#precios" className="hover:text-slate-900">
                        Paquetes
                    </a>
                    <a href="#contacto" className="hover:text-slate-900">
                        Contacto
                    </a>
                </nav>

                <a
                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                    href={`https://wa.me/${WHATSAPP}?text=${WA_TEXT}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Cotizar por WhatsApp
                </a>
            </header>

            {/* HERO */}
            <section className="mx-auto max-w-6xl px-6 pt-10 pb-16">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                            Páginas web rápidas y que venden.
                        </h1>
                        <p className="mt-4 text-lg text-slate-600">
                            Diseño profesional, optimización SEO base, y contacto por WhatsApp/formulario para captar clientes.
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <a
                                className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800 text-center"
                                href={`https://wa.me/${WHATSAPP}?text=${WA_TEXT}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Cotizar por WhatsApp
                            </a>

                            <a
                                className="rounded-lg border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50 text-center"
                                href="#contacto"
                            >
                                Cotizar por formulario
                            </a>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
                            <div className="rounded-xl bg-slate-50 p-3">
                                <div className="font-semibold">SEO</div>
                                <div className="text-slate-600">Base</div>
                            </div>
                            <div className="rounded-xl bg-slate-50 p-3">
                                <div className="font-semibold">Mobile</div>
                                <div className="text-slate-600">Primero</div>
                            </div>
                            <div className="rounded-xl bg-slate-50 p-3">
                                <div className="font-semibold">Soporte</div>
                                <div className="text-slate-600">Opcional</div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                        <div className="rounded-xl bg-slate-100 p-6">
                            <div className="text-sm font-semibold">Incluye</div>
                            <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                <li>• Diseño moderno + copy orientado a conversión</li>
                                <li>• Botón WhatsApp + formulario de contacto</li>
                                <li>• Optimización de velocidad (Core Web Vitals)</li>
                                <li>• Configuración SEO base (títulos, metas, sitemap)</li>
                            </ul>
                        </div>

                        <div className="mt-4 rounded-xl border border-slate-200 p-4">
                            <div className="text-sm font-semibold">Tiempos estimados</div>
                            <div className="mt-1 text-slate-600 text-sm">
                                Landing: 3–7 días · Web corporativa: 7–14 días · E-commerce: 2–4 semanas
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICIOS */}
            <section id="servicios" className="mx-auto max-w-6xl px-6 pb-16">
                <h2 className="text-2xl font-bold tracking-tight">Servicios</h2>
                <p className="mt-2 text-slate-600">Elige el tipo de web según tu objetivo.</p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {[
                        {
                            t: "Landing Page",
                            d: "1 página enfocada en ventas/lead. Ideal para campañas y servicios.",
                            b: ["CTA + WhatsApp", "Formulario", "Velocidad alta"],
                        },
                        {
                            t: "Web Corporativa",
                            d: "Sitio completo para tu empresa con secciones, servicios y contacto.",
                            b: ["Hasta 5 secciones", "SEO base", "Secciones editables"],
                        },
                        {
                            t: "E-commerce",
                            d: "Tienda online con catálogo, pagos y seguimiento de pedidos.",
                            b: ["Productos", "Pagos", "Integraciones"],
                        },
                    ].map((x) => (
                        <div key={x.t} className="rounded-2xl border border-slate-200 p-5">
                            <div className="font-semibold">{x.t}</div>
                            <div className="mt-2 text-sm text-slate-600">{x.d}</div>
                            <ul className="mt-4 space-y-1 text-sm text-slate-700">
                                {x.b.map((k) => (
                                    <li key={k}>• {k}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROCESO */}
            <section id="proceso" className="mx-auto max-w-6xl px-6 pb-16">
                <h2 className="text-2xl font-bold tracking-tight">Proceso</h2>
                <p className="mt-2 text-slate-600">Simple, rápido y con entregables claros.</p>

                <div className="mt-6 grid gap-4 md:grid-cols-4">
                    {[
                        { n: "1", t: "Brief", d: "Definimos objetivo, contenido y estructura." },
                        { n: "2", t: "Diseño", d: "Propuesta visual alineada a tu marca." },
                        { n: "3", t: "Desarrollo", d: "Implementación, performance y SEO base." },
                        { n: "4", t: "Publicación", d: "Dominio, SSL, analítica y entrega final." },
                    ].map((x) => (
                        <div key={x.n} className="rounded-2xl border border-slate-200 p-5">
                            <div className="text-sm font-semibold text-slate-500">Paso {x.n}</div>
                            <div className="mt-1 font-semibold">{x.t}</div>
                            <div className="mt-2 text-sm text-slate-600">{x.d}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRECIOS */}
            <section id="precios" className="mx-auto max-w-6xl px-6 pb-16">
                <h2 className="text-2xl font-bold tracking-tight">Paquetes</h2>
                <p className="mt-2 text-slate-600">Precios “desde” para filtrar y acelerar decisiones.</p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {[
                        {
                            t: "Landing",
                            price: "Desde $___",
                            items: ["1 página", "WhatsApp + formulario", "SEO base", "Entrega 3–7 días"],
                        },
                        {
                            t: "Corporativa",
                            price: "Desde $___",
                            items: ["Hasta 5 secciones", "SEO base", "Optimización velocidad", "Entrega 7–14 días"],
                        },
                        {
                            t: "E-commerce",
                            price: "Desde $___",
                            items: ["Catálogo", "Pagos", "Configuración básica", "Entrega 2–4 semanas"],
                        },
                    ].map((x) => (
                        <div key={x.t} className="rounded-2xl border border-slate-200 p-6">
                            <div className="font-semibold">{x.t}</div>
                            <div className="mt-2 text-2xl font-extrabold">{x.price}</div>
                            <ul className="mt-4 space-y-1 text-sm text-slate-700">
                                {x.items.map((it) => (
                                    <li key={it}>• {it}</li>
                                ))}
                            </ul>
                            <a
                                className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
                                href={`https://wa.me/${WHATSAPP}?text=${WA_TEXT}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Cotizar
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACTO */}
            <section id="contacto" className="mx-auto max-w-6xl px-6 pb-20">
                <div className="rounded-2xl border border-slate-200 p-6 md:p-10">
                    <h2 className="text-2xl font-bold">Contacto</h2>
                    <p className="mt-2 text-slate-600">
                        Déjame tus datos y te respondo dentro de 24 horas. (Por ahora redirige a /gracias)
                    </p>

                    <form className="mt-6 grid gap-4 md:grid-cols-2" action="/gracias" method="GET">
                        <input
                            className="rounded-lg border border-slate-300 px-4 py-3"
                            placeholder="Nombre"
                            name="name"
                            required
                        />
                        <input
                            className="rounded-lg border border-slate-300 px-4 py-3"
                            placeholder="Email"
                            name="email"
                            type="email"
                            required
                        />
                        <input
                            className="rounded-lg border border-slate-300 px-4 py-3 md:col-span-2"
                            placeholder="Cuéntame qué necesitas (landing, corporativa, tienda, etc.)"
                            name="message"
                            required
                        />

                        <button
                            type="submit"
                            className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800 md:col-span-2"
                        >
                            Enviar
                        </button>

                        <a
                            className="md:col-span-2 text-center text-sm text-slate-600 hover:text-slate-900"
                            href={`https://wa.me/${WHATSAPP}?text=${WA_TEXT}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Prefiero hablar por WhatsApp
                        </a>
                    </form>
                </div>

                <footer className="mt-10 flex flex-col gap-2 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
                    <div>© {new Date().getFullYear()} TuMarca. Todos los derechos reservados.</div>
                    <div className="flex gap-4">
                        <a className="hover:text-slate-900" href="#">
                            Política de privacidad
                        </a>
                        <a className="hover:text-slate-900" href="#">
                            Términos
                        </a>
                    </div>
                </footer>
            </section>
        </main>
    );
}
