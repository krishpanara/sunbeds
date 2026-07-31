import Image from "next/image";

const leftNodes = [
  { label: "OTAs", top: "20%" },
  { label: "GDS", top: "50%" },
  { label: "B2b", top: "80%" },
];

const rightNodes = [
  { label: "Holiday travel", top: "18%" },
  { label: "Airlines", top: "50%" },
  { label: "Regional Suppliers", top: "82%" },
];

export default function EcosystemDiagram() {
  return (
    <div className="relative aspect-2/1 w-full overflow-hidden rounded-2xl bg-[#0b1220] shadow-lg">
      <svg
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <g stroke="#f5821f" strokeWidth="0.3" fill="none">
          <path d="M9 10 H30 V25" />
          <path d="M9 25 H30" />
          <path d="M9 40 H30 V25" />
          <path d="M91 9 H70 V25" />
          <path d="M91 25 H70" />
          <path d="M91 41 H70 V25" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <span className="relative block h-9 w-36">
          <Image src="/images/logo.png" alt="SunBeds" fill className="object-contain" sizes="144px" />
        </span>
      </div>

      {leftNodes.map((n) => (
        <div
          key={n.label}
          className="absolute flex -translate-y-1/2 items-center gap-2"
          style={{ left: "3%", top: n.top }}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c9683f] text-[10px] font-bold text-white sm:h-14 sm:w-14 sm:text-xs">
            {n.label}
          </span>
        </div>
      ))}

      {rightNodes.map((n) => (
        <div
          key={n.label}
          className="absolute flex -translate-y-1/2 items-center gap-2"
          style={{ right: "3%", top: n.top }}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c9683f] text-center text-[9px] font-bold leading-tight text-white sm:h-14 sm:w-14 sm:text-[11px]">
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
