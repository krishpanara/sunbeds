import { GlobalReachIcon, OneContractIcon, OneTechIcon } from "./icons";

const reasons = [
  { icon: <OneContractIcon />, title: "One Contract" },
  { icon: <GlobalReachIcon />, title: "Global expansion, Global reach" },
  { icon: <OneTechIcon />, title: "One Technology" },
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
              key={r.title}
              className="flex flex-col items-center gap-4 rounded-2xl border border-[#f5821f]/30 px-6 py-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5821f]/10">
                {r.icon}
              </div>
              <p className="font-semibold text-[#0b0e1a]">{r.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
