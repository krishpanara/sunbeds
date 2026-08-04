import Image from "next/image";

export default function HubIllustration() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#c9683f] shadow-lg sm:aspect-[2/1]">
          <Image
            src="/images/distributionpartners.png"
            alt="SunBeds distribution hub connecting B2B wholesalers, booking engines, travel buyers, travel agencies, metasearch, and inventory integration"
            fill
            className="object-contain p-6 sm:p-10"
            sizes="(min-width: 1024px) 1000px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
