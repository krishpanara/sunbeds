const blocks = [
  {
    title: "GLOBAL HOTEL CONNECTIVITY",
    body: "Connect with a growing network of independent hotels and leading brands through one intelligent platform — expanding your reach, simplifying distribution, and creating new opportunities for growth.",
  },
  {
    title: "SMART DISTRIBUTION MANAGEMENT",
    body: "Manage your distribution with ease through an intuitive dashboard that gives you complete visibility and control in one place.",
  },
];

export default function ConnectivityText() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:px-10">
        {blocks.map((b) => (
          <div key={b.title}>
            <h3 className="text-lg font-bold text-[#0b0e1a]">{b.title}</h3>
            <p className="mt-2 max-w-2xl text-[#0b0e1a]/60">{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
