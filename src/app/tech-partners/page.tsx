import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import BuildConnectionCta from "@/components/partners/BuildConnectionCta";
import KeyPartnersLogos from "@/components/partners/KeyPartnersLogos";
import TechEcosystemSection from "@/components/partners/TechEcosystemSection";

export const metadata: Metadata = {
  title: "Tech Partners | Sunbeds",
  description: "Integrate with Sunbeds through channel managers and APIs.",
};

export default function TechPartnersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="relative overflow-hidden bg-white">
          <Image
            src="/images/placeholder-lines-bg.png"
            alt=""
            fill
            aria-hidden
            className="pointer-events-none object-cover opacity-[0.07]"
            sizes="100vw"
          />
          <div className="relative">
            <TechEcosystemSection />
            <KeyPartnersLogos />
            <BuildConnectionCta />
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
