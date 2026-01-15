"use client";

import { Wrench, Layers, BadgeDollarSign, MessageCircle, Home } from "lucide-react";

export default function MobileDock({ waLink }: { waLink: string }) {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-6xl px-3 pb-3">
                <div className="glass shadow-soft card overflow-hidden">
                    <div className="grid grid-cols-5 items-center">
                        <a href="#top" className="py-3 text-center text-[11px] text-slate-600 hover:text-slate-900">
                            <Home className="mx-auto h-5 w-5" />
                            Inicio
                        </a>
                        <a href="#servicios" className="py-3 text-center text-[11px] text-slate-600 hover:text-slate-900">
                            <Layers className="mx-auto h-5 w-5" />
                            Web
                        </a>

                        {/* CTA WhatsApp destacado al centro */}
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noreferrer"
                            className="py-3 text-center"
                            aria-label="Cotizar por WhatsApp"
                        >
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-soft -translate-y-2">
                <MessageCircle className="h-6 w-6" />
              </span>
                            <div className="-mt-1 text-[11px] font-extrabold text-slate-900">Cotizar</div>
                        </a>

                        <a href="#precios" className="py-3 text-center text-[11px] text-slate-600 hover:text-slate-900">
                            <BadgeDollarSign className="mx-auto h-5 w-5" />
                            Precios
                        </a>
                        <a href="#mantencion" className="py-3 text-center text-[11px] text-slate-600 hover:text-slate-900">
                            <Wrench className="mx-auto h-5 w-5" />
                            Soporte
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
