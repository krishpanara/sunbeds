"use client";

import Image from "next/image";
import { useState } from "react";

const fieldClass =
  "w-full rounded-full border border-[#f5821f] bg-[#e8e8e8] px-5 py-3 text-sm text-[#0b0e1a] placeholder:text-[#0b0e1a]/50 focus:outline-none";

type Status = "idle" | "submitting" | "success" | "error";

export default function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
        <form
          className="order-2 flex flex-col gap-4 lg:order-1"
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus("submitting");
            setErrorMessage("");

            const form = e.currentTarget;
            const data = Object.fromEntries(new FormData(form).entries());

            try {
              const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });

              if (!res.ok) {
                const body = await res.json().catch(() => null);
                throw new Error(body?.error || "Something went wrong. Please try again.");
              }

              setStatus("success");
              form.reset();
            } catch (err) {
              setStatus("error");
              setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
            }
          }}
        >
          <input
            type="text"
            name="company"
            placeholder="Company Name*"
            required
            className={fieldClass}
          />
          <input type="text" name="country" placeholder="Country*" required className={fieldClass} />
          <input type="text" name="name" placeholder="Your Name*" required className={fieldClass} />
          <input type="email" name="email" placeholder="Email*" required className={fieldClass} />

          <div className="mt-1 flex flex-col gap-2 text-xs text-white/80">
            <label className="flex items-start gap-2 sm:items-center">
              <input
                type="checkbox"
                required
                className="h-4 w-4 shrink-0 appearance-none rounded-full bg-white checked:bg-[#f5821f]"
              />
              I agree receiving communications from SunBeds
            </label>
            <label className="flex items-start gap-2 sm:items-center">
              <input
                type="checkbox"
                required
                className="h-4 w-4 shrink-0 appearance-none rounded-full bg-white checked:bg-[#f5821f]"
              />
              I accept the{" "}
              <a href="" className="text-[#fffbf8]">
                Privacy Policy and Terms and Conditions
              </a>{" "}
              of SunBeds.
            </label>
          </div>

          <div className="mt-2 flex justify-center lg:justify-end">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-fit rounded-full bg-gradient-to-r from-[#f5821f] to-[#ffc93f] px-15 py-2 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Subscribing…" : "Subscribe"}
            </button>
          </div>

          {status === "success" && (
            <p className="text-center text-sm text-green-400 lg:text-right">
              Thanks for subscribing — you&apos;re on the list!
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400 lg:text-right">{errorMessage}</p>
          )}
        </form>

        <div className="order-1 flex items-start justify-center lg:order-2 lg:justify-end">
          <h3 className="text-2xl font-semibold text-white lg:text-3xl">
            Subscribe to our <span className="text-[#faf8f7]">Newsletter</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
