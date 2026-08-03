import Image from "next/image";

type IconBadgeProps = {
  src: string;
  size?: number;
};

export default function IconBadge({ src, size = 64 }: IconBadgeProps) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb347] to-[#e0631a] shadow-sm"
      style={{ height: size, width: size }}
    >
      <Image src={src} alt="" width={size * 0.5} height={size * 0.5} />
    </span>
  );
}
