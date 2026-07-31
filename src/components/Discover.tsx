import Image from "next/image";

const stats = [
  {
    icon: "/images/icon-distribution-black.png",
    value: "10k+",
    title: "Distribution network & Active Buyers",
    description:
      "Distributing to B2B, Tour Operators, Closed User Groups, OTA and Agencies Network/Retail Travel Agencies",
  },
  {
    icon: "/images/icon-channel-black.png",
    value: "50+",
    title: "Channel Managers",
    description: "Direct access and integration through Sunbeds",
  },
];

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
        <p className="text-sm font-bold tracking-wide text-[#0b0e1a]">
          DISCOVER <span className="text-[#f5821f]">THE EXPERIENCE</span>
        </p>
        <h2 className="mt-4 text-2xl font-bold text-[#0b0e1a] sm:text-3xl">
          Modern Technology &amp; Intelligent Solutions
        </h2>
        <p className="mt-2 max-w-2xl font-semibold text-[#0b0e1a]/80">
          Experience a smarter way to explore and book through a platform
          designed for convenience.
        </p>

        <h3 className="mt-16 text-2xl font-bold text-[#0b0e1a]">
          Creating Connections <span className="text-[#f5821f]">Without Boundaries</span>
        </h3>

        <div className="mt-8 flex flex-col gap-10">
          {stats.map((s) => (
            <div key={s.title} className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center">
                  <Image src={s.icon} alt="" width={48} height={48} />
                </div>
                <p className="text-4xl font-bold text-[#0b0e1a]">{s.value}</p>
              </div>
              <div className="sm:ml-4">
                <p className="font-bold text-[#0b0e1a]">{s.title}</p>
                <p className="mt-1 max-w-md text-sm text-[#0b0e1a]/60">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
