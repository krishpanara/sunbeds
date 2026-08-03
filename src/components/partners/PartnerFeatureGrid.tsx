import IconBadge from "./IconBadge";

const features = [
  {
    icon: "/images/icon-direct-contract.png",
    title: "Direct Contract",
    description:
      "Connect with a worldwide network of hotels and travel partners through one intelligent distribution platform.",
  },
  {
    icon: "/images/icon-workforce-white.png",
    title: "Contract Free",
    description:
      "Integrate once and unlock efficient, hassle-free connectivity across your distribution network.",
  },
  {
    icon: "/images/icon-gain-visibility.png",
    title: "Gain Visibility",
    description:
      "Increase your visibility and connect with new business opportunities across global markets.",
  },
  {
    icon: "/images/icon-network-white.png",
    title: "Accelerated Onboarding",
    description:
      "Get connected faster with a streamlined onboarding process designed for speed and simplicity.",
  },
  {
    icon: "/images/icon-rocket-white.png",
    title: "Maximize Revenue Potential",
    description:
      "Unlock new revenue opportunities through smarter distribution, direct partnerships, and competitive commercial terms.",
  },
  {
    icon: "/images/icon-smartgrid-white.png",
    title: "Smart Technology Solutions",
    description:
      "Manage your distribution with an intuitive platform that gives you greater visibility, control, and operational efficiency.",
  },
];

export default function PartnerFeatureGrid() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center gap-4 rounded-2xl border border-[#f5821f] px-6 py-8 text-center"
            >
              <IconBadge src={f.icon} size={64} />
              <h3 className="font-bold text-[#0b0e1a]">{f.title}</h3>
              <p className="text-sm text-[#0b0e1a]/60">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
