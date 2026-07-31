import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact us | Sunbeds",
  description: "Get in touch with the Sunbeds team.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden py-16">
          <Image
            src="/images/lines-pattern.webp"
            alt=""
            fill
            aria-hidden
            className="pointer-events-none object-cover opacity-[0.06]"
            sizes="100vw"
          />
          <div className="relative mx-auto max-w-2xl px-6 lg:px-10">
            <ContactForm />
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
