import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="pt-40 pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <h1 className="text-4xl font-extrabold tracking-wide text-[#0b0e1a] sm:text-5xl">
            ABOUT US
          </h1>
          <p className="mt-5 max-w-lg text-[#0b0e1a]/60">
            Sunbeds was founded with a bold vision: to transform the future of
            hotel distribution. By connecting hotels and distribution partners
            through one intelligent platform, we simplify global connectivity,
            unlock new opportunities, and empower independent hotels and
            resorts and help the hospitality industry grow with confidence.
          </p>
        </div>

        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/about-satellite.webp"
            alt="Satellite orbiting Earth, representing global connectivity"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 520px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
