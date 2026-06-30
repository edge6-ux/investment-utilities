"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="resp-hero"
      style={{
        height: "calc(100vh - 230px)",
        display: "flex",
        alignItems: "center",
        padding: "4rem 8%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image via Next.js Image for optimization */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        quality={100}
        style={{ objectFit: "cover", objectPosition: "center 80%" }}
      />

      {/* Dark overlay so text stays readable */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "680px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            marginBottom: "1.5rem",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: "38px",
              height: "2px",
              background: "var(--green)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            Investment Utilities <span style={{ color: "var(--green)" }}>&amp;</span> Infrastructure
          </span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.0,
            marginBottom: "1.2rem",
          }}
        >
          <span style={{ color: "var(--green)", display: "block" }}>Utility Site Work</span>
          <span style={{ color: "var(--white)", display: "block" }}>Done Right.</span>
        </h1>

        <p
          style={{
            fontSize: "0.88rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "2.5rem",
          }}
        >
          Family-Owned · North Georgia &amp; Southeast · 24/7 Emergency Response
        </p>

        <a href="#contact" className="hero-btn">
          Request a Free Quote
        </a>
      </div>
    </section>
  );
}
