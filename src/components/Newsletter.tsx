import Image from "next/image";

const fieldClass =
  "w-full rounded-full border border-[#f5821f] bg-[#e8e8e8] px-5 py-3 text-sm text-[#0b0e1a] placeholder:text-[#0b0e1a]/50 focus:outline-none";

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
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Company Name*" className={fieldClass} />
          <input type="text" placeholder="Country*" className={fieldClass} />
          <input type="text" placeholder="Your Name*" className={fieldClass} />
          <input type="email" placeholder="Email*" className={fieldClass} />

          <div className="mt-1 flex flex-col gap-2 text-xs text-white/80">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 shrink-0 appearance-none rounded-full bg-white checked:bg-[#f5821f]"
              />
              I agree receiving communications from SunBeds
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 shrink-0 appearance-none rounded-full bg-white checked:bg-[#f5821f]"
              />
              I accept the{" "}
              <a href="/privacy-policy" className="text-[#f5821f] underline">
                Privacy Policy and Terms and Conditions
              </a>{" "}
              of SunBeds.
            </label>
          </div>

          <button
            type="button"
            className="mt-2 w-fit rounded-full bg-gradient-to-r from-[#f5821f] to-[#ffc93f] px-8 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
          >
            Subscribe
          </button>
        </div>

        <div className="flex items-start justify-center lg:justify-end">
          <h3 className="text-2xl font-semibold text-white lg:text-3xl">
            Subscribe to our <span className="text-[#f5821f]">Newsletter</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
