"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
  { href: "/distribution-partners", label: "Distribution Partners" },
  { href: "/hotels", label: "Hotels" },
  { href: "/tech-partners", label: "Tech Partners" },
];

type NavbarProps = {
  transparent?: boolean;
};

export default function Navbar({ transparent }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`z-30 w-full ${
        transparent ? "absolute top-0 left-0 bg-transparent" : "relative bg-white"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-10">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul
          className={`hidden items-center gap-6 text-xs font-semibold tracking-wide lg:flex ${
            transparent ? "text-white" : "text-[#0b0e1a]"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="uppercase transition-colors hover:text-[#f5821f]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-full border border-[#f5821f] bg-[#f5821f] px-5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#d96f14]"
          >
            LOGIN
          </Link>
          <Link
            href="/register"
            className="rounded-full border border-[#f5821f] bg-[#f5821f] px-5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#d96f14]"
          >
            REGISTER
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors lg:hidden ${
            transparent ? "border-white/60 text-white" : "border-[#0b0e1a]/20 text-[#0b0e1a]"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 border-t border-black/5 bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-semibold text-[#0b0e1a]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 uppercase transition-colors hover:text-[#f5821f]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 border-t border-black/5 px-6 py-4">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full border border-[#f5821f] bg-[#f5821f] px-5 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-[#d96f14]"
            >
              LOGIN
            </Link>
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full border border-[#f5821f] bg-[#f5821f] px-5 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-[#d96f14]"
            >
              REGISTER
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
