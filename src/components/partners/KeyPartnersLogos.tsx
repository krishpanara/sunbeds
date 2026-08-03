"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const partners = [
  { src: "/images/key-tbo.png", alt: "tbo.com" },
  { src: "/images/key-cheapoair.png", alt: "CheapOair" },
  { src: "/images/key-secretescapes.png", alt: "Secret Escapes" },
  { src: "/images/key-hotelcard.png", alt: "HotelCard" },
  { src: "/images/key-yalago.png", alt: "yalago" },
  { src: "/images/key-cleartrip.png", alt: "cleartrip" },
  { src: "/images/key-kiwi.png", alt: "Kiwi.com" },
];

// SVG viewBox: 1000 x 500, logo at center (500, 250)
const CENTER = { x: 500, y: 250 };

// Manually placed node positions around the center
const nodePositions = [
  { x: 100, y: 80 },
  { x: 300, y: 60 },
  { x: 700, y: 60 },
  { x: 900, y: 80 },
  { x: 100, y: 420 },
  { x: 300, y: 440 },
  { x: 700, y: 440 },
];

// Build an L-shaped (circuit-style) path from center to each node
function buildPath(to: { x: number; y: number }) {
  const mid = to.x; // vertical bend at node's x
  return `M ${CENTER.x} ${CENTER.y} L ${mid} ${CENTER.y} L ${to.x} ${to.y}`;
}

const PULSE_DURATION = 1.8; // seconds per pulse
const STAGGER = 0.28; // seconds between each line's pulse start

export default function KeyPartnersLogos() {
  const [lit, setLit] = useState<boolean[]>(partners.map(() => false));
  const svgRef = useRef<SVGSVGElement>(null);

  // Light up each node when its pulse arrives
  useEffect(() => {
    partners.forEach((_, i) => {
      const delay = (i * STAGGER + PULSE_DURATION * 0.85) * 1000;
      const interval = partners.length * STAGGER * 1000 + PULSE_DURATION * 1000;

      // initial trigger
      const t = setTimeout(() => {
        setLit((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, delay);

      // repeat
      const iv = setInterval(() => {
        setLit((prev) => {
          const next = [...prev];
          next[i] = false;
          return next;
        });
        setTimeout(() => {
          setLit((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, 120);
      }, interval);

      return () => {
        clearTimeout(t);
        clearInterval(iv);
      };
    });
  }, []);

  const totalCycle = `${(partners.length * STAGGER + PULSE_DURATION).toFixed(2)}s`;

  return (
    <section className="pb-16 pt-4">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="text-xl font-extrabold tracking-wide text-[#0b0e1a]">KEY PARTNERS</h2>

        <div className="relative mt-8 w-full select-none">
          {/* SVG circuit layer */}
          <svg
            ref={svgRef}
            viewBox="0 0 1000 500"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              {/* Glow filter for lit nodes */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Pulse gradient moving along path */}
              <linearGradient id="pulse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f5821f" stopOpacity="0" />
                <stop offset="50%" stopColor="#ffc93f" stopOpacity="1" />
                <stop offset="100%" stopColor="#f5821f" stopOpacity="0" />
              </linearGradient>
            </defs>

            {partners.map((_, i) => {
              const d = buildPath(nodePositions[i]);
              const delay = `${(i * STAGGER).toFixed(2)}s`;
              return (
                <g key={i}>
                  {/* Static dim trace */}
                  <path
                    d={d}
                    fill="none"
                    stroke="#f5821f"
                    strokeWidth="1.2"
                    strokeOpacity="0.18"
                  />

                  {/* Animated pulse dot travelling along the path */}
                  <path
                    d={d}
                    fill="none"
                    stroke="#ffc93f"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="18 1000"
                    strokeDashoffset="1000"
                    strokeOpacity="0.95"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="1000"
                      to="-18"
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

                  {/* Node ring */}
                  <circle
                    cx={nodePositions[i].x}
                    cy={nodePositions[i].y}
                    r="38"
                    fill="#0b1220"
                    stroke={lit[i] ? "#ffc93f" : "#f5821f"}
                    strokeWidth={lit[i] ? "2.5" : "1.2"}
                    strokeOpacity={lit[i] ? 1 : 0.35}
                    filter={lit[i] ? "url(#glow)" : undefined}
                    style={{ transition: "stroke 0.15s, stroke-width 0.15s, stroke-opacity 0.15s" }}
                  />

                  {/* Ping ring when lit */}
                  {lit[i] && (
                    <circle
                      cx={nodePositions[i].x}
                      cy={nodePositions[i].y}
                      r="38"
                      fill="none"
                      stroke="#ffc93f"
                      strokeWidth="1.5"
                    >
                      <animate attributeName="r" from="38" to="56" dur="0.6s" fill="freeze" />
                      <animate attributeName="stroke-opacity" from="0.8" to="0" dur="0.6s" fill="freeze" />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Center logo ring */}
            <circle
              cx={CENTER.x}
              cy={CENTER.y}
              r="52"
              fill="#0b1220"
              stroke="#f5821f"
              strokeWidth="1.8"
              strokeOpacity="0.6"
            />
            <circle cx={CENTER.x} cy={CENTER.y} r="52" fill="none" stroke="#ffc93f" strokeWidth="1.2" strokeOpacity="0.25">
              <animate attributeName="r" values="52;62;52" dur={totalCycle} repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.25;0.6;0.25" dur={totalCycle} repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Absolutely positioned partner logos over SVG nodes */}
          <div
            className="relative"
            style={{ paddingTop: "50%" /* matches viewBox 1000x500 */ }}
          >
            {partners.map((p, i) => {
              const px = (nodePositions[i].x / 1000) * 100;
              const py = (nodePositions[i].y / 500) * 100;
              return (
                <div
                  key={p.alt}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  style={{ left: `${px}%`, top: `${py}%`, width: "7.2%", height: "14.4%" }}
                >
                  <span className="relative block h-full w-full">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      className="object-contain"
                      sizes="80px"
                      style={{
                        filter: lit[i]
                          ? "brightness(1.15) drop-shadow(0 0 6px #ffc93f)"
                          : "brightness(0.85)",
                        transition: "filter 0.15s",
                      }}
                    />
                  </span>
                </div>
              );
            })}

            {/* Center SunBeds logo */}
            <div
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              style={{ left: "50%", top: "50%", width: "10%", height: "20%" }}
            >
              <span className="relative block h-full w-full">
                <Image
                  src="/images/logo.png"
                  alt="SunBeds"
                  fill
                  className="object-contain"
                  sizes="100px"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
