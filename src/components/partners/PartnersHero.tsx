import Image from "next/image";
import Link from "next/link";

const ctaClass =
  "inline-block rounded-full bg-gradient-to-r from-[#f5821f] to-[#ffc93f] px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90";

export default function PartnersHero() {
  return (
    <section className="pt-40 pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h1 className="whitespace-nowrap text-base font-extrabold tracking-wide text-[#0b0e1a] sm:text-lg lg:text-xl">
              DISTRIBUTION NETWORK ACTIVE BUYERS
            </h1>
            <p className="mt-2 text-base font-semibold text-[#0b0e1a]">
              One Platform for Direct Hotel
            </p>
            <Link href="/contact" className={`mt-5 ${ctaClass}`}>
              Request a demo
            </Link>

            <div className="mt-10">
              <h2 className="text-xl font-extrabold tracking-wide text-[#0b0e1a]">OUR PARTNERS</h2>
              <p className="mt-4 max-w-lg text-[#0b0e1a]/60">
                Expand your global network and connect with trusted distribution
                partners through Sunbeds&apos; intelligent connectivity. Access
                new markets, strengthen your distribution strategy, and unlock
                opportunities designed to maximize your property&apos;s
                e-commerce potential — while maintaining greater transparency,
                control, and flexibility at every step.
              </p>
              <Link href="/contact" className={`mt-6 ${ctaClass}`}>
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/satelightimage.png"
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
