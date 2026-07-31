import Link from "next/link";
import IconBadge from "./IconBadge";

const steps = [
  {
    icon: "/images/icon-apply.png",
    title: "Apply",
    description: "Submit your registration and begin your journey with SunBeds.",
  },
  {
    icon: "/images/icon-integrate.png",
    title: "Integrate",
    description: "Connect your systems through one intelligent platform.",
  },
  {
    icon: "/images/icon-activate.png",
    title: "Activate",
    description: "Complete your setup and customize your distribution preferences.",
  },
  {
    icon: "/images/icon-grow.png",
    title: "Grow",
    description: "Go live and connect with a global network of hotels and travel partners.",
  },
];

export default function OnboardingProcess() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="text-xl font-bold text-[#0b0e1a]">OUR ONBOARDING PROCESS</h2>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-[#f5821f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d96f14]"
        >
          Contact us
        </Link>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.title}
              className="flex items-center gap-4 rounded-2xl border border-[#f5821f]/30 px-6 py-6"
            >
              <IconBadge src={s.icon} size={56} />
              <div>
                <h3 className="font-bold text-[#0b0e1a]">{s.title}</h3>
                <p className="mt-1 text-sm text-[#0b0e1a]/60">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
