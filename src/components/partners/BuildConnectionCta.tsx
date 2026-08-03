import Link from "next/link";

export default function BuildConnectionCta() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="rounded-2xl border border-[#f5821f] bg-white px-8 py-10 text-center">
          <h3 className="text-lg font-bold text-[#0b0e1a]">Let&apos;s Build the Right Connection</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-[#0b0e1a]/60">
            Need assistance with integrations, onboarding, or distribution?
            Our experts are ready to help you connect to the SunBeds network
            quickly and seamlessly.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#f5821f] to-[#ffc93f] px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
          >
            Request a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
