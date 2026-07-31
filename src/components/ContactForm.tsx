"use client";

import { useState } from "react";

const fieldClass =
  "w-full rounded-full border border-[#f5821f]/60 bg-transparent px-5 py-3 text-sm text-[#0b0e1a] placeholder:text-[#0b0e1a]/40 focus:border-[#f5821f] focus:outline-none";

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
        <label className="mb-1.5 block text-sm text-[#0b0e1a]/70">Your Name</label>
        <input type="text" required className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-[#0b0e1a]/70">Email</label>
        <input type="email" required className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-[#0b0e1a]/70">Company</label>
        <input type="text" className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-[#0b0e1a]/70">Job title</label>
        <input type="text" className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-[#0b0e1a]/70">Country</label>
        <input type="text" className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-[#0b0e1a]/70">Website</label>
        <input type="text" className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-[#0b0e1a]/70">Phone</label>
        <input type="tel" className={fieldClass} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-[#0b0e1a]/70">Your message</label>
        <textarea
          rows={5}
          className="w-full rounded-3xl border border-[#f5821f]/60 bg-transparent px-5 py-3 text-sm text-[#0b0e1a] placeholder:text-[#0b0e1a]/40 focus:border-[#f5821f] focus:outline-none"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-[#0b0e1a]/70">
        <input type="checkbox" className="h-4 w-4 accent-[#f5821f]" />
        I agree receiving communication from Sunbeds
      </label>

      <button
        type="submit"
        className="mt-2 w-fit rounded-full bg-[#f5821f] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d96f14]"
      >
        Send
      </button>

      {submitted && (
        <p className="text-sm text-green-600">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
      )}
    </form>
  );
}
