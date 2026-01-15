"use client";

import { motion } from "framer-motion";

export default function LogosMarquee() {
    const items = ["Performance", "SEO", "Diseño", "Conversión", "Soporte", "Mantención", "E-commerce", "Analytics"];

    return (
        <section className="border-y border-slate-200 bg-white/70">
            <div className="container-max py-8">
                <div className="text-center text-sm text-slate-600">
                    Un enfoque completo: diseño, velocidad y ventas.
                </div>

                <div className="mt-4 overflow-hidden">
                    <motion.div
                        className="flex gap-3 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
                    >
                        {[...items, ...items].map((t, idx) => (
                            <span
                                key={`${t}-${idx}`}
                                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-soft"
                            >
                {t}
              </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
