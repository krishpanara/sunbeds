import Image from "next/image";

export default function OurValues() {
  return (
    <section className="pt-14 pb-10">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="flex justify-center sm:justify-start">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f5821f] to-[#d9541f]">
            <Image src="/images/icon-values.png" alt="" width={28} height={28} />
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-extrabold tracking-wide text-[#0b0e1a] sm:text-3xl">
          OUR <span className="text-[#f5821f]">VALUES</span>
        </h2>
        <p className="mt-4 text-justify text-[#0b0e1a]/60 sm:text-left">
          To elevate hotel distribution through intelligent technology and
          trusted partnerships built on transparency, collaboration, and
          shared success — empowering hotels to maximize their e-commerce
          potential and achieve sustainable growth together.
        </p>
      </div>
    </section>
  );
}
