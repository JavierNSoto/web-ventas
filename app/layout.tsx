import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Agencia Web Premium | Páginas Web que Convierten",
    description:
        "Diseño y desarrollo de páginas web premium con foco en conversión. Creación, mejoras continuas, asesoramiento y mantención web.",
    metadataBase: new URL("https://example.com"),
    openGraph: {
        title: "Agencia Web Premium | Páginas Web que Convierten",
        description:
            "Landing, sitios corporativos y e-commerce con performance, SEO y copy persuasivo. Trabajo ágil, mantenimiento y evolución continua.",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
        <body className={`${inter.className} bg-app text-white antialiased`}>
        {/* Background effects */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-grid opacity-[0.12]" />
            <div className="absolute -top-48 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blob blur-3xl opacity-50" />
            <div className="absolute -bottom-64 right-[-10%] h-[520px] w-[520px] rounded-full bg-blob2 blur-3xl opacity-35" />
            <div className="absolute inset-0 bg-noise opacity-[0.08]" />
            <div className="absolute inset-0 bg-vignette" />
        </div>

        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
        </body>
        </html>
    );
}
