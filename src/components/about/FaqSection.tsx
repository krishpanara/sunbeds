"use client";

import { useState } from "react";

const faqs = [
  {
    question: "WHAT IS SUNBEDS?",
    answer:
      "SunBeds is a global hotel distribution platform that connects hotels with trusted travel partners through one intelligent ecosystem.",
  },
  {
    question: "WHY CHOOSE SUNBEDS?",
    answer:
      "For smarter distribution, stronger partnerships, and greater opportunities. SunBeds connects hotels and travel partners through one intelligent platform, simplifying global distribution with seamless connectivity, trusted partnerships, and technology that empowers businesses to expand their reach and drive sustainable growth.",
  },
  {
    question: "HOW DOES SUNBEDS WORK?",
    answer:
      "SunBeds brings hotels and travel partners together through one intelligent distribution platform. Hotels can seamlessly showcase their inventory to a trusted global network of travel businesses, while distribution partners gain efficient access to quality accommodation worldwide — all through a single, connected ecosystem.",
  },
  {
    question: "HOW CAN HOTELS GROW WITH SUNBEDS",
    list: [
      "Expand Your Global Reach",
      "Connect with Trusted Travel Partners",
      "Access New Markets",
      "Strengthen Strategic Partnerships",
      "Streamline Distribution Management",
    ],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    () => new Set(faqs.map((_, i) => i))
  );

  const toggle = (i: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <section className="pt-4 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-2xl font-extrabold tracking-wide text-[#0b0e1a] sm:text-3xl">FAQs</h2>
        <p className="mt-4 text-[#0b0e1a]/60">
          Everything you need to know about SunBeds. Whether you&apos;re a
          hotel looking to expand your global reach or a travel partner
          seeking seamless access to quality accommodation, find answers to
          the most frequently asked questions about SunBeds, our platform, and
          how we help businesses grow through smarter hotel distribution.
        </p>

        <div className="mt-10 flex flex-col gap-5">
          {faqs.map((faq, i) => {
            const isOpen = openIndexes.has(i);
            return (
              <div
                key={faq.question}
                className="relative overflow-hidden rounded-2xl text-white shadow-lg"
                style={{
                  background: `
                    radial-gradient(ellipse 55% 120% at 100% 0%, rgba(255,255,255,0.95) 0%, rgba(255,210,140,0.6) 35%, transparent 65%),
                    linear-gradient(to right, #4a1008 0%, #7a1c0a 30%, #a83318 55%, #c85a28 75%, #d4763a 100%)
                  `,
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="relative flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading font-bold tracking-wide"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronIcon open={isOpen} />
                </button>
                {isOpen && (
                  <div className="relative px-6 pb-6 text-sm text-white/90">
                    {faq.answer && <p>{faq.answer}</p>}
                    {faq.list && (
                      <ul className="flex flex-col gap-1.5">
                        {faq.list.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
