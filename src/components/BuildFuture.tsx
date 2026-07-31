import Image from "next/image";
import Link from "next/link";

export default function BuildFuture() {
  return (
    <section className="relative overflow-hidden bg-[#fefeff] py-24 text-center">
      {/* <Image
        src="/images/lines-pattern.webp"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover opacity-25"
        sizes="100vw"
      /> */}
      <div className="relative mx-auto max-w-2xl px-6">
        <h2 className="text-3xl font-semibold text-black sm:text-4xl">
          Build the Future of <span className="text-[#f5821f]">Hotel Distribution</span>
        </h2>
        <p className="mt-5 text-black/70">
          Join Sunbeds and be part of a team that&apos;s redefining global hospitality
          through innovation, technology, and meaningful partnerships. Explore
          opportunities to grow your career while making an impact across the
          travel industry.
        </p>
        <Link
          href="/careers"
          className="mt-8 inline-block rounded-full bg-[#f5821f] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d96f14]"
        >
          Join Us
        </Link>
      </div>
    </section>
  );
}
