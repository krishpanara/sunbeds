import Image from "next/image";
import Link from "next/link";
import FeatureCard from "./FeatureCard";
import GlowImage from "./GlowImage";

const features = [
  {
    icon: <Image src="/images/icon-partner-management-black.png" alt="" width={44} height={44} />,
    title: "Centralized Distribution Management",
    description: "Expand your distribution while keeping every rate and room perfectly aligned.",
  },
  {
    icon: <Image src="/images/icon-revenue-black.png" alt="" width={44} height={44} />,
    title: "Grow Revenue Across Every Market",
    description: "Maximize revenue performance with smarter distribution.",
  },
  {
    icon: <Image src="/images/icon-launch-black.png" alt="" width={44} height={44} />,
    title: "Maximize Bookings Through Global Distribution",
    description: "Power your growth with a continuously evolving partner ecosystem.",
  },
  {
    icon: <Image src="/images/icon-payment-black.png" alt="" width={44} height={44} />,
    title: "Payment Assurance",
    description:
      "Enable secure, hassle-free transactions with integrated payment solutions that protect every booking from confirmation to settlement.",
  },
];

export default function HotelsSection() {
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
        <p className="text-xs font-semibold tracking-[0.2em] text-[#0b0e1a]/50">HOTELS</p>
        <h2 className="mt-3 text-2xl font-bold text-[#0b0e1a] sm:text-3xl">
          Take your hotel to the <span className="text-[#f5821f]">Next level</span>
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div className="flex flex-col gap-8">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
            <Link
              href="/hotels"
              className="w-fit rounded-full bg-[#f5821f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d96f14]"
            >
              Learn more
            </Link>
          </div>

          <div className="flex flex-col items-end gap-8">
            <GlowImage src="/images/tech-dashboard.webp" alt="Sunbeds distribution technology dashboard" />
            <GlowImage src="/images/sphere-tech.webp" alt="Secure payment technology for hotel bookings" />
          </div>
        </div>
      </div>
    </section>
  );
}
