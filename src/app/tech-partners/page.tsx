import type { Metadata } from "next";
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
        <TechEcosystemSection />
        <KeyPartnersLogos />
        <BuildConnectionCta />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
