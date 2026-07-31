import Link from "next/link";

export default function BuildConnectionCta() {
  return (
    <section className="bg-[#faf9f7] pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="rounded-2xl border border-[#f5821f]/60 bg-white px-8 py-10 text-center sm:text-left">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="text-lg font-bold text-[#0b0e1a]">Let&apos;s Build the Right Connection</h3>
              <p className="mt-2 max-w-xl text-sm text-[#0b0e1a]/60">
                Need assistance with integrations, onboarding, or distribution?
                Our experts are ready to help you connect to the SunBeds
                network quickly and seamlessly.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-[#f5821f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d96f14]"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
