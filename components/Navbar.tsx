import { Sparkles } from "lucide-react";

export default function Navbar({ brand, waLink }: { brand: string; waLink: string }) {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur">
            <div className="container-max flex items-center justify-between py-4">
                <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
                    <span>{brand}</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
                    <a className="hover:text-slate-900" href="#servicios">Servicios</a>
                    <a className="hover:text-slate-900" href="#portafolio">Portafolio</a>
                    <a className="hover:text-slate-900" href="#mantencion">Mantención</a>
                    <a className="hover:text-slate-900" href="#precios">Precios</a>
                    <a className="hover:text-slate-900" href="#faq">FAQ</a>
                    <a className="hover:text-slate-900" href="#contacto">Contacto</a>
                </nav>

                <div className="flex items-center gap-2">
                    <a className="btn btn-primary hidden md:inline-flex" href={waLink} target="_blank" rel="noreferrer">
                        Cotizar por WhatsApp
                    </a>

                    {/* Mobile: CTA simple arriba (el nav real está abajo) */}
                    <a className="btn btn-primary md:hidden" href={waLink} target="_blank" rel="noreferrer">
                        WhatsApp
                    </a>
                </div>
            </div>
        </header>
    );
}
