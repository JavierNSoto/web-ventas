import { Home, Layers, BadgeDollarSign, Wrench, MessageCircle } from "lucide-react";

export default function MobileDock({ waLink }: { waLink: string }) {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
            <div className="container-max pb-3">
                <div className="glass shadow-soft rounded-3xl border border-white/10 overflow-hidden">
                    <div className="grid grid-cols-5 items-center">
                        <a href="#top" className="py-3 text-center text-[11px] text-white/70 hover:text-white">
                            <Home className="mx-auto h-5 w-5" /> Inicio
                        </a>
                        <a href="#servicios" className="py-3 text-center text-[11px] text-white/70 hover:text-white">
                            <Layers className="mx-auto h-5 w-5" /> Web
                        </a>

                        <a href={waLink} target="_blank" rel="noreferrer" className="py-3 text-center">
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black shadow-soft -translate-y-2">
                <MessageCircle className="h-6 w-6" />
              </span>
                            <div className="-mt-1 text-[11px] font-extrabold text-white">WhatsApp</div>
                        </a>

                        <a href="#precios" className="py-3 text-center text-[11px] text-white/70 hover:text-white">
                            <BadgeDollarSign className="mx-auto h-5 w-5" /> Precios
                        </a>
                        <a href="#mantencion" className="py-3 text-center text-[11px] text-white/70 hover:text-white">
                            <Wrench className="mx-auto h-5 w-5" /> Soporte
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
