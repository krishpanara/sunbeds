import Image from "next/image";

const reasons = [
  {
    src: "/images/onecontract.png",
    alt: "One Contract, One Contact, One Pricing, One Technology",
  },
  {
    src: "/images/globalexpansion.png",
    alt: "Global Expansion, Global Reach, Global Distribution",
  },
  {
    src: "/images/maximizehotelrevenue.png",
    alt: "Maximize Hotel Revenue, Maximize Hotel Occupancy, Maximize Hotel's Ecommerce Business",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        {/* Heading */}
        <h2 className="font-heading text-2xl font-extrabold uppercase tracking-wide text-[#0b0e1a] sm:text-3xl md:text-[32px]">
          Why independent hotels and Resorts{" "}
          <span className="text-[#f5821f]">Choose Sunbeds</span>
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.src}
              className="relative aspect-[4/3] w-full transition-transform hover:-translate-y-1 sm:aspect-[3/2]"
            >
              <Image
                src={reason.src}
                alt={reason.alt}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 400px, 90vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
