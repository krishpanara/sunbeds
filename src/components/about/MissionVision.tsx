export default function MissionVision() {
  return (
    <section className="pb-4">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div
          className="relative overflow-hidden rounded-2xl p-8 text-white shadow-lg sm:p-10"
          style={{
            background: `
              radial-gradient(ellipse 55% 120% at 100% 0%, rgba(255,255,255,0.95) 0%, rgba(255,210,140,0.6) 35%, transparent 65%),
              linear-gradient(to right, #4a1008 0%, #7a1c0a 30%, #a83318 55%, #c85a28 75%, #d4763a 100%)
            `,
          }}
        >
          <div className="relative grid gap-8 sm:grid-cols-2 sm:divide-x sm:divide-white/20">
            <div>
              <h3 className="text-lg font-extrabold tracking-wide">MISSION</h3>
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
              <h3 className="text-lg font-extrabold tracking-wide">VISION</h3>
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
