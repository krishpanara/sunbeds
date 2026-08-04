import Image from "next/image";

export default function Discover() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="font-heading text-2xl font-extrabold tracking-wide text-[#0b0e1a] sm:text-3xl">
          DISCOVER <span className="text-[#f5821f]">THE EXPERIENCE</span>
        </h2>
        <p className="mt-4 max-w-2xl text-[#0b0e1a]/70">
          Experience a smarter way to distribute and expand your hotel
          ecommerce through a platform designed for convenience.
        </p>

        {/* Mobile layout: image beside heading, stat in its own row below */}
        <div className="sm:hidden">
          <div className="mt-16 flex flex-row items-start gap-3">
            <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/globe-network.png"
                alt="Global distribution network"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>

            <h3 className="font-heading text-xs font-extrabold tracking-normal text-[#0b0e1a]">
              CREATING CONNECTIONS
              <br />
              <span className="text-[#f5821f]">WITHOUT BOUNDARIES</span>
            </h3>
          </div>

          <div className="mt-20 flex flex-row items-center gap-6">
            <p className="shrink-0 text-4xl font-bold text-[#0b0e1a]">10k+</p>

            <div>
              <p className="font-heading font-extrabold tracking-wide text-[#0b0e1a]">DISTRIBUTION &amp; ACTIVE BUYERS</p>
              <p className="mt-1 max-w-md text-sm text-[#0b0e1a]/60">
                Distributing Hotel Inventory Across B2B Travel Networks, OTAs, Tour
                Operators, and Agencies
              </p>
              <div className="mt-3 h-0.5 w-36 bg-[#f5821f]" />
            </div>
          </div>
        </div>

        {/* Desktop/tablet layout: heading above, image + stat together in one row */}
        <div className="hidden sm:block">
          <h3 className="mt-16 font-heading text-2xl font-extrabold tracking-wide text-[#0b0e1a]">
            CREATING CONNECTIONS <span className="text-[#f5821f]">WITHOUT BOUNDARIES</span>
          </h3>

          <div className="mt-12 flex flex-row items-center gap-10">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/globe-network.png"
                alt="Global distribution network"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>

            <div className="flex flex-row items-center gap-3">
              <p className="shrink-0 text-5xl font-bold text-[#0b0e1a]">10k+</p>

              <div>
                <p className="font-heading font-extrabold tracking-wide text-[#0b0e1a]">DISTRIBUTION &amp; ACTIVE BUYERS</p>
                <p className="mt-1 max-w-md text-sm text-[#0b0e1a]/60">
                  Distributing Hotel Inventory Across B2B Travel Networks, OTAs, Tour
                  Operators, and Agencies
                </p>
                <div className="mt-3 h-0.5 w-36 bg-[#f5821f]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
