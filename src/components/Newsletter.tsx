import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#05070f] py-16">
      <Image
        src="/images/newsletter-bg.webp"
        alt=""
        fill
        aria-hidden
        className="object-cover opacity-90"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070f]/10 via-[#05070f]/40 to-[#05070f]/80" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Company Name*"
            className="rounded-full border border-[#f5821f]/60 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f5821f] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Country*"
            className="rounded-full border border-[#f5821f]/60 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f5821f] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Your Name*"
            className="rounded-full border border-[#f5821f]/60 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f5821f] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email*"
            className="rounded-full border border-[#f5821f]/60 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-[#f5821f] focus:outline-none"
          />

          <div className="col-span-2 flex flex-col gap-2 text-xs text-white/70">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-3.5 w-3.5 accent-[#f5821f]" />
              I agree receiving communications from SUNBEDS
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-3.5 w-3.5 accent-[#f5821f]" />
              I accept the Privacy Policy and Terms and Conditions of Roibos.
            </label>
          </div>

          <button
            type="button"
            className="col-span-2 mt-2 w-fit rounded-full bg-[#f5821f] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d96f14]"
          >
            Subscribe
          </button>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <h3 className="text-2xl font-semibold text-white lg:text-3xl">
            Subscribe to our <span className="text-[#f5821f]">Newsletter</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
