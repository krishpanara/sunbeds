import Image from "next/image";
import EcosystemDiagram from "./EcosystemDiagram";

export default function TechEcosystemSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-40 pb-16">
      <Image
        src="/images/lines-pattern.webp"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none object-cover opacity-[0.06]"
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <h1 className="text-2xl font-bold text-[#0b0e1a] sm:text-3xl">
          OUR INTEGRATION ECOSYSTEM WITH SUNBEDS
        </h1>
        <p className="mt-4 max-w-2xl text-[#0b0e1a]/60">
          SunBeds connects hospitality B2B buyers and connectivity platforms
          through one seamless distribution ecosystem. With a single
          connection, travel partners gain access to real-time hotel
          inventory, while properties streamline distribution, expand their
          global reach, and unlock new revenue opportunities with greater
          efficiency and confidence.
        </p>

        <div className="mt-10">
          <EcosystemDiagram />
        </div>
      </div>
    </section>
  );
}
