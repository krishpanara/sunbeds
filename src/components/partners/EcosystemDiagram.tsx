"use client";

import { useEffect, useState } from "react";

// viewBox: 1177 x 599 (60px margin added around the original 1057 x 479 layout
// so node glow/ping rings near the edges don't get clipped by overflow-hidden)
const VIEW_W = 1177;
const VIEW_H = 599;
const CENTER = { x: 582, y: 292 };
const LOGO_LEFT = 405;
const LOGO_RIGHT = 760;

type Node = {
  key: string;
  x: number;
  y: number;
  r: number;
  side: "left" | "right";
  lines: string[];
};

const nodes: Node[] = [
  { key: "otas", x: 122, y: 236, r: 54, side: "left", lines: ["OTAs"] },
  { key: "gds", x: 122, y: 351, r: 54, side: "left", lines: ["GDS"] },
  { key: "b2b", x: 187, y: 451, r: 54, side: "left", lines: ["B2b"] },
  { key: "holiday", x: 983, y: 138, r: 57, side: "right", lines: ["Holiday", "travel"] },
  { key: "airlines", x: 1071, y: 238, r: 54, side: "right", lines: ["Airlines"] },
  { key: "regional", x: 1058, y: 353, r: 54, side: "right", lines: ["Regional", "Suppliers"] },
];

// Circuit-breaker style trace: straight run, 45deg chamfer, straight run into the logo
function buildPath(node: Node) {
  const portX = node.side === "left" ? LOGO_LEFT : LOGO_RIGHT;
  const portY = CENTER.y + (node.y - CENTER.y) * 0.35;
  const nodeEdgeX = node.side === "left" ? node.x + node.r + 6 : node.x - node.r - 6;
  const diag = Math.abs(portY - node.y);
  const straightIntoLogo = 36;
  const bendX =
    node.side === "left" ? portX - straightIntoLogo - diag : portX + straightIntoLogo + diag;
  const chamferX = node.side === "left" ? bendX + diag : bendX - diag;
  return `M ${nodeEdgeX} ${node.y} L ${bendX} ${node.y} L ${chamferX} ${portY} L ${portX} ${portY}`;
}

const PULSE_DURATION = 1.6;
const STAGGER = 0.32;

export default function EcosystemDiagram() {
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
    <div className="relative aspect-1177/599 w-full overflow-hidden bg-[#0b1220] shadow-lg">
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <filter id="eco-glow" x="-60%" y="-60%" width="220%" height="220%">
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
              <path d={d} fill="none" stroke="#c1703f" strokeWidth="1.5" strokeOpacity="0.45" />

              {/* Animated pulse travelling from the logo out to the node */}
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
                fill="#c1703f"
                stroke={lit[i] ? "#ffc93f" : "transparent"}
                strokeWidth="3"
                filter={lit[i] ? "url(#eco-glow)" : undefined}
                style={{ transition: "stroke 0.15s" }}
              />

              {/* Label */}
              <text
                x={node.x}
                y={node.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffffff"
                fontSize="17"
                fontWeight="700"
                style={{ fontFamily: "inherit" }}
              >
                {node.lines.map((line, li) => (
                  <tspan
                    key={li}
                    x={node.x}
                    dy={li === 0 ? `${(node.lines.length - 1) * -0.6}em` : "1.2em"}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Center SunBeds logo */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${(CENTER.x / VIEW_W) * 100}%`,
          top: `${(CENTER.y / VIEW_H) * 100}%`,
          width: `${((LOGO_RIGHT - LOGO_LEFT) / VIEW_W) * 100}%`,
          height: `${(90 / VIEW_H) * 100}%`,
        }}
      >
        {/* Plain img: avoids colliding with other next/image requests for the
            same source file at a different width in the dev image optimizer */}
        <img
          src="/images/logo.png"
          alt="SunBeds"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
