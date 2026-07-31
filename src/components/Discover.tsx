import Image from "next/image";

export default function Discover() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <Image
        src="/images/lines-pattern.webp"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover opacity-[0.07]"
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <h2 className="text-2xl font-bold text-[#0b0e1a] sm:text-3xl">
          DISCOVER <span className="text-[#f5821f]">THE EXPERIENCE</span>
        </h2>
        <p className="mt-4 max-w-2xl text-[#0b0e1a]/70">
          Experience a smarter way to distribute and expand your hotel
          ecommerce through a platform designed for convenience.
        </p>

        <h3 className="mt-16 text-2xl font-bold text-[#0b0e1a]">
          CREATING CONNECTIONS <span className="text-[#f5821f]">WITHOUT BOUNDERIES</span>
        </h3>

        <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-32">
            <Image
              src="/images/globe-network.png"
              alt="Global distribution network"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>

          <p className="shrink-0 text-4xl font-bold text-[#0b0e1a] sm:text-5xl">10k+</p>

          <div>
            <p className="font-bold text-[#0b0e1a]">DISTRIBUTION &amp; ACTIVE BUYERS</p>
            <p className="mt-1 max-w-md text-sm text-[#0b0e1a]/60">
              Distributing to B2B, Tour Operators, Closed User Groups, OTA and
              Agencies Network/Retail Travel Agencies
            </p>
            <div className="mt-3 h-0.5 w-36 bg-[#f5821f]" />
          </div>
        </div>
      </div>
    </section>
  );
}
