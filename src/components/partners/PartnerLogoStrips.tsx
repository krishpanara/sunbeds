import Image from "next/image";

const hotelChains = [
  { src: "/images/chain-el-pueblo.png", alt: "El Pueblo de Hermano Resort and Events" },
  { src: "/images/chain-melia.png", alt: "Melia Hotel" },
  { src: "/images/chain-cocotel.png", alt: "Cocotel Group" },
  { src: "/images/chain-brittany.png", alt: "Brittany Hotel Villar City" },
  { src: "/images/chain-seamaster.png", alt: "Sea Master Beach Resort" },
  { src: "/images/chain-clover.png", alt: "The Clover Hotel Angeles" },
  { src: "/images/chain-valentine.png", alt: "Valentine Hotel" },
];

const techPartners = [
  { src: "/images/tech-staah.png", alt: "STAAH" },
  { src: "/images/tech-yanolja.png", alt: "Yanolja" },
  { src: "/images/tech-hotellink.png", alt: "HotelLink" },
];

const cardClass =
  "flex h-20 w-36 shrink-0 items-center justify-center rounded-xl p-3";

export default function PartnerLogoStrips() {
  const doubled = [...hotelChains, ...hotelChains];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">

        {/* Hotel Chains — rolling marquee */}
        <h3 className="text-xl font-bold text-[#0b0e1a]">
          500+ Independent Hotel &amp; Chains <span className="text-[#f5821f]">Connected</span>
        </h3>
        <div className="mt-8 overflow-hidden">
          <div className="animate-marquee flex gap-6" style={{ width: "max-content" }}>
            {doubled.map((logo, i) => (
              <div key={`${logo.alt}-${i}`} className={cardClass}>
                <span className="relative block h-full w-full">
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="140px" />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Partners — static grid, no animation */}
        <h3 className="mt-16 text-xl font-bold text-[#0b0e1a]">
          Integrated with <span className="text-[#f5821f]">Tech Partners</span>
        </h3>
        <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap">
          {techPartners.map((logo) => (
            <div key={logo.alt} className="flex h-20 w-44 items-center justify-center rounded-xl p-4">
              <span className="relative block h-full w-full">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="176px" />
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
