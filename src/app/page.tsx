import Image from "next/image";
import BuildFuture from "@/components/BuildFuture";
import Discover from "@/components/Discover";
import DistributionPartnersSection from "@/components/DistributionPartnersSection";
import Fingertips from "@/components/Fingertips";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HotelsSection from "@/components/HotelsSection";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import PartnerEcosystem from "@/components/PartnerEcosystem";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar theme="dark" />
      <main className="flex-1">
        <Hero />

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
            <Fingertips />
            <Discover />
            <HotelsSection />
            <DistributionPartnersSection />
            <PartnerEcosystem />
            <WhyChooseUs />
          </div>
        </div>

        <BuildFuture />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
