"use client";

import Image from "next/image";
import { useState } from "react";

const team = [
  {
    name: "Reginald Go",
    credentials: "MBA, MPA",
    role: "Founder & CEO",
    company: "SunBeds Technology",
    photo: "/images/team-rafael.webp",
    bio: [
      "Reginald Go is a hospitality entrepreneur and business leader with extensive international experience in hotel operations, technology, and digital distribution. He is the Founder and CEO of SunBeds Technology, and the Founder of Cocotel Hotels & Resorts, an online hotel management company with 300+ properties across the Philippines and Indonesia, as well as Great Beds Network and Nusatel Hospitality Group in Jakarta.",
      "Reginald began his hospitality career with leading global hotel groups including Accor, IHG Hotels & Resorts, and Marriott International, with professional experience across Qatar and Abu Dhabi. He graduated Cum Laude from Trinity University of Asia and holds an MBA from James Cook University, Australia.",
      "Drawing from his international hotel experience, Reginald has built businesses focused on hospitality technology, digital distribution, revenue management, and hotel growth. Through SunBeds Technology, he continues to develop solutions that help hotels expand their global reach, maximise online distribution, and compete more effectively in the digital marketplace.",
    ],
  },
  {
    name: "Rafael Daniel Jouwena",
    credentials: "MBA, MCom",
    role: "Chairman & Co-Founder",
    company: "SunBeds Technology",
    photo: "/images/team-reginald.webp",
    bio: [
      "Rafael Daniel Jouwena serves as Chairman of SunBeds, where he provides strategic direction, corporate governance, and leadership as the company builds a technology-driven hotel distribution network across Southeast Asia.",
      "Before entering the hospitality and technology sectors, Rafael developed extensive experience in finance, investment management, financial research, and corporate operations. He previously held leadership and analytical roles at FactSet, JPMorgan Chase, SC Johnson, and Thomson Reuters. His professional background includes fund accounting, investment research, financial analysis, team management, and business strategy.",
      "Rafael later brought this experience into entrepreneurship as Co-founder and Chief Executive Officer of Cocotel, a hospitality technology and hotel management company focused on helping independent hotels improve their online distribution, revenue performance, and operational capabilities.",
      "His experience in growing Cocotel and developing businesses in hotel management, leasing, financing, and distribution provides SunBeds with a strong foundation for regional expansion. As Chairman, Rafael focuses on SunBeds' long-term strategy, fundraising, partnerships, governance, and the development of a scalable business model connecting independent hotels with travel agencies, tour operators, and global distribution partners.",
      "Rafael holds a master's degree from the University of New South Wales in Australia, a Master of Business Administration from Ateneo de Manila University, and a Bachelor of Business Administration from De La Salle University.",
      "His vision for SunBeds is to build a trusted Asian hotel distribution platform that gives independent accommodation providers greater access to regional and international demand while delivering competitive inventory and reliable technology to travel partners.",
    ],
  },
  {
    name: "Steve Sy",
    credentials: "",
    role: "Managing Director",
    company: "SunBeds Technology",
    photo: "/images/team-steve.webp",
    bio: [
      "Steve Sy is the Founder and CEO of Great Deals E-Commerce Corporation, one of the Philippines' leading e-commerce enablers and e-distributors. An accomplished entrepreneur and business leader, he has built Great Deals from an online retail business into a technology-driven organisation providing e-commerce, distribution, fulfilment, analytics, and digital solutions to leading brands.",
      "A graduate of De La Salle University, Steve has been recognised as EY Philippines Technology Entrepreneur of the Year, a Mansmith Innovation Awardee, and a recipient of the CEO Award for Entrepreneurial Excellence. He is also an Endeavor Entrepreneur and an Alibaba Business School E-Founder Fellow.",
      "As a Director, Steve contributes extensive expertise in e-commerce, technology, digital distribution, business development, and scaling businesses, bringing a strong entrepreneurial perspective to the organisation's continued growth and digital transformation.",
    ],
  },
  {
    name: "Richelle Panulaya",
    credentials: "",
    role: "Chief Commercial Officer",
    company: "SunBeds Technology",
    photo: "/images/missrichelle.png",
    bio: [
      "Richelle Panulaya is the Country Manager of Cocotel, bringing over a decade of experience across hospitality operations, revenue management, and hotel e-commerce. She currently leads commercial strategy, operations, and revenue performance for the group.",
      "With over a decade of experience in hotel revenue management, forecasting, and operations, Richelle has built a career spanning some of the most respected names in Philippine and regional hospitality, including RedDoorz, Alphaland Development, Shangri-La Hotels and Resorts, Frasers Hospitality, and Seda Hotels. This diverse experience has given her a well-rounded foundation in revenue optimization, forecasting, digital marketing, and guest experience management, equipping her with a sharp commercial instinct across both branded and independent hospitality environments.",
      "Richelle combines strategic revenue expertise with hands-on operational leadership, consistently driving profitability, efficiency, and guest experience excellence across every property she has worked with. Her ability to translate data into actionable strategy has made her a trusted leader in maximizing performance while building resilient, future-ready hospitality operations.",
    ],
  },
];

export default function ExecutiveTeam() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="text-center text-2xl font-bold text-[#0b0e1a] sm:text-3xl">
          Meet the Executive Team
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {team.map((member, i) => (
            <button
              key={member.name}
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="relative block h-24 w-24 overflow-hidden rounded-full border-2 border-[#f5821f] sm:h-28 sm:w-28">
                <Image src={member.photo} alt={member.name} fill className="object-cover" sizes="112px" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-[#0b0e1a]">
                  {member.name}
                  {member.credentials ? ` ${member.credentials}` : ""}
                </span>
                <span className="mt-1.5 inline-block rounded-full bg-[#f5821f] px-3 py-1 text-[10px] font-semibold text-white">
                  {member.role}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`overflow-hidden rounded-2xl border border-[#f5821f]/60 transition-all ${
                openIndex === i ? "block" : "hidden"
              }`}
            >
              <div className="px-6 py-6 sm:px-8">
                <div className="flex items-center gap-4">
                  <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#f5821f]">
                    <Image src={member.photo} alt={member.name} fill className="object-cover" sizes="64px" />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0b0e1a]">
                      {member.name}
                      {member.credentials ? `, ${member.credentials}` : ""}
                    </h3>
                    <p className="text-sm font-semibold text-[#f5821f]">
                      {member.role} — {member.company}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3 text-sm text-[#0b0e1a]/70">
                  {member.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
