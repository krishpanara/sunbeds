import Image from "next/image";
import Link from "next/link";

export default function PartnersHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-40 pb-16">
      <Image
        src="/images/lines-pattern.webp"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover opacity-[0.06]"
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#0b0e1a]/50">
          DISTRIBUTION NETWORK &amp; ACTIVE BUYERS
        </p>
        <h1 className="mt-3 max-w-xl text-2xl font-bold text-[#0b0e1a] sm:text-3xl">
          One Platform for Direct Hotel Connectivity
        </h1>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-[#0b0e1a]">OUR PARTNERS</h2>
            <p className="mt-4 max-w-lg text-[#0b0e1a]/60">
              Expand your global network and connect with trusted distribution
              partners through Sunbeds&apos; intelligent connectivity. Access
              new markets, strengthen your distribution strategy, and unlock
              opportunities designed to maximize your property&apos;s
              e-commerce potential — while maintaining greater transparency,
              control, and flexibility at every step.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-[#f5821f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d96f14]"
            >
              Contact us
            </Link>
          </div>

          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/partners-satellite.webp"
              alt="Satellites orbiting Earth, representing global connectivity"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
