import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-40 pb-24">
          <Image
            src="/images/lines-pattern.webp"
            alt=""
            fill
            aria-hidden
            className="pointer-events-none object-cover opacity-[0.06]"
            sizes="100vw"
          />
          <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
            <h1 className="text-3xl font-semibold text-[#0b0e1a] sm:text-4xl">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-[#f5821f]">{title.split(" ").slice(-1)}</span>
            </h1>
            <p className="mt-5 text-[#0b0e1a]/60">{description}</p>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
