import IconBadge from "./partners/IconBadge";

const reasons = [
  {
    icon: "/images/icon-direct-contract.png",
    lines: ["One Contract", "One Contact", "One Pricing", "One Technology"],
  },
  {
    icon: "/images/icon-gain-visibility.png",
    lines: ["Global Expansion", "Global Reach", "Global Distribution"],
  },
  {
    icon: "/images/icon-grow.png",
    lines: ["Maximize Hotel Revenue", "Maximize Hotel Occupancy", "Maximize Hotel's Ecommerce Business"],
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#faf9f7] py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h3 className="text-2xl font-semibold text-[#0b0e1a] sm:text-3xl">
          Why independent hotels and Resorts <span className="text-[#f5821f]">Choose Sunbeds</span>
        </h3>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.lines[0]}
              className="flex flex-col items-center gap-4 rounded-2xl border border-[#f5821f]/30 px-6 py-10"
            >
              <IconBadge src={r.icon} size={56} />
              <div className="flex flex-col gap-1">
                {r.lines.map((line) => (
                  <p key={line} className="font-semibold text-[#0b0e1a]">
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
