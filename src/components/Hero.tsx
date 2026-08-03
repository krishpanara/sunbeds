import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05070f]">
      <Image
        src="/images/hero-earth.webp"
        alt="Earth from space at sunrise"
        fill
        priority
        className="object-cover object-bottom opacity-90"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070f]/70 via-[#05070f]/30 to-[#05070f]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 pb-24 pt-32 text-left lg:px-10 lg:pb-32 lg:pt-44">
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          The Next Generation of
          <br />
          <span className="text-[#faf8f6]">Hospitality Solutions</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm text-white/70 sm:text-base">
          SunBeds is the next-generation hotel distribution platform connecting
          properties to global markets through one intelligent ecosystem. Powered by
          seamless PMS, Channel Manager, and distribution technology, we simplify
          connectivity, strengthen control, and unlock smarter, scalable revenue
          growth.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#f5821f] px-7 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-[#d96f14]"
          >
            Request a Free Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
