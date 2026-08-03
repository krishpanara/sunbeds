import Image from "next/image";
import Link from "next/link";

export default function Fingertips() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="text-3xl font-bold text-[#0b0e1a] sm:text-4xl">
            EVERYTHING AT YOUR <span className="text-[#f5821f]">FINGERTIPS</span>
          </h2>
          <p className="mt-4 max-w-lg text-[#0b0e1a]/60">
            One platform. Endless possibilities. A seamless experience from start
            to finish.
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-[#0b0e1a]">RELIABILITY</h3>
            <p className="mt-3 max-w-lg text-[#0b0e1a]/60">
              Empowering travelers to book with confidence and enabling
              accommodation partners to connect with a wider audience.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-[#f5821f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d96f14]"
            >
              Request a Demo
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-3/2 w-full max-w-md">
          <Image
            src="/images/fingertips-diagram.png"
            alt="One platform connecting potential guests, OTAs, and hotels through a single contract"
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 480px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
