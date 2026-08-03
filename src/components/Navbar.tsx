"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/distribution-partners", label: "Distribution Solutions" },
  { href: "/tech-partners", label: "Tech Partners" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

type NavbarProps = {
  theme?: "dark" | "light";
};

export default function Navbar({ theme = "light" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <header className="absolute inset-x-0 top-0 z-30 w-full bg-transparent">
      {!isDark && (
        <Image
          src="/images/header-bg.jpg"
          alt=""
          fill
          priority
          aria-hidden
          className="pointer-events-none -z-10 object-cover"
          sizes="100vw"
        />
      )}
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-7 lg:px-10 lg:py-9">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <ul
          className={`hidden items-center gap-6 font-heading text-xs font-bold tracking-wide lg:flex ${
            isDark ? "text-white" : "text-white"
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
            href="#"
            className="rounded-full border border-[#f5821f] bg-[#f5821f] px-5 py-1.5 font-heading text-xs font-bold tracking-wide text-white transition-colors hover:bg-[#d96f14]"
          >
            LOGIN
          </Link>
          <Link
            href="#"
            className="rounded-full border border-[#f5821f] bg-[#f5821f] px-5 py-1.5 font-heading text-xs font-bold tracking-wide text-white transition-colors hover:bg-[#d96f14]"
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
            isDark ? "border-white/60 text-white" : "border-white/60 text-white"
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
        <div className="absolute inset-x-0 top-full z-40 border-t border-white/10 bg-[#0b0e1a] shadow-lg lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4 font-heading text-sm font-bold tracking-wide text-white">
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
          <div className="flex items-center gap-3 border-t border-white/10 px-6 py-4">
            <Link
              href="#"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full border border-[#f5821f] bg-[#f5821f] px-5 py-2 text-center font-heading text-xs font-bold tracking-wide text-white transition-colors hover:bg-[#d96f14]"
            >
              LOGIN
            </Link>
            <Link
              href="#"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full border border-[#f5821f] bg-[#f5821f] px-5 py-2 text-center font-heading text-xs font-bold tracking-wide text-white transition-colors hover:bg-[#d96f14]"
            >
              REGISTER
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
