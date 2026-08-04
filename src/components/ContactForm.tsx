"use client";

import { useState } from "react";

const fieldClass =
  "w-full rounded-full border border-[#f5821f] bg-transparent px-5 py-3 text-sm text-[#0b0e1a] placeholder:text-[#0b0e1a]/40 focus:border-[#f5821f] focus:outline-none";

const labelClass = "mb-1.5 block text-sm font-bold text-[#0b0e1a]";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        try {
          const res = await fetch("/api/contact", {
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
      <div>
        <label className={labelClass}>Your Name</label>
        <input type="text" name="name" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Email</label>
        <input type="email" name="email" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Company</label>
        <input type="text" name="company" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Job Title</label>
        <input type="text" name="jobTitle" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Country</label>
        <input type="text" name="country" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Website</label>
        <input type="text" name="website" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Phone</label>
        <input type="tel" name="phone" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Your Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-3xl border border-[#f5821f] bg-transparent px-5 py-3 text-sm text-[#0b0e1a] placeholder:text-[#0b0e1a]/40 focus:border-[#f5821f] focus:outline-none"
        />
      </div>

      <label className="flex items-center gap-3 rounded-full border border-[#f5821f] px-5 py-3 text-sm text-[#0b0e1a]/80">
        <input type="checkbox" required className="h-4 w-4 shrink-0 accent-[#f5821f]" />
        I agree receiving communication from SunBeds
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mx-auto mt-2 w-fit rounded-full bg-gradient-to-r from-[#f5821f] to-[#ffc93f] px-10 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm text-green-600">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
