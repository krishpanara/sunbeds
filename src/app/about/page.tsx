import type { Metadata } from "next";
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
        <AboutIntro />
        <MissionVision />
        <OurValues />
        <FaqSection />
        <ExecutiveTeam />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
