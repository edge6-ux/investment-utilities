"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Who We Are", href: "/#about" },
  { label: "Why Us", href: "/#why" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{ borderBottom: "2px solid var(--green)" }}
      className="sticky top-0 z-[100] flex flex-col items-center bg-white"
    >
      {/* Row 1 — Logo */}
      <div
        style={{ borderBottom: "1px solid var(--light-gray)" }}
        className="flex w-full items-center justify-center bg-white px-[5%] py-2"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/IUI_logo.jpg"
            alt="Investment Utilities & Infrastructure"
            height={64}
            width={192}
            priority
            className="h-[64px] w-auto max-w-[192px] object-contain"
          />
        </Link>
      </div>

      {/* Row 2 — Nav links + contact */}
      <div
        style={{ background: "var(--black-nav)", height: "46px" }}
        className="flex w-full items-center"
      >
        {/* Left spacer — mirrors the right contact block so links stay centered */}
        <div className="flex flex-1 items-center pl-[5%]">
          <a
            href="tel:+17705297181"
            style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.04em", color: "rgba(255,255,255,0.75)", textDecoration: "none" }}
            className="flex items-center gap-1.5 transition-colors hover:text-[var(--green)]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            (770) 529-7181
          </a>
          <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.12)", margin: "0 1.1rem" }} />
          <a
            href="mailto:info@investmentutilities.com"
            style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.04em", color: "rgba(255,255,255,0.75)", textDecoration: "none" }}
            className="flex items-center gap-1.5 transition-colors hover:text-[var(--green)]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            info@investmentutilities.com
          </a>
        </div>

        {/* Center — nav links */}
        <ul className="flex list-none">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.09em",
                  height: "46px",
                  color: pathname === href ? "var(--green)" : "rgba(255,255,255,0.85)",
                }}
                className="flex items-center px-5 font-semibold uppercase transition-colors duration-200 hover:bg-white/[0.06] hover:text-[var(--green)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — Free Quote flush to edge */}
        <div className="flex flex-1 items-center justify-end">
          <Link
            href="/#contact"
            style={{
              background: "var(--green)",
              color: "var(--black-nav)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.10em",
              height: "46px",
              paddingInline: "1.6rem",
              textDecoration: "none",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
            className="transition-colors duration-200 hover:bg-[var(--green-light)]"
          >
            Free Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
