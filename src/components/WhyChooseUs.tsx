import IconBadge from "./partners/IconBadge";

const reasons = [
  {
    lines: ["One Contract", "One Contact", "One Pricing", "One Technology"],
  },
  {
    lines: ["Global Expansion", "Global Reach", "Global Distribution"],
  },
  {
    lines: [
      "Maximize Hotel Revenue",
      "Maximize Hotel Occupancy",
      "Maximize Hotel's Ecommerce Business",
    ],
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
        <div className="mt-12 flex flex-wrap justify-center gap-38">
          {reasons.map((reason) => (
            <div
              key={reason.lines[0]}
              className="flex w-64 flex-col items-center justify-center rounded-2xl border border-[#f5821f]/40 bg-white px-4 py-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-2">
                {reason.lines.map((line) => (
                  <p
                    key={line}
                    className="text-[15px] font-normal leading-snug text-[#0b0e1a] sm:text-base"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

