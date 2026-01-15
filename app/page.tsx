import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import SocialProof from "@/components/SocialProof";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";

export default function Page() {
    return (
        <>
            <Hero />

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <Services />
                <Process />
                <SocialProof />
                <Portfolio />
                <Pricing />
                <FAQ />
                <Contact />
            </div>

            <CTA />
        </>
    );
}
