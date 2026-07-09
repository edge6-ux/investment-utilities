import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-us" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  "ROW Clearing",
  "Vegetation Management",
  "Site Preparation",
  "Storm Restoration",
  "High Voltage",
  "Solar Site Work",
];

export default function Footer() {
  return (
    <footer aria-label="Site footer" style={{ background: "var(--white)", color: "var(--text-dark)", borderTop: "3px solid var(--green)" }}>
      {/* Four-column grid */}
      <div
        style={{ borderBottom: "1px solid var(--light-gray)" }}
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-[5%] py-16 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Col 1 — Brand */}
        <div className="flex flex-col gap-5">
          <Link href="/">
            <Image
              src="/IUI_logo.jpg"
              alt="Investment Utilities & Infrastructure"
              width={220}
              height={70}
              className="h-auto w-[180px] object-contain"
            />
          </Link>
          <p style={{ color: "var(--mid-gray)", fontSize: "0.82rem", lineHeight: "1.75" }}>
            Family-owned and operated, rooted in North Georgia. Delivering dependable utility site
            work and land services across the Southeast.
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              color: "var(--green)",
              marginBottom: "1.1rem",
            }}
            className="font-semibold uppercase"
          >
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{ color: "var(--mid-gray)", fontSize: "0.85rem" }}
                  className="transition-colors duration-200 hover:text-[var(--green)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              color: "var(--green)",
              marginBottom: "1.1rem",
            }}
            className="font-semibold uppercase"
          >
            Services
          </h3>
          <ul className="flex flex-col gap-2">
            {services.map((service) => (
              <li key={service} style={{ color: "var(--mid-gray)", fontSize: "0.85rem" }}>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              color: "var(--green)",
              marginBottom: "1.1rem",
            }}
            className="font-semibold uppercase"
          >
            Contact
          </h3>
          <ul className="flex flex-col gap-3" style={{ color: "var(--mid-gray)", fontSize: "0.85rem" }}>
            <li>
              <a
                href="tel:+17705297181"
                className="transition-colors duration-200 hover:text-[var(--green)]"
              >
                (770) 529-7181
              </a>
            </li>
            <li>
              <a
                href="mailto:info@investmentutilities.com"
                className="transition-colors duration-200 hover:text-[var(--green)]"
              >
                info@investmentutilities.com
              </a>
            </li>
            <li>North Georgia</li>
            <li>
              <span style={{ color: "var(--mid-gray)", fontSize: "0.75rem", letterSpacing: "0.08em" }} className="uppercase">
                Hours
              </span>
              <br />
              24/7
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ background: "var(--off-white)", borderTop: "1px solid var(--light-gray)" }}
        className="px-[5%] py-4"
      >
        <p
          style={{ color: "var(--mid-gray)", fontSize: "0.75rem", textAlign: "center", letterSpacing: "0.04em" }}
        >
          © 2026 Investment Utilities &amp; Infrastructure. All Rights Reserved.
          &nbsp;|&nbsp;
          Family-Owned · Community-Focused · Southeast USA
        </p>
      </div>
    </footer>
  );
}
