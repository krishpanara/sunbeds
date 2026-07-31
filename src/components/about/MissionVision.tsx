const cards = [
  {
    title: "MISSION",
    body: "To redefine hotel distribution through intelligent technology, connecting hotels and global distribution partners with solutions that drive growth, expand reach, and unlock lasting value. To help independent hotels and resorts fill up their vacant rooms and increase their occupancy rate, and maximize their full ecommerce potential.",
  },
  {
    title: "VISION",
    body: "To create a more connected hospitality industry where every hotel and distribution partner can thrive through seamless collaboration and innovation, and to become the biggest global distribution partner for independent hotels and resorts.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-white pb-4">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl bg-gradient-to-br from-[#f5821f] via-[#c9481a] to-[#3a1610] p-8 text-white shadow-lg"
            >
              <h3 className="text-lg font-bold tracking-wide">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
