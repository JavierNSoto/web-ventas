import SectionReveal from "@/components/SectionReveal";
import { ArrowRight } from "lucide-react";

export default function CTA({ waLink }: { waLink: string }) {
    return (
        <section className="container-max pb-16">
            <SectionReveal>
                <div className="glow-border">
                    <div className="glass shadow-soft rounded-2xl p-8 md:p-10">
                        <div className="text-sm text-slate-600">Listo para competir en serio</div>
                        <h3 className="mt-2 text-3xl font-extrabold tracking-tight">
                            Te armamos una web que se ve premium y convierte.
                        </h3>
                        <p className="mt-3 text-slate-600 max-w-2xl">
                            Si me dices qué vendes y a quién, te recomiendo la estructura exacta (secciones y copy) para maximizar leads.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a className="btn btn-primary shadow-soft group" href={waLink} target="_blank" rel="noreferrer">
                                Cotizar ahora <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                            </a>
                            <a className="btn btn-secondary shadow-soft" href="#contacto">
                                Prefiero formulario
                            </a>
                        </div>
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}
