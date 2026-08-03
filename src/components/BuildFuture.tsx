import Image from "next/image";
import Link from "next/link";

export default function BuildFuture() {
  return (
    <section className="relative flex min-h-[560px] items-start overflow-hidden pt-20 pb-40 text-center sm:min-h-[640px] sm:pt-24 sm:pb-48">
      {/* Background image */}
      <Image
        src="/images/buildfuture-skyline.webp"
        alt="City skyline at sunset"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Soft overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <h2 className="font-heading text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-md sm:text-3xl md:text-4xl">
          Build the Future of Hotel Distribution
        </h2>

        <p className="mt-5 text-base leading-relaxed text-white/95 drop-shadow-md sm:text-lg">
          Join SunBeds and be part of a team that&apos;s redefining global
          hospitality through innovation, technology, and meaningful
          partnerships. Explore opportunities to grow your career while making
          an impact across the travel industry.
        </p>

        <Link
          href="/careers"
          className="mt-8 inline-block rounded-full bg-[#f5c518] px-14 py-2 text-base font-semibold text-[#f1f1f3] shadow-lg transition-colors hover:bg-[#e6b800] sm:mt-[150px]"
        >
          Join Us.
        </Link>
      </div>
    </section>
  );
}