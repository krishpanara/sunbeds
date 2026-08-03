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
      <Navbar theme="dark" />
      <main className="flex-1">
        <section className="relative flex min-h-[560px] items-center overflow-hidden bg-[#05070f] pt-40 pb-24 sm:min-h-[640px]">
          <Image
            src="/images/placeholder-lines-bg.png"
            alt=""
            fill
            priority
            aria-hidden
            className="pointer-events-none object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
            <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-[#f5821f]">{title.split(" ").slice(-1)}</span>
            </h1>
            <p className="mt-5 text-white/70">{description}</p>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
