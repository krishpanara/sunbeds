import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ConnectivityText from "@/components/partners/ConnectivityText";
import HubIllustration from "@/components/partners/HubIllustration";
import OnboardingProcess from "@/components/partners/OnboardingProcess";
import PartnerFeatureGrid from "@/components/partners/PartnerFeatureGrid";
import PartnerLogoStrips from "@/components/partners/PartnerLogoStrips";
import PartnersHero from "@/components/partners/PartnersHero";

export const metadata: Metadata = {
  title: "Distribution Partners | Sunbeds",
  description: "Optimize direct partnerships and unlock more hotel opportunities.",
};

export default function DistributionPartnersPage() {
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
            <PartnersHero />
            <HubIllustration />
            <PartnerFeatureGrid />
            <ConnectivityText />
            <OnboardingProcess />
            <PartnerLogoStrips />
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
