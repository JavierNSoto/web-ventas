import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TuMarca — Páginas web modernas que venden",
    description:
        "Creamos páginas web modernas, rápidas y enfocadas en conversión. Asesoría, SEO base y mantención.",
    metadataBase: new URL("https://example.com"),
    openGraph: {
        title: "TuMarca — Páginas web modernas que venden",
        description:
            "Diseño premium + performance + SEO base + soporte. Ideal para vender más.",
        type: "website",
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
