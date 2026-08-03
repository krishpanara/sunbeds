"use client";

import { useEffect, useState } from "react";

// SVG viewBox: 1000 x 500, hub at center (500, 250)
const CENTER = { x: 500, y: 250 };

type Node = {
  key: string;
  x: number;
  y: number;
  r: number;
  src: string;
  alt: string;
};

const nodes: Node[] = [
  { key: "tbo", x: 100, y: 80, r: 54, src: "/images/key-tbo.png", alt: "tbo.com" },
  { key: "cheapoair", x: 300, y: 60, r: 54, src: "/images/key-cheapoair.png", alt: "CheapOair" },
  { key: "secretescapes", x: 700, y: 60, r: 54, src: "/images/key-secretescapes.png", alt: "Secret Escapes" },
  { key: "hotelcard", x: 900, y: 80, r: 54, src: "/images/key-hotelcard.png", alt: "HotelCard" },
  { key: "yalago", x: 100, y: 420, r: 54, src: "/images/key-yalago.png", alt: "yalago" },
  { key: "cleartrip", x: 300, y: 440, r: 54, src: "/images/key-cleartrip.png", alt: "cleartrip" },
  { key: "kiwi", x: 700, y: 440, r: 54, src: "/images/key-kiwi.png", alt: "Kiwi.com" },
];

// Circuit-breaker style trace: horizontal run, 45deg chamfer, straight run into the node
function buildPath(node: Node) {
  const dx = node.x - CENTER.x;
  const dy = node.y - CENTER.y;
  const dirX = dx >= 0 ? 1 : -1;
  const dirY = dy >= 0 ? 1 : -1;
  const chamfer = Math.min(70, Math.abs(dy));
  const bendX = node.x - dirX * chamfer;
  const chamferY = CENTER.y + dirY * chamfer;
  return `M ${CENTER.x} ${CENTER.y} L ${bendX} ${CENTER.y} L ${node.x} ${chamferY} L ${node.x} ${node.y}`;
}

const PULSE_DURATION = 1.6;
const STAGGER = 0.3;

export default function KeyPartnersLogos() {
  const [lit, setLit] = useState<boolean[]>(nodes.map(() => false));

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    nodes.forEach((_, i) => {
      const delay = (i * STAGGER + PULSE_DURATION * 0.85) * 1000;
      const cycle = nodes.length * STAGGER * 1000 + PULSE_DURATION * 1000;

      const light = () =>
        setLit((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      const unlight = () =>
        setLit((prev) => {
          const next = [...prev];
          next[i] = false;
          return next;
        });

      timeouts.push(setTimeout(light, delay));
      intervals.push(
        setInterval(() => {
          unlight();
          timeouts.push(setTimeout(light, 120));
        }, cycle)
      );
    });

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <section className="pb-16 pt-4">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="text-xl font-extrabold tracking-wide text-[#0b0e1a]">KEY PARTNERS</h2>

        <div className="relative mt-8 w-full select-none">
          <div className="relative" style={{ paddingTop: "50%" /* matches viewBox 1000x500 */ }}>
            <svg viewBox="0 0 1000 500" className="absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                <filter id="kp-glow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {nodes.map((node, i) => {
                const d = buildPath(node);
                const delay = `${(i * STAGGER).toFixed(2)}s`;
                return (
                  <g key={node.key}>
                    {/* Static dim trace */}
                    <path d={d} fill="none" stroke="#c1703f" strokeWidth="1.5" strokeOpacity="0.4" />

                    {/* Animated pulse travelling from the hub out to the node */}
                    <path
                      d={d}
                      fill="none"
                      stroke="#ffc93f"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="20 1400"
                      strokeDashoffset="1400"
                      strokeOpacity="0.95"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="1400"
                        to="-20"
                        dur={`${PULSE_DURATION}s`}
                        begin={delay}
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.4 0 0.6 1"
                        keyTimes="0;1"
                      />
                      <animate
                        attributeName="stroke-opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.1;0.85;1"
                        dur={`${PULSE_DURATION}s`}
                        begin={delay}
                        repeatCount="indefinite"
                      />
                    </path>

                    {/* Ping ring on arrival */}
                    {lit[i] && (
                      <circle cx={node.x} cy={node.y} r={node.r} fill="none" stroke="#ffc93f" strokeWidth="2">
                        <animate attributeName="r" from={node.r} to={node.r + 20} dur="0.6s" fill="freeze" />
                        <animate attributeName="stroke-opacity" from="0.9" to="0" dur="0.6s" fill="freeze" />
                      </circle>
                    )}

                    {/* Node circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.r}
                      fill="#ffffff"
                      stroke={lit[i] ? "#ffc93f" : "#c1703f"}
                      strokeWidth={lit[i] ? "3.5" : "2"}
                      filter={lit[i] ? "url(#kp-glow)" : undefined}
                      style={{ transition: "stroke 0.15s, stroke-width 0.15s" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Partner logo images overlaid on top of the SVG node circles */}
            {nodes.map((node, i) => {
              const px = (node.x / 1000) * 100;
              const py = (node.y / 500) * 100;
              return (
                <div
                  key={node.key}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  style={{ left: `${px}%`, top: `${py}%`, width: "5%", height: "10%" }}
                >
                  {/* Plain img: avoids colliding with other next/image requests for the
                      same source file at a different width in the dev image optimizer */}
                  <img
                    src={node.src}
                    alt={node.alt}
                    className="h-full w-full object-contain"
                    style={{
                      filter: lit[i] ? "drop-shadow(0 0 6px #ffc93f)" : undefined,
                      transition: "filter 0.15s",
                    }}
                  />
                </div>
              );
            })}

            {/* Center backdrop so the light logo stays legible on the white page background */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
              style={{ left: "50%", top: "50%", width: "20%", height: "40%" }}
            />
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: "50%", top: "50%", width: "18%", height: "9.4%" }}
            >
              {/* Plain img: avoids colliding with other next/image requests for the
                  same source file at a different width in the dev image optimizer */}
              <img src="/images/logo.png" alt="SunBeds" className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
