import Image from "next/image";

const partners = [
  { src: "/images/partner-hotelbeds.png", alt: "hotelbeds", width: 382, height: 54 },
  { src: "/images/partner-airbnb.png", alt: "airbnb", width: 270, height: 85 },
  { src: "/images/partner-agoda.png", alt: "agoda", width: 229, height: 92 },
  { src: "/images/partner-tripcom.png", alt: "Trip.com", width: 362, height: 88 },
  { src: "/images/partner-booking.png", alt: "Booking.com", width: 441, height: 74 },
];

export default function PartnerEcosystem() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h3 className="text-xl font-semibold text-[#0b0e1a] sm:text-2xl">
          Powering a Trusted <span className="text-[#f5821f]">Partner Ecosystem</span>
        </h3>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((p) => (
            <Image
              key={p.alt}
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              className="h-8 w-auto object-contain opacity-90 transition-opacity hover:opacity-100 sm:h-10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
