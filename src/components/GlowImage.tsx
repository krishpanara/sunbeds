import Image from "next/image";

type GlowImageProps = {
  src: string;
  alt: string;
};

export default function GlowImage({ src, alt }: GlowImageProps) {
  return (
    <div className="relative aspect-3/4 w-full max-w-55 overflow-hidden rounded-2xl border-2 border-[#f5821f] shadow-[0_0_25px_rgba(245,130,31,0.35)]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="220px" />
    </div>
  );
}
