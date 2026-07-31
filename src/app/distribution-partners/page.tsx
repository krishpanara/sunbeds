import type { Metadata } from "next";
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
        <PartnersHero />
        <HubIllustration />
        <PartnerFeatureGrid />
        <ConnectivityText />
        <OnboardingProcess />
        <PartnerLogoStrips />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
