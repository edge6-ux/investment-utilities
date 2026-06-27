import type { Metadata } from "next";
import Story from "@/components/sections/about/Story";
import Pillars from "@/components/sections/about/Pillars";
import Coverage from "@/components/sections/about/Coverage";
import Certifications from "@/components/sections/about/Certifications";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Investment Utilities & Infrastructure is a family-owned utility site work contractor rooted in North Georgia. Learn about our story, values, certifications, and six-state service area.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div
        style={{
          background: "var(--black-nav)",
          borderBottom: "3px solid var(--green)",
          padding: "5rem 8% 4.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--green)",
            marginBottom: "1rem",
          }}
        >
          Our Story
        </div>

        <h1
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.05,
            marginBottom: "1.2rem",
          }}
        >
          About{" "}
          <span style={{ color: "var(--green)" }}>Investment Utilities</span>
          <br />
          &amp; Infrastructure
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "1rem",
            lineHeight: 1.75,
            maxWidth: "580px",
            margin: "0 auto",
          }}
        >
          A family-owned utility site work company with the equipment, the crews, and the commitment
          to get the job done — every time.
        </p>
      </div>

      <Story />
      <Pillars />
      <Coverage />
      <Certifications />
      <Contact />
    </>
  );
}
