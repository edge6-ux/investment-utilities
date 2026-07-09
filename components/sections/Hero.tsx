import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="resp-hero hero-section"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "2rem 8%",
        position: "relative",
        flex: "1 1 auto",
        minHeight: 0,
      }}
    >
      {/* Desktop background (landscape ROW clearing) */}
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        quality={100}
        className="hidden md:block"
        style={{ objectFit: "cover", objectPosition: "center 80%" }}
      />

      {/* Mobile background (portrait transmission tower) */}
      <Image
        src="/hero-bg-mobile.png"
        alt=""
        fill
        priority
        quality={90}
        className="block md:hidden"
        style={{ objectFit: "cover", objectPosition: "center 30%" }}
      />

      {/* Dark overlay — desktop fades left-to-right; mobile fades bottom-to-top */}
      <div
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        aria-hidden="true"
        className="block md:hidden"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.25) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="hero-content" style={{ position: "relative", zIndex: 2, maxWidth: "680px" }}>
        <div
          className="justify-center md:justify-start"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            marginBottom: "1.5rem",
          }}
        >
          <span
            aria-hidden="true"
            className="hidden md:block"
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
          className="mb-[1.2rem] md:mb-[1.75rem]"
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.0,
          }}
        >
          <span style={{ color: "var(--green)", display: "block" }}>Utility Site Work</span>
          <span style={{ color: "var(--white)", display: "block" }}>Done Right.</span>
        </h1>

        <p
          className="block md:hidden"
          style={{
            fontSize: "0.88rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "2rem",
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
