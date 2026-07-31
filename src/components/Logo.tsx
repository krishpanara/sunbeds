import Image from "next/image";

export default function Logo() {
  return (
    <span className="relative block h-14 w-56">
      <Image
        src="/images/logo.png"
        alt="Sunbeds — Your Center for Distribution"
        fill
        priority
        className="object-contain object-left"
        sizes="224px"
      />
    </span>
  );
}
