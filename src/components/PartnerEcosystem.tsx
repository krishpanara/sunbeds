import Image from "next/image";

const partners = [
  { src: "/images/partner-hotelbeds.png", alt: "hotelbeds", width: 400, height: 56 },
  { src: "/images/partner-airbnb.png", alt: "airbnb", width: 400, height: 125 },
  { src: "/images/partner-agoda.png", alt: "agoda", width: 400, height: 159 },
  { src: "/images/partner-tripcom.png", alt: "Trip.com", width: 400, height: 96 },
  { src: "/images/partner-booking.png", alt: "Booking.com", width: 500, height: 83 },
];

export default function PartnerEcosystem() {
  return (
    <section className="py-16">
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
