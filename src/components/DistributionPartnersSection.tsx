import Image from "next/image";
import Link from "next/link";
import FeatureCard from "./FeatureCard";


const features = [
  {

    icon: "/images/icon-distribution-black.png",
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
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="font-heading text-lg font-extrabold uppercase tracking-wide text-[#0b0e1a] sm:text-xl">
          Distribution Partners
        </p>
        <h2 className="mt-1 text-2xl font-semibold text-[#0b0e1a] sm:text-3xl">
          Optimize Direct Partnerships
        </h2>

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT */}

          <div className="relative order-2 flex justify-center lg:order-0 lg:justify-start">
            <div
              className="
              relative
              flex
              flex-row
              gap-4
              h-auto
              w-full
              max-w-80
              sm:h-145
              sm:w-95
              sm:max-w-none
              lg:h-155
              lg:w-112.5
            "
            >
              {/* Bottom Image */}

              <div className="relative flex-1 sm:absolute sm:bottom-0 sm:left-0 sm:z-10">
                <div
                  className="
                  overflow-hidden
                  rounded-[20px]
                  border-2
                  border-[#F58220]
                  bg-white
                  shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                  sm:rounded-[30px]
                "
                >
                  <Image
                    src="/images/team-laptops.webp"
                    alt="Team collaborating on Sunbeds partner integrations"
                    width={260}
                    height={340}
                    className="
                    h-52.5
                    w-full
                    object-cover
                    sm:h-[330px]
                    sm:w-[240px]
                    lg:h-[340px]
                    lg:w-[260px]
                  "
                  />
                </div>
              </div>

              {/* Top Image */}

              <div className="relative flex-1 sm:absolute sm:right-0 sm:top-0 sm:z-20">
                <div
                  className="
                  overflow-hidden
                  rounded-[20px]
                  border-2
                  border-[#F58220]
                  bg-white
                  shadow-[0_30px_70px_rgba(0,0,0,0.22)]
                  sm:rounded-[30px]
                "
                >
                  <Image
                    src="/images/gears-illustration.png"
                    alt="Sunbeds partner integration technology"
                    width={285}
                    height={410}
                    className="
                    h-52.5
                    w-full
                    object-cover
                    sm:h-[380px]
                    sm:w-[260px]
                    lg:h-[410px]
                    lg:w-[285px]
                  "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="order-1 flex flex-col gap-8 lg:order-0">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
            <Link
              href="/distribution-partners"
              className="mt-2 inline-flex h-14 w-fit items-center justify-center rounded-full bg-gradient-to-r from-[#F5A623] via-[#FDBB2D] to-[#FFD84D] px-10 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
