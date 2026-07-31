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
    question: "HOW CAN HOTELS GROW WITH SUNBEDS?",
    list: [
      "Expand Your Global Reach",
      "Connect with Trusted Travel Partners",
      "Access New Markets",
      "Strengthen Strategic Partnerships",
      "Streamline Distribution Management",
    ],
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-2xl font-bold text-[#0b0e1a] sm:text-3xl">FAQs</h2>
        <p className="mt-4 text-[#0b0e1a]/60">
          Everything you need to know about SunBeds. Whether you&apos;re a
          hotel looking to expand your global reach or a travel partner
          seeking seamless access to quality accommodation, find answers to
          the most frequently asked questions about SunBeds, our platform, and
          how we help businesses grow through smarter hotel distribution.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[#f5821f]/60"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-bold text-[#0b0e1a]"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <span
                    className={`shrink-0 text-[#f5821f] transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-[#0b0e1a]/70">
                    {faq.answer && <p>{faq.answer}</p>}
                    {faq.list && (
                      <ul className="flex flex-col gap-1.5">
                        {faq.list.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f5821f]" />
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
