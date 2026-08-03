"use client";

import { useState } from "react";

const fieldClass =
  "w-full rounded-full border border-[#f5821f] bg-transparent px-5 py-3 text-sm text-[#0b0e1a] placeholder:text-[#0b0e1a]/40 focus:border-[#f5821f] focus:outline-none";

const labelClass = "mb-1.5 block text-sm font-bold text-[#0b0e1a]";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label className={labelClass}>Your Name</label>
        <input type="text" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Email</label>
        <input type="email" required className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Company</label>
        <input type="text" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Job Title</label>
        <input type="text" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Country</label>
        <input type="text" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Website</label>
        <input type="text" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Phone</label>
        <input type="tel" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass}>Your Message</label>
        <textarea
          rows={5}
          className="w-full rounded-3xl border border-[#f5821f] bg-transparent px-5 py-3 text-sm text-[#0b0e1a] placeholder:text-[#0b0e1a]/40 focus:border-[#f5821f] focus:outline-none"
        />
      </div>

      <label className="flex items-center gap-3 rounded-full border border-[#f5821f] px-5 py-3 text-sm text-[#0b0e1a]/80">
        <input type="checkbox" className="h-4 w-4 shrink-0 accent-[#f5821f]" />
        I agree receiving communication from SunBeds
      </label>

      <button
        type="submit"
        className="mx-auto mt-2 w-fit rounded-full bg-gradient-to-r from-[#f5821f] to-[#ffc93f] px-10 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
      >
        Send
      </button>

      {submitted && (
        <p className="text-center text-sm text-green-600">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      )}
    </form>
  );
}
