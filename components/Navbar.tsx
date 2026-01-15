import { Sparkles } from "lucide-react";

export default function Navbar({
                                   brand,
                                   waLink,
                               }: {
    brand: string;
    waLink: string;
}) {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
            <div className="container-max flex items-center justify-between py-4">
                <div className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
                    <span>{brand}</span>
                </div>

                <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
                    <a href="#servicios" className="hover:text-slate-900">Servicios</a>
                    <a href="#mantencion" className="hover:text-slate-900">Mantención</a>
                    <a href="#portafolio" className="hover:text-slate-900">Portafolio</a>
                    <a href="#precios" className="hover:text-slate-900">Precios</a>
                    <a href="#faq" className="hover:text-slate-900">FAQ</a>
                    <a href="#contacto" className="hover:text-slate-900">Contacto</a>
                </nav>

                <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer">
                    Cotizar por WhatsApp
                </a>
            </div>
        </header>
    );
}
