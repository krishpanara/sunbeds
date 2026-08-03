import Image from "next/image";
import Link from "next/link";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "/images/icon-partner-management-black.png",
    title: "Centralized Distribution Management",
    description:
      "Expand your distribution while keeping every rate and room perfectly aligned.",
  },
  {
    icon: "/images/icon-revenue-black.png",
    title: "Grow Revenue Across Every Market",
    description:
      "Maximize revenue performance with smarter distribution.",
  },
  {
    icon: "/images/icon-launch-black.png",
    title: "Maximize Bookings Through Global Distribution",
    description:
      "Power your growth with a continuously evolving partner ecosystem.",
  },
  {
    icon: "/images/icon-payment-black.png",
    title: "Payment Assurance",
    description:
      "Enable secure, hassle-free transactions with integrated payment solutions that protect every booking from confirmation to settlement.",
  },
];

export default function HotelsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}
      <Image
        src="/images/lines-pattern.webp"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover opacity-[0.07]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <h2 className="max-w-4xl text-3xl font-extrabold uppercase leading-tight text-[#111] md:text-5xl">
          TAKE YOUR HOTELS TO{" "}
          <span className="text-[#F58220]">
            THE NEXT LEVEL
          </span>
        </h2>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}

          <div>

            <div className="space-y-12">

              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                />
              ))}

            </div>

            <Link
              href="/hotels"
              className="mt-14 inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-[#F5A623] via-[#FDBB2D] to-[#FFD84D] px-10 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Learn More
            </Link>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center lg:justify-end">

            <div
              className="
              relative
              h-[520px]
              w-[320px]
              sm:h-[580px]
              sm:w-[380px]
              lg:h-[620px]
              lg:w-[450px]
            "
            >

              {/* Bottom Image */}

              <div className="absolute bottom-0 left-0 z-10">

                <div
                  className="
                  overflow-hidden
                  rounded-[30px]
                  border-2
                  border-[#F58220]
                  bg-white
                  shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                "
                >

                  <Image
                    src="/images/sphere-tech.webp"
                    alt="Payment Technology"
                    width={260}
                    height={340}
                    className="
                    h-[300px]
                    w-[220px]
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

              <div className="absolute right-0 top-0 z-20">

                <div
                  className="
                  overflow-hidden
                  rounded-[30px]
                  border-2
                  border-[#F58220]
                  bg-white
                  shadow-[0_30px_70px_rgba(0,0,0,0.22)]
                "
                >

                  <Image
                    src="/images/tech-dashboard.webp"
                    alt="Technology Dashboard"
                    width={285}
                    height={410}
                    className="
                    h-[340px]
                    w-[240px]
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

        </div>

      </div>

    </section>
  );
}