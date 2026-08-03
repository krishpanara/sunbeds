import Image from "next/image";
import Link from "next/link";

export default function BuildFuture() {
  return (
    <section className="relative flex min-h-205 items-start overflow-hidden bg-[#0b0e1a] pt-20 pb-48 text-center">
      <Image
        src="/images/buildfuture-skyline.webp"
        alt="City skyline at sunset"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />
      <div className="relative mx-auto max-w-2xl px-6">
        <h2 className="text-3xl font-bold uppercase text-white drop-shadow-md sm:text-4xl">
          Build the Future of <span className="text-[#f5821f]">Hotel Distribution</span>
        </h2>
        <p className="mt-5 text-white drop-shadow-md">
          Join SunBeds and be part of a team that&apos;s redefining global hospitality
          through innovation, technology, and meaningful partnerships. Explore
          opportunities to grow your career while making an impact across the
          travel industry.
        </p>
        <Link
          href="/careers"
          className="mt-8 inline-block rounded-full bg-[#f5821f] px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#d96f14]"
        >
          Join Us
        </Link>
      </div>
    </section>
  );
}
