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

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 py-24 text-left lg:px-10 lg:py-32">
        <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          The Next Generation of
          <br />
          <span className="text-[#faf8f6]">Hospitality Solutions</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm text-white/70 sm:text-base">
          Sunbeds is a next-generation hotel distribution platform that brings hotels
          and global distribution partners together through one intelligent
          connection. Our technology enables direct, transparent, and efficient
          distribution, giving hoteliers greater control, and market reach to grow
          revenue with confidence.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#f5821f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d96f14]"
          >
            Request a Free Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
