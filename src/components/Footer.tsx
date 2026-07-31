import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const footerLinks = [
  { href: "/hotels", label: "Hotels" },
  { href: "/distribution-partners", label: "Distribution Partners" },
  { href: "/tech-partners", label: "Tech Partners" },
  { href: "/faqs", label: "FAQs" },
  { href: "/success-cases", label: "Success Cases" },
  { href: "/contact", label: "Contact" },
  { href: "/announcements", label: "Company Announcements" },
];

const socials = [
  { href: "https://facebook.com", label: "Facebook", icon: "social-facebook-glyph" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "social-linkedin-glyph" },
  { href: "https://instagram.com", label: "Instagram", icon: "social-instagram-glyph" },
  { href: "https://youtube.com", label: "YouTube", icon: "social-youtube-glyph" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <Logo />
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-base">+34 123 456 789</p>
            <p className="text-base">Email@Sunbeds.com</p>
            <div className="mt-2 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white transition-colors hover:border-[#f5821f] hover:bg-[#f5821f]"
                >
                  <span className="relative block h-4 w-4">
                    <Image src={`/images/${s.icon}.png`} alt="" fill className="object-contain" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <ul className="flex flex-col gap-5 text-base">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white transition-colors hover:text-[#f5821f]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-[#f5821f]" />

        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-white/70 sm:flex-row sm:items-center">
          <p>2026 Sunbeds. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/cookies-policy" className="hover:text-white">
              Cookies Policy
            </Link>
            <Link href="/legal-notice" className="hover:text-white">
              Legal notice
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
