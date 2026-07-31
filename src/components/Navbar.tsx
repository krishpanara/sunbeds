import Link from "next/link";
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
  return (
    <header
      className={`w-full z-30 ${
        transparent ? "absolute top-0 left-0 bg-transparent" : "relative bg-white"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-10">
        <Link href="/">
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

        <div className="flex items-center gap-3">
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
      </nav>
    </header>
  );
}
