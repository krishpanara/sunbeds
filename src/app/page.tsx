import BuildFuture from "@/components/BuildFuture";
import Discover from "@/components/Discover";
import DistributionPartnersSection from "@/components/DistributionPartnersSection";
import Fingertips from "@/components/Fingertips";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HotelsSection from "@/components/HotelsSection";
import Newsletter from "@/components/Newsletter";
import PartnerEcosystem from "@/components/PartnerEcosystem";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Fingertips />
        <Discover />
        <HotelsSection />
        <DistributionPartnersSection />
        <PartnerEcosystem />
        <WhyChooseUs />
        <BuildFuture />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
