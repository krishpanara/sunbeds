import Image from "next/image";
import Link from "next/link";
import FeatureCard from "./FeatureCard";
import GlowImage from "./GlowImage";

const features = [
  {
    icon: "/images/icon-partner-management-black.png",
    title: "Integrated Partner Management",
    description:
      "Connect directly with a global network of independent hotels, leading hotel brands, and trusted channel managers — all through one seamless platform.",
  },
  {
    icon: "/images/icon-revenue-black.png",
    title: "Launch Faster, Scale Smarter",
    description:
      "Accelerate your distribution with intelligent connectivity that minimizes complexity and gets your business to market faster.",
  },
  {
    icon: "/images/icon-launch-black.png",
    title: "Unlock More Hotel Opportunities",
    description:
      "Connect with a growing network of hotels through a streamlined onboarding experience designed for speed and scalability.",
  },
  {
    icon: "/images/icon-payment-black.png",
    title: "Drive Better Commercial Performance",
    description:
      "Build stronger hotel relationships, negotiate competitive rates, and streamline operations through one connected platform.",
  },
];

export default function DistributionPartnersSection() {
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
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#0b0e1a]/50">
          DISTRIBUTION PARTNERS
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[#0b0e1a] sm:text-3xl">
          Optimize <span className="text-[#f5821f]">Direct Partnerships</span>
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-8">
            <GlowImage src="/images/team-laptops.webp" alt="Team collaborating on Sunbeds partner integrations" />
            <GlowImage src="/images/gears-illustration.png" alt="Sunbeds partner integration technology" />
          </div>

          <div className="flex flex-col gap-8">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
            <Link
              href="/distribution-partners"
              className="w-fit rounded-full bg-[#f5821f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d96f14]"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
