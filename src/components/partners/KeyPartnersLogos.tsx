import Image from "next/image";

const partners = [
  { src: "/images/key-tbo.png", alt: "tbo.com — Travel Simplified" },
  { src: "/images/key-cheapoair.png", alt: "CheapOair" },
  { src: "/images/key-secretescapes.png", alt: "Secret Escapes" },
  { src: "/images/key-hotelcard.png", alt: "HotelCard" },
  { src: "/images/key-yalago.png", alt: "yalago" },
  { src: "/images/key-cleartrip.png", alt: "cleartrip" },
  { src: "/images/key-kiwi.png", alt: "Kiwi.com" },
];

export default function KeyPartnersLogos() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="text-xl font-bold text-[#0b0e1a]">KEY PARTNERS</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-x-14 gap-y-8">
          {partners.map((p) => (
            <span key={p.alt} className="relative block h-9 w-32 sm:h-11 sm:w-36">
              <Image src={p.src} alt={p.alt} fill className="object-contain" sizes="144px" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
