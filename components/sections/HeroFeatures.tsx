import Image from "next/image";

const GREEN = "#5fd61e";

const features = [
  { label: "Right-of-Way Clearing", src: "/row-clearing.png", size: 45 },
  { label: "Vegetation Management", src: "/vegetation.png", size: 45 },
  { label: "Site Preparation", src: "/site-prep.png", size: 45, scale: 1.75 },
  { label: "Storm Restoration", src: "/storm.png", size: 45, scale: 1.6 },
];

export default function HeroFeatures() {
  return (
    <section
      aria-label="Core services overview"
      className="resp-hero-features"
      style={{
        background: "var(--white)",
        padding: "1rem 8%",
        borderBottom: "1px solid var(--light-gray)",
      }}
    >
      <div
        className="resp-hero-features-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {features.map(({ label, src, size, scale = 1 }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                margin: "0 auto 0.35rem",
                borderRadius: "50%",
                border: `2px solid ${GREEN}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <Image
                src={src}
                alt=""
                width={size}
                height={size}
                aria-hidden="true"
                style={{
                  width: size,
                  height: size,
                  objectFit: "contain",
                  transform: `scale(${scale})`,
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-barlow-condensed), sans-serif",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "var(--text-dark)",
                lineHeight: 1.25,
                letterSpacing: "0.02em",
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
