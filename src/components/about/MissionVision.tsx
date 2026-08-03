export default function MissionVision() {
  return (
    <section className="bg-white pb-4">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#3a0f08] via-[#7a1f0a] to-[#c9481a] p-8 text-white shadow-lg sm:p-10">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(245,130,31,0.6) 45%, transparent 70%)",
            }}
          />
          <div className="relative grid gap-8 sm:grid-cols-2 sm:divide-x sm:divide-white/20">
            <div>
              <h3 className="text-lg font-bold tracking-wide">MISSION</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                To redefine hotel distribution through intelligent technology,
                connecting hotels and global distribution partners with
                solutions that drive growth, expand reach, and unlock lasting
                value. To help independent hotels and resorts fill up their
                vacant rooms and increase their occupancy rate, and maximizing
                their full ecommerce potential.
              </p>
            </div>
            <div className="sm:pl-8">
              <h3 className="text-lg font-bold tracking-wide">VISION</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                To create a more connected hospitality industry where every
                hotel and distribution partner can thrive through seamless
                collaboration and innovation, and to become the biggest
                global distribution partner for independent hotels and
                resorts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
