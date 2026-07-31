import Image from "next/image";

export default function Logo() {
  return (
    <span className="relative block h-9 w-36 sm:h-14 sm:w-56">
      <Image
        src="/images/logo.png"
        alt="Sunbeds — Your Center for Distribution"
        fill
        priority
        className="object-contain object-left"
        sizes="(min-width: 640px) 224px, 144px"
      />
    </span>
  );
}
