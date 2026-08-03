import Image from "next/image";

export default function EcosystemDiagram() {
  return (
    <div className="relative aspect-1057/479 w-full overflow-hidden  bg-[#0b1220] shadow-lg">
      <Image
        src="/images/diagram.png"
        alt="SunBeds integration ecosystem connecting OTAs, GDS, B2B, Holiday Travel, Airlines, and Regional Suppliers"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 900px, 100vw"
      />
    </div>
  );
}
