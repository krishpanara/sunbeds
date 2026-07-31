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

export default function PartnerLogoStrips() {
  return (
    <section className="bg-[#faf9f7] py-16">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        <h3 className="text-xl font-bold text-[#0b0e1a]">
          500+ Independent Hotel &amp; Chains <span className="text-[#f5821f]">Connected</span>
        </h3>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {hotelChains.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-20 w-36 items-center justify-center rounded-xl bg-white p-3 shadow-sm"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={70}
                className="max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-xl font-bold text-[#0b0e1a]">
          Integrated with <span className="text-[#f5821f]">Tech Partners</span>
        </h3>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {techPartners.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={70}
              className="h-9 w-auto object-contain sm:h-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
