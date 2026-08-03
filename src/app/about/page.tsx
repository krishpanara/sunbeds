import type { Metadata } from "next";
import Image from "next/image";
import AboutIntro from "@/components/about/AboutIntro";
import ExecutiveTeam from "@/components/about/ExecutiveTeam";
import FaqSection from "@/components/about/FaqSection";
import MissionVision from "@/components/about/MissionVision";
import OurValues from "@/components/about/OurValues";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "About Us | Sunbeds",
  description: "Learn more about Sunbeds and our mission to redefine hotel distribution.",
};

export default function AboutPage() {
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
            <AboutIntro />
            <MissionVision />
            <OurValues />
            <FaqSection />
            <ExecutiveTeam />
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
